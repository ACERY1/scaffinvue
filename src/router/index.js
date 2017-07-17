const test = r => require.ensure([], () => r(require('../TEST.vue')), 'test'); // 本地测试

export default[
	{
		path: '/test',
		name: 'test',
		component: test
	},
	{
		path:'',
		redirect:'/test'
	}
];
