import { Link } from "react-router-dom"
import "./ErrorPage.css"

export const ErrorPage = () => {
    return (
        <div>
            <main className="error_page">
                <h2 className="h2-nadpis">Error 404 - Stránka nebyla nenalezena</h2>
                    <p>Omlouváme se, ale stránka, kterou hledáte, neexistuje.</p>
                <br/>
                <nav>
                    <button className="back_button">
                        <Link to="/home">Zpět na hlavní stránku</Link>
                    </button>
                </nav>
            </main>
        </div>
    )
}