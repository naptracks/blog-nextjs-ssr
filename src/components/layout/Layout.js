import React, {Fragment} from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Container from "../layout/Container";


// Layout.jst provides a navbar and a main container
// Container<props: center>

const Layout = (props) => {

    return (
        <Fragment>
            <Navbar/>
            <Container center>
            {props.children}
            </Container>
            <Footer/>
        </Fragment>
    )
};

export default Layout