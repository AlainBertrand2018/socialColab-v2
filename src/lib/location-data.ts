
export const mauritianDistricts = [
    {
      "district": "Black River",
      "villages": ["Albion", "Bambous", "Cascavelle", "Flic-en-Flac", "Grande Rivière Noire", "Gros Cailloux", "La Gaulette", "Le Morne", "Petite Rivière Noire", "Tamarin"]
    },
    {
      "district": "Flacq",
      "villages": ["Bel Air Rivière Sèche", "Bon Accueil", "Bramsthan", "Camp de Masque Pavé", "Camp Ithier", "Centre de Flacq", "Clémencia", "Écroignard", "Grande Retraite", "Lalmatie", "Laventure", "Mare La Chaux", "Olivia", "Poste de Flacq", "Quatre Cocos", "Queen Victoria", "Saint Julien", "Sébastopol", "Trou d'Eau Douce"]
    },
    {
      "district": "Grand Port",
      "villages": ["Bambous Virieux", "Beau Vallon", "Bois des Amourettes", "Camp Carol", "Cluny", "Grand Sable", "L'Escalier", "Mahébourg", "Mare d'Albert", "Mare Tabac", "New Grove", "Nouvelle France", "Old Grand Port", "Petit Bel Air", "Plaine Magnien", "Rose Belle", "Saint Hubert", "Trois Boutiques (Union Vale)"]
    },
    {
      "district": "Moka",
      "villages": ["Camp Thorel", "Dagotière", "Dubreuil", "Espérance", "La Laura-Malenga", "L'Avenir", "Moka", "Montagne Ory", "Pailles", "Providence", "Quartier Militaire", "Saint Pierre", "Verdun"]
    },
    {
      "district": "Pamplemousses",
      "villages": ["Arsenal", "Baie du Tombeau", "Calebasses", "Congomah", "Crève Coeur", "D'Épinay", "Fond du Sac", "Le Hochet", "Long Mountain", "Morcellement Saint-André", "Notre Dame", "Pamplemousses", "Piton", "Plaine des Papayes", "Pointe-aux-Piments", "Terre Rouge", "Triolet", "Trou-aux-Biches", "Villebague"]
    },
    {
      "district": "Plaines Wilhems",
      "villages": ["Beau Bassin-Rose Hill", "Curepipe", "Quatre Bornes", "Vacoas-Phoenix"]
    },
    {
      "district": "Port Louis",
      "villages": ["Port Louis"]
    },
    {
      "district": "Rivière du Rempart",
      "villages": ["Amaury", "Amitié-Gokhoola", "Belle Vue Harel", "Cap Malheureux", "Cottage", "Espérance Trébuchet", "Goodlands", "Grand Baie", "Grand Gaube", "Mapou", "Petit Raffray", "Poudre d'Or", "Roches Noires", "The Vale"]
    },
    {
      "district": "Savanne",
      "villages": ["Baie du Cap", "Bel Ombre", "Bénarès", "Bois Chéri", "Britannia", "Camp Diable", "Chamouny", "Chemin Grenier", "Grand Bois", "Gris-Gris", "La Flora", "Rivière des Anguilles", "Rivière du Poste", "Saint Aubin", "Souillac", "Surinam"]
    }
];

export const allMauritianVillages = mauritianDistricts.flatMap(district => district.villages).sort();
