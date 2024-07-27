//<></>
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { lazy , Suspense } from 'react';
import Loader from './Components/Loader';
const Home = lazy(()=>import('./Pages/Home'))
const Cart = lazy(()=>import('./Pages/Cart'))
const Search = lazy(()=>import('./Pages/Search'))
const App = () => {
  return (
    <div>  
     <Router>
      
        <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        </Suspense>
     </Router>
    </div>
  )
}   

export default App
