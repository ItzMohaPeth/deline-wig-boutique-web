
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nude-50 via-white to-sky-blue-50 min-h-[80vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-deline opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-pastel-pink-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-blue-200 rounded-full blur-2xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                <span className="bg-gradient-deline bg-clip-text text-transparent">
                  Révélez
                </span>
                <br />
                <span className="text-gray-800">
                  votre beauté
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-open-sans text-gray-600 max-w-lg">
                Découvrez notre collection exclusive de perruques <span className="font-semibold text-pastel-pink-600">Virgin Hair</span> et <span className="font-semibold text-sky-blue-600">Vietnam Hair</span> pour sublimer votre style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-deline hover:bg-gradient-gold text-white font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Découvrir nos collections
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-pastel-pink-300 text-pastel-pink-600 hover:bg-pastel-pink-50 font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                Voir les nouveautés
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold font-montserrat bg-gradient-deline bg-clip-text text-transparent">500+</div>
                <div className="text-sm font-open-sans text-gray-600">Perruques disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-montserrat bg-gradient-deline bg-clip-text text-transparent">98%</div>
                <div className="text-sm font-open-sans text-gray-600">Clients satisfaites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-montserrat bg-gradient-deline bg-clip-text text-transparent">24h</div>
                <div className="text-sm font-open-sans text-gray-600">Livraison express</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-nude-100 to-pastel-pink-100 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-deline rounded-full flex items-center justify-center">
                      <span className="text-white text-6xl">👑</span>
                    </div>
                    <p className="font-playfair text-2xl text-gray-700">Collection Premium</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-white text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pastel-pink-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <span className="text-white text-xl">💄</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
