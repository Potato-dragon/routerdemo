import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import ProfileList from './Pages/ProfileList';
import NotFound from './component/NotFound';
import Post from './component/Post';
import Blog from './Pages/Blog';
import Hero from './component/Hero';
import Authorize from './Pages/Authorize';


function App() {
  // const user = useAuthState();
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        
    <Route path='/' component={Home} exact />
    <Route path='/About' component={About}/>
    <Route path='/ProfileList' component={ProfileList}/>
    <Route path='/Post' component={Post}/>
    <Route path='/Blog' component={Blog}/>
    <Route path='/Hero' component={Hero}/>
    <Route path='/Authorize' component={Authorize}/>

    <Route  component={NotFound}/>
      </Switch>

      </div>
    </BrowserRouter> 
  );
}

export default App;
