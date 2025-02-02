import Logo from "../Logo";
import styles from "./Footer.module.css";

const FooterLogo = () => (
  <div className={styles.logo}>
    <Logo src="logo_branco.png" alt="Logo da luz e cena" />
    <p>Onde a realidade encontra a fantasia!</p>
  </div>
);

export default FooterLogo;
