import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import useMedia from "../hooks/useMedia";

const HeaderNav = () => {
  // const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/" end activeClassName={styles.active}>
          Home
          {mobile}
        </NavLink>

        <NavLink to="" activeClassName={styles.active}>
          Formulario
          {mobile}
        </NavLink>

        <NavLink to="" activeClassName={styles.active}>
         Agenda
          {mobile}
        </NavLink>

        <NavLink to="" activeClassName={styles.active}>
        MNV Recomenda
          {mobile}
        </NavLink>

        {/* <button onClick={userLogout}> */}
        {/* <Sair /> */}
        {/* {mobile && 'Sair'} */}
        {/* </button> */}
      </nav>
    </>
  );
};

export default HeaderNav;
