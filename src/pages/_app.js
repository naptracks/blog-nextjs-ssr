import '../styles/index.scss'
import '../styles/styles.scss';
import '../styles/stylesDesktop.scss'
import '../styles/stylesTablet.scss'
import { useStore } from '../helpers/store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.state)

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
