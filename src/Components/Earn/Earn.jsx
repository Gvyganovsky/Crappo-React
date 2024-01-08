import style from './Earn.module.scss';

export const Earn = () => {
    return (
        <section className={style.earn}>
            <div className={style.earn_title}>Check how much you can earn</div>
            <div className={style.earn_text}>
                Let’s check your hash rate to see how much you will earn today, Exercitation veniam
                consequat sunt nostrud amet.
            </div>
            <div className={style.earn_rate}>
                <div className={style.earm_rateText}>ESTIMATED 24 HOUR REVENUE:</div>
                <div className={style.earm_rateNub}>0.055 130 59 ETH <span>($1275)</span></div>
                <div className={style.earm_rateGray}>Revenue will change based on mining difficulty and Ethereum price.</div>
            </div>
        </section>
    )
}