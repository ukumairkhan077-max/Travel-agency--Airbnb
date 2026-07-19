import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Listingcard from "../components/Listingcard"

function Listing(){
    const [filterCity, setFilterCity] = useState("")

    function handleSearch({ location }) {
        setFilterCity(location || "")
    }

    return(
        <>
        <Navbar variant="compact" searchType="stays" onSearch={handleSearch} />
        <Listingcard filterCity={filterCity} />
        <Footer/>
        </>
    )
}


export default Listing
