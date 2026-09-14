import { expect, test } from '@playwright/test';
import { indexableStaticPaths, seoTargets } from '../lib/seo/targets';

const importantRoutes = [
	...new Set([
		...indexableStaticPaths.map((path) => path || '/'),
		'/case-studies/ai-training-security-defense-nepal',
		'/insights/leadership/executive-ai-strategy',
		'/programs/workshops/ai-for-work-productivity'
	])
];

test.describe('indexable page SEO', () => {
	for (const path of importantRoutes) {
		test(`${path} has complete metadata and one H1`, async ({ page }) => {
			await page.goto(path);
			await expect(page).toHaveTitle(/\S+/);
			await expect(page.locator('h1')).toHaveCount(1);
			await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S+/);
			await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /\S+/);
			await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
				'content',
				/^https:\/\//
			);
			await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);

			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveCount(1);
			const canonicalHref = await canonical.getAttribute('href');
			expect(canonicalHref).not.toBeNull();
			expect(new URL(canonicalHref!).pathname.replace(/\/$/, '') || '/').toBe(path);

			const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
			expect(scripts.length).toBeGreaterThan(0);
			for (const json of scripts) expect(() => JSON.parse(json)).not.toThrow();
		});
	}

	test('titles and primary targets are unique', async ({ page }) => {
		const titles: string[] = [];
		for (const path of importantRoutes) {
			await page.goto(path);
			titles.push(await page.title());
		}
		expect(new Set(titles).size).toBe(titles.length);
		expect(new Set(Object.values(seoTargets)).size).toBe(Object.values(seoTargets).length);
	});

	test('sitemap URLs resolve without broken internal destinations', async ({ request }) => {
		const sitemap = await request.get('/sitemap.xml');
		expect(sitemap.ok()).toBe(true);
		const paths = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(
			(match) => new URL(match[1]).pathname
		);
		for (const path of paths) {
			const response = await request.get(path);
			expect(response.status(), `Expected ${path} to resolve`).toBe(200);
		}
	});

	test('workshop cards reveal accessible evidence details', async ({ page }) => {
		await page.goto('/workshops');
		const detailsButton = page.locator('.list button').filter({ hasText: 'View details' }).first();
		await detailsButton.click();

		const dialog = page.getByRole('dialog');
		await expect(dialog).toBeVisible();
		await expect(dialog.getByRole('heading', { level: 2 })).toBeVisible();
		await expect(dialog.locator('dt').filter({ hasText: 'Organization' })).toBeVisible();

		await page.keyboard.press('Escape');
		await expect(dialog).toBeHidden();
		await expect(detailsButton).toBeFocused();
	});

	test('every past engagement exposes a details action', async ({ page }) => {
		await page.goto('/engagements');
		const cards = page.locator('.engagement-list article');
		await expect(cards).not.toHaveCount(0);
		await expect(page.locator('.engagement-list .entry-link')).toHaveCount(await cards.count());

		const firstDetailsButton = page.locator('.engagement-list .entry-link').first();
		await firstDetailsButton.click();
		await expect(page.getByRole('dialog')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(firstDetailsButton).toBeFocused();
	});
});
