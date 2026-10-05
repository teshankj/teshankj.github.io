<script lang="ts">
	import Navbar from '#lib/components/Navbar.svelte';
    import Hero from '#lib/components/Hero.svelte';
    import About from '#lib/components/About.svelte';
    import Experience from '#lib/components/Experience.svelte';
    import TechStack from '#lib/components/TechStack.svelte';
    import Education from '#lib/components/Education.svelte';
    import Projects from '#lib/components/Projects.svelte';
    import Publications from '#lib/components/Publications.svelte';
    import Contact from '#lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Teshan Jayasinghe — AI/ML Researcher & Engineer</title>

	<meta
		name="description"
		content="Teshan Jayasinghe — AI/ML researcher and engineer working across computer vision, multimodal AI, trustworthy machine learning, and intelligent systems."
	/>
</svelte:head>

<Navbar />

<main>
	<Hero />
    <About />
    <Experience />
    <TechStack />
    <Education />
    <Projects />
    <Publications />
    <Contact />
</main>
