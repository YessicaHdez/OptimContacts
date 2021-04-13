import './App.css';

import ContactList from './Componentes/ContactList';
import FormContact from './Componentes/FormContact';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className= "App">
      <h1>Contacts:</h1>
      <ContactList></ContactList>
      <div className= "App-header"> 
      <FormContact ></FormContact>
      <Button>Add</Button>
      </div>
     
      
    </div>
  
  );
}

export default App;
