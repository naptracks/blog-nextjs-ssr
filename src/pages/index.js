import {Fragment} from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";

// Home page
// route = '/'

export default function Home() {


  return (
      <Fragment>
          <main>
              <Layout>
                  <Login/>
              </Layout>
          </main>
      </Fragment>

  )
}


