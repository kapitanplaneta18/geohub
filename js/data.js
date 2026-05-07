// ==============================================
// GEOHUB DATA - CURRICULUM STRUCTURE
// ==============================================

const CURRICULUM = {
    "1": { 
        "p": [],
        "r": [
            { 
                id: "dz1", title: "I. Obraz Ziemi", icon: "map", 
                topics: [ 
                    { id: "t1", title: "Źródła informacji geograficznej" }, 
                    { id: "t2", title: "Metody badań geograficznych" }, 
                    { id: "t3", title: "Mapa jako obraz Ziemi" }, 
                    { id: "t4", title: "Metody prezentacji na mapach" }, 
                    { id: "t5", title: "Jak czytać mapę?" }, 
                    { id: "t6", title: "Systemy GIS" } 
                ] 
            },
            { 
                id: "dz2", title: "II. Ziemia we Wszechświecie", icon: "globe", 
                topics: [ 
                    { id: "t1", title: "Wszechświat" }, 
                    { id: "t2", title: "Budowa Układu Słonecznego" }, 
                    { id: "t3", title: "Ruch obrotowy Ziemi" }, 
                    { id: "t4", title: "Czas na Ziemi" }, 
                    { id: "t5", title: "Ruch obiegowy Ziemi" } 
                ] 
            },
            { 
                id: "dz3", title: "III. Atmosfera", icon: "cloud", 
                topics: [ 
                    { id: "t1", title: "Skład i budowa atmosfery" }, 
                    { id: "t2", title: "Temperatura powietrza" }, 
                    { id: "t3", title: "Ciśnienie atmosferyczne" }, 
                    { id: "t4", title: "Opady atmosferyczne" }, 
                    { id: "t5", title: "Prognozowanie pogody" }, 
                    { id: "t6", title: "Czynniki klimatotwórcze" }, 
                    { id: "t7", title: "Klimaty kuli ziemskiej" } 
                ] 
            },
            { 
                id: "dz4", title: "IV. Hydrosfera", icon: "droplets", 
                topics: [ 
                    { id: "t1", title: "Zasoby wodne Ziemi" }, 
                    { id: "t2", title: "Dynamika mórz i oceanów" }, 
                    { id: "t3", title: "Sieć rzeczna" }, 
                    { id: "t4", title: "Jeziora" }, 
                    { id: "t5", title: "Lodowce i lądolody" }, 
                    { id: "t6", title: "Wody podziemne" } 
                ] 
            },
            { 
                id: "dz5", title: "V. Wnętrze Ziemi", icon: "layers", 
                topics: [ 
                    { id: "t1", title: "Budowa wnętrza Ziemi" }, 
                    { id: "t2", title: "Minerały i skały" }, 
                    { id: "t3", title: "Tektonika płyt litosfery" }, 
                    { id: "t4", title: "Ruchy górotwórcze" }, 
                    { id: "t5", title: "Plutonizm i wulkanizm" }, 
                    { id: "t6", title: "Trzęsienia ziemi" }, 
                    { id: "t7", title: "Ukształtowanie lądów i oceanów" }, 
                    { id: "t8", title: "Datowanie dziejów Ziemi" }, 
                    { id: "t9", title: "Kronika dziejów Ziemi" } 
                ] 
            },
            { 
                id: "dz6", title: "VI. Procesy egzogeniczne", icon: "mountain", 
                topics: [ 
                    { id: "t1", title: "Wietrzenie skał" }, 
                    { id: "t2", title: "Ruchy masowe" }, 
                    { id: "t3", title: "Procesy krasowe" }, 
                    { id: "t4", title: "Działalność rzek" }, 
                    { id: "t5", title: "Działalność lodowców" }, 
                    { id: "t6", title: "Działalność morza" }, 
                    { id: "t7", title: "Działalność wiatru" } 
                ] 
            },
            { 
                id: "dz7", title: "VII. Pedosfera i Biosfera", icon: "sprout", 
                topics: [ 
                    { id: "t1", title: "Powstawanie gleb" }, 
                    { id: "t2", title: "Typy genetyczne gleb" }, 
                    { id: "t3", title: "Strefy roślinne" } 
                ] 
            }
        ]
    },
    "2": { 
        "p": [], 
        "r": [
            {
                id: "dz1",
                title: "Zmiany na mapie politycznej",
                icon: "flag",
                topics: [
                    {"id": "t1", "title": "Podział polityczny świata"},
                    {"id": "t2", "title": "Wpływ dekolonizacji na współczesny obraz świata"},
                    {"id": "t3", "title": "Integracja i dezintegracja na świecie"},
                    {"id": "t4", "title": "Konflikty zbrojne. Terroryzm"},
                    {"id": "t5", "title": "Podstawowe wskaźniki rozwoju krajów"}
                ]
            },
            {
                id: "dz2",
                title: "Ludność i osadnictwo",
                icon: "users",
                topics: [
                    {"id": "t1", "title": "Liczba ludności świata i jej zmiany"},
                    {"id": "t2", "title": "Rozwój demograficzny"},
                    {"id": "t3", "title": "Rozmieszczenie ludności na świecie"},
                    {"id": "t4", "title": "Migracje"},
                    {"id": "t5", "title": "Zróżnicowanie narodowościowe i etniczne ludności świata"},
                    {"id": "t6", "title": "Struktura językowa i struktura wykształcenia ludności świata"},
                    {"id": "t7", "title": "Zróżnicowanie religijne ludności świata"},
                    {"id": "t8", "title": "Kręgi kulturowe"},
                    {"id": "t9", "title": "Przestrzeń i jej kulturowe postrzeganie przez człowieka"},
                    {"id": "t10", "title": "Rozwój sieci osadniczej na świecie"},
                    {"id": "t11", "title": "Urbanizacja"},
                    {"id": "t12", "title": "Miasta świata"},
                    {"id": "t13", "title": "Rozwój obszarów wiejskich"}
                ]
            },
            {
                id: "dz3",
                title: "Sektory gospodarki. Globalizacja",
                icon: "globe-2",
                topics: [
                    {"id": "t1", "title": "Zmiana roli sektorów gospodarki"},
                    {"id": "t2", "title": "Globalizacja"}
                ]
            },
            {
                id: "dz4",
                title: "Rolnictwo, leśnictwo i rybactwo",
                icon: "sprout",
                topics: [
                    {"id": "t1", "title": "Czynniki rozwoju rolnictwa"},
                    {"id": "t2", "title": "Typy rolnictwa i regiony rolnicze"},
                    {"id": "t3", "title": "Rolnictwo uprzemysłowione i rolnictwo ekologiczne"},
                    {"id": "t4", "title": "Główne obszary upraw"},
                    {"id": "t5", "title": "Główne obszary chowu zwierząt"},
                    {"id": "t6", "title": "Lasy na Ziemi. Gospodarka leśna"},
                    {"id": "t7", "title": "Rybactwo"}
                ]
            },
            {
                id: "dz5",
                title: "Przemysł",
                icon: "factory",
                topics: [
                    {"id": "t1", "title": "Czynniki lokalizacji przemysłu"},
                    {"id": "t2", "title": "Przemysł tradycyjny i przemysł zaawansowanych technologii"},
                    {"id": "t3", "title": "Zmiany w przemyśle na świecie"},
                    {"id": "t4", "title": "Obszary koncentracji przemysłu"},
                    {"id": "t5", "title": "Budownictwo"},
                    {"id": "t6", "title": "Źródła energii i bilans energetyczny"},
                    {"id": "t7", "title": "Produkcja i zużycie energii elektrycznej"},
                    {"id": "t8", "title": "Energetyka jądrowa"}
                ]
            },
            {
                id: "dz6",
                title: "Usługi",
                icon: "briefcase",
                topics: [
                    {"id": "t1", "title": "Zróżnicowanie usług na świecie"},
                    {"id": "t2", "title": "Transport"},
                    {"id": "t3", "title": "Łączność"},
                    {"id": "t4", "title": "Społeczeństwo informacyjne. Gospodarka oparta na wiedzy"},
                    {"id": "t5", "title": "Usługi edukacyjne i finansowe"},
                    {"id": "t6", "title": "Handel międzynarodowy"},
                    {"id": "t7", "title": "Rozwój turystyki na świecie"},
                    {"id": "t8", "title": "Regiony turystyczne świata"}
                ]
            },
            {
                id: "dz7",
                title: "Wpływ człowieka na środowisko",
                icon: "leaf",
                topics: [
                    {"id": "t1", "title": "Konflikt w relacji człowiek - środowisko przyrodnicze"},
                    {"id": "t2", "title": "Wpływ działalności człowieka na atmosferę"},
                    {"id": "t3", "title": "Wpływ działalności człowieka na hydrosferę"},
                    {"id": "t4", "title": "Wpływ działalności rolniczej na środowisko przyrodnicze"},
                    {"id": "t5", "title": "Wpływ działalności górniczej na środowisko przyrodnicze"},
                    {"id": "t6", "title": "Wpływ transportu i turystyki na środowisko"},
                    {"id": "t7", "title": "Krajobraz kulturowy i jego ochrona"},
                    {"id": "t8", "title": "Rewitalizacja i działania proekologiczne"}
                ]
            }
        ] 
    },
    "3": { 
        "p": [], 
        "r": [
            { 
                id: "dz1", title: "I. Zróżnicowanie środowiska przyrodniczego Polski", icon: "map", 
                topics: [ 
                    { id: "t1", title: "Położenie i obszar Polski" }, 
                    { id: "t2", title: "Budowa geologiczna" }, 
                    { id: "t3", title: "Surowce mineralne" }, 
                    { id: "t4", title: "Ukształtowanie powierzchni" }, 
                    { id: "t5", title: "Klimat" }, 
                    { id: "t6", title: "Zasoby wodne" }, 
                    { id: "t7", title: "Jeziora" }, 
                    { id: "t8", title: "Środowisko Morza Bałtyckiego" } 
                ] 
            },
            { 
                id: "dz2", title: "II. Związki między elementami środowiska przyrodniczego", icon: "layers", 
                topics: [ 
                    { id: "t1", title: "Tatry" }, 
                    { id: "t2", title: "Sudety, Bieszczady i Góry Świętokrzyskie" }, 
                    { id: "t3", title: "Wyżyny" }, 
                    { id: "t4", title: "Niziny" }, 
                    { id: "t5", title: "Pojezierza" }, 
                    { id: "t6", title: "Pobrzeża Bałtyku" } 
                ] 
            },
            { 
                id: "dz3", title: "III. Krajobrazy Polski", icon: "mountain", 
                topics: [ 
                    { id: "t1", title: "Zróżnicowanie krajobrazów" }, 
                    { id: "t2", title: "Krajobrazy przyrodnicze" }, 
                    { id: "t3", title: "Krajobrazy kulturowe" }, 
                    { id: "t4", title: "Promocja i ochrona walorów przyrodniczych" } 
                ] 
            },
            { 
                id: "dz4", title: "IV. Ludność i urbanizacja w Polsce", icon: "users", 
                topics: [ 
                    { id: "t1", title: "Liczba ludności i zmiany" }, 
                    { id: "t2", title: "Struktura demograficzna" }, 
                    { id: "t3", title: "Rozmieszczenie ludności" }, 
                    { id: "t4", title: "Migracje" }, 
                    { id: "t5", title: "Zróżnicowanie etniczne i narodowościowe" }, 
                    { id: "t6", title: "Rynek pracy" }, 
                    { id: "t7", title: "Zróżnicowanie poziomu życia" }, 
                    { id: "t8", title: "Preferencje wyborcze" }, 
                    { id: "t9", title: "Urbanizacja" }, 
                    { id: "t10", title: "Życie w miastach" }, 
                    { id: "t11", title: "Osadnictwo wiejskie" } 
                ] 
            },
            { 
                id: "dz5", title: "V. Gospodarka Polski", icon: "trending-up", 
                topics: [ 
                    { id: "t1", title: "Warunki rozwoju rolnictwa" }, 
                    { id: "t2", title: "Rolnictwo ekologiczne" }, 
                    { id: "t3", title: "Przemiany przemysłu" }, 
                    { id: "t4", title: "Przemysł wysokich technologii" }, 
                    { id: "t5", title: "Transport" }, 
                    { id: "t6", title: "Gospodarka morska" }, 
                    { id: "t7", title: "Walory turystyczne" } 
                ] 
            },
            { 
                id: "dz6", title: "VI. Stan środowiska i jego ochrona w Polsce", icon: "shield-check", 
                topics: [ 
                    { id: "t1", title: "Stan środowiska" }, 
                    { id: "t2", title: "Ochrona środowiska przyrodniczego" } 
                ] 
            }
        ]
    },
    "4": { "p": [], "r": [] }
};