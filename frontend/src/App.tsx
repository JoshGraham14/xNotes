import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { Register } from './routes/Register'

const App = () => {
	return (
		<>
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
		</>
	)
}

export default App
