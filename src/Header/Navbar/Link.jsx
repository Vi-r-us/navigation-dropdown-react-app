/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { arrow } from "../../data";
import SubLink from "./SubLink.jsx";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Link({ title, subLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const subLinksContainer = useRef();
  // useOutsideAlerter(subLinksContainer);

  return (
    <li className="link">
      <a className="flex" direction="row" onClick={() => setIsOpen(!isOpen)}>
        {title} {subLinks && <img src={arrow} />}
      </a>

      {subLinks && (
        <ul
          className={`sub-links ${!isOpen && "hide-sub-links"} flex`}
          id={title}
          direction="col"
          ref={subLinksContainer}
          data-load={title === "features" ? "first" : "last"}
        >
          {subLinks.map((subLink, idx) => (
            <SubLink key={idx} title={subLink.title} icon={subLink.icon} />
          ))}
        </ul>
      )}

      {/* <div
        className="overlay-wrap"
        onClick={() => console.log("clicked on overlay")}
      ></div> */}
    </li>
  );
}
