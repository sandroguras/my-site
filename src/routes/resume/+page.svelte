<script lang="ts">
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	import Skillset from "$lib/components/Skillset.svelte";

	let experience: string[] = [
		{
			institution: 'Greymass',
			position: 'Project Manager, Web Developer',
			period: 'July 2023 — Present',
			description:
				'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
		},
		{
			institution: 'Bullish',
			position: 'Manager: Web Engineering',
			period: 'Feb 2020 — June 2023',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			institution: 'SDG Agency',
			position: 'Lead Web Developer',
			period: '2019 — Feb 2020',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			institution: 'Grafik Agency',
			position: 'Backend Developer',
			period: 'Jul 2018 — Mar 2019',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			institution: '3Men Team',
			position: 'Lead WordPress Developer',
			period: 'Nov 2015 — Apr 2018',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			institution: 'Endava',
			position: 'Backand Developer',
			period: 'Oct 2013 — Sep 2015',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			institution: 'Magicindie Softworks',
			position: 'Unity Developer',
			period: 'Aug 2008 — Sep 2013',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
	];

	let education: string[] = [
		{
			position: 'Moldova State University',
			period: '2004 — 2008',
			description:
				'Bachelor of Computer Science'
		}
	];
</script>

<!-- Experience -->
<Timeline name={'Experience'} logo={'feathericon-briefcase'} timelineArticles={experience} />

<!-- Education -->
<Timeline name={'Education'} logo={'feathericon-book-open'} timelineArticles={education} />

<Skillset />

<!-- Skills -->
<h2 class="title title--h2 mt-3">My Skills</h2>
<div class="box box-inner mb-0">
	<!-- Web Design -->
	<div class="progress">
		<div class="progress-text"><span>Web Design</span> 80%</div>
		<div class="progress-bar">
			<span role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></span>
		</div>
	</div>

	<!-- Web Design -->
	<div class="progress">
		<div class="progress-text"><span>Graphic Design</span> 75%</div>
		<div class="progress-bar">
			<span role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></span>
		</div>
	</div>

	<!-- Web Design -->
	<div class="progress">
		<div class="progress-text"><span>Branding</span> 90%</div>
		<div class="progress-bar">
			<span role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></span>
		</div>
	</div>

	<!-- Web Design -->
	<div class="progress">
		<div class="progress-text"><span>WordPress</span> 50%</div>
		<div class="progress-bar">
			<span role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
		</div>
	</div>
</div>
