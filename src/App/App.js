import "./App.css";
import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Collection from "../Components/Collection/Collection";
import Login from "../Components/Login/Login";
import usersObject from "../data/users";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from "../Components/Signup/Signup";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: usersObject.users,
            loggedIn: false,
            userId: null,
            redirectPath: null
        }
    }

    redirectToLogin = (path) => {
        this.setState({
            redirectPath: path
        });

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
                        <Login logIn={this.logIn} users={this.state.users} redirectPath={this.state.redirectPath} redirectToLogin={this.redirectToLogin}/>
                    </Route>
                    <Route path="/signup">
                        <Signup addUser={this.addUser}/>
                    </Route>
                    <Route path="/user/:number/collection">
                        <Collection isLoggedIn={this.state.loggedIn} userId={this.state.userId} redirectToLogin={this.redirectToLogin}/>
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