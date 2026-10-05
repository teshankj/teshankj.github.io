<script lang="ts">
	import TechItem from '#lib/components/TechItem.svelte';
	import type { Technology } from '#lib/data/technologies';

	let {
		technologies,
		direction = 'left',
		duration = 35
	}: {
		technologies: Technology[];
		direction?: 'left' | 'right';
		duration?: number;
	} = $props();

	/*
	 * Repeat the sequence several times.
	 *
	 * We animate by exactly one sequence width, so the end of one
	 * sequence is identical to the beginning of the next sequence.
	 */
	const repeatCount = 4;

	const items = Array.from(
		{ length: repeatCount },
		() => technologies
	).flat();
</script>

<div
	class="marquee"
	class:reverse={direction === 'right'}
	style={`--duration: ${duration}s`}
>
	<div class="marquee-track">
		{#each items as technology, index}
			<TechItem {technology} key={`${technology.name}-${index}`} />
		{/each}
	</div>
</div>

<style>
.marquee {
	position: relative;
	width: 100%;
	overflow: hidden;

	mask-image: linear-gradient(
		to right,
		transparent 0%,
		black 7%,
		black 93%,
		transparent 100%
	);

	-webkit-mask-image: linear-gradient(
		to right,
		transparent 0%,
		black 7%,
		black 93%,
		transparent 100%
	);
}
	.marquee-track {
		display: flex;
		width: max-content;
		gap: 12px;

		/*
		 * Four identical sequences are present.
		 * Moving by 25% = exactly one sequence.
		 */
		animation: marquee-left var(--duration) linear infinite;
		will-change: transform;
	}

	.marquee.reverse .marquee-track {
		animation-name: marquee-right;
	}

	.marquee:hover .marquee-track {
		animation-play-state: paused;
	}

	@keyframes marquee-left {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-25%);
		}
	}

	@keyframes marquee-right {
		from {
			transform: translateX(-25%);
		}

		to {
			transform: translateX(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			transform: translateX(0);
		}
	}
</style>