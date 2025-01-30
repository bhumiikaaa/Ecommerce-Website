import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaRocket, FaMicrochip, FaLaptopCode } from "react-icons/fa"
import ProductGrid from "../components/ProductGrid"

const HeroSection = styled.div`
  background-image: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1318880624-612x612.jpg-GRxNtgLwAoEpBSk5h4sv6V8hWurvag.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  margin-top: 60px; // Add some top margin to account for the sticky header
`

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #00FFFF;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
  font-family: 'Orbitron', sans-serif;
`

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #FFFFFF;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  font-family: 'Roboto', sans-serif;
`

const CTAButton = styled(Link)`
  background-color: #00FFFF;
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  font-family: 'Orbitron', sans-serif;

  &:hover {
    background-color: #FFFFFF;
    color: #000000;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.4);
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`

const FeaturedProductsSection = styled.section`
  padding: 6rem 2rem;
  background-color: #0A0A0A;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #00FFFF;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Orbitron', sans-serif;
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`

const FeatureCard = styled.div`
  background-color: #1A1A1A;
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  border: 1px solid #00FFFF;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
  }

  svg {
    font-size: 4rem;
    color: #00FFFF;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #FFFFFF;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-family: 'Orbitron', sans-serif;
  }

  p {
    color: #CCCCCC;
    font-size: 1.1rem;
    font-family: 'Roboto', sans-serif;
  }
`

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to TechnoVerse</HeroTitle>
          <HeroSubtitle>Discover the future of technology</HeroSubtitle>
          <CTAButton to="/category/all">
            <FaRocket /> Explore Now
          </CTAButton>
        </HeroContent>
      </HeroSection>
      <FeaturedProductsSection>
        <SectionTitle>Featured Products</SectionTitle>
        <ProductGrid />
        <FeatureGrid>
          <FeatureCard>
            <FaMicrochip />
            <h3>Cutting-edge Tech</h3>
            <p>Experience the latest innovations in technology</p>
          </FeatureCard>
          <FeatureCard>
            <FaLaptopCode />
            <h3>Smart Solutions</h3>
            <p>Enhance your lifestyle with our smart devices</p>
          </FeatureCard>
          <FeatureCard>
            <FaRocket />
            <h3>Future-proof</h3>
            <p>Stay ahead with our future-ready products</p>
          </FeatureCard>
        </FeatureGrid>
      </FeaturedProductsSection>
    </>
  )
}

export default HomePage

