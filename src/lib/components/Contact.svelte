<script lang="ts">
	import Icon from '@iconify/svelte';

	const contactLinks = [
		{
			label: 'Email',
			value: 'teshanjayasinghe9@gmail.com',
			href: 'mailto:teshanjayasinghe9@gmail.com',
			icon: 'lucide:mail'
		},
		{
			label: 'LinkedIn',
			value: 'LinkedIn',
			href: 'https://www.linkedin.com/in/teshan-jayasinghe-060787252',
			icon: 'simple-icons:linkedin'
		},
		{
			label: 'GitHub',
			value: 'github.com/teshankj',
			href: 'https://github.com/teshankj',
			icon: 'simple-icons:github'
		}
	];
</script>

<section id="contact" class="section contact">
	<div class="container">
		<div class="contact-header">
			<div>
				<p class="section-label">07 — Contact</p>

				<h2>
					Let's
					<br />
					<span>connect.</span>
				</h2>
			</div>

			<p class="contact-intro">
				I'm open to research collaborations, AI/ML engineering opportunities,
				and projects involving MLOps, computer vision, trustworthy AI, and intelligent systems.
			</p>
		</div>

		<div class="contact-layout">
			<div class="contact-message">
				<p class="contact-kicker">Open to opportunities</p>

				<h3>
					Research,
					<span>innovation</span>
					& engineering.
				</h3>

				<p>
					
				</p>

				<a
					class="email-button"
					href="mailto:teshanjayasinghe9@gmail.com"
				>
					Start a conversation
				</a>
			</div>

			<div class="contact-links">
				{#each contactLinks as contact}
					<a
						class="contact-card"
						href={contact.href}
						target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
					>
						<div class="contact-icon">
							<Icon icon={contact.icon} width="19" height="19" />
						</div>

						<div class="contact-card-content">
							<span>{contact.label}</span>
							<strong>{contact.value}</strong>
						</div>

					</a>
				{/each}

				<div class="contact-card location-card">
					<div class="contact-icon">
						<Icon icon="lucide:map-pin" width="19" height="19" />
					</div>

					<div class="contact-card-content">
						<span>Location</span>
						<strong>Sri Lanka</strong>
					</div>
				</div>
			</div>
		</div>

		<div class="interest-strip">
			<span>Currently interested in</span>

			<div>
				<span>Trustworthy AI</span>
				<span>MLOps</span>
				<span>Computer Vision</span>
				<span>Deep Learning</span>
				<span>Edge AI</span>
				<span>Intelligent Systems</span>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		border-top: 1px solid var(--border);
	}

	.contact-header {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 80px;
		align-items: end;
		margin-bottom: 90px;
	}

	.contact-header h2 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(4rem, 8vw, 7rem);
		font-weight: 500;
		line-height: 0.88;
		letter-spacing: -0.07em;
	}

	.contact-header h2 span {
		color: var(--text-muted);
	}

	.contact-intro {
		max-width: 440px;
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.8;
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 100px;
	}

	.contact-message {
		max-width: 520px;
	}

	.contact-kicker {
		margin: 0 0 18px;
		color: var(--text-muted);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.contact-message h3 {
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2rem, 4vw, 3.4rem);
		font-weight: 500;
		line-height: 1;
		letter-spacing: -0.05em;
	}

	.contact-message h3 span {
		color: var(--text-muted);
	}

	.contact-message > p:not(.contact-kicker) {
		margin: 28px 0 30px;
		color: var(--text-secondary);
		font-size: 0.9rem;
		line-height: 1.8;
	}

	.email-button {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 12px 16px;
		border-radius: 7px;
		background: var(--text);
		color: var(--bg);
		font-size: 0.76rem;
		font-weight: 600;
		transition: transform 180ms ease;
	}

	.email-button:hover {
		transform: translateY(-2px);
	}

	.contact-links {
		border-top: 1px solid var(--border);
	}

	.contact-card {
		display: flex;
		align-items: center;
		gap: 18px;
		min-height: 85px;
		padding: 15px 0;
		border-bottom: 1px solid var(--border);
		color: inherit;
		transition:
			padding 180ms ease,
			background 180ms ease;
	}

	a.contact-card:hover {
		padding-left: 10px;
	}

	.contact-icon {
		display: grid;
		width: 40px;
		height: 40px;
		flex-shrink: 0;
		place-items: center;
		border: 1px solid var(--border);
		border-radius: 7px;
		color: var(--text-muted);
	}

	.contact-card-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 5px;
		min-width: 0;
	}

	.contact-card-content span {
		color: var(--text-muted);
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.contact-card-content strong {
		overflow: hidden;
		color: var(--text-secondary);
		font-size: 0.82rem;
		font-weight: 500;
		text-overflow: ellipsis;
		white-space: nowrap;
	}


	.interest-strip {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		margin-top: 80px;
		padding-top: 25px;
		border-top: 1px solid var(--border);
		color: var(--text-muted);
		font-size: 0.68rem;
	}

	.interest-strip > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 8px 22px;
	}

	@media (max-width: 800px) {
		.contact-header,
		.contact-layout {
			grid-template-columns: 1fr;
			gap: 50px;
		}

		.contact-header {
			margin-bottom: 60px;
		}

		.interest-strip {
			flex-direction: column;
		}

		.interest-strip > div {
			justify-content: flex-start;
		}
	}
</style>
