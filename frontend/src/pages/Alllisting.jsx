import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SearchBar from "../components/searchbar"
import Listingcard from "../components/Listingcard"

function Listing(){
    return(
        <>
        <Navbar/>
        <SearchBar/>
        <Listingcard/>
        <Footer/>
        </>
    )
}


export default Listing