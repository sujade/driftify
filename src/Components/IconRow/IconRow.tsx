import Container from "react-bootstrap/Container";
import IconOne from "./hand.png";
import IconTwo from "./question.png"
import IconThree from "./hearts.png"

function IconRow() {
    return (
        <section>
            <Container className="d-flex justify-content-between mb-5">
                <div className="text-center"><img className="icon" src={IconOne}/>
                    <p className="icon-text mt-4 fw-bolder">Lediga tjänster</p>
                </div>
                <div className="text-center"><img className="icon" src={IconTwo}/>
                    <p className="icon-text mt-4 fw-bolder">Behöver du en<br/> IT-konsult?</p>
                </div>
                <div className="text-center"><img className="icon" src={IconThree}/>
                    <p className="icon-text mt-4 fw-bolder">Så säger våra kunder<br/> om Driftify</p>
                </div>
            </Container>
        </section>
    )
}

export default IconRow;