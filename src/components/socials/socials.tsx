import React from "react";
import { menuRoutes } from "./socials.routes";

export function Socials(): JSX.Element {
  return (
    <ul className="flex flex-col gap-3">
      {menuRoutes.map(({ link, text }, index) => (
        <li key={index}>
          <a href={link}>{text}</a>
        </li>
      ))}
    </ul>
  );
}
