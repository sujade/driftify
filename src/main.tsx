import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import NavBar from "./Components/Navbar/Navbar.tsx";
import TextRow from "./Components/TextRow.tsx";
import IconRow from "./Components/IconRow/IconRow.tsx";
import ReachRow from "./Components/ReachRow/ReachRow.tsx";
import Footer from "./Components/Footer.tsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavBar/>
        <TextRow title={"Enkel, rätt och trygg IT."} inverted={true}>
            <p className="textrow-text fw-bold">Olika företag har olika utmaningar när det<br/> kommer till IT. Vårt jobb är att
                hitta den bästa
                <br/> lösningen just för dig.</p>
        </TextRow>

        <TextRow title={"En kundnära IT"}>
            <p className="textrow-text" >Vi värnar om våra kunder och sätter stort fokus på varje företags unika <br/>förutsättningar.</p>
            <p className="textrow-text" >Genom att erbjuda en komplett IT eller bara förstärka upp ert team med erfarna<br/> konsulter kan vi
                hålla ordning och reda på er IT-miljö<br/>
                - så att ni kan fokusera på det ni kan bäst!</p>
        </TextRow>
        <IconRow/>
        <ReachRow/>
        <Footer/>
    </React.StrictMode>
)
