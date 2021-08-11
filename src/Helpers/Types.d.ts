export type CookieTypes = 'performance' | 'functional' | 'targeting';

export interface AgreedCookieTypes {
    cookie: CookieTypes;
    agreement: boolean;
}
