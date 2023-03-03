import { wrapper } from '../hello_next_redux_saga-main/store'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
