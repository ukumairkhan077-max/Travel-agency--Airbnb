import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SearchBar from "../components/searchbar"
import Listingcard from "../components/Listingcard"


function Home(){
    return(
        <>
        <Navbar variant="full" />
        <SearchBar type="stays" />
        <Listingcard/>
        <Footer/>
        </>
    )
}


export default Home