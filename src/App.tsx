import { useState, useEffect } from "react";
import { Apple, Mountain, Leaf, Flower } from "lucide-react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import LiveChat from "./components/LiveChat";
import ExpertConsultation from "./components/ExpertConsultation";
import { CartProvider } from "./context/CartContext";
import { products } from "./data/products";
import DeliveryStats from "./components/DeliveryStats";
import YardBenefits from "./components/YardBenefits";
import CustomerReviews from "./components/CustomerReviews";
// import CustomerTrust from './components/CustomerTrust';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "fruit-trees",
        "evergreen",
        "shrubs",
        "flowering-trees",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <main>
          <HeroSection scrollToSection={scrollToSection} />

          <ProductSection
            id="fruit-trees"
            title="Fruit Trees"
            description="Enjoy fresh, homegrown fruit with our premium selection of fruit trees. Perfect for any garden size."
            icon={
              <Apple className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-red-500" />
            }
            products={products.fruitTrees}
            backgroundColor="bg-white"
            accentColor="red"
          />

          <ProductSection
            id="evergreen"
            title="Evergreen Trees"
            description="Create year-round beauty with our majestic evergreen trees. Perfect for privacy, windbreaks, and winter interest."
            icon={
              <Mountain className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-green-600" />
            }
            products={products.evergreen}
            backgroundColor="bg-gradient-to-br from-green-50 to-emerald-50"
            accentColor="green"
          />

          <DeliveryStats />

          <ProductSection
            id="shrubs"
            title="Shrubs & Bushes"
            description="Add structure and color to your landscape with our diverse selection of shrubs and bushes."
            icon={
              <Leaf className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-green-500" />
            }
            products={products.shrubs}
            backgroundColor="bg-white"
            accentColor="green"
          />

          {/* <CustomerTrust /> */}

          <ProductSection
            id="flowering-trees"
            title="Flowering Trees"
            description="Transform your garden into a spectacular display with our stunning flowering trees that bloom throughout the seasons."
            icon={
              <Flower className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-pink-500" />
            }
            products={products.floweringTrees}
            backgroundColor="bg-gradient-to-br from-pink-50 to-purple-50"
            accentColor="pink"
          />
        </main>

        <YardBenefits />
        <CustomerReviews />

        <Footer scrollToSection={scrollToSection} />

        {/* Floating Action Components */}
        <LiveChat />
        <ExpertConsultation />
      </div>
    </CartProvider>
  );
}

export default App;
