import { CookieTypes } from "../../Helpers/Types";

export interface CookieAcceptanceProps {
  smallText: string;
  largeText: string;
  moreInfoText: string;
  acceptButtonText: string;
  settingsButtonText: string;
  privacyText: string;
  confirmText: string;
  closeText: string;
  necessaryCookiesText: string;
  alwaysOnText: string;
  privacyPolicyURL: string;
  image?: string;
  injectScript: () => void;
  onConfirm: () => void;
  onClose: () => void;
  cookies: Array<CookieTypes>;
  appName: string;
  className: string;
  toggleCookiePopup: () => void;
  settings: boolean;
}
