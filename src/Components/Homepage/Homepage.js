import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import About from "../About/About";
import Features from "../Features/Features";
import Prices from "../Prices/Prices";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Homepage.css";

const Homepage = () => {
    const itemsList = [
        {
            name: 'Over',
            goto: '#over',
            border_color: "orange"
        },
        {
            name: 'Features',
            goto: '#features',
            border_color: "blue"
        },
        {
            name: 'Prijs',
            goto: '#prijs',
            border_color: "yellow"
        },
        {
            name: 'Contact',
            goto: '#contact',
            border_color: "purple"
        }
    ]
    return(
        <>
            <section className="homepage__light">
                <Navigation items={itemsList}/>
                <Header />
                <About />
                <svg className="homepage__svg" xmlns="http://www.w3.org/2000/svg" width="1920.045" height="420.76" viewBox="0 0 1920.045 420.76">
                    <g id="Group_4" data-name="Group 4" transform="translate(0 -2228.087)">
                        <path id="Path_2" data-name="Path 2" d="M0-16.734V-36.157S60.886-12.786,194.507-6.013C430.171,5.932,712.561,140.838,963.6,140.838c286.08,0,533.227-129.989,776.566-146.851C1898.337-16.974,1920-6.556,1920-6.556V1.153l0,192.694H0Z" transform="translate(0 2455)" fill="#413d45"/>
                        <path id="Path_3" data-name="Path 3" d="M0-73.847S66.872-88.168,198.247-43.454,707.1,281.93,968.841,281.93c240.128,0,656.149-257.542,818.158-325.383,99.474-41.655,133.02-38.4,133.02-38.4L1920-73.859l-.008,219.787s-6.427-.3-1.9-.312c5.435-.024,9.382,2.57-131.087,25.853-243.447,40.351-436.756,147.973-818.158,147.973S435.057,199.1,198.247,158.754C10.457,126.755,0,140.813,0,140.813V-73.847Z" transform="translate(0 2310)" fill="#ff7e1d"/>
                        <g id="Group_2" data-name="Group 2">
                            <path id="Path_4" data-name="Path 4" d="M5.014,0H125.344C156.634,0,182,29.29,182,65.421V82.211c0,3.2-2.245,5.789-5.014,5.789H5.014C2.245,88,0,85.408,0,82.211V5.789C0,2.592,2.245,0,5.014,0Z" transform="matrix(1, 0.017, -0.017, 1, 879.171, 2478.084)" fill="#ff7e1d"/>
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="19" cy="19" r="19" transform="matrix(1, 0.017, -0.017, 1, 889.005, 2544.983)" fill="#413d45"/>
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="19" cy="19" r="19" transform="matrix(1, 0.017, -0.017, 1, 1007.987, 2547.06)" fill="#413d45"/>
                        </g>
                        <g id="Group_3" data-name="Group 3">
                            <path id="Path_5" data-name="Path 5" d="M5.014,0H125.344C156.634,0,182,29.29,182,65.421V82.211c0,3.2-2.245,5.789-5.014,5.789H5.014C2.245,88,0,85.408,0,82.211V5.789C0,2.592,2.245,0,5.014,0Z" transform="translate(698.32 2404.784) rotate(22)" fill="#ff7e1d"/>
                            <circle id="Ellipse_3" data-name="Ellipse 3" cx="19" cy="19" r="19" transform="translate(682.656 2472.918) rotate(22)" fill="#413d45"/>
                            <circle id="Ellipse_4" data-name="Ellipse 4" cx="19" cy="19" r="19" transform="translate(792.991 2517.497) rotate(22)" fill="#413d45"/>
                        </g>
                        <g id="Group_1" data-name="Group 1">
                            <path id="Path_6" data-name="Path 6" d="M5.014,0H125.344C156.634,0,182,29.29,182,65.421V82.211c0,3.2-2.245,5.789-5.014,5.789H5.014C2.245,88,0,85.408,0,82.211V5.789C0,2.592,2.245,0,5.014,0Z" transform="translate(1070.815 2471.862) rotate(-20)" fill="#ff7e1d"/>
                            <circle id="Ellipse_5" data-name="Ellipse 5" cx="19" cy="19" r="19" transform="translate(1105.313 2531.256) rotate(-20)" fill="#413d45"/>
                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="19" cy="19" r="19" transform="translate(1217.137 2490.556) rotate(-20)" fill="#413d45"/>
                        </g>
                    </g>
                </svg>
            </section>
            <section className="homepage__dark">
                <Features/>
                <Prices/>
            </section>
            <section  className="homepage__light">
                <svg className="homepage__svg" xmlns="http://www.w3.org/2000/svg" width="1920" height="156.862" viewBox="0 0 1920 156.862">
                    <path id="Path_7" data-name="Path 7" d="M0,0H1920V72.251s-479.472,84.611-959.467,84.611S0,72.251,0,72.251Z" transform="translate(0)" fill="#413d45"/>
                </svg>

            </section>
            <svg className="homepage__svg" xmlns="http://www.w3.org/2000/svg" width="1920" height="156.862" viewBox="0 0 1920 156.862">
                <path id="Path_8" data-name="Path 8" d="M0,0H1920V72.251s-479.472,84.611-959.467,84.611S0,72.251,0,72.251Z" transform="translate(1920 156.862) rotate(180)" fill="#faf6f4"/>
            </svg>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Homepage;