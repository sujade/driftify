import Container from "react-bootstrap/Container";

function TextRow ({title, children, inverted}) {
    return (
        <>
        <section className={inverted ? "inverted" : ""}>
            <Container>
                <div className="text-center pt-5 pb-5 mb-2 mt-lg-5">
                    <h1 className="title-text fw-bolder pt-5" >
                        {title}
                    </h1>
                    <p className="fs-5 pb-5 pt-5">
                        {children}
                    </p>
                </div>
            </Container>
        </section>
        </>
    )
}

export default TextRow;