import '../styles/index.scss'
import '../styles/styles.scss';
import '../styles/stylesDesktop.scss'
import '../styles/stylesTablet.scss'
import {useStore} from '../helpers/store'
import {Provider} from 'react-redux'
import {SessionProvider, useSession} from "next-auth/react"

function Auth({children}) {
    const {status} = useSession({required: true})

    if (status === 'authenticated') {
        return children
    }
    // Session is being fetched, or no user.
    return children
}

export default function App({Component, pageProps: {session, ...pageProps}}) {
    const store = useStore(pageProps.state)

    return (
        <SessionProvider session={session}>
            {/*{*/}
            {/*    Component.auth ? (*/}
            {/*            <Auth>*/}
            {/*                <Provider store={store}>*/}
            {/*                    <Component {...pageProps}/>*/}
            {/*                </Provider>*/}
            {/*            </Auth>*/}
            {/*        ) :*/}
            {/*        <Provider store={store}>*/}
            {/*            <Component {...pageProps}/>*/}
            {/*        </Provider>*/}
            {/*}*/}
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        </SessionProvider>
    )
}

