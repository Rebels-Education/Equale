import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
                <img src="/images/logo-equale-main.png" alt="Instituto Equale" className="h-8 w-auto mb-2" />
              </a>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cuidando da educação de Minas Gerais e criando oportunidades iguais para todos. Uma associação sem fins lucrativos comprometida com a equidade educacional.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/institutoequale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/institutoequale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/instituto-equale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/">
                  <a className="hover:text-primary transition-colors">Início</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="hover:text-primary transition-colors">Quem Somos</a>
                </Link>
              </li>
              <li>
                <Link href="/programas">
                  <a className="hover:text-primary transition-colors">Nossos Programas</a>
                </Link>
              </li>
              <li>
                <Link href="/doar">
                  <a className="hover:text-primary transition-colors">Como Ajudar</a>
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco">
                  <a className="hover:text-primary transition-colors font-medium text-primary">Trabalhe Conosco</a>
                </Link>
              </li>
              <li>
                <Link href="/voluntario">
                  <a className="hover:text-primary transition-colors font-medium text-primary">Seja Voluntário</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Rua Bernardo Guimarães, 2129, Lourdes<br />
                  Belo Horizonte, MG - Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+55 31 3517-1717</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contato@gmail.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Instituto Equale. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
