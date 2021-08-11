import { CookieTypes } from "./Types";

// Store the relevant cookies 
export const storeCookies = (cookies: CookieTypes[], agreedCookies: CookieTypes[], appName: string, callback: () => void) => {
    cookies.map((cookie) => {
        if (agreedCookies.includes(cookie)) {
            localStorage.setItem(`${appName}_${cookie}`, cookie);
        } else {
            localStorage.removeItem(`${appName}_${cookie}`);
        }
    });
    localStorage.setItem('ReactCookieAcceptance_hasSetCookies', 'true');

    if (callback) callback();
}