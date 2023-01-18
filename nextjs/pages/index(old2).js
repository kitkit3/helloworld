import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../store'
import { startClock, tickClock } from '../actions'
import Page from '../components/page'


const AppWrapper = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}> // Set context
      <index /> // Now App has access to context
    </Provider>
  )
}

const index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Index Page" linkTo="/" NavigateTo="Index Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false))
})

export default AppWrapper