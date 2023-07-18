import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"
import { Profile } from "./pages/Profile"
import { useUser } from "./hooks/useUser"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/producer/*" element={<Home />} />
            <Route path="/agent/*" element={<Home />} />
            <Route path="/business/*" element={<Home />} />
            <Route path="/shipping/*" element={<Home />} />
            <Route path="settings" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile user={user} />} />
        </ReactRoutes>
    )
}
