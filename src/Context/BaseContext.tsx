/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from "react";
import { CookieTypes } from "../Helpers/Types";

export const BaseContext = createContext(null);

const BaseContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [agreedCookies, setAgreedCookies] = useState<CookieTypes[]>([]);
  const [expanded, setExpanded] = useState(false);

  return (
    <BaseContext.Provider
      value={{
        visible,
        agreedCookies,
        expanded,
        setVisible,
        setAgreedCookies,
        setExpanded,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContextProvider;
