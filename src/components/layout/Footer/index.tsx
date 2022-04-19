import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <footer className={styles.footer}>
            <div>
                <span>&copy; Dublemix Audiovisual</span>
            </div>
            <div>
                <h6>FALE CONOSCO</h6>
                <div>
                    <a href="https://www.linkedin.com/company/tractian/" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a href="https://www.instagram.com/tractian/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://www.facebook.com/tractian" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/company/tractian/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    <a href="https://www.youtube.com/c/TRACTIAN" target="_blank" rel="noreferrer"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;