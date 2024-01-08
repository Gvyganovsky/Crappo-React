import { Link } from "react-router-dom";
import { Login } from "../Components/Authorization/Login";
import styles from '../scss/Registration.module.scss';

const LoginPage = () => {
    return (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Entrance</div>
                <Login />
                <Link to="/ForgotPasswordPage"><div className={styles.text_reg_log}>Forgot your password?</div></Link>
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
            </div>
            <Link to="/RegistrationPage"><p className={styles.title_log}>I need to register</p></Link>
        </section >
    )
}

export { LoginPage }