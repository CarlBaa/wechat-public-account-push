export const config = {
  APP_ID: "wx10bc3f4fca63e3db",
  APP_SECRET: "036ebeb385ea9a83453a2c4e8e9d8280",
 
  USERS: [
    {
    
      name: "A",
    
      id: "ox2Jg6YDb2JdKfA3EIw8Ugd3Tzvk",
    
      useTemplateId: "-j-hu3-7vedctTOWrR8guQezF9asAMIOoodwFZ-a3eg",
      
      province: "四川",

      city: "遂宁",
    
      openUrl: "https://neumorphism.io/#926363"
    }, 
    {
      name: "", 
      id: "",
      useTemplateId: "",
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

 
//   // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
//   CALLBACK_USERS: [
//     {
//       // 一般都填自己
//       name: "",
//       // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: "",
//     }, 
//   ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "四川",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "成都",

  /** 重要节日相关 */
  FESTIVALS: [
    {"type": "生日", "name": "你", "year": "2002", "date": "10-10"},
    {"type": "生日", "name": "我", "year": "2002", "date": "10-16"},
  
  ],

  /**
  FESTIVALS_LIMIT: 2,

  /** 日期相关 */

  CUSTOMIZED_DATE_LIST: [
    // 一起
    {"keyword": "love_day", date: "2022-07-19"},
    // 结婚纪念日
//     {"keyword": "marry_day", date: "2022-07-19"},

    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */


  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
//     {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    
    // 这样配置的话，就会每次随机选一句话发送
    
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */
  LITERARY_PREFERENCE: "有照片视频请主动发给我看"
}
