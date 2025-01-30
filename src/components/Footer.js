import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <Link to="/about" className={styles.footerLink}>
            About Us
          </Link>
          <Link to="/contact" className={styles.footerLink}>
            Contact
          </Link>
          <Link to="/faq" className={styles.footerLink}>
            FAQ
          </Link>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Policies</h3>
          <Link to="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link to="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
          <Link to="/returns" className={styles.footerLink}>
            Returns & Refunds
          </Link>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Connect With Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

