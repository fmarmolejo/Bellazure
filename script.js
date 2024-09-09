
const jsonData = [
    {
      "id": 1,
      "name": "Aire - Loewe",
      "category": "mujer"
    },
    {
      "id": 2,
      "name": "CK one - Calvin Klein",
      "category": "mujer"
    },
    {
      "id": 3,
      "name": "Carolina Herrera Clásica",
      "category": "mujer"
    },
    {
      "id": 4,
      "name": "Chanel nº5",
      "category": "mujer"
    },
    {
      "id": 6,
      "name": "Anais anais - Cacharel",
      "category": "mujer"
    },
    {
      "id": 8,
      "name": "Trésor - Lancôme",
      "category": "mujer"
    },
    {
      "id": 11,
      "name": "Coco Chanel",
      "category": "mujer"
    },
    {
      "id": 13,
      "name": "Opium - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 14,
      "name": "Noa - Cacharel",
      "category": "mujer"
    },
    {
      "id": 16,
      "name": "Acqua di gio woman - Giorgio Armani",
      "category": "mujer"
    },
    {
      "id": 18,
      "name": "212 - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 20,
      "name": "Allure woman - Chanel",
      "category": "mujer"
    },
    {
      "id": 21,
      "name": "Soir - Lune de Sisley",
      "category": "mujer"
    },
    {
      "id": 22,
      "name": "Eternity - Calvin Klein",
      "category": "mujer"
    },
    {
      "id": 24,
      "name": "Light blue - D&G",
      "category": "mujer"
    },
    {
      "id": 25,
      "name": "J'adore - Christian Dior",
      "category": "mujer"
    },
    {
      "id": 26,
      "name": "Ultraviolet woman- Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 27,
      "name": "Hugo woman - Hugo Boss",
      "category": "mujer"
    },
    {
      "id": 28,
      "name": "Classique - Jean Paul Gaultier",
      "category": "mujer"
    },
    {
      "id": 30,
      "name": "Ángel - Thierry Mugler",
      "category": "mujer"
    },
    {
      "id": 31,
      "name": "Miracle - Lancôme",
      "category": "mujer"
    },
    {
      "id": 32,
      "name": "Omnia coral - Bvulgari",
      "category": "mujer"
    },
    {
      "id": 33,
      "name": "Eau - Rochas",
      "category": "mujer"
    },
    {
      "id": 34,
      "name": "L´Eau D´Issey Miyake",
      "category": "mujer"
    },
    {
      "id": 37,
      "name": "Chloé",
      "category": "mujer"
    },
    {
      "id": 38,
      "name": "Bonbon - Viktor & Rolf",
      "category": "mujer"
    },
    {
      "id": 39,
      "name": "L’interdit - Givenchy",
      "category": "mujer"
    },
    {
      "id": 40,
      "name": "Pleasures intense - Estée Lauder",
      "category": "mujer"
    },
    {
      "id": 41,
      "name": "Ô - Lancôme",
      "category": "mujer"
    },
    {
      "id": 42,
      "name": "DKNY",
      "category": "mujer"
    },
    {
      "id": 43,
      "name": "Aromatics elixir - Clinique",
      "category": "mujer"
    },
    {
      "id": 44,
      "name": "Kenzo Amour",
      "category": "mujer"
    },
    {
      "id": 45,
      "name": "212 VIP rosé - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 46,
      "name": "Agua fresca rosas blancas - Adolfo Domínguez",
      "category": "mujer"
    },
    {
      "id": 47,
      "name": "Candy - Prada",
      "category": "mujer"
    },
    {
      "id": 48,
      "name": "Ch for women - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 49,
      "name": "Agua de Rocío - Victorio & Lucchino",
      "category": "mujer"
    },
    {
      "id": 50,
      "name": "Dolce - Dolce & Gabbana",
      "category": "mujer"
    },
    {
      "id": 51,
      "name": "Aura - Loewe",
      "category": "mujer"
    },
    {
      "id": 52,
      "name": "Just Cavalli",
      "category": "mujer"
    },
    {
      "id": 53,
      "name": "Tommy Girl",
      "category": "mujer"
    },
    {
      "id": 54,
      "name": "Paula´s Ibiza - Loewe",
      "category": "mujer"
    },
    {
      "id": 80,
      "name": "Flower - Kenzo",
      "category": "mujer"
    },
    {
      "id": 81,
      "name": "Black XS - Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 82,
      "name": "Alien - Thierry Mugler",
      "category": "mujer"
    },
    {
      "id": 83,
      "name": "Cool water Davidof",
      "category": "mujer"
    },
    {
      "id": 84,
      "name": "Valentina - Valentino",
      "category": "mujer"
    },
    {
      "id": 85,
      "name": "Burberry",
      "category": "mujer"
    },
    {
      "id": 86,
      "name": "Boss ma vie - Hugo Boss",
      "category": "mujer"
    },
    {
      "id": 87,
      "name": "Rush - Gucci",
      "category": "mujer"
    },
    {
      "id": 88,
      "name": "Lou lou - Cacharel",
      "category": "mujer"
    },
    {
      "id": 89,
      "name": "Paris - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 100,
      "name": "Empori Armani",
      "category": "mujer"
    },
    {
      "id": 101,
      "name": "Amor amor - Cacharel",
      "category": "mujer"
    },
    {
      "id": 102,
      "name": "Poême - Lancôme",
      "category": "mujer"
    },
    {
      "id": 103,
      "name": "Lolita Lempicka",
      "category": "mujer"
    },
    {
      "id": 104,
      "name": "Omnia crystalline - Bvlgari",
      "category": "mujer"
    },
    {
      "id": 105,
      "name": "Mademoiselle - Coco Chanel",
      "category": "mujer"
    },
    {
      "id": 106,
      "name": "Ralph - Ralph Lauren",
      "category": "mujer"
    },
    {
      "id": 107,
      "name": "Tabacco vanille - Tom Ford",
      "category": "mujer"
    },
    {
      "id": 108,
      "name": "Poison -  Christian Dior",
      "category": "mujer"
    },
    {
      "id": 109,
      "name": "Elle - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 110,
      "name": "Pure musc - Narciso Rodríguez",
      "category": "mujer"
    },
    {
      "id": 111,
      "name": "Dior addict - Christian Dior",
      "category": "mujer"
    },
    {
      "id": 112,
      "name": "Alien goddess - Thierry Mugler",
      "category": "mujer"
    },
    {
      "id": 113,
      "name": "Touch of pink - Lacoste",
      "category": "mujer"
    },
    {
      "id": 114,
      "name": "Gucci guilty",
      "category": "mujer"
    },
    {
      "id": 115,
      "name": "Angel nova - Thierry Mugler",
      "category": "mujer"
    },
    {
      "id": 116,
      "name": "Eden - Cacharel",
      "category": "mujer"
    },
    {
      "id": 117,
      "name": "Mon - Guerlain",
      "category": "mujer"
    },
    {
      "id": 118,
      "name": "Halloween - Jesús del Pozo",
      "category": "mujer"
    },
    {
      "id": 119,
      "name": "Ángel schlesser femme",
      "category": "mujer"
    },
    {
      "id": 120,
      "name": "This is her - Zadig & Voltire",
      "category": "mujer"
    },
    {
      "id": 121,
      "name": "212 VIP - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 122,
      "name": "Olympea - Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 123,
      "name": "Narciso Rodríguez for her",
      "category": "mujer"
    },
    {
      "id": 124,
      "name": "Pure poison - Dior",
      "category": "mujer"
    },
    {
      "id": 125,
      "name": "Because it`s you - Emporio Armani",
      "category": "mujer"
    },
    {
      "id": 126,
      "name": "Bright crystal - Versace",
      "category": "mujer"
    },
    {
      "id": 127,
      "name": "Fantasy - Britney Spears",
      "category": "mujer"
    },
    {
      "id": 128,
      "name": "212 Héroes forever young - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 129,
      "name": "Euphoria - Calvin Klein",
      "category": "mujer"
    },
    {
      "id": 130,
      "name": "Bvlgari pour femme - Bvlgari",
      "category": "mujer"
    },
    {
      "id": 133,
      "name": "Nina - Nina Ricci",
      "category": "mujer"
    },
    {
      "id": 134,
      "name": "The one - Dolce & Gabbana",
      "category": "mujer"
    },
    {
      "id": 135,
      "name": "Crystal noir - Versace",
      "category": "mujer"
    },
    {
      "id": 137,
      "name": "Agua fresca de rosas - Adolfo Domínguez",
      "category": "mujer"
    },
    {
      "id": 138,
      "name": "Be delicious - DKNY",
      "category": "mujer"
    },
    {
      "id": 139,
      "name": "Clinique happy",
      "category": "mujer"
    },
    {
      "id": 142,
      "name": "Armani code femme - Giorgio Armani",
      "category": "mujer"
    },
    {
      "id": 143,
      "name": "My way - Giorgio Armani",
      "category": "mujer"
    },
    {
      "id": 146,
      "name": "Libre - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 147,
      "name": "Duchess rose - Penhaligon's",
      "category": "mujer"
    },
    {
      "id": 149,
      "name": "Lady million - Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 150,
      "name": "Tous",
      "category": "mujer"
    },
    {
      "id": 151,
      "name": "La nuit de trésor - Lancôme",
      "category": "mujer"
    },
    {
      "id": 152,
      "name": "Black opium - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 153,
      "name": "Eau Sensuelle - Rochas",
      "category": "mujer"
    },
    {
      "id": 154,
      "name": "Magnetism - Escada",
      "category": "mujer"
    },
    {
      "id": 155,
      "name": "Infusión d'iris - Prada",
      "category": "mujer"
    },
    {
      "id": 156,
      "name": "Chance - Chanel",
      "category": "mujer"
    },
    {
      "id": 157,
      "name": "Insolence - Guerlain",
      "category": "mujer"
    },
    {
      "id": 158,
      "name": "Versace pour femme",
      "category": "mujer"
    },
    {
      "id": 159,
      "name": "Love story - Chloé",
      "category": "mujer"
    },
    {
      "id": 160,
      "name": "Roberto Cavalli",
      "category": "mujer"
    },
    {
      "id": 161,
      "name": "Cheapandchic - Mochino",
      "category": "mujer"
    },
    {
      "id": 162,
      "name": "Aura Mugler",
      "category": "mujer"
    },
    {
      "id": 163,
      "name": "The only one - Dolce & Gabbana",
      "category": "mujer"
    },
    {
      "id": 164,
      "name": "Miss chérie - Christian Dior",
      "category": "mujer"
    },
    {
      "id": 165,
      "name": "La vie est belle - Lancôme",
      "category": "mujer"
    },
    {
      "id": 166,
      "name": "Acqua di gioia essenza - Giorgio Armani",
      "category": "mujer"
    },
    {
      "id": 167,
      "name": "Un jardin sur le nil - Hermès",
      "category": "mujer"
    },
    {
      "id": 168,
      "name": "Manifesto - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 169,
      "name": "Escale à portofino - Christian Dior",
      "category": "mujer"
    },
    {
      "id": 170,
      "name": "Hypnotic poison - Dior",
      "category": "mujer"
    },
    {
      "id": 171,
      "name": "Narciso ambrée - Narciso Rodríguez",
      "category": "mujer"
    },
    {
      "id": 172,
      "name": "L`imperatrice - D&G",
      "category": "mujer"
    },
    {
      "id": 173,
      "name": "Alive- Hugo Boss",
      "category": "mujer"
    },
    {
      "id": 174,
      "name": "Solo - Loewe",
      "category": "mujer"
    },
    {
      "id": 175,
      "name": "Voce viva - Valentino",
      "category": "mujer"
    },
    {
      "id": 176,
      "name": "212 sexy - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 177,
      "name": "Sí - Giorgio Armani",
      "category": "mujer"
    },
    {
      "id": 178,
      "name": "La Panthére - Cartier",
      "category": "mujer"
    },
    {
      "id": 179,
      "name": "Pink sugar",
      "category": "mujer"
    },
    {
      "id": 180,
      "name": "Daisy - Marc Jacob",
      "category": "mujer"
    },
    {
      "id": 181,
      "name": "Love - Chloé",
      "category": "mujer"
    },
    {
      "id": 182,
      "name": "Essence - Narciso Rodríguez",
      "category": "mujer"
    },
    {
      "id": 183,
      "name": "Agua del sol - Escada",
      "category": "mujer"
    },
    {
      "id": 184,
      "name": "Decadence - Marc Jacobs",
      "category": "mujer"
    },
    {
      "id": 185,
      "name": "Good girl - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 186,
      "name": "Boss woman - Hugo Boss",
      "category": "mujer"
    },
    {
      "id": 187,
      "name": "Luna - Nina Ricci",
      "category": "mujer"
    },
    {
      "id": 188,
      "name": "Mon Paris - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 189,
      "name": "Very good girl - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 190,
      "name": "Fiesta carioca - Escada",
      "category": "mujer"
    },
    {
      "id": 191,
      "name": "Mademoiselle - Rochas",
      "category": "mujer"
    },
    {
      "id": 192,
      "name": "Eros pour femme - Versace",
      "category": "mujer"
    },
    {
      "id": 193,
      "name": "Versence - Versace",
      "category": "mujer"
    },
    {
      "id": 194,
      "name": "Scandal - Jean Paul Gaultier",
      "category": "mujer"
    },
    {
      "id": 195,
      "name": "Gabrielle - Chanel",
      "category": "mujer"
    },
    {
      "id": 196,
      "name": "Kenzo world",
      "category": "mujer"
    },
    {
      "id": 197,
      "name": "Bloom - Gucci",
      "category": "mujer"
    },
    {
      "id": 198,
      "name": "Sorbetto rosso - Escada",
      "category": "mujer"
    },
    {
      "id": 199,
      "name": "Yes I am - Cacharel",
      "category": "mujer"
    },
    {
      "id": 400,
      "name": "Nomade - Chloé",
      "category": "mujer"
    },
    {
      "id": 401,
      "name": "Your moments",
      "category": "mujer"
    },
    {
      "id": 402,
      "name": "Narciso Rouge",
      "category": "mujer"
    },
    {
      "id": 403,
      "name": "Joy dior - Christian Dior",
      "category": "mujer"
    },
    {
      "id": 404,
      "name": "Pure XS woman - Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 405,
      "name": "Trussardi",
      "category": "mujer"
    },
    {
      "id": 406,
      "name": "Si passione - Giorgio Armani",
      "category": "mujer"
    },
    {
      "id": 407,
      "name": "Love in white - Creed",
      "category": "mujer"
    },
    {
      "id": 408,
      "name": "Idôle - Lancôme",
      "category": "mujer"
    },
    {
      "id": 409,
      "name": "La belle - Jean Paul Gaultier",
      "category": "mujer"
    },
    {
      "id": 410,
      "name": "Wanted girl - Azzaro",
      "category": "mujer"
    },
    {
      "id": 411,
      "name": "Fleur musc - Narciso Rodriguez",
      "category": "mujer"
    },
    {
      "id": 412,
      "name": "Juicy Flowers",
      "category": "mujer"
    },
    {
      "id": 413,
      "name": "Neroli Portofino - Tom Ford",
      "category": "mujer"
    },
    {
      "id": 414,
      "name": "Tom Ford - Black orchid",
      "category": "mujer"
    },
    {
      "id": 415,
      "name": "Soleil Blanc - Tom Ford",
      "category": "mujer"
    },
    {
      "id": 416,
      "name": "Cherry in japan - Escada",
      "category": "mujer"
    },
    {
      "id": 417,
      "name": "Loveme - Tous",
      "category": "mujer"
    },
    {
      "id": 418,
      "name": "Ginza Shiseido",
      "category": "mujer"
    },
    {
      "id": 419,
      "name": "Very good girl glam - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 420,
      "name": "Fame - Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 421,
      "name": "Paradoxe - Prada",
      "category": "mujer"
    },
    {
      "id": 424,
      "name": "Flora goegeuous gardenia - Gucci",
      "category": "mujer"
    },
    {
      "id": 427,
      "name": "Nina extra rouge - Nina Ricci",
      "category": "mujer"
    },
    {
      "id": 428,
      "name": "Velvet rose & oud - Jo Malone",
      "category": "mujer"
    },
    {
      "id": 431,
      "name": "Quizás - Loewe",
      "category": "mujer"
    },
    {
      "id": 433,
      "name": "Ricci Ricci",
      "category": "mujer"
    },
    {
      "id": 434,
      "name": "Jasmin noir - Bvlgari",
      "category": "mujer"
    },
    {
      "id": 435,
      "name": "Elizabeth Arden - 5th Avenue",
      "category": "mujer"
    },
    {
      "id": 436,
      "name": "Elie Saab",
      "category": "mujer"
    },
    {
      "id": 437,
      "name": "La petite - Guerlain",
      "category": "mujer"
    },
    {
      "id": 438,
      "name": "Very irresistible - Givenchy",
      "category": "mujer"
    },
    {
      "id": 439,
      "name": "Jimmy Choo",
      "category": "mujer"
    },
    {
      "id": 440,
      "name": "Girl Rochas",
      "category": "mujer"
    },
    {
      "id": 441,
      "name": "Dolce vita - Dior",
      "category": "mujer"
    },
    {
      "id": 442,
      "name": "Acqua di parma",
      "category": "mujer"
    },
    {
      "id": 443,
      "name": "Q - Dolce & Gabbana",
      "category": "mujer"
    },
    {
      "id": 444,
      "name": "Rive gauche - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 445,
      "name": "Le Labo Santal 33",
      "category": "mujer"
    },
    {
      "id": 446,
      "name": "Intense Red Tobacco Extrait de Parfum - Mancera",
      "category": "mujer"
    },
    {
      "id": 447,
      "name": "Khaltat night attar",
      "category": "mujer"
    },
    {
      "id": 449,
      "name": "Baiser Vole - Cartier",
      "category": "mujer"
    },
    {
      "id": 450,
      "name": "Good girl blush - Carolina Herrera",
      "category": "mujer"
    },
    {
      "id": 451,
      "name": "Dylan purple - Versace",
      "category": "mujer"
    },
    {
      "id": 452,
      "name": "Gaultier Divine",
      "category": "mujer"
    },
    {
      "id": 453,
      "name": "Baccarat Rouge 540 - Francis Kurkdjian",
      "category": "mujer"
    },
    {
      "id": 454,
      "name": "Toy 2 - Mochino",
      "category": "mujer"
    },
    {
      "id": 456,
      "name": "Devotion - Dolce & Gabbana",
      "category": "mujer"
    },
    {
      "id": 457,
      "name": "Burberry Goddess",
      "category": "mujer"
    },
    {
      "id": 458,
      "name": "Rock in rio - Escada",
      "category": "mujer"
    },
    {
      "id": 459,
      "name": "Womanity - Thierry Mugler",
      "category": "mujer"
    },
    {
      "id": 460,
      "name": "All of me - Narciso Rodríguez",
      "category": "mujer"
    },
    {
      "id": 461,
      "name": "Loveme esmerald - Tous",
      "category": "mujer"
    },
    {
      "id": 463,
      "name": "Born in Roma - Valentino",
      "category": "mujer"
    },
    {
      "id": 491,
      "name": "Chance - Chanel",
      "category": "mujer"
    },
    {
      "id": 493,
      "name": "Olympea - Paco Rabanne",
      "category": "mujer"
    },
    {
      "id": 494,
      "name": "Eau So Sexy",
      "category": "mujer"
    },
    {
      "id": 527,
      "name": "Born In Roma Donna - Valentino",
      "category": "mujer"
    },
    {
      "id": 557,
      "name": "Yara",
      "category": "mujer"
    },
    {
      "id": 607,
      "name": "Aventus for her - Creed",
      "category": "mujer"
    },
    {
      "id": 610,
      "name": "X for women - Clive Christian",
      "category": "mujer"
    },
    {
      "id": 612,
      "name": "Parisienne - Yves Saint Laurent",
      "category": "mujer"
    },
    {
      "id": 615,
      "name": "Twilly D'Hermès",
      "category": "mujer"
    },
    {
      "id": 618,
      "name": "Delina parfums - Marly",
      "category": "mujer"
    },
    {
      "id": 2,
      "name": "CK one - Calvin Klein",
      "category": "hombre"
    },
    {
      "id": 5,
      "name": "Esencia - Loewe",
      "category": "hombre"
    },
    {
      "id": 7,
      "name": "Herrera for men - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 9,
      "name": "Paco Rabanne pour homme",
      "category": "hombre"
    },
    {
      "id": 10,
      "name": "Eternity for men - Calvin Klein",
      "category": "hombre"
    },
    {
      "id": 12,
      "name": "XS - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 15,
      "name": "Agua fresca - Adolfo Domínguez",
      "category": "hombre"
    },
    {
      "id": 17,
      "name": "212 VIP men - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 19,
      "name": "Hugo Boss",
      "category": "hombre"
    },
    {
      "id": 23,
      "name": "Acqua di gio men - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 29,
      "name": "Le male - Jean Paul Gaultier",
      "category": "hombre"
    },
    {
      "id": 35,
      "name": "Angel men - Thierry Mugler",
      "category": "hombre"
    },
    {
      "id": 36,
      "name": "Ultraviolet man - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 55,
      "name": "Polo Red - Ralph Lauren",
      "category": "hombre"
    },
    {
      "id": 56,
      "name": "L´homme - Yves Saint Laurent",
      "category": "hombre"
    },
    {
      "id": 57,
      "name": "Dolce Gabbana pour homme",
      "category": "hombre"
    },
    {
      "id": 58,
      "name": "Allure homme sport - Chanel",
      "category": "hombre"
    },
    {
      "id": 59,
      "name": "Emporio - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 60,
      "name": "Uomo brown - Valentino",
      "category": "hombre"
    },
    {
      "id": 61,
      "name": "CH men - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 62,
      "name": "Oud wood - Tom Ford",
      "category": "hombre"
    },
    {
      "id": 63,
      "name": "Scandal pour homme - Jean Paul Gaultier",
      "category": "hombre"
    },
    {
      "id": 64,
      "name": "Style in play - Lacoste",
      "category": "hombre"
    },
    {
      "id": 65,
      "name": "Polo blue - Ralph Lauren",
      "category": "hombre"
    },
    {
      "id": 66,
      "name": "Bambú - Adolfo Domínguez",
      "category": "hombre"
    },
    {
      "id": 67,
      "name": "Roberto Cavalli",
      "category": "hombre"
    },
    {
      "id": 68,
      "name": "Black XS - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 69,
      "name": "Dior homme - Christian Dior",
      "category": "hombre"
    },
    {
      "id": 70,
      "name": "Bleu - Chanel",
      "category": "hombre"
    },
    {
      "id": 71,
      "name": "Euphoria men - Calvin Klein",
      "category": "hombre"
    },
    {
      "id": 72,
      "name": "Acqua di gio profumo - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 73,
      "name": "7 - Loewe",
      "category": "hombre"
    },
    {
      "id": 74,
      "name": "Tommy - Tommy Hilfiger",
      "category": "hombre"
    },
    {
      "id": 75,
      "name": "Aventus - Creed",
      "category": "hombre"
    },
    {
      "id": 76,
      "name": "Armani pour homme - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 77,
      "name": "Bad boy - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 78,
      "name": "London for men - Burberry",
      "category": "hombre"
    },
    {
      "id": 79,
      "name": "Polo sport - Ralph Lauren",
      "category": "hombre"
    },
    {
      "id": 90,
      "name": "Opium pour homme - Yves Saint Laurent",
      "category": "hombre"
    },
    {
      "id": 91,
      "name": "The one for men - Docle & Gabbana",
      "category": "hombre"
    },
    {
      "id": 92,
      "name": "Rochas man",
      "category": "hombre"
    },
    {
      "id": 93,
      "name": "Allure homme - Chanel",
      "category": "hombre"
    },
    {
      "id": 94,
      "name": "Farenheit dior de Christian Dior",
      "category": "hombre"
    },
    {
      "id": 95,
      "name": "Light blue pour homme - Dolce & Gabbana",
      "category": "hombre"
    },
    {
      "id": 96,
      "name": "Kenzo homme",
      "category": "hombre"
    },
    {
      "id": 97,
      "name": "Only the brave - Diesel",
      "category": "hombre"
    },
    {
      "id": 98,
      "name": "Cool water - Davidoff",
      "category": "hombre"
    },
    {
      "id": 99,
      "name": "Spicebomb extreme - Viktor & Rolf",
      "category": "hombre"
    },
    {
      "id": 131,
      "name": "Platinum egoiste - Chanel",
      "category": "hombre"
    },
    {
      "id": 132,
      "name": "Bvlgari man - Bvlgari",
      "category": "hombre"
    },
    {
      "id": 136,
      "name": "Armani black - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 140,
      "name": "Solo - Loewe",
      "category": "hombre"
    },
    {
      "id": 141,
      "name": "L'Eau D'Issey Pour Homme - Issey Miyake",
      "category": "hombre"
    },
    {
      "id": 144,
      "name": "For him - Narciso Rodríguez",
      "category": "hombre"
    },
    {
      "id": 145,
      "name": "Fuel for life - Diesel",
      "category": "hombre"
    },
    {
      "id": 148,
      "name": "One million - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 200,
      "name": "Kokorico Jean Paul Gaultier",
      "category": "hombre"
    },
    {
      "id": 201,
      "name": "Armani Mania Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 202,
      "name": "Boss - Hugo Boss",
      "category": "hombre"
    },
    {
      "id": 203,
      "name": "Egoiste pour homme - Chanel",
      "category": "hombre"
    },
    {
      "id": 204,
      "name": "Gucci guilty pour homme parfum - Gucci",
      "category": "hombre"
    },
    {
      "id": 205,
      "name": "212 men - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 206,
      "name": "Phantom - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 207,
      "name": "Eau de rochas - Rochas",
      "category": "hombre"
    },
    {
      "id": 208,
      "name": "Invictus victory - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 209,
      "name": "Boss orange - Hugo Boss",
      "category": "hombre"
    },
    {
      "id": 210,
      "name": "Terre d'Hermes",
      "category": "hombre"
    },
    {
      "id": 211,
      "name": "Cacharel pour homme",
      "category": "hombre"
    },
    {
      "id": 212,
      "name": "212 men - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 213,
      "name": "Luna Rosa - Prada",
      "category": "hombre"
    },
    {
      "id": 214,
      "name": "Code - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 215,
      "name": "Invictus - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 216,
      "name": "Fiierce cologne abercroimbe",
      "category": "hombre"
    },
    {
      "id": 218,
      "name": "212 Héroes",
      "category": "hombre"
    },
    {
      "id": 219,
      "name": "The Scent Boss - Hugo Boss",
      "category": "hombre"
    },
    {
      "id": 220,
      "name": "Ultra male - Jean Paul Gaultier",
      "category": "hombre"
    },
    {
      "id": 221,
      "name": "Eau sauvage - Christian Dior",
      "category": "hombre"
    },
    {
      "id": 222,
      "name": "Sauvage - Christian Dior",
      "category": "hombre"
    },
    {
      "id": 223,
      "name": "Bad - Diesel",
      "category": "hombre"
    },
    {
      "id": 225,
      "name": "Eros - Versace",
      "category": "hombre"
    },
    {
      "id": 226,
      "name": "Pure XS homme - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 227,
      "name": "Y - Yves Saint Laurent",
      "category": "hombre"
    },
    {
      "id": 229,
      "name": "Stronger with you - Emporio Armani",
      "category": "hombre"
    },
    {
      "id": 230,
      "name": "One million lucky - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 231,
      "name": "CH Prive - Carolina Herrera",
      "category": "hombre"
    },
    {
      "id": 232,
      "name": "Explorer - Montblanc",
      "category": "hombre"
    },
    {
      "id": 233,
      "name": "K - Dolce & Gabbana",
      "category": "hombre"
    },
    {
      "id": 234,
      "name": "Le bleau - Jean Paul Gautier",
      "category": "hombre"
    },
    {
      "id": 235,
      "name": "Bleu noir - Narciso Rodriguez",
      "category": "hombre"
    },
    {
      "id": 236,
      "name": "Tom Ford noir extreme",
      "category": "hombre"
    },
    {
      "id": 237,
      "name": "Tom Ford ombré leather",
      "category": "hombre"
    },
    {
      "id": 238,
      "name": "Gucci FNVY",
      "category": "hombre"
    },
    {
      "id": 239,
      "name": "Escada pour homme",
      "category": "hombre"
    },
    {
      "id": 240,
      "name": "Mochino Toy Boy",
      "category": "hombre"
    },
    {
      "id": 241,
      "name": "Valentino",
      "category": "hombre"
    },
    {
      "id": 243,
      "name": "Loewe atlas- Solo",
      "category": "hombre"
    },
    {
      "id": 245,
      "name": "Attitude - Giorgio Armani",
      "category": "hombre"
    },
    {
      "id": 246,
      "name": "212 sexy men",
      "category": "hombre"
    },
    {
      "id": 247,
      "name": "XY Hugo",
      "category": "hombre"
    },
    {
      "id": 248,
      "name": "Bvlgari - Aqva",
      "category": "hombre"
    },
    {
      "id": 249,
      "name": "Boss night - Hugo Boss",
      "category": "hombre"
    },
    {
      "id": 250,
      "name": "La nuit l´homme - Yves Saint Laurent",
      "category": "hombre"
    },
    {
      "id": 251,
      "name": "Cartier declaration",
      "category": "hombre"
    },
    {
      "id": 252,
      "name": "This is him - Zadig & voltaire",
      "category": "hombre"
    },
    {
      "id": 253,
      "name": "Stronger with you absolutely",
      "category": "hombre"
    },
    {
      "id": 257,
      "name": "Initio - Oud for greatness",
      "category": "hombre"
    },
    {
      "id": 259,
      "name": "Boss bottled elixir - Hugo Boss",
      "category": "hombre"
    },
    {
      "id": 260,
      "name": "Uomo born in Roma green extravaganza - Valentino",
      "category": "hombre"
    },
    {
      "id": 261,
      "name": "Uomo born in Roma black - Valentino",
      "category": "hombre"
    },
    {
      "id": 262,
      "name": "One million elixir - Paco Rabanne",
      "category": "hombre"
    },
    {
      "id": 263,
      "name": "Jean Paul Gaultier - Le male elixir",
      "category": "hombre"
    },
    {
      "id": 264,
      "name": "Sauvage - Dior",
      "category": "hombre"
    },
    {
      "id": 453,
      "name": "Baccarat Rouge 540 - Francis Kurkdjian",
      "category": "hombre"
    },
    {
      "id": 300,
      "name": "Baby Tous",
      "category": "infantil"
    },
    {
      "id": 301,
      "name": "Burberry",
      "category": "infantil"
    },
    {
      "id": 302,
      "name": "Tartine & Chocolat",
      "category": "infantil"
    },
    {
      "id": 304,
      "name": "Petits et mamans",
      "category": "infantil"
    },
    {
      "id": 376,
      "name": "Petite chèrie",
      "category": "infantil"
    },
    {
      "id": 377,
      "name": "Baby cologne",
      "category": "infantil"
    }
  ];

