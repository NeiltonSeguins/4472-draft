import Button from "../Button";
import FieldSet from "../FieldSet";
import InputText from "../InputText";
import styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.formulario}>
        <FieldSet>
          <InputText type="email" placeholder="Digite o seu melhor e-mail" />
        </FieldSet>
        <Button type="submit">Inscrever-se</Button>
      </form>
    </section>
  );
};

export default Newsletter;
