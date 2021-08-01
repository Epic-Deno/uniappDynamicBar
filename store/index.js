import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
const primaryArray = [{
		iconPath: "/static/home.png",
		selectedIconPath: "/static/home-active.png",
		text: '食安大厅',
		customIcon: false,
		pagePath: "/pages/index/index"
	},
	{
		iconPath: "/static/workOrder.png",
		selectedIconPath: "/static/workOrder-active.png",
		text: '政民互动',
		customIcon: false,
		pagePath: "/pages/pageA/pageA"
	},
	{
		iconPath: "/static/userCenter.png",
		selectedIconPath: "/static/userCenter-active.png",
		text: '我的',
		customIcon: false,
		pagePath: "/pages/pageB/pageB"
	}
]
const store = new Vuex.Store({

	state: {
		tabbarList: [],
		userMode: 1, // 人员模式
	},

	mutations: {
		change_userMode(state, mode) {
			state['userMode'] = mode;
			const baseArr = JSON.parse(JSON.stringify(primaryArray));// 拷贝一份数据
			mode == 2 ? (state['tabbarList'] = baseArr.filter(i => i['text'] != '食安大厅')) : (state['tabbarList'] = baseArr)
		}
	},
	actions: {
		asyncCommitUserMode({commit}, type) {
			commit('change_userMode', type)
		}
	},
})

export default store;
