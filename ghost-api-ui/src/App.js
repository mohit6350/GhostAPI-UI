import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainWindow from './Components/MainWindow/MainWindow';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
          <MainWindow />
          <Sidebar />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
