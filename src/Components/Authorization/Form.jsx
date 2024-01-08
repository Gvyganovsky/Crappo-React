import { useState } from "react";
import styles from '../../scss/Registration.module.scss';

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={styles.inputBlock}>
            <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.inputEm} />
            <input type="Password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" className={styles.inputEm} />
            <div className={styles.Button_block}>
                <button onClick={() => handleClick(email, pass)} className={styles.buttonReg} >{title}</button>
            </div>
        </div>
    )
}

export { Form }