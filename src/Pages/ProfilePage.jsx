import { useAuth } from '../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/userSlice'
import { useNavigate } from "react-router-dom";
import styles from '../scss/Registration.module.scss'
import { ReactComponent as Profile } from '../assets/icons/Profile.svg';

export const ProfilePage = () => {
    const { email } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <section className={styles.profile}>
            <Profile className={styles.profile_img} />
            <h1 className={styles.profile_email}>{email}</h1>
            <button onClick={() =>
                dispatch(removeUser(),
                    navigate('/')
                )} className={styles.profile_but}>Log out of your account</button>
        </section>
    )
}