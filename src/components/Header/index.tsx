import logo from '../../assets/ignite-logo.svg'

import styles from './styles.module.css'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <img src={logo} alt="Ignite logo" />
  </header>
)