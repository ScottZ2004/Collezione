import { createContext, useState, useEffect } from "react";
import usersData from "../data/users";
import { useNavigate } from "react-router-dom";
import collectionData from "../data/collection";
const CollectionContext = createContext();

export const CollectionProvider = ({children}) => {
    const navigate = useNavigate();
    //login
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

    useEffect(() => {
        setUsers(usersData.users);
    },[])

    // collection
    const [collection, setCollection] = useState(collectionData.collection);
    const [selectedItem, setSelectedItem] = useState(1);
    const [editMode, setEditMode] = useState(false);
    const [selectedInput, setSelectedInput] = useState({
        title: "",
        description: "",
        build_year: "",
        park: "",
    });

    const changeMode = () => {
        setEditMode(!editMode);
    }

    const onItemClick = (id) =>{
        setSelectedItem(id)
        setEditMode(false)
    }

    const saveItem = (title, description, build_year, park) => {
        let newState = collection.map(item => {
            if (selectedItem === item.id){
                item.id = selectedItem;
                if(selectedInput.title === ""){
                    item.title = title
                    console.log("hallo")
                }else{
                    item.title = selectedInput.title;    
                }     
                if(selectedInput.description === ""){
                    item.description = description
                }else{
                    item.description = selectedInput.description;    
                }    
                if(selectedInput.build_year === ""){
                    item.Build_Year = build_year
                }else{
                    item.Build_Year = selectedInput.build_year;
                }   
                if(selectedInput.park === ""){
                    item.Park = park
                }else{
                    item.Park = selectedInput.park;
                }              
                               
            }
            return item
        });
        setCollection(newState);
        setEditMode(false);
        setSelectedInput({
            title: "",
            description: "",
            build_year: "",
            park: "",
        })
    }

    const onSelectedInputchange = (event) => {
        setSelectedInput({
            ...selectedInput,
            [event.target.name]: event.target.value
        });
    }

    return <CollectionContext.Provider value={{
        redirectToLogin,
        users,
        user,
        addUser,
        onInputChange,
        logIn,
        wrongInput,
        collection,
        changeMode,
        onItemClick,
        saveItem,
        setCollection,
        setSelectedItem,
        selectedItem,
        onSelectedInputchange,
        selectedInput,
        editMode,
        setSelectedInput,
    }}>{children}</CollectionContext.Provider>
}

export default CollectionContext