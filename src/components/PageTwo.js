import React, { Component } from 'react'

 class PageTwo extends Component {
    render() {
        return (
            <div>
                <h2 onClick= {this.props.userStuff.logInOut}>Page Two</h2>
                <p2>isLoggedIn: {this.props.userStuff.loggedIn.toString()}</p2>
            </div>
        )
    }
}

export default PageTwo

// //Functional Component


// import { Component, useContext } from 'react'
// import UserContext from '../contentComponents/UserContext';

// const PageTwo = () => {

//     const userStuff = UserContext(UserContext)

//     return (
//         <div>
            
//             <h2 onClick= {userStuff.logInOut}>Page Two</h2>
//             <p2>isLoggedIn: {userStuff.loggedIn.toString()}</p2>
//              <p>Hello<p/>
//              <p>Hello world<p/>
            
//         </div>
//     )
// }

// export default PageTwo;
