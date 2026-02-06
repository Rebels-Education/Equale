import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Generate JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://institutoequale.org.br/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://institutoequale.org.br${item.href}` : undefined
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={cn("flex items-center text-sm text-muted-foreground mb-6", className)}
      >
        <ol className="flex items-center flex-wrap gap-2">
          <li className="flex items-center">
            <Link href="/">
              <a className="hover:text-primary transition-colors flex items-center gap-1" aria-label="Página Inicial">
                <Home className="w-4 h-4" />
              </a>
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
                {isLast ? (
                  <span 
                    className="font-medium text-foreground" 
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href || "#"}>
                    <a className="hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
