import Container from "react-bootstrap/Container";
import {PropsWithChildren} from "react";

interface TextRowProps extends PropsWithChildren {
    title: string;
    inverted?: boolean;
}

function TextRow ({title, children, inverted}: TextRowProps) {
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