/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from "react";
import { injectAgreedCookies } from "../Helpers/Utils";
import { CookieTypes } from "../Helpers/Types";

export const BaseContext = createContext(null);

const BaseContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [agreedCookies, setAgreedCookies] = useState<CookieTypes[]>([]);
  const [expanded, setExpanded] = useState(false);

  const handleSetAgreeCookies = (
    cookies: CookieTypes[],
    injectScript?: (cookie: string) => void
  ) => {
    if (injectScript) injectAgreedCookies(cookies, injectScript);
    setAgreedCookies(cookies);
  };

  return (
    <BaseContext.Provider
      value={{
        visible,
        agreedCookies,
        expanded,
        setVisible,
        handleSetAgreeCookies,
        setExpanded,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContextProvider;
