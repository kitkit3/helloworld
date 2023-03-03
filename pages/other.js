import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../hello_next_redux_saga-main/store'
import { startClock, tickClock } from '../hello_next_redux_saga-main/actions'
import Page from '../hello_next_redux_saga-main/components/page'

const Other = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false))
})

export default Other
