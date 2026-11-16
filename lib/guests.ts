export type Guest = { name: string; allowed: number }

export const WHATSAPP_NUMBER = '34624510365'
export const WEDDING_DATE_ISO = '2027-12-18T18:00:00-05:00'

export const guestGroups: Record<string, Guest> = {
  alejandro: { name: 'Tío Alejandro y Mariela', allowed: 2 },
  lucho: { name: 'Lucho', allowed: 2 },
  arturo: { name: 'Tío Arturo, Navis y Andrés', allowed: 3 },
  marina: { name: 'Nona Marina y Gustavo', allowed: 2 },
  graciela: { name: 'Nona Graciela', allowed: 2 },
  emilcen: { name: 'Tía Emilcen y Geraldo', allowed: 2 },
  yaya: { name: 'Yaya, Angie y sus dos hijas', allowed: 4 },
  diana: { name: 'Diana', allowed: 4 },
  yasmin: { name: 'Yasmín', allowed: 5 },
  elsa: { name: 'Tía Elsa y Nubia', allowed: 3 },
  papa: { name: 'Papá', allowed: 2 },
  mama: { name: 'Mamá y Martín', allowed: 3 },
  edelmira: { name: 'Nona Edelmira y Nono Germán', allowed: 2 },
  claudia: { name: 'Tía Claudia y Arnulfo', allowed: 4 },
  hasslyn: { name: 'Hasslyn', allowed: 3 },
  adriana: { name: 'Adriana', allowed: 4 },
  madrina: { name: 'Madrina y Javier', allowed: 3 },
  marcela: { name: 'Marcela y Felipe', allowed: 2 },
  laura: { name: 'Laura', allowed: 2 },
  xavier: { name: 'Xavier y Diana', allowed: 4 },
  vijagual: { name: 'Vijagual', allowed: 2 },
  maria: { name: 'María y Saray', allowed: 2 },
  mateo: { name: 'Mateo', allowed: 2 },
  natalia: { name: 'Natalia y Alejo', allowed: 3 },
  jaime: { name: 'Jaime', allowed: 2 },
  doris: { name: 'Doris y Antonio', allowed: 2 },
  yanet: { name: 'Yanet', allowed: 2 },
  jairo: { name: 'Jairo', allowed: 2 },
  yanira: { name: 'Yanira', allowed: 4 },
  leonardo: { name: 'Leonardo', allowed: 1 },
  esteban: { name: 'Esteban y Sara', allowed: 2 },
  gilberto: { name: 'Nona y Gilberto', allowed: 2 },
  yake: { name: 'Yake', allowed: 3 },
  fabian: { name: 'Fabián y Aleja', allowed: 2 },
  jaimito: { name: 'Jaimito', allowed: 2 },
  isaac: { name: 'Isaac y Daniel', allowed: 2 },
  david: { name: 'David', allowed: 2 },
  roncha: { name: 'Roncha', allowed: 2 },
  mariana: { name: 'Mariana', allowed: 3 },
  lela: { name: 'Lela', allowed: 3 },
  manuel: { name: 'Manuel', allowed: 1 },
  patricia: { name: 'Patricia', allowed: 2 },
  yamile: { name: 'Yamile', allowed: 2 },
  mari: { name: 'Mari', allowed: 1 },
  paola: { name: 'Paola', allowed: 3 },
  yurani: { name: 'Yurani', allowed: 2 },
}

export function getGuest(id: string | undefined): Guest | null {
  if (!id) return null
  return Object.hasOwn(guestGroups, id) ? guestGroups[id] : null
}
