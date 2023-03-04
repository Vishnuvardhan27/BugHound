import './App.css';
import CreateBug from './CreateBug';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/createBug');
  };

  return (
    <div className="App">
        <header className="App-header">
          <p>BUGHOUND</p>
          <Button variant="contained" onClick={handleOnClick}>
            Create a bug
          </Button>
        </header>
    </div>
  );
}

export default App;

