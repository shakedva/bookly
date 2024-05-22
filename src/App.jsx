import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './shared/components/Navigation/RootLayout.jsx';
import ErrorPage from './shared/components/Navigation/ErrorPage.jsx';
import HomePage from './books/pages/HomePage.jsx';
import LibraryPage from './books/pages/LibraryPage.jsx';
import './App.css'
import NewBookPage from './books/pages/NewBookPage.jsx';
import EditBookPage from './books/pages/EditBookPage.jsx';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true, element: <HomePage />
				},
				{
					path: 'library',
					children: [
						{
							index: true,
							element: <LibraryPage />
						},
						{
							path: 'new',
							element: <NewBookPage />,
						},
						{
							path: 'edit',
							element: <EditBookPage />,
						}
					]
				}
			]
		}
	]);
	return <RouterProvider router={router} />;
}

export default App
