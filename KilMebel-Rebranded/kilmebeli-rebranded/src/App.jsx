import { Header } from './features/Header.jsx';
import { Hero } from './features/Hero.jsx';
import { Features } from './features/Features.jsx';
import { Gallery } from './features/Gallery.jsx';
import { Promo } from './features/Promo.jsx';
import { Contact } from './features/Contact.jsx';

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
        </div>
    )

}

export default App;