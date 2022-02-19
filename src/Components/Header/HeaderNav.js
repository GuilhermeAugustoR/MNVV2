import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import useMedia from "../../hooks/useMedia";
import { AiOutlineClose } from "react-icons/ai";

const HeaderNav = () => {
  const mobile = useMedia("");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${
            !mobileMenu ? styles.mobileButton : styles.mobileButtondisable
          } ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <buttom
          className={`${mobileMenu}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          style={{ cursor: "pointer", display: "flex", justifyContent: "flex-end", margin: 15, marginRight: 10}}
        >
          <AiOutlineClose size={20} />
          {mobile}
        </buttom>

        <NavLink to="/" end activeClassName={styles.active}  onClick={() => setMobileMenu(!mobileMenu)}>
          Home
          {mobile}
        </NavLink>

        <NavLink to="/forms" activeClassName={styles.active}  onClick={() => setMobileMenu(!mobileMenu)}>
          Formulario
          {mobile}
        </NavLink>

        <NavLink to="/schedule" activeClassName={styles.active}  onClick={() => setMobileMenu(!mobileMenu)}>
          Agenda
          {mobile}
        </NavLink>

        <NavLink to="/mnvrecomenda" activeClassName={styles.active}  onClick={() => setMobileMenu(!mobileMenu)}>
          MNV Recomenda
          {mobile}
        </NavLink>
      </nav>
    </>
  );
};

export default HeaderNav;
