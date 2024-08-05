import './App.css';
import { ExpenseTracker } from './components/ExpenseTracker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Router basename='/expense-tracker'>
      <Routes>
        <Route path='/' element={
          <Provider store={store}>
            <ExpenseTracker/>
          </Provider>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
