import './App.css';
import Contenido from './components/Contenido';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Contenido />
      <Footer />
    </div>
  );
}

export default App;
