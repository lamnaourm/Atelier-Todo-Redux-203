import './App.css';
import AddTache from './components/AddTache';
import Deletes from './components/Deletes';
import ListTaches from './components/ListTaches';
import Statistiques from './components/Statistiques';

function App() {
  return (
    <div className='container'>
      <AddTache />
      <Statistiques />
      <ListTaches />
      <Deletes />
    </div>
  );
}

export default App;
