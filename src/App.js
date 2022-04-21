import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ViewTrips from './components/ViewTrips';
import Booktrip  from './components/BookTrip';
import Routes from './routes/Routes'

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
