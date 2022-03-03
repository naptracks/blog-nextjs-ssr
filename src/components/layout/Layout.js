import {Fragment} from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Container from "../layout/Container";


// Layout.jst provides a navbar, footer and a main container

const Layout = ({children, center, user, singOut, data}) => {

    return (
        <Fragment>
            <Navbar data={data.navbar} user={user} signOut={singOut}/>
            <Container layout center={center}>
            {children}
            </Container>
            <Footer data={data.footer}/>
        </Fragment>
    )
};

export default Layout