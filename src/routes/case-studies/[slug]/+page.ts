import { error } from '@sveltejs/kit';
import { findCaseStudy, publishedCaseStudies } from '$lib/case-studies';

export const entries = () => publishedCaseStudies.map(({ slug }) => ({ slug }));
export const load = ({ params }) => {
	const caseStudy = findCaseStudy(params.slug);
	if (!caseStudy) error(404, 'Case study not found');
	return { caseStudy };
};
