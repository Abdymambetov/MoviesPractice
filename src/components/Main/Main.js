import React from "react";
import "./Main.css";
import Header from "../Header/Header";
// import Promo from "../Main/Promo/Promo"
// import AboutProject from "./AboutProject/AboutProject";
// import Techs from "./Techs/Techs"
// import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main() {

    return (
        <div className="content">
            <Header />
            <main>
                <h1>Meder</h1>
            </main>
            <Footer/>
        </div>
    );
}

export default Main;