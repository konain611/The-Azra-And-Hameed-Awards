// data/submissions.ts

export type Submission = {
  author: string;
  title?: string;
  faculty: string;
};

export type FacultyTally = {
  faculty: string;
  count: number;
};

const submissions2022: Submission[] = [
  { author: "M. Atif A. Rao", title: "Behavioural Revival of the Arabs through Psychological Method of 'Shaping': A Discourse Analysis.", faculty: "Isl. Learning" },
  { author: "Abeera Moin", title: "Effect of succinylation on functional and morphological properties of starches from broken kernels of Pakistani Basmati and Irri rice cultivars.", faculty: "Food Sciences" },
  { author: "Asma Ansari", title: "In vitro application of bacteriocin produced by Lactiplantibacillus plantarum for the bio preservation of meat at refrigeration temperature.", faculty: "KIBGE" },
  { author: "Asma Hanif", title: "Scrutinizing the Application of Saline Endophyte to Enhance Salt Tolerance in Rice and Maize Plants.", faculty: "Botany" },
  { author: "Syed Muhammad Ghufran Saeed", title: "The Impact of Innovative Plant Sources (Cordia myxa L. Fruit (Assyrian Plum) and Phoenix dactylifera L. Biowaste (Date Pit)) on the Physicochemical, Microstructural, Nutritional, and Sensorial Properties of Gluten-Free Biscuits.", faculty: "Food Science and Technology" },
  { author: "Nida Ali", title: "Particle size, morphology and characterization of indoor and outdoor airborne particulate matter for toxic metals in Karachi.", faculty: "Chemistry" },
  { author: "Humayun Imran Azeemi", title: "Analysis of Adrenocorticotropic Hormone (ACTH), Cortisol and Muscle Enzymes in Patients with Chronic Lower Back Pain (LBP) Undergoing Treatment Exercises.", faculty: "DPEH" },
  { author: "Samreen Fatima", title: "On the forecasting of multivariate financial time series using hybridization of DCC-GARCH model and multivariate ANNs.", faculty: "Statistics" },
  { author: "Muhammad Ali Qureshi", title: "Stumped nature hyperjerk system with fractional order and exponential nonlinearity: Analog simulation, bifurcation analysis and cryptographic applications.", faculty: "Physics" },
  { author: "Asif R. Khan", title: "A new integral version of generalized Ostrowski-Grüss type inequality with applications.", faculty: "Mathematics" },
  { author: "S. Shaheen and Humaira Saeed", title: "Crimean Annexation: European Union Sanctions and Trussion Policy.", faculty: "Area Study Centre for Europe (ASCE)" },
  { author: "Nizam Uddin", title: "An effort to find new α-amylase inhibitors as potent antidiabetics compounds based on indole-based-thiadiazole analogs.", faculty: "Department of Chemistry" },
  { author: "Maroof Bin Rauf", title: "Sex Education in Pakistan: Concepts, Needs and Strategies.", faculty: "Dept. of Education" },
  { author: "Imran Ahmed Khan", title: "Assessment of asthma-prone environment in Karachi, Pakistan using GIS modelling.", faculty: "Department of Geography" },
  { author: "Sumera Farooq", title: "Sediment Characterization and Monsoonal Impact on Beach Morphology at the Three Beaches along the Karachi Coast, Pakistan.", faculty: "Zoology" },
  { author: "Zarrin Basharat", title: "Sulphonated azo dye decolorization by Alcaligenes faecalis subsphenolicus MB207: Insights from laboratory and computational analysis.", faculty: "Dr. Panjwani Center for Molecular Medicine and Drug Research, ICCBS" },
  { author: "Imran A. Hashmi", title: "Selective extraction of heavy metals (Fe, Co, Ni) from their aqueous mixtures by Task-Specific salicylate functionalized imidazolium based ionic liquid.", faculty: "Chemistry" },
  { author: "Aelia Zaidi and Amena Zehra Ali", title: "Living Under the Shadow of a Pandemic: The Psychological Challenges Underlying Social Distancing and Awareness Raising.", faculty: "Department of Psychology" },
  { author: "Zafar Khan Ghouri, Ph.D", title: "Incorporation of manganese carbonyl sulfide (Mn2S2(CO)7) and mixed metal oxides-decorated reduced graphene oxide (MnFeCoO4/rGO) as a selective anode toward efficient OER from seawater splitting under neutral pH conditions.", faculty: "HEJ" },
  { author: "Zamin Shaheed Siddiqui", faculty: "Botany" },
  { author: "Fakhar un Nisa Memon", faculty: "Chemistry" },
  { author: "Saima Masoom Ali", title: "Self-reported mental health problems and post-traumatic growth among children in Pakistan care homes.", faculty: "Psychology" },
  { author: "Quratulain Rauf Khan", title: "International Policy and Practices for Quality Assurance in Education Through Accreditation and Licensing: A Literature Review.", faculty: "Teacher Education (PhD student)" },
  { author: "M. Shahrukh Shahnawaz", title: "Understanding the Clash between Sovereignty and Universal Jurisdiction.", faculty: "IR" },
  { author: "Tooba Lateef", title: "Typhoon eye effect versus ripple effect: the role of family size on mental health during the COVID-19 pandemic in Pakistan.", faculty: "Bio-Chemistry" },
  { author: "Sher Khan Panwhar", faculty: "Centre of Excellence in Marine Biology (CMB)" },
];

export const submissionTally: FacultyTally[] = [
  { faculty: "Science", count: 18 },
  { faculty: "S. Science", count: 6 },
  { faculty: "Law", count: 1 },
  { faculty: "Isl. Learning", count: 1 },
];

export default submissions2022;