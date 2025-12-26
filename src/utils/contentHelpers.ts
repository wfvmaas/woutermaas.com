import { getCollection, getEntry } from "astro:content";

export async function getOverviewContent(category: string) {
  // 1. Fetch Hero Content (index.md)
  const allCategoryEntries = await getCollection(category as any);

  // Find hero entry (index.md)
  const heroEntry = allCategoryEntries.find((entry: any) => {
    return entry.slug === "index";
  }) as any;
  
  if (!heroEntry) {
    console.warn(`Hero content not found for category: ${category} (expected index.md)`);
  }

  // 2. Fetch Abstracts based on references in overview page
  // Only abstracts are shown on overview pages, detail pages are excluded
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

  return {
    heroData: heroEntry?.data,
    projects: abstracts, // Only abstracts, no detail pages
    abstracts: [], // Return empty array since we've merged them into projects
  };
}
