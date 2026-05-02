export const COMPANIES = [
  {
    key: 'gayatri_steel',
    name: 'Gayatri Steel',
    initials: 'GS',
    color: '#ff4d00',
    address: 'Survey No. 87, Plot No. 20, Suvidha Engineering Zone, Sunlight Gate No. 4, Near Ribda Chowkdi, Rajkot, Gujarat 360311',
    contact: '+91 98256 03466, +91 97277 01491',
    email: 'info@gayatristeel.com',
    location: 'Rajkot'
  },
  {
    key: 'gayatri_industries',
    name: 'Gayatri Industries',
    initials: 'GI',
    color: '#ff3c00',
    address: 'Street No. 7, Behind PMP Transport, Opposite Jay Metal, Panchsheel Wadi, Samrat Industrial Area, Rajkot, Gujarat 360004',
    contact: '+91 97277 01493',
    email: 'gayatricorporation15@gmail.com',
    location: 'Rajkot'
  },
  {
    key: 'gayatri_corporation',
    name: 'Gayatri Corporation',
    initials: 'GC',
    color: '#ff5e00',
    address: 'Street No. 7, Behind PMP Transport, Opposite Jay Metal, Panchsheel Wadi, Samrat Industrial Area, Rajkot, Gujarat 360004',
    contact: '+91 97277 01493',
    email: 'gayatricorporation15@gmail.com',
    location: 'Rajkot'
  },
  {
    key: 'gayatri_enterprise',
    name: 'Gayatri Enterprise',
    initials: 'GE',
    color: '#7c3aed',
    address: 'C-2/339-B, Shankar Tekri Main Rd, Udyog Nagar, Nand Dham Society, Jamnagar, Gujarat 361006',
    contact: '+91 97277 01492',
    email: 'gayatrienterprise2013@gmail.com',
    location: 'Jamnagar'
  },
  {
    key: 'vk_industries',
    name: 'VK Industries',
    initials: 'VK',
    color: '#2563eb',
    address: 'Ribda, Near Toll Plaza, Gujarat',
    contact: '+91 9727701438',
    email: 'gayatricorporation15@gmail.com',
    location: 'Ribda'
  }
];

export const CATEGORIES = {
  all: 'All Grades',
  hot_work_tool_steel: 'Hot Work',
  cold_work_tool_steel: 'Cold Work',
  plastic_mould_steel: 'Plastic Mould',
  high_speed_steel: 'High Speed',
  wear_resistant_steel: 'Wear Resistant',
  high_strength_steel: 'High Strength',
  carbon_steel: 'Carbon Steel',
  alloy_steel: 'Alloy Steel',
  bearing_steel: 'Bearing Steel',
};