// Inicializar la tabla con datos del JSON
$('#table').bootstrapTable({
    data: jsonData
});

// Obtener categorías únicas para crear las pestañas
const categories = [...new Set(jsonData.map(item => item.category))];

// Generar botones dinámicamente
categories.forEach(category => {
    $('.nav').append(`
        <li class="nav-item"><a class="nav-link mx-2 text-uppercase" href="#" data-category="${category}">${category}</a></li>
    `);
});

// Manejar clic en botones para filtrar la tabla
$('.navbar-nav').on('click', 'a', function() {
    $(".navbar-nav a").removeClass("active");
    $(this).addClass("active");
    const category = $(this).data('category');
    let filteredData = jsonData;
    if (category !== 'all') {
        filteredData = jsonData.filter(item => item.category === category);
    }
    $('#table-title').text(`Perfumes de ${category}`);
    $('#table').bootstrapTable('load', filteredData);
});

$('#search-input').on('input', function() {
    const searchText = $(this).val().toLowerCase();
    const filteredData = jsonData.filter(item =>
        item.name.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText)
    );
    $('#table').bootstrapTable('load', filteredData);
});

function customView(data) {
    var template = $('#template').html()
    var view = ''
    $.each(data, function (i, row) {
        view += template.replaceAll('%ID%', row.id)
        .replace('%NAME%', row.name)
        .replace('%CATEGORY%', row.category)
    })

return `<div class="row mx-0">${view}</div>`
}

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
