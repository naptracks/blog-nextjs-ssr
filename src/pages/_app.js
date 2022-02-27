import '../styles/index.scss'
import '../styles/styles.scss';
import '../styles/stylesDesktop.scss'
import '../styles/stylesTablet.scss'
import {useStore} from '../helpers/store'
import {Provider} from 'react-redux'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps} }) {
    const store = useStore(pageProps.state)

    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    )
}
