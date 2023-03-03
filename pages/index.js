import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../hello_next_redux_saga-main/store'
import { loadData, startClock, tickClock } from '../hello_next_redux_saga-main/actions'
import Page from '../hello_next_redux_saga-main/components/page'

const Index = () => {
  const dispatch = useDispatch()

   useEffect(() => {
     dispatch(startClock())
   }, [dispatch])

  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
   store.dispatch(tickClock(false))

  if (!store.getState().placeholderData) {
    store.dispatch(loadData())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Index