const RAW = {
  plastic_mould_steel: [
    {
      grade: '1.2083 ESR',
      category: 'Plastic Mould Steel',
      search_keywords: ['1.2083', '1.2083 ESR', 'X42Cr13', 'SUS420', '420'],
      equivalents: { EN: '1.2083', AISI: '420', DIN: 'X42Cr13', JIS: 'SUS420J2', GB: '4Cr13' },
      chemical_composition_percent: { C: '0.36–0.45', Si: '≤1.00', Mn: '≤1.00', Cr: '12.5–14.5', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '1000–1100°C; do not forge below 850°C; cool slowly in sand or furnace',
        annealing: '750–800°C, hold 1–2 h, furnace cool ≤20°C/h to 600°C, then air cool (max 230 HB)',
        stress_relieving: '650°C, 1–2 h, slow cool (after rough machining)',
        hardening: '1000–1050°C, oil quench or air cool (section-dependent)',
        tempering: '150–200°C for max hardness (49–52 HRC); 300–350°C for toughness (44–48 HRC); always temper immediately after quench',
      },
      applications: ['High polish moulds', 'Optical moulds', 'Medical plastic moulds', 'Corrosion resistant moulds'],
      image: 'p20_steel.png'
    },
    {
      grade: '1.2311 (P20)',
      category: 'Plastic Mould Steel',
      search_keywords: ['1.2311', 'P20', '40CrMnMo7', 'P20 steel', '3Cr2Mo'],
      equivalents: { EN: '1.2311', AISI: 'P20', DIN: '40CrMnMo7', JIS: 'NA', GB: '3Cr2Mo' },
      chemical_composition_percent: { C: '0.35–0.45', Si: '0.20–0.40', Mn: '1.30–1.60', Cr: '1.80–2.10', Mo: '0.15–0.25', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '850–1050°C; cool slowly in furnace or insulating material; do not forge below 800°C',
        annealing: '720–750°C, hold 2 h, furnace cool ≤15°C/h to 600°C, air cool (max 235 HB)',
        hardening: '840–870°C, oil or water-polymer quench',
        tempering: '580–650°C, hold 1 h per 25 mm thickness, air cool (achieves 285–320 HB pre-hardened)',
      },
      applications: ['Plastic injection moulds', 'Mould bases', 'Die holders', 'Compression moulds'],
      image: 'p20_steel.png'
    },
    {
      grade: '1.2316',
      category: 'Plastic Mould Steel',
      search_keywords: ['1.2316', 'X36CrMo17', 'Corrosion resistant mould steel', '4Cr17Mo'],
      equivalents: { EN: '1.2316', AISI: '420 Modified', DIN: 'X36CrMo17', JIS: 'SUS420', GB: '4Cr17Mo' },
      chemical_composition_percent: { C: '0.33–0.45', Si: '≤1.00', Mn: '≤1.50', Ni: '≤1.00', Cr: '15.5–17.5', Mo: '0.80–1.30', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '1000–1100°C; do not forge below 850°C; cool in furnace or insulating material',
        annealing: '750–800°C, hold 2 h, furnace cool ≤20°C/h to 600°C, then air cool (max 235 HB)',
        hardening: '1000–1050°C, air cool or oil quench (section-dependent)',
        tempering: '200–250°C for max hardness (48–52 HRC); 450–500°C for improved toughness (~44 HRC); double temper recommended',
      },
      applications: ['PVC moulds', 'Medical moulds', 'Food industry moulds', 'Corrosion resistant moulds'],
      image: 'p20_steel.png'
    },
    {
      grade: '1.2738 (P20+Ni)',
      category: 'Plastic Mould Steel',
      search_keywords: ['1.2738', 'P20+Ni', '40CrMnNiMo8-6-4', '718', '3Cr2NiMo'],
      equivalents: { EN: '1.2738', AISI: 'P20+Ni', DIN: '40CrMnNiMo8-6-4', JIS: 'NA', GB: '3Cr2NiMo' },
      chemical_composition_percent: { C: '0.35–0.45', Si: '0.20–0.40', Mn: '1.30–1.60', Cr: '1.80–2.10', Ni: '0.90–1.20', Mo: '0.15–0.25', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '850–1050°C; do not forge below 800°C; cool slowly in furnace or sand',
        annealing: '710–740°C, hold 2–4 h, furnace cool ≤15°C/h to 600°C, air cool (max 235 HB)',
        hardening: '840–880°C, oil or forced-air quench (section-dependent)',
        tempering: '500–600°C minimum 2 cycles, 1 h per 25 mm thickness each cycle (achieves 285–330 HB); cool in still air',
      },
      applications: ['Large plastic moulds >400mm', 'Injection moulds', 'Hydroforming tools', 'Die casting mould bases'],
      image: 'p20_steel.png'
    }
  ],
  cold_work_tool_steel: [
    {
      grade: 'D3',
      category: 'Cold Work Tool Steel',
      search_keywords: ['D3', '1.2080', 'SKD1', 'X210Cr12', 'Cr12'],
      equivalents: { EN: '1.2080', AISI: 'D3', DIN: 'X210Cr12', JIS: 'SKD1', GB: 'Cr12' },
      chemical_composition_percent: { C: '1.90–2.20', Si: '0.10–0.60', Mn: '0.20–0.60', Cr: '11.0–13.0', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '900–1050°C, do not forge below 850°C, furnace cool slowly',
        annealing: '850–880°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C then air (max 235 HB)',
        hardening: '960–1000°C, OIL quench only — do NOT air quench',
        tempering: '180–250°C, 2 h/25mm, double temper recommended',
      },
      applications: ['Shear blades', 'Drawing dies', 'Blanking dies', 'Wear resistant tooling'],
      image: 'd2_steel.png'
    },
    {
      grade: 'K110 (D2)',
      category: 'Cold Work Tool Steel',
      search_keywords: ['K110', '1.2379', 'D2 equivalent', 'Cr12MoV', 'SKD11', 'Böhler K110'],
      equivalents: { EN: '1.2379', AISI: 'D2', DIN: 'X153CrMoV12', JIS: 'SKD11', GB: 'Cr12MoV' },
      chemical_composition_percent: { C: '1.55–1.60', Si: '0.10–0.40', Mn: '0.25–0.45', Cr: '11.0–12.0', Mo: '0.70–0.80', V: '0.70–0.80', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '900–1050°C; do not forge below 850°C; cool slowly in furnace',
        annealing: '840–870°C, hold 2 h, furnace cool ≤10°C/h to 700°C then air cool (max 250 HB)',
        hardening: '1000–1030°C, air quench or oil (air quench preferred for D2-type)',
        tempering: '200–520°C; 200–300°C for max hardness (59–62 HRC); 480–520°C for secondary hardness peak and better toughness (~58 HRC); double temper required',
      },
      applications: ['Stamping dies', 'Punches', 'Cold forming dies', 'Precision tools'],
      image: 'd2_steel.png'
    },
    {
      grade: 'D2',
      category: 'Cold Work Tool Steel',
      search_keywords: ['D2', '1.2379', 'SKD11', 'X153CrMoV12', 'Cr12MoV'],
      equivalents: { EN: '1.2379', AISI: 'D2', DIN: 'X153CrMoV12', JIS: 'SKD11', GB: 'Cr12MoV' },
      chemical_composition_percent: { C: '1.45–1.60', Si: '0.10–0.60', Mn: '0.20–0.60', Cr: '11.0–13.0', Mo: '0.70–1.00', V: '0.70–1.00', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '900–1050°C; do not forge below 850°C; furnace cool slowly',
        annealing: '840–870°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C, then air cool (max 255 HB)',
        hardening: '1000–1040°C, air quench (preferred for distortion control) or oil quench',
        tempering: '200–520°C; 180–220°C → 60–62 HRC; 480–530°C → secondary hardness ~58–60 HRC; double temper required; avoid 300–400°C (temper embrittlement zone)',
      },
      applications: ['Blanking dies', 'Punches', 'Cold forming tools', 'Shear blades', 'Gauges'],
      image: 'd2_steel.png'
    },
    {
      grade: 'OHNS',
      category: 'Cold Work Tool Steel',
      search_keywords: ['OHNS', 'O1', '1.2510', 'oil hardening', 'non shrinking', '100MnCrW4'],
      equivalents: { EN: '1.2510', AISI: 'O1', DIN: '100MnCrW4', JIS: 'SKS3', GB: 'CrWMn' },
      chemical_composition_percent: { C: '0.85–1.00', Si: '0.10–0.50', Mn: '1.00–1.40', Cr: '0.40–0.70', W: '0.40–0.60', V: '0.10–0.30', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '982–1038°C, do not forge below 816°C, anneal after',
        annealing: '760–790°C (1400–1450°F), furnace cool ≤14°C/hr (max 212 HB)',
        hardening: 'Preheat 649–704°C; austenitize 788–816°C (1450–1500°F), 30 min/25mm, OIL quench to 66°C',
        tempering: '177–204°C (350–400°F), 2 hrs minimum; for max hardness use 150–175°C',
      },
      applications: ['Blanking dies', 'Forming dies', 'Gauges', 'Taps', 'Reamers', 'Bushings', 'Knives'],
      image: 'd2_steel.png'
    }
  ],
  hot_work_tool_steel: [
    {
      grade: 'H13 ESR',
      category: 'Hot Work Tool Steel',
      search_keywords: ['H13 ESR', '1.2344 ESR', 'SKD61 ESR', 'X40CrMoV5-1 ESR'],
      equivalents: { EN: '1.2344 ESR', AISI: 'H13 ESR', DIN: 'X40CrMoV5-1 ESR', JIS: 'SKD61 ESR', GB: '4Cr5MoSiV1 ESR' },
      chemical_composition_percent: { C: '0.32–0.45', Si: '0.80–1.20', Mn: '0.25–0.50', Cr: '4.80–5.50', Mo: '1.20–1.50', V: '0.85–1.15', P: '≤0.020', S: '≤0.005' },
      heat_treatment: {
        forging: '1050–1150°C; do not forge below 950°C; cool in furnace (avoid fast cooling — high alloy content)',
        annealing: '840–880°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C, then ≤20°C/h to 500°C, air cool (max 229 HB)',
        preheating: 'Two-stage: 1st stage 600–700°C, 2nd stage 800–850°C; then transfer to hardening temperature',
        hardening: '1020–1080°C, oil/polymer quench or positive-pressure gas quench (≥6 bar N₂); quench immediately after soaking 20–30 min',
        tempering: '540–650°C; temper within 30 min of quench; minimum 2 cycles, 2 h each; 540–590°C → 46–50 HRC; 600–650°C → 42–46 HRC',
      },
      applications: ['Premium die casting dies', 'High performance forging dies', 'Hot extrusion tooling', 'Aerospace tooling'],
      image: 'h13_steel.png'
    },
    {
      grade: 'H13',
      category: 'Hot Work Tool Steel',
      search_keywords: ['H13', '1.2344', 'SKD61', 'X40CrMoV5-1', '4Cr5MoSiV1'],
      equivalents: { EN: '1.2344', AISI: 'H13', DIN: 'X40CrMoV5-1', JIS: 'SKD61', GB: '4Cr5MoSiV1' },
      chemical_composition_percent: { C: '0.32–0.45', Si: '0.80–1.20', Mn: '0.25–0.50', Cr: '4.80–5.50', Mo: '1.20–1.50', V: '0.85–1.15', P: '≤0.030', S: '≤0.020' },
      heat_treatment: {
        forging: '1050–1150°C; do not forge below 950°C; cool in furnace',
        annealing: '840–880°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C, then air cool (max 229 HB)',
        preheating: 'Two-stage: 1st 600–700°C, 2nd 800–850°C before transfer to hardening furnace',
        hardening: '1020–1080°C, oil/polymer quench or positive-pressure gas quench; soak 20–30 min at temperature',
        tempering: '540–650°C; temper within 30 min of quench; minimum 2 cycles, 2 h each; 540–590°C → 46–50 HRC; 600–650°C → 42–46 HRC',
      },
      applications: ['Die casting dies', 'Extrusion dies', 'Hot forging dies', 'Plastic injection moulds'],
      image: 'h13_steel.png'
    },
    {
      grade: 'H11',
      category: 'Hot Work Tool Steel',
      search_keywords: ['H11', '1.2343', 'SKD6', 'X37CrMoV5-1', '4Cr5MoSiV'],
      equivalents: { EN: '1.2343', AISI: 'H11', DIN: 'X37CrMoV5-1', JIS: 'SKD6', GB: '4Cr5MoSiV' },
      chemical_composition_percent: { C: '0.33–0.41', Si: '0.80–1.20', Mn: '0.25–0.50', Cr: '4.80–5.50', Mo: '1.10–1.50', V: '0.30–0.50', P: '≤0.030', S: '≤0.020' },
      heat_treatment: {
        forging: '1050–1150°C; do not forge below 950°C; furnace cool',
        annealing: '840–880°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C, air cool (max 235 HB)',
        hardening: '1000–1030°C, air or oil quench; 20–25 min soak at temperature',
        tempering: '550–650°C; minimum 2 cycles, 2 h each; 550–600°C → 44–48 HRC; 600–650°C → 42–46 HRC; temper immediately after quench',
      },
      applications: ['Hot shear blades', 'Die casting dies', 'Forging dies', 'Aircraft structure tooling'],
      image: 'h13_steel.png'
    }
  ],
  high_speed_steel: [
    {
      grade: 'M2',
      category: 'High Speed Steel',
      search_keywords: ['M2', '1.3343', 'SKH51', 'HS6-5-2', 'W6Mo5Cr4V2'],
      equivalents: { EN: '1.3343', AISI: 'M2', DIN: 'HS6-5-2', JIS: 'SKH51', GB: 'W6Mo5Cr4V2' },
      chemical_composition_percent: { C: '0.78–0.94', Si: '0.15–0.45', Mn: '0.15–0.40', Cr: '3.75–4.50', Mo: '4.50–5.50', W: '5.50–6.75', V: '1.75–2.20', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '1050–1150°C; do not forge below 950°C; cool in furnace (strictly controlled — risk of carbide cracking)',
        annealing: '850–900°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C, air cool (max 255 HB)',
        preheating: 'Two-stage: 1st stage 450–500°C, 2nd stage 850–900°C before austenitising',
        hardening: '1180–1230°C, salt bath or vacuum/atmosphere furnace; soak 2–5 min per mm (very short soak — grain growth risk)',
        tempering: '540–560°C, triple temper required (each 1 h); achieves 62–65 HRC; sub-zero treatment (−80°C) between quench and 1st temper recommended to reduce retained austenite',
      },
      applications: ['Drills', 'End mills', 'Lathe tools', 'Taps', 'Reamers', 'Cutting tools'],
      image: 'm2_steel.png'
    },
    {
      grade: 'M35',
      category: 'High Speed Steel',
      search_keywords: ['M35', '1.3243', 'SKH55', 'HS6-5-2-5', 'W6Mo5Cr4V2Co5'],
      equivalents: { EN: '1.3243', AISI: 'M35', DIN: 'HS6-5-2-5', JIS: 'SKH55', GB: 'W6Mo5Cr4V2Co5' },
      chemical_composition_percent: { C: '0.82–0.90', Si: '0.15–0.45', Mn: '0.15–0.40', Cr: '3.75–4.50', Mo: '4.50–5.50', W: '5.50–6.75', V: '1.75–2.20', Co: '4.50–5.50', P: '≤0.030', S: '≤0.030' },
      heat_treatment: {
        forging: '1050–1150°C; do not forge below 950°C; cool in furnace',
        annealing: '850–900°C, hold 2–4 h, furnace cool ≤10°C/h to 700°C, air cool (max 262 HB)',
        preheating: 'Two-stage: 450–500°C then 850–900°C',
        hardening: '1180–1220°C, salt bath or vacuum furnace; soak 2–5 min per mm section',
        tempering: '540–560°C, triple temper required, 1 h each cycle; achieves 64–67 HRC; sub-zero treatment (−80°C) after quench recommended',
      },
      applications: ['High speed drills', 'Milling cutters', 'Hobs', 'Broaches', 'High performance cutting tools'],
      image: 'm2_steel.png'
    }
  ],
  wear_resistant_steel: [
    {
      grade: 'AR400',
      category: 'Wear Resistant Steel',
      search_keywords: ['AR400', 'Abrasion Resistant 400', 'NM400', 'XAR400', 'Hardox 400'],
      equivalents: { EN: '400 HB Plate', AISI: 'AR400', DIN: 'XAR400', JIS: 'NA', GB: 'NM400' },
      chemical_composition_percent: { C: '≤0.20', Si: '≤0.70', Mn: '0.60–1.60', Cr: '≤1.50', Ni: '≤1.00', Mo: '≤0.60', B: '≤0.005', P: '≤0.025', S: '≤0.010' },
      heat_treatment: {
        supply_condition: 'Quenched and tempered at the mill; hardness is factory set and certified',
        forging: 'Not recommended after delivery — hot working destroys quenched microstructure; straightening below 650°C maximum',
        annealing: 'N/A — do not anneal; will destroy hardness',
        hardening: 'N/A — factory Q&T; field re-hardening not feasible',
        tempering: 'N/A in field; max service temperature ≤250°C to avoid softening',
        welding_note: 'Preheat 50–150°C depending on section thickness; low-hydrogen electrodes required',
      },
      applications: ['Mining equipment', 'Dump bodies', 'Wear plates', 'Bucket lips', 'Chutes'],
      image: 'h13_steel.png'
    }
  ],
  high_strength_steel: [
    {
      grade: 'S690QL',
      category: 'High Strength Steel',
      search_keywords: ['S690QL', 'EN 10025-6', 'Q690D', '1.8928'],
      equivalents: { EN: 'S690QL', AISI: 'High Strength Structural', DIN: '1.8928', JIS: 'NA', GB: 'Q690D' },
      chemical_composition_percent: { C: '≤0.20', Si: '≤0.80', Mn: '≤1.70', Cr: '≤1.50', Ni: '≤2.00', Mo: '≤0.70', V: '≤0.12', Nb: '≤0.06', Ti: '≤0.05', B: '≤0.005', P: '≤0.020', S: '≤0.010' },
      heat_treatment: {
        supply_condition: 'Quenched and tempered (Q = quenched, L = QL grade for low-temp toughness) — factory delivery condition',
        forging: '850–1050°C; re-heat treatment required afterward to restore mechanical properties (Q&T)',
        annealing: 'Soft annealing destroys high-strength properties — not recommended in field',
        hardening: 'Re-quench from 900–950°C if full reheat treatment is performed (workshop only)',
        tempering: 'Factory: ≥560°C to achieve QL properties; field stress relieve: 530–580°C maximum — do not exceed to avoid re-tempering below delivery strength',
        welding_note: 'Preheat 50–150°C depending on section and CEV; low-hydrogen process required',
      },
      applications: ['Crane booms', 'Offshore structures', 'Truck chassis', 'Heavy lifting equipment'],
      image: 'h13_steel.png'
    }
  ],
  carbon_steel: [
    {
      grade: 'C45',
      category: 'Carbon Steel',
      search_keywords: ['C45', 'EN8', '1045', 'S45C', '45#'],
      equivalents: { EN: 'C45', AISI: '1045', DIN: '1.0503', JIS: 'S45C', GB: '45#' },
      chemical_composition_percent: { C: '0.42–0.50', Si: '0.10–0.40', Mn: '0.50–0.80', Cr: '≤0.40', Ni: '≤0.40', Mo: '≤0.10', P: '≤0.030', S: '≤0.035' },
      heat_treatment: {
        forging: '850–1100°C; do not forge below 800°C; air cool (normalise) or controlled cool',
        normalising: '840–880°C, hold 15–30 min per 25 mm, air cool',
        annealing: '650–700°C (subcritical softening annealing); or full anneal 800–840°C, furnace cool ≤20°C/h to 600°C',
        hardening: '820–860°C, water quench (small sections) or oil quench; 30 min soak per 25 mm section',
        tempering: '550–660°C for general engineering (Q&T to 570–700 MPa range); 200–300°C for surface-hardened parts (maintain core toughness)',
      },
      applications: ['Shafts', 'Gears', 'Bolts', 'Crankshafts', 'General engineering parts'],
      image: 'en24_steel.png'
    }
  ],
  alloy_steel: [
    {
      grade: 'EN19',
      category: 'Alloy Steel',
      search_keywords: ['EN19', '4140', '42CrMo4', '1.7225', 'SCM440', '708M40'],
      equivalents: { EN: '1.7225', AISI: '4140', DIN: '42CrMo4', JIS: 'SCM440', GB: '42CrMo' },
      chemical_composition_percent: { C: '0.38–0.45', Si: '0.10–0.40', Mn: '0.60–0.90', Cr: '0.90–1.20', Mo: '0.15–0.25', P: '≤0.035', S: '≤0.035' },
      heat_treatment: {
        forging: '850–1050°C, air cool or slow cool',
        annealing: '680–720°C, furnace cool (max 241 HB)',
        hardening: 'Normalize 870–900°C; harden 830–860°C, oil quench',
        tempering: '540–680°C for Q+T (28–34 HRC); 200–300°C for higher hardness (45–50 HRC)',
      },
      applications: ['Axles', 'Drive shafts', 'Crankshafts', 'Gears', 'Bolts', 'Rifle barrels', 'Machine tool parts'],
      image: 'en24_steel.png'
    },
    {
      grade: 'EN24',
      category: 'Alloy Steel',
      search_keywords: ['EN24', '817M40', '4340', '34CrNiMo6', '1.6582', 'EN24T'],
      equivalents: { EN: '1.6582', AISI: '4340', DIN: '34CrNiMo6', JIS: 'SNCM439', GB: '40CrNiMoA' },
      chemical_composition_percent: { C: '0.36–0.44', Si: '0.10–0.35', Mn: '0.45–0.70', Cr: '1.20–1.60', Ni: '1.30–1.70', Mo: '0.20–0.35', P: '≤0.025', S: '≤0.025' },
      heat_treatment: {
        forging: '850–1200°C, slow cool; anneal after',
        annealing: '820–850°C full anneal, furnace cool (max 248 HB); or 650–670°C stress relieve',
        hardening: 'Normalize 870°C; harden 820–850°C, oil quench',
        tempering: 'Max 660°C; for T condition (850–1000 MPa) temper at 550–620°C; higher strength = lower temp',
      },
      applications: ['Heavy-duty axles', 'Gears', 'Aircraft landing gear', 'Propeller shafts', 'High-strength bolts', 'Connecting rods'],
      image: 'en24_steel.png'
    }
  ],
  bearing_steel: [
    {
      grade: '52100 (EN31)',
      category: 'Bearing Steel',
      search_keywords: ['52100', 'EN31', '100Cr6', '1.3505', 'SUJ2', 'GCr15', 'bearing steel'],
      equivalents: { EN: '1.3505', AISI: '52100', DIN: '100Cr6', JIS: 'SUJ2', GB: 'GCr15' },
      chemical_composition_percent: { C: '0.95–1.10', Si: '0.15–0.35', Mn: '0.25–0.45', Cr: '1.30–1.65', Mo: '≤0.10', P: '≤0.025', S: '≤0.015' },
      heat_treatment: {
        forging: '927–1205°C, air cool to 700°C then sand; equalize at 745°C 4–6 hrs after forging',
        annealing: 'Spheroidize: 770–790°C isothermal at 680–700°C, furnace cool to 550°C then air (max 223 HB)',
        hardening: 'Normalize 930–950°C; austenitize 830–860°C (critical: do not exceed 860°C — excess retained austenite), OIL quench',
        tempering: '150–200°C, 2 hrs; achieves 62–65 HRC; sub-zero treatment at −80°C improves dimensional stability',
      },
      applications: ['Ball & roller bearings', 'Bearing rings', 'Precision dies', 'Gauges', 'Ball screws', 'CV joints'],
      image: 'en31_steel.png'
    }
  ]
};

export const MATERIALS = Object.entries(RAW).flatMap(([catKey, items]) =>
  items.map(m => ({ ...m, catKey }))
);
