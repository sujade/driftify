import {FaLinkedin} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <section className="inverted">
            <Container className="d-flex justify-content-evenly">
                <div className="mt-5 mb-5">
                    <p className="fw-bold footer-text">Här finns vi</p>
                    <p className="footer-text">Telefon: 070-7308680<br/> info@driftify.se</p>
                    <p className="footer-text">Driftify AB c/o Hagefalk<br/> Lars Forssells Gata 30, 7r<br/> 112 15
                        Stockholm</p>
                    <p className="footer-text fw-bold">GDPR</p>
                </div>
                <div className="mt-5 mb-5">
                    <p className="fw-bold footer-text">Våra tjänster</p>
                    <p className="footer-text">Second Line Support</p>
                    <p className="footer-text">Nätverks- och drifttekniker</p>
                    <p className="footer-text">Systemadministratör</p>
                    <p className="footer-text">Förvaltningsledare</p>
                </div>
                <div className="mt-5 mb-5">
                    <p className="fw-bold footer-text">Följ oss</p>
                    <div>
                        <FaLinkedin size={50}/>
                        <FaInstagramSquare size={50}/>
                        <FaFacebookSquare size={50}/>
                    </div>
                    <p className="fw-bold footer-text mt-4">Intranät</p>
                    <div className="d-flex mt-2">
                        <BsPersonFill size={50}/>
                        <p>Logga in</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer