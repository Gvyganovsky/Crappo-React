import style from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

export const Footer = () => {
    return (
        <section className={style.Footer}>
            <Logo />
            <div className={style.footer_nav}>
                <div className={style.footer_block}>
                    <div className={style.footer_blockTitle}>Quick Link</div>
                    <div className={style.footer_blockText}>Home</div>
                    <div className={style.footer_blockText}>Products</div>
                    <div className={style.footer_blockText}>About</div>
                    <div className={style.footer_blockText}>Features</div>
                    <div className={style.footer_blockText}>Contact</div>
                </div>
            </div>
        </section>
    )
}