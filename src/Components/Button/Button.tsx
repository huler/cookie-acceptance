import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { string } from "yargs";

export interface ButtonProps {
  text: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  className: string;
}

const ButtonComponent = ({ text, click, type, className }: ButtonProps) => {
  return (
    <button type="button" onClick={click} className={className}>
      {text}
    </button>
  );
};

const Button = styled(ButtonComponent)`
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  cursor: pointer;
  -webkit-appearance: none;
  outline: none;
  font-family: "sofia-pro";
  font-weight: 500;
  width: auto;
  border: none;
  margin: 0 10px;
  text-decoration: none;
  position: relative;
  background: ${(props) =>
    props.type === "primary" ? "#f44336" : "transparent"};
  border: ${(props) =>
    props.type === "primary" ? "1px solid transparent" : "1px solid #f44336"};
`;

export default Button;
