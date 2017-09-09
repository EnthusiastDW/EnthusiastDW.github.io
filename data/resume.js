var base = [
	{
		icon:"photo",
		field:"name",
		message:"邓伟"
	},{
		icon:"birth",
		field:"birth",
		message:"1993.09"
	},{
		icon:"home",
		field:"home",
		message:"四川泸州"
	},{
		icon:"location",
		field:"location",
		message:"上海-浦东新区"
	},{
		icon:"phone",
		field:"phone",
		message:"18208309570"
	},{
		icon:"email",
		field:"email",
		message:"deng_wei_2011@126.com"
	},{
		icon:"QQ",
		field:"QQ",
		message:"569490941"
	}
];

//类型支持三种：table list text 
//table默认只有一行，要多行和跨列colspan自行设置
//每个list和td之间用;分割
var data = [
	{
		title:"教育经历",
		type:"table",
		content:"2011.9-2015.6;南京航空航天大学;统招本科"
	},{
		title:"外语能力",
		type:"table",
		content:"英语;CET4;听说读写良好"
	},{
		title:"工作经历",
		type:"table",
		content:"2015.07-2017.02;上海怡星机电设备有限公司;技术支持;</tr><tr><td></td><td colspan=2>公司员工电脑维护，熟练使用office编写技术文档。项目前期根据用户需求推荐符合的产品，或者进行产品调研，编写技术方案。在公司整天是做重复的文档编辑工作，没有什么技术含量，我想在技术方面有所发展，由于对编程有较大兴趣，故选择转行。</tr>"
	},{
		title:"培训经历",
		type:"table",
		content:"2017.03-2017.08;济南易途科技有限公司;</tr><tr><td></td><td  colspan=2>大学学过C语言，有一定编程基础，希望通过培训快速入门少走弯路，经同学推荐在这里学了5个多月，对这个行业有了较深的理解；熟练掌握java语言编程、持久层技术、mvc框架、前端框架等来进行web应用的开发，学会如何解决问题、查看文档、查询资料；做过一些实践：基本的CRUD，权限管理，单点登录，solr全文搜索，redis缓存应用等。<br>学的比较多，也比较杂，后来发现培训这些也并没有想象中那么难，自己看视频看资料也能学会，就是缺乏项目实践经验，希望工作以后边工作边学习，得到更大提升。</td></tr>"
	},{
		title:"个人能力",
		type:"list",
		content:"熟悉web应用的开发;熟悉HTML、CSS、JavaScript、ajax、jQuery、bootstrap、easyUI等前端技术;熟练使用Java语言编写后端业务代码，熟悉集合、多线程、IO流、常用设计模式;熟练使用JSP、Servlet、Struts2、Spring、SpringMVC进行web开发;熟练使用JDBC、Mybatis和Hibernate持久层技术;熟悉MySQL和Oracle数据库，熟练使用SQL语句对数据库进行操作;了解redis数据库，熟悉SVN项目整合，了解maven仓库和多模块开发;熟练使用MyEclipse、Eclipse、Navicat等开发工具，具有良好的编写注释和开发文档的习惯"
	},{
		title:"兴趣爱好",
		type:"list",
		content:"逛技术论坛和博客，学习和实践有趣的技术;坚持运动，保持精力充沛，应对高负荷的工作;喜欢阅读，拒绝浮躁"
	}
];

var other = [
	{
		title:"自我评价",
		type:"text",
		content:"我的优势：编程思维敏捷，逻辑清晰，自学和应用能力强，热爱编程，对新技术有较高的兴趣，喜欢探索和实践。有强烈的责任意识和团队协作意识，能吃苦，期待挑战。",
	},{
		title:"职业目标",
		type:"text",
		content:"在工作中运用自身的技能和优势实现自己的价值，并且为公司创造价值；在工作和业余不断提升自己，得到更好的职业发展，向技术方向进步。"
	}
];