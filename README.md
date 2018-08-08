# lfment

> A Vue.js project. To complete a comment 'system'

## Build Setup

``` bash
# install dependencies
npm install

# you maybe install json-server when you local development
npm i -g json-server

# local develop will start mock server and example
npm run mock

# just to develop
npm run dev

# build for production with minification
npm run build
```

## 技术栈

Vue + ElementUI + MongoDB + Koa2

## TodoList

### 站主

- [ ] 删除任意评论
- [ ] 获取评论数
- [ ] 屏蔽ip或者特定用户

### 所有用户

- [ ] 评论
- [ ] 回复
- [ ] 举报
- [ ] 订阅提醒(邮件)
- [ ] 赞/踩
- [ ] @人


### 功能性

- [ ] markdown评论
- [ ] 模式选择，三种模式：楼中楼、流、引用
- [ ] 评论数加载，赞数加载，踩数加载
- [ ] 支持图片，表情
- [ ] 评论缓存
- [ ] 分页
- [ ] 三方登录????

## 思路/设计

### 数据表设计

决定采用楼中楼形式，这样可以将话题的讨论集中

传入文章id

```JSON
// 几种模式选择

// 1. 无限模式，即评论回复没有任何限制，任何人都可以对评论或者回复做评论（做这种）

// 2. 主客模式, 客人评论主人文章，主人可以回复客人，客人可以对主人回复进行回复，一次循环。但不允许在这过程中出现第三个人插入评论和回复，第三人只能另起对主人文章的评论。

// 3. 限制层级模式
{
  "commentId": "0",
  "code": 0,        // 状态码
  "articleId": "1",// 文章
  "title": "测试", // 简单的回传该文章信息
  // "like": 233,     // 赞
  // "unlike": 23,    // 踩
  "count": 20,        // 评论数目
  "data": [        // 评论信息
    {
      // "pid" : 0,   // 评论id  感觉没啥必要了，因为存在一个collection里
      "content": "一级测试",
      "time": "1233223323",
      "anonymous": false,
      "ip": "127.0.0.1",
      "email": "ceshi@qq.com",
      "avatar": "url",
      "nickname": "breakinferno",
      "like": 3,
      "unlike": 3,
      "reply":[{
          "content": "回复一级测试的二级测试",
          "time": "1233223323",
          "anonymous": false,
          "ip": "127.0.0.1",
          "email": "ceshi@qq.com",
          "avatar": "url",
          "nickname": "xianyu",
          "replay": [
            {
              "content": "回复回复一级测试的二级测试的三级测试",
              "time": "1233223323",
              "anonymous": false,
              "ip": "127.0.0.1",
              "email": "ceshi@qq.com",
              "avatar": "url",
              "nickname": "wodetain",
              "replay":[]
            }
          ]
        }]
    },
    {
      "content": "又一个一级测试",
      "time": "1233223323",
      "anonymous": false,
      "ip": "127.0.0.1",
      "email": "ceshi@qq.com",
      "avatar": "url",
      "nickname": "breakinferno",
      "reply": [{
          "content": "测试",
          "time": "1233223323",
          "anonymous": false,
          "ip": "127.0.0.1",
          "email": "ceshi@qq.com",
          "avatar": "url",
          "nickname": "breakinferno",
        }
        ]
    }
  ]
}

// 评论是需要知道父评论id
// 评论数据
{
  "id": "111",
  "parentId": "32223",
  "children": [],
  "content": "测试",
  "time": "1233223323",
  "anonymous": false,
  "ip": "127.0.0.1",
  "email": "ceshi@qq.com",
  "avatar": "url",
  "nickname": "xianyu",
}

```

### 流程设计

一个简单的路径寻找问题，没有啥特别复杂的流程。现在在学习redis，由于评论更改也不是特别频繁，所以看是否可以使用redis做评论缓存。

### UI设计

emmm，UI苦手，参照wildfire吧。

### 其他

想用一下RxJS，但是感觉没地方用啊。。。

### 设计改动

数据库设计改动点：每个表只保存评论，层级关系由children和parent来确定

用户请求一个文章的评论数据时，返回所有该文章的评论，然后经过转换函数转为树状结构返回（其实也可以前端进行转换）然后通过渲染展现




