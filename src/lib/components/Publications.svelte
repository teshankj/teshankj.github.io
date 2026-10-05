<script lang="ts">
    import Icon from '@iconify/svelte';

	const publications = [
		{
			number: '01',
			year: '2026',
			type: 'Journal Article',
			title:
				'Interpretable and Robust Multimodal Fake News Detection with Evidence Fusion and Reliable Reasoning',
			authors: 'Thakur, R., Kavindu Jayasinghe, J.P.T. & Mehta, P.',
			venue: 'International Journal of Data Science and Analytics',
			details: 'Vol. 22, Article 4',
			tags: ['Multimodal AI', 'Evidence Fusion', 'Trustworthy AI'],
			link: 'https://doi.org/10.1007/s41060-025-00895-9'
		},
		{
			number: '02',
			year: '2026',
			type: 'Journal Article',
			title:
				'MOCRN — A Novel Physics-Guided Fault Modeling and Multimodal Neural Network for Fault Identification and Degradation Estimation in Analog Circuits',
			authors: 'Jayasinghe, J.K., Kulathunga, G.P. & Thakur, R.',
			venue: 'Circuits, Systems, and Signal Processing',
			details: '2026',
			tags: ['Physics-Guided ML', 'Fault Diagnosis', 'Analog Circuits'],
			link: 'https://doi.org/10.1007/s00034-026-03590-7'
		}
	];
</script>


<section id="publications" class="section publications">
	<div class="container">
		<div class="section-header">
			<div>
				<p class="section-label">06 — Publications</p>

				<h2>
					Research,
					<br />
					<span>published.</span>
				</h2>
			</div>
			<div class="publication-links">
	<a
		href="https://www.researchgate.net/profile/Jp-Teshan-Jayasinghe"
		target="_blank"
		rel="noopener noreferrer"
		class="publication-link"
		aria-label="ResearchGate profile"
	>
		<Icon icon="simple-icons:researchgate" width="18" height="18" />
		<span>ResearchGate</span>
	</a>

	<a
		href="https://scholar.google.com/citations?user=e56vN9QAAAAJ&hl=en"
		target="_blank"
		rel="noopener noreferrer"
		class="publication-link"
		aria-label="Google Scholar profile"
	>
		<Icon icon="simple-icons:googlescholar" width="18" height="18" />
		<span>Google Scholar</span>
	</a>
</div>

			<p class="section-description">
				Peer-reviewed research at the intersection of multimodal artificial
				intelligence, trustworthy machine learning, and intelligent engineering
				systems.
			</p>
		</div>

		<div class="publication-list">
			{#each publications as publication}
				<article class="publication">
					<div class="publication-number">
						<span>{publication.number}</span>
					</div>

					<div class="publication-main">
						<div class="publication-top">
							<div class="publication-meta">
								<span>{publication.type}</span>
								<span>{publication.year}</span>
							</div>

						</div>

						<h3>{publication.title}</h3>

						<p class="authors">
							{publication.authors}
						</p>

						<div class="venue">
							<strong>{publication.venue}</strong>

							<span>{publication.details}</span>
						</div>

						<div class="publication-tags">
							{#each publication.tags as tag}
								<span>{tag}</span>
							{/each}
						</div>

						{#if publication.link}
							<div class="publication-actions">
								<a
									href={publication.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Publication
									<span>↗</span>
								</a>
							</div>
						{/if}
					</div>
				</article>
			{/each}
		</div>

		<div class="publication-footer">
			<span>Research interests</span>

			<div>
				<span>Multimodal AI</span>
				<span>Trustworthy AI</span>
				<span>Computer Vision</span>
				<span>Physics-Guided ML</span>
			</div>
		</div>
	</div>
</section>

<style>
    .publication-links {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 28px;
	margin-bottom: 48px;
}

.publication-link {
	display: inline-flex;
	align-items: center;
	gap: 9px;
	padding: 10px 14px;

	border: 1px solid var(--border);
	background: var(--surface);

	color: var(--text-secondary);
	text-decoration: none;

	font-size: 0.82rem;
	font-weight: 500;

	transition:
		color 0.2s ease,
		border-color 0.2s ease,
		background 0.2s ease;
}

.publication-link:hover {
	color: var(--text);
	border-color: var(--border-hover);
	background: var(--surface-hover);
}

.publication-link :global(svg) {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

.publication-link:hover :global(svg) {
	opacity: 1;
}
	.publications {
		border-top: 1px solid var(--border);
	}

	.section-header {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 80px;
		align-items: end;
		margin-bottom: 90px;
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
		max-width: 440px;
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.8;
	}

	.publication-list {
		border-top: 1px solid var(--border);
	}

	.publication {
		display: grid;
		grid-template-columns: 100px 1fr;
		border-bottom: 1px solid var(--border);
	}

	.publication-number {
		padding: 30px 25px 30px 0;
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.72rem;
	}

	.publication-main {
		padding: 30px 0 45px 35px;
		border-left: 1px solid var(--border);
	}

	.publication-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.publication-meta {
		display: flex;
		gap: 18px;
		color: var(--text-muted);
		font-size: 0.68rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.publication h3 {
		max-width: 900px;
		margin: 22px 0 14px;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.25rem, 2vw, 1.75rem);
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: -0.025em;
	}

	.authors {
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.82rem;
		line-height: 1.6;
	}

	.venue {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-top: 22px;
		color: var(--text-muted);
		font-size: 0.76rem;
	}

	.venue strong {
		color: var(--text);
		font-weight: 500;
	}

	.venue span {
		padding-left: 10px;
		border-left: 1px solid var(--border);
	}

	.publication-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		margin-top: 22px;
	}

	.publication-tags span {
		padding: 6px 9px;
		border: 1px solid var(--border);
		border-radius: 5px;
		color: var(--text-muted);
		font-size: 0.65rem;
	}

	.publication-actions {
		margin-top: 25px;
	}

	.publication-actions a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 9px 13px;
		border: 1px solid var(--border);
		border-radius: 6px;
		color: var(--text-secondary);
		font-size: 0.7rem;
		transition:
			border-color 180ms ease,
			color 180ms ease,
			background 180ms ease;
	}

	.publication-actions a:hover {
		border-color: var(--border-hover);
		background: var(--surface);
		color: var(--text);
	}

	.publication-footer {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		margin-top: 35px;
		color: var(--text-muted);
		font-size: 0.68rem;
	}

	.publication-footer > div {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 25px;
	}

	@media (max-width: 800px) {
		.section-header {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-bottom: 60px;
		}

		.publication {
			grid-template-columns: 55px 1fr;
		}

		.publication-main {
			padding-left: 20px;
		}

		.publication-footer {
			flex-direction: column;
		}
	}
</style>
