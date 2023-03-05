import React from "react";
import { Link } from "react-router-dom";
import styles from "./links-hierarchy.module.scss";
type LinksHierarchyProps = {
  links: {
    label: string;
    to: string;
  }[];
};
const LinksHierarchy = ({ links }: LinksHierarchyProps) => {
  return (
    <ul className={`${styles.links} flex links-hierarchy `}>
      {links.map((link) => (
        <li key={link.label}>
          <Link to={`/${link.to}`}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinksHierarchy;
