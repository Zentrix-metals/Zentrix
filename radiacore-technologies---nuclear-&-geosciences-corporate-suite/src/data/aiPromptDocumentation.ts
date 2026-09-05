export const MASTER_AI_GENERATOR_PROMPT = `### ROLE & OBJECTIVE
You are a Principal Full-Stack Web Architect, Lead UI/UX Designer, and Nuclear & Geological Domain Specialist.
Your objective is to build a production-ready, enterprise-grade corporate web platform and technical portal for a global leader in Nuclear Science, Radiological Protection, Environmental Remediation, and Earth Sciences ("RadiaCore Technologies" / "Aegis RadiaCore Dynamics").

---

### CORE OFFERINGS TO DEEPLY INTEGRATE
1. **Radiation Safety & Protection:** MCNP6 Monte Carlo shielding design, ALARA regulatory compliance, active personal dosimetry grids, NRC Title 10 CFR / IAEA SSR-6 audits, and hot-cell containment engineering.
2. **Environmental Protection & Remediation:** NORM/TENORM hazardous scale decontamination, hydrogeological radionuclide mapping, ultrasonic soil washing, tailings encapsulation, and brownfield land restoration.
3. **Advanced Lab Testing (Radiation & Material Analysis):** ISO/IEC 17025 accredited testing facilities, cryo High-Purity Germanium (HPGe) gamma spectroscopy, Triple-Quadrupole ICP-MS, Liquid Scintillation Counting (LSC), and SEM-EDS micro-crystallography.
4. **Geological & Subsurface Studies:** Deep wireline radiometric logging (Spectral Gamma K/U/Th), 3D electrical resistivity tomography, seismic reflection profiling, soil gas Radon-222 flux monitoring, and geomechanical bearing tests.
5. **Radioactive Mineral Identification & Extraction:** Automated quantitative mineralogy (QEMSCAN/MLA), Monazite/Zircon cracking, Rare Earth Elements (REE) co-extraction, solvent extraction (SX), and IAEA-safeguarded yellowcake processing flowsheets.
6. **Bulk Metals Export & Global Supply Chain:** Nuclear-grade alloys (Zircaloy-4, Inconel 690, Grade 2 Titanium), 99.99% certified radiation shielding lead, Class 7 dangerous goods maritime chartering, Type B(U) cask transport, and ITAR/NSG dual-use trade compliance.

---

### FULL MULTI-PAGE SITE ARCHITECTURE & FUNCTIONAL SPECIFICATIONS
Build the application as an interactive, stateful multi-view single-page application with flawless navigation, rich domain models, interactive calculators, and modal workflows:

#### 1. Home (Landing Page)
- **High-Impact Hero:** Dynamic particle grid / radar scanner background canvas, bold typography ("ENGINEERING THE ATOMIC & SUBSURFACE FRONTIER"), real-time operational status badge ("GLOBAL MONITORING ACTIVE • 6 TACTICAL FACILITIES ONLINE"), dual primary CTAs ("Explore Core Capabilities" & "Request Technical Assessment"), and a live telemetry readout bar.
- **Interactive Core Business Streams Grid:** 6 high-contrast technical cards for each business pillar with icon badges, key capabilities list, compliance tags, and direct sub-page jump links.
- **Live Impact Metric Counters:** Animated counters with real-world metrics (1,480+ Critical Audits, 99.98% Regulatory Compliance, 18,500+ Hectares Remediated, 4.2M MT Managed, 42 Global Lab Accreditations).
- **Interactive Radiometric Telemetry & Decay Calculator:** An interactive widget allowing users to select radioactive isotopes (Cs-137, Co-60, U-238, I-131, Am-241), compute half-life decay curves, calculate required lead/concrete shielding thickness, and simulate sensor counts.
- **Global Client Trust Markers:** Defense ministries, nuclear energy consortiums, national labs, aerospace agencies, and international healthcare networks.
- **Recent Insights & White Paper Spotlight:** Grid of featured technical papers with tags, read-times, and instant reader access.

#### 2. About Us
- **Corporate Mission & Heritage Timeline:** Visual chronicle from 1998 pioneering research to 2026 global multi-facility operations.
- **Core Pillars:** Absolute Safety (ALARA), Sovereign Compliance (IAEA/NRC/EURATOM), Environmental Stewardship, Non-Proliferation Ethics.
- **Global Compliance & Quality Accreditations:** Interactive certification matrix displaying ISO 17025, ISO 14001, ISO 9001, ASME Section III, and IAEA SSR-6 standards.
- **Interactive Global Footprint:** Operational hubs in Geneva (HQ), Oak Ridge TN (Analytical Labs), Perth WA (Geosciences), Tokyo (Decommissioning), Santiago (Metals Logistics), and Abu Dhabi (Energy Transition).

#### 3. Services (Hub & 6 Dedicated Sub-Page Views)
- Dedicated deep-dive sub-sections for each of the 6 core streams featuring:
  - Technical overview and operational philosophy.
  - 4 Key capability breakdown cards with quantified performance metrics.
  - Deployed specialized instrumentation & analytical systems.
  - Regulatory standards & safety codes enforced.
  - Complete real-world case study (Client Sector, Technical Challenge, Engineered Solution, Quantified Outcome).
  - Direct "Request Protocol Assessment" action button linking directly to pre-filtered contact wizard.

#### 4. Industry Expertise / Sectors
- Targeted industry solutions for:
  - **Nuclear Power Generation (PWR, BWR, SMR & Gen-IV)**
  - **Defense & National Security (CBRN & Strategic Systems)**
  - **Aerospace & Deep Space (Cosmic Radiation Hardening)**
  - **Healthcare & Nuclear Medicine (Cyclotron Bunkers & Radiopharmacy)**
  - **Heavy Industry & Mining (NORM Decontamination & Smelter Screening)**
- Interactive sector switcher showcasing tailored solution stacks, certified protocols, impact metrics, and representative case highlights.

#### 5. Blogs / Technical Insights
- Filterable article repository categorized by *Radiation Science*, *Geological Physics*, *Regulatory Compliance*, *Metals Market*, and *Environmental Remediation*.
- Instant search bar filtering by keyword, isotope, or author.
- Full interactive article reader modal with executive summaries, numbered analytical subsections, key takeaway cards, and academic citations.

#### 6. Our Team & Scientific Leadership
- Grid of C-suite executives, Chief Nuclear Physicists, Geoscientists, and Health Physics Directors.
- Interactive leadership card filters by division.
- Modal popup for each leader displaying full biographical narrative, academic credentials (MIT, Oxford, Imperial, KTH), peer-reviewed publication count, patent count, security clearance level, and contact channels.

#### 7. Categories / Resource Library (Knowledge Hub)
- Curated repository of Technical White Papers, Standard Operating Protocols (SOPs), and Regulatory Guides.
- Filter by security access level: *Public Domain*, *Controlled Industry Access*, and *IAEA Accredited*.
- Interactive Document Download Simulator with live byte progress bar and instant confirmation feedback.
- Interactive Searchable Regulatory Glossary featuring essential nuclear physics and geological definitions (ALARA, Becquerel, Sievert, TENORM, HPGe, Prompt Criticality, Spectral Gamma, Zircaloy, etc.).

#### 8. Contact Us / Technical Inquiry Portal
- **Interactive 4-Step Project Assessment Wizard:**
  - *Step 1: Select Business Stream & Urgency Tier (Routine / Priority / Emergency Containment).*
  - *Step 2: Facility / Site Specifications & Geographic Location.*
  - *Step 3: Regulatory Compliance Standards & NDA Requirements.*
  - *Step 4: Primary Investigator Details & Instant Project Scope Summary.*
- **24/7 Radiological Emergency Hotline (Red Line Dispatcher):** Dedicated modal with priority protocol for active industrial contamination or transport incidents.
- **Global Office Directory:** Interactive cards with live local time clocks, direct extensions, secure PGP key fingerprints, and facility capabilities.

---

### DESIGN SYSTEM & TECHNICAL SPECIFICATIONS
- **Theme & Palette:** High-tech authoritative dark theme. Deep obsidian/slate canvas (\`#020617\`, \`#0B0F19\`), clinical slate cards (\`#0F172A\`, \`#1E293B\`), vibrant glowing cyan/radium teal accents (\`#06B6D4\`, \`#10B981\`), safety amber alerts (\`#F59E0B\`, \`#EF4444\`), and pure high-contrast typography.
- **Typography:** Display & UI in Plus Jakarta Sans / Inter; data readouts, isotopic formulas, and metrics in JetBrains Mono / monospace.
- **Micro-Interactions & Polish:** Smooth tab transitions using \`motion/react\` or CSS transitions, interactive hover effects, live canvas particle grid, responsive mobile drawer menu, and global quick search shortcut (Cmd+K / Ctrl+K).
- **Stack Standard:** React 18+, TypeScript, Tailwind CSS v4, Lucide React icons, and pure modular component structure.
- **Vercel / Production Readiness:** Fully self-contained, zero missing imports, zero runtime console errors, and instant static build compatibility.`;

