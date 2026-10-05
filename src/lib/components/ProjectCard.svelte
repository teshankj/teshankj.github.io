<script lang="ts">
    import Icon from '@iconify/svelte';
	import type { Project } from '#lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	{#if project.image}
		<div class="project-image">
			<img src={project.image} alt={`${project.title} project preview`} />
		</div>
	{:else}
		<div class="project-image project-image-placeholder">
			<div class="placeholder-grid"></div>
			<span>PROJECT</span>
		</div>
	{/if}

	<div class="project-content">
		<div class="project-title-row">
			<div>
				<h3>{project.title}</h3>
				<p class="subtitle">{project.subtitle}</p>
			</div>

		
		</div>

		<p class="description">
			{project.description}
		</p>

		<div class="project-tags">
			{#each project.tags as tag}
				<span>{tag}</span>
			{/each}
		</div>

		{#if project.metrics}
			<div class="project-metrics">
				{#each project.metrics as metric}
					<div class="metric">
						<strong>{metric.value}</strong>
						<span>{metric.label}</span>
					</div>
				{/each}
			</div>
		{/if}

		<div class="project-buttons">
			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="project-link"
				>
					<Icon icon="simple-icons:github" width="15" height="15" />
					<span>GitHub</span>
				</a>
			{/if}

			{#if project.demo}
				<a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					class="project-link project-link-primary"
				>
					Live Demo
					<span>↗</span>
				</a>
			{/if}
		</div>
	</div>
</article>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		min-width: 0;
		border: 1px solid var(--border);
		border-radius: 10px;
		overflow: hidden;
		background: var(--bg-soft);
		transition:
			border-color 220ms ease,
			transform 220ms ease,
			background 220ms ease;
	}

	.project-card:hover {
		border-color: var(--border-hover);
		background: var(--surface);
		transform: translateY(-5px);
	}

	.project-image {
		position: relative;
		height: 280px;
		overflow: hidden;
		border-bottom: 1px solid var(--border);
		background: #0c0c0c;
	}

	.project-image img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.88;
		transition:
			transform 500ms ease,
			opacity 300ms ease;
	}

	.project-card:hover .project-image img {
		transform: scale(1.035);
		opacity: 1;
	}

	.project-image-placeholder {
		display: grid;
		place-items: center;
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.7rem;
		letter-spacing: 0.15em;
	}

	.placeholder-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
		background-size: 35px 35px;
		mask-image: linear-gradient(to bottom, black, transparent);
	}

	.project-image-placeholder span {
		position: relative;
	}

	.project-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 28px;
	}

	.project-title-row {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}

	.project-title-row h3 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.45rem;
		font-weight: 500;
		line-height: 1.15;
		letter-spacing: -0.03em;
	}

	.subtitle {
		margin: 7px 0 0;
		color: var(--text-muted);
		font-size: 0.78rem;
	}

	

	.description {
		margin: 24px 0;
		color: var(--text-secondary);
		font-size: 0.83rem;
		line-height: 1.75;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
	}
	

	.project-tags span {
		display: inline-flex;
	    align-items: center;

	    padding: 7px 11px;

	    border: 1px solid var(--border-hover);
	    border-radius: 6px;

	    background: rgba(255, 255, 255, 0.035);

	    color: var(--text-secondary);

	    font-size: 0.80rem;
	    font-weight: 500;
	    letter-spacing: 0.01em;

	    transition:
		    background 180ms ease,
		    border-color 180ms ease,
		    color 180ms ease;
	}

	.project-tags span:hover {
	    background: rgba(255, 255, 255, 0.07);
	    border-color: rgba(255, 255, 255, 0.3);
	    color: var(--text);
   }

	.project-metrics {
		display: flex;
		gap: 35px;
		margin-top: 26px;
		padding-top: 22px;
		border-top: 1px solid var(--border);
	}

	.metric {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.metric strong {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1rem;
		font-weight: 500;
	}

	.metric span {
		color: var(--text-muted);
		font-size: 0.65rem;
	}

	.project-buttons {
		display: flex;
		gap: 8px;
		margin-top: auto;
		padding-top: 28px;
	}

.project-link {
	display: inline-flex;
	align-items: center;
	gap: 8px;

	padding: 9px 14px;

	border: 1px solid var(--border-hover);
	border-radius: 6px;

	background: rgba(255, 255, 255, 0.025);

	color: var(--text-secondary);
	text-decoration: none;

	font-size: 0.78rem;
	font-weight: 500;

	transition:
		background 0.2s ease,
		border-color 0.2s ease,
		color 0.2s ease,
		transform 0.2s ease;
}

	.project-link:hover {
	background: rgba(255, 255, 255, 0.07);
	border-color: rgba(255, 255, 255, 0.28);
	color: var(--text);

	transform: translateY(-1px);
}

.project-link :global(svg) {
	opacity: 0.75;
	transition: opacity 0.2s ease;
}

.project-link:hover :global(svg) {
	opacity: 1;
}

	@media (max-width: 600px) {
		.project-image {
			height: 220px;
		}

		.project-content {
			padding: 22px;
		}
	}
</style>
