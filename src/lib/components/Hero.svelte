<section class="hero" id="home">
	<div class="hero-grid"></div>

	<div class="container hero-content">
		<!-- Hero text -->
		<div class="hero-text">
			<div class="availability">
				<span class="status-dot"></span>
				<span>Available for opportunities</span>
			</div>

			<p class="eyebrow">AI / ML Researcher & Engineer</p>

			<h1>
				Building intelligent
				<span>systems.</span>
			</h1>

			<p class="description">
				I work across multimodal AI, computer vision, trustworthy
				machine learning, and intelligent systems — turning research
				ideas into practical engineering solutions.
			</p>

			<!-- Action buttons -->
			<div class="actions">
				<a class="primary-button" href="#projects">
					View Projects
					<span aria-hidden="true">↗</span>
				</a>

				<a class="secondary-button" href="#contact">
					Get in touch
				</a>

				<a
					class="secondary-button cv-button"
					href="documents/Teshan_Jayasinghe_CV.pdf"
					download="Teshan_Jayasinghe_CV.pdf"
				>
					<svg
						viewBox="0 0 24 24"
						width="17"
						height="17"
						fill="none"
						stroke="currentColor"
						stroke-width="1.7"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
						<path d="m7 10 5 5 5-5" />
						<path d="M12 15V3" />
					</svg>
					Download CV
				</a>
			</div>

			<div class="hero-meta">
				<span>Computer Vision</span>
				<span>Multimodal AI</span>
				<span>MLOps</span>
				<span>Embedded Intelligence</span>
			</div>
		</div>

		<!-- Circular portrait -->
		<div class="hero-image">
			<div class="portrait-glow"></div>

			<div class="portrait-frame">
				<img
					src="/images/Profile_bg.png"
					alt="Portrait of Teshan Jayasinghe"
					fetchpriority="high"
				/>
			</div>

			<div class="portrait-caption">
				<span class="caption-dot"></span>
				<span>Research · Engineering · Innovation</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		display: flex;
		align-items: center;
		min-height: 100vh;
		min-height: 100svh;
		overflow: hidden;
		padding: 120px 0 80px;
		background: var(--bg);
	}

	.hero-grid {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background-image:
			linear-gradient(
				rgba(255, 255, 255, 0.035) 1px,
				transparent 1px
			),
			linear-gradient(
				90deg,
				rgba(255, 255, 255, 0.035) 1px,
				transparent 1px
			);
		background-size: 70px 70px;
		mask-image: linear-gradient(to bottom, black, transparent 90%);
		-webkit-mask-image: linear-gradient(
			to bottom,
			black,
			transparent 90%
		);
	}

	.hero-grid::after {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at 65% 40%,
			rgba(255, 255, 255, 0.055),
			transparent 45%
		);
		content: '';
	}

	.hero-content {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
		align-items: center;
		gap: clamp(30px, 5vw, 75px);

		width: min(1180px, calc(100% - 64px));
		margin-inline: auto;
	}

	.hero-text {
		min-width: 0;
	}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		margin-bottom: 28px;
		padding: 9px 13px;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.025);
		color: var(--text-secondary);
		font-size: 0.75rem;
	}

	.status-dot,
	.caption-dot {
		width: 7px;
		height: 7px;
		flex-shrink: 0;
		border-radius: 50%;
		background: #8ee6a0;
		box-shadow: 0 0 12px rgba(142, 230, 160, 0.5);
	}

	.eyebrow {
		margin: 0 0 16px;
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.04em;
	}

	h1 {
		max-width: 760px;
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(3.8rem, 6.5vw, 7rem);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.075em;
		overflow-wrap: normal;
	}

	h1 span {
		display: block;
		color: transparent;
		background: linear-gradient(100deg, #fff 5%, #858585 100%);
		background-clip: text;
		-webkit-background-clip: text;
	}

	.description {
		max-width: 590px;
		margin: 27px 0 0;
		color: var(--text-secondary);
		font-size: clamp(0.98rem, 1.3vw, 1.1rem);
		line-height: 1.8;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-top: 30px;
	}

	.primary-button,
	.secondary-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		min-height: 46px;
		padding: 12px 16px;
		border: 1px solid transparent;
		border-radius: 8px;
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		white-space: nowrap;
		transition:
			transform 180ms ease,
			background 180ms ease,
			border-color 180ms ease,
			color 180ms ease;
	}

	.primary-button {
		background: var(--text);
		color: var(--bg);
	}

	.primary-button:hover {
		transform: translateY(-2px);
		background: #dedede;
	}

	.secondary-button {
		border-color: var(--border);
		background: rgba(255, 255, 255, 0.02);
		color: var(--text);
	}

	.secondary-button:hover {
		transform: translateY(-2px);
		border-color: var(--border-hover);
		background: var(--surface);
	}

	.cv-button {
		border-color: rgba(255, 255, 255, 0.18);
		background: rgba(255, 255, 255, 0.045);
	}

	.cv-button svg {
		flex-shrink: 0;
		opacity: 0.8;
	}

	.cv-button:hover svg {
		opacity: 1;
	}

	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 22px;
		margin-top: 52px;
		color: var(--text-muted);
		font-size: 0.73rem;
	}

	.hero-meta span {
		position: relative;
	}

	.hero-meta span:not(:last-child)::after {
		position: absolute;
		top: 50%;
		right: -13px;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: var(--text-muted);
		content: '';
		transform: translateY(-50%);
	}

	/* Portrait */
	.hero-image {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-width: 0;
	}

	.portrait-glow {
		position: absolute;
		top: 15%;
		width: 90%;
		aspect-ratio: 1;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(255, 255, 255, 0.13),
			rgba(255, 255, 255, 0.025) 45%,
			transparent 70%
		);
		filter: blur(25px);
		pointer-events: none;
	}

	.portrait-frame {
		position: relative;
		width: min(100%, 420px);
		aspect-ratio: 1;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		background: radial-gradient(
			circle at 50% 35%,
			#292929,
			#101010 65%,
			#080808
		);
		box-shadow:
			0 0 0 8px rgba(255, 255, 255, 0.015),
			0 25px 90px rgba(0, 0, 0, 0.35);
	}

	.portrait-frame img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		filter: none;
		opacity: 1;
		transition: transform 400ms ease;
	}

	.portrait-frame:hover img {
		transform: scale(1.035);
	}

	.portrait-caption {
		position: relative;
		display: flex;
		align-items: center;
		gap: 9px;
		margin-top: 22px;
		color: var(--text-muted);
		font-size: 0.72rem;
		letter-spacing: 0.025em;
	}

	.caption-dot {
		width: 6px;
		height: 6px;
		background: #b4b4b4;
		box-shadow: none;
	}

	@media (min-width: 1500px) {
		.portrait-frame {
			width: min(100%, 460px);
		}
	}

	@media (max-width: 1000px) {
		.hero-content {
			grid-template-columns: minmax(0, 1fr) minmax(240px, 0.72fr);
			gap: 28px;
		}

		h1 {
			font-size: clamp(3.5rem, 7vw, 5.5rem);
		}

		.portrait-frame {
			width: 100%;
		}

		.hero-meta {
			gap: 10px 18px;
		}
	}

	@media (max-width: 700px) {
		.hero {
			min-height: auto;
			padding: 105px 0 65px;
		}

		.hero-content {
			grid-template-columns: minmax(0, 1fr);
			gap: 32px;
		}

		/* Show the portrait clearly on mobile */
		.hero-image {
			grid-row: 1;
		}

		.hero-text {
			grid-row: 2;
		}

		.portrait-frame {
			width: min(68vw, 270px);
		}

		.portrait-caption {
			margin-top: 15px;
			font-size: 0.68rem;
		}

		.availability {
			margin-bottom: 22px;
		}

		.eyebrow {
			font-size: 0.82rem;
		}

		h1 {
			font-size: clamp(3.25rem, 12.5vw, 5rem);
			line-height: 0.99;
			letter-spacing: -0.075em;
		}

		.description {
			margin-top: 22px;
			font-size: 0.98rem;
			line-height: 1.75;
		}

		.actions {
			gap: 9px;
			margin-top: 25px;
		}

		.primary-button,
		.secondary-button {
			min-height: 45px;
			padding: 11px 13px;
			font-size: 0.77rem;
		}

		.hero-meta {
			gap: 10px 20px;
			margin-top: 35px;
			font-size: 0.7rem;
		}
	}

	@media (max-width: 380px) {
		h1 {
			font-size: clamp(2.9rem, 12vw, 3.4rem);
		}

		.actions {
			gap: 8px;
		}

		.primary-button,
		.secondary-button {
			padding: 10px 11px;
			font-size: 0.73rem;
		}

		.portrait-frame {
			width: min(65vw, 235px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.primary-button,
		.secondary-button,
		.portrait-frame img {
			transition: none;
		}
	}
</style>