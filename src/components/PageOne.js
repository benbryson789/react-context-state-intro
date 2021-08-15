
import React, { Component } from 'react'

class PageOne extends Component {
    render() {
        return (
            <div>
                <h2>Page One</h2>
                <p>isLoggedIn : {this.props.userStuff.loggedIn.toString()} </p>
            </div>
        )
    }
}

export default PageOne
