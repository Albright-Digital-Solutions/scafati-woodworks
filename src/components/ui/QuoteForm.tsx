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
        className="bg-cream-50 border border-cream-200 p-10 rounded-xl text-center shadow-sm shadow-wood-200/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-gold-50 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold-200"
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
        <h3 className="font-serif text-2xl text-wood-900 mb-3">Request Received!</h3>
        <p className="text-wood-500 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We'll review your project and get back to you within 1–2 business days.
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
    w-full bg-white border rounded-lg px-4 py-3 text-wood-800 text-sm
    focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400
    transition-all duration-300 placeholder:text-wood-300
    ${focusedField === field ? 'border-gold-400 shadow-sm shadow-gold-100' : 'border-cream-300'}
  `;

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-cream-200 p-7 md:p-9 rounded-xl shadow-sm shadow-wood-200/20">
      <h3 className="font-serif text-2xl text-wood-900 mb-2">Get a Free Quote</h3>
      <p className="text-wood-400 text-sm mb-7">Tell us about your project and we'll get back to you with a personalized estimate.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-xs font-medium text-wood-500 uppercase tracking-wider">First Name</label>
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
          <label htmlFor="lastName" className="text-xs font-medium text-wood-500 uppercase tracking-wider">Last Name</label>
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
          <label htmlFor="email" className="text-xs font-medium text-wood-500 uppercase tracking-wider">Email Address</label>
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
          <label htmlFor="phone" className="text-xs font-medium text-wood-500 uppercase tracking-wider">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={inputClass('phone')}
            placeholder="(817) 555-0000"
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
          />
        </div>
      </div>

      <div className="space-y-2 mb-5">
        <label htmlFor="projectType" className="text-xs font-medium text-wood-500 uppercase tracking-wider">Project Type</label>
        <select
          id="projectType"
          className={`${inputClass('projectType')} appearance-none`}
          onFocus={() => setFocusedField('projectType')}
          onBlur={() => setFocusedField(null)}
        >
          <option value="">Select a project type...</option>
          <option value="custom-cabinets">Custom Cabinets</option>
          <option value="built-ins">Built-Ins</option>
          <option value="entertainment-center">Entertainment Center</option>
          <option value="pantry">Custom Pantry System</option>
          <option value="mudroom">Mudroom Storage</option>
          <option value="laundry">Laundry Room Cabinets</option>
          <option value="vanity">Bathroom Vanity</option>
          <option value="doors-fronts">Cabinet Doors & Drawer Fronts</option>
          <option value="refacing">Cabinet Refacing</option>
          <option value="shelves">Floating Shelves</option>
          <option value="accent-wall">Accent Wall</option>
          <option value="lattice">Lattice Wall Panels</option>
          <option value="trim">Custom Trim Work</option>
          <option value="other">Other / Custom Project</option>
        </select>
      </div>

      <div className="space-y-2 mb-7">
        <label htmlFor="details" className="text-xs font-medium text-wood-500 uppercase tracking-wider">Project Details</label>
        <textarea
          id="details"
          rows={4}
          required
          className={`${inputClass('details')} resize-none`}
          placeholder="Tell us about your project — what you're looking for, approximate size, and any style or material preferences..."
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
            Sending...
          </span>
        ) : 'Get My Free Quote'}
      </Button>
      <p className="text-wood-300 text-[10px] text-center mt-4 uppercase tracking-wider">
        Your information is secure. We never share your data.
      </p>
    </form>
  );
}
