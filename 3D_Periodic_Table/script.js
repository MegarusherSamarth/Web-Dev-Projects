const superscripts = {
  0: "⁰",
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹",
};

function toSuperscript(number) {
  return number
    .toString()
    .split("")
    .map((digit) => superscripts[digit] || digit)
    .join("");
}

// Periodic Table Data
const elements = [
  {
    number: 1,
    symbol: "H",
    name: "Hydrogen",
    mass: 1.008,
    category: "nonmetal",
    group: 1,
    period: 1,
    electron_configuration: "1s" + toSuperscript(1),
    electronegativity: 2.2,
  },
  {
    number: 2,
    symbol: "He",
    name: "Helium",
    mass: 4.0026,
    category: "noble-gas",
    group: 18,
    period: 1,
    electron_configuration: "1s" + toSuperscript(2),
    electronegativity: null,
  },
  {
    number: 3,
    symbol: "Li",
    name: "Lithium",
    mass: 6.94,
    category: "alkali-metal",
    group: 1,
    period: 2,
    electron_configuration: "[He] 2s" + toSuperscript(1),
    electronegativity: 0.98,
  },
  {
    number: 4,
    symbol: "Be",
    name: "Beryllium",
    mass: 9.0122,
    category: "alkaline-earth",
    group: 2,
    period: 2,
    electron_configuration: "[He] 2s" + toSuperscript(2),
    electronegativity: 1.57,
  },
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    mass: 10.81,
    category: "metalloid",
    group: 13,
    period: 2,
    electron_configuration:
      "[He] 2s" + toSuperscript(2) + " 2p" + toSuperscript(1),
    electronegativity: 2.04,
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    mass: 12.011,
    category: "nonmetal",
    group: 14,
    period: 2,
    electron_configuration:
      "[He] 2s" + toSuperscript(2) + " 2p" + toSuperscript(2),
    electronegativity: 2.55,
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    mass: 14.007,
    category: "nonmetal",
    group: 15,
    period: 2,
    electron_configuration:
      "[He] 2s" + toSuperscript(2) + " 2p" + toSuperscript(3),
    electronegativity: 3.04,
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    mass: 15.999,
    category: "nonmetal",
    group: 16,
    period: 2,
    electron_configuration:
      "[He] 2s" + toSuperscript(2) + " 2p" + toSuperscript(4),
    electronegativity: 3.44,
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    mass: 18.998,
    category: "halogen",
    group: 17,
    period: 2,
    electron_configuration:
      "[He] 2s" + toSuperscript(2) + " 2p" + toSuperscript(5),
    electronegativity: 3.98,
  },
  {
    number: 10,
    symbol: "Ne",
    name: "Neon",
    mass: 20.18,
    category: "noble-gas",
    group: 18,
    period: 2,
    electron_configuration:
      "[He] 2s" + toSuperscript(2) + " 2p" + toSuperscript(6),
    electronegativity: null,
  },
  {
    number: 11,
    symbol: "Na",
    name: "Sodium",
    mass: 22.99,
    category: "alkali-metal",
    group: 1,
    period: 3,
    electron_configuration: "[Ne] 3s" + toSuperscript(1),
    electronegativity: 0.93,
  },
  {
    number: 12,
    symbol: "Mg",
    name: "Magnesium",
    mass: 24.305,
    category: "alkaline-earth",
    group: 2,
    period: 3,
    electron_configuration: "[Ne] 3s" + toSuperscript(2),
    electronegativity: 1.31,
  },
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    mass: 26.982,
    category: "post-transition",
    group: 13,
    period: 3,
    electron_configuration: "[Ne] 3s² 3p¹",
    electronegativity: 1.61,
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    mass: 28.085,
    category: "metalloid",
    group: 14,
    period: 3,
    electron_configuration: "[Ne] 3s² 3p²",
    electronegativity: 1.9,
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    mass: 30.974,
    category: "nonmetal",
    group: 15,
    period: 3,
    electron_configuration: "[Ne] 3s² 3p³",
    electronegativity: 2.19,
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    mass: 32.06,
    category: "nonmetal",
    group: 16,
    period: 3,
    electron_configuration: "[Ne] 3s² 3p⁴",
    electronegativity: 2.58,
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    mass: 35.45,
    category: "halogen",
    group: 17,
    period: 3,
    electron_configuration: "[Ne] 3s² 3p⁵",
    electronegativity: 3.16,
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    mass: 39.948,
    category: "noble-gas",
    group: 18,
    period: 3,
    electron_configuration: "[Ne] 3s² 3p⁶",
    electronegativity: null,
  },
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    mass: 39.0983,
    category: "alkali-metal",
    group: 1,
    period: 4,
    electron_configuration: "[Ar] 4s" + toSuperscript(1),
    electronegativity: 0.82,
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    mass: 40.08,
    category: "alkaline-earth",
    group: 2,
    period: 4,
    electron_configuration: "[Ar] 4s" + toSuperscript(2),
    electronegativity: 1,
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    mass: 44.95591,
    category: "transition-metal",
    group: 3,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(1),
    electronegativity: 1.36,
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    mass: 47.867,
    category: "transition-metal",
    group: 4,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(2),
    electronegativity: 1.54,
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    mass: 50.9415,
    category: "transition-metal",
    group: 5,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(3),
    electronegativity: 1.63,
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    mass: 51.996,
    category: "transition-metal",
    group: 6,
    period: 4,
    electron_configuration:
      "[Ar] 3d" + toSuperscript(5) + " 4s" + toSuperscript(1),
    electronegativity: 1.66,
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    mass: 54.93804,
    category: "transition-metal",
    group: 7,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(5),
    electronegativity: 1.55,
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    mass: 55.84,
    category: "transition-metal",
    group: 8,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(6),
    electronegativity: 1.83,
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    mass: 58.93319,
    category: "transition-metal",
    group: 9,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(7),
    electronegativity: 1.88,
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    mass: 58.693,
    category: "transition-metal",
    group: 10,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(8),
    electronegativity: 1.91,
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    mass: 63.55,
    category: "transition-metal",
    group: 11,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(1) + " 3d" + toSuperscript(10),
    electronegativity: 1.9,
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    mass: 65.4,
    category: "transition-metal",
    group: 12,
    period: 4,
    electron_configuration:
      "[Ar] 4s" + toSuperscript(2) + " 3d" + toSuperscript(10),
    electronegativity: 1.65,
  },
  {
    number: 31,
    symbol: "Ga",
    name: "Galium",
    mass: 69.723,
    category: "post-transition",
    group: 13,
    period: 4,
    electron_configuration:
      "[Ar] 4s" +
      toSuperscript(2) +
      " 3d" +
      toSuperscript(10) +
      " 4p" +
      toSuperscript(1),
    electronegativity: 1.81,
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    mass: 72.63,
    category: "metalloid",
    group: 14,
    period: 4,
    electron_configuration:
      "[Ar] 4s" +
      toSuperscript(2) +
      " 3d" +
      toSuperscript(10) +
      " 4p" +
      toSuperscript(2),
    electronegativity: 2.01,
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    mass: 74.92159,
    category: "metalloid",
    group: 15,
    period: 4,
    electron_configuration:
      "[Ar] 4s" +
      toSuperscript(2) +
      " 3d" +
      toSuperscript(10) +
      " 4p" +
      toSuperscript(3),
    electronegativity: 2.18,
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    mass: 78.97,
    category: "nonmetal",
    group: 16,
    period: 4,
    electron_configuration:
      "[Ar] 4s" +
      toSuperscript(2) +
      " 3d" +
      toSuperscript(10) +
      " 4p" +
      toSuperscript(4),
    electronegativity: 2.55,
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    mass: 79.9,
    category: "halogen",
    group: 17,
    period: 4,
    electron_configuration:
      "[Ar] 4s" +
      toSuperscript(2) +
      " 3d" +
      toSuperscript(10) +
      " 4p" +
      toSuperscript(5),
    electronegativity: 2.96,
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    mass: 83.8,
    category: "noble-gas",
    group: 18,
    period: 4,
    electron_configuration:
      "[Ar] 4s" +
      toSuperscript(2) +
      " 3d" +
      toSuperscript(10) +
      " 4p" +
      toSuperscript(6),
    electronegativity: 3,
  },
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    mass: 85.468,
    category: "alkali-metal",
    group: 1,
    period: 5,
    electron_configuration: "[Kr] 5s" + toSuperscript(1),
    electronegativity: 0.82,
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    mass: 87.62,
    category: "alkaline-earth",
    group: 2,
    period: 5,
    electron_configuration: "[Kr] 5s" + toSuperscript(2),
    electronegativity: 0.95,
  },
  {
    number: 39,
    symbol: "Y",
    name: "Yttrium",
    mass: 88.90584,
    category: "transition-metal",
    group: 3,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(2) + " 4d" + toSuperscript(1),
    electronegativity: 1.22,
  },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    mass: 91.22,
    category: "transition-metal",
    group: 4,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(2) + " 4d" + toSuperscript(2),
    electronegativity: 1.33,
  },
  {
    number: 41,
    symbol: "Nb",
    name: "Niobium",
    mass: 92.90637,
    category: "transition-metal",
    group: 5,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(2) + " 4d" + toSuperscript(4),
    electronegativity: 1.6,
  },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    mass: 95.95,
    category: "transition-metal",
    group: 6,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(1) + " 4d" + toSuperscript(5),
    electronegativity: 2.16,
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    mass: 96.90636,
    category: "transition-metal",
    group: 7,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(2) + " 4d" + toSuperscript(5),
    electronegativity: 1.9,
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    mass: 101.1,
    category: "transition-metal",
    group: 8,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(1) + " 4d" + toSuperscript(7),
    electronegativity: 2.2,
  },
  {
    number: 45,
    symbol: "Rh",
    name: "Rhodium",
    mass: 102.9055,
    category: "transition-metal",
    group: 9,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(1) + " 4d" + toSuperscript(8),
    electronegativity: 2.28,
  },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    mass: 106.42,
    category: "transition-metal",
    group: 10,
    period: 5,
    electron_configuration: "4d" + toSuperscript(10),
    electronegativity: 2.2,
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    mass: 107.868,
    category: "transition-metal",
    group: 11,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(1) + " 4d" + toSuperscript(10),
    electronegativity: 1.93,
  },
  {
    number: 48,
    symbol: "Cd",
    name: "Cadmium",
    mass: 112.41,
    category: "transition-metal",
    group: 12,
    period: 5,
    electron_configuration:
      "[Kr] 5s" + toSuperscript(2) + " 4d" + toSuperscript(10),
    electronegativity: 1.69,
  },
  {
    number: 49,
    symbol: "In",
    name: "Indium",
    mass: 114.818,
    category: "post-transition",
    group: 13,
    period: 5,
    electron_configuration:
      "[Kr] 5s" +
      toSuperscript(2) +
      " 4d" +
      toSuperscript(10) +
      " 5p" +
      toSuperscript(1),
    electronegativity: 1.78,
  },
  {
    number: 50,
    symbol: "Sn",
    name: "Tin",
    mass: 118.71,
    category: "post-transition",
    group: 14,
    period: 5,
    electron_configuration:
      "[Kr] 5s" +
      toSuperscript(2) +
      " 4d" +
      toSuperscript(10) +
      " 5p" +
      toSuperscript(2),
    electronegativity: 1.96,
  },
  {
    number: 51,
    symbol: "Sb",
    name: "Antimony",
    mass: 121.76,
    category: "metalloid",
    group: 15,
    period: 5,
    electron_configuration:
      "[Kr] 5s" +
      toSuperscript(2) +
      " 4d" +
      toSuperscript(10) +
      " 5p" +
      toSuperscript(3),
    electronegativity: 2.05,
  },
  {
    number: 52,
    symbol: "Te",
    name: "Tellurium",
    mass: 127.6,
    category: "metalloid",
    group: 16,
    period: 5,
    electron_configuration:
      "[Kr] 5s" +
      toSuperscript(2) +
      " 4d" +
      toSuperscript(10) +
      " 5p" +
      toSuperscript(4),
    electronegativity: 2.1,
  },
  {
    number: 53,
    symbol: "I",
    name: "Iodine",
    mass: 126.9045,
    category: "halogen",
    group: 17,
    period: 5,
    electron_configuration:
      "[Kr] 5s" +
      toSuperscript(2) +
      " 4d" +
      toSuperscript(10) +
      " 5p" +
      toSuperscript(5),
    electronegativity: 2.66,
  },
  {
    number: 54,
    symbol: "Xe",
    name: "Xenon",
    mass: 131.29,
    category: "noble-gas",
    group: 18,
    period: 5,
    electron_configuration:
      "[Kr] 5s" +
      toSuperscript(2) +
      " 4d" +
      toSuperscript(10) +
      " 5p" +
      toSuperscript(6),
    electronegativity: 131.29,
  },
  {
    number: 55,
    symbol: "Cs",
    name: "Cesium",
    mass: 132.905452,
    category: "alkali-metal",
    group: 1,
    period: 6,
    electron_configuration: "[Xe] 6s" + toSuperscript(1),
    electronegativity: 0.79,
  },
  {
    number: 56,
    symbol: "Ba",
    name: "Barium",
    mass: 137.33,
    category: "alkaline-earth",
    group: 2,
    period: 6,
    electron_configuration: "[Xe] 6s" + toSuperscript(2),
    electronegativity: 0.89,
  },
  // Lanthanides
  {
    number: 57,
    symbol: "La",
    name: "Lanthanum",
    mass: 138.91,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 5d" + toSuperscript(1),
    electronegativity: 1.1,
  },
  {
    number: 58,
    symbol: "Ce",
    name: "Cerium",
    mass: 140.12,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(1) +
      " 5d" +
      toSuperscript(1),
    electronegativity: 1.12,
  },
  {
    number: 59,
    symbol: "Pr",
    name: "Praseodymium",
    mass: 140.90766,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(3),
    electronegativity: 1.13,
  },
  {
    number: 60,
    symbol: "Nd",
    name: "Neodymium",
    mass: 144.24,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(4),
    electronegativity: 1.14,
  },
  {
    number: 61,
    symbol: "Pm",
    name: "Promethium",
    mass: 144.91276,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(5),
    electronegativity: 1.13,
  },
  {
    number: 62,
    symbol: "Sm",
    name: "Samarium",
    mass: 150.4,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(6),
    electronegativity: 1.17,
  },
  {
    number: 63,
    symbol: "Eu",
    name: "Europium",
    mass: 151.964,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(7),
    electronegativity: 1.2,
  },
  {
    number: 64,
    symbol: "Gd",
    name: "Gadolinium",
    mass: 157.25,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(7) +
      " 5d" +
      toSuperscript(1),
    electronegativity: 1.2,
  },
  {
    number: 65,
    symbol: "Tb",
    name: "Terbium",
    mass: 158.92535,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(9),
    electronegativity: 1.2,
  },
  {
    number: 66,
    symbol: "Dy",
    name: "Dysprosium",
    mass: 162.5,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(10),
    electronegativity: 1.22,
  },
  {
    number: 67,
    symbol: "Ho",
    name: "Holmium",
    mass: 164.93033,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(11),
    electronegativity: 1.23,
  },
  {
    number: 68,
    symbol: "Er",
    name: "Erbium",
    mass: 167.26,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(12),
    electronegativity: 1.24,
  },
  {
    number: 69,
    symbol: "Tm",
    name: "Thulium",
    mass: 168.93422,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(13),
    electronegativity: 1.25,
  },
  {
    number: 70,
    symbol: "Yb",
    name: "Ytterbium",
    mass: 173.05,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" + toSuperscript(2) + " 4f" + toSuperscript(14),
    electronegativity: 1.1,
  },
  {
    number: 71,
    symbol: "Lu",
    name: "Lutetium",
    mass: 174.9667,
    category: "lanthanide",
    group: 3,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(1),
    electronegativity: 1.27,
  },
  {
    number: 72,
    symbol: "Hf",
    name: "Hafnium",
    mass: 178.49,
    category: "transition-metal",
    group: 4,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(2),
    electronegativity: 1.3,
  },
  {
    number: 73,
    symbol: "Ta",
    name: "Tantalum",
    mass: 180.9479,
    category: "transition-metal",
    group: 5,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(2),
    electronegativity: 1.3,
  },
  {
    number: 74,
    symbol: "W",
    name: "Tungsten",
    mass: 183.84,
    category: "transition-metal",
    group: 6,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(4),
    electronegativity: 2.36,
  },
  {
    number: 75,
    symbol: "Re",
    name: "Rhenium",
    mass: 186.207,
    category: "transition-metal",
    group: 7,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(5),
    electronegativity: 1.9,
  },
  {
    number: 76,
    symbol: "Os",
    name: "Osmium",
    mass: 190.2,
    category: "transition-metal",
    group: 8,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(6),
    electronegativity: 2.2,
  },
  {
    number: 77,
    symbol: "Ir",
    name: "Iridium",
    mass: 192.22,
    category: "transition-metal",
    group: 9,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      "5d" +
      toSuperscript(7),
    electronegativity: 2.2,
  },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    mass: 195.08,
    category: "transition-metal",
    group: 10,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(1) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(9),
    electronegativity: 2.28,
  },
  {
    number: 79,
    symbol: "Au",
    name: "Gold",
    mass: 196.96657,
    category: "transition-metal",
    group: 11,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(1) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10),
    electronegativity: 2.54,
  },
  {
    number: 80,
    symbol: "Hg",
    name: "Mercury",
    mass: 200.59,
    category: "transition-metal",
    group: 12,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10),
    electronegativity: 2,
  },
  {
    number: 81,
    symbol: "Tl",
    name: "Thallium",
    mass: 204.383,
    category: "post-transition",
    group: 13,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10) +
      " 6p" +
      toSuperscript(1),
    electronegativity: 1.62,
  },
  {
    number: 82,
    symbol: "Pb",
    name: "Lead",
    mass: 207,
    category: "post-transition",
    group: 14,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10) +
      " 6p" +
      toSuperscript(2),
    electronegativity: 2.33,
  },
  {
    number: 83,
    symbol: "Bi",
    name: "Bismuth",
    mass: 208.9804,
    category: "post-transition",
    group: 15,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10) +
      " 6p" +
      toSuperscript(3),
    electronegativity: 2.02,
  },
  {
    number: 84,
    symbol: "Po",
    name: "Polonium",
    mass: 208.98243,
    category: "metalloid",
    group: 16,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10) +
      " 6p" +
      toSuperscript(4),
    electronegativity: 2,
  },
  {
    number: 85,
    symbol: "At",
    name: "Astatine",
    mass: 209.98715,
    category: "halogen",
    group: 17,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10) +
      " 6p" +
      toSuperscript(5),
    electronegativity: 2.2,
  },
  {
    number: 86,
    symbol: "Rn",
    name: "Radon",
    mass: 222.01758,
    category: "noble-gas",
    group: 18,
    period: 6,
    electron_configuration:
      "[Xe] 6s" +
      toSuperscript(2) +
      " 4f" +
      toSuperscript(14) +
      " 5d" +
      toSuperscript(10) +
      " 6p" +
      toSuperscript(6),
    electronegativity: 2.2,
  },
  {
    number: 87,
    symbol: "Fr",
    name: "Francium",
    mass: 223.01973,
    category: "alkali-metal",
    group: 1,
    period: 7,
    electron_configuration: "[Rn] 7s" + toSuperscript(1),
    electronegativity: 0.7,
  },
  {
    number: 88,
    symbol: "Ra",
    name: "Radium",
    mass: 226.02541,
    category: "alkaline-earth",
    group: 2,
    period: 7,
    electron_configuration: "[Rn] 7s" + toSuperscript(2),
    electronegativity: 0.9,
  },

  // Actinides
  {
    number: 89,
    symbol: "Ac",
    name: "Actinium",
    mass: 227,
    category: "actinide",
    group: 3,
    period: 7,
    electron_configuration: "[Rn] 6d¹ 7s²",
    electronegativity: 1.1,
  },
  {
    number: 90,
    symbol: "Th",
    name: "Thorium",
    mass: 232.04,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration: "[Rn] 6d² 7s²",
    electronegativity: 1.3,
  },
  {
    number: 91,
    symbol: "Pa",
    name: "Protactinium",
    mass: 231.03588,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(2) +
      " 6d" +
      toSuperscript(1),
    electronegativity: 1.5,
  },
  {
    number: 92,
    symbol: "U",
    name: "Uranium",
    mass: 238.0289,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(3) +
      " 6d" +
      toSuperscript(1),
    electronegativity: 1.38,
  },
  {
    number: 93,
    symbol: "Np",
    name: "Neptunium",
    mass: 237.048172,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(4) +
      " 6d" +
      toSuperscript(1),
    electronegativity: 1.36,
  },
  {
    number: 94,
    symbol: "Pu",
    name: "Plutonium",
    mass: 244.0642,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 5f" + toSuperscript(6),
    electronegativity: 1.28,
  },
  {
    number: 95,
    symbol: "Am",
    name: "Americium",
    mass: 243.06138,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 5f" + toSuperscript(7),
    electronegativity: 1.3,
  },
  {
    number: 96,
    symbol: "Cm",
    name: "Curium",
    mass: 247.07035,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(7) +
      " 6d" +
      toSuperscript(1),
    electronegativity: 1.3,
  },
  {
    number: 97,
    symbol: "Bk",
    name: "Berkelium",
    mass: 247.07031,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 5f" + toSuperscript(9),
    electronegativity: 1.3,
  },
  {
    number: 98,
    symbol: "Cf",
    name: "Californium",
    mass: 251.07959,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 6f" + toSuperscript(10),
    electronegativity: 1.3,
  },
  {
    number: 99,
    symbol: "Es",
    name: "Einsteinium",
    mass: 252.983,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 5f" + toSuperscript(11),
    electronegativity: 1.3,
  },
  {
    number: 100,
    symbol: "Fm",
    name: "Fermium",
    mass: 257.09511,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 5f" + toSuperscript(12) + " 7s" + toSuperscript(2),
    electronegativity: 1.3,
  },
  {
    number: 101,
    symbol: "Md",
    name: "Mendelevium",
    mass: 258.90843,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 5f" + toSuperscript(13),
    electronegativity: 1.3,
  },
  {
    number: 102,
    symbol: "No",
    name: "Nobelium",
    mass: 259.101,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" + toSuperscript(2) + " 5f" + toSuperscript(14),
    electronegativity: 1.3,
  },
  {
    number: 103,
    symbol: "Lr",
    name: "Lawrencium",
    mass: 266.12,
    category: "actinide",
    group: null,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(1),
    electronegativity: 1.3,
  },
  {
    number: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    mass: 267.122,
    category: "transition-metal",
    group: 4,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(2),
    electronegativity: 1.9 - 2.2,
  },
  {
    number: 105,
    symbol: "Db",
    name: "Dubnium",
    mass: 268.126,
    category: "transition-metal",
    group: 5,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(3),
    electronegativity: 1.3,
  },
  {
    number: 106,
    symbol: "Sg",
    name: "Seaborgium",
    mass: 269.128,
    category: "transition-metal",
    group: 6,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(4),
    electronegativity: 1.8 - 2.0,
  },
  {
    number: 107,
    symbol: "Bh",
    name: "Bohrium",
    mass: 270.133,
    category: "transition-metal",
    group: 7,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(5),
    // electronegativity: ,
  },
  {
    number: 108,
    symbol: "Hs",
    name: "Hassium",
    mass: 269.1336,
    category: "transition-metal",
    group: 8,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 6f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(6),
    // electronegativity: ,
  },
  {
    number: 109,
    symbol: "Mt",
    name: "Meitnerium",
    mass: 277.154,
    category: "transition-metal",
    group: 9,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(7),
    // electronegativity: ,
  },
  {
    number: 110,
    symbol: "Ds",
    name: "Darmstadium",
    mass: 282.166,
    category: "transition-metal",
    group: 10,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(8),
    // electronegativity: ,
  },
  {
    number: 111,
    symbol: "Rg",
    name: "Roentgenium",
    mass: 282.169,
    category: "transition-metal",
    group: 11,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(9),
    // electronegativity: ,
  },
  {
    number: 112,
    symbol: "Cn",
    name: "Copernicium",
    mass: 286.179,
    category: "transition-metal",
    group: 12,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(10),
    // electronegativity: ,
  },
  {
    number: 113,
    symbol: "Nh",
    name: "Nihonium",
    mass: 286.182,
    category: "post-transition",
    group: 13,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 7p" +
      toSuperscript(1) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(10),
    // electronegativity: ,
  },
  {
    number: 114,
    symbol: "Fl",
    name: "Flerovium",
    mass: 290.192,
    category: "post-transition",
    group: 14,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 7p" +
      toSuperscript(2) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(10),
    // electronegativity: ,
  },
  {
    number: 115,
    symbol: "Mc",
    name: "Moscovium",
    mass: 290.196,
    category: "post-transition",
    group: 15,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 7p" +
      toSuperscript(3) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(10),
    // electronegativity: ,
  },
  {
    number: 116,
    symbol: "Lv",
    name: "Livermorium",
    mass: 293.205,
    category: "post-transition",
    group: 16,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 7p" +
      toSuperscript(4) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(10),
    // electronegativity: ,
  },
  {
    number: 117,
    symbol: "Ts",
    name: "Tennessine",
    mass: 294.211,
    category: "halogen",
    group: 17,
    period: 7,
    electron_configuration:
      "[Rn] 7s" +
      toSuperscript(2) +
      " 7p" +
      toSuperscript(5) +
      " 5f" +
      toSuperscript(14) +
      " 6d" +
      toSuperscript(10),
    // electronegativity: ,
  },
  {
    number: 118,
    symbol: "Og",
    name: "Oganesson",
    mass: 294,
    category: "noble-gas",
    group: 18,
    period: 7,
    electron_configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    electronegativity: null,
  },
];

