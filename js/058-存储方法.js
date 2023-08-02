//三大存储方法：
// 不同点：
// 1、存储位置不同：
// cookie在浏览器和服务器间来回传递，cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
// sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。

// 2、存储大小限制不同：
// cookie数据不能超过4K，sessionStorage和localStorage可以达到5M

// 3、保存数据有效时间不同：
// sessionStorage：仅在当前浏览器窗口关闭之前有效；
// localStorage：始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据；
// cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭


//localStorage和sessionStorage用法一样
// 封装本地存储的方式---持久化存储方式
// 存---带一个要存的值
export const setStorage = (key, value) => {
    localStorage.setItem(key, value)
}
// 取---只要告诉我取哪个
export const getStorage = (key) => {
    return localStorage.getItem(key)
}
// 删---也要告诉我删哪个即可
// 删除不需要return 删除就是删除
export const removeStorage = (key) => {
    localStorage.removeItem(key)
}

//cookie
import Cookies from 'js-cookie'
const TokenKey = 'vue_admin_template_token'
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
