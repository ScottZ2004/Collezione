import { createContext, useState, useEffect } from "react";
import usersData from "../data/users";
import { useNavigate } from "react-router-dom";
import collectionData from "../data/collection";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

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

    const getUsers = async() =>{
        try{
            let response = await axios.get('users/get');
            setUsers(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    const addUser = async(firstName, lastName, email, password) => {
        let toBeAdded = 
            {
                name: firstName,
                lastname: lastName,
                email: email,
                password: password,
            }
        try{
            const response = await axios.post('users/register', toBeAdded)
            console.log(response)
        }catch(e){
            console.log(e)
        }
        navigate('/login')
    }
    const onInputChange = (event) => {
        setLoginValues({
            ...loginValues,
            [event.target.id]: event.target.value
        })
    }
    const logIn = async() => {
        try{
            const response = await axios.post('users/login', loginValues);
            if(response.data.id !== undefined){
                setUser({
                    isLoggedIn: true,
                    userId: response.data.id
                });
                let route = "/user/" + response.data.id + "/collection/";
                if (redirectPath !== ""){
                    route = redirectPath
                }
                getUsers();
                navigate(route);
            }else{
                setWrongInput(true)
                redirectToLogin("")
            }
        }
        catch(e){
        }
    }


    // collection
    const [collectionFromDataBase, setCollectionFromDataBase] = useState([])
    const [collection, setCollection] = useState(collectionFromDataBase);
    const [selectedItem, setSelectedItem] = useState(1);
    const [editMode, setEditMode] = useState(false);
    const [selectedInput, setSelectedInput] = useState({
        title: "",
        description: "",
        build_year: "",
        park: "",
    });
    const [activeFilter, setActiveFilter] = useState("ALLES");
    const [pageNumber, setPageNumber] = useState(0);
    const [addItemInput, setAddItemInput] = useState(
        {
            title: "",
            description: "",
            Build_Year: 0,
            Park: "",
            img: "",
            userId: 0,
            filter: ""
        }
    )

    const getCollectionFromDataBase = async() => {
        try{
            let response = await axios.get('/collection');
            setCollectionFromDataBase(response.data.data);
        }
        catch(e){

        }
    }

    const getCollection = (number) => {
        let isInCollection = false
        const filteredCollection = collectionFromDataBase.filter(item => {
            if(item.userId == number){
                return item
            }
        });
        filteredCollection.map(item => {
            if(selectedItem === item.id){
                isInCollection = true
            }
        })
        if(!isInCollection && filteredCollection.length !== 0){
            setSelectedItem(filteredCollection[0].id)
        }
        
        setCollection(filteredCollection)
    }

    const changeMode = () => {
        setEditMode(!editMode);
    }

    const onItemClick = (id) =>{
        setSelectedItem(id)
        setEditMode(false)
    }

    const saveItem = async(title, description, build_year, park, img, filter) => {
        console.log(img, filter);
        let newState = collection.filter(item => {
            if (selectedItem === item.id){
                item.id = selectedItem;
                if(selectedInput.title === ""){
                    item.title = title
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
                return item               
            }
            
        });

        const toBeAdded = {
            "title": newState[0].title,
            "description": newState[0].description,
            "Build_Year": newState[0].Build_Year,
            "Park": newState[0].Park,
            "img": img,
            "userId": user.userId,
            "filter": filter
        }
        try{
            await axios.put("collection/" + selectedItem, toBeAdded);
        }catch(e){
            console.log(e)
        }
        getCollectionFromDataBase();
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

    const onFilterButtonClicked = (event) => {
        setActiveFilter(event.target.id);
        if(event.target.id !== "ALLES"){
            const filteredCollection = collectionFromDataBase.filter(item => {
                if(item.userId == pageNumber){
                    return item
                }
            });
            const newCollection = filteredCollection.filter(item => {
                if(event.target.id === item.filter){
                    return item
                }
            });
            setCollection(newCollection);
            if(newCollection.length !== 0){
                setSelectedItem(newCollection[0].id)
            }else{
                setSelectedInput(0)
            }
        }else{
            const filteredCollection = collectionFromDataBase.filter(item => {
                if(item.userId == pageNumber){
                    return item
                }
            });
            setCollection(filteredCollection)
            setSelectedItem(filteredCollection[0].id)
        }
    }

    const [addpageError, setAddpageError] = useState("");

    const addToCollection = async(e) => {
        e.preventDefault();
        const toBeAdded = {
            "title": addItemInput.title,
            "description": addItemInput.description,
            "Build_Year": addItemInput.Build_Year,
            "Park": addItemInput.Park,
            "img": selectedImage,
            "userId": user.userId,
            "filter": addItemInput.filter
        }

        try{
            await axios.post('collection', toBeAdded);
            getCollectionFromDataBase()
            navigate('/user/' + user.userId + "/collection");
            setAddpageError("")
        }
        catch(e){
            setAddpageError(e.response.data.message);
            console.log(e.response.data.message)
        }
    }

    //share
    const [shareIsOpen, setShareIsOpen] = useState(false);

    const openShare = () => {
        document.body.style.overflow = "hidden"
        setShareIsOpen(true)
    }

    //selectImage
    const [selectImageIsOpen, setSelecteImageIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openSelectImage = () => {
        document.body.style.overflow = "hidden";
        setSelecteImageIsOpen(true)
    }
    
    useEffect(() => {
        getCollectionFromDataBase()
    },[])

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
        activeFilter,
        onFilterButtonClicked,
        setPageNumber,
        getCollection,
        shareIsOpen,
        setShareIsOpen,
        openShare,
        setUser,
        collectionFromDataBase,
        selectImageIsOpen,
        openSelectImage,
        setSelecteImageIsOpen,
        selectedImage,
        setSelectedImage,
        addItemInput,
        setAddItemInput,
        addToCollection,
        addpageError,

    }}>{children}</CollectionContext.Provider>
}

export default CollectionContext