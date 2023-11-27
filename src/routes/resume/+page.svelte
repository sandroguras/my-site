<script lang="ts">
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	let experience: string[] = [
		{
			title: 'Creative Director',
			period: '2015 — Present',
			description:
				'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
		},
		{
			title: 'Art Director',
			period: '2013 — 2015',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			title: 'Web Designer',
			period: '2010 — 2013',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		}
	];

	let education: string[] = [
		{
			title: 'University School of the Arts',
			period: '2007 — 2009',
			description:
				'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
		},
		{
			title: 'New York Academy of Art',
			period: '2005 — 2007',
			description:
				'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..'
		},
		{
			title: 'High School of Art and Design',
			period: '2003 — 2005',
			description:
				'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
		}
	];
</script>

<!-- Experience -->
<Timeline name={'Experience'} logo={'feathericon-briefcase'} timelineArticles={experience} />

<!-- Education -->
<Timeline name={'Education'} logo={'feathericon-book-open'} timelineArticles={education} />

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
