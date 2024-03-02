import Avatar from "./fredrik.png"
import Container from "react-bootstrap/Container";

function ReachRow () {
    return (
        <section className="mb-5">
            <Container className="d-flex justify-content-evenly pt-5">
                <div>
                    <img src={Avatar}/>
                </div>
                <div className="pt-lg-5">
                    <h1 className="row-title fw-bolder mb-3 mt-3">Nyfiken?</h1>
                    <p className="textrow-text mt-5">Hör av dig till mig så<br/> berättar jag gärna mer!</p>
                    <p className="textrow-text">fredrik.hagefalk@driftify.se<br/>070-730 86 80</p>
                </div>
            </Container>
        </section>
    )
}

export default ReachRow;