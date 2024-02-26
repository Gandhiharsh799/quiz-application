import logoImg from '../assets/logo.png'
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.title}>
        <img className={styles.img} src={logoImg} alt="quiz logo" />
        <h1 className={styles.heading}>Quiz Application</h1>
      </div>
    </header>
  );
}
