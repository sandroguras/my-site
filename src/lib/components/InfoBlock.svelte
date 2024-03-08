<script lang="ts">
import type { InfoBlock as InfoBlockType } from '#types/InfoBlock';

export let infoBlock: InfoBlockType = {
	icon: 'feathericon-user',
	title: 'Client',
	content: 'ArtTemplate'
}
</script>

<article class="infoblock__item">
	<span class="box icon-box"><i class="font-icon {infoBlock.icon}"></i></span>
	<div class="infoblock__info">
		<span class="overhead">{infoBlock.title}</span>
		<span>{infoBlock.content}</span>
	</div>
</article>

<style lang="scss">
  @import "#styles/app/infoblock";
</style>