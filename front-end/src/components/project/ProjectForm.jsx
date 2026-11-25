import styles from "./ProjectForm.module.scss";
import { Input } from "../form/Input";
import { Select } from "../form/Select";
import { SubmitButton } from "../form/SubmitButton";

export const ProjectForm = ({ btnText }) => {
  return (
    <>
      <form className={styles.form}>
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do Projeto"
        />
        <Input
          type="number"
          text="Orçamento do Projeto"
          name="budget"
          placeholder="Insira o Orçamento Total"
        />

        <Select name="category_id" text="Selecione a Categoria" />

        <SubmitButton text={btnText} />
      </form>
    </>
  );
};
