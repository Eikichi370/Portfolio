import { useState, FormEvent } from 'react';
import { Mail, Send, Github, MessageSquare, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_d3ulf7p', // Service ID
      'template_7rer2co', // Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      '0lftMrbp8t-Mte4Bk' //User ID EmailJS
    )
      .then(() => {
        setIsSubmitting(false);
        setSubmitResult({
          success: true,
          message: t('contact.form.success'),
        });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitResult(null), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitResult({
          success: false,
          message: 'Erreur lors de l\'envoi. Veuillez réessayer.',
        });
      });
  };
  
  return (
    <section id="contact" className="py-24 relative bg-lol-darkest">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-lol-gold to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="myst-border p-6 bg-lol-dark rounded-lg h-full">
              <h3 className="text-2xl font-display font-bold mb-6">{t('contact.subtitle')}</h3>
              
              <p className="mb-8 leading-relaxed text-muted-foreground">
                {t('contact.intro')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-lol-darker p-3 rounded-full text-lol-gold mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">youssef.ayadpro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lol-darker p-3 rounded-full text-lol-gold mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://www.linkedin.com/in/youssef-ayad-4a0303340" target="_blank" rel="noopener noreferrer" className="bg-lol-darker hover:bg-lol-dark p-2 rounded-full transition-colors border border-lol-gold-dark/50 hover:border-lol-gold">
                        <Linkedin size={20} className="text-lol-gold" />
                      </a>
                      <a href="https://github.com/Eikichi370" target="_blank" rel="noopener noreferrer" className="bg-lol-darker hover:bg-lol-dark p-2 rounded-full transition-colors border border-lol-gold-dark/50 hover:border-lol-gold">
                        <Github size={20} className="text-lol-gold" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <div className="myst-border p-6 bg-lol-dark rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-muted-foreground">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="scroll-input"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-muted-foreground">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="scroll-input"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-muted-foreground">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="scroll-input"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="arcane-button w-full group"
                  disabled={isSubmitting}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? t('contact.form.sending') : (
                      <>
                        <span>{t('contact.form.send')}</span>
                        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
                
                {submitResult && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    submitResult.success ? 'bg-green-900/20 text-green-300 border border-green-800' : 
                    'bg-red-900/20 text-red-300 border border-red-800'
                  }`}>
                    {submitResult.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
