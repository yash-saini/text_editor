
import './App.css';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';

function App() {
  return (
    <>
    <Navbar title="TextChanger" about="About"/>
    <div className= "container">
    <Txtform heading="Enter the Text" />
    </div>
    </>
   
  );
}

export default App;
