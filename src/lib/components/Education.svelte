<section id="education" class="section education">
	<div class="container">
		<div class="section-header">
			<div>
				<p class="section-label">04 — Education</p>

				<h2>
					Foundation for
					<br />
					<span>building systems.</span>
				</h2>
			</div>

			<p class="section-description">
				An engineering foundation combining electronics, communication systems,
				computing, mathematics, and machine learning.
			</p>
		</div>

		<div class="education-list">
			<!-- University -->
			<article class="education-item">
				<div class="education-period">
					<span>2022</span>
					<span>—</span>
					<span>2026</span>
				</div>

				<div class="education-content">
					<div class="education-heading">
						<div>
							<h3>B.Tech in Electronics and Communication Engineering</h3>

							<p class="institution">
								Delhi Technological University
							</p>

							<p class="location">
								Delhi, India
							</p>
						</div>

						<span class="education-number">01</span>
					</div>

					<div class="education-details">
						<div class="detail">
							<span class="detail-label">Degree</span>
							<span class="detail-value">Bachelor of Technology</span>
						</div>

						<div class="detail">
							<span class="detail-label">CGPA</span>
							<span class="detail-value">7.90 / 10</span>
						</div>
					</div>

					<div class="education-tags">
						<span>Electronics</span>
						<span>Communication Systems</span>
						<span>Signal Processing</span>
						<span>Embedded Systems</span>
						<span>Machine Learning</span>
					</div>
				</div>
			</article>

			<!-- School -->
			<article class="education-item">
				<div class="education-period">
					<span>2012</span>
					<span>—</span>
					<span>2020</span>
				</div>

				<div class="education-content">
					<div class="education-heading">
						<div>
							<h3>Advanced Level — Physical Science Stream</h3>

							<p class="institution">
								Nalanda College
							</p>

							<p class="location">
								Colombo 10, Sri Lanka
							</p>
						</div>

						<span class="education-number">02</span>
					</div>
					<div class="education-details">
	
					</div>


					<div class="education-tags">
						<span>Physical Science</span>
						<span>Mathematics</span>
						<span>Physics</span>
						<span>Chemistry</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

<style>
	.education {
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

	.education-list {
		border-top: 1px solid var(--border);
	}

	.education-item {
		display: grid;
		grid-template-columns: 180px 1fr;
		border-bottom: 1px solid var(--border);
	}

	.education-period {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 30px 30px 30px 0;
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.75rem;
	}

	.education-content {
		padding: 30px 0 45px 50px;
		border-left: 1px solid var(--border);
	}

	.education-heading {
		display: flex;
		justify-content: space-between;
		gap: 30px;
	}

	.education-heading h3 {
		max-width: 700px;
		margin: 0 0 10px;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
		line-height: 1.25;
		letter-spacing: -0.025em;
	}

	.institution {
		margin: 0;
		color: var(--text);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.location {
		margin: 5px 0 0;
		color: var(--text-muted);
		font-size: 0.8rem;
	}

	.education-number {
		color: var(--text-muted);
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.75rem;
	}

	.education-details {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		margin: 35px 0 25px;
	}

	.detail {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.detail-label {
		color: var(--text-muted);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.detail-value {
		color: var(--text-secondary);
		font-size: 0.82rem;
	}

	.education-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.education-tags span {
		padding: 7px 10px;
		border: 1px solid var(--border);
		border-radius: 5px;
		color: var(--text-muted);
		font-size: 0.7rem;
	}

	@media (max-width: 800px) {
		.section-header {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-bottom: 60px;
		}

		.education-item {
			grid-template-columns: 1fr;
		}

		.education-period {
			flex-direction: row;
			padding: 25px 0 15px;
		}

		.education-content {
			padding: 15px 0 45px;
			border-left: 0;
		}
	}

	@media (max-width: 550px) {
		.education-heading {
			flex-direction: column;
			gap: 15px;
		}

		.education-details {
			gap: 25px;
		}
	}
</style>