// Function to create Periodic Table
function createPeriodicTable() {
  const table = document.getElementById("periodicTable");

  // Creating main table (periods: 1-6, groups: 1-18)
  for (let period = 1; period <= 7; period++) {
    for (let group = 1; group <= 18; group++) {
      const element = elements.find(
        (el) => el.group === group && el.period === period
      );
      const cell = document.createElement("div");
      if (element) {
        cell.className = `element ${element.category}`;
        cell.innerHTML = `
                <span class = "number">${element.number}</span>
                <span class = "symbol">${element.symbol}</span>
                <span class = "name">${element.name}</span>
                <span class = "mass">${element.mass}</span>
                <div class = "tooltip">
                <h3>${element.name}</h3>
                <p>Atomic Number: ${element.number}</p>
                <p>Atomic Mass: ${element.mass}</p>
                <p>Electron Configuration: ${element.electron_configuration}</p>
                <Electronegativity: ${element.electronegativity || "N / A"}</p>
                <p>Category: ${element.category.replace("-", " ")}</p>
                </div>
                `;
      } else {
        // Handle Special Cases (Lanthanides/Actinides)
        if (period === 6 && group === 3) {
          cell.className = "element lanthanide";
          cell.innerHTML = `
            <span class="symbol">La-Lu</span>
            <span class="name">Lanthanides</span>
            <div class="tooltip">
            <h3>Lanthanides</h3>
            <p>Elements 57-71</p>
            <p>Also called rare earth metals</p>
            </div>
            `;
        } else if (period === 7 && group === 3) {
          cell.className = "element actinide";
          cell.innerHTML = `
                <span class="symbol">Ac-Lr</span>
                <span class="name">Actinides</span>
                <div class="tooltip">
                    <h3>Actinides</h3>
                    <p>Elements 89-103</p>
                    <p>All are radioactive</p>
                </div>
            `;
        } else {
          cell.className = "empty";
        }
      }
      table.appendChild(cell);
    }
  }

  //   Create Lanthanide Series
  const lanthanideSeries = document.createElement("div");
  lanthanideSeries.className = "series";
  lanthanideSeries.innerHTML = '<div class= "series-title">Lanthanides</div>';

  for (let i = 57; i <= 71; i++) {
    const element = elements.find((el) => el.number === i);
    if (element) {
      const cell = document.createElement("div");
      cell.className = `element ${element.category}`;
      cell.innerHTML = `
        <span class="number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${element.name}</span>
        <span class="mass">${element.mass}</span>
        <div class="tooltip">
            <h3>${element.name}</h3>
            <p>Atomic Number: ${element.number}</p>
            <p>Atomic Mass: ${element.mass}</p>
            <p>Electronic Configuration: ${element.electron_configuration}</p>
            <p>Electronegativity: ${element.electronegativity}</p>
            <p>Category: ${element.category.replace("-", " ")}</p>
        </div>
        `;
      lanthanideSeries.appendChild(cell);
    }
  }
  table.appendChild(lanthanideSeries);

  // Create Actinide series
  const actinideSeries = document.createElement("div");
  actinideSeries.className = "series";
  actinideSeries.innerHTML = '<div class="series-title">Actinides</div>';

  for (let i = 89; i <= 103; i++) {
    const element = elements.find((el) => el.number === i);
    if (element) {
      const cell = document.createElement("div");
      cell.className = `element ${element.category}`;
      cell.innerHTML = `
              <span class="number">${element.number}</span>
              <span class="symbol">${element.symbol}</span>
              <span class="name">${element.name}</span>
              <span class="mass">${element.mass}</span>
              <div class="tooltip">
                  <h3>${element.name}</h3>
                  <p>Atomic Number: ${element.number}</p>
                  <p>Atomic Mass: ${element.mass}</p>
                  <p>Electron Configuration: ${
                    element.electron_configuration
                  }</p>
                  <p>Electronegativity: ${
                    element.electronegativity || "N/A"
                  }</p>
                  <p>Category: ${element.category.replace("-", " ")}</p>
              </div>
        `;
      actinideSeries.appendChild(cell);
    }
  }
  table.appendChild(actinideSeries);
}
// Initialize the periodic table

window.onload = createPeriodicTable;
