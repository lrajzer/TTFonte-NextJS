import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ lang }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faCaretRight} className={styles.caret} />
          &nbsp;{lang === "pl" ? "Urządzenia!" : "Machines!"}
          <div className={styles.dropdown}>
            <div className={styles.dropDiv}>
              <Link href="/machines/ice-cream" className={styles.navLink}>
                {lang === "pl" ? "" : "Ice cream machines"}
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link href="/machines/chocolate" className={styles.navLink}>
                {lang === "pl" ? "" : "Chocolate machines"}
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link href="/machines/trucks" className={styles.navLink}>
                {lang === "pl" ? "" : "Refrigerated trucks"}
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>
            {lang === "pl" ? "Kontakt z nami!" : "Contact us!"}
          </Link>
        </li>
      </ul>
      <div className={styles.logoWrapper}>
        <Link href={lang === "pl" ? "/pl/" : "/"}>
          <a hrefto={lang === "pl" ? "/pl/" : "/"}>
            <Image src="/logo/logo.svg" layout="fill" alt="TTFonte Logo" />
          </a>
        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={lang === "pl" ? "/pl/" : "/"} className={styles.navLink}>
            {lang === "pl" ? "O nas!" : "About us!"}
          </Link>
        </li>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faCaretRight} className={styles.caret} />
          &nbsp;{lang === "pl" ? "Partnerzy" : "Partners!"}
          <div className={styles.dropdown}>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/teknoice"}
                className={styles.navLink}
              >
                Teknoice
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/packint"}
                className={styles.navLink}
              >
                Packint
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/laief"}
                className={styles.navLink}
              >
                L.A.I.e.F.
              </Link>
            </div>
            <div className={styles.dropDiv}>
              <Link
                href={(lang === "pl" ? "/pl" : "") + "/cold-car"}
                className={styles.navLink}
              >
                Cold car
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
