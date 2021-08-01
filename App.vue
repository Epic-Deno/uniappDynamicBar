<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		uni.hideTabBar();// 隐藏原生的tabbar
		this.$store.dispatch('asyncCommitUserMode', 1);// 这里后期登录就是动态的权限
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
::v-deep .uni-tabbar-bottom {
	display: none;
}
.nav_tabbar {
	position: fixed;
	left: var(--window-left);
	right: var(--window-right);
	display: flex;
	box-sizing: border-box;
	width: 100%;
	z-index: 99999;
	background-color: rgb(255, 255, 255);
	backdrop-filter: none;
	padding-bottom: env(safe-area-inset-bottom);
	border-top: 1px solid rgba(0, 0, 0, 0.33);
	bottom: 0;
	&* {
		box-sizing: border-box;
	}
	&_item {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		font-size: 0;
		text-align: center;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		min-height: 50px;
		&_icon {
			width: 24px;
			height: 24px;
			position: relative;
			display: inline-block;
			margin-top: 5px;
		}
		&_label {
			font-size: 20rpx;
			line-height: normal;
			margin-top: 6rpx;
			color: rgb(122, 126, 131);
		}
		&_active > * {
			color: rgb(1, 148, 255);
		}
	}
}
</style>
