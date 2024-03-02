import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import {App} from "./App.tsx";

const rootElement = document.getElementById('root')
if (rootElement !== null) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}

