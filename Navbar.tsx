import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { SearchCommand } from "./SearchCommand";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Quem Somos", path: "/sobre" },
    { name: "Programas", path: "/programas" },
    { name: "Processo Seletivo", path: "/processo-seletivo" },
    { name: "Cursinhos Parceiros", path: "/programas" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
      
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-heading text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
              <img src="/images/logo-equale-transparent.png" alt="Instituto Equale" className="h-10 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path)
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setSearchOpen(true)}
              aria-label="Pesquisar"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/voluntario">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold mr-2">
                Seja Voluntário
              </Button>
            </Link>
            <Link href="/doar">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
              >
                Quero Ajudar
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.path} href={link.path}>
                      <a
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          isActive(link.path)
                            ? "text-primary font-bold"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                  <Link href="/voluntario">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/10 font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      Seja Voluntário
                    </Button>
                  </Link>
                  <Link href="/doar">
                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      Quero Ajudar
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
