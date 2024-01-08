import style from './Cryptocurrencies.module.scss';
import { ReactComponent as Bitcoin } from '../../assets/icons/Bitcoin.svg';
import { ReactComponent as Ethereum } from '../../assets/icons/Ethereum.svg';
import { ReactComponent as Litecoin } from '../../assets/icons/Litecoin.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/Arrow Right.svg';

export const Cryptocurrencies = () => {
    return (
        <section className={style.crypto}>
            <div className={style.crypto_content}>
                <div className={style.crypto_title}>Trade securely and market the high growth cryptocurrencies.</div>
                <div className={style.crypto_iconsBlock}>
                    <div className={style.crypto_iconBlock}>
                        <Bitcoin className={style.crypto_svg} />
                        <div className={style.crypto_iconTitle}>Bitcoin</div>
                        <div className={style.crypto_iconText}>Digital currency in which a record of transactions is maintained.</div>
                        <button className={style.crypto_button}>
                            <span className={style.crypto_span}>Start mining</span>
                            <ArrowRight />
                        </button>
                    </div>

                    <div className={style.crypto_iconBlock}>
                        <Ethereum className={style.crypto_svg} />
                        <div className={style.crypto_iconTitle}>Ethereum</div>
                        <div className={style.crypto_iconText}>Blockchain technology to create and run decentralized digital applications.</div>
                        <button className={style.crypto_button}>
                            <span className={style.crypto_span}>Start mining</span>
                            <ArrowRight />
                        </button>
                    </div>

                    <div className={style.crypto_iconBlock}>
                        <Litecoin className={style.crypto_svg} />
                        <div className={style.crypto_iconTitle}>Litecoin</div>
                        <div className={style.crypto_iconText}>Cryptocurrency that enables instant payments to anyone in the world.</div>
                        <button className={style.crypto_button}>
                            <span className={style.crypto_span}>Start mining</span>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}