import { error } from '@sveltejs/kit';
import { findProgram, programs } from '$lib/programs';

export const entries = () => programs.map(({ category, slug }) => ({ category, slug }));
export const load = ({ params }) => {
	const program = findProgram(params.category, params.slug);
	if (!program) error(404, 'Program not found');
	return { program };
};
