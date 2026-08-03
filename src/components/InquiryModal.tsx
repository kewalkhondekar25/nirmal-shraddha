import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, PhoneCall, Building2, Package, Mail, User, MapPin } from 'lucide-react';
import { InquiryFormData } from '../types';
import { FRAGRANCES } from '../data/fragrances';
import { playTempleBell } from '../utils/audioSynth';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'distributor',
    city: '',
    estimatedBoxes: '50-100',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTempleBell();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1E1B4E] via-[#2A2463] to-[#1E1B4E] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-indigo-950/60 text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Official Stockist & Wholesale Inquiry</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white">
            Partner with Nirmal Shraddha
          </h3>
          <p className="text-amber-200 text-xs font-marathi">
            "निर्मल श्रद्धा अगरबत्ती — वितरण व घाऊक चौकशी"
          </p>
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
                    placeholder="+91 98765 43210"
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
                    <Mail className="w-3.5 h-3.5 text-amber-600" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* City / Location */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" /> City / District *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune / Mumbai / Nashik"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Inquiry Purpose *</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                >
                  <option value="distributor">Retail Stockist / Regional Distributor</option>
                  <option value="temple_supply">Temple Shrines & Ashram Bulk Supply</option>
                  <option value="bulk_pooja">Festive & Marriage Pooja Bulk Order</option>
                  <option value="gifting">Corporate & Festival Gifting</option>
                  <option value="general">General Brand Inquiry</option>
                </select>
              </div>

              {/* Quantity Estimate */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Package className="w-3.5 h-3.5 text-amber-600" /> Estimated Quantity (Boxes)
                </label>
                <select
                  value={formData.estimatedBoxes}
                  onChange={(e) => setFormData({ ...formData, estimatedBoxes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                >
                  <option value="20-50">20 - 50 Boxes (Sample/Trial)</option>
                  <option value="50-100">50 - 100 Boxes</option>
                  <option value="100-500">100 - 500 Boxes (Stockist)</option>
                  <option value="500+">500+ Boxes (Wholesale Distributor)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Additional Details / Product Interest</label>
                <textarea
                  rows={3}
                  placeholder="Mention if you are interested specifically in Khandoba Malhar or other variants..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-bold text-sm hover:scale-[1.02] transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Wholesale Inquiry</span>
              </button>
            </form>
          ) : (
            /* Success Response */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-2xl font-bold text-indigo-950">
                  Dhanyawaad! (धन्यवाद)
                </h4>
                <p className="font-marathi text-amber-700 font-semibold text-sm">
                  तुमची चौकशी यशस्वीपणे प्राप्त झाली आहे.
                </p>
                <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed pt-2">
                  Thank you for reaching out to <strong>Nirmal Shraddha</strong>. Our representative will contact you via WhatsApp or Email within 24 hours with product catalogs and wholesale pricing.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#1E1B4E] text-amber-300 font-bold text-xs hover:bg-indigo-900 transition-colors shadow"
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
