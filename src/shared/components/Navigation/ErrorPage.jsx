import { useRouteError } from "react-router-dom";
import MainNavigation from "./MainNavigation.jsx";

export default function ErrorPage() {
    const errorObject = useRouteError();
    let title = 'An error occured';
    let message = 'Something went wrong.';
    if (errorObject.status === 404) {
        title = '404 - Page Not Found';
        message = 'Sorry, the page you were looking for does not exist.'
    }
    return (
        <>
            <MainNavigation />
            <div>
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        </>
    )
}