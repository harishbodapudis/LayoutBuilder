// Write your code here
import Footer from '../Footer'
import Header from '../Header'
import Body from '../Body'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="layout-container">
          <Header />
          <Body />
          <Footer />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
