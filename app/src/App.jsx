import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HeroComponent from './Components/HeroComponent/HeroComponent'
import TripComponent from './Components/TripComponent/TripComponent'
import ReviewsComponent from './Components/ReviewsComponent/ReviewsComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import LoginPage from './Pages/LoginPage/LoginPage'
import { useContext } from 'react'
import { ManagementContext } from './Context/ManagementContext'
import UserPage from './Pages/UserPage/UserPage'

const App = () => {
  const {loggedIn}=useContext(ManagementContext);
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/'
        element=
          {
            <>
            <HeroComponent/>
            <TripComponent/>
            <ReviewsComponent/>
            </> 
          }
          >
       </Route>
       <Route path='/login' element={<LoginPage/>}></Route>
       <Route path='/user' element={<UserPage/>}></Route>
      </Routes>
    {loggedIn? <FooterComponent/>:<></>}
    </BrowserRouter>
  )
}

export default App