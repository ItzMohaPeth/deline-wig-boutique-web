
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Ici, vous pourriez envoyer les données à votre backend
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-nude-50 to-sky-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-2xl mx-auto">
            Une question ? Un conseil personnalisé ? Notre équipe est là pour vous accompagner
          </p>
          <div className="w-24 h-1 bg-gradient-deline mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-bold text-2xl text-gray-800 mb-6">
                Envoyez-nous un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-nude-50 border-nude-300 focus:border-pastel-pink-400 ${
                      errors.name ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Votre adresse email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-nude-50 border-nude-300 focus:border-pastel-pink-400 ${
                      errors.email ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-nude-50 border-nude-300 focus:border-pastel-pink-400 ${
                      errors.phone ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Votre message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-md bg-nude-50 border border-nude-300 focus:border-pastel-pink-400 focus:outline-none focus:ring-2 focus:ring-pastel-pink-400/20 resize-none ${
                      errors.message ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-deline hover:bg-gradient-gold text-white font-montserrat font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-deline rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Téléphone</h4>
                    <p className="font-open-sans text-gray-600">+221 77 123 45 67</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-deline rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Email</h4>
                    <p className="font-open-sans text-gray-600">contact@deline-wig.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-sky-blue-300 text-sky-blue-600 hover:bg-sky-blue-50"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-sky-blue-300 text-sky-blue-600 hover:bg-sky-blue-50"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-4">Moyens de paiement</h4>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-lg">
                    <span className="font-semibold">📱</span>
                    <span className="font-montserrat font-semibold">Orange Money</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg">
                    <span className="font-semibold">💳</span>
                    <span className="font-montserrat font-semibold">Wave</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
