import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from "./Dropdown.types";

const Dropdown = ({
  className,
  onClick,
}: DropdownProps) => {
  return (
    <div className={className}>
      <button onChange={() => onClick()}>
        <span />
      </button>
    </div>
  );
};

const StyledDropdown = styled(Dropdown)<DropdownProps>`
  position: relative;
  > button {
    position: relative;
    width: 32px;
    height: 32px;
    padding: 0;
    background-color: #ccc;
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    ${(props) => props.open && `
      background-color: #f44336;
    `}

    &:focus {
      box-shadow: inset 0 0 0 2px #f44336;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% - 2px)) rotate(45deg);
      width: 8px;
      height: 8px;
      display: block;
      transition: transform 0.2s ease;
      ${(props) => props.open && `
        transform: translate(-50%, calc(-50% + 2px)) rotate(-135deg);
      `}

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: background-color 0.2s ease;
        ${(props) => props.open && `
          background-color: #fff;
        `}
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
        background-color: #333;
        transition: background-color 0.2s ease;
        ${(props) => props.open && `
          background-color: #fff;
        `}
      }
    }
  }
`

export default StyledDropdown;
