import React, {Fragment} from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Container from "../layout/Container";


// Layout.jst provides a navbar and a main container

const Layout = (props) => {

    return (
        <Fragment>
            <Navbar/>
            <Container layout>
            {props.children}
            </Container>
            <Footer/>
        </Fragment>
    )
};

export default Layout