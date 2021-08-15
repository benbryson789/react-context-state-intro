import React, { Component } from 'react'
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import UserContext from '../contentComponents/UserContext';


class Intermediate extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>Intermediate</h2>
                
                    {/* <PageOne/>
                    <PageOne/> */}
                    <UserContext.Consumer>
                        {
                            (cntxt) => {
                                
                                return <div>
                                    <PageOne userStuff = {cntxt}/>
                                    <PageTwo userStuff = {cntxt}/>
                                </div>
                            }
                        }
                    </UserContext.Consumer>
            </div>
        )
    }
}

export default Intermediate;
