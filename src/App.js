
import './App.css';
import Login from './LOGIN/Login';
import Index from './landingPage/Index';
import SignIndex from './SIGN UP/SignIndex'
import PassIndex from './Password/PassIndex';
import ForgetIndex from './FORGET/ForgetIndex';
import ContactIndex from './CONTACT/ContactIndex';
import OrderIndex from './ORDER/OrderIndex';
import ProfIndex from './PROFILE/ProfIndex';
import MineIndex from './MINE/MineIndex';
import AmIndex from './AMOUNT/AmIndex';
import GetIndex from './GetR/GetIndex';
import AmFollowersIndex from './AmFollowers/AmFollowersIndex';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OrderHero from './ORDER/OrderHero';

function App() {
  return (

    <div className="App">
<BrowserRouter> 
<Routes>
<Route   path='/' element={<Index />}  /> 
<Route path ='/login' element= {<Login />}   />
<Route path= '/editprofile' element = {<ProfIndex  />} />
<Route path= '/homepage' element = {<GetIndex />} />
<Route path= '/orderpage' element = {<AmIndex />}  />
</Routes>
  </BrowserRouter>



    </div>
  );
}

export default App;
