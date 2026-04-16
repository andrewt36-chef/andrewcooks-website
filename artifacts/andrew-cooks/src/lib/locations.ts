export interface Location {
  slug: string;
  name: string;
  region: string;
}

export const ALL_LOCATIONS: Location[] = [
  // North Essex & Uttlesford (core area)
  { slug: "saffron-walden",        name: "Saffron Walden",        region: "North Essex" },
  { slug: "great-dunmow",          name: "Great Dunmow",          region: "North Essex" },
  { slug: "stansted-mountfitchet", name: "Stansted Mountfitchet", region: "North Essex" },
  { slug: "newport",               name: "Newport",               region: "North Essex" },
  { slug: "great-chesterford",     name: "Great Chesterford",     region: "North Essex" },
  { slug: "takeley",               name: "Takeley",               region: "North Essex" },
  { slug: "thaxted",               name: "Thaxted",               region: "North Essex" },
  { slug: "elsenham",              name: "Elsenham",              region: "North Essex" },
  { slug: "henham",                name: "Henham",                region: "North Essex" },
  { slug: "manuden",               name: "Manuden",               region: "North Essex" },
  { slug: "ugley",                 name: "Ugley",                 region: "North Essex" },
  { slug: "berden",                name: "Berden",                region: "North Essex" },
  { slug: "farnham",               name: "Farnham",               region: "North Essex" },
  { slug: "widdington",            name: "Widdington",            region: "North Essex" },
  { slug: "debden",                name: "Debden",                region: "North Essex" },
  { slug: "wendens-ambo",          name: "Wendens Ambo",          region: "North Essex" },
  { slug: "littlebury",            name: "Littlebury",            region: "North Essex" },
  { slug: "arkesden",              name: "Arkesden",              region: "North Essex" },
  { slug: "wicken-bonhunt",        name: "Wicken Bonhunt",        region: "North Essex" },
  { slug: "quendon",               name: "Quendon",               region: "North Essex" },
  { slug: "chrishall",             name: "Chrishall",             region: "North Essex" },
  { slug: "great-easton",          name: "Great Easton",          region: "North Essex" },
  { slug: "braintree",             name: "Braintree",             region: "North Essex" },
  { slug: "chelmsford",            name: "Chelmsford",            region: "North Essex" },
  { slug: "harlow",                name: "Harlow",                region: "North Essex" },

  // Cambridgeshire
  { slug: "cambridge",             name: "Cambridge",             region: "Cambridgeshire" },
  { slug: "great-shelford",        name: "Great Shelford",        region: "Cambridgeshire" },
  { slug: "little-shelford",       name: "Little Shelford",       region: "Cambridgeshire" },
  { slug: "trumpington",           name: "Trumpington",           region: "Cambridgeshire" },
  { slug: "hauxton",               name: "Hauxton",               region: "Cambridgeshire" },
  { slug: "sawston",               name: "Sawston",               region: "Cambridgeshire" },
  { slug: "duxford",               name: "Duxford",               region: "Cambridgeshire" },
  { slug: "hinxton",               name: "Hinxton",               region: "Cambridgeshire" },
  { slug: "ickleton",              name: "Ickleton",              region: "Cambridgeshire" },
  { slug: "royston",               name: "Royston",               region: "Cambridgeshire" },

  // Hertfordshire
  { slug: "bishops-stortford",     name: "Bishop's Stortford",    region: "Hertfordshire" },
  { slug: "sawbridgeworth",        name: "Sawbridgeworth",        region: "Hertfordshire" },
  { slug: "ware",                  name: "Ware",                  region: "Hertfordshire" },
  { slug: "stevenage",             name: "Stevenage",             region: "Hertfordshire" },
  { slug: "hertford",              name: "Hertford",              region: "Hertfordshire" },
  { slug: "buntingford",           name: "Buntingford",           region: "Hertfordshire" },
  { slug: "puckeridge",            name: "Puckeridge",            region: "Hertfordshire" },
  { slug: "much-hadham",           name: "Much Hadham",           region: "Hertfordshire" },
  { slug: "furneux-pelham",        name: "Furneux Pelham",        region: "Hertfordshire" },
  { slug: "barkway",               name: "Barkway",               region: "Hertfordshire" },
  { slug: "barley",                name: "Barley",                region: "Hertfordshire" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return ALL_LOCATIONS.find((l) => l.slug === slug);
}

export const REGIONS = ["North Essex", "Cambridgeshire", "Hertfordshire"] as const;

export function getLocationsByRegion(region: string): Location[] {
  return ALL_LOCATIONS.filter((l) => l.region === region);
}
