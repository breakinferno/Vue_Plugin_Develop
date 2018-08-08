var Mock = require('mockjs')

const Random = Mock.Random
let Comments = []
const count = 10 // 先来10个数据
function mockComment () {
  return Mock.mock({ // 根据数据模板生成模拟数据。
    id: Random.guid(), // 随机id
    title: Random.ctitle(), // 随机标题
    parentId: '',
    time: Random.date('T'),
    ...Mock.mock({'anonymous|1': true}),
    avatar: Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
    nickname: Random.cname(),
    email: Mock.mock('@email'),
    ip: Random.ip(),
    content: Random.cparagraph(1, 5)
  })
}

for (let i = 0; i < count; i++) {
  Comments.push(mockComment())
}

module.exports = () => {
  return {
    'comments': [...Comments]
  }
}

// module.exports = { // 导出列表数据
//   Comments
// }
