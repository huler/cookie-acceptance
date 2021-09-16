import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

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
  font-weight: 500;
  width: auto;
  border: none;
  text-decoration: none;
  position: relative;
  background: ${(props) =>
    props.type === "primary" ? "#f44336" : "transparent"};
  border: ${(props) =>
    props.type === "primary" ? "1px solid transparent" : "1px solid #f44336"};
  color: ${(props) => (props.type === "primary" ? "#fff" : "#f44336")};
  font-size: 13px;
  padding: 10px 25px;
  line-height: 20px;
  font-family: inherit;
  margin-right: 10px;
  @media screen and (max-width: 500px) {
    padding: 8px 18px;
  }
`;

export default Button;
