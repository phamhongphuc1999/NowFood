import React, { useEffect } from "react";
import cx from "classnames";
import logo from "../../assets/images/logo/nowVn.png";
import { history } from "../../history";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { initSetting, changeSetting } from "../../redux/slices/SettingSlice";
import { EnFlag, ViFlag } from "../../assets/svg";
import { Container } from "@material-ui/core";

import * as styles from "./header.module.css";

const switchConfig = [
  { title: "food", pathname: "/" },
  { title: "restaurant", pathname: "/table" },
  { title: "fresh", pathname: "/fresh" },
  { title: "liquor", pathname: "/liquor" },
  { title: "flowers", pathname: "/flowers" },
  { title: "mart", pathname: "/mart" },
  { title: "medicine", pathname: "/medicine" },
  { title: "pet", pathname: "/pet" },
];

const Header = ({ pathname }) => {
  const { t } = useTranslation();
  const dp = useDispatch();
  const setting = useSelector((state) => state.setting);

  useEffect(() => {
    dp(initSetting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionClick = (pathname) => {
    history.push(pathname);
  };

  const changeLanguage = (language) => {
    dp(changeSetting({ language }));
  };

  return (
    <div className={styles.containerHeader}>
      <Container>
        <div className={cx(styles.content, "grid grid-cols-12 gap1")}>
          <div className="col-auto w-auto">
            <a href="/">
              <img src={logo} alt="now" />
            </a>
          </div>
          <div className="col-auto"></div>
          <div className="col-start-3 col-end-10 flex">
            {switchConfig.map((element, index) => (
              <div
                key={index}
                onClick={() => actionClick(element.pathname)}
                className={cx(styles.columnContent, "text-center", {
                  [styles.active]: pathname === element.pathname,
                })}
              >
                {t(`${element.title}Page.entity`)}
              </div>
            ))}
          </div>
          <div className="col-span-2 flex items-center justify-end">
            <AiOutlineSearch size="30px" className="mr-5 cursor-pointer" />
            <button className={styles.loginBut}>{t("login")}</button>
          </div>
        </div>
      </Container>
      <div className="inline-block fixed top-4 right-0">
        <div className={styles.dropdown}>
          <div className="dropBtn">
            {setting.language === "vi" ? (
              <ViFlag width={30} height={30} />
            ) : (
              <EnFlag width={30} height={30} />
            )}
          </div>
          <div className={styles.dropdownContent}>
            <div
              className={styles.dropdownItem}
              onClick={() => changeLanguage("vi")}
            >
              <ViFlag width={20} height={20} /> {t("vietnam")}
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => changeLanguage("en")}
            >
              <EnFlag width={20} height={20} /> {t("english")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
