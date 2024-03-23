<script lang="ts">
	import type { Skillset as SkillsetType } from '#types/Skillset';
	import type { Timeline as TimelineType } from '#types/Timeline';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	import Skillset from '$lib/components/Skillset/Skillset.svelte';

	let softSkills: SkillsetType['skills'] = [
		{
			name: 'Team Coordination'
		},
		{
			name: 'Project Oversight'
		},
		{
			name: 'Agile Leadership'
		},
		{
			name: 'Scrum Mastery'
		},
		{
			name: 'Stakeholder Liaison'
		},
		{
			name: 'Delivery Management'
		},
		{
			name: 'AI Integration'
		},
		{
			name: 'Jira'
		},
		{
			name: 'ClickUp'
		},
		{
			name: 'Basecamp'
		},
		{
			name: 'Asana'
		},
		{
			name: 'Trello'
		}
	];
	let hardSkills: SkillsetType['skills'] = [
		{
			name: 'AWS'
		},
		{
			name: 'GCP'
		},
		{
			name: 'TypeScript'
		},
		{
			name: 'JavaScript'
		},
		{
			name: 'PHP'
		},
		{
			name: 'Ruby'
		},
		{
			name: 'C#'
		},
		{
			name: 'React'
		},
		{
			name: 'Next.js'
		},
		{
			name: 'WordPress'
		},
		{
			name: 'Symfony'
		},
		{
			name: 'Laravel'
		},
		{
			name: 'Ruby on Rails'
		},
		{
			name: 'MySQL'
		},
		{
			name: 'PostgreSQL'
		},
		{
			name: 'MongoDB'
		}
	];
	let experience: TimelineType['events'] = [
		{
			id: 7,
			institution: '<a href="https://greymass.com/" target="_blank" aria-label="Greymass Website" rel="noopener noreferrer">Greymass</a>',
			position: 'Project Manager, Web Developer',
			period: 'July 2023 — Present',
			description:
				'Provide project management and web development services for a blockchain-focused enterprise dedicated to the public good. Streamline the development of a <a href="https://wharfkit.com/" target="_blank" aria-label="WharfKit SDK Website" rel="noopener noreferrer">modular SDK for Antelope Web Apps</a> and support the advancement of the blockchain game project <a href="https://shiploadgame.com/" target="_blank" aria-label="Shipload Game Website" rel="noopener noreferrer">Shipload</a>.'
		},
		{
			id: 6,
			institution: '<a href="https://bullish.com/" target="_blank" aria-label="Bullish Website" rel="noopener noreferrer">Bullish</a>',
			position: 'Manager: Web Engineering',
			period: 'Feb 2020 — June 2023',
			description: '- Led the <a href="https://bullish.com/" target="_blank" aria-label="Bullish Website" rel="noopener noreferrer">Bullish website</a> development, achieving completion 2 weeks ahead of schedule.<br>' +
				'- Upgraded the <a href="https://bullish.com/" target="_blank" aria-label="Bullish Website" rel="noopener noreferrer">Bullish website</a> to a headless CMS and NEXT.js, resulting in a 390% improvement in load time.<br>' +
				'- Eliminated the backend dependency of the <a href="https://bullish.com/" target="_blank" aria-label="Bullish Website" rel="noopener noreferrer">Bullish website</a> by leveraging GCP<br>' +
				'- Incorporated automated selenium tests into the development workflow.\n<br>' +
				'- Created an in-house SaaS intranet platform to reduce costs.<br>' +
				'- Directed the development of the <a href="https://b1.com/" target="_blank" aria-label="B1 Website" rel="noopener noreferrer">B1 Corporation</a> website, successfully launching within 7 days.<br>' +
				'- Oversaw a team of developers in India, enhancing productivity and code quality through Scrum/Jira.<br>' +
				'- Developed and maintained five web properties: <a href="https://b1.com/" target="_blank" aria-label="B1 Website" rel="noopener noreferrer">b1.com</a>, <a href="https://eos.io/" target="_blank" aria-label="EOSIO Website" rel="noopener noreferrer">eos.io</a>, <a href="https://voice.com/" target="_blank" aria-label="Voice Website" rel="noopener noreferrer">voice.com</a>, <a href="https://vc.eos.io/" target="_blank" aria-label="VC EOS Website" rel="noopener noreferrer">vc.eos.io</a>, <a href="https://hackathon.eos.io/" target="_blank" aria-label="EOS Hackathon Website" rel="noopener noreferrer">hackathon.eos.io</a>'
		},
		{
			id: 5,
			institution: 'SDG Agency',
			position: 'Lead Web Developer',
			period: '2019 — Feb 2020',
			description:
				'- Led a geographically dispersed web development team in servicing two US companies <a href="https://dgci.com" target="_blank" aria-label="DGCI Website" rel="noopener noreferrer">DGC International</a> and <a href="https://petromg.com/" target="_blank" aria-label="PMG Website" rel="noopener noreferrer">Petrolium Marketing Group</a><br>' +
				'- Reviewed and maintained the codebase of web resources<br>' +
				'- Create automated tool for updating property locations on the map from a list of addresses leveraging GCP'
		},
		{
			id: 4,
			institution: '<a href="https://grafik.agency/" target="_blank" aria-label="Grafik Agency Website" rel="noopener noreferrer">Grafik</a>',
			position: 'Backend Developer',
			period: 'Jul 2018 — Mar 2019',
			description: '- <a href="https://vanmetrehomes.com/" target="_blank" aria-label="Van Meter Homes Website" rel="noopener noreferrer">Van Metre Homes</a> – Backend developer, bug fixing. Utilized Symfony/Pimcore<br>' +
				'- <a href="https://vanmetrecommercial.com/" target="_blank" aria-label="Van Meter Commercials Website" rel="noopener noreferrer">Van Metre Commercials</a> – Fullstack developer, bug fixing. Utilized Symfony/Pimcore<br>' +
				'- <a href="https://www.multiplyinggood.org/" target="_blank" aria-label="Multiplying Good Website" rel="noopener noreferrer">Multiplying Good</a> – Fullstack developer, bug fixing. Utilized Symfony/Pimcore<br>' +
				'- <a href="https://grafik.agency/" target="_blank" aria-label="Grafik Agency Website" rel="noopener noreferrer">Grafik Agency</a> – Backend for new landing page for Grafik website. Utilized WordPress, ACF'
		},
		{
			id: 3,
			institution: '3Men Team',
			position: 'Lead WordPress Developer',
			period: 'Nov 2015 — Apr 2018',
			description: '- Led a geographically dispersed team specializing in WordPress CMS'
		},
		{
			id: 2,
			institution: 'Endava',
			position: 'Backend Developer',
			period: 'Oct 2013 — Sep 2015',
			description: '- Backend development utilizing Symfony, MySQL, PostgreSQL, PHPUnit\n' +
				'Developed solutions for internal company use.'
		},
		{
			id: 1,
			institution: 'Magicindie Softworks',
			position: 'Unity Developer',
			period: 'Aug 2008 — Sep 2013',
			description: 'Developed games for PC/MAC/Mobile utilizing C# and Unity Engine'
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
	<h2 class="title title--h2 mt-3">Soft Skills</h2>
	<Skillset skills={softSkills} />
	<h2 class="title title--h2 mt-3">Hard Skills</h2>
	<Skillset skills={hardSkills} />
</section>

<!-- Experience -->
<Timeline heading={'Experience'} logo={'feathericon-briefcase'} timelineEvents={experience} />

<!-- Education -->
<Timeline heading={'Education'} logo={'feathericon-book-open'} timelineEvents={education} />
