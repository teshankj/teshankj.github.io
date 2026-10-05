<script lang="ts">
	let mobileOpen = false;

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Tech Stack', href: '#tech-stack' },
		{ label: 'Education', href: '#education' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Publications', href: '#publications' },
		{ label: 'Contact', href: '#contact' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header class="navbar">
	<div class="nav-container">
		<a class="brand" href="/" aria-label="Teshan Jayasinghe home">
			<span class="brand-mark">TJ</span>
			<span class="brand-name">Teshan Jayasinghe</span>
		</a>

		<nav class:open={mobileOpen} aria-label="Main navigation">
			{#each links as link}
				<a href={link.href} onclick={closeMobile}>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			class="menu-button"
			aria-label="Toggle navigation"
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<span></span>
			<span></span>
		</button>
	</div>
</header>

<style>
	.navbar {
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(8, 8, 8, 0.72);
		backdrop-filter: blur(18px);
	}

	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: min(1180px, calc(100% - 40px));
		height: 72px;
		margin: 0 auto;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 11px;
		font-weight: 600;
		white-space: nowrap;
	}

	.brand-mark {
		display: grid;
		width: 34px;
		height: 34px;
		place-items: center;
		border: 1px solid var(--border);
		border-radius: 9px;
		background: var(--surface);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.75rem;
	}

	.brand-name {
		font-size: 0.9rem;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 26px;
	}

	nav a {
		color: var(--text-secondary);
		font-size: 0.8rem;
		transition:
			color 180ms ease,
			transform 180ms ease;
	}

	nav a:hover {
		color: var(--text);
		transform: translateY(-1px);
	}

	.menu-button {
		display: none;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.menu-button span {
		display: block;
		width: 22px;
		height: 1px;
		margin: 5px;
		background: var(--text);
	}

	@media (max-width: 900px) {
		nav {
			position: absolute;
			top: 72px;
			left: 0;
			display: none;
			flex-direction: column;
			align-items: stretch;
			width: 100%;
			padding: 18px 20px 24px;
			border-bottom: 1px solid var(--border);
			background: rgba(8, 8, 8, 0.96);
		}

		nav.open {
			display: flex;
		}

		nav a {
			padding: 12px 0;
		}

		.menu-button {
			display: block;
		}
	}

	@media (max-width: 500px) {
		.nav-container {
			width: calc(100% - 28px);
		}

		.brand-name {
			display: none;
		}
	}
</style>