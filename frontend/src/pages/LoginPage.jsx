
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../components/Login';
import { login } from "../api"


const LoginPage = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      // const response = await axios.post('/auth/login', data);
      const response = await login('/auth/login', data);
      // console.log("oginResponse",response)
      setToken(response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Logins</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
