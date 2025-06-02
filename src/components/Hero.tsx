
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-deep-black min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-gold rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold-400 rounded-full blur-2xl opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent animate-shimmer"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-montserrat font-bold leading-tight">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Révélez
                </span>
                <br />
                <span className="text-white">
                  votre
                </span>
                <br />
                <span className="font-great-vibes text-gold-400 text-5xl md:text-6xl lg:text-7xl">
                  beauté
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-open-sans text-nude-200 max-w-lg leading-relaxed">
                Découvrez notre collection exclusive de perruques 
                <span className="font-semibold text-gold-400"> Virgin Hair</span> et 
                <span className="font-semibold text-gold-400"> Vietnam Hair</span> 
                pour sublimer votre style avec élégance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:bg-gradient-gold-dark text-deep-black font-montserrat font-bold px-10 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-gold hover:shadow-gold-lg animate-glow"
              >
                Découvrir nos collections
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-deep-black font-montserrat font-semibold px-10 py-6 text-lg transition-all duration-300 bg-transparent"
              >
                Voir les nouveautés
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold font-montserrat bg-gradient-gold bg-clip-text text-transparent">500+</div>
                <div className="text-sm font-open-sans text-nude-300">Perruques disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-montserrat bg-gradient-gold bg-clip-text text-transparent">98%</div>
                <div className="text-sm font-open-sans text-nude-300">Clients satisfaites</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-montserrat bg-gradient-gold bg-clip-text text-transparent">24h</div>
                <div className="text-sm font-open-sans text-nude-300">Livraison express</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                <div className="aspect-[4/5] bg-gradient-to-br from-deep-black-200 to-gold-900/20 flex items-center justify-center border border-gold-500/20">
                  <div className="text-center space-y-6">
                    <div className="w-40 h-40 mx-auto bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-lg animate-glow">
                      <span className="text-deep-black text-7xl">👑</span>
                    </div>
                    <p className="font-great-vibes text-3xl text-gold-400">Collection Premium</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold animate-float">
                <span className="text-deep-black text-3xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rose-quartz-400 rounded-full flex items-center justify-center shadow-luxury animate-float" style={{animationDelay: '0.5s'}}>
                <span className="text-white text-2xl">💄</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V120Z" fill="url(#gold-gradient)"/>
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8941F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
