<script lang="ts">
	import TechMarqueeRow from '#lib/components/TechMarqueeRow.svelte';
	import { technologyRows } from '#lib/data/technologies';
</script>

<section id="tech-stack" class="section tech-stack">
	<div class="container">
		<div class="stack-header">
			<div>
				<p class="section-label">03 — Tech Stack</p>

				<h2>
					Tools for
					<br />
					<span>building intelligence.</span>
				</h2>
			</div>

			<p>
				A practical stack spanning machine learning, computer vision,
				deployment, and software engineering.
			</p>
		</div>
	</div>

	<div class="marquee-container">
		{#each technologyRows as row, index}
			<TechMarqueeRow
				technologies={row}
				direction={index % 2 === 0 ? 'left' : 'right'}
				duration={34 + index * 4}
			/>
		{/each}
	</div>

	<div class="container stack-footer">
		<span>AI / ML</span>
		<span>Computer Vision</span>
		<span>MLOps</span>
		<span>Backend</span>
		<span>Embedded Systems</span>
	</div>
</section>

<style>
	.tech-stack {
		overflow: hidden;
		border-top: 1px solid var(--border);
	}

	.stack-header {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 80px;
		align-items: end;
		margin-bottom: 70px;
	}

	.stack-header h2 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2.8rem, 6vw, 5.2rem);
		font-weight: 500;
		line-height: 0.98;
		letter-spacing: -0.055em;
	}

	.stack-header h2 span {
		color: var(--text-muted);
	}

	.stack-header > p {
		max-width: 430px;
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.8;
	}

	.marquee-container {
		position: relative;
	    width: min(1180px, calc(100% - 40px));
	    margin: 0 auto;
	    display: flex;
	    flex-direction: column;
	    gap: 12px;
	}

	.stack-footer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 24px;
		margin-top: 55px;
		color: var(--text-muted);
		font-size: 0.7rem;
	}

	.stack-footer span {
		position: relative;
	}

	.stack-footer span:not(:last-child)::after {
		position: absolute;
		top: 50%;
		right: -14px;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: var(--text-muted);
		content: '';
		transform: translateY(-50%);
	}

	@media (max-width: 800px) {
		.stack-header {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-bottom: 50px;
		}
	}
</style>
