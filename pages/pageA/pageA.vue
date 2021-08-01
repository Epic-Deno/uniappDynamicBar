<template>
	<view>
		政民互动
		<button type="default" @click="asyncCommitUserMode(2)">两个tab</button>
		<button type="default" @click="asyncCommitUserMode(1)">三个tab</button>
		<NavTabbar currentlyKey="政民互动"/>
	</view>
</template>

<script>
	import NavTabbar from "../../components/NavTabbar.vue"
	import { mapActions } from 'vuex'
	export default {
		components:{
			NavTabbar
		},
		data() {
			return {
				
			};
		},
		methods: {
			...mapActions(['asyncCommitUserMode']),
		}
	}
</script>

<style lang="scss">

</style>
