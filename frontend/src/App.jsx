// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import AddEvent from "./pages/AddEvent"
import EditEvent from "./pages/EditEvent";
import ShowEvent from "./pages/ShowEvent"
import DeleteEvent from './pages/DeleteEvent';
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from './pages/RegisterPage';
// import { setAuthToken } from './api';

const App = () => {
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   if (token) {
  //     setAuthToken(token);
  //   }
  // }, [token]);

  return (
    <>
    <Router>
      <Routes>
         
        {/* <Route path="/login" element= {< LoginPage setToken={setToken} /> }/> */}
        {/* <Route path="/register" element= {< RegisterPage /> }/> */}
        {/* <Route path="/add" element= {<AddEvent token={token} /> }/> */}
        {/* <Route path="/create" element= {token ? <AddEvent token={token} /> : <Navigate to="/login" />}/> */}
        {/* <Route path="/edit/:id" element= {<EditEvent token={token} /> }/> */}
        {/* <Route path="/edit/:id" element= {token ? <EditEvent token={token} /> : <Navigate to="/login" /> }/> */}
        {/* <Route path="/" element= {<Home token={token} /> }/> */}
        <Route path="/" element= {<Home /> }/>
        <Route path="/events/create" element= {<AddEvent /> }/>
        <Route path="/events/edit/:id" element= {<EditEvent /> }/>
        <Route path="/events/details/:id" element={<ShowEvent/>} />
        <Route path="/events/delete/:id" element={<DeleteEvent/>} />



       
      
      </Routes>
    </Router>
    </>
  );
};

export default App;
