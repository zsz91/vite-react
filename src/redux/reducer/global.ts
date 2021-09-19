// 全局数据
const global = {
    namespace: 'global',
    state: {
       activeMenu: '/Home',
    }, // 初始值
    changeActiveMenu: function(payload){
        return {
            ...this.state,
            activeMenu: payload?.activeMenu,
        };
    },



}
export default global;
