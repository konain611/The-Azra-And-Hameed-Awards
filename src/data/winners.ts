export type Winner = {
  place?: 1 | 2 | 3;
  name?: string;
  title?: string;
  journal?: string;
  publicationDate?: string;
  institution?: string;
  designation?: string;
};

export type CategoryWinners = {
  category: string;
  winners: Winner[];
};

const winners: CategoryWinners[] = [
  {
    category: "Social Sciences",
    winners: [
      {
        place: 1,
        name: "Aelia Zaidi and Amena Zehra Ali",
        title:
          "Living under the shadow of a pandemic: The psychological challenges underlying social distancing and awareness rising.",
        journal:
          "Psychological Trauma: Theory, Research, Practice, and Policy 12.5 (2020): 508.",
        institution: "Department of Psychology",
      },
      {
        place: 2,
        name: "Dr. Shaista Shaheen Zafar and Humaira Saeed",
        title:
          "Crimean Annexation, European Union Sanctions and Russian Policy.",
        journal:
          "Pakistan Journal of International Affairs, Vol. 4 No. 2 (2021)",
        institution: "Area Study Center of Europe (ASCE)",
      },
      {
        place: 3,
        name: "Saima Masoom Ali, M. Yildirim, Sajida Abdul Hussain and P. Vostanis",
        title:
          "Self-reported mental health problems and post-traumatic growth among children in Pakistan care homes.",
        journal:
          "Asia Pacific Journal of Social Work and Development, 2020, 30(1), pp.62-76.",
        institution: "Department of Psychology",
      },
    ],
  },
  {
    category: "Natural Sciences",
    winners: [
      {
        place: 1,
        name:
          "Muhammad Shoaib, Muhammad Naveed Javed, Komal Aziz Gill, Firdous Imran Ali, William Henderson, Ahmed Bari, Syed Ghulam Musharraf, Jameel Ahmed Baig, and Imran Ali Hashmi",
        title:
          "Selective extraction of heavy metals (Fe, Co, Ni) from their aqueous mixtures by Task-Specific salicylate functionalized imidazolium based ionic liquid.",
        journal: "Journal of Cleaner Production 344 (2022): 131119.",
        institution: "Department of Chemistry and HEJ",
      },
      {
        place: 2,
        name: "Samreen Fatima and Mudassir Uddin",
        title:
          "On the forecasting of multivariate financial time series using hybridization of DCC-GARCH model and multivariate ANNs.",
        journal: "Neural Computing and Applications (2022): 1-15.",
        institution: "Department of Statistics",
      },
      {
        place: 3,
        name:
          "Muhammad Zaheer Ahmed, Tabassum Hussain, Salman Gulzar, Muhammad Yousuf Adnan, and Muhammad Ajmal Khan",
        title:
          "Calcium improves the leaf physiology of salt treated Limonium stocksii: A floriculture crop.",
        journal: "Scientia Horticulturae 285 (2021): 110190.",
        institution: "Dr. M. Ajmal Khan Institute of Sustainable Halophyte Utilization",
      },
    ],
  },
  {
    category: "Education",
    winners: [
      {
        name: "Maroof Bin Rauf",
        title:
          "Sex Education in Pakistan: Concepts, Needs and Strategies.",
        journal: "Pakistan Journal of International Affairs, Vol. 4, Issue 2 (2021)",
        institution: "Department of Education",
      },
    ],
  },
  {
    category: "Law",
    winners: [
      {
        name: "M. Shahrukh Shahnawaz",
        title:
          "Understanding the Clash between Sovereignty and Universal Jurisdiction.",
        journal: "Pakistan Horizon",
        institution: "Department of International Relations",
      },
    ],
  },
];

export default winners;