import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useCart } from "../contexts/CartContext"
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa"

const NavbarContainer = styled.nav`
  background-color: ${({ theme, isSticky }) => (isSticky ? "rgba(10, 10, 10, 0.9)" : "transparent")};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  backdrop-filter: ${({ isSticky }) => (isSticky ? "blur(5px)" : "none")};
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00FFFF;
  text-decoration: none;
  letter-spacing: 2px;
  opacity: ${({ isSticky }) => (isSticky ? 1 : 0)};
  transform: translateY(${({ isSticky }) => (isSticky ? 0 : "-20px")});
  transition: all 0.3s ease-in-out;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  margin-left: 1.5rem;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #00FFFF;
  }
`

const CartIcon = styled(Link)`
  margin-left: 1.5rem;
  color: #FFFFFF;
  text-decoration: none;
  position: relative;
`

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #00FFFF;
  color: #000000;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-family: 'Roboto', sans-serif;
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #FFFFFF;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const { cartItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavbarContainer isSticky={isSticky}>
      <NavContent>
        <Logo to="/" isSticky={isSticky}>
          TechnoVerse
        </Logo>
        <NavLinks>
          <NavLink to="/category/laptops">Laptops</NavLink>
          <NavLink to="/category/smartphones">Smartphones</NavLink>
          <NavLink to="/category/accessories">Accessories</NavLink>
          <NavLink to="/signin">
            <FaUser />
          </NavLink>
          <CartIcon to="/cart">
            <FaShoppingCart />
            {cartItems.length > 0 && <CartBadge>{cartItems.length}</CartBadge>}
          </CartIcon>
        </NavLinks>
        <MobileMenuButton>
          <FaBars />
        </MobileMenuButton>
      </NavContent>
    </NavbarContainer>
  )
}

export default Navbar

