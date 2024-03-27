import Link from "next/link";
import logoImg from "@/assets/logo.png";

import classes from "./MainHeader.module.css";
import Image from "next/image";
import NavLink from "./NavLink";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A plate with food" priority />
        NEXTLEVEL FOOD
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
