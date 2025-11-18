import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  // Generate BreadcrumbList schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.path && { "item": `https://visibi.com${item.path}` })
    }))
  };

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
        <ol className="flex items-center gap-2 text-sm font-thin font-open-sans">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-950">
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span className="text-slate-400" aria-hidden="true">/</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
