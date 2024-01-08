import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../scss/Registration.module.scss';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ForgotPasswordPage = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');

    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Password reset email sent!')
        })
        .catch((error) => {
            console.log(error.message)
        });



    return (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Password Recovery</div>
                <div className={styles.text_reg_log}>We'll get your memory back in no time!</div>
                <div className={styles.inputBlock}>
                    <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.inputEm} />
                    <div className={styles.Button_block}>
                        <button onClick={() => sendPasswordResetEmail()} className={styles.buttonReg}>Send by email</button>
                    </div>
                </div>
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <Link to="/RegistrationPage"><p className={styles.title_log}>Back to registration</p></Link>
            </div>
        </section>
    )
}