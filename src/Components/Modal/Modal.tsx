import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./Modal.types";
import { storeCookies } from "../../Helpers/Utils";
import Button from "../Button";

const ModalComponent = ({
  className,
  smallText,
  largeText,
  privacyPolicyURL,
  image,
  onAccept,
  cookies,
  appName,
}: ModalProps) => {
  const [active, setActive] = useState(true);
  const [expanded, setExpanded] = useState(false);

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

  const ModalInner = styled.div`
    padding: 20px;
  `;
  const ModalImg = styled.img`
    width: 100%;
    height: auto;
  `;

  const initialContent = (
    <>
      {image && <ModalImg src={image} alt="Cookie Policy" />}
      <ModalInner>
        <p>{smallText || "Please accept our cookie policy"}</p>
        <Button
          type="primary"
          click={() => storeCookies(cookies, appName, onAccept)}
          text="Accept All Cookies"
        />
        <Button
          type="secondary"
          click={() => setExpanded(true)}
          text="Configure"
        />
      </ModalInner>
    </>
  );

  const expandedContent = (
    <ModalInner>
      <p>{largeText || "Please accept our cookie policy"}</p>
    </ModalInner>
  );

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            animate={animate}
            exit={exit}
            initial={initial}
            className={className}
          >
            {!expanded && initialContent}
            {expanded && expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Modal = styled(ModalComponent)`
  background: #fff;
  box-shadow: #000 10px 10px 10px;
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
  line-height: 18px;
  color: #000;
  text-align: left;
`;

export default Modal;
