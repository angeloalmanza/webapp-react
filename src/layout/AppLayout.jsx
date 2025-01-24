import { Outlet } from "react-router-dom"
import HeaderLayout from "../components/HeaderLayout";

const AppLayout = () => {
    return (
        <>
        <HeaderLayout/>
        <Outlet />
        </>
    )
}

export default AppLayout;