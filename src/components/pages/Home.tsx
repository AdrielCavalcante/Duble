import { useTranslation } from "react-i18next";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

function Home() {
    const { t } = useTranslation();

    return (
        <main className={styles.sessao}>
            <header>
                <div>
                    <h1>Curso de Dublagem e Teatro em um só lugar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur exercitationem facilis. Officia vitae nulla nostrum rem laudantium pariatur ea fuga blanditiis provident omnis, enim, recusandae non incidunt itaque voluptates!.</p>
                    <button className={styles.button}>Orçamento</button>
                </div>
            </header>

            <p style={{color: "white", fontSize:"1.5rem"}}>Carousel de imagens...</p>
        </main>
    );
}

export default Home;