import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { MdArrowDropDown } from 'react-icons/md';

function Navbar() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className={styles.navbar}>
            <div style={{ display: "inherit", alignItems: "center"}}>
                <Link to="/">
                    <div style={{ width: "210px", height: "55px", backgroundColor: "yellow"}}>LOGO</div>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item} style={{marginRight: "1.25rem"}}>Sobre Nós</li>
                    <li className={styles.item}>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Serviços <MdArrowDropDown /></button>
                            <div className={styles.dropdownContent}>
                                <li>Dublagem</li>
                                <li>Teatro</li>
                                <li>Radionovelas</li>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}><Link to="/blog">Random</Link></li>
                    <li className={styles.item}><div className={styles.dropdown}>
                        <button className={styles.dropbtn}>{t('actual')}<MdArrowDropDown /></button>
                        <div className={styles.dropdownContent}>
                            <li onClick={() => changeLanguage('pt')}>PT</li>
                            <li onClick={() => changeLanguage('en')}>EN</li>
                            <li onClick={() => changeLanguage('es')}>ES</li>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            <div style={{ display: "inherit", alignItems: "center" }}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button}>Orçamento</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;