/*
* @Author: Chen
* @Date:   2020-01-06 19:07:09
* @Last Modified by:   Chen
* @Last Modified time: 2020-01-06 20:51:23
*/
//唯一更改state的方法
//mutation必须是同步函数
import { ADD_TODO,DEL_TODO,SELECT_ALL_TODO,DELETE_ALL_DONE } from './types.js'
export default {
	[ADD_TODO](state,todo){
		state.todos.unshift(todo)
	},
	[DEL_TODO](state,index){
		state.todos.splice(index,1)
	},
	[SELECT_ALL_TODO](state,value){
		state.todos.forEach((item)=>{
            item.done = value
        })
	},
	[DELETE_ALL_DONE](state){
		state.todos = state.todos.filter((item)=>item.done != true)
	},
}