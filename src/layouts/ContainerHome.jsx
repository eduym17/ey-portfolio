import { Header, Footer } from '../components';
import Home from '../views/Home';

export default function ContainerHome() {
  return (
    <div className="containerScreen bg-dev-night text-dev-white font-Poppins font-light">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
