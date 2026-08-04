import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall, MessageSquare, Mail, User, MapPin } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    city: '',
    estimatedBoxes: '20-50',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Nirmal Shraddha,\nMy Name: ${formData.fullName || 'Customer'}\nCity: ${formData.city || 'N/A'}\nMessage: ${formData.message || 'I would like to inquire about your incense products.'}`
    );
    window.open(`https://wa.me/917304071999?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    handleWhatsAppDirect();
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto pt-12 sm:pt-10 pb-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Floating Fixed Close Button Always Visible on Mobile Viewport */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        title="Close"
        className="fixed top-3 right-3 sm:top-6 sm:right-6 z-[60] w-11 h-11 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 font-black shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-slate-950 shrink-0"
      >
        <X className="w-6 h-6 stroke-[3]" />
      </button>

      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#21140E] via-[#3B2215] to-[#21140E] text-white p-5 sm:p-6 relative pr-14">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Direct Contact & WhatsApp Us</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white">
            Contact Nirmal Shraddha
          </h3>
          <p className="text-amber-200 text-xs font-marathi">
            "निर्मल श्रद्धा अगरबत्ती — थेट संपर्क व व्हॉट्सॲप: 7304071999"
          </p>
        </div>

        {/* Quick Direct Action Bar */}
        <div className="bg-amber-50 p-4 border-b border-amber-200 flex flex-wrap items-center justify-around gap-3">
          <a
            href="https://wa.me/917304071999?text=Hello%20Nirmal%20Shraddha%2C%20I%20want%20to%20know%20more%20about%20your%20natural%20incense%20boxes."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[180px] py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow hover:bg-emerald-500 transition-all"
          >
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:7304071999"
            className="py-2.5 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow hover:bg-amber-300 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 7304071999</span>
          </a>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-600" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-600" /> Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="7304071999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-600" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* City / Location */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" /> City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune / Mumbai / Nashik"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Your Message / Order Requirement</label>
                <textarea
                  rows={3}
                  placeholder="Inquire about Khandoba Malhar Box, sample orders, or custom requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp to 7304071999</span>
              </button>
            </form>
          ) : (
            /* Success Response */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-2xl font-bold text-amber-950">
                  Dhanyawaad! (धन्यवाद)
                </h4>
                <p className="font-marathi text-amber-700 font-semibold text-sm">
                  तुमचा संदेश व्हॉट्सॲपवर पाठवला जात आहे (7304071999).
                </p>
                <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed pt-2">
                  Thank you for reaching out to <strong>Nirmal Shraddha</strong>. You can chat with us directly on WhatsApp at <strong>+91 7304071999</strong>.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#21140E] text-amber-300 font-bold text-xs hover:bg-amber-900 transition-colors shadow"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
