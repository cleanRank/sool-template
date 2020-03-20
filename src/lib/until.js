import Base64 from 'lib/base64'
import { tracker } from './analytics'
export const is_android = () => {
  var ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1 || ua.indexOf('Android') > -1) {
    return true
  } else {
    return false
  }
}
// 判断当前是否是iphone手机
export const is_iphone = () => {
  var ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1 || ua.indexOf('macintosh') > -1) {
    return true
  } else {
    return false
  }
}
// 校验姓名格式
export const isName = (name) => {
  const reg = /^(([\u2E80-\u2FDF\u3040-\u318F\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7FF]){2,10}|[a-zA-Z\.\s]{2,20})$/ // 中日韩英可校验通过
  return reg.test(name)
}
// 校验公司全称（可输入30个汉字）
export const isChina = (name) => {
  const reg = /^(([\u2E80-\u2FDF\u3040-\u318F\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7FF]){0,30})$/ // 中日韩英可校验通过
  return reg.test(name)
}
// 校验地址 （只能输入字母数字中文）
export const isAddress = (name) => {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  return reg.test(name)
}
// 校验密码 只能输入字母、数字
export const isPwd = (name) => {
  // var reg = new RegExp(/^[a-zA-Z0-9]*\d+[a-zA-Z]+[a-zA-Z0-9]*$|^[a-zA-Z0-9]*[a-zA-Z]+\d+[a-zA-Z0-9]*$/)
  // eslint-disable-next-line no-redeclare
  var reg = /^[0-9a-zA-Z]+$/
  return reg.test(name)
}
// 截取url 里面token的值
export const getQueryString = name => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let params = window.location.search.substr(1) || window.location.href.split('?')[1]
  let r = params && params.match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

// 时间转换
export const formatTimeAmt = (fmt, msg) => {
  Date.prototype.format = function(fmt) {
    var o = {
      'M+': this.getMonth() + 1,
			'd+': this.getDate(),
			'h+': this.getHours(),
			'H+': this.getHours(),
			'm+': this.getMinutes(),
			's+': this.getSeconds(),
			'q+': Math.floor((this.getMonth() + 3) / 3),
			'S': this.getMilliseconds()
		}
		var week = {
			'0': '\u65e5',
			'1': '\u4e00',
			'2': '\u4e8c',
			'3': '\u4e09',
			'4': '\u56db',
			'5': '\u4e94',
			'6': '\u516d'
		}
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f': '\u5468') : '') + week[this.getDay() + ''])
		}
		for (var k in o) {
			if (new RegExp('(' + k + ')').test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
			}
		}
		return fmt
	}
	return new Date(fmt).format(msg)
}

// splic()截取，转对象
export const getQueryJson = (name, url) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let params = url
  let r = params && params.match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
// 格式化金额
export const fixed2NoRound = (money) => {
  let newMoney = Math.ceil((money * 100).toFixed(5)) / 100
  return newMoney.toFixed(2)
}
// 数字显示*
export const getHiddenText = (text, start, end, spaceNum, spaceTxt) => {
  // text : 替换的字符串  start : 替换起点  end:替换终点 spaceNum ： 表示每几个字符一个空格
  var arryText = text.split('')
  var arryTemp = []
  var spaceCount = 0
  for (var i in arryText) {
    spaceCount++
    if (i >= start && i <= end) {
      arryTemp.push('*')
    } else {
      arryTemp.push(arryText[i])
    }
    if (spaceNum && spaceCount % spaceNum == 0) {
      spaceTxt = spaceTxt || ' '
      arryTemp.push(spaceTxt)
      spaceCount = 0
    }
  }
  return arryTemp.join('')
}
// 身份证号码
export const IdentityCodeValid = (code) => {
  code = $.trim(code.toLowerCase())
  var city = {11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外 '}
  var pass = true
  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    pass = false
  } else if (!city[code.substr(0, 2)]) {
    pass = false
  } else {
    // 18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('')
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
      // 校验位
      var parity = [ 1, 0, 'x', 9, 8, 7, 6, 5, 4, 3, 2 ]
      var sum = 0
      var ai = 0
      var wi = 0
      for (var i = 0; i < 17; i++) {
        ai = code[i]
        wi = factor[i]
        sum += ai * wi
      }
      if (parity[sum % 11] != code[17]) {
        pass = false
      }
    }
  }
  return pass
}
// ascII码或者数字转换
export const getCharAtCode = val => {
  if (/^[0-9]+$/.test(val)) {
    return `${parseInt(val)+ 1}`
  } else if (/^[a-zA-Z]+$/.test(val)) {
    return String.fromCharCode(val.charCodeAt() + 1)
  } else {
    return 'A'
  }
}
// 区分用户来源
export const userFromChannel = () => {
  const fc = getQueryString('fromChannel')
  const fromC = window.sessionStorage.getItem('fromChannel')
  let fromChannel = 'sxymh5'
  if (fc && fc!='') {
    fromChannel = fc
  } else if (/waterMall/i.test(navigator.userAgent)) {
    fromChannel = 'sxymApp'
  } else if (fromC) {
    fromChannel = fromC
  }
  return fromChannel
}
export const html_encode = (str) => {
  var s = ''
  if (str.length == 0) return ''
  s = str.replace(/&amp;/g, '&')
  s = s.replace(/&lt;/g, '<')
  s = s.replace(/&gt;/g, '>')
  s = s.replace(/&nbsp;/g, ' ')
  s = s.replace(/&#39;/g, "\'")
  s = s.replace(/&quot;/g, '"')
  s = s.replace(/<br>/g, '\n')
  return s
}
// 登录
export const jointLand = () => {
  window.location.replace('/')
}
export const delSessionStorage = () => {
  tracker.deleteToken() // 检测未登录删除token的cookie
  localStorage.removeItem('organization')
  localStorage.removeItem('nick')
  localStorage.removeItem('tel')
}
export const base64ToFile = (base64, name) => {
  let arr = base64.split(',')
  let mine = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], name, {
    type: mine
  })
}

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
	let delay = t || 500;
	let timer;
	return function () {
		let args = arguments;
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, args);
		}, delay);
	}
};
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
	let last;
	let timer;
	let interval = t || 500;
	return function () {
		let args = arguments;
		let now = +new Date();
		if (last && now - last < interval) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				last = now;
				fn.apply(this, args);
			}, interval);
		} else {
			last = now;
			fn.apply(this, args);
		}
	}
};
