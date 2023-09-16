// Write your code here
// import ConfigurationController from '../ConfigurationController'
import Footer from '../Footer'
import Header from '../Header'
import Body from '../Body'
import './index.css'

const Layout = () => (
  <div className="app-container">
    {/* <ConfigurationController /> */}
    <div className="card-container">
      <Header />
      <div className="middle-container">
        <Body />
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout
