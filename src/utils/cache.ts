// 前端缓存  cookie localStrorage sessionStorage
import Cookies, { CookieAttributes } from 'js-cookie';
import { expireTime, domainHost } from '@/config';

/**
 *
 * @param key
 */
export const checkToken = (key: string) => {
	if (!key) {
		throw new Error('没有找到key。');
	}
	if (typeof key === 'object') {
		throw new Error('key不能是一个对象。');
	}
};

/**
 * 获取 token
 * @param key
 */
export const getToken = (key: string) => {
	checkToken(key);
	return Cookies.get(key);
};

/**
 * 设置 token
 * @param key
 * @param token
 * @param options
 */
export const setToken = (key: string, value: string, options?: CookieAttributes) => {
	checkToken(key);
	return Cookies.set(key, value, {
		expires: (options && options.expires) || expireTime,
		path: (options && options.path) || '/',
		domain: (options && options.domain) || domainHost,
	});
};
/**
 * 移除 一个 token
 * @param key
 */
export const removeToken = (key: string, options?: CookieAttributes) => {
	checkToken(key);
	return Cookies.remove(key, {
		expires: (options && options.expires) || expireTime,
		path: (options && options.path) || '/',
		domain: (options && options.domain) || domainHost,
	});
};
