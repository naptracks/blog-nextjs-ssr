import React, {Fragment} from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Container from "../layout/Container";


// Layout.jst provides a navbar and a main container

const Layout = ({children, center, user, singOut}) => {

    return (
        <Fragment>
            <Navbar user={user} signOut={singOut}/>
            <Container layout center={center}>
            {children}
            </Container>
            <Footer/>
        </Fragment>
    )
};

export default Layout