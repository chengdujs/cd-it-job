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
  // 以上为基本信息，接着是基本用户的附加信息
  favoriteJob: Array<ObjectId>, // 收藏的职位（Id）
  favoriteCompany: Array<ObjectId>, // 收藏的公司（Id）
  // 以下是HR的附加信息
  isJobPoster: boolean, // 是否是职位发布者
  applyStatus: string, // 申请为HR，状态（'待申请', '审核中', '通过'）
  applyInfo: { // 申请时填写的相关信息
    componyName: string, // 公司名称
    componyPhone: string, // 公司电话
    fullName: string, // 姓名
    phoneNumber: string // 个人电话
  }
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
  interviewEvaluation: Array<{
    userId: ObjectId,
    evaluationContent: string, // 评价内容
    descScore: number, // 描述符合度评分（星级）
    interviewerScore: number, // 面试官评分
    environmentScore: number, // 公司环境评分
    tags: Array<string>, // 标签
    stars: Array<ObjectId>, // 点赞人员
    createDate: long // 评价时间
  }> //面试评价
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

## 简历信息表（resume）

```
{
  _id: ObjectId, // 主键
  userId: ObjectId,
  resumeName: string, // 简历名称
  // 基本信息
  name: string,
  sex: string,
  birthday: long,
  education: string,
  workYears: string, // 工作年限
  city: string,
  phoneNumber: string,
  emailAddress: string,
  selfIntro: string, // 自我介绍
  // 社交链接
  socialLinks: Array<{
    name: string, // 名称，如QQ，weibo
    linkAddress: string, // 主页地址
    createDate: long
  }>,
  // 工作经历
  workExperience: Array<{
    companyName: string, // 公司名称
    jobTitle: string, // 职位
    startDate: string, // 在职时间（开始）
    endDate: string, // 离职时间（结束）
    workContent: string, // 工作内容
    createDate: long // 创建日期
  }>,
  // 教育经历
  educationExperience: Array<{
    schoolName: string,
    majorName: string, // 专业名称
    education: string, // 最高学历
    graduationYear: number, // 毕业年份
    createDate: long
  }>,
  // 项目经验
  projectExperience: Array<{
    projectName: string, // 项目名称
    workContent: string, // 职责（工作内容）
    startDate: string, // 开始时间（起）
    endDate: string, // 结束时间（止）
    projectDesc: string,
    projectLink: string,
    createDate: long
  }>,
  // 作品
  products: Array<{
    name: string, // 作品名称
    linkAddress: string, // 作品链接
    imageAddress: string, // 作品图片地址
    description: string, // 作品描述
    createDate: long // 创建时间
  }>,
  // 期望工作
  wishWork: {
    jobTitle: string,
    jobType: string, // 全职，兼职，实习
    city: string,
    salary: string, // 薪水范围
    description: string, // 补充说明
    createDate: long
  }
}
```

## 收藏职位表（jobCollection）

```
{
  _id: ObjectId(), // 主键
  name: ObjectId, // 职位名称
  city: ObjectId, // 所在城市
  logoUrl: ObjectId, // logo地址
  salary: ObjectId, // 薪资范围
  comName: ObjectId // 公司名称
}
```
