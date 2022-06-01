import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { storeCookies } from "../../Helpers/Utils";
import Button from "../Button";
import Type from "../Type";
import { BaseContext } from "../../Context/BaseContext";
import { CookieTypes } from "../../Helpers/Types";
import { ModalInner, ModalImg, ExpandedActions } from "./Styled";
import { CookieAcceptanceProps } from "./CookieAcceptance.types";

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const CookieAcceptance = ({
  className,
  smallText,
  largeText,
  moreInfoText,
  acceptButtonText,
  settingsButtonText,
  privacyText,
  confirmText,
  closeText,
  privacyPolicyURL,
  image,
  injectScript,
  cookies,
  appName,
  settings,
  onConfirm,
}: CookieAcceptanceProps) => {
  const {
    visible,
    expanded,
    agreedCookies,
    setVisible,
    setExpanded,
    handleSetAgreeCookies,
  } = useContext(BaseContext);

  // Framer Motion animation data
  const animate = {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  };
  const exit = {
    opacity: 0,
    translateY: 100,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  };
  const initial = { opacity: 0, translateY: 100 };

  const handleSingleCookieConsent = (
    cookie: CookieTypes,
    agreement: boolean
  ) => {
    if (agreement) {
      handleSetAgreeCookies([...agreedCookies, cookie]);
    } else {
      handleSetAgreeCookies(agreedCookies.filter((item) => item !== cookie));
    }
  };

  const handleConfirm = (all?: boolean) => {
    // Agree to all cookies provided
    if (all) {
      handleSetAgreeCookies(cookies, injectScript);
      storeCookies(cookies, cookies, appName);
    } else {
      // Agree to specific cookies
      handleSetAgreeCookies(agreedCookies, injectScript);
      storeCookies(cookies, agreedCookies, appName);
    }
    setVisible(false);
    onConfirm();
  };

  useEffect(() => {
    if (
      localStorage.getItem(`${appName}_ReactCookieAcceptance_hasSetCookies`) ===
        "true" &&
      !settings
    ) {
      const agreed = [];
      cookies &&
        cookies.map((cookie) => {
          const storedCookie = localStorage.getItem(`${appName}_${cookie}`);
          if (storedCookie) {
            agreed.push(cookie);
          }
        });
      handleSetAgreeCookies(agreed, injectScript);
    } else {
      setVisible(true);
    }
    if (settings) {
      setExpanded(true);
    }
  }, [settings]);

  const handleCloseSettings = () => {
    if (
      localStorage.getItem(`${appName}_ReactCookieAcceptance_hasSetCookies`) ===
      "true"
    ) {
      setVisible(false);
      setExpanded(false);
    } else {
      setExpanded(false);
    }
  };

  const privacyPolicyLink = (
    <>
      {privacyPolicyURL && (
        <a href={privacyPolicyURL} target="_blank" rel="noreferrer">
          {moreInfoText || "More Info"}
        </a>
      )}
    </>
  );

  const initialContent = (
    <>
      {image && <ModalImg src={image} alt="Cookie Policy" />}
      <ModalInner>
        <p>
          {smallText || "Please accept our cookie policy"} {privacyPolicyLink}
        </p>
        <ButtonContainer>
          <Button
            type="primary"
            click={() => handleConfirm(true)}
            text={acceptButtonText || "Accept All Cookies"}
          />
          <Button
            type="secondary"
            click={() => setExpanded(true)}
            text={settingsButtonText || "Cookie Settings"}
          />
        </ButtonContainer>
      </ModalInner>
    </>
  );

  const expandedContent = (
    <ModalInner>
      <h2>{privacyText || "Privacy Settings"}</h2>
      <p>
        {largeText || "Please accept our cookie policy"} {privacyPolicyLink}
      </p>
      {cookies &&
        cookies.map((cookie, index) => (
          <Type
            cookie={cookie}
            onToggle={handleSingleCookieConsent}
            key={cookie}
          />
        ))}
      <Type />
      <ExpandedActions>
        <ButtonContainer>
          <Button
            type="primary"
            click={() => handleConfirm()}
            text={confirmText || "Confirm Choices"}
          />
          <Button
            type="secondary"
            click={() => handleCloseSettings()}
            text={closeText || "Close"}
          />
        </ButtonContainer>
      </ExpandedActions>
    </ModalInner>
  );

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            animate={animate}
            exit={exit}
            initial={initial}
            className={`${className} ${expanded && "expanded"}`}
          >
            {expanded ? expandedContent : initialContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const StyledCookieAcceptance = styled(CookieAcceptance)`
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
  width: 400px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  overflow: hidden;
  border-radius: 10px;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  color: #363b40;
  text-align: left;
  transition: 0.25s ease;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  // Ensure cookie modal sits above all other elements
  z-index: 9999999999;
  @media screen and (max-width: 500px) {
    width: 95%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 10px;
  }
  &.expanded {
    max-height: 70%;
  }
  h2 {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 20px;
    display: block;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #363b40;
    margin-bottom: 40px;
    text-align: left;
    a {
      display: inline-block;
      width: 100%;
      margin-top: 15px;
      color: #f44336;
    }
  }
`;

export default StyledCookieAcceptance;
