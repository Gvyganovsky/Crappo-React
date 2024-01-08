import style from './CRAPPO.module.scss';
import VideoCard from '../../assets/photo/Video card.png';
import { ReactComponent as $30B } from '../../assets/icons/$30B.svg';
import { ReactComponent as TenM } from '../../assets/icons/10M+.svg';
import { ReactComponent as $195 } from '../../assets/icons/195.svg';

export const CRAPPO = () => {
    return (
        <section className={style.CRAPPO}>
            <div className={style.CRAPPO_iconsBlock}>
                <div className={style.CRAPPO_iconBlock}>
                    <$30B />
                    <div className={style.CRAPPO_iconTextBlock}>
                        <div className={style.CRAPPO_title}>$30B</div>
                        <div className={style.CRAPPO_text}>Digital Currency Exchanged</div>
                    </div>
                </div>

                <div className={style.CRAPPO_iconBlock}>
                    <TenM />
                    <div className={style.CRAPPO_iconTextBlock}>
                        <div className={style.CRAPPO_title}>$30B</div>
                        <div className={style.CRAPPO_text}>Digital Currency Exchanged</div>
                    </div>
                </div>

                <div className={style.CRAPPO_iconBlock}>
                    <$195 />
                    <div className={style.CRAPPO_iconTextBlock}>
                        <div className={style.CRAPPO_title}>$30B</div>
                        <div className={style.CRAPPO_text}>Digital Currency Exchanged</div>
                    </div>
                </div>
            </div>
            <div className={style.CRAPPO_mainBlock}>
                <img src={VideoCard} alt="VideoCard" />
                <div className={style.CRAPPO_mainTextBlock}>
                    <div className={style.CRAPPO_mainTitle}>Why you should choose CRAPPO</div>
                    <div className={style.CRAPPO_mainText}>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</div>
                    <div className={style.CRAPPO_button}>Learn More</div>
                </div>
            </div>
        </section>
    )
}