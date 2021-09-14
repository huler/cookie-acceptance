import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { CookieTypes } from "../../Helpers/Types";
import { BaseContext } from "../../Context/BaseContext";
import Toggle from "../Toggle";
import Dropdown from "../Dropdown";
import { TypeProps } from "./Type.types";

const TypeComponent = ({ cookie, className, onToggle }: TypeProps) => {
  const { agreedCookies } = useContext(BaseContext);
  const [expanded, setExpanded] = useState(false);

  const getCookieDescription = (type) => {
    switch (type) {
      case "performance":
        return (
          <>
            Performance Cookies provide us with analytics data such as visits
            and traffic sources, so we can monitor and enhance the performance
            of our services. All data these cookies gather is aggregated and
            anonymous.
          </>
        );
      case "functional":
        return (
          <>
            Functional cookies allow us to provide enhanced software and website
            functionality and personalisation. In some cases they may be set by
            third-party providers whose services we use to improve your
            experience. Without these cookies then these features may not work
            properly.
          </>
        );
      case "targeting":
        return (
          <>
            Targeting Cookies are set through our site by our advertising
            partners. Those companies may use this data to get an insight into
            your interests and provide relevant adverts on other websites. They
            don't store personal information, instead are based on uniquely
            identifying your browser and internet device. Now allowing these
            will mean you'll see less targeted adverts.
          </>
        );

      default:
        return (
          <>
            These cookies are required for the website to work and can't be
            switched off. They are normally set in response to your actions
            within our software, such as setting your privacy options, logging
            in or using forms. You can set your browser to block or alert you
            about these cookies, but our software may then break.
          </>
        );
    }
  };

  return (
    <div className={className}>
      <h4 onClick={() => setExpanded(!expanded)}>
        {cookie ? `${cookie} Cookies` : "Strictly Necessary Cookies"}
        {cookie ? (
          <div>
            <Toggle
              onToggle={onToggle}
              cookie={cookie}
              checked={agreedCookies.includes(cookie)}
            />
            <Dropdown
              onClick={() => setExpanded(!expanded)}
              open={expanded}
            />
          </div>
        ) : (
          <small>Always On</small>
        )}
      </h4>
      <AnimatePresence>
        {expanded && (
          <motion.p
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {getCookieDescription(cookie)}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Type = styled(TypeComponent)`
  h4 {
    text-transform: capitalize;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    margin: 18px 0;
    cursor: pointer;
    small {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      opacity: 0.6;
      height: 32px;
      display: flex;
      align-items: center;
      width: auto !important;
    }
    > div {
      display: flex;

      > * + * {
        margin-left: 10px;
      }
    }
  }
  p {
    margin: 0 !important;
  }
`;

export default Type;
