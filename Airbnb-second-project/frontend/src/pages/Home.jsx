import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SearchBar from "../components/searchbar"
import Listingcard from "../components/Listingcard"
import ServiceCard from "../components/ServiceCard"
import services from "../data/services"


function Home(){
    return(
        <>
        <Navbar/>
        <SearchBar/>
        <Listingcard/>

        <div className="listing-container">
            <h2 className="listing-heading">Explore services</h2>

            <div className="service-grid">
                {services.slice(0, 8).map((service) => (
                    <ServiceCard service={service} key={service.id} />
                ))}
            </div>
        </div>

        <Footer/>
        </>
    )
}


export default Home
