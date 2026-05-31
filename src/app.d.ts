/// <reference types="@sveltejs/enhanced-img" />
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Typed MDSvex content modules (.md files compiled by mdsvex).
declare module '*.md' {
	import type { Component } from 'svelte';
	import type { ContentMeta } from '$lib/content';
	export const metadata: ContentMeta;
	const component: Component;
	export default component;
}

export {};
