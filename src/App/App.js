import "./App.css";
import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";
import usersObject from "../data/users";
import{BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Signup from "../Components/Signup/Signup";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: usersObject.users,
            loggedIn: false,
            userId: null,
        }
    }

    logIn = (id) => {
        this.setState({
            loggedIn: true,
            userId: id,
        })

    }

    addUser = (firstName, lastName, email, password) => {
        let toBeAdded = [
            {
                name: firstName,
                lastName: lastName,
                email: email,
                password: password,
                id: this.state.users.length + 1,
            }
        ]
        let mergedArrays = this.state.users.concat(toBeAdded);
        this.setState({
            users: mergedArrays,
        })
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login logIn={this.logIn} users={this.state.users}/>
                    </Route>
                    <Route path="/signup">
                        <Signup addUser={this.addUser}/>
                    </Route>
                    <Route path="/dashboard">
                        <h1>Hallo daar</h1>
                    </Route>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;