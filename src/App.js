import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import routes from './Components/Pages/Routes';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
