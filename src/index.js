import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import La from './pages/layout';	
import Hom from './pages/home';	 
import Br from './pages/branch';	
import Ho from './pages/hope';
import En from './pages/eng';

export default function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element= { <La /> }>
				   <Route index element= { <Hom /> } />
				   <Route path='branch'	element= { <Br /> } />
				   <Route path='hope' element= { <Ho /> } />
				   <Route path='eng' element= { <En /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);