
import './App.css';
import Registration from './Component/Registration';
import Table from './Component/Table';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Table' element={<Table/>} />
    </Routes>
    </Router>
    
  );
}

export default App;
