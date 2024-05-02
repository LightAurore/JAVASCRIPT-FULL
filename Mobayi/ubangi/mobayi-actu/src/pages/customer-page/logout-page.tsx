import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenAtom } from "../../atoms/token.atom";


const LogoutPage = () => {


    const [token, setToken] = useRecoilState(tokenAtom);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        setToken(null);
        navigate('/');
    }

    return(
        <>
            <h2>Logout ...</h2>
            <button 
                type='button' 
                onClick={handleLogout}
            >
                Logout
            </button>
        </>
    )
}

export default LogoutPage;