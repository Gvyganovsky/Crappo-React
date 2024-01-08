import style from './Market.module.scss';
import market from '../../assets/photo/Market.png';

export const Market = () => {
    return (
        <section className={style.Market}>
            <div className={style.Market_titleGlobal}>Market sentiments, portfolio, and run the infrastructure of your choice</div>
            <div className={style.market_content}>
                <div className={style.market_TextBlock}>
                    <div className={style.market_title}>Invest Smart</div>
                    <div className={style.market_text}>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </div>
                    <div className={style.market_button}>Learn More</div>
                </div>
                <img src={market} alt="Market" />
            </div>
        </section>
    )
}