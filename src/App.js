import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Body from './components/Body';
import Header from '../src/components/Header.js';


function App() {
  return (
    <div>
      <Header/>
       <Body/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
