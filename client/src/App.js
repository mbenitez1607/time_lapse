import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageContainer from './components/PageContainer';


function App() {

    return (
        <BrowserRouter>
            <PageContainer />
        </BrowserRouter>
    )
}

export default App;
