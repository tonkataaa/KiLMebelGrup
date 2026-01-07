import { Header } from './features/Header.jsx';
import { Hero } from './features/Hero.jsx';
import { Features } from './features/Features.jsx';
import { Gallery } from './features/Gallery.jsx';
import { Promo } from './features/Promo.jsx';
import { Contact } from './features/Contact.jsx';
import { Footer } from './features/Footer.jsx';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
                <Gallery />
                <Promo />
                <Contact />
            </main>
            <Footer />
        </div>
    )

}

export default App;