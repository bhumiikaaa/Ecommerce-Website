import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CartProvider } from "./contexts/CartContext"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import CheckoutPage from "./pages/CheckoutPage"
import Footer from "./components/Footer"
import GlobalStyle from "./styles/GlobalStyle"
import darkTheme from "./styles/darkTheme"

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CartProvider>
        <Router>
          <GlobalStyle />
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<ShoppingCartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App

