# IT-JOB数据表设计（MongoDB）

## 用户信息表（users ）

```
{
  _id: ObjectId, // 主键
  username: string, // 用户名
  password: string, // 密码
  sex: string, // 性别
  city: string, // 城市
  province: string, // 省份
  country: string, // 国家
  avatarUrl: string, // 头像
  nickname: string // 昵称
  openId: string, // 微信OpenId
  unionId: string, // 微信UnionId
  createDate: long, // 注册时间
  lastUpdateDate: long, //最后更新时间
  // 以上为基本信息
  favoriteJob: Array<ObjectId>, // 收藏的职位（Id）
  favoriteCompany: Array<ObjectId>, // 收藏的公司（Id）
}
```

**注：该表大部分属性和微信一致，方便接入微信登录，另外username+password为扩展，方便以后自有账号登录。**

## 职位表（jobs）

```
{
  _id: ObjectId(), // 主键
  name: string, // 职位名称
  salary: string, // 薪资范围
  city: string, //工作地点
  workExperience: string, //工作经验
  education: string, // 学历要求
  jobTemptation: string, // 职位诱惑
  jobDescription: string, // 职位描述
  workArea: string, // 工作地址（可以选的那部分）
  workAddress: string, // 工作地址（手动输入的那部分）
  createDate: long, // 发布时间
  createBy: ObjectId, // 发布者
  lastUpdateDate: long, // 最后更新时间
  lastUpdateBy: ObjectId, // 最后更新人
  // 以上为基本信息
  interviewEvaluation: Array<Object> //面试评价
}
```

## 公司表（company）

```
{
  _id: ObjectId(), // 主键
  name: string, //公司名称
  logoUrl: string, // logo地址
  city: string, // 所在城市
  financingStage: string, // 融资阶段
  industry: string, // 行业领域
  staffTotalNumber: string, // 员工总数
  address: string // 办公地址
  description: string, // 公司介绍
  createDate: long, // 创建该记录的时间（非公司创建时间）
  createBy: ObjectId, // 创建人（非公司创建人）
  lastUpdateDate: long, // 最后更新时间
  lastUpdateBy: ObjectId, // 最后更新人
  // 以上为基本信息

}
```
