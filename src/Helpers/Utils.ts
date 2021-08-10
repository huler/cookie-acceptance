import { CookieTypes } from './Types';

// Set a cookie
export const setCookie = (name: string, value: string) => {
    localStorage.setItem(name, value);
}

// Store the relevant cookies 
export const storeCookies = (cookies: Array<CookieTypes>, appName: string, callback: () => void) => {
    cookies.map((cookie) => {
        setCookie(`${appName}_${cookie}`, 'true');
    });
    setCookie('hasSetCookies', 'true');
    if (callback) callback();
}