import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form"
import { setUser } from "../../store/slices/userSlice.js"

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('../ProfilePage')
            })
            .catch(() => alert('Invalid email or password!'))
    }

    return (
        <Form title="Sign on" handleClick={handleLogin} />
    )
}

export { Login } 