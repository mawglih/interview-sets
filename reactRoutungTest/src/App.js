import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './route';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
