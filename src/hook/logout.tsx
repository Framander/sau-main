import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/userApiSlices"
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

function useLogout() {
    const [logoutApiCall] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await logoutApiCall("").unwrap();
            dispatch(logout());
            navigate('/login')
        } catch(error){
            console.log(error)
        }
    }

    return logoutHandler
}

export default useLogout

