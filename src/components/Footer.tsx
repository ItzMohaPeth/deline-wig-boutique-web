
import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-3xl font-bold bg-gradient-deline bg-clip-text text-transparent">
              DELINE-WIG
            </h3>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              Votre spécialiste en perruques de qualité premium. Révélez votre beauté avec élégance et style.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-deline rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-deline rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Navigation</h4>
            <nav className="space-y-2">
              <a href="#accueil" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Accueil
              </a>
              <a href="#catalogue" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Catalogue
              </a>
              <a href="#nouveautes" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Nouveautés
              </a>
              <a href="#contact" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Catégories</h4>
            <nav className="space-y-2">
              <a href="#" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Virgin Hair
              </a>
              <a href="#" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Vietnam Hair
              </a>
              <a href="#" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Perruques Courtes
              </a>
              <a href="#" className="block font-open-sans text-gray-300 hover:text-pastel-pink-300 transition-colors">
                Perruques Longues
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pastel-pink-400" />
                <span className="font-open-sans text-gray-300">+221 77 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pastel-pink-400" />
                <span className="font-open-sans text-gray-300">contact@deline-wig.com</span>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-6">
              <h5 className="font-montserrat font-semibold text-sm mb-3">Paiements acceptés</h5>
              <div className="flex space-x-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  Orange Money
                </div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  Wave
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-open-sans text-gray-400 text-sm">
              © 2024 DELINE-WIG. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pastel-pink-300 transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-pastel-pink-300 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-pastel-pink-300 transition-colors">
                Livraisons & Retours
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
