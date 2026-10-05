<section class="hero">
	<div class="hero-grid"></div>

	<div class="container hero-content">
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
				I work across multimodal AI, computer vision, trustworthy machine learning,
				and intelligent systems — turning research ideas into practical engineering
				solutions.
			</p>

			<div class="actions">
				<a class="primary-button" href="#projects">
					View Projects
				</a>

				<a class="secondary-button" href="#contact">
					Get in touch
				</a>
			</div>

			<div class="hero-meta">
				<span>Computer Vision</span>
				<span>Multimodal AI</span>
				<span>MLOps</span>
				<span>Embedded Intelligence</span>
			</div>
		</div>

		<div class="hero-image">
			<img
				src="/images/Profile_bg.png"
				alt="Teshan Jayasinghe"
			/>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		display: flex;
		min-height: 100vh;
		align-items: center;
		overflow: hidden;
		padding: 120px 0 80px;
	}

	.hero-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
		background-size: 70px 70px;
		mask-image: linear-gradient(to bottom, black 0%, transparent 85%);
		pointer-events: none;
	}

	.hero-grid::after {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.055), transparent 42%);
		content: '';
	}

	.hero-content {
		position: relative;
		z-index: 1;
        display: grid;
	    grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
	    align-items: center;
	    gap: 40px;
	}

.hero-image {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	height: min(720px, 82vh);

	overflow: hidden;
	pointer-events: none;

	mask-image: linear-gradient(
		to bottom,
		black 0%,
		black 68%,
		transparent 96%
	);

	-webkit-mask-image: linear-gradient(
		to bottom,
		black 0%,
		black 68%,
		transparent 96%
	);
}

.hero-image img {
	width: 100%;
	max-width: 520px;
	height: 100%;

	object-fit: contain;
	object-position: center bottom;

	filter: none;
	opacity: 1;
}

.hero-image::before {
	content: '';

	position: absolute;
	width: 70%;
	height: 70%;

	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0.08),
		transparent 65%
	);

	filter: blur(45px);

	z-index: -1;
}

.hero-image::after {
	content: '';

	position: absolute;
	left: 10%;
	right: 10%;
	bottom: 0;

	height: 35%;

	background: linear-gradient(
		to bottom,
		transparent,
		var(--bg)
	);

	pointer-events: none;
}

.hero-image:hover img {
	filter: None;
	opacity: 1;
	transform: translateY(-6px);
}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		margin-bottom: 28px;
		padding: 8px 12px;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.025);
		color: var(--text-secondary);
		font-size: 0.75rem;
	}

	.status-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #8ee6a0;
		box-shadow: 0 0 12px rgba(142, 230, 160, 0.6);
	}

	.eyebrow {
		margin: 0 0 16px;
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.04em;
	}

	h1 {
		max-width: 900px;
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(4rem, 9vw, 8.5rem);
		font-weight: 600;
		line-height: 1.0;
		letter-spacing: -0.075em;
	}

	h1 span {
		display: block;
		color: transparent;
		background: linear-gradient(90deg, #ffffff, #737373);
		background-clip: text;
		-webkit-background-clip: text;
	}

	.description {
		max-width: 620px;
		margin: 30px 0 0;
		color: var(--text-secondary);
		font-size: clamp(1rem, 1.5vw, 1.15rem);
		line-height: 1.7;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 36px;
	}

	.primary-button,
	.secondary-button {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 13px 18px;
		border-radius: 8px;
		font-size: 0.85rem;
		font-weight: 600;
		transition:
			transform 180ms ease,
			background 180ms ease,
			border-color 180ms ease;
	}

	.primary-button {
		background: var(--text);
		color: #080808;
	}

	.secondary-button {
		border: 1px solid var(--border);
		color: var(--text);
	}

	.primary-button:hover,
	.secondary-button:hover {
		transform: translateY(-2px);
	}

	.secondary-button:hover {
		border-color: var(--border-hover);
		background: var(--surface);
	}

	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 24px;
		margin-top: 70px;
		color: var(--text-muted);
		font-size: 0.75rem;
	}

	.hero-meta span {
		position: relative;
	}

	.hero-meta span:not(:last-child)::after {
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

@media (max-width: 900px) {
	.hero-content {
		grid-template-columns: 1fr;
		gap: 30px;
	}

	.hero-image {
		position: absolute;
		right: -80px;
		bottom: -20px;
		width: 55%;
		height: 70%;
		opacity: 0.28;
		z-index: -1;
	}

	.hero-image img {
		max-width: 420px;
	}

	.hero-text {
		position: relative;
		z-index: 2;
	}
}

@media (max-width: 700px) {
	.hero {
		min-height: auto;
		padding: 150px 0 90px;
	}

	h1 {
		font-size: clamp(3.4rem, 17vw, 5.5rem);
	}

	.hero-image {
		right: -100px;
		width: 75%;
		height: 65%;
		opacity: 0.2;
	}

	.hero-meta {
		margin-top: 50px;
	}
}
</style>