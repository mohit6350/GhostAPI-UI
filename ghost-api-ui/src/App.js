import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainWindow from './Components/MainWindow/MainWindow';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
          <Login />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
