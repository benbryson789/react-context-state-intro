import './App.css';
import Intermediate from './components/Intermediate';
import {Component} from 'react'
import UserContext from './contentComponents/UserContext'

class App extends Component  {
  state = {
    isLoggedIn: false
  }

  handleLoginOut = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

    render() {
      return (
        <div className="App">
          <h1 onClick = {this.handleLoginOut}>App</h1>
          <UserContext.Provider value = {{
            loggedIn:this.state.isLoggedIn,
            logInOut: this.handleLoginOut
          }}>
              <Intermediate/>
          </UserContext.Provider>
        </div>
      );
  }
}
export default App;
