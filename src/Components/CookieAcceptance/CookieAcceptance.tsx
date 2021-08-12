import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { storeCookies } from "../../Helpers/Utils";
import Button from "../Button";
import Type from "../Type";
import { BaseContext } from "../../Context/BaseContext";
import { CookieTypes } from "../../Helpers/Types";
import { ModalInner, ModalImg, ExpandedActions } from "./Styled";
import { CookieAcceptanceProps } from "./CookieAcceptance.types";

const CookieAcceptance = ({
  className,
  smallText,
  largeText,
  privacyPolicyURL,
  image,
  onAccept,
  cookies,
  appName,
}: CookieAcceptanceProps) => {
  const {
    visible,
    expanded,
    agreedCookies,
    setVisible,
    setExpanded,
    setAgreedCookies,
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
      setAgreedCookies([...agreedCookies, cookie]);
    } else {
      setAgreedCookies(agreedCookies.filter((item) => item !== cookie));
    }
  };

  const handleConfirm = (all?: boolean) => {
    // Agree to all cookies provided
    if (all) {
      setAgreedCookies(cookies);
      storeCookies(cookies, cookies, appName, onAccept);
    } else {
      // Agree to specific cookies
      storeCookies(cookies, agreedCookies, appName, onAccept);
    }
    setVisible(false);
  };

  useEffect(() => {
    if (
      localStorage.getItem("ReactCookieAcceptance_hasSetCookies") !== "true"
    ) {
      setVisible(true);
    }
    const agreed = [];
    cookies &&
      cookies.map((cookie) => {
        const storedCookie = localStorage.getItem(`${appName}_${cookie}`);
        console.log(storedCookie);
        if (storedCookie) {
          agreed.push(cookie);
        }
      });
    setAgreedCookies(agreed);
  }, []);

  const handleCloseSettings = () => {
    if (
      localStorage.getItem("ReactCookieAcceptance_hasSetCookies") === "true"
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
          More Info
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
        <Button
          type="primary"
          click={() => handleConfirm(true)}
          text="Accept All Cookies"
        />
        <Button
          type="secondary"
          click={() => setExpanded(true)}
          text="Cookie Settings"
        />
      </ModalInner>
    </>
  );

  const expandedContent = (
    <ModalInner>
      <h2>Privacy Settings</h2>
      <p>
        {largeText || "Please accept our cookie policy"} {privacyPolicyLink}
      </p>
      {cookies &&
        cookies.map((cookie, index) => (
          <Type cookie={cookie} onToggle={handleSingleCookieConsent} />
        ))}
      <Type />
      <ExpandedActions>
        <Button
          type="primary"
          click={() => handleConfirm()}
          text="Confirm Choices"
        />
        <Button
          type="secondary"
          click={() => handleCloseSettings()}
          text="Close"
        />
      </ExpandedActions>
    </ModalInner>
  );

  return (
    <>
      <AnimatePresence>
        {visible ? (
          <motion.div
            animate={animate}
            exit={exit}
            initial={initial}
            className={`${className} ${expanded && "expanded"}`}
          >
            {expanded ? expandedContent : initialContent}
          </motion.div>
        ) : (
          <p
            onClick={() => {
              setVisible(true);
              setExpanded(true);
            }}
          >
            Cookie Settings
          </p>
        )}
      </AnimatePresence>
    </>
  );
};

const StyledCookieAcceptance = styled(CookieAcceptance)`
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
  width: 400px;
  min-height: 400px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  overflow: hidden;
  border-radius: 10px;
  font-family: "Sofia Pro", "SF Pro Text", -apple-system, BlinkMacSystemFont,
    Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  line-height: 20px;
  color: #363b40;
  text-align: left;
  transition: 0.25s ease;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &.expanded {
    height: calc(100% - 60px);
    top: 30px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #363b40;
    margin-bottom: 40px;
    a {
      display: inline-block;
      width: 100%;
      margin-top: 15px;
      color: #f44336;
    }
  }
`;

export default StyledCookieAcceptance;
