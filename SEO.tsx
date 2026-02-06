import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = "/images/og-image-default.jpg", // Need to ensure this image exists or use a placeholder
  url = window.location.href,
  type = "website"
}: SEOProps) {
  
  const siteTitle = "Instituto Equale";
  const fullTitle = `${title} | ${siteTitle}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMeta('description', description);

    // Open Graph / Facebook
    updateMeta('og:type', type, 'property');
    updateMeta('og:url', url, 'property');
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image.startsWith('http') ? image : `${window.location.origin}${image}`, 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image', 'property');
    updateMeta('twitter:url', url, 'property');
    updateMeta('twitter:title', fullTitle, 'property');
    updateMeta('twitter:description', description, 'property');
    updateMeta('twitter:image', image.startsWith('http') ? image : `${window.location.origin}${image}`, 'property');

  }, [title, description, image, url, type, fullTitle]);

  return null;
}
