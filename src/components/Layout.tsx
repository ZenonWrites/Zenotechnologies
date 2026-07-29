import Header from "./Header";
import { Outlet } from "react-router-dom"
import { InteractionProvider } from "./InteractionContext"


function Layout  () {
    return (
        <InteractionProvider>
        <div className="flex flex-col">
                    <Header />
                    <main className="min-h-screen bg-black pt-20 text-white font-sans">
                        <Outlet />
                    </main>
                </div>
        </InteractionProvider>
    )
}

export default Layout;