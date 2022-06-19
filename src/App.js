import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddMobile from './components/AddMobile';

function App() {
  return (
    <div>
	
		<NavBar />

		{<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/contact' element={<Contact />}/>
				<Route path='/addmobile' element={<AddMobile />}/>
			</Routes>
		</BrowserRouter> }

    </div>
  );
}

export default App;
