import { useState, type FormEvent } from 'react';
import { Button } from './Button';

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-stone-900 border border-stone-800 p-8 rounded-lg text-center">
        <div className="w-16 h-16 bg-wood-900/50 text-wood-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-stone-100 mb-2">Request Received</h3>
        <p className="text-stone-400">
          Thank you for reaching out. We'll review your project details and get back to you within 24-48 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 p-6 md:p-8 rounded-lg shadow-xl">
      <h3 className="font-serif text-2xl text-stone-100 mb-6">Request a Custom Quote</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-stone-300">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            required
            className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-shadow"
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-stone-300">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            required
            className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-shadow"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-stone-300">Email Address</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-shadow"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-stone-300">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-shadow"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <label htmlFor="projectType" className="text-sm font-medium text-stone-300">Project Type</label>
        <select 
          id="projectType"
          className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-shadow appearance-none"
        >
          <option value="">Select a project type...</option>
          <option value="furniture">Custom Furniture</option>
          <option value="cabinets">Bespoke Cabinetry</option>
          <option value="built-ins">Architectural Built-ins</option>
          <option value="tables">Dining & Conference Tables</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="details" className="text-sm font-medium text-stone-300">Project Details</label>
        <textarea 
          id="details" 
          rows={4}
          required
          className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2.5 text-stone-100 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-shadow resize-none"
          placeholder="Tell us about your vision, dimensions, wood preferences, and timeline..."
        ></textarea>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending Request...' : 'Get Your Free Estimate'}
      </Button>
      <p className="text-stone-500 text-xs text-center mt-4">
        Your information is secure. We never share your data with third parties.
      </p>
    </form>
  );
}
