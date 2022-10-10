import Header from "./components/Header";
import Container from "./Container";

import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Container/>
  </BrowserRouter>
  
  
  )
}

export default App;
