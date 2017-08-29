/**
 * Created by Mtime on 2017/7/21.
 */
/*
名称
金额
消费类型（生活费、护肤品、交通费、通讯费、衣服、生活用品、中药、贷款、商品分期、健身、美食、请客、
         增值业务、医药、朋友消费、水果、家人消费、学习费用、其他）
消费平台（实体店、现金）
支付方式（现金）
是否必需
-- 是否有便宜的选择
时间*/

var billData = [
    {
        billDate: "2017-06",
        earning: [{
            salary: "9,673.57",
            other: [
                {
                    otherEarning: "",
                    otherSource: "樊迪"
                }
            ]
        }],
        bills: [
            {
                name: "烤动力吃饭",
                money: "98.50",
                consumeType: "美食",
                consumePlatform: "实体店",
                payment: "招商银行",
                must: "0",
                date: "2017-06-10",
                remark: ""
            },
            {
                name: "永辉超市购物",
                money: "45.00",
                consumeType: "生活费",
                consumePlatform: "实体店",
                payment: "招商银行",
                must: "1",
                date: "2017-06-10",
                remark: ""
            },
            {
                name: "小静话费",
                money: "40.00",
                consumeType: "通讯费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-11"
            },
            {
                name: "早上打小车到公司",
                money: "10.00",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-12",
                remark: "早上没睡好"
            },
            {
                name: "百度网盘超级会员",
                money: "27",
                consumeType: "增值业务",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "0",
                date: "2017-06-12",
                remark: ""
            },
            {
                name: "美食卡充值",
                money: "100",
                consumeType: "生活费",
                consumePlatform: "实体店",
                payment: "招商银行",
                must: "1",
                date: "2017-06-12"
            },
            {
                name: "绿荫杯子",
                money: "39.00",
                consumeType: "生活用品",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-12",
                remark: "卖家发了两个杯子"
            },
            {
                name: "宿本红色长裙子(去年有一件)",
                money: "26.25",
                consumeType: "衣服",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "0",
                date: "2017-06-12",
                remark: "集分宝中的积分抵押了--元"
            },
            {
                name: "丢丢白色露肩T恤与抹胸背心",
                money: "116.49",
                consumeType: "衣服",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-13",
                remark: ""
            },
            {
                name: "每日瑜伽会员",
                money: "18.00",
                consumeType: "增值业务",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-13",
                remark: ""
            },
            {
                name: "地铁卡",
                money: "50.00",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-14",
                remark: ""
            },
            {
                name: "摩拜充值",
                money: "5.00",
                consumeType: "交通费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-14",
                remark: ""
            },
            {
                name: "摩拜充值",
                money: "20.00",
                consumeType: "交通费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-15",
                remark: ""
            },
            {
                name: "味多美",
                money: "38.3",
                consumeType: "美食",
                consumePlatform: "实体店",
                payment: "招商银行",
                must: "",
                date: "2017-06-16",
                remark: ""
            },
            {
                name: "苹果iclude",
                money: "20.00",
                consumeType: "增值业务",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-16",
                remark: ""
            },
            {
                name: "回龙观买药",
                money: "154.47",
                consumeType: "医药",
                consumePlatform: "",
                payment: "招商银行",
                must: "1",
                date: "2017-06-16",
                remark: ""
            },
            {
                name: "回龙观挂号",
                money: "50.00",
                consumeType: "医药",
                consumePlatform: "",
                payment: "招商银行",
                must: "1",
                date: "2017-06-16",
                remark: ""
            },
            {
                name: "玲玲的外卖",
                money: "25.50",
                consumeType: "朋友消费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-17",
                remark: ""
            },
            {
                name: "樱桃+芒果",
                money: "36.08",
                consumeType: "朋友消费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-17",
                remark: "去看郭圣坤"
            },
            {
                name: "地铁卡",
                money: "100",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "小车三轮",
                money: "5",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "佰草集",
                money: "420",
                consumeType: "护肤品",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "寿司外卖",
                money: "25",
                consumeType: "生活费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "苹果+桃子",
                money: "29",
                consumeType: "水果",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "味多美",
                money: "142.6",
                consumeType: "朋友消费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "烤鸭",
                money: "50",
                consumeType: "朋友消费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "清洗空调",
                money: "150",
                consumeType: "其他消费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-18",
                remark: ""
            },{
                name: "话费",
                money: "29.98",
                consumeType: "通讯费",
                consumePlatform: "支付宝",
                payment: "支付宝",
                must: "1",
                date: "2017-06-19",
                remark: ""
            },{
                name: "小静生日、嘉禾一品",
                money: "68",
                consumeType: "家人消费",
                consumePlatform: "支付宝",
                payment: "支付宝",
                must: "1",
                date: "2017-06-20",
                remark: ""
            },{
                name: "美食卡",
                money: "100",
                consumeType: "生活费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-21",
                remark: ""
            },{
                name: "双眼皮贴",
                money: "9.9",
                consumeType: "生活费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-21",
                remark: ""
            },{
                name: "手机膜",
                money: "18.8",
                consumeType: "生活费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-22",
                remark: ""
            },{
                name: "晚上小三轮",
                money: "10",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-22",
                remark: ""
            },{
                name: "午饭牛肉拉面",
                money: "16",
                consumeType: "生活费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-23",
                remark: ""
            },{
                name: "打小车",
                money: "5",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-23",
                remark: ""
            },{
                name: "鲍师傅蛋糕",
                money: "6.8",
                consumeType: "美食",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-23",
                remark: ""
            },{
                name: "烤动力",
                money: "63.5",
                consumeType: "美食",
                consumePlatform: "实体店",
                payment: "现金",
                must: "1",
                date: "2017-06-23",
                remark: ""
            },{
                name: "外卖",
                money: "25",
                consumeType: "生活费",
                consumePlatform: "微信",
                payment: "招商银行",
                must: "1",
                date: "2017-06-24",
                remark: ""
            },{
                name: "去微软大厦打车",
                money: "38.4",
                consumeType: "交通费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-24",
                remark: ""
            },{
                name: "京东(牛奶、js书)",
                money: "115.35",
                consumeType: "生活费",
                consumePlatform: "京东",
                payment: "招商银行",
                must: "1",
                date: "2017-06-25",
                remark: ""
            },{
                name: "去姐姐那打车钱",
                money: "19.04",
                consumeType: "交通费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-25",
                remark: ""
            },{
                name: "晚上回家打车",
                money: "13.96+(10.12集分宝)",
                consumeType: "交通费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-25",
                remark: ""
            },{
                name: "给姐姐带酸奶",
                money: "55",
                consumeType: "生活费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-25",
                remark: ""
            },{
                name: "时光网(抱枕、包、卡套)",
                money: "188.9",
                consumeType: "生活用品",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-26",
                remark: ""
            },{
                name: "去公司打小三轮",
                money: "10",
                consumeType: "交通费",
                consumePlatform: "现金",
                payment: "现金",
                must: "1",
                date: "2017-06-26",
                remark: ""
            },{
                name: "阿里云服务器",
                money: "79.75",
                consumeType: "学习费用",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "0",
                date: "2017-06-28",
                remark: ""
            },{
                name: "电费",
                money: "100",
                consumeType: "生活费",
                consumePlatform: "微信",
                payment: "现金",
                must: "1",
                date: "2017-06-28",
                remark: ""
            },{
                name: "丝袜4双",
                money: "69",
                consumeType: "生活费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-29",
                remark: ""
            },{
                name: "美食卡",
                money: "92.07",
                consumeType: "生活费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-30",
                remark: ""
            },{
                name: "南锣鼓巷名创优品包与帽子",
                money: "64.90",
                consumeType: "衣服",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-30",
                remark: ""
            },
            {
                name: "过客",
                money: "310",
                consumeType: "朋友消费",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "1",
                date: "2017-06-30",
                remark: ""
            },{
                name: "玲玲买的物件",
                money: "-55",
                consumeType: "其他",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-06-30",
                remark: ""
            },{
                name: "手绘地图",
                money: "10",
                consumeType: "其他",
                consumePlatform: "微信",
                payment: "招商银行",
                must: "0",
                date: "2017-06-30",
                remark: ""
            },{
                name: "京东PLUS会员",
                money: "129",
                consumeType: "增值业务",
                consumePlatform: "京东",
                payment: "招商银行",
                must: "1",
                date: "2017-07-01",
                remark: ""
            },{
                name: "外卖寿司",
                money: "25",
                consumeType: "生活费",
                consumePlatform: "微信",
                payment: "招商银行",
                must: "1",
                date: "2017-07-01",
                remark: ""
            },{
                name: "哈根达斯",
                money: "43",
                consumeType: "美食",
                consumePlatform: "支付宝",
                payment: "招商银行",
                must: "0",
                date: "2017-07-01",
                remark: ""
            },{
                name: "话费",
                money: "150",
                consumeType: "通讯费",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-01",
                remark: ""
            },{
                name: "小静hm衣服",
                money: "457.9",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-01",
                remark: ""
            },{
                name: "矿泉水",
                money: "2",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-01",
                remark: ""
            },{
                name: "刘曦晨拉丁",
                money: "60",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-01",
                remark: ""
            },{
                name: "烤动力",
                money: "92",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-02",
                remark: ""
            },{
                name: "中医挂号、中药",
                money: "813.67",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-02",
                remark: ""
            },{
                name: "健胃消食片",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-02",
                remark: ""
            },{
                name: "康王",
                money: "31",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-02",
                remark: ""
            },{
                name: "凤凰岭",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-02",
                remark: ""
            },{
                name: "拔丝蛋糕",
                money: "10",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-02",
                remark: ""
            },{
                name: "水费",
                money: "70",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-03",
                remark: ""
            },{
                name: "水果",
                money: "20",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-03",
                remark: ""
            },{
                name: "小静话费",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-03",
                remark: ""
            },{
                name: "京东",
                money: "108",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-04",
                remark: ""
            },{
                name: "馋嘴猫午饭",
                money: "23",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-04",
                remark: ""
            },{
                name: "船长号",
                money: "210",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-05",
                remark: ""
            },{
                name: "美食卡",
                money: "99.6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-06",
                remark: ""
            },{
                name: "花呗账单(美容仪分期)",
                money: "106",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-07",
                remark: ""
            },{
                name: "农村娃的小书桌捐赠",
                money: "30",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-07",
                remark: ""
            },{
                name: "测试转账",
                money: "12",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-07",
                remark: ""
            },{
                name: "蔬菜",
                money: "33.3",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-08",
                remark: ""
            },
            {
                name: "猪肉",
                money: "9.2",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-08",
                remark: ""
            },{
                name: "牛腩",
                money: "26",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-08",
                remark: ""
            },{
                name: "同仁堂挂号50",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-09",
                remark: ""
            },{
                name: "中药",
                money: "444.96",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-09",
                remark: ""
            },{
                name: "果美佳水果",
                money: "38.6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-09",
                remark: ""
            },{
                name: "给买妈妈",
                money: "2100",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-10",
                remark: ""
            }
        ]
    },
    {
        billDate: "2017-07",
        earning: [{
            salary: "9,673.57",
            other: [
                {
                    otherEarning: "",
                    otherSource: "樊迪"
                }
            ]
        }],
        bills: [
            {
                name: "京东",
                money: "78.5",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-11",
                remark: ""
            },{
                name: "忘了=",
                money: "20",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-11",
                remark: ""
            },{
                name: "给红普买水",
                money: "2",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-12",
                remark: ""
            },{
                name: "凉皮",
                money: "29.6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-13",
                remark: ""
            },{
                name: "护眼仪",
                money: "678.75",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-13",
                remark: ""
            },{
                name: "小静转账",
                money: "100",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-14",
                remark: ""
            },{
                name: "小码头",
                money: "129",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-15",
                remark: ""
            },{
                name: "水果",
                money: "32.6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-15",
                remark: ""
            },{
                name: "苹果的ichude",
                money: "6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-16",
                remark: ""
            },{
                name: "中药",
                money: "444.96",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-17",
                remark: ""
            },{
                name: "苹果",
                money: "10.9",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-17",
                remark: ""
            },{
                name: "刨丝器",
                money: "49",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-17",
                remark: ""
            },{
                name: "眉笔+指甲油",
                money: "68",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-18",
                remark: ""
            },{
                name: "丢丢三件衣服",
                money: "228",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-18",
                remark: ""
            },{
                name: "热敷眼罩",
                money: "95",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-18",
                remark: ""
            },{
                name: "安全裤",
                money: "19",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-18",
                remark: ""
            },{
                name: "午饭用。。的卡",
                money: "18",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-19",
                remark: ""
            },{
                name: "美食卡",
                money: "99.66",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-20",
                remark: ""
            },{
                name: "眼霜",
                money: "55",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-20",
                remark: ""
            },{
                name: "楼下大厅酸奶",
                money: "38.25",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-20",
                remark: ""
            },{
                name: "地铁卡",
                money: "100",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-20",
                remark: ""
            },{
                name: "豆芽才春饼饭",
                money: "19",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-21",
                remark: ""
            },{
                name: "水果",
                money: "25.9",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-21",
                remark: ""
            },{
                name: "电费",
                money: "100",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-22",
                remark: ""
            },{
                name: "小静转账",
                money: "60",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-22",
                remark: ""
            },{
                name: "丢丢斜肩上衣",
                money: "89",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-22",
                remark: ""
            },{
                name: "永辉超市",
                money: "45.53",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-22",
                remark: ""
            },{
                name: "水果",
                money: "28.8",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-22",
                remark: ""
            },{
                name: "房租",
                money: "4980",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-23",
                remark: ""
            },{
                name: "中药",
                money: "464.84",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-23",
                remark: ""
            },{
                name: "中药挂号",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-23",
                remark: ""
            },{
                name: "超市洗衣机清洁剂",
                money: "14.9",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-23",
                remark: ""
            },{
                name: "老管家洗衣机清洁剂",
                money: "25.6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-23",
                remark: ""
            },{
                name: "自行车雨披",
                money: "28",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-23",
                remark: ""
            },{
                name: "早晨打小车",
                money: "5",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-24",
                remark: ""
            },{
                name: "馋嘴猫串吧",
                money: "26",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-24",
                remark: ""
            },{
                name: "转账",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-24",
                remark: ""
            },{
                name: "相册",
                money: "91",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-24",
                remark: ""
            },{
                name: "过客",
                money: "115.75",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-24",
                remark: ""
            },{
                name: "打小车地铁站",
                money: "5",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-26",
                remark: ""
            },{
                name: "打小车公司",
                money: "10",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-26",
                remark: ""
            },{
                name: "绿茶午饭",
                money: "26.25",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-26",
                remark: ""
            },{
                name: "烤动力",
                money: "25",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-26",
                remark: ""
            },{
                name: "美食卡",
                money: "99.62",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-27",
                remark: ""
            },{
                name: "驴福记午饭",
                money: "28.61",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-28",
                remark: ""
            },{
                name: "刘昌鹏",
                money: "3500",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-28",
                remark: ""
            },{
                name: "外卖",
                money: "34",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-29",
                remark: ""
            },{
                name: "node 聚餐",
                money: "119.39",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-29",
                remark: ""
            },{
                name: "爱心捐款",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "小白鞋清洁剂",
                money: "29",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "去玫红打车",
                money: "16.4",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "燕风楼吃饭",
                money: "142",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "从玫红打车回来",
                money: "16.52",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "转账",
                money: "300",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "京东",
                money: "137.19",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-30",
                remark: ""
            },{
                name: "短袜",
                money: "19.8",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-31",
                remark: ""
            },{
                name: "葡萄",
                money: "6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-31",
                remark: ""
            },{
                name: "京东",
                money: "",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-07-3",
                remark: ""
            },{
                name: "话费",
                money: "150",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-01",
                remark: ""
            },{
                name: "知乎",
                money: "4.8？",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-01",
                remark: ""
            },{
                name: "摩拜",
                money: "5",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-01",
                remark: ""
            },{
                name: "中药",
                money: "398.62",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-01",
                remark: ""
            },{
                name: "眼药水",
                money: "28.2",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-03",
                remark: ""
            },{
                name: "京东",
                money: "34.65",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-03",
                remark: ""
            },{
                name: "阿里云一年",
                money: "330",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-04",
                remark: ""
            },{
                name: "战狼2",
                money: "101.6",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-05",
                remark: ""
            },{
                name: "外卖",
                money: "35.5",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-06",
                remark: ""
            },{
                name: "中药",
                money: "466.38",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-06",
                remark: ""
            },{
                name: "挂号",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-06",
                remark: ""
            },{
                name: "京东(鸭蛋+苹果)",
                money: "69.45",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-06",
                remark: ""
            },{
                name: "美食卡",
                money: "100",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-07",
                remark: ""
            },{
                name: "知乎狼叔node live",
                money: "10.24",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-07",
                remark: ""
            },{
                name: "妈妈转账",
                money: "2000",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-08",
                remark: ""
            },{
                name: "iq币充值",
                money: "10",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-08",
                remark: ""
            },{
                name: "手帐胶带",
                money: "47.9",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-08",
                remark: ""
            },{
                name: "地铁卡",
                money: "50",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-08",
                remark: ""
            },{
                name: "红薯",
                money: "8",
                consumeType: "",
                consumePlatform: "",
                payment: "",
                must: "",
                date: "2017-08-08",
                remark: ""
            }
        ]
    }
]