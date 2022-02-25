import Head from 'next/head'
import {Fragment} from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/ui/Login";

// Home page
// route = '/'

export default function Home() {


  return (
      <Fragment>
          <Head>
              <title>Dehef Blog </title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          </Head>
          <main>
              <Layout>
                  <Login/>
              </Layout>
          </main>
      </Fragment>

  )
}


