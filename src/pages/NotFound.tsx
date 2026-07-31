import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested page could not be found."
        noindex
      />
      <section className="section-warm flex min-h-[70vh] items-center py-32 text-center">
        <div className="container mx-auto max-w-2xl px-4 md:px-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold-700">404 Error</p>
          <h1 className="mb-5 font-serif text-4xl font-semibold text-wood-900 md:text-6xl">Page Not Found</h1>
          <p className="mb-8 text-lg text-wood-500">
            The page may have moved or the address may be incorrect. Use the links below to continue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild><Link to="/">Return Home</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Request a Quote</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
