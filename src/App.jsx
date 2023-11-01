import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return( <div>
    <NavBarComponent />
    <ItemListContainer greeting= "Buenos dias estrellitas, la Tierra les dice Hola!"/> 
    </div> );
}

export default App;
