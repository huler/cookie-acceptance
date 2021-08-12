import { CookieTypes } from '../../Helpers/Types';
export interface TypeProps {
    cookie: CookieTypes;
    className?: string;
    onToggle: (cookie: CookieTypes, agreement: boolean) => void;
}