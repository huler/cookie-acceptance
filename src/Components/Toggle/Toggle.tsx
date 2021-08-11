import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AgreedCookieTypes, CookieTypes } from "../../Helpers/Types";

interface ToggleProps {
  className?: string;
  onToggle: (cookie: CookieTypes, agreement: boolean) => void;
  checked: boolean;
  cookie: CookieTypes;
}

const ToggleComponent = ({
  className,
  onToggle,
  checked,
  cookie,
}: ToggleProps) => {
  return (
    <div className={className}>
      <input
        id={cookie}
        type="checkbox"
        checked={checked || false}
        onChange={(e) => onToggle(cookie, e.target.checked)}
      />
      <label data-on="On" data-off="Off" htmlFor={cookie} />
    </div>
  );
};

const Toggle = styled(ToggleComponent)`
  position: relative;
  > input {
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    -webkit-appearance: none !important;
    opacity: 0 !important;
    &:focus {
      & + label {
        box-shadow: inset 0 0 0 2px #f44336;
      }
    }
    &:checked + label {
      background: #f44336;
      &:before {
        content: attr(data-on);
        left: 9px;
        right: auto;
        color: #fff;
      }
      &:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }
    }
  }
  > label {
    width: 62px;
    height: 32px;
    background: #999;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    display: block;
    user-select: none;
    opacity: 1 !important;
    &:before {
      content: attr(data-off);
      color: #000;
      position: absolute;
      right: 9px;
      top: calc(50% - 1px);
      transform: translateY(-50%);
      font-size: 12px;
    }
    &:after {
      content: "";
      position: absolute;
      width: 22px;
      height: 22px;
      background: #333;
      border-radius: 100%;
      left: 5px;
      top: 5px;
      transition: all 0.1s ease-in-out;
    }
  }
`;

export default Toggle;
