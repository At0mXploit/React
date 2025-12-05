import { createRoot } from 'react-dom/client'
import { Fragment } from "react"
import Header from "./header"
import Footer from './footer'
import MainContent from './main-content'
import React, { createElement } from 'react'

// Create root first
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

root.render(
    <Page />
)