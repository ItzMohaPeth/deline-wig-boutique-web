
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aminata Diallo",
      location: "Dakar, Sénégal",
      rating: 5,
      comment: "Excellente qualité ! Ma perruque Virgin Hair ressemble exactement à mes cheveux naturels. Le service client est très professionnel.",
      avatar: "👩🏾"
    },
    {
      id: 2,
      name: "Fatoumata Keita",
      location: "Bamako, Mali",
      rating: 5,
      comment: "Livraison rapide et produit conforme. Je recommande vivement DELINE-WIG pour la qualité et le professionnalisme.",
      avatar: "👩🏿"
    },
    {
      id: 3,
      name: "Aicha Traoré",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      comment: "J'adore ma nouvelle perruque ! Elle est naturelle, légère et facile à coiffer. Merci DELINE-WIG !",
      avatar: "👱🏾‍♀️"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Nos Clientes Témoignent
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences authentiques de nos clientes satisfaites
          </p>
          <div className="w-24 h-1 bg-gradient-deline mx-auto rounded-full mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-nude-50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i}
                      className={`text-lg ${i < testimonial.rating ? 'text-gold-500' : 'text-gray-300'}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="font-open-sans text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-deline rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="font-open-sans text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-open-sans text-gray-600 mb-4">
            Rejoignez des milliers de femmes satisfaites
          </p>
          <div className="flex items-center justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold font-montserrat bg-gradient-deline bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm font-open-sans text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-montserrat bg-gradient-deline bg-clip-text text-transparent">
                2500+
              </div>
              <div className="text-sm font-open-sans text-gray-600">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-montserrat bg-gradient-deline bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="text-sm font-open-sans text-gray-600">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
