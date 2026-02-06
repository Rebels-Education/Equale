import * as React from "react";
import { useLocation } from "wouter";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { partnersData } from "@/data/partners";
import { 
  Calculator, 
  Calendar, 
  CreditCard, 
  Settings, 
  Smile, 
  User,
  Home,
  BookOpen,
  Users,
  Heart,
  FileText,
  Building2,
  Search
} from "lucide-react";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const [location, setLocation] = useLocation();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange, open]);

  const runCommand = React.useCallback((command: () => void) => {
    onOpenChange(false);
    command();
  }, [onOpenChange]);

  // Transform partners data into searchable items
  const partnerItems = Object.entries(partnersData).map(([id, partner]) => ({
    id,
    name: partner.name,
    description: partner.description,
    location: partner.location,
    icon: Building2
  }));

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Digite para buscar..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        
        <CommandGroup heading="Páginas Principais">
          <CommandItem onSelect={() => runCommand(() => setLocation("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Início</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setLocation("/quem-somos"))}>
            <Users className="mr-2 h-4 w-4" />
            <span>Quem Somos</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setLocation("/programas"))}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Programas e Cursinhos</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setLocation("/voluntario"))}>
            <Heart className="mr-2 h-4 w-4" />
            <span>Seja Voluntário</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setLocation("/doar"))}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Faça uma Doação</span>
          </CommandItem>
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Cursinhos Parceiros">
          {partnerItems.map((partner) => (
            <CommandItem 
              key={partner.id} 
              onSelect={() => runCommand(() => setLocation(`/parceiro/${partner.id}`))}
            >
              <partner.icon className="mr-2 h-4 w-4" />
              <div className="flex flex-col">
                <span>{partner.name}</span>
                <span className="text-xs text-muted-foreground">{partner.location}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Ações Rápidas">
          <CommandItem onSelect={() => runCommand(() => window.open("https://api.whatsapp.com/send?phone=5531999999999", "_blank"))}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Falar no WhatsApp</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setLocation("/contato"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Enviar Mensagem</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
