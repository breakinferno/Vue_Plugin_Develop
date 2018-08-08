// 使用mock server 这里废弃

// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import Mock from 'mockjs'
// import Api from '../api'
// import {
//   Comments
// } from './data'

// export default {
//   /**
//    * mock start
//    */
//   start () { // 初始化函数
//     let mock = new MockAdapter(axios) // 创建 MockAdapter 实例
//     // 获取comments列表
//     mock.onGet(Api.getComments).reply(config => { //  config 指 前台传过来的值
//       let mockComments = Comments.map(comment => { // 重组 Todos数组，变成我们想要的数据
//         return {
//           id: comment.id,
//           title: comment.title

//         }
//       }).filter(tode => {
//         if (tode.isDelete === true) return false // 过滤掉 ‘isDelete’为true，因为已经被删除了。
//         return true
//       })
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve([200, {
//             comments: mockComments // 返回状态为200，并且返回todos数据
//           }])
//         }, 200)
//       })
//     })
//     // 新增一条Comment
//     mock.onPost('/todo/addTodo').reply(config => {
//       Comments.push({
//         id: Mock.Random.guid(),
//         title: 'newList',
//         isDelete: false,
//         locked: false,
//         record: []
//       })
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve([200])
//         }, 200)
//       })
//     })
//   }
// }
