import "./App.css";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login"
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/login/">
                    <Login/>
                </Route>
                <Route path="/">
                    <Homepage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;