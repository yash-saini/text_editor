
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';

function App() {


  return (
    <>
    <Navbar title="TextChanger" about="About"/>
    {/* <About></About> */}
    <div className= "container">
    <Txtform heading="Your text goes here" />
    </div>
    </>
   
  );
}

export default App;
