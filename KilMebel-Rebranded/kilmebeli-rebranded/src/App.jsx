import { Header } from './features/Header.jsx';
import { Hero } from './features/Hero.jsx';
import { Features } from './features/Features.jsx';
import { Gallery } from './features/Gallery.jsx';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
                <Gallery />
            </main>
        </div>
    )

}

export default App;