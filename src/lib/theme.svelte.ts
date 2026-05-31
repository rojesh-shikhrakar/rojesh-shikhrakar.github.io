import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function initial(): Theme {
	if (!browser) return 'light';
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

class ThemeState {
	current = $state<Theme>('light');

	constructor() {
		// On the client, sync from whatever the no-flash boot script already applied.
		if (browser) {
			const applied = document.documentElement.getAttribute('data-theme');
			this.current = applied === 'dark' ? 'dark' : initial();
		}
	}

	#apply(value: Theme) {
		this.current = value;
		if (browser) {
			document.documentElement.setAttribute('data-theme', value);
			localStorage.setItem(STORAGE_KEY, value);
		}
	}

	toggle() {
		this.#apply(this.current === 'dark' ? 'light' : 'dark');
	}

	set(value: Theme) {
		this.#apply(value);
	}
}

export const theme = new ThemeState();
