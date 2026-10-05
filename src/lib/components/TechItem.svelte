<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Technology } from '#lib/data/technologies';

	let { technology }: { technology: Technology } = $props();
</script>

<div class="tech-item" title={technology.category}>
	<div class="tech-icon">
		{#if technology.icon}
			<Icon icon={technology.icon} width="17" height="17" />
		{:else}
			<span>{technology.name.charAt(0)}</span>
		{/if}
	</div>

	<span class="tech-name">{technology.name}</span>
</div>

<style>
	.tech-item {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
		padding: 11px 16px;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.018);
		color: var(--text-secondary);

		transition:
			color 180ms ease,
			border-color 180ms ease,
			background 180ms ease,
			transform 180ms ease;
	}

	.tech-item:hover {
		border-color: var(--border-hover);
		background: var(--surface);
		color: var(--text);
		transform: translateY(-2px);
	}

	.tech-icon {
		display: grid;
		width: 28px;
		height: 28px;
		place-items: center;
		border: 1px solid var(--border);
		border-radius: 6px;
		color: var(--text-muted);

		transition:
			color 180ms ease,
			border-color 180ms ease;
	}

	.tech-item:hover .tech-icon {
		border-color: var(--border-hover);
		color: var(--text);
	}

	.tech-icon :global(svg) {
		display: block;
	}

	.tech-icon span {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.65rem;
		font-weight: 600;
	}

	.tech-name {
		font-size: 0.82rem;
		font-weight: 500;
		white-space: nowrap;
	}
</style>