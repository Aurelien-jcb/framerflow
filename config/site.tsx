import { Icons } from "@/components/icons";

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Framer Flow",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Accueil",
      href: "/",
      icon: <Icons.home className="h-5 w-5" />,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Icons.dashboard className="h-5 w-5" />,
    },
    {
      title: "Clients",
      href: "/clients",
      icon: <Icons.clients className="h-5 w-5" />,
    },
    {
      title: "Commandes",
      href: "/commandes",
      icon: <Icons.order className="h-5 w-5" />,
    },
    {
      title: "Produits",
      href: "/produits",
      icon: <Icons.product className="h-5 w-5" />,
    },
    {
      title: "Devis",
      href: "/devis",
      icon: <Icons.calculator className="h-5 w-5" />,
    },
    {
      title: "Stocks",
      href: "/stocks",
      icon: <Icons.package className="h-5 w-5" />,
    },
    {
      title: "Fournisseurs",
      href: "/fournisseurs",
      icon: <Icons.supplier className="h-5 w-5" />,
    },
    {
      title: "Paramètres",
      href: "/parametres",
      icon: <Icons.settings className="h-5 w-5" />,
    },
  ],
  links: {
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}