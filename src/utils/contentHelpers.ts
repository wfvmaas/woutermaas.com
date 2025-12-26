import { getCollection, getEntry } from "astro:content";

export async function getOverviewContent(category: string) {
  // 1. Fetch Hero Content (0.[category])
  // We try to fetch it from the category collection.
  // Note: getEntry requires the collection name and the slug/id.
  // Since 0.[category] is in the folder, it should be part of the collection.
  // However, the slug might be "0.software" or just "0software" depending on config.
  // Let's assume the slug matches the filename without extension.
  // Actually, for collections defined with `type: 'content'`, the slug is the filename without extension.
  // But wait, `0.software` might be excluded if we only want projects?
  // No, the user said "information for the hero section... can be found in the markdown file starting with 0.[category]".
  // So it IS part of the collection. We just need to filter it out from the project list.

  // 2. Fetch Projects from Category Collection
  const allCategoryEntries = await getCollection(category as any);

  // Find hero entry (starts with "0" or "0.")
  const heroEntry = allCategoryEntries.find((entry: any) => {
    return entry.slug.startsWith("0") || entry.slug.startsWith("0.");
  }) as any;
  
  if (!heroEntry) {
    console.warn(`Hero content not found for category: ${category} (expected 0.${category})`);
  }

  // Filter out the hero entry
  const projects = allCategoryEntries.filter((entry: any) => {
    return entry.slug !== heroEntry?.slug;
  });

  // 3. Fetch Abstracts from Abstracts Collection
  const allAbstracts = await getCollection("abstracts");
  const abstracts = allAbstracts.filter((entry) => {
    return entry.data.categories.some((cat: any) => cat.name === category);
  });

  // Helper to get order for projects (from filename prefix)
  const getProjectOrder = (entry: any) => {
    const match = entry.slug.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 999;
  };

  // Helper to get order for abstracts (from category order)
  const getAbstractOrder = (entry: any, category: string) => {
    const categoryEntry = entry.data.categories.find((cat: any) => cat.name === category);
    return categoryEntry?.order ?? 999;
  };

  // Merge projects and abstracts together
  const allItems = [...projects, ...abstracts];

  // Sort all items together by their unified order
  allItems.sort((a, b) => {
    const aOrder = a.collection === "abstracts" 
      ? getAbstractOrder(a, category)
      : getProjectOrder(a);
    const bOrder = b.collection === "abstracts"
      ? getAbstractOrder(b, category)
      : getProjectOrder(b);
    return aOrder - bOrder;
  });

  return {
    heroData: heroEntry?.data,
    projects: allItems,
    abstracts: [], // Return empty array since we've merged them into projects
  };
}
