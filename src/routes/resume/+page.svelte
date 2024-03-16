<script lang="ts">
	import type { Skillset as SkillsetType } from '#types/Skillset';
	import type { Timline as TimelineType } from '#types/Timeline';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	import Skillset from '$lib/components/Skillset/Skillset.svelte';

	export let skills: SkillsetType['skills'] = [
		{
			name: 'PHP'
		},
		{
			name: 'HTML5'
		},
		{
			name: 'CSS3'
		},
		{
			name: 'JavaScript'
		},
		{
			name: 'ReactJS'
		},
		{
			name: 'NodeJS'
		},
		{
			name: 'Angular'
		},
		{
			name: 'VueJS'
		},
		{
			name: 'Python'
		},
		{
			name: 'Ruby on Rails'
		},
		{
			name: 'Java'
		},
		{
			name: 'ASP.NET'
		},
		{
			name: 'MySQL'
		},
		{
			name: 'MongoDB'
		},
		{
			name: 'Docker'
		},
		{
			name: 'Git'
		}
	];
	let experience: TimelineType['events'] = [
		{
			id: 1,
			institution: 'Greymass',
			position: 'Project Manager, Web Developer',
			period: 'July 2023 — Present',
			description:
				'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
		},
		{
			id: 2,
			institution: 'Bullish',
			position: 'Manager: Web Engineering',
			period: 'Feb 2020 — June 2023',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			id: 3,
			institution: 'SDG Agency',
			position: 'Lead Web Developer',
			period: '2019 — Feb 2020',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			id: 4,
			institution: 'Grafik Agency',
			position: 'Backend Developer',
			period: 'Jul 2018 — Mar 2019',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			id: 5,
			institution: '3Men Team',
			position: 'Lead WordPress Developer',
			period: 'Nov 2015 — Apr 2018',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			id: 6,
			institution: 'Endava',
			position: 'Backand Developer',
			period: 'Oct 2013 — Sep 2015',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			id: 7,
			institution: 'Magicindie Softworks',
			position: 'Unity Developer',
			period: 'Aug 2008 — Sep 2013',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		}
	];
	let education: TimelineType['events'] = [
		{
			id: 1,
			institution: 'Moldova State University',
			position: 'Student',
			period: '2004 — 2008',
			description: 'Bachelor of Computer Science'
		}
	];
</script>

<section class="skillset">
	<h2 class="title title--h2 mt-3">My Skills</h2>
	<Skillset {skills} />
</section>

<!-- Experience -->
<Timeline heading={'Experience'} logo={'feathericon-briefcase'} timelineEvents={experience} />

<!-- Education -->
<Timeline heading={'Education'} logo={'feathericon-book-open'} timelineEvents={education} />
