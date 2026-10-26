import { company } from "../data/company";

export interface ServiceNode {
  name: string;
  description: string;
  url: string;
}

export function localBusiness(services: ServiceNode[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.name,
    slogan: company.slogan,
    url: company.url,
    telephone: company.phoneTel,
    email: company.email,
    image: new URL("/og-image.jpg", company.url).toString(),
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "FI",
    },
    areaServed: company.area.map((name) => ({
      "@type": "City",
      name,
    })),
    taxID: company.ytunnus,
    description: company.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Palvelut",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: service.url,
          areaServed: company.region,
        },
      })),
    },
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: ServiceNode) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: company.region,
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: company.name,
      url: company.url,
      telephone: company.phoneTel,
    },
  };
}
