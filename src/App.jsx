import './App.css';
import Home from './pages/Home/Home';
import Footer from './utils/Footer/Footer';
import Navbar from './utils/Navbar/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className='main-content'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