export const PROMPT_MODULES = [
  {
    id: 'system-role',
    name: '1. Persona & Architectural Role',
    description: 'Defines the expert AI persona, technical domain mastery, and full-stack scope constraints.',
    content: `You are a Principal Full-Stack Web Architect, Lead UI/UX Designer, and Nuclear & Geological Domain Specialist. Your task is to construct a production-ready, highly polished, presentational corporate platform for a global nuclear and geological enterprise ("RadiaCore Technologies").`
  },
  {
    id: 'core-offerings',
    name: '2. Six Core Business Streams',
    description: 'Detailed specifications for all 6 scientific and commercial business offerings.',
    content: `Ensure the application comprehensively covers and integrates the 6 core pillars:
1. Radiation Safety & Protection (MCNP6 Monte Carlo shielding design, ALARA compliance, active telemetric dosimetry).
2. Environmental Protection & Remediation (NORM/TENORM decontamination, groundwater radionuclide tracking, soil washing).
3. Advanced Radiation Lab Testing (ISO/IEC 17025 accredited cryo-HPGe gamma spectroscopy, Triple-Quad ICP-MS).
4. Geological & Subsurface Studies (Wireline radiometric borehole logging, 3D seismic/resistivity tomography, radon soil flux).
5. Radioactive Mineral Extraction (Automated QEMSCAN mineralogy, Monazite/Zircon cracking, Rare Earth co-extraction).
6. Bulk Metals Export & Supply Chain (Zircaloy-4, Inconel 690, Titanium Grade 2, Class 7 dangerous goods maritime logistics).`
  },
  {
    id: 'page-specs',
    name: '3. Multi-Page Architecture & Components',
    description: 'Detailed specs for Home, About, Services Hub, Sectors, Insights, Team, Resources, and Contact Wizard.',
    content: `Construct the complete 8-view architecture with stateful client-side routing:
- Home: Dynamic hero with canvas particle/radar background, live telemetry simulator, decay calculator, impact counters, and trust badges.
- About Us: Corporate heritage timeline (1998-2026), international compliance matrix (IAEA, NRC, ISO 17025), and global operations map.
- Services Hub + 6 Sub-Views: Deep technical pages for each stream with instrumentation lists, case studies, and quote actions.
- Industry Sectors: Dedicated solution frameworks for Nuclear Power, Defense, Aerospace, Healthcare, and Heavy Metallurgy.
- Insights: Filterable blog grid, search bar, and full modal article reader with key takeaways and citations.
- Leadership: Executive and scientific team grid with credentials, publications, patents, security clearance, and bio modal.
- Resource Library: Downloadable technical white papers, safety protocols, and a searchable 20+ term regulatory glossary.
- Contact & Inquiry Portal: 4-step interactive project scope wizard, 24/7 emergency radiological dispatch hotline, and office directory.`
  },
  {
    id: 'design-tokens',
    name: '4. Design System & Anti-Slop Guidelines',
    description: 'Color tokens, typography pairing, mathematical spacing rules, and contrast standards.',
    content: `Aesthetic & Styling Rules:
- Obsidian/slate canvas (#020617, #0B0F19) with slate-800 borders (#1E293B) and subtle glow accents in Safety Amber (#F59E0B) and Radium Teal (#06B6D4).
- Typography: Plus Jakarta Sans / Inter for UI copy paired with JetBrains Mono for data chips, isotope formulas, and telemetric readouts.
- Zero AI clichés: No low-contrast gray text on dark backgrounds, no broken button text wrapping, no non-functional mock buttons. Ensure every single interactive control has full event handling.`
  },
  {
    id: 'deployment-config',
    name: '5. Vercel & React Deployment Configuration',
    description: 'Vite and Next.js compatible configuration for instant deployment on Vercel.',
    content: `Code Standard & Vercel Compatibility:
- Build output: Standard React + Tailwind CSS single page bundle compiling clean with 'npm run build'.
- Zero server dependencies required for core presentation. State managed smoothly via React Hooks and Local Storage.
- Clean component directory breakdown: /src/components, /src/views, /src/data, /src/types.`
  }
];
