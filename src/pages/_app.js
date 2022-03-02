import '../styles/index.scss'
import '../styles/styles.scss';
import '../styles/stylesDesktop.scss'
import '../styles/stylesTablet.scss'
import {useStore} from '../redux/store'
import {Provider} from 'react-redux'
import {SessionProvider, useSession} from "next-auth/react"
import Head from 'next/head'
import {LangProvider} from '../context/LangContext'


function Auth({children}) {
    const {status} = useSession({required: true})

    if (status === 'authenticated') {
        return children
    }
    // Session is being fetched, or no user.
    return <div>Loading...</div>
}

export default function App({Component, pageProps: {session, ...pageProps}}) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <SessionProvider session={session}>
            {
                Component.auth ? (
                        <Auth>

                            <Provider store={store}>
                                <Head>
                                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                                    <title>Dehef Blog</title>
                                </Head>
                                <LangProvider>
                                    <Component {...pageProps}/>
                                </LangProvider>
                            </Provider>

                        </Auth>
                    ) :

                    <Provider store={store}>
                        <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1"/>
                            <title>Dehef Blog</title>
                        </Head>
                        <LangProvider>
                            <Component {...pageProps}/>
                        </LangProvider>
                    </Provider>
            }

        </SessionProvider>
    )
}

