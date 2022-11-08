import "./App.css";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login"
import{BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

const App = () =>{
    let history = useHistory();
    const userIsLoggedIn = ()=>{
        history.push("/dashboard");
    }
    return(
        <Router>
            <Switch>
                <Route path="/login">
                    <Login userIsLoggedIn={userIsLoggedIn}/>
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

export default App;