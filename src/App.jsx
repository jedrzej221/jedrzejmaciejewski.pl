import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import AlphaSnap from './components/AlphaSnap';
import AkademiaInwestowania from './components/Akademia Inwestowania';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <AkademiaInwestowania />
      <AlphaSnap />
      <Footer />
    </Layout>
  );
}

export default App;
