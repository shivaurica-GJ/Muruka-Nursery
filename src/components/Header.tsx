import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import CartSidebar from "./CartSidebar";
import AccountMenu from "./AccountMenu";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const { state } = useCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/public/Logo.png"
                alt="logo_bhavin_nursery"
                className="w-12 h-12 "
              />
              <span className="text-xl font-bold text-green-800 select-none">
                Muruka Nursery
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Navigation
                activeSection={activeSection}
                onNavigate={handleNavigation}
                className="flex"
              />

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors relative"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {state.totalItems}
                    </span>
                  )}
                </button>

                <div className="relative" ref={accountRef}>
                  <button
                    onClick={() => setIsAccountOpen(!isAccountOpen)}
                    className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    aria-label="Account"
                  >
                    <User className="w-5 h-5" />
                  </button>
                  <AccountMenu
                    isOpen={isAccountOpen}
                    onClose={() => setIsAccountOpen(false)}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </button>

              <button
                className="p-2 rounded-lg hover:bg-green-50 text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-green-100">
            <div className="px-4 py-4 space-y-3">
              <Navigation
                activeSection={activeSection}
                onNavigate={handleNavigation}
                className="flex flex-col space-y-1"
                isMobile={true}
              />

              {/* Mobile Account Section */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="w-full flex items-center space-x-3 px-3 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">My Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Overlays */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
