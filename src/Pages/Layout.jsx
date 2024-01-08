import { Header } from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer';

function Layout() {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
}

export { Layout };