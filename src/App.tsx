import { Provider } from 'jotai'
import Layout from './compoments/Layout'

const App = () => {
  return (
    <div className="bg-fixed">
      <Provider>
        <Layout />
      </Provider>
    </div>
  )
}

export default App
