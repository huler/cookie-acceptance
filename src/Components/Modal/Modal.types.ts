import { ReactChildren, ReactChild } from 'react';
import { CookieTypes } from '../../Helpers/Types';

export interface ModalProps {
    smallText: string;
    largeText; string;
    privacyPolicyURL: string;
    image?: string;
    onAccept: (() => void);
    cookies: Array<CookieTypes>;
    appName: string;
}
