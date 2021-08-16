import { CookieTypes } from '../../Helpers/Types';

export interface CookieAcceptanceProps {
    smallText: string;
    largeText;
    string;
    privacyPolicyURL: string;
    image?: string;
    injectScript: () => void;
    onConfirm: () => void;
    cookies: Array<CookieTypes>;
    appName: string;
    className: string;
    toggleCookiePopup: () => void;
    settings: boolean;
}