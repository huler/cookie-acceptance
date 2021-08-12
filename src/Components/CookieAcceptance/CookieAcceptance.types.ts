import { CookieTypes } from '../../Helpers/Types';

export interface CookieAcceptanceProps {
    smallText: string;
    largeText;
    string;
    privacyPolicyURL: string;
    image?: string;
    onAccept: () => void;
    cookies: Array<CookieTypes>;
    appName: string;
    className: string;
    toggleCookiePopup: () => void;
}