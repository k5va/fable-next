import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuRoutes } from "./catalog-menu.routes";
import { motion } from "framer-motion";

export function CatalogMenu(): JSX.Element {
  const { t } = useTranslation();
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="font-medium uppercase">
      <button
        className="hidden uppercase small:flex small:items-center"
        onClick={() => setShowMobile((showMobile) => !showMobile)}
      >
        <GiHamburgerMenu
          className={classNames("text-2xl transition", {
            "rotate-90": showMobile,
          })}
        />
      </button>
      <ul
        className={classNames(
          "flex flex-wrap gap-9",
          "small:relative small:top-4 small:flex-col small:gap-1 small:normal-case",
          {
            "small:hidden": !showMobile,
          }
        )}
      >
        {menuRoutes.map(({ link, text }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            key={index}
          >
            <Link href={link}>{t(text)}</Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
