import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const ProtectedRoute = ({children}) => {
    let { user } = useUserAuth()
    if(!user){
      console.log(user)
        return <Navigate to="/"></Navigate>
    }
  return children;
}

export default ProtectedRoute;