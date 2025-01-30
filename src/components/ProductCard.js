import { Link } from "react-router-dom"
import styled from "styled-components"
import { useCart } from "../contexts/CartContext"
import { FaShoppingCart } from "react-icons/fa"

const Card = styled(Link)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const ProductInfo = styled.div`
  padding: 1rem;
`

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.onSurface};
`

const ProductPrice = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`

const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.onSecondary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-right: 0.5rem;
  }
`

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Card to={`/product/${product.id}`}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>
          <FaShoppingCart /> Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </Card>
  )
}

export default ProductCard

