import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';

export function render(url: string) {
  const appHtml = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
  return { appHtml };
}
