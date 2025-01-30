import styled from "styled-components"
import ProductCard from "./ProductCard"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`

const ProductGrid = () => {
  // This is a mock data array. In a real application, you would fetch this data from an API.
  const products = [
    { id: 1, name: "Quantum Laptop Pro", price: 1999.99, image: "/images/quantum-laptop.jpg" },
    { id: 2, name: "NeoPhone X", price: 999.99, image: "/images/neophone-x.jpg" },
    { id: 3, name: "HoloLens Pro", price: 799.99, image: "/images/hololens-pro.jpg" },
    { id: 4, name: "SmartWatch Elite", price: 349.99, image: "/images/smartwatch-elite.jpg" },
  ]

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}

export default ProductGrid

