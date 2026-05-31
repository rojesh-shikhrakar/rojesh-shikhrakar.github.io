<script lang="ts">
	import { site } from '$lib/data/site';

	interface Course {
		title: string;
		institution: string;
		audience: string;
		level: string;
		format: string;
		slug: string;
	}

	interface Props {
		courses: Course[];
		/**
		 * 'view' links to the course detail page; 'syllabus' opens a mailto request;
		 * 'overview' links to the /courses listing.
		 */
		action?: 'view' | 'syllabus' | 'overview';
	}

	let { courses, action = 'view' }: Props = $props();
</script>

<div class="course-table-wrapper">
	<table class="course-table">
		<thead>
			<tr>
				<th>Course</th>
				<th>Institution</th>
				<th>Audience</th>
				<th>Level</th>
				<th>Format</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each courses as course (course.slug)}
				<tr class="course-row">
					<td class="course-name">{course.title}</td>
					<td>{course.institution}</td>
					<td>{course.audience}</td>
					<td><span class="level-badge">{course.level}</span></td>
					<td>{course.format}</td>
					<td>
						{#if action === 'syllabus'}
							<a
								href="mailto:{site.email}?subject=Syllabus Request: {course.title}"
								class="table-link">Request Syllabus →</a
							>
						{:else if action === 'overview'}
							<a href="/courses" class="table-link">View →</a>
						{:else}
							<a href="/courses/{course.slug}" class="table-link">View Details →</a>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.course-name {
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.course-row {
		transition: background 0.2s ease;
	}

	.course-row:hover {
		background: var(--surface-sunken);
	}

	.level-badge {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 700;
		background: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		padding: 0.2rem 0.6rem;
		border-radius: var(--radius-full);
		color: var(--color-text-body);
	}

	.table-link {
		color: var(--color-enterprise-blue);
		font-weight: 600;
		text-decoration: none;
		font-size: 0.9rem;
		white-space: nowrap;
	}

	.table-link:hover {
		text-decoration: underline;
	}
</style>
