import { createContext, useState, useEffect } from "react";
import usersData from "../data/users";
import { useNavigate } from "react-router-dom";
const CollectionContext = createContext();

export const CollectionProvider = ({children}) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        isLoggedIn: false,
        userId: null
    });
    const [redirectPath, setRedirectPath] = useState("");
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
    })
    const [wrongInput, setWrongInput] = useState(false);

    useEffect(() => {
        setUsers(usersData.users);
    },[])

    const redirectToLogin = (path) => {
        setRedirectPath(path);
    }

    const addUser = (firstName, lastName, email, password) => {
        let toBeAdded = [
            {
                name: firstName,
                lastName: lastName,
                email: email,
                password: password,
                id: users.length + 1,
            }
        ]
        let mergedArrays = users.concat(toBeAdded);
        setUsers(mergedArrays);
    }

    const onInputChange = (event) => {
        setLoginValues({
            ...loginValues,
            [event.target.id]: event.target.value
        })
    }
    const logIn = () => {
        users.map(user => {
            if (loginValues.email == user.email && loginValues.password == user.password){
                setUser({
                    isLoggedIn: true,
                    userId: user.id,
                });
                let route = "/user/" + user.id + "/collection/";
                if (redirectPath !== null){
                    route = redirectPath
                }
                navigate(route);
            }else{
                setWrongInput(true)
                redirectToLogin(null)
            }
        })

    }

    return <CollectionContext.Provider value={{
        redirectToLogin,
        users,
        user,
        addUser,
        onInputChange,
        logIn,
        wrongInput

    }}>{children}</CollectionContext.Provider>
}

export default CollectionContext