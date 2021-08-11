import React from "react";
import BaseContextProvider from "../../Context/BaseContext";
import CookieAcceptance from "./CookieAcceptance";

function CookieAcceptanceModal(props) {
  return (
    <BaseContextProvider>
      <CookieAcceptance {...props} />
    </BaseContextProvider>
  );
}

export default CookieAcceptanceModal;
