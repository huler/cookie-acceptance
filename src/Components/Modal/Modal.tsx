import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./Modal.types";
import { StoreCookies } from "../../Helpers/Utils";

import "./Modal.scss";

const Modal = ({
  smallText,
  largeText,
  privacyPolicyURL,
  image,
  onAccept,
  cookies,
  appName,
}: ModalProps) => {
  const [active, setActive] = useState(true);

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
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            animate={animate}
            exit={exit}
            initial={initial}
            className="ReactCookieAcceptance__modal"
          >
            {image && <img src={image} alt="Cookie Policy" />}
            <div className="ReactCookieAcceptance__modal__inner">
              <p>{smallText || "Please accept our cookie policy"}</p>
            </div>
            <button onClick={() => StoreCookies(cookies, appName)}>
              Accept All Cookies
            </button>
            <button>Configure</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
