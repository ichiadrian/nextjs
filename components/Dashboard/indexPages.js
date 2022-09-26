
// import React from "react";
import Header from "../Layout/header";
// import BottomNav from "../Layout/NavBottom";
import Footer from "../Layout/Footer";
import CardStatus from "./CardStatus";
import Grafik from "./Grafik";
import Table from "./Table";

function IndexPage(props) {
    const contentStyle = {
        minHeight: "90vh",
        top: "56px",
        backgroundColor: "#f1f1f9",
        overflowX: "hidden"
    }

    return (
        <div style={{ backgroundColor: "#f1f1f9" }}>

            <Header />

            <div className="container content position-relative" style={contentStyle}>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center text-center">
                        <p className="mt-5 h2"> KAWAL COVID-19</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center text-center">
                        <p className="mt-3 f18">
                            Website Pemantauan Terkini Kasus Virus Covid-19
                        </p>
                    </div>
                </div>
                <CardStatus/>

                <Grafik isGlobal = {props.isGlobal} />
                <Table isGlobal = {props.isGlobal} />
            </div>
            

            {/* <BottomNav/> */}
            <Footer rightContent = {""}
                    leftContent={<div className="mx-2 font-weight-bold"> Niomic @2022 All Right Reserved </div>}/>

        </div>

    );
}

export default IndexPage;