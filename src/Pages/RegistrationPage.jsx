import { useEffect } from 'react'
import styles from '../scss/Registration.module.scss';
import { Link, useLocation } from "react-router-dom"
import { Registration } from "../Components/Authorization/Registration.jsx"
import { useAuth } from '../hooks/use-auth'
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuth) {
            navigate("../ProfilePage")
        }
    }, [])

    return isAuth ? (
        navigate('../ProfilePage')
    ) : (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Registration</div>
                <div className={styles.text_reg_log}>You don't have an account. Let's create a new one!</div>
                <Registration />
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <Link to="/LoginPage"><p className={styles.title_log}>I already have an account</p></Link>
            </div>
        </section>
    )
}