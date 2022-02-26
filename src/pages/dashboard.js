
// Dashboard page - route = '/dashboard
// access with auth


import {Fragment} from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import Separator from "../components/layout/Separator";
import Card from "../components/ui/Card";

const Dashboard = () => {
    return (
        <Fragment>
            <main>
                <Layout>
                    <Container content col>
                        <div className={'header-dashboard-container'}>
                            <Separator short/>
                            <h2>Find The Best Articles</h2>
                        </div>
                        <div className={'articles-dashboard-container'}>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </Container>
                </Layout>
            </main>
        </Fragment>
    )
}

export default Dashboard;