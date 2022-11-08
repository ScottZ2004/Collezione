import "./App.css";
import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";
import usersList from "../data/users";
import{BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Signup from "../Components/Signup/Signup";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        this.setState({users: usersList})
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login users={this.state.users}/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/dashboard">
                        <h1>Hallo daar</h1>
                    </Route>
                    <Route path="/">
                        <Homepage/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;