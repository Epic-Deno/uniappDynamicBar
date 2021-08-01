<template>
	<view class="nav_tabbar">
		<navigator class="nav_tabbar_item" :class="currentlyKey == item['text'] && 'nav_tabbar_item_active'" open-type="switchTab" :url="item['pagePath']" v-for="(item, index) in tabbarList" :key="index">
			<image class="nav_tabbar_item_icon" :src="currentlyKey == item['text'] ? item['selectedIconPath'] : item['iconPath']"></image>
			<text class="nav_tabbar_item_label">{{ item['text'] }}</text>
		</navigator>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:"NavTabber",
		props: {
			currentlyKey: {
				type: String,
				required: true
			}
		},
		data() {
			return {};
		},
		computed: {
			...mapState(['tabbarList'])
		}
	}
</script>

<style lang="scss">

</style>
