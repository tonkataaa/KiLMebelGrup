import { Header } from './features/Header.jsx';
import { Hero } from './features/Hero.jsx';
import { Features } from './features/Features.jsx';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
        </div>
    )

}

export default App;