import { error } from '@sveltejs/kit';
import { findTrainingPage, trainingPages } from '$lib/training-pages';

export const entries = () => trainingPages.map(({ slug }) => ({ slug }));

export const load = ({ params }) => {
	const page = findTrainingPage(params.slug);
	if (!page) error(404, 'Page not found');
	return { page };
};
