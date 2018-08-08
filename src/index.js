// 参数
import LFComment from './LFComment'
import Constant, { DEFAULT_TIME_AGO, DEFAULT_TIME_FORMAT } from '../constant'
import timeago from 'timeago.js'
const timeagoInstance = timeago()

function getNowFormatDate (date) {
  let seperator1 = '-'
  let seperator2 = ':'
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
          ' ' + date.getHours() + seperator2 + date.getMinutes() +
          seperator2 + date.getSeconds()
  return currentdate
}

const install = function (Vue, options) {
  const _Vue = Vue
  const {
    defaultAvatarURL = Constant.DEFAULT_AVATAR_URL,
    ip = Constant.IP,
    anonymous = Constant.ANONYMOUS,
    email = Constant.EMAIL,
    theme = Constant.THEME,
    nickname = Constant.DEFAULT_NICKNAME,
    favorite = Constant.DEFAULT_FAVORITE,
    commentBoxHeight = Constant.DEFAULT_SINGLE_COMMENT_BOX_HEIGHT,
    commentsBoxHeight = Constant.DEFAULT_COMMENTS_BOX_HEIGHT,
    commentLength = Constant.DEFAULT_COMMENT_LENGTH,
    skin = Constant.DEFAULT_SKIN,
    timeAgo = DEFAULT_TIME_AGO,
    timeFormat = DEFAULT_TIME_FORMAT
  } = options

  let $LFComment = {
    defaultAvatarURL,
    ip,
    anonymous,
    email,
    theme,
    nickname,
    favorite,
    commentBoxHeight,
    commentLength,
    commentsBoxHeight,
    skin,
    timeAgo,
    timeFormat,
    formatDate: (date) => {
      if (timeAgo) {
        return timeagoInstance(date)
      }
      return getNowFormatDate(date)
    }
  }

  _Vue.prototype.$LFComment = $LFComment
  // 1. 添加全局方法或属性
  _Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  _Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }

  })

  // 3. 注入组件
  // _Vue.mixin({
  //   created: function () {
  //     // 逻辑...
  //   }
  // })
  // _Vue.use(innerView)

  // 4. 添加实例方法
  _Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }

  _Vue.component('LFComment', LFComment)
}
export default {install}
