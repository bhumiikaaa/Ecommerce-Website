import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import styles from "./ShoppingCartPage.module.css"

const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={`D:\commercial\public\images\smartwatch.jpg-${item.id}.jpg`} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemInfo}>
                <h3 className={styles.cartItemName}>{item.name}</h3>
                <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
                <div className={styles.cartItemQuantity}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                    min="1"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                Remove
              </button>
            </div>
          ))}
          <div className={styles.cartSummary}>
            <p className={styles.cartTotal}>Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className={styles.checkoutButton}>
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default ShoppingCartPage

