import './App.css';
import NavBar from './components/NavBar';
import ActionCard from './components/ActionCard';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ActionCard/>
      <Footer id="contactView" />
    </div>
  );
}

export default App;
