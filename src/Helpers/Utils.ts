import { CookieTypes } from './Types';

// Set a cookie
export const setCookie = (name: string, value: string | boolean, expiry: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (expiry * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Store the relevant cookies 
export const StoreCookies = (cookies: Array<CookieTypes>, appName: string) => {
    cookies.map((cookie) => {
        setCookie(`${appName}_${cookie}`, true, 365);
    });
    setCookie('hasSetCookies', true, 365);
}