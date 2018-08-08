var Mock = require('mockjs')
// 测试mock server
module.exports = () => {
  return {
    user: Mock.mock({
      'name': '@name',
      'age|18-25': 22,
      'sex': 'girl'
    })
  }
}
