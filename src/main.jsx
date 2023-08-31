import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import 'aos/dist/aos.css';
import AOS from 'aos'; 

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
