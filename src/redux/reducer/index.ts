/***
 * 按文件名导出所有的reducer
 * */
const models = import.meta.globEager('./*.ts');
for(let item in models){
   const newKey = models[item].default.namespace;
   models[newKey] = models[item].default;
   delete models[item];
}
export default function reducer(state = {}, action) {
   if(!action?.type || action.type.indexOf(`/`) === -1){
      throw new Error('没有正确的type');
   }
   const type = action.type.split('/'); //
   const modelName: string = type[0];
   const model: object = models[modelName]; //对应的model
   const initState: object = {};
   for(let item in models){
      initState[item] = models[item].state || {}; // 初始化state
   }
   if(!model){
      return initState; // 没有找到model模型 直接return state
   }
   initState[modelName] = model[type[1]](action?.payload);
   return initState;
}

