import React from "react";
import { motion } from "framer-motion";

import "./Modal.scss";

const Modal = () => {
  return (
    <motion.div
      className="modal"
      transition={{ type: "spring", duration: 0.15 }}
    />
  );
};

export default Modal;
