import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation.jsx"

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
} 