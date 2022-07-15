import './App.css';
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import ToDo from './components/ToDo'
import LogIn from './components/LogIn'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
 //هذا درس تعليمي فقط
// لا يحمل اي تصميم حاليا وقابل للتطوير شكرا لتفهمكم
function App() {
  return (
    <>
    {/* <ToDo></ToDo> */}

    <Router>
    <LogIn></LogIn>

      <div className="main">
        <Routes>
          <Route  path='/create' element={<Create/>} />
          <Route  path='/read' element={<Read/>} />

        <Route path='/update' element={<Update/>} />
        </Routes>
      </div>
    </Router>

    </>
  );
}


export default App;
