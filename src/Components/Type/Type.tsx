import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CookieTypes, AgreedCookieTypes } from "../../Helpers/Types";
import Toggle from "../Toggle";
interface TypeProps {
  cookie: CookieTypes;
  className?: string;
  onToggle: (AgreedCookieTypes) => void;
  agreedCookies: Array<AgreedCookieTypes>;
}

const TypeComponent = ({
  cookie,
  className,
  onToggle,
  agreedCookies,
}: TypeProps) => {
  const getCookieDescription = (type) => {
    switch (type) {
      case "performance":
        return (
          <p>
            Performance Cookies provide us with analytics data such as visits
            and traffic sources, so we can monitor and enhance the performance
            of our services. All data these cookies gather is aggregated and
            anonymous.
          </p>
        );
      case "functional":
        return (
          <p>
            Functional cookies allow us to provide enhanced software and website
            functionality and personalisation. In some cases they may be set by
            third-party providers whose services we use to improve your
            experience. Without these cookies then these features may not work
            properly.
          </p>
        );
      case "targeting":
        return (
          <p>
            Targeting Cookies are set through our site by our advertising
            partners. Those companies may use this data to get an insight into
            your interests and provide relevant adverts on other websites. They
            don't store personal information, instead are based on uniquely
            identifying your browser and internet device. Now allowing these
            will mean you'll see less targeted adverts.
          </p>
        );

      default:
        return (
          <p>
            These cookies are required for the website to work and can't be
            switched off. They are normally set in response to your actions
            within our software, such as setting your privacy options, logging
            in or using forms. You can set your browser to block or alert you
            about these cookies, but our software may then break.
          </p>
        );
    }
  };

  return (
    <div className={className}>
      <h4>
        {cookie ? `${cookie} Cookies` : "Strictly Necessary Cookies"}
        {cookie ? (
          <Toggle
            onToggle={onToggle}
            cookie={cookie}
            checked={agreedCookies[cookie]}
          />
        ) : (
          <small>Always On</small>
        )}
      </h4>
      {getCookieDescription(cookie)}
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
    small {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      opacity: 0.6;
    }
  }
`;

export default Type;
