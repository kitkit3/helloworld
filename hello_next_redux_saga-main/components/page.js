import Link from 'next/link'
import { useSelector } from 'react-redux'


import Clock from './clock'
import CounterItem from './counterItem'


function Page({ linkTo, NavigateTo, title }) {
  const placeholderData = useSelector((state) => state.placeholderData)
  const error = useSelector((state) => state.error)
  const light = useSelector((state) => state.light)
  const lastUpdate = useSelector((state) => state.lastUpdate)
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <CounterItem /> 
      
      <nav>
        <Link href={linkTo}>Navigate:{NavigateTo}</Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default Page
