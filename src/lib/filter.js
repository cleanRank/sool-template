/*
 * @Descripttion: filter function
 * @version: 
 * @Author: zhusn-b
 * @Date: 2019-08-08 13:52:37
 * @LastEditors: zhusn-b
 * @LastEditTime: 2020-01-21 16:36:28
 */
export const starScoreFilter = fmt => {
	let s = fmt // 评分精确到小数点后一位
	let i = Math.floor(s) // 评分取整数部分
	let f = 0 // 初始化小数部分
	if (i == 0) { // 如果整数部分为0，则评分为原值
		f = s*10
	} else { // 否则
		f = Math.round(s%i*10)
	}
	let b = (i+f/10*0.8)/5*100
	return `${b}%`
}
// 金额取2位小数
export const toFixed2 = value => {
	let result ='0.00';
    if(null != value || undefined != value){
        let price = parseInt(value*100);
        if(!isNaN(price)) {
          result = String((price/100).toFixed(2));
        }
    }
    return result;
}
export const getOpratorName = val => {
	const zone = ['无', '新增', '更新', '删除', '创建分支']
	return zone[val] || '无'
}
export const getZoneName = val => {
	const zone = ['华北', '东北', '华东', '华中', '华南', '西南', '西北']
	return zone[val + 1] || '华北'
}
export const getHolderLevel = val => {
	const holder = ['地球', '大洲', '国家', '地区', '城市', '区县', '场地', '构造', '分区	', '楼层']
	return holder[val] || ''
}
// 时间格式化 fmt：时间戳 msg：时间格式标准
export const formatTime = (fmt, msg) => {
	Date.prototype.format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"H+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S": this.getMilliseconds()
		};
		var week = {
			"0": "\u65e5",
			"1": "\u4e00",
			"2": "\u4e8c",
			"3": "\u4e09",
			"4": "\u56db",
			"5": "\u4e94",
			"6": "\u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f": "\u5468") : "") + week[this.getDay() + ""]);
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	};
	return new Date(fmt).format(msg);
}
export const formatTime2 = fmt => { 
	return new Date(parseInt(fmt)).toLocaleString().replace(/:\d{1,2}$/,' ');     
}
