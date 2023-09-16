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
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <h1 className="heading">Layout</h1>
          <div className="checkbox-container">
            <input
              id="content"
              type="checkbox"
              onChange={onChangeContent}
              checked={showContent}
            />
            <label htmlFor="content">Content</label>
            <br />
            <input
              id="leftNavbar"
              type="checkbox"
              onChange={onChangeLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
            <br />
            <input
              id="rightNavbar"
              type="checkbox"
              onChange={onChangeRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
