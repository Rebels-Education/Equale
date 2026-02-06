import { useEffect, useRef, useState } from "react";
import { MapView } from "./Map";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CursinhoLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  link?: string | null;
}

const cursinhosLocations: CursinhoLocation[] = [
  // Parceiros Originais
  {
    id: "amplia",
    name: "Amplia Educação",
    lat: -19.8398,
    lng: -43.9135,
    address: "Escola Municipal Professora Acidália Lott, Paulo VI, BH",
    link: "/parceiros/amplia"
  },
  {
    id: "angola",
    name: "Angola Janga",
    lat: -19.9242,
    lng: -43.9436,
    address: "Colégio Minas Gerais, Centro, BH",
    link: "/parceiros/angola-janga"
  },
  {
    id: "comunica",
    name: "ComunICA",
    lat: -16.7265,
    lng: -43.8617,
    address: "ICA-UFMG, Montes Claros",
    link: "/parceiros/comunica"
  },
  {
    id: "doareduca-serra",
    name: "Doar Educa - Serra",
    lat: -19.9392,
    lng: -43.9198,
    address: "Rua Castelo Novo, 1001, Serra, BH",
    link: "/parceiros/doar-educa"
  },
  {
    id: "conceicao",
    name: "Conceição Evaristo",
    lat: -19.9076,
    lng: -43.9247,
    address: "Escola Municipal Professor Domiciano Vieira, Horto, BH",
    link: "/parceiros/conceicao-evaristo"
  },
  {
    id: "afirmativa",
    name: "Afirmativa",
    lat: -19.9387,
    lng: -43.9224,
    address: "Vila Aparecida, Belo Horizonte",
    link: "/parceiros/afirmativa"
  },

  // Novos Cursinhos Mapeados (RMBH)
  {
    id: "equalizar",
    name: "Equalizar - UFMG",
    lat: -19.8691,
    lng: -43.9664,
    address: "Escola de Engenharia da UFMG, Pampulha, BH",
    link: "/parceiros/equalizar"
  },
  {
    id: "consciencia",
    name: "Cursinho Popular Consciência",
    lat: -19.9754,
    lng: -44.0175,
    address: "Barreiro, Belo Horizonte",
    link: "/parceiros/consciencia"
  },
  {
    id: "vila-marcola",
    name: "Pré-Vestibular Vila Marçola",
    lat: -19.9458,
    lng: -43.9167,
    address: "Aglomerado da Serra, Belo Horizonte",
    link: "/parceiros/vila-marcola"
  },
  {
    id: "dom-quixote",
    name: "Cursinho Popular Dom Quixote",
    lat: -19.9348,
    lng: -44.0538,
    address: "FUNEC, Contagem",
    link: "/parceiros/dom-quixote"
  },
  {
    id: "cefet",
    name: "Pré-Vestibular CEFET-MG",
    lat: -19.9304,
    lng: -43.9788,
    address: "Campus Nova Suíça, Belo Horizonte",
    link: "/parceiros/cefet"
  },
  {
    id: "guimaraes-rosa",
    name: "Cursinho Popular Guimarães Rosa",
    lat: -19.9241,
    lng: -43.9283,
    address: "Faculdade de Medicina UFMG, BH",
    link: "/parceiros/guimaraes-rosa"
  },

  // Novos Cursinhos Mapeados (Interior)
  {
    id: "ufu-alternativo",
    name: "Pré-Vestibular Alternativo UFU",
    lat: -18.9186,
    lng: -48.2575,
    address: "Campus Santa Mônica, Uberlândia",
    link: "/parceiros/ufu"
  },
  {
    id: "ufjf-popular",
    name: "Pré-Universitário Popular UFJF",
    lat: -21.7758,
    lng: -43.3717,
    address: "Campus UFJF, Juiz de Fora",
    link: "/parceiros/ufjf"
  },
  {
    id: "uemg-passos",
    name: "Cursinho Popular UEMG Passos",
    lat: -20.7228,
    lng: -46.6105,
    address: "UEMG Unidade Passos",
    link: "/parceiros/uemg-passos"
  },
  {
    id: "sanjoanense",
    name: "Cursinho Popular Sanjoanense",
    lat: -21.1356,
    lng: -44.2612,
    address: "São João del-Rei",
    link: "/parceiros/sanjoanense"
  },
  {
    id: "uftm-solidario",
    name: "Cursinho Solidário UFTM",
    lat: -19.7475,
    lng: -47.9391,
    address: "UFTM, Uberaba",
    link: "/parceiros/uftm"
  },
  {
    id: "ufv-popular",
    name: "Cursinho Popular UFV",
    lat: -20.7605,
    lng: -42.8700,
    address: "Campus UFV, Viçosa",
    link: "/parceiros/ufv"
  },
  
  // NOVOS PARCEIROS (Expansão 2026)
  {
    id: "saberes",
    name: "Cursinho Saberes - UNIFAL",
    lat: -21.7987,
    lng: -46.5934,
    address: "UNIFAL, Poços de Caldas",
    link: "/parceiros/saberes"
  },
  {
    id: "educa-pet",
    name: "Educa PET - UFOP",
    lat: -20.3980,
    lng: -43.5134,
    address: "UFOP, Ouro Preto",
    link: "/parceiros/educa-pet"
  },
  {
    id: "cccp",
    name: "CCCP - Governador Valadares",
    lat: -18.8511,
    lng: -41.9483,
    address: "UFJF Campus GV, Governador Valadares",
    link: "/parceiros/cccp"
  },
  {
    id: "exito",
    name: "Cursinho Êxito - UNIFAL",
    lat: -21.4267,
    lng: -45.9479,
    address: "UNIFAL Sede, Alfenas",
    link: "/parceiros/exito"
  },
  {
    id: "arandu",
    name: "Cursinho Popular Arandu",
    lat: -18.2257,
    lng: -43.5857,
    address: "UFVJM, Diamantina",
    link: "/parceiros/arandu"
  }
];

export default function ProgramsMap() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedCursinho, setSelectedCursinho] = useState<CursinhoLocation | null>(null);

  const onMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    const bounds = new google.maps.LatLngBounds();

    cursinhosLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        animation: google.maps.Animation.DROP,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">${location.name}</h3>
            <p style="font-size: 12px; color: #666;">${location.address}</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        setSelectedCursinho(location);
        infoWindow.open(map, marker);
      });

      bounds.extend({ lat: location.lat, lng: location.lng });
    });

    // Ajusta o zoom se houver pontos, senão centraliza em MG
    if (cursinhosLocations.length > 0) {
      map.fitBounds(bounds);
    } else {
      map.setCenter({ lat: -18.5122, lng: -44.5550 });
      map.setZoom(6);
    }
  };

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-border">
      <MapView
        className="w-full h-full"
        onMapReady={onMapReady}
      />
      
      {selectedCursinho && (
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-background/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-border animate-in slide-in-from-bottom-10 z-10">
          <h3 className="text-lg font-bold mb-2">{selectedCursinho.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{selectedCursinho.address}</p>
          {selectedCursinho.link ? (
            <Link href={selectedCursinho.link}>
              <Button size="sm" className="w-full rounded-full">
                Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button size="sm" disabled variant="secondary" className="w-full rounded-full opacity-70">
              Página em breve
            </Button>
          )}
          <button 
            onClick={() => setSelectedCursinho(null)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-muted transition-colors"
          >
            ✕
          </button>
        </div>
      )}
      
      {/* Legenda Flutuante */}
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-border z-0 pointer-events-none">
        {cursinhosLocations.length} pontos de educação mapeados
      </div>
    </div>
  );
}
