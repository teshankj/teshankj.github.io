<section id="experience" class="section experience">
	<div class="container">
		<div class="section-header">
			<div>
				<p class="section-label">02 — Experience</p>

				<h2>
					Where research
					<br />
					<span>meets practice.</span>
				</h2>
			</div>

			<p class="section-description">
				Research experience focused on developing intelligent systems and
				exploring reliable machine learning methods.
			</p>
		</div>

		<div class="experience-list">
			<!-- Research Support -->
			<article class="experience-item">
				<div class="experience-date">
					<span>May 2026</span>
					<span>—</span>
					<span>Aug 2026</span>
				</div>

				<div class="experience-content">
					<div class="experience-heading">
						<div>
							<h3>Research Support</h3>

							<p class="organization">
								Robotics and Machine Intelligence Laboratory
							</p>

							<p class="institution">
								Delhi Technological University · Delhi, India
							</p>
						</div>

						<span class="experience-number">02</span>
					</div>

					<p class="description">
						Contributed to a research framework investigating projected
						spectral representations for transforming hyperspectral anomaly
						detection into a scientifically grounded benchmarking problem.
					</p>

					<div class="research-tags">
						<span>Hyperspectral Imaging</span>
						<span>Anomaly Detection</span>
						<span>Spectral Representations</span>
						<span>Computer Vision</span>
					</div>

					<div class="outcome">
						<div class="outcome-line"></div>

						<div>
							<p class="outcome-label">Research Focus</p>

							<p class="outcome-text">
								Developing scientifically grounded representations and
								benchmarking methodologies for hyperspectral anomaly
								detection.
							</p>
						</div>
					</div>
				</div>
			</article>

			<!-- Research Internship -->
			<article class="experience-item">
				<div class="experience-date">
					<span>Jun 2025</span>
					<span>—</span>
					<span>Dec 2025</span>
				</div>

				<div class="experience-content">
					<div class="experience-heading">
						<div>
							<h3>Research Intern</h3>

							<p class="organization">
								Robotics and Machine Intelligence Laboratory
							</p>

							<p class="institution">
								Delhi Technological University · Delhi, India
							</p>
						</div>

						<span class="experience-number">01</span>
					</div>

					<p class="description">
						Worked on interpretable and robust multimodal fake news detection
						through evidence fusion, uncertainty estimation, and reliable
						reasoning across textual and visual information.
					</p>

					<div class="research-tags">
						<span>Multimodal Learning</span>
						<span>Fake News Detection</span>
						<span>Evidence Fusion</span>
						<span>Uncertainty Estimation</span>
						<span>Trustworthy AI</span>
					</div>

					<div class="outcome">
						<div class="outcome-line"></div>

						<div>
							<p class="outcome-label">Research Outcome</p>

							<p class="outcome-text">
								The internship resulted in a research publication
								investigating multimodal fake news detection through
								evidence fusion, uncertainty estimation, and reliable
								reasoning.
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

<style>
	.experience {
		border-top: 1px solid var(--border);
	}

	.section-header {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 80px;
		align-items: end;
		margin-bottom: 85px;
	}

	.section-header h2 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2.8rem, 6vw, 5.2rem);
		font-weight: 500;
		line-height: 0.98;
		letter-spacing: -0.055em;
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

	.experience-list {
		border-top: 1px solid var(--border);
	}

	.experience-item {
		display: grid;
		grid-template-columns: 180px 1fr;
		border-bottom: 1px solid var(--border);
	}

	.experience-date {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 30px 30px 30px 0;
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.75rem;
	}

	.experience-content {
		padding: 30px 0 55px 50px;
		border-left: 1px solid var(--border);
	}

	.experience-heading {
		display: flex;
		justify-content: space-between;
		gap: 30px;
	}

	.experience-heading h3 {
		margin: 0 0 8px;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
		letter-spacing: -0.025em;
	}

	.organization {
		margin: 0;
		color: var(--text);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.institution {
		margin: 5px 0 0;
		color: var(--text-muted);
		font-size: 0.8rem;
	}

	.experience-number {
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.75rem;
	}

	.description {
		max-width: 720px;
		margin: 35px 0 25px;
		color: var(--text-secondary);
		font-size: 0.92rem;
		line-height: 1.8;
	}

	.research-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.research-tags span {
		padding: 7px 10px;
		border: 1px solid var(--border);
		border-radius: 5px;
		color: var(--text-muted);
		font-size: 0.7rem;
	}

	.outcome {
		display: flex;
		gap: 18px;
		max-width: 650px;
		margin-top: 45px;
	}

	.outcome-line {
		width: 1px;
		flex-shrink: 0;
		background: var(--border-hover);
	}

	.outcome-label {
		margin: 0 0 7px;
		color: var(--text);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.outcome-text {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.8rem;
		line-height: 1.7;
	}

	@media (max-width: 800px) {
		.section-header {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-bottom: 60px;
		}

		.experience-item {
			grid-template-columns: 1fr;
		}

		.experience-date {
			flex-direction: row;
			padding: 25px 0 15px;
		}

		.experience-content {
			padding: 15px 0 45px;
			border-left: 0;
		}
	}

	@media (max-width: 550px) {
		.experience-heading {
			flex-direction: column;
			gap: 15px;
		}
	}
</style>