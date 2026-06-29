import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HeroComponent from './Components/HeroComponent/HeroComponent'
import TripComponent from './Components/TripComponent/TripComponent'
import ReviewsComponent from './Components/ReviewsComponent/ReviewsComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'

const App = () => {
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
            <FooterComponent/>
            </>
            
          }
          >
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App