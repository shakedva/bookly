import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation.jsx';
import './App.css'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainNavigation />,
		}
	]);
	return <RouterProvider router={router} />;
}

export default App
