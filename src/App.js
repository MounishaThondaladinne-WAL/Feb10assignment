import './App.css';
import Product from './Product2';
import AllProduct from './Allproducts';
import Categories from './Categories';
import './Categories.css'
import './Allproducts.css'
import './Product.css'
function App() {
  
  return (
    <div>
      <Categories></Categories>
      <AllProduct></AllProduct>
      <Product id={1}></Product>
      
     
   </div>
  
  );
}

export default App;
