export const config = {
  APP_ID: "wx10bc3f4fca63e3db",
  APP_SECRET: "036ebeb385ea9a83453a2c4e8e9d8280",
  USERS: [
    {
      name: "Carl",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ox2Jg6YDb2JdKfA3EIw8Ugd3Tzvk",
      
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "9FL4DHp1oX_D8XIrAs_jFO27Kk2ClMEuiOHy15_MZyE",
      
      province: "四川",
      city: "射洪",
      openUrl: "https://neumorphism.io/#926363"
    }, 
    {
      name: "木子", 
      id: "",
      useTemplateId: "9FL4DHp1oX_D8XIrAs_jFO27Kk2ClMEuiOHy15_MZyE",
      province: "四川",
      city: "凉山",
      openUrl: "https://neumorphism.io/#926363"
    }, 
    {
      name: "2",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://neumorphism.io/#926363"
    }, 
    {
      name: "3", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://neumorphism.io/#926363"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "A",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ox2Jg6YDb2JdKfA3EIw8Ugd3Tzvk",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "四川",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "凉山",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   */
  FESTIVALS: [
    {"type": "生日", "name": "木子", "year": 2002", "date": "10-10"},
    {"type": "破壳日", "name": "我", "year": "2002", "date": "10-16"},
//     {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
//     {"type": "节日", "name": "日", "year": "2021", "date": "09-01"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 2,

  /** 日期相关 */

  /** 
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 一起的日子
    {"keyword": "love_day", date: "2022-07-19"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2022-07-19"},

    // sakana日
    // {"keyword": "sakana_day", date: "2022-07-19"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
