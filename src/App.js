import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  changeShowContentStatus = () => {
    console.log('content')
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  changeShowLeftNavStatus = () => {
    console.log('left')
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  changeShowRightNavStatus = () => {
    console.log('right')
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.changeShowContentStatus,
          onToggleShowLeftNavbar: this.changeShowLeftNavStatus,
          onToggleShowRightNavbar: this.changeShowRightNavStatus,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
