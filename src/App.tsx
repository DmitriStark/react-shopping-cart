import {Routes , Route} from "react-router-dom"
import { Container} from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar} from "./componetns/Navbar"
import { ShopingCartProvider } from "./context/ShoppingCartContext"

function App() { 

  return (
  <ShopingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="react-shopping-cart/" element = {<Home />}/>
        <Route path="react-shopping-cart/store" element = {<Store />}/>
        <Route path="react-shopping-cart/about" element = {<About />}/>
        
      </Routes>
      </Container>
  </ShopingCartProvider>
  )
}

export default App
