import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoggedInContext from './LogginInContext'
import { Header } from './components/header/Header'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { Register } from './routes/Register'

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	const value = { loggedIn, setLoggedIn }

	return (
		<>
			<LoggedInContext.Provider value={value}>
				<Router>
					<div className='container'>
						<Header />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Routes>
					</div>
				</Router>
			</LoggedInContext.Provider>
		</>
	)
}

export default App
