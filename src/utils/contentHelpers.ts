import { getCollection, getEntry } from "astro:content";

export async function getOverviewContent(category: string) {
  // 1. Fetch Hero Content (0.[category])
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

  // 2. Fetch Abstracts based on references in overview page
  const abstractSlugs = heroEntry?.data?.abstracts || [];
  const allAbstracts = await getCollection("abstracts");
  
  // Create a map of abstract slugs to entries for quick lookup
  const abstractMap = new Map();
  allAbstracts.forEach((entry) => {
    abstractMap.set(entry.slug, entry);
  });

  // Load abstracts in the order specified in the overview page
  const abstracts = abstractSlugs
    .map((slug: string) => abstractMap.get(slug))
    .filter((entry: any) => entry !== undefined);

  // Helper to get order for projects (from filename prefix)
  const getProjectOrder = (entry: any) => {
    const match = entry.slug.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 999;
  };

  // Sort projects by their order
  const sortedProjects = [...projects].sort((a, b) => {
    return getProjectOrder(a) - getProjectOrder(b);
  });

  // Merge projects and abstracts together
  // Projects come first (sorted by order), then abstracts (in the order specified in overview page)
  const allItems = [...sortedProjects, ...abstracts];

  return {
    heroData: heroEntry?.data,
    projects: allItems,
    abstracts: [], // Return empty array since we've merged them into projects
  };
}
