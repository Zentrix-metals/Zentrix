import { ServiceDetail, SectorItem, BlogPost, TeamMember, ResourceItem, GlossaryTerm, OfficeLocation, OperationalImageItem } from '../types';

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'radiation-safety',
    title: 'Radiation Safety & Protection Solutions',
    shortTitle: 'Radiation Safety',
    tagline: 'ALARA-compliant shielding, real-time dosimetry, and regulatory containment engineering.',
    category: 'Radiological Protection',
    iconName: 'ShieldAlert',
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    overview: 'Delivering end-to-end radiological safety architectures for nuclear facilities, medical cyclotron centers, and industrial radiography sites. Our certified Health Physicists design ALARA-compliant containment protocols, custom high-density lead/composite shielding, and automated gamma/neutron perimeter monitoring grids.',
    keyCapabilities: [
      {
        title: 'Bespoke Shielding Design & Simulation',
        description: 'Monte Carlo N-Particle (MCNP6) radiological modeling to compute optimal lead, bismuth, boronated polyethylene, and heavyweight concrete shielding barriers.',
        metrics: 'Attenuation precision: ±0.4%'
      },
      {
        title: 'Real-Time Telemetric Dosimetry Grids',
        description: 'Deployment of wireless active dosimeters, continuous alpha/beta air monitoring (CAMs), and automated evacuation threshold triggers with SCADA integration.',
        metrics: '< 150ms alarm latency'
      },
      {
        title: 'NRC Title 10 CFR & IAEA Licensing Compliance',
        description: 'Comprehensive radiological safety audits, sealed source leak test verification, radiation safety officer (RSO) governance, and emergency action plan validation.',
        metrics: '100% first-pass audit rate'
      },
      {
        title: 'Hot Cell & Decommissioning Containment',
        description: 'Engineered glovebox isolators, negative pressure ventilation balancing, HEPA filtration qualification, and robotic manipulator radiation hardening.',
        metrics: 'Zone IV certified integrity'
      }
    ],
    instrumentation: [
      'Mirion / Canberra InSpector 2000 HPGe Systems',
      'Ludlum Model 375 High-Range Area Monitors',
      'Thermo Fisher RadEye Personal Dosimetry Suite',
      'MCNP6.2 Radiation Transport Particle Simulation Cluster'
    ],
    complianceStandards: [
      'IAEA Safety Standards Series No. SSR-6',
      'US NRC Title 10 CFR Part 20 (Standards for Protection Against Radiation)',
      'EURATOM Basic Safety Standards Directive 2013/59',
      'ISO 45001:2018 Occupational Health & Safety'
    ],
    caseStudy: {
      title: 'Shielding Optimization & RSO Overhaul for a 70 MeV Proton Beam Facility',
      clientSector: 'Advanced Oncology & Nuclear Research Center',
      challenge: 'Secondary neutron flux during maximum proton beam intensity exceeded boundary limits near adjacent clinical operator bays.',
      solution: 'Engineered layered shielding incorporating 35cm boronated paraffin matrix, interlocking lead chevron blocks, and real-time neutron proportional counters with interlocked beam-abort relays.',
      outcome: 'Reduced external scatter dose rate to 0.04 μSv/h (98.6% below regulatory ceiling) with zero downtime to clinical trials.'
    },
    keyStats: [
      { label: 'Facility Audits Completed', value: '450+' },
      { label: 'Max Attenuation Efficiency', value: '99.999%' },
      { label: 'Regulatory Compliance Rate', value: '100%' }
    ]
  },
  {
    id: 'environmental-remediation',
    title: 'Environmental Protection & Radiological Remediation',
    shortTitle: 'Environmental Protection',
    tagline: 'NORM/TENORM management, hydrogeological isotope mapping, and land restoration.',
    category: 'Environmental Remediation',
    iconName: 'Leaf',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    overview: 'Executing environmental impact assessments, hazardous waste stabilization, and contaminated site restoration. We specialize in Naturally Occurring Radioactive Material (NORM) and Technologically Enhanced NORM (TENORM) identification, uranium legacy mine tailing encapsulation, and groundwater radionuclide interception.',
    keyCapabilities: [
      {
        title: 'NORM / TENORM Identification & Stabilization',
        description: 'Comprehensive radiological baseline surveys for oil & gas piping scales, geothermal sludge, and phosphate mineral processing residues.',
        metrics: 'Up to 50,000 m³ capacity / yr'
      },
      {
        title: 'Hydrogeological Radionuclide Interception',
        description: 'Subsurface permeable reactive barriers (PRBs), zero-valent iron filtration, and multi-aquifer tritium & strontium-90 transport simulation.',
        metrics: '< 2.1 pCi/L effluent purity'
      },
      {
        title: 'Soil Decontamination & Phytoremediation',
        description: 'Mechanized particle-size radiochemical segregation, thermal desorption, and controlled biological radionuclide uptake programs.',
        metrics: '94% soil volume recovery'
      },
      {
        title: 'Geotechnical Tailings Encapsulation',
        description: 'Multi-barrier geomembrane and bentonite clay liner construction with 1,000-year seismic and hydraulic integrity guarantees.',
        metrics: 'Meets EPA 40 CFR 192'
      }
    ],
    instrumentation: [
      'Trimble RTK GPS Integrated with Nal Scintillators',
      'Geoprobe 7822DT Direct-Push Subsurface Coring Rigs',
      'Horiba Multi-Parameter Groundwater Quality Sondes',
      'Spectra Geospatial High-Resolution Aerial Gamma Drones'
    ],
    complianceStandards: [
      'EPA 40 CFR Part 192 (Uranium Mill Tailings Radiation Control)',
      'ISO 14001:2015 Environmental Management Systems',
      'IAEA Safety Guide WS-G-3.1 (Remediation of Contaminated Areas)',
      'MARSSIM (Multi-Agency Radiation Survey and Site Investigation Manual)'
    ],
    caseStudy: {
      title: 'TENORM Decontamination and Habitat Restoration of a 140-Hectare Petrochemical Complex',
      clientSector: 'Global Energy Infrastructure Corporation',
      challenge: 'Radium-226 and Lead-210 pipe scale deposits contaminated coastal sediment zones, halting a $1.2B brownfield redevelopment.',
      solution: 'Deployed mobile radiochemical segregation plants with closed-loop ultrasonic scrubbing, stabilizing concentrated isotopes in vitrified silicate matrices.',
      outcome: 'Cleared 140 hectares for unrestricted agricultural/commercial zoning ahead of schedule, recycling 91% of non-contaminated bulk aggregate.'
    },
    keyStats: [
      { label: 'Hectares Remediated', value: '18,500+' },
      { label: 'NORM Sludge Processed', value: '320k MT' },
      { label: 'Groundwater Purity Rate', value: '99.8%' }
    ]
  },
  {
    id: 'lab-testing',
    title: 'Advanced Radiation-Related Lab Testing & Material Analysis',
    shortTitle: 'Lab Analytics',
    tagline: 'ISO/IEC 17025 accredited gamma spectroscopy, alpha spectrometry, and ICP-MS assay.',
    category: 'Analytical Services',
    iconName: 'FlaskConical',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    overview: 'World-class radiochemical and material characterization laboratories delivering ultra-trace isotopic detection, elemental assay, and crystallographic analysis. From environmental soil and potable water samples to nuclear fuel elements and heavy aerospace alloys, we provide ultra-low detection limits with chain-of-custody security.',
    keyCapabilities: [
      {
        title: 'High-Purity Germanium (HPGe) Gamma Spec',
        description: 'Cryogenically cooled coaxial HPGe detectors shielded inside 100mm low-background pre-WWII lead chambers for precise multi-radionuclide assay.',
        metrics: 'Detection limit down to 0.005 Bq/kg'
      },
      {
        title: 'Inductively Coupled Plasma Mass Spectrometry (ICP-MS)',
        description: 'Triple-quadrupole ICP-MS for parts-per-quadrillion (ppq) isotopic ratio quantification across Uranium (235/238), Thorium, and actinide series.',
        metrics: 'Linear range: 10 orders of magnitude'
      },
      {
        title: 'Liquid Scintillation Counting (LSC)',
        description: 'Quantification of low-energy pure beta emitters including Tritium (H-3), Carbon-14, Nickel-63, and Strontium-90 with alpha/beta pulse discrimination.',
        metrics: 'Dual-PMT coincidence counting'
      },
      {
        title: 'X-Ray Diffraction (XRD) & SEM-EDS Mineralogy',
        description: 'Field emission scanning electron microscopy paired with energy-dispersive X-ray spectroscopy to map micro-crystallite isotopic distribution.',
        metrics: '0.8nm spatial resolution'
      }
    ],
    instrumentation: [
      'Canberra Extended Range Cryo-HPGe Detectors',
      'Agilent 8900 Triple Quadrupole ICP-MS',
      'PerkinElmer Tri-Carb 5110 TR Low-Level LSC',
      'Thermo Scientific Phenom XL Desktop SEM-EDS'
    ],
    complianceStandards: [
      'ISO/IEC 17025:2017 Testing and Calibration Laboratories',
      'NELAP / NELAC Environmental Laboratory Accreditation',
      'ASTM International Nuclear Sample Standard Test Methods',
      'EPA 900 Series Drinking Water Radioactivity Protocols'
    ],
    caseStudy: {
      title: 'Ultra-Trace Actinide Fingerprinting for Deep Geological Repository Barrier Integrity',
      clientSector: 'National Nuclear Waste Governance Board',
      challenge: 'Need to quantify micro-diffusion of Plutonium-239 and Americium-241 through synthetic bentonite backfill over simulated 50-year saturation.',
      solution: 'Implemented femtosecond laser ablation ICP-MS coupled with alpha track autoradiography on sub-millimeter polished core discs.',
      outcome: 'Established definitive barrier migration coefficients (Kd values) validating 10,000-year containment models.'
    },
    keyStats: [
      { label: 'Samples Analyzed / Year', value: '65,000+' },
      { label: 'Isotopic Precision', value: '0.001 ppm' },
      { label: 'ISO Accreditations', value: '42 Labs' }
    ]
  },
  {
    id: 'geological-studies',
    title: 'Geological, Subsurface & Subsoil Studies',
    shortTitle: 'Geological Studies',
    tagline: 'Deep borehole radiometric wireline logging, seismic 3D resistivity, and radon flux mapping.',
    category: 'Earth Sciences',
    iconName: 'MountainSnow',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    overview: 'Unlocking deep subsurface intelligence through advanced geophysics, structural geology, and nuclear geophysics. Our airborne, surface, and borehole crews map stratigraphy, fault permeability, hydrogeological conduits, and natural radioelement distribution for civil infrastructure, mining assets, and critical nuclear facilities.',
    keyCapabilities: [
      {
        title: 'Wireline Radiometric & Geophysical Borehole Logging',
        description: 'Multi-sensor downhole sonde arrays capturing natural gamma, spectral gamma (K, U, Th), neutron porosity, dual density, and sonic transit time.',
        metrics: 'Depths up to 3,500 meters'
      },
      {
        title: '3D Electrical Resistivity Tomography & Seismic Reflection',
        description: 'Subsurface structural imaging resolving fault zones, karst cavities, hydro-stratigraphic boundaries, and deep bedrock topography.',
        metrics: 'Sub-meter lateral resolution'
      },
      {
        title: 'Subsoil Radon Flux & Soil Gas Emanometry',
        description: 'Continuous Lucas cell monitors and alpha-track detectors quantifying Radon-222 surface exhalation rates for building foundation safety.',
        metrics: 'Continuous 0.1 Bq/m²s resolution'
      },
      {
        title: 'Geotechnical Soil Mechanics & Bearing Capacity Testing',
        description: 'Standard Penetration Testing (SPT), CPTu piezocone soundings, triaxial shear testing, and dynamic soil compaction verification.',
        metrics: 'Full ASTM & Eurocode 7 compliance'
      }
    ],
    instrumentation: [
      'Mount Sopris 2PGA-1000 Poly-Gamma Logging Sonde',
      'IRIS Syscal Pro 72-Electrode Resistivity Meter',
      'Geometrics Geode 24-Channel Exploration Seismograph',
      'Durridge RAD7 Continuous Radon-in-Air / Water Monitor'
    ],
    complianceStandards: [
      'Eurocode 7 (EN 1997) Geotechnical Design',
      'ASTM D5753 Planning and Conducting Borehole Geophysical Logging',
      'IAEA Safety Guide SSG-9 (Seismic Hazards in Nuclear Site Evaluation)',
      'USGS Radiometric Survey & Mapping Standards'
    ],
    caseStudy: {
      title: 'Subsurface Seismotectonic & Radon Hazard Evaluation for a Small Modular Reactor (SMR) Site',
      clientSector: 'Advanced Clean Energy Consortium',
      challenge: 'Confirming bedrock fault quiescence and groundwater isotopic baseline across a 400-acre coastal granite pluton.',
      solution: 'Conducted 12 line-kilometers of deep seismic reflection profiling, 8 radiometric wireline boreholes to 600m depth, and a 12-month radon flux telemetry grid.',
      outcome: 'Demonstrated zero active fault displacement over 100,000 years and secured preliminary site authorization from federal regulators.'
    },
    keyStats: [
      { label: 'Boreholes Logged', value: '4,200+' },
      { label: 'Seismic Lines Surveyed', value: '35,000 km' },
      { label: 'Site Safety Certifications', value: '100%' }
    ]
  },
  {
    id: 'mineral-extraction',
    title: 'Radioactive Mineral Identification & Extraction Technologies',
    shortTitle: 'Mineral Extraction',
    tagline: 'Precision mineralogy, Monazite/Zircon cracking, and rare earth co-extraction protocols.',
    category: 'Extractive Metallurgy',
    iconName: 'Atom',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    overview: 'Pioneering next-generation mineral identification, typification, and hydrometallurgical separation of radioactive and critical energy minerals. We provide sovereign clients and commercial mining operators with high-recovery flowsheets for Uraninite, Coffinite, Monazite, Xenotime, and Thorite ore bodies with closed-loop radiation containment.',
    keyCapabilities: [
      {
        title: 'Automated Quantitative Mineralogy (QEMSCAN / MLA)',
        description: 'Micro-beam scanning identifying mineral liberation, grain size distribution, and radiogenic host mineral associations at the micro-scale.',
        metrics: '99.4% phase accuracy'
      },
      {
        title: 'Hydrometallurgical Acid/Alkali Leaching Optimization',
        description: 'High-pressure oxidative leaching (HPAL), solvent extraction (SX), and ion-exchange (IX) resin technology to maximize U3O8 and Rare Earth recoveries.',
        metrics: '> 96.5% element recovery'
      },
      {
        title: 'Heavy Mineral Sand (Monazite/Zircon) Separation',
        description: 'Electrostatic roll separators, magnetic cross-belt separators, and gravity spirals engineered to isolate radioactive tailings safely.',
        metrics: 'Purity grade > 98.2%'
      },
      {
        title: 'Non-Proliferation Compliant Yellowcake Production',
        description: 'Precipitation, calcination, and sealed drum packaging flowsheets compliant with IAEA safeguards and ASTM C967 chemical specifications.',
        metrics: 'IAEA Safeguards compliant'
      }
    ],
    instrumentation: [
      'Thermo Scientific QEMSCAN Automated Mineralogy Suite',
      'SX Pilot Continuous Multi-Stage Mixer-Settler Banks',
      'Eriez High-Intensity Magnetic Separators (WHIMS)',
      'Büchi Automated High-Pressure Titanium Autoclaves'
    ],
    complianceStandards: [
      'IAEA Nuclear Energy Series No. NF-T-1.2 (Uranium Extraction Technology)',
      'ASTM C967 Standard Specification for Uranium Ore Concentrate',
      'JORC Code (Joint Ore Reserves Committee Guidelines)',
      'WNA (World Nuclear Association) Mining Safety Stewardship'
    ],
    caseStudy: {
      title: 'Monazite Cracking & Rare Earth Element (REE) Separation Flowsheet for Heavy Mineral Sands',
      clientSector: 'Global Critical Minerals Exploration Major',
      challenge: 'High Thorium content (6.8% ThO2) in beach sand monazite prevented commercial REE extraction due to regulatory handling restrictions.',
      solution: 'Developed a low-temperature caustic digest followed by selective thorium phosphate precipitation and multi-stage solvent extraction for Neodymium-Praseodymium.',
      outcome: 'Achieved 97.2% REE recovery while packaging thorium into an IAEA-certified solid storage matrix for future Molten Salt Reactor (MSR) feedstock.'
    },
    keyStats: [
      { label: 'Ore Flowsheets Developed', value: '180+' },
      { label: 'Average Recovery Rate', value: '96.8%' },
      { label: 'Critical Metals Identified', value: '4.8M MT' }
    ]
  },
  {
    id: 'metals-export',
    title: 'Bulk Metals Export & Global Supply Chain Logistics',
    shortTitle: 'Metals Export',
    tagline: 'Nuclear-grade alloys, shielding-certified lead, titanium, and secure international transport.',
    category: 'Global Trade',
    iconName: 'Ship',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    overview: 'Facilitating secure, certified international trade and supply chain logistics for industrial metals, radiation shielding materials, and high-performance nuclear-grade superalloys. We combine stringent spectroscopic lot-assay with seamless Class 7 hazardous material transport and global customs clearance.',
    keyCapabilities: [
      {
        title: 'Certified Radiation Shielding Metals Sourcing',
        description: 'Supply of chemical-pure virgin lead ingots (99.99%), low-background pre-WWII salvage steel, tungsten-polymer composites, and bismuth pellets.',
        metrics: 'Purity guaranteed up to 99.995%'
      },
      {
        title: 'Nuclear-Grade Titanium, Zirconium & Nickel Superalloys',
        description: 'Zircaloy-4 fuel cladding tubing, Inconel 690 steam generator alloy bar stock, and Grade 2/5 CP titanium for harsh corrosive chemical environments.',
        metrics: 'ASME Section III certified'
      },
      {
        title: 'Class 7 Dangerous Goods & Intermodal Transport',
        description: 'Type A and Type B(U) certified shipping casks, IMO Class 7 vessel chartering, GPS/satellite tamper-evident tracking, and emergency convoy escorts.',
        metrics: 'Zero transit loss incidents'
      },
      {
        title: 'Dual-Use Export Control & Sovereign Compliance',
        description: 'Rigorous end-user verification, Nuclear Suppliers Group (NSG) compliance documentation, and multi-jurisdiction trade licensing assistance.',
        metrics: 'Full ITAR/EAR compliance'
      }
    ],
    instrumentation: [
      'Thermo Niton Apollo Handheld LIBS Analyzer',
      'Olympus Vanta Handheld XRF Alloy Analyzers',
      'Satellite-Linked Cask Temperature & Dosimetry Beacons',
      'Hydraulic 2,000-Ton Precision Extrusion & Billet Presses'
    ],
    complianceStandards: [
      'ASME Boiler and Pressure Vessel Code Section III (Nuclear)',
      'IMO International Maritime Dangerous Goods (IMDG) Code Class 7',
      'Nuclear Suppliers Group (NSG) Guidelines for Nuclear Transfers',
      'ISO 9001:2015 Quality Management Systems'
    ],
    caseStudy: {
      title: 'Trans-Pacific Delivery of 2,400 Metric Tons of Ultra-Pure Chemical Lead for Submarine Shielding',
      clientSector: 'Allied Naval Defense Contractor',
      challenge: 'Urgent timeline with zero tolerance for antimony impurities (> 0.002%) and strict maritime transport security requirements.',
      solution: 'Orchestrated direct smelter spectroscopic batch qualification, specialized sea-freight container reinforcement with active GPS shock/radiation monitors.',
      outcome: 'Delivered all 2,400 MT across 3 shipments 14 days ahead of deadline with 100% metallurgical purity verification.'
    },
    keyStats: [
      { label: 'Bulk Metals Shipped', value: '1.4M MT' },
      { label: 'Countries Served', value: '48 Nations' },
      { label: 'On-Time Port Delivery', value: '99.4%' }
    ]
  }
];

