import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import MainNavigation from './shared/components/Navigation/MainNavigation.jsx';
import RootLayout from './shared/components/Navigation/RootLayout.jsx';
import ErrorPage from './shared/components/Navigation/ErrorPage.jsx';
import './App.css'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />
		}
	]);
	return <RouterProvider router={router} />;
}

export default App
