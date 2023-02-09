// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value
      console.log(showContent, showRightNavbar, showLeftNavbar)
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-box">
              <h1 className="leftNav-title">Left Navbar Menu</h1>
              <ul className="leftNav-content">
                <li className="leftNav-item">Item 1</li>
                <li className="leftNav-item">Item 2</li>
                <li className="leftNav-item">Item 3</li>
                <li className="leftNav-item">Item 4</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
          {showContent ? (
            <div className="content-box">
              <h1 className="content-title">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : (
            <></>
          )}
          {showRightNavbar ? (
            <div className="right-box">
              <h1 className="right-navbar-title">Right Navbar</h1>
              <div className="right-navbar-box-one">
                <h1 className="box-title-one">Ad 1</h1>
              </div>
              <div className="right-navbar-box-two">
                <h1 className="box-title-two">Ad 2</h1>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
