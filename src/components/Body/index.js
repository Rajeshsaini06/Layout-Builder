// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="center-container">
              <h1 className="left-heading">content</h1>
              <p className="text">
                Lorem ipsum dolor sot amet,consectetur adipiscing elit,sed do
                eiusmod tempor incododunt ut labore et dolore magna alique.Ut
                enim ad minim veiam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="right-heading">Right NavBar</h1>
              <div className="boxes">
                <div className="ad">
                  <p>Ad 1</p>
                </div>
                <div className="ad">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
