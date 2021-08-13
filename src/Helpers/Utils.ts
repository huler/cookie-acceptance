import { CookieTypes } from "./Types";

// Handles injection of scripts based on agreed cookies
export const injectAgreedCookies = (agreedCookies: CookieTypes[], injectScript: (cookie: string) => void) => {
    // Pass each agreed cookie to injectSingleCookie
    agreedCookies.forEach((cookie) => injectScript(cookie));
};

// Store the relevant cookies in local storage
export const storeCookies = (cookies: CookieTypes[], agreedCookies: CookieTypes[], appName: string) => {
    cookies.map((cookie) => {
        if (agreedCookies.includes(cookie)) {
            // If the user has agreed...
            // Store the agreement in local storage
            localStorage.setItem(`${appName}_${cookie}`, cookie);
        } else {
            // Else remove the agreement from local storage
            localStorage.removeItem(`${appName}_${cookie}`);
        }
    });
    // Set that the user has confirmed their cookie preferences
    localStorage.setItem(`${appName}_ReactCookieAcceptance_hasSetCookies`, 'true');
}