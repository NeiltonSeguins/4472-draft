import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";
import FooterInstitucional from "./FooterInstitucional";
import FooterSocial from "./FooterSocial";
import FooterDevelopedBy from "./FooterDevelopedBy";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitucional />
          <FooterSocial />
        </div>
      </footer>
      <FooterDevelopedBy />
    </>
  );
};

export default Footer;
