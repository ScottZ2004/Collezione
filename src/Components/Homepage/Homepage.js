import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import About from "../About/About";
import Price from "../Price/Price";
const Homepage = () => {
    const itemsList = [
        {
            name: 'Over',
            goto: '#',
            key: 1
        },
        {
            name: 'Features',
            goto: '#',
            key: 2
        },
        {
            name: 'Prijs',
            goto: '#',
            key: 3
        },
        {
            name: 'Contact',
            goto: '#',
            key: 4
        }
    ]
    return(
        <>
            <Navigation items={itemsList} />
            <Header />
            <About />
            <Price/>
        </>
    )
}

export default Homepage;