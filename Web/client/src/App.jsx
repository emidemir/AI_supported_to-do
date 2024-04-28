import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Sofar from './pages/Sofar'
import Statistics from './pages/Statistics'
import Todo from './pages/Todo'

export default function App() {

	const theme = createTheme({
		palette: {
		  mode: 'light', // or 'dark'
		},
	  });
	  
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/Home" element={<Home/>}></Route>
					<Route path="/Signin" element={<Signin/>}></Route>
					<Route path="/Signup" element={<Signup/>}></Route>
					<Route path="/Profile" element={<Profile/>}></Route>
					<Route path="/Sofar" element={<Sofar/>}></Route>
					<Route path="/Statistics" element={<Statistics/>}></Route>
					<Route path="/Todo" element={<Todo/>}></Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}