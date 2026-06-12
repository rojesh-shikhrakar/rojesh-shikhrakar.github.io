// Reusable components
export { default as Seo } from './components/Seo.svelte';
export { default as ThemeToggle } from './components/ThemeToggle.svelte';
export { default as SectionHeader } from './components/SectionHeader.svelte';
export { default as WorkshopCard } from './components/WorkshopCard.svelte';
export { default as ResearchCard } from './components/ResearchCard.svelte';
export { default as CourseTable } from './components/CourseTable.svelte';
export { default as CourseCard } from './components/CourseCard.svelte';
export { default as Carousel } from './components/Carousel.svelte';
export { default as PastWorkshopsCarousel } from './components/PastWorkshopsCarousel.svelte';
export { default as Giscus } from './components/Giscus.svelte';

// Actions & data helpers
export { reveal } from './actions/reveal';
export { listContent, contentEntries } from './content';
export type { ContentMeta, ContentSummary, MdsvexModule } from './content';
