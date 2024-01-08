import { FastestSecure } from '../Components/FastestSecure/FastestSecure';
import { CRAPPO } from '../Components/CRAPPO/CRAPPO';
import { Earn } from '../Components/Earn/Earn';
import { Cryptocurrencies } from '../Components/Cryptocurrencies/Cryptocurrencies';
import { Market } from '../Components/Market/Market';

export const HomePage = () => {
    return (
        <section>
            <FastestSecure />
            <CRAPPO />
            <Earn />
            <Cryptocurrencies />
            <Market />
        </section>
    )
}