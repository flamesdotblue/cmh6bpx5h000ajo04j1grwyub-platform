import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
