/* eslint-disable react/prop-types */

export default function SubLink({ title, icon }) {
  return (
    <li className="sub-link">
      <a className="flex" direction="row">
        {icon && <img src={icon} />}
        {title}
      </a>
    </li>
  );
}
