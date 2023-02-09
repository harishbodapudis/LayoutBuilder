// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const addRemoveContent = event => {
        console.log('content', event.target.value)
        onToggleShowContent()
      }

      const addRemoveLeftNav = event => {
        console.log('left', event.target.value)
        onToggleShowLeftNavbar()
      }

      const addRemoveRightNav = event => {
        console.log('right', event.target.value)
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-container">
          <h1>Layout</h1>
          <div className="configuration-box">
            <div className="checkbox-box">
              <input
                type="checkbox"
                id="content"
                name="content"
                onChange={addRemoveContent}
                defaultChecked={showContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="checkbox-box">
              <input
                type="checkbox"
                id="leftNav"
                name="leftNav"
                onChange={addRemoveLeftNav}
                defaultChecked="true"
              />
              <label htmlFor="leftNav">Left Navbar</label>
            </div>
            <div className="checkbox-box">
              <input
                type="checkbox"
                id="rightNav"
                name="rightNav"
                onChange={addRemoveRightNav}
                defaultChecked={showRightNavbar}
              />
              <label htmlFor="rightNav">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
