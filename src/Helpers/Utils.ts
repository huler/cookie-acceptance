// Set a cookie
export const setCookie = (name: string, value: string) => {
    localStorage.setItem(name, value);
}

// Store the relevant cookies 
export const storeCookies = (cookies: Object, appName: string, callback: () => void) => {
    Object.keys(cookies).map((cookie) => {
        console.log(cookies[cookie]);
        setCookie(`${appName}_${cookies[cookie]}`, 'true');
    });
    setCookie('hasSetCookies', 'true');
    if (callback) callback();
}