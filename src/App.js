import productDetails from './WHOC/EData'
import clothing from './WHOC/CData'
import ElectronicProducts from './WOHOC/ElectronicProducts'
import ClothingProducts from './WOHOC/ClothingProducts'
import FilterProductsElectronic from './WHOC/FilterProductsElectronic'
import FilterProductsClothing from './WHOC/FilterProductsClothing'
import ContactManagerComp from './ContactManagerTwo/ContactManagerComp'
import contactDetails from './ContactManagerTwo/contactDetails'
import CRUDOps from './APICalls/CRUDOps'
import data from './TaskManager/TaskManagerData'
import TaskManager from './TaskManager/TaskManager'
import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import LeaderBoard from './ScoreDashBoard/LeaderBoard'
import JustSort from './ScoreDashBoard/JustSort'
import ImageSearch from './APICalls/ImageSearch'
import BlogSearch from './APICalls/BlogSearch'
import Ticket from './Ticket/Ticket'
import ticketData from './Ticket/TicketData'
function App() {
    return(
        <div>
            {/* <ElectronicProducts data={productDetails}></ElectronicProducts> */}
            {/* <ClothingProducts data={clothing}></ClothingProducts> */}
            {/* <FilterProductsClothing data={clothing} dataTwo={productDetails}></FilterProductsClothing> */}
            {/* <FilterProductsClothing data={productDetails}></FilterProductsClothing> */}
            {/* <ContactManagerComp data={contactDetails}></ContactManagerComp> */}
            {/* <CRUDOps></CRUDOps> */}
            {/* <TaskManager data={data}></TaskManager> */}

            {/* <BrowserRouter>
                <nav>
                    <Link to='/image' style={{margin: '10px'}}>Image Search</Link>
                    <Link to='/search' style={{margin: '10px'}}>Blog Search</Link>
                </nav>
                <Routes>
                    <Route path='/image' element={<ImageSearch></ImageSearch>}></Route>
                    <Route path='/search' element={<BlogSearch></BlogSearch>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
                    <Route path='/name'element={<JustSort userkey='name' value={1}></JustSort>}></Route>
                    <Route path='/age' element={<JustSort userkey='age' value={2}></JustSort>}></Route>
                    <Route path='/rank' element={<JustSort userkey='rank' value={3}></JustSort>}></Route>
                    <Route path='/score' element={<JustSort userkey='points' value={4}></JustSort>}></Route>
                </Routes>
            </BrowserRouter> */}

            <Ticket data={ticketData}></Ticket>
        </div>
    )
}
export default App