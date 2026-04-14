import { useState, type FormEvent } from 'react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-stone-900/50 border border-stone-800/50 p-10 rounded-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-gold-900/30 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-5"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </svg>
        </motion.div>
        <h3 className="font-serif text-2xl text-stone-100 mb-3">Request Received</h3>
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We'll review your project details and get back to you within 24-48 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-7"
          onClick={() => setStatus('idle')}
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  const inputClass = (field: string) => `
    w-full bg-stone-950/60 border rounded-lg px-4 py-3 text-stone-100 text-sm
    focus:outline-none focus:ring-2 focus:ring-gold-600/50 focus:border-gold-700/50
    transition-all duration-300 placeholder:text-stone-600
    ${focusedField === field ? 'border-gold-700/50 shadow-lg shadow-gold-900/10' : 'border-stone-800/50'}
  `;

  return (
    <form onSubmit={handleSubmit} className="bg-stone-900/30 border border-stone-800/30 p-7 md:p-9 rounded-xl shadow-2xl shadow-stone-950/50">
      <h3 className="font-serif text-2xl text-stone-100 mb-2">Request a Custom Quote</h3>
      <p className="text-stone-500 text-sm mb-7">Tell us about your project and we'll get back to you with a personalized estimate.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-xs font-medium text-stone-400 uppercase tracking-wider">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            required
            className={inputClass('firstName')}
            placeholder="John"
            onFocus={() => setFocusedField('firstName')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-xs font-medium text-stone-400 uppercase tracking-wider">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            required
            className={inputClass('lastName')}
            placeholder="Doe"
            onFocus={() => setFocusedField('lastName')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium text-stone-400 uppercase tracking-wider">Email Address</label>
          <input 
            type="email" 
            id="email" 
            required
            className={inputClass('email')}
            placeholder="john@example.com"
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-medium text-stone-400 uppercase tracking-wider">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className={inputClass('phone')}
            placeholder="(817) 403-6044"
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
      </div>

      <div className="space-y-2 mb-5">
        <label htmlFor="projectType" className="text-xs font-medium text-stone-400 uppercase tracking-wider">Project Type</label>
        <select 
          id="projectType"
          className={`${inputClass('projectType')} appearance-none`}
          onFocus={() => setFocusedField('projectType')}
          onBlur={() => setFocusedField(null)}
        >
          <option value="">Select a project type...</option>
          <option value="kitchen">Custom Kitchen Cabinetry</option>
          <option value="built-ins">Architectural Built-ins</option>
          <option value="closets">Luxury Closets</option>
          <option value="bars">Home Bar & Coffee Station</option>
          <option value="vanity">Floating Vanity</option>
          <option value="media">Media Console</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div className="space-y-2 mb-7">
        <label htmlFor="details" className="text-xs font-medium text-stone-400 uppercase tracking-wider">Project Details</label>
        <textarea 
          id="details" 
          rows={4}
          required
          className={`${inputClass('details')} resize-none`}
          placeholder="Tell us about your vision, dimensions, wood preferences, and timeline..."
          onFocus={() => setFocusedField('details')}
          onBlur={() => setFocusedField(null)}
        ></textarea>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full shimmer h-12"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" />
            </svg>
            Sending Request...
          </span>
        ) : 'Get Your Free Estimate'}
      </Button>
      <p className="text-stone-600 text-[10px] text-center mt-4 uppercase tracking-wider">
        Your information is secure. We never share your data.
      </p>
    </form>
  );
}
