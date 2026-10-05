<script lang="ts">
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import { projectGroups } from '#lib/data/projects';
</script>

<section id="projects" class="section projects">
	<div class="container">
		<div class="section-header">
			<div>
				<p class="section-label">05 — Projects</p>

				<h2>
					Selected
					<br />
					<span>work.</span>
				</h2>
			</div>

			<p class="section-description">
				Research, experiments, and end-to-end systems spanning artificial
				intelligence, computer vision, and practical machine learning.
			</p>
		</div>

		{#each projectGroups as group}
			<div class="project-group">
				<div class="group-header">
					<div class="group-title">
						<span class="group-number">{group.number}</span>

						<div>
							<h3>{group.title}</h3>
							<p>{group.description}</p>
						</div>
					</div>
				</div>

				<div class="project-grid">
					{#each group.projects as project}
						<ProjectCard {project} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.projects {
		border-top: 1px solid var(--border);
	}

	.section-header {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 80px;
		align-items: end;
		margin-bottom: 100px;
	}

	.section-header h2 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(3rem, 6vw, 5.5rem);
		font-weight: 500;
		line-height: 0.95;
		letter-spacing: -0.06em;
	}

	.section-header h2 span {
		color: var(--text-muted);
	}

	.section-description {
		max-width: 430px;
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.8;
	}

	.project-group {
		margin-bottom: 110px;
	}

	.project-group:last-child {
		margin-bottom: 0;
	}

	.group-header {
		margin-bottom: 35px;
		padding-bottom: 18px;
		border-bottom: 1px solid var(--border);
	}

	.group-title {
		display: flex;
		gap: 20px;
		align-items: flex-start;
	}

	.group-number {
		padding-top: 5px;
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.7rem;
	}

	.group-title h3 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.25rem;
		font-weight: 500;
		letter-spacing: -0.02em;
	}

	.group-title p {
		max-width: 650px;
		margin: 7px 0 0;
		color: var(--text-muted);
		font-size: 0.78rem;
		line-height: 1.7;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 20px;
	}

	.project-group:first-of-type .project-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (max-width: 1050px) {
		.project-group:first-of-type .project-grid,
		.project-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 800px) {
		.section-header {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-bottom: 70px;
		}

		.project-grid,
		.project-group:first-of-type .project-grid {
			grid-template-columns: 1fr;
		}

		.project-group {
			margin-bottom: 80px;
		}
	}
</style>
