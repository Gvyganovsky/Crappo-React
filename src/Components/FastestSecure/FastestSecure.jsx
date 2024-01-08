import style from './FastestSecure.module.scss';
import Illustration from '../../assets/photo/Illustration.png';
import { ReactComponent as ArrowRight } from '../../assets/icons/Arrow Right.svg';

export const FastestSecure = () => {
    return (
        <section className={style.fastestSecure}>
            <div className={style.fastestSecure_textBlock}>
                <div className={style.fastestSecure_ovalGlobal}>
                    <div className={style.fastestSecure_ovalWhite}>75% SAVE</div>
                    <div className={style.fastestSecure_ovalText}>For the Black Friday weekend</div>
                </div>
                <div className={style.fastestSecure_title}>Fastest & secure platform to invest in crypto</div>
                <div className={style.fastestSecure_text}>
                    Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
                </div>
                <button className={style.fastestSecure_button}>
                    <span className={style.fastestSecure_span}>Try for FREE</span>
                    <ArrowRight />
                </button>
            </div>
            <img src={Illustration} alt="Illustration" className={style.fastestSecure_img} />
        </section>
    )
}