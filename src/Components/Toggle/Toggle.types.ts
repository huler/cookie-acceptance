import { CookieTypes } from '../../Helpers/Types';
export interface ToggleProps {
    className?: string;
    onToggle: (cookie: CookieTypes, agreement: boolean) => void;
    checked: boolean;
    cookie: CookieTypes;
}