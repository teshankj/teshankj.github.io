<section id="about" class="section about">
	<div class="container">
		<div class="section-heading">
			<p class="section-label">01 — About</p>

			<h2>
				Research-driven.
				<br />
				<span>Engineering-focused.</span>
			</h2>
		</div>

		<div class="about-grid">
			<div class="about-intro">
				<p class="lead">
					I build intelligent systems at the intersection of
					<strong>research and engineering.</strong>
				</p>

				<p>
					I am an Electronics and Communication Engineering graduate focused on
					AI/ML research and practical intelligent systems. My work combines
					machine learning with computer vision, multimodal learning,
					trustworthy AI, signal processing, and embedded systems.
				</p>

				<p>
					I enjoy taking ideas from research papers and turning them into
					working, measurable and deployable systems.
				</p>
			</div>

			<div class="focus-grid">
				<div class="focus-card">
					<span class="number">01</span>
					<h3>Multimodal AI</h3>
					<p>Learning across text, image and complementary modalities.</p>
				</div>

				<div class="focus-card">
					<span class="number">02</span>
					<h3>Computer Vision</h3>
					<p>Visual intelligence for real-world engineering applications.</p>
				</div>

				<div class="focus-card">
					<span class="number">03</span>
					<h3>Trustworthy AI</h3>
					<p>Reliable models with evidence, uncertainty and interpretability.</p>
				</div>

				<div class="focus-card">
					<span class="number">04</span>
					<h3>Intelligent Systems</h3>
					<p>Connecting AI models with practical deployment environments.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		border-top: 1px solid var(--border);
	}

	.section-heading {
		margin-bottom: 80px;
	}

	.section-heading h2 {
		max-width: 850px;
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2.8rem, 6vw, 5.5rem);
		font-weight: 500;
		line-height: 1;
		letter-spacing: -0.055em;
	}

	.section-heading h2 span {
		color: var(--text-muted);
	}

	.about-grid {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 100px;
		align-items: start;
	}

	.about-intro {
		max-width: 540px;
	}

	.about-intro p {
		margin: 0 0 24px;
		color: var(--text-secondary);
		font-size: 0.98rem;
		line-height: 1.8;
	}

	.about-intro .lead {
		color: var(--text);
		font-size: 1.35rem;
		line-height: 1.5;
	}

	.about-intro strong {
		color: var(--text);
		font-weight: 500;
	}

	.focus-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		border-top: 1px solid var(--border);
		border-left: 1px solid var(--border);
	}

	.focus-card {
		min-height: 210px;
		padding: 28px;
		border-right: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		transition:
			background 200ms ease,
			transform 200ms ease;
	}

	.focus-card:hover {
		background: var(--surface);
	}

	.number {
		display: block;
		margin-bottom: 48px;
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.72rem;
	}

	.focus-card h3 {
		margin: 0 0 10px;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.1rem;
		font-weight: 500;
	}

	.focus-card p {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.8rem;
		line-height: 1.6;
	}

	@media (max-width: 850px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 60px;
		}

		.section-heading {
			margin-bottom: 55px;
		}
	}

	@media (max-width: 550px) {
		.focus-grid {
			grid-template-columns: 1fr;
		}

		.focus-card {
			min-height: 180px;
		}
	}
</style>