export const INDUSTRY_SECTORS: SectorItem[] = [
  {
    id: 'nuclear-power',
    title: 'Nuclear Power & Clean Energy',
    tag: 'PWR, SMR & Gen-IV',
    iconName: 'Zap',
    description: 'Turnkey radiological engineering, fuel cycle assay, containment shielding, and regulatory licensing support for commercial light-water reactors and Gen-IV advanced small modular reactors.',
    keySolutions: [
      'Primary coolant loop radiochemical analysis & crud monitoring',
      'Reactor pressure vessel surveillance dosimetry',
      'Spent fuel dry cask storage shielding simulations',
      'Post-operational plant life extension (PLEX) material audits'
    ],
    certifiedProtocols: ['NRC 10 CFR 50', 'IAEA SSG-25', 'ASME BPVC Sec III'],
    impactMetric: 'Over 65 GW of global nuclear generation supported.',
    caseSummary: 'Conducted comprehensive neutron flux mapping for a 1,200 MW PWR extending licensed operating lifespan by 20 years.'
  },
  {
    id: 'defense-security',
    title: 'Defense & National Security',
    tag: 'Strategic Systems & CBRN',
    iconName: 'Shield',
    description: 'Classified facility shielding, CBRN radiological reconnaissance equipment testing, naval propulsion materials analysis, and sensitive dual-use export logistics.',
    keySolutions: [
      'Hardened bunker & submarine compartment shielding validation',
      'Tactical portal radiation monitor (RPM) calibration and testing',
      'Class 7 strategic metals supply chain and covert logistics',
      'Dirty bomb (RDD) scenario dispersion modeling and remediation plans'
    ],
    certifiedProtocols: ['DoD MIL-STD-810H', 'NATO STANAG 4154', 'ITAR / EAR Compliant'],
    impactMetric: 'Trusted vendor to 14 allied defense ministries.',
    caseSummary: 'Engineered lightweight boron-carbide composite shielding for mobile air defense command centers under tight space constraints.'
  },
  {
    id: 'aerospace-space',
    title: 'Aerospace & Deep Space Systems',
    tag: 'Cosmic Ray & Avionics Hardening',
    iconName: 'Rocket',
    description: 'High-altitude ionizing radiation shielding, single-event effect (SEE) testing, aerospace alloy purity certification, and radioisotope thermoelectric generator (RTG) material testing.',
    keySolutions: [
      'Heavy ion & proton beam component radiation hardness assurance',
      'Ultra-pure titanium and superalloy structural airframe testing',
      'Lunar and Martian regolith shielding effectiveness modeling',
      'Spacecraft electronics gamma total ionizing dose (TID) qualification'
    ],
    certifiedProtocols: ['ESA ECSS-E-ST-10-12C', 'NASA SP-8084', 'ASTM F1192'],
    impactMetric: 'Radiation protection tested on 38 orbital and deep space missions.',
    caseSummary: 'Designed multi-layer graded-Z shielding package protecting high-bandwidth sensor payloads against Jupiter radiation belts.'
  },
  {
    id: 'healthcare-nuclear-med',
    title: 'Healthcare & Nuclear Medicine',
    tag: 'Radiopharmacy & Oncology',
    iconName: 'HeartPulse',
    description: 'Medical cyclotron bunker shielding design, PET/SPECT radiopharmaceutical purity verification, hot lab waste management, and clinical compliance auditing.',
    keySolutions: [
      'Cyclotron vault concrete and maze shielding design',
      'Radioiodine (I-131) and Lutetium-177 waste containment systems',
      'Radiopharmaceutical isotope assay (F-18, Tc-99m, Ac-225)',
      'Clinical staff dosimetry governance and ALARA procedures'
    ],
    certifiedProtocols: ['FDA cGMP 21 CFR 211', 'IAEA SRS No. 58', 'ISO 13485'],
    impactMetric: 'Protected over 2.4 million patient and clinical staff encounters.',
    caseSummary: 'Commissioned a multi-isotope cyclotron radiopharmacy with negative-pressure hot cells meeting cleanroom Class A specifications.'
  },
  {
    id: 'heavy-industry-mining',
    title: 'Heavy Industry & Mining',
    tag: 'Smelters, Refineries & Exploration',
    iconName: 'Factory',
    description: 'NORM/TENORM management for oil & gas drill sites, mineral sand processing plants, industrial gauge source leak testing, and bulk scrap metal radiation screening.',
    keySolutions: [
      'Scrap metal yard drive-through portal monitor installation',
      'Cracker and separator vessel NORM radioactive scale decontamination',
      'Industrial radiography (gamma source) job safety management',
      'Continuous radiometric mineral slurry grade monitoring'
    ],
    certifiedProtocols: ['OSHA 1910.1096', 'API RP 54 (TENORM Guidelines)', 'ISO 45001'],
    impactMetric: '320,000 tons of industrial radioactive scale decontaminated.',
    caseSummary: 'Prevented accidental smelter melt-in of a cesium-137 sealed source through automated dual-energy spectroscopy alarms.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Next-Generation Monte Carlo Modeling in Complex SMR Shielding Architectures',
    slug: 'next-gen-monte-carlo-modeling-smr-shielding',
    excerpt: 'How high-performance MCNP6 simulations are enabling compact Small Modular Reactors to reduce structural concrete mass by 38% without compromising external biological boundaries.',
    category: 'Radiation Science',
    readTime: '8 min read',
    date: 'August 14, 2026',
    author: {
      name: 'Dr. Elena Rostova',
      role: 'Chief Nuclear Physicist & VP of Safety Engineering',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    tags: ['MCNP6', 'SMR', 'Shielding Design', 'Neutron Attenuation', 'Nuclear Safety'],
    featured: true,
    content: {
      executiveSummary: 'Small Modular Reactors (SMRs) demand unprecedented spatial efficiency. Traditional pressurized water reactor shielding guidelines rely on oversized monolithic concrete structures that are economically unfeasible in modular factory-fabricated deployments. This paper outlines our proprietary graded-Z composite optimization framework that reduces shielding envelope volume by 38%.',
      sections: [
        {
          heading: '1. The Dimensional Challenge of Modular Containment',
          body: 'When reducing reactor core footprints to fit within transportable railcar and barge dimensions (sub-4.5 meter envelope), biological shielding mass must be radically condensed. Secondary gamma rays resulting from thermal neutron capture in standard structural steel present the primary dose driver.',
          callout: 'Neutron capture reactions (n, γ) in standard carbon steel generate 7.6 MeV prompt gammas, necessitating secondary heavy lead or bismuth attenuation layers downstream.'
        },
        {
          heading: '2. Layered Graded-Z Optimization Methodologies',
          body: 'By alternating low-Z hydrogenous moderator layers (such as silicone-bonded boron carbide) with high-Z refractory alloys (tungsten-bismuth matrices), neutron moderation and subsequent gamma attenuation occur within a synchronized spatial gradient. Our simulations demonstrate a 4.2x reduction in secondary scatter radiation compared to conventional borated concrete.'
        },
        {
          heading: '3. Empirical Validation at Oak Ridge Facility',
          body: 'Coupled neutron-gamma beam tests conducted at our Tennessee hot-testing facility confirmed our predictive MCNP6.2 code within 0.7% variance across the full 0.1 eV to 14 MeV flux spectrum. This provides licensing authorities with the statistical confidence necessary for accelerated Title 10 CFR Part 52 design approvals.'
        }
      ],
      keyTakeaways: [
        'Graded-Z shielding architectures decrease modular reactor dry weight by up to 38%.',
        'Boronated polymer-tungsten composites eliminate prompt neutron capture hot-spots.',
        'Continuous telemetric dosimeters confirm full ALARA compliance across operational shifts.'
      ],
      citations: [
        'Rostova, E., et al. (2025). "Graded-Z Shielding Optimization for Transportable Micro-Reactors." Journal of Nuclear Materials & Protection, 44(2), 112-128.',
        'IAEA Safety Reports Series No. 116: Shielding Aspects of Advanced Nuclear Systems (Vienna, 2024).'
      ]
    }
  },
  {
    id: 'post-2',
    title: 'Managing TENORM in Brownfield Energy Redevelopments: A Legal & Technical Guide',
    slug: 'managing-tenorm-brownfield-energy-redevelopments',
    excerpt: 'A comprehensive operational framework for isolating Radium-226 and Lead-210 scales in decommissioned oil, gas, and geothermal assets for commercial site recertification.',
    category: 'Environmental Remediation',
    readTime: '6 min read',
    date: 'July 28, 2026',
    author: {
      name: 'Marcus Vance, PE',
      role: 'Director of Environmental Remediation',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    },
    tags: ['TENORM', 'Radium-226', 'Remediation', 'EPA Compliance', 'Soil Washing'],
    content: {
      executiveSummary: 'Decommissioning mature petroleum and industrial infrastructure frequently uncovers Technologically Enhanced Naturally Occurring Radioactive Material (TENORM). Unmanaged deposits create catastrophic legal liabilities and project freezes. This brief details closed-loop chemical extraction and vitrification techniques that restore land to unrestricted public use.',
      sections: [
        {
          heading: '1. Radionuclide Speciation in Industrial Scale',
          body: 'As formation waters undergo pressure and temperature drops in piping systems, Radium co-precipitates with Barium and Strontium sulfates (RaSO4/BaSO4). These scales exhibit specific activities exceeding 3,700 Bq/g, requiring regulated Class 7 transport protocols.',
          callout: 'Radium-226 has a 1,600-year half-life and decays to Radon-222 gas, posing severe long-term inhalation hazards if uncontained.'
        },
        {
          heading: '2. Closed-Loop Ultrasonic & Chelation Soil Washing',
          body: 'Rather than dispatching massive tonnages to expensive deep burial facilities, our mobile processing units use high-power ultrasonic baths combined with citric acid chelating agents. This strips 96% of isotopic contaminants into a concentrated slurry representing less than 3% of original material bulk.'
        }
      ],
      keyTakeaways: [
        'In-situ volume reduction saves up to 74% in specialized waste disposal fees.',
        'Continuous gamma surveys ensure EPA unrestricted release benchmarks (< 5 pCi/g above background).',
        'Vitrification locks remaining isotopes in non-leaching glass matrices certified for 1,000+ years.'
      ],
      citations: [
        'US EPA 40 CFR Part 192 Guidelines for Soil Decontamination.',
        'Vance, M. (2025). "Economic Remediation of Heavy Hydrocarbon Scales." Environmental Geoscience Review.'
      ]
    }
  },
  {
    id: 'post-3',
    title: 'Precision Isotope Ratio Mass Spectrometry (IRMS) in Tracing Illicit Uranium Trade',
    slug: 'isotope-ratio-mass-spectrometry-illicit-uranium-trade',
    excerpt: 'How ultra-trace 234U/235U/238U isotopic fingerprinting provides non-proliferation agencies with definitive origin attribution for interdicted radioactive concentrates.',
    category: 'Regulatory Compliance',
    readTime: '10 min read',
    date: 'July 11, 2026',
    author: {
      name: 'Dr. Alistair Sterling',
      role: 'Head of Radiochemical & Forensics Analytics',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    tags: ['Nuclear Forensics', 'ICP-MS', 'Uranium Enrichment', 'IAEA Safeguards', 'IRMS'],
    content: {
      executiveSummary: 'Nuclear forensics requires instantaneous identification of intercepted nuclear materials to pinpoint ore provenance, conversion technology, and enrichment stage. Our triple-quadrupole ICP-MS workflows deliver isotopic ratios accurate to 0.001%, giving international agencies undeniable chain-of-custody evidence.',
      sections: [
        {
          heading: '1. The Geochemical Fingerprint of Ore Bodies',
          body: 'No two uranium deposits share identical trace element profiles. Rare earth distributions, lead isotope ratios (Pb-206/Pb-207), and minor actinide ratios (U-234/U-238) act as an indelible chemical fingerprint of geological origin.'
        },
        {
          heading: '2. Detection of Reprocessed & Enriched Feedstock',
          body: 'The presence of synthetic isotopes like Uranium-236 (a byproduct of reactor irradiation) reveals whether material has originated from recycled civilian power reactor fuel or virgin natural deposits.'
        }
      ],
      keyTakeaways: [
        'Triple-quad ICP-MS removes isobaric interferences for sub-ppb detection.',
        'International atomic signature databases allow origin matching in < 4 hours.',
        'Assists global maritime and border customs in nuclear trafficking interdiction.'
      ],
      citations: [
        'Sterling, A., et al. (2026). "Actinide Provenance Analysis in Interdicted Yellowcakes." Forensic Science Int., 19(4).'
      ]
    }
  },
  {
    id: 'post-4',
    title: 'Global Supply Chain Dynamics for Nuclear-Grade Zirconium and Hafnium Alloys',
    slug: 'global-supply-chain-zirconium-hafnium-alloys',
    excerpt: 'Analyzing market bottlenecks, geopolitical supply concentrations, and liquid-liquid extraction chemistry required for separation of high-neutron-transparency Zircaloys.',
    category: 'Metals Market',
    readTime: '7 min read',
    date: 'June 29, 2026',
    author: {
      name: 'Henrik Lindqvist',
      role: 'VP of Bulk Metals & International Logistics',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    tags: ['Zirconium', 'Hafnium', 'Nuclear Cladding', 'Supply Chain', 'Critical Minerals'],
    content: {
      executiveSummary: 'Zirconium has a tiny thermal neutron capture cross-section (0.18 barns), making it the gold standard for reactor fuel cladding. However, natural zircon contains 1-3% Hafnium (a potent neutron poison with a cross-section of 104 barns). This report reviews commercial separation flowsheets and supply resilience strategies.',
      sections: [
        {
          heading: '1. The Separation Imperative: MIBK vs TBP Solvents',
          body: 'Separating two elements with virtually identical atomic radii requires 60-stage continuous counter-current liquid-liquid extraction. We analyze how newer amine solvent formulations reduce chemical operational expenditure by 22%.'
        }
      ],
      keyTakeaways: [
        'Zircaloy-4 demand projected to rise 34% by 2030 due to Gen-III+ new builds.',
        'Diversified sourcing across Australia and Brazil mitigates geopolitical bottleneck risks.',
        'Full traceability from mine site to certified fuel assembly tube.'
      ],
      citations: [
        'Lindqvist, H. (2026). "Critical Metallurgy in Reactor Construction." Global Minerals Trade Review.'
      ]
    }
  },
  {
    id: 'post-5',
    title: 'Deep Borehole Radiometric Wireline Logging in Fractured Crystalline Rock',
    slug: 'deep-borehole-radiometric-logging-crystalline-rock',
    excerpt: 'Combining spectral gamma ray (SGR) logs with acoustic televiewer data to characterize micro-fracture permeability for deep geological repositories (DGRs).',
    category: 'Geological Physics',
    readTime: '9 min read',
    date: 'June 05, 2026',
    author: {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Chief Geologist & Geophysics Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    tags: ['Wireline Logging', 'Spectral Gamma', 'Hydrogeology', 'DGR', 'Geophysics'],
    content: {
      executiveSummary: 'Selecting and licensing deep geological repositories for high-level radioactive waste requires absolute proof of hydrogeological isolation over million-year timeframes. This study showcases how 3-axis spectral gamma logging accurately identifies uranium/radium mobilization along shear planes.',
      sections: [
        {
          heading: '1. Dissecting Potassium, Uranium, and Thorium Ratios',
          body: 'While Thorium remains immobile in reducing subterranean waters, Uranium is soluble under oxidizing conditions. A low Th/U ratio indicates recent hydrothermal or meteoric water circulation through fracture networks, signaling potential containment vulnerabilities.'
        }
      ],
      keyTakeaways: [
        'Spectral gamma logging resolves fracture zones at 5cm vertical intervals.',
        'Acoustic televiewers provide 360-degree high-definition borehole wall acoustic reflectivity.',
        'Essential for site qualification under IAEA Safety Standards SSR-5.'
      ],
      citations: [
        'Al-Mansoor, T. (2025). "Subsurface Nuclear Geophysics for Repository Site Selection." Geochimica et Cosmochimica Acta.'
      ]
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Elena Rostova, PhD',
    role: 'Chief Nuclear Physicist & VP of Safety Engineering',
    division: 'Nuclear Physics & Safety',
    credentials: ['PhD Nuclear Science (MIT)', 'Fellow, American Nuclear Society', 'IAEA Technical Advisor (2018–Present)'],
    bio: 'Former Senior Scientist at the Institute for Transuranium Elements (ITU). With over 24 years in reactor physics, radiation transport, and MCNP shielding simulation, Dr. Rostova has overseen radiological commissioning for 28 commercial reactors and high-energy physics accelerators worldwide.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 64,
    patentsCount: 9,
    securityClearance: 'DOE Q / NATO Secret Equivalent',
    specialties: ['MCNP6 Particle Transport', 'Prompt Gamma Attenuation', 'SMR Shielding Architecture', 'ALARA Health Physics'],
    email: 'e.rostova@radiacore.tech',
    linkedin: 'linkedin.com/in/elena-rostova-nuclear'
  },
  {
    id: 'team-2',
    name: 'Dr. Tariq Al-Mansoor, PhD',
    role: 'Chief Geoscientist & Director of Subsurface Exploration',
    division: 'Geosciences & Exploration',
    credentials: ['PhD Applied Geophysics (Imperial College London)', 'Fellow, Geological Society of London (FGS)', 'Certified Professional Geologist (CPG)'],
    bio: 'Dr. Al-Mansoor brings 20+ years of international experience leading deep borehole geophysical logging campaigns, uranium mineral exploration, and seismic hazard assessments for critical sovereign energy infrastructure across Australia, the Middle East, and Scandinavia.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 42,
    patentsCount: 5,
    securityClearance: 'Sovereign Critical Infrastructure Level 3',
    specialties: ['Spectral Gamma Wireline Logging', 'Radon Soil Gas Flux', 'Uranium Mineralization Flowsheets', '3D Seismic Inversion'],
    email: 't.almansoor@radiacore.tech',
    linkedin: 'linkedin.com/in/tariq-almansoor-geophysics'
  },
  {
    id: 'team-3',
    name: 'Dr. Alistair Sterling, DSc',
    role: 'Head of Radiochemical & Forensics Analytics',
    division: 'Nuclear Physics & Safety',
    credentials: ['DSc Radiochemistry (Oxford)', 'Chartered Chemist (CChem, FRSC)', 'ISO/IEC 17025 Lead Technical Assessor'],
    bio: 'Pioneered ultra-trace actinide spectrometry and nuclear safeguards verification techniques. Dr. Sterling directs our ISO 17025 accredited analytical facilities, managing high-purity germanium detectors, triple-quadrupole ICP-MS instruments, and alpha spectrometry labs.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 88,
    patentsCount: 12,
    securityClearance: 'IAEA International Inspector Roster',
    specialties: ['HPGe Gamma Spectroscopy', 'Triple Quad ICP-MS', 'Isotope Ratio Mass Spectrometry', 'Nuclear Forensics'],
    email: 'a.sterling@radiacore.tech',
    linkedin: 'linkedin.com/in/alistair-sterling-radiochem'
  },
  {
    id: 'team-4',
    name: 'Henrik Lindqvist, MSc',
    role: 'VP of Bulk Metals & International Logistics',
    division: 'Materials & Metallurgy',
    credentials: ['MSc Metallurgical Engineering (KTH Stockholm)', 'Certified Dangerous Goods Safety Advisor (DGSA)', 'Member, WNA Working Group'],
    bio: 'Specialist in heavy metal supply chain integrity, Class 7 dangerous goods maritime chartering, and dual-use nuclear metallurgy. Henrik has directed trans-oceanic logistics of over 1.4 million metric tons of specialized industrial metals and radiation-shielding lead.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 18,
    patentsCount: 3,
    securityClearance: 'ITAR / EAR Compliance Certified',
    specialties: ['Class 7 Radioactive Transport', 'Nuclear Grade Lead Sourcing', 'Zircaloy & Titanium Logistics', 'Dual-Use Export Controls'],
    email: 'h.lindqvist@radiacore.tech',
    linkedin: 'linkedin.com/in/henrik-lindqvist-metals'
  },
  {
    id: 'team-5',
    name: 'Marcus Vance, PE',
    role: 'Director of Environmental Remediation & Waste Systems',
    division: 'Regulatory & Ethics',
    credentials: ['Professional Engineer (PE - Civil/Environmental)', 'Certified Health Physicist (CHP)', 'MARSSIM Certified Practitioner'],
    bio: 'Marcus oversees large-scale contaminated soil washing, NORM/TENORM waste stabilization, and groundwater hydrogeological remediation. His teams have restored over 18,500 hectares of legacy brownfields and uranium tailings sites across North America and Europe.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 29,
    patentsCount: 6,
    securityClearance: 'EPA Hazardous Operations Level A',
    specialties: ['NORM / TENORM Decontamination', 'Hydrogeological Modeling', 'Tailings Vitrification', 'MARSSIM Site Release Surveys'],
    email: 'm.vance@radiacore.tech',
    linkedin: 'linkedin.com/in/marcus-vance-remediation'
  },
  {
    id: 'team-6',
    name: 'Victoria Vance-Serrano, JD',
    role: 'Chief Legal Officer & Global Regulatory Affairs',
    division: 'Executive Board',
    credentials: ['JD International Energy Law (Georgetown)', 'LLM Nuclear Law (Montpellier)', 'Member, International Nuclear Law Association (INLA)'],
    bio: 'Leading our international compliance, sovereign trade authorizations, and regulatory licensing across NRC, EURATOM, and IAEA jurisdictions. Victoria ensures all extraction, testing, and transport operations align with global non-proliferation mandates.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 14,
    patentsCount: 0,
    securityClearance: 'International Trade Diplomatic Pass',
    specialties: ['Nuclear Non-Proliferation Treaty (NPT)', 'Sovereign Licensing', 'Bilateral Safeguards Agreements', 'Environmental Liability Law'],
    email: 'v.serrano@radiacore.tech',
    linkedin: 'linkedin.com/in/victoria-serrano-legal'
  }
];

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Technical White Paper: Graded-Z Composite Shielding Protocols for Small Modular Reactors',
    type: 'White Paper',
    documentId: 'RC-WP-2026-088',
    size: '4.8 MB',
    date: 'Aug 2026',
    category: 'Radiological Protection',
    abstract: 'An exhaustive engineering treatise documenting MCNP6 multi-physics simulations, prompt gamma attenuation metrics, and thermal stress tolerances of boron-doped tungsten composite shielding matrices.',
    pages: 48,
    securityLevel: 'IAEA Accredited'
  },
  {
    id: 'res-2',
    title: 'Standard Operating Protocol: NORM / TENORM Identification & Safe Field Stabilization',
    type: 'Safety Protocol',
    documentId: 'RC-SOP-TENORM-04',
    size: '3.2 MB',
    date: 'Jul 2026',
    category: 'Environmental Remediation',
    abstract: 'Step-by-step regulatory manual detailing personal dosimetry requirements, gamma survey grid calibration, respiratory PPE selection, and ultrasonic decontamination of radium-bearing piping scales.',
    pages: 36,
    securityLevel: 'Public Domain'
  },
  {
    id: 'res-3',
    title: 'Laboratory Methodology: Cryogenic HPGe Gamma Spectroscopy for Ultra-Low Specific Activity',
    type: 'Technical Standard',
    documentId: 'RC-STD-HPGE-102',
    size: '5.1 MB',
    date: 'Jun 2026',
    category: 'Analytical Services',
    abstract: 'Complete calibration standard for coaxial and planar high-purity germanium detectors operating inside low-background pre-WWII lead vaults with efficiency curves from 40 keV to 2.7 MeV.',
    pages: 62,
    securityLevel: 'Controlled Industry Access'
  },
  {
    id: 'res-4',
    title: 'Geological Field Guide: Downhole Spectral Gamma Logging & Radioelement Quantification',
    type: 'Technical Standard',
    documentId: 'RC-GEO-SGR-019',
    size: '7.4 MB',
    date: 'May 2026',
    category: 'Earth Sciences',
    abstract: 'Wireline sonde operational protocols for stripping Compton scatter and converting count rates into parts-per-million (ppm) Uranium, Thorium, and percentage Potassium in deep bedrock.',
    pages: 84,
    securityLevel: 'Controlled Industry Access'
  },
  {
    id: 'res-5',
    title: 'Global Trade Standard: Class 7 Radioactive Material Maritime Logistics & Dual-Use Export Manual',
    type: 'Regulatory Guide',
    documentId: 'RC-REG-MARITIME-7',
    size: '6.0 MB',
    date: 'Apr 2026',
    category: 'Global Trade',
    abstract: 'Comprehensive compliance guide addressing IAEA SSR-6 transport regulations, IMO Class 7 placard requirements, Type A/B packaging certifications, and Nuclear Suppliers Group (NSG) declarations.',
    pages: 110,
    securityLevel: 'IAEA Accredited'
  },
  {
    id: 'res-6',
    title: 'Hydrometallurgy Handbook: Monazite Alkaline Digest & Rare Earth Element Recovery Flowsheets',
    type: 'White Paper',
    documentId: 'RC-WP-REE-2026',
    size: '8.3 MB',
    date: 'Mar 2026',
    category: 'Extractive Metallurgy',
    abstract: 'Chemical kinetics, autoclave operational parameters, and solvent extraction equilibrium diagrams for separating Neodymium, Dysprosium, and Praseodymium while isolating Thorium byproducts.',
    pages: 92,
    securityLevel: 'Controlled Industry Access'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'ALARA Principle',
    acronym: 'ALARA',
    category: 'Radiation Safety',
    definition: 'An acronym for "As Low As Reasonably Achievable." A fundamental regulatory safety principle requiring that all radiation exposures be minimized through time, distance, shielding, and engineered controls, taking into account economic and societal factors.',
    regulatoryBody: 'US NRC Title 10 CFR Part 20 / ICRP Publication 103',
    formula: 'Dose = (Dose Rate × Time) / Distance²'
  },
  {
    term: 'Becquerel',
    acronym: 'Bq',
    category: 'Nuclear Physics',
    definition: 'The SI derived unit of radioactivity, defined as the activity of a quantity of radioactive material in which one nucleus decays per second (1 Bq = 1 dps). Replaces the legacy Curie (1 Ci = 3.7 × 10¹⁰ Bq).',
    regulatoryBody: 'BIPM / IAEA Nuclear Quantities and Units',
    formula: '1 Bq = 1 disintegration / second'
  },
  {
    term: 'Sievert & Millisievert',
    acronym: 'Sv / mSv',
    category: 'Radiation Safety',
    definition: 'The SI unit of equivalent and effective radiation dose, representing the stochastic health risk of ionizing radiation on human tissue. 1 Sv = 1 Joule per kilogram weighted by radiation and tissue factors.',
    regulatoryBody: 'ICRP / IAEA Safety Standards SSR-6',
    formula: 'H = D × wR (Equivalent Dose = Absorbed Dose × Radiation Weighting Factor)'
  },
  {
    term: 'TENORM & NORM',
    acronym: 'TENORM',
    category: 'Environmental',
    definition: 'Naturally Occurring Radioactive Material (NORM) whose radionuclide concentrations have been increased or technologically enhanced through industrial processing such as mining, water treatment, oil/gas refining, or geothermal energy extraction.',
    regulatoryBody: 'US EPA 40 CFR / IAEA Safety Report Series No. 49'
  },
  {
    term: 'High-Purity Germanium Spectroscopy',
    acronym: 'HPGe',
    category: 'Radiation Safety',
    definition: 'A semiconductor diode detector operated at liquid nitrogen temperatures (77 Kelvin) that provides ultra-high energy resolution for identifying individual gamma-emitting isotopes in complex environmental and nuclear samples.',
    regulatoryBody: 'IEEE Std 325 / ISO/IEC 17025'
  },
  {
    term: 'Prompt Criticality',
    category: 'Nuclear Physics',
    definition: 'The state where a nuclear chain reaction is self-sustaining on prompt neutrons alone, without requiring delayed neutrons from fission product decay. A condition avoided in all commercial reactor design through negative reactivity feedback coefficients.',
    regulatoryBody: 'IAEA Safety Glossary'
  },
  {
    term: 'Spectral Gamma-Ray Logging',
    acronym: 'SGR',
    category: 'Geology',
    definition: 'A wireline downhole geophysical method that uses a scintillation or semiconductor sensor to measure the discrete energy spectra of Potassium (K-40 at 1.46 MeV), Uranium (Bi-214 at 1.76 MeV), and Thorium (Tl-208 at 2.61 MeV).',
    regulatoryBody: 'ASTM D5753 / SPWLA Standards'
  },
  {
    term: 'Zircaloy Cladding',
    category: 'Metallurgy',
    definition: 'A group of high-zirconium alloys (e.g. Zircaloy-2, Zircaloy-4) alloyed with tin, iron, chromium, and nickel, possessing ultra-low thermal neutron capture cross-sections for fuel element containment in nuclear reactors.',
    regulatoryBody: 'ASTM B353 / ASME BPVC Section III'
  },
  {
    term: 'Radon Emanometry & Flux',
    acronym: 'Rn-222',
    category: 'Environmental',
    definition: 'The rate of Radon-222 gas exhalation per unit area of soil or rock surface per unit time, measured in Becquerels per square meter per second (Bq/m²·s), critical for civil engineering foundation risk mitigation.',
    regulatoryBody: 'US EPA Radon Action Level (4.0 pCi/L)'
  },
  {
    term: 'Type B(U) Radioactive Packaging',
    category: 'Metallurgy',
    definition: 'A heavily shielded, impact- and fire-resistant transportation cask certified to withstand severe maritime and rail accident conditions (9-meter drop, 800°C fire for 30 minutes, 15-meter water submersion) without loss of containment.',
    regulatoryBody: 'IAEA SSR-6 / US DOT 49 CFR Part 173'
  }
];

export const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    id: 'off-1',
    city: 'Greater Noida',
    country: 'India',
    role: 'Global Headquarters & International Regulatory Affairs',
    address: 'F-22 & F-23, Site-C, UPSIDC Industrial Area, Greater Noida, Uttar Pradesh 201306, India',
    phone: '+91 8873282265 | AMIT AGARWAL (Marketing Head Officer, India)',
    emergencyPhone: '+91 8873282265 | AMIT AGARWAL (Marketing Head Officer, India)',
    email: 'admin@zentrixmetals.com',
    timezone: 'Asia/Kolkata (UTC+5:30 / IST)',
    coordinates: { lat: 28.4595, lng: 77.0266 },
    facilitySpecs: [
      'EURATOM Liaison Mission',
      'Nuclear Non-Proliferation Governance Office',
      'International Legal & Ethics Directorate'
    ]
  },
];

export const OPERATIONAL_IMAGES: OperationalImageItem[] = [
  {
    id: 'img-subsurface-lab',
    title: 'Deep Geological Repository & Underground Cavern Research Station',
    subtitle: 'Global Research Network: Radiation Safety & Geological Studies',
    category: 'Geological Studies',
    section: 'Geological Studies & Underground Research Caverns',
    serviceId: 'geological-studies',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    description: 'Subterranean bedrock research station outfitted with high-density borehole monitoring, automated telemetry consoles, and holographic seismic fault visualizations for deep repository safety qualification.',
    badge: 'Underground Research Cavern',
    telemetryTag: 'GLOBAL RESEARCH NETWORK // DEPTH: -450M // BEDROCK: GRANITIC PLUTON',
    location: 'Geneva Subsurface Physics Center, Switzerland',
    aspectRatio: '16:9'
  },
  {
    id: 'img-borehole-logging',
    title: 'Subsurface Radiometric Borehole Research & Wireline Complex',
    subtitle: 'Continuous Downhole Gamma Sonde Monitoring & Stratigraphy',
    category: 'Geological Studies',
    section: 'Subsurface Logging & SMR Site Evaluation',
    serviceId: 'geological-studies',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    description: 'Real-time wireline logging sonde operations capturing continuous spectral gamma, dual-density lithology, and hydrogeological permeability profiles up to 3,500 meters depth.',
    badge: 'Wireline Telemetry',
    telemetryTag: 'SONDE STATUS: 2PGA-1000 // DEPTH: 1,280M // FORMATION: QUARTZ MONZONITE',
    location: 'Pilbara Basin Deep Depository, WA',
    aspectRatio: '16:9'
  },
  {
    id: 'img-environmental-stream',
    title: 'Environmental Radionuclide & Hydrogeological Field Crew',
    subtitle: 'Surface Water, Sediment Coring & Real-Time Hydrology beside Eco-Facility',
    category: 'Environmental Remediation',
    section: 'Environmental Protection & Water Basin Audits',
    serviceId: 'environmental-remediation',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    description: 'Field scientists gathering continuous stream baseline samples and shallow soil cores adjacent to an eco-engineered modular analytical facility with solar green-roof.',
    badge: 'Field Hydrology',
    telemetryTag: 'GROSS ALPHA/BETA: <0.02 Bq/L // PH: 7.2 // TRITIUM: NON-DETECT',
    location: 'Black Forest Watershed Monitoring Base, Germany',
    aspectRatio: '16:9'
  },
  {
    id: 'img-radiochemical-spectrometer',
    title: 'Automated Radiochemical Chromatography & Spectrometry Suite',
    subtitle: 'Multi-Isotope Scintillation Racks with Real-Time Spectral Peak Analysis',
    category: 'Analytical Services',
    section: 'ISO/IEC 17025 Radiochemical Assay & Isotopic Verification',
    serviceId: 'lab-testing',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    description: 'Automated liquid scintillation counting and high-performance radiochemical separation manifold for ultra-trace quantification of pure beta and gamma-emitting actinides.',
    badge: 'Liquid Scintillation',
    telemetryTag: 'CHANNELS: 4096 // RESOLUTION: 0.8 keV FWHM // RADIONUCLIDES: CS-137 / SR-90',
    location: 'Oak Ridge Analytical Complex, TN, USA',
    aspectRatio: '16:9'
  },
  {
    id: 'img-maritime-metals-port',
    title: 'Deep-Sea Bulk Metals Shipping Terminal & Cargo Port',
    subtitle: 'Class 7 Certified Maritime Logistics for Pure Lead & Nuclear Alloys',
    category: 'Materials & Metallurgy',
    section: 'Bulk Metals Export & Class 7 Trans-Oceanic Supply Chain',
    serviceId: 'metals-export',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    description: 'Evening operations at deepwater container and bulk metals terminal loading high-purity chemical lead ingots and nuclear-grade zirconium tubes aboard the chartered freighter Apex Explorer.',
    badge: 'Maritime Logistics',
    telemetryTag: 'VESSEL: APEX EXPLORER // TONNAGE: 2,400 MT LEAD (99.99%) // IMO CLASS 7 SECURE',
    location: 'Port of Antwerp / Rotterdam Logistics Depot',
    aspectRatio: '16:9'
  },
  {
    id: 'img-core-sample-inspection',
    title: 'Diamond Drill Core Sample Repository & Geological Inspection',
    subtitle: 'High-Density Core Trays Inspection with Hand Loupe & GIS Tablet',
    category: 'Geological Studies',
    section: 'Geological Studies & Core Logging Warehouses',
    serviceId: 'geological-studies',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
    description: 'Senior exploration geologist conducting precision lithological examination on diamond drill core trays to map secondary pitchblende mineralization and structural fracture orientations.',
    badge: 'Core Petrography',
    telemetryTag: 'TRAY: BH-A-04 (124M-128M) // MINERAL: URANINITE / MONAZITE // RQD: 92%',
    location: 'Athabasca Basin Core Repository, Canada',
    aspectRatio: '16:9'
  },
  {
    id: 'img-underground-uranium-mining',
    title: 'Underground Continuous Mining & Radiogenic Ore Extraction',
    subtitle: 'Heavy Continuous Cutter Extracting Glowing Uranium Ore Vein',
    category: 'Mining & Extraction',
    section: 'Radioactive Mineral Extraction & Heavy Industry',
    serviceId: 'mineral-extraction',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1600&q=80',
    description: 'Low-profile electric mining continuous cutter extracting high-grade pitchblende and coffinite ore in a heavily ventilated underground stope with active dosimetric alarms.',
    badge: 'Continuous Mining',
    telemetryTag: 'ORE GRADE: 3.8% U3O8 // DOSERATE: 0.14 μSv/h // DUST SUPPRESSION: ACTIVE',
    location: 'Olympic Dam Subsurface Sector, South Australia',
    aspectRatio: '16:9'
  },
  {
    id: 'img-geoscience-gis-conference',
    title: 'Collaborative Geosciences & 3D Subsurface Visualization Hub',
    subtitle: 'Interactive Touchscreen Terrain Inversion & Structural Fault Modeling',
    category: 'Exploration Intelligence',
    section: 'About RadiaCore & Collaborative Exploration Strategy',
    serviceId: 'geological-studies',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    description: 'Multi-disciplinary team of geophysicists, structural geologists, and civil engineers reviewing 3D seismic inversion and radiometric wireline cross-sections on high-definition interactive display.',
    badge: '3D GIS Touchscreen',
    telemetryTag: '3D FAULT INVERSION // COVERAGE: 400 KM² // BEDROCK STABILITY: 100K YR QUARTER',
    location: 'Perth Geosciences Innovation Hub, Australia',
    aspectRatio: '16:9'
  },
  {
    id: 'img-corporate-hq-twilight',
    title: 'RadiaCore Global Corporate Headquarters & Innovation Campus',
    subtitle: 'Illuminated Glass Architecture & Global Operations Control Reflection Pool',
    category: 'Corporate & Facilities',
    section: 'About RadiaCore & Global Headquarters',
    serviceId: 'radiation-safety',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    description: 'Twilight view of RadiaCore\'s global headquarters featuring energy-efficient architectural glass, security-cleared command centers, and the illuminated reflection pool displaying our international research grid.',
    badge: 'Global Headquarters',
    telemetryTag: 'GLOBAL DIRECTORY // GENEVA - OAK RIDGE - PERTH - TOKYO - SANTIAGO - ABU DHABI',
    location: 'Geneva Headquarters, Switzerland',
    aspectRatio: '16:9'
  },
  {
    id: 'img-radiation-calibration-lab',
    title: 'Radiation Dosimetry & Survey Meter Calibration Facility',
    subtitle: 'Traceable Cs-137 Beam Calibration & Personal Dosimeter Verification',
    category: 'Radiation Safety',
    section: 'Radiation Safety & Calibration Laboratories',
    serviceId: 'radiation-safety',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1600&q=80',
    description: 'Certified Health Physicists performing NIST-traceable calibration on ionization chambers, Geiger-Müller survey meters, and electronic personal dosimeters against a verified Cesium-137 reference beam.',
    badge: 'Dosimetry Standards',
    telemetryTag: 'ISOTOPE: CS-137 (662 keV) // PRECISION: ±1.2% // NIST TRACEABLE CALIBRATION',
    location: 'Oak Ridge Calibration Laboratory, TN, USA',
    aspectRatio: '16:9'
  },
  {
    id: 'img-drone-environmental-remediation',
    title: 'Aerial Drone Telemetry & Industrial Site Remediation',
    subtitle: 'Hexacopter Radiometric Surveying over Heavy Earthmoving Reclamation',
    category: 'Environmental Remediation',
    section: 'Environmental Remediation & Drone Field Surveys',
    serviceId: 'environmental-remediation',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    description: 'Autonomous aerial survey drone equipped with NaI(Tl) gamma scintillation sensors tracking dynamic radionuclide distribution as excavators and compactors recontour contaminated soil.',
    badge: 'Aerial Remediation',
    telemetryTag: 'ALTITUDE: 35M // RTK ACCURACY: 2CM // LAND REMEDIATION IN PROGRESS // EPA 40 CFR',
    location: 'Colorado Plateau Uranium Tailings Reclamation Project',
    aspectRatio: '16:9'
  },
  {
    id: 'img-mountain-exploration-drill-rig',
    title: 'High-Altitude Tracked Diamond Exploration Drilling Rig',
    subtitle: 'Alpine Mineral Exploration with Seismic Geophone Array & 3D Wireframe Telemetry',
    category: 'Geological Studies',
    section: 'Geological Exploration & Alpine Field Programs',
    serviceId: 'geological-studies',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    description: 'All-terrain tracked diamond core drill rig collecting deep bedrock cores at 2,850m elevation while geophysical field crews deploy passive seismic geophone arrays.',
    badge: 'Diamond Core Rig',
    telemetryTag: 'RIG: BOART LONGYEAR LF90D // CORE: NQ3 // WIREFRAME ANOMALY: HIGH DENSITY',
    location: 'Andean Cordillera Exploration Base, Chile',
    aspectRatio: '16:9'
  },
  {
    id: 'img-hpge-gamma-spectroscopy',
    title: 'High-Purity Germanium (HPGe) Shielded Lead Castle Laboratory',
    subtitle: 'Health Physicist Loading Radioactive Transport Cask with Long Tongs',
    category: 'Analytical Services',
    section: 'Advanced Radiation Lab Testing & Nuclear Forensics',
    serviceId: 'lab-testing',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80',
    description: 'Cryogenically cooled coaxial HPGe detector inside a 100mm ultra-low background pre-WWII lead shielding castle analyzing radioactive isotopic fingerprints for nuclear safeguards.',
    badge: 'HPGe Cryo-Detector',
    telemetryTag: 'DETECTOR: CRYO-HPGe COAXIAL // SHIELD: 100mm LEAD // SPECTRUM: LIVE',
    location: 'Geneva Radiochemical Forensics Facility',
    aspectRatio: '16:9'
  },
  {
    id: 'img-heavy-metals-warehouse-qc',
    title: 'Heavy Metals Logistics Depot & Handheld XRF Quality Control',
    subtitle: 'Barcode / QR Verification on Heavy Nuclear Alloy Billets with Gantry Crane',
    category: 'Materials & Metallurgy',
    section: 'Bulk Metals Quality Assurance & ASME Metallurgy',
    serviceId: 'metals-export',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    description: 'Quality assurance metallurgists verifying chemical composition and heat numbers of nuclear-grade steel and lead shielding billets using handheld X-ray fluorescence spectrometers.',
    badge: 'Metals QA/QC',
    telemetryTag: 'XRF SCAN: NITON XL5 // LOT: BATCH-8849 // PURITY: 99.99% // ASME SEC III PASSED',
    location: 'Global Metals Hub, Houston & Duisburg',
    aspectRatio: '16:9'
  },
  {
    id: 'img-executive-leadership-boardroom',
    title: 'RadiaCore Executive Leadership Team',
    subtitle: 'Chief Compliance Officer, Managing Director, Chief Geoscientist & Chief Nuclear Officer',
    category: 'Leadership & Governance',
    section: 'Executive Leadership & Corporate Governance',
    serviceId: 'radiation-safety',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    description: 'RadiaCore\'s executive leadership team gathered in the corporate boardroom before the illuminated brand emblem, guiding nuclear non-proliferation, environmental stewardship, and global exploration.',
    badge: 'Executive Boardroom',
    telemetryTag: 'RADIACORE EXECUTIVE BOARD // C-SUITE GOVERNANCE // IAEA ACCREDITED DIRECTORS',
    location: 'Geneva Headquarters Boardroom',
    aspectRatio: '16:9'
  },
  {
    id: 'img-nuclear-decay-hologram',
    title: 'Advanced Nuclear Decay Chain Holographic Display & Radiophysics',
    subtitle: 'U-238 Decay Series (U-238 -> Th -> Pa -> U -> Pb) in Glovebox Cleanroom',
    category: 'Nuclear Physics',
    section: 'Nuclear Physics & Decay Simulator',
    serviceId: 'radiation-safety',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    description: 'Holographic projection of atomic decay steps and nucleus fission mechanics inside an ISO Class 5 radiochemistry glovebox workstation used for advanced nuclear research.',
    badge: 'Atomic Decay HUD',
    telemetryTag: 'DECAY CHAIN: U-238 (4.468B yr) -> TH-234 -> PA-234 -> U-234 -> PB-206 (STABLE)',
    location: 'Oak Ridge Quantum Physics Division, USA',
    aspectRatio: '16:9'
  },
  {
    id: 'img-open-pit-mining-telemetry',
    title: 'Open-Pit Mine Telemetry & Geological Grade Control',
    subtitle: 'Digital Wireframe 3D Mesh Overlay: Site Sector 4B Mineral Density Analysis',
    category: 'Mining & Heavy Industry',
    section: 'Heavy Industry & Mining Sector Specialization',
    serviceId: 'mineral-extraction',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80',
    description: 'High-angle panoramic view of massive open-pit critical mineral mine with augmented reality wireframe overlay displaying real-time bench grade control and autonomous haulage paths.',
    badge: 'Pit Grade Control',
    telemetryTag: 'SITE SECTOR 4B // MINERAL DENSITY: HIGH GRADE // EXTRACTION STATUS: 78% COMPLETE',
    location: 'Rössing / Husab Mining Basin',
    aspectRatio: '16:9'
  },
  {
    id: 'img-radiochemistry-luminescence-bench',
    title: 'Luminescent Radiochemistry & Isotope Separation Apparatus',
    subtitle: 'Reflux Distillation Manifolds & Continuous Solvent Extraction Glassware',
    category: 'Analytical Services',
    section: 'Healthcare & Nuclear Medicine Sector',
    serviceId: 'lab-testing',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80',
    description: 'Specialized radiochemical synthesis bench with illuminated fluorescent reagents and high-vacuum manifold lines used for purifying alpha-emitting targeted cancer therapy isotopes.',
    badge: 'Radiopharmacy Bench',
    telemetryTag: 'ISOTOPE: ACTINIUM-225 / LUTETIUM-177 // SPECIFIC ACTIVITY: >99.9% // FDA cGMP',
    location: 'Tokyo Radiopharmaceutical Innovation Center',
    aspectRatio: '16:9'
  },
  {
    id: 'img-mountain-gnss-surveying-station',
    title: 'High-Precision Alpine GNSS / RTK Satellite Surveying Base Station',
    subtitle: 'Trimble Base Receiver on High Mountain Ridge with GIS Geodetic Tablet',
    category: 'Geological Studies',
    section: 'Geodetic Topographic Surveys & Geological Field Guides',
    serviceId: 'geological-studies',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    description: 'Ruggedized RTK GNSS dual-frequency satellite receiver and geodetic field controller established on high-alpine bedrock ridge for sub-centimeter geological fault displacement monitoring.',
    badge: 'GNSS RTK Base',
    telemetryTag: 'TRIMBLE R12i // RTK FIXED 3D // HRMS: 0.008M // SATELLITES: 26 GNSS',
    location: 'Swiss Alps Seismotectonic Monitoring Network',
    aspectRatio: '16:9'
  }
];

