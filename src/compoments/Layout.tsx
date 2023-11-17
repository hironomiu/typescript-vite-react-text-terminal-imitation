import { useState } from 'react'
// import Footer from './Footer'
import Main from './Main'
import Header from './Header'

const Layout = () => {
  const [isClick, setIsClick] = useState(false)
  const handleClick = () => setIsClick(!isClick)

  return (
    <div
      onClick={handleClick}
      className="bg-black flex flex-col w-full h-[100vh] overflow-auto"
    >
      <Header />
      <Main />
      {/* Mainがかぶるため一旦コメント */}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
