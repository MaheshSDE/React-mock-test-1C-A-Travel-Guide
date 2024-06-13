import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Package from './components/Package'

import './App.css'

// Replace your code here
class App extends Component {
  state = {travelPackagesList: [], isLoading: true}

  componentDidMount = () => {
    this.getPackages()
  }

  getPackages = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      description: eachPackage.description,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))
    console.log(updatedData)
    this.setState({travelPackagesList: updatedData, isLoading: false})
  }

  render() {
    const {travelPackagesList, isLoading} = this.state
    return (
      <div className="appContainer">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="unOrderListContainer">
            {travelPackagesList.map(eachPackage => (
              <Package key={eachPackage.id} packageDetails={eachPackage} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default App
