const test2 = {
    namespace: 'test2',
    state: {
        name: '我是这个囤里土生土长的人',
    }, // 初始值
    changeName: function(payload){
        return {
            ...this.state,
            name: payload?.name + Math.random(),
        };
    },
    changeName2: function(payload){
        return {
            ...this.state,
            name: payload?.name + Math.random(),
        };
    }


}
export default test2;
