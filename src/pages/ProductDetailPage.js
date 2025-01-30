import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { FaStar } from "react-icons/fa"
import styles from "./ProductDetailPage.module.css"

const ProductDetailPage = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // This is mock data. In a real application, you would fetch this data from an API based on the product ID.
  const product = {
    id: Number(id),
    name: "Sample Product",
    price: 999.99,
    description:
      "This is a sample product description. It would contain detailed information about the product, its features, and specifications.",
    image: "D:\commercial\public\images\smartwatch.jpg",
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
  }

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))
  }

  return (
    <div className={styles.productContainer}>
      <img src={product.image || "D:\commercial\public\images\smartwatch.jpg"} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.quantitySelector}>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
        <div className={styles.reviewsSection}>
          <h2>Customer Reviews</h2>
          <div className={styles.reviewItem}>
            <div className={styles.starRating}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color={index < 4 ? "#ffc107" : "#e4e5e9"} />
              ))}
            </div>
            <p>Great product! Exactly what I was looking for.</p>
          </div>
          <div className={styles.reviewItem}>
            <div className={styles.starRating}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color={index < 5 ? "#ffc107" : "#e4e5e9"} />
              ))}
            </div>
            <p>Excellent quality and fast shipping. Highly recommended!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage

