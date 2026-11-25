import { Link } from "react-router-dom";
import { Container } from "./Container";
import styles from "./NavBar.module.scss";
import logo from "../../assets/costs_logo.png";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/newproject">Novo Projeto</Link>
          </li>

          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>

          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>

          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
