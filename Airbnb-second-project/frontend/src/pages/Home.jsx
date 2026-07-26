import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Listingcard from "../components/Listingcard"


function Home(){
    return(
        <>
        <Navbar variant="full" />
        <Listingcard/>
        <Footer/>
        </>
    )
}


export default Home