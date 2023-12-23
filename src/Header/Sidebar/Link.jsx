/* eslint-disable react/prop-types */
import { useState } from "react";
import { arrow } from "../../data";
import SubLink from "./SubLink";

export default function Link({ title, subLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={`link ${isOpen && 'link-opened'}`}>
      <a className="flex" direction="row" onClick={() => setIsOpen(!isOpen)}>
        {title} {subLinks && <img src={arrow} />}
      </a>

      {subLinks && (
        <div className={"hidden"} direction={isOpen ? "true" : "false"}>
          <ul
            // className={`sub-links ${!isOpen && "hide-sub-links"} flex`}
            className="sub-links flex"
            direction="col"
          >
            {subLinks.map((subLink, idx) => (
              <SubLink
                key={idx}
                title={subLink.title}
                icon={subLink.icon}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
