/* =========================================================
   Eric Niyonkuru — Portfolio
   Language switcher, navigation, animations, contact form
   ========================================================= */

/* ---------- Translations ---------- */
const I18N = {
  en: {
    "lang.label": "Language",
    "lang.en": "English",
    "lang.fr": "French",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.insights": "Insights",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "brand.name": "Eric Niyonkuru",
    "brand.role": "EU–Africa Trade · Supply Chain",

    /* Home */
    "home.eyebrow": "Strategic positioning · Belgium",
    "home.title.a": "EU–Africa Trade &",
    "home.title.b": "Supply Chain Insights",
    "home.subtitle": "I analyze and simplify the inefficiencies, hidden costs, and structural barriers that slow trade between Europe and Africa — and translate them into clear, executable strategy.",
    "home.cta.primary": "Explore Insights",
    "home.cta.secondary": "Contact Me",
    "home.bullet1": "EU–Africa trade flow analysis & friction mapping",
    "home.bullet2": "Cross-border logistics, compliance & cost diagnostics",
    "home.bullet3": "Market-entry strategy for SMEs and operators",
    "home.metric1.num": "2 Markets",
    "home.metric1.lbl": "EU & EAC focus",
    "home.metric2.num": "4 Languages",
    "home.metric2.lbl": "EN · FR · NL · SW",
    "home.metric3.num": "1 Mission",
    "home.metric3.lbl": "Simplify trade",

    "strip.1": "Trade Compliance",
    "strip.2": "Logistics Strategy",
    "strip.3": "Market Entry",
    "strip.4": "Supply Chain Design",
    "strip.5": "EU–Africa Corridor",

    "home.pillars.eyebrow": "What I focus on",
    "home.pillars.title": "Three lenses for serious EU–Africa operators",
    "home.pillars.subtitle": "Most trade conversations stop at logistics. Real value is built where compliance, capital, and corridor design meet.",
    "home.pillar1.title": "Trade & Compliance",
    "home.pillar1.body": "Decoding the documentation, tariff regimes, and certification logic that decide whether a shipment arrives — or stalls at customs.",
    "home.pillar2.title": "Logistics & Cost Structure",
    "home.pillar2.body": "Mapping where cost actually lives: handling, demurrage, last-mile, financing, and the soft costs that never show on a freight quote.",
    "home.pillar3.title": "Market Entry & Strategy",
    "home.pillar3.body": "Helping European SMEs enter African markets — and African operators meet European standards — without burning 18 months of trial and error.",

    "home.featured.eyebrow": "Selected insights",
    "home.featured.title": "Sharper questions about a misunderstood corridor",
    "home.featured.cta": "See all insights",

    "home.cta.eyebrow": "Let's build something durable",
    "home.cta.title": "Looking for a partner who reads both maps — Brussels and Bujumbura?",
    "home.cta.body": "I'm open to internships, structured collaborations, and conversations with operators, founders, and investors moving capital or goods across the EU–Africa corridor.",

    /* About */
    "about.eyebrow": "About Eric",
    "about.title": "Two markets. One operator. A long-term thesis.",
    "about.lead": "I grew up in Burundi and now study International Business in Belgium. I sit at the intersection of two economies that should trade more, understand each other better, and stop losing value at the border.",
    "about.bio.h": "The story",
    "about.bio.p1": "I was born in Burundi, where informal trade, scarcity, and resilience are part of the daily economic vocabulary. Moving to Belgium for university gave me access to the other side of the equation: regulated markets, structured logistics, and institutional capital.",
    "about.bio.p2": "That contrast is not a footnote — it is my operating advantage. I read both economic languages: the improvisational logic of African SMEs and the procedural logic of European systems.",
    "about.bio.p3": "My work is about removing friction between those two worlds. Less theory, more execution.",

    "about.profile.label1": "Based in",
    "about.profile.value1": "Belgium",
    "about.profile.label2": "Origin",
    "about.profile.value2": "Burundi",
    "about.profile.label3": "Studying",
    "about.profile.value3": "International Business",
    "about.profile.label4": "Focus",
    "about.profile.value4": "EU–Africa Trade & Logistics",
    "about.profile.label5": "Languages",
    "about.profile.value5": "EN · FR · NL · SW",
    "about.profile.label6": "Open to",
    "about.profile.value6": "Internships · Collaboration · Investor talks",

    "about.mvv.eyebrow": "Mission, Vision, Edge",
    "about.mvv.title": "What I'm building toward",
    "about.mission.t": "Mission",
    "about.mission.b": "Simplify trade complexity between Europe and Africa, and turn fragmented systems into clear, decision-ready intelligence.",
    "about.vision.t": "Vision",
    "about.vision.b": "Help build durable infrastructure — companies, tools, and frameworks — around EU–Africa trade and supply-chain systems over the next decade.",
    "about.edge.t": "Edge",
    "about.edge.b": "Native fluency in two economic realities, structured European training, and a working preference for execution over abstraction.",

    "about.timeline.eyebrow": "Trajectory",
    "about.timeline.title": "From Bujumbura to Brussels — by design",
    "about.t1.year": "Origin",
    "about.t1.title": "Burundi",
    "about.t1.body": "Grew up exposed to informal markets, scarcity dynamics, and the operational realism of African SMEs.",
    "about.t2.year": "Move",
    "about.t2.title": "Relocation to Belgium",
    "about.t2.body": "Entered the European system: structured education, regulated commerce, and exposure to EU institutional logic.",
    "about.t3.year": "Now",
    "about.t3.title": "International Business studies",
    "about.t3.body": "Building formal frameworks around what I already understood instinctively — supply chains, market entry, and trade policy.",
    "about.t4.year": "Next",
    "about.t4.title": "Operator track",
    "about.t4.body": "Internships and collaborations with companies, funds, and founders building the EU–Africa corridor.",

    /* Insights */
    "insights.eyebrow": "Insights",
    "insights.title": "Field notes from the EU–Africa corridor",
    "insights.lead": "Four working theses I keep returning to. Each one starts as a question recruiters, founders, and operators ask me — and each one has a sharper answer than the surface debate suggests.",

    "insight1.num": "Insight 01",
    "insight1.title": "Why EU–Africa Trade Is Inefficient",
    "insight1.summary": "The bottleneck is rarely the ship. It's the chain of certifications, banking relationships, customs interpretations, and documentation handoffs that decide whether a shipment moves in 4 days or 40.",
    "insight1.takeaway.h": "Strategic takeaway",
    "insight1.takeaway.b": "Treat trade as an information problem before treating it as a logistics problem.",

    "insight2.num": "Insight 02",
    "insight2.title": "Hidden Costs in Cross-Border Logistics",
    "insight2.summary": "Freight quotes show ocean and air rates. They rarely show demurrage, FX exposure, financing gaps, compliance delays, and last-mile leakage — which routinely add 15–30% to landed cost.",
    "insight2.takeaway.h": "Strategic takeaway",
    "insight2.takeaway.b": "If you only optimize the visible cost line, you're optimizing 70% of the problem.",

    "insight3.num": "Insight 03",
    "insight3.title": "Market Entry Barriers for African and European SMEs",
    "insight3.summary": "European SMEs underestimate distribution and trust networks in African markets. African SMEs underestimate compliance, certification, and predictable delivery in EU markets. Both lose 12–24 months learning the same lesson.",
    "insight3.takeaway.h": "Strategic takeaway",
    "insight3.takeaway.b": "Market entry is a regulatory and relational game — not a marketing one.",

    "insight4.num": "Insight 04",
    "insight4.title": "Why Supply Chain Strategy Matters More Than Logistics Alone",
    "insight4.summary": "Logistics moves a box. Supply chain decides what's in the box, who pays, when it arrives, and what happens if it doesn't. Companies that treat supply chain as strategy outperform those that treat it as procurement.",
    "insight4.takeaway.h": "Strategic takeaway",
    "insight4.takeaway.b": "Logistics is execution. Supply chain is leverage.",

    /* Projects */
    "projects.eyebrow": "Projects",
    "projects.title": "Working assets, not portfolio decoration",
    "projects.lead": "These are concepts and analyses I'm actively developing. They are framed as the early-stage work of a future operator, not as finished products.",

    "project1.tag": "SaaS Concept",
    "project1.title": "AfriTradeLink",
    "project1.body": "A working concept for a trade-compliance and documentation platform that turns customs paperwork, certifications, and cross-border requirements into a guided, auditable workflow for SMEs trading between the EU and Africa.",
    "project1.t1": "Compliance",
    "project1.t2": "SaaS",
    "project1.t3": "Trade",
    "project1.status": "Concept · 2026",

    "project2.tag": "Research",
    "project2.title": "EU–Africa Supply Chain Research",
    "project2.body": "An ongoing analysis of where cost, time, and risk actually accumulate along EU–Africa trade lanes — including freight, financing, compliance friction, last-mile gaps, and the structural reasons certain corridors stay underdeveloped.",
    "project2.t1": "Logistics",
    "project2.t2": "Analysis",
    "project2.t3": "Corridor",
    "project2.status": "Active research",

    "project3.tag": "Operations",
    "project3.title": "Automation Systems for SMEs",
    "project3.body": "Lightweight automation playbooks for small businesses — combining AI tools, no-code platforms, and structured workflows to remove repetitive operational drag from sales, invoicing, and customer follow-up.",
    "project3.t1": "AI",
    "project3.t2": "Automation",
    "project3.t3": "SME",
    "project3.status": "In build",

    "project4.tag": "Brand",
    "project4.title": "Personal Website / Digital Identity",
    "project4.body": "This website itself — designed as a strategic positioning asset, not a CV. Engineered to compress a serious thesis about EU–Africa trade into a credible first impression for recruiters, founders, and investors.",
    "project4.t1": "Strategy",
    "project4.t2": "Brand",
    "project4.t3": "Web",
    "project4.status": "Live",

    /* Contact */
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk strategy, trade, or collaboration.",
    "contact.lead": "I read every message personally. If you're building something at the intersection of EU–Africa trade, logistics, or market entry — or you think I should know about an opportunity — this is the right place to start.",
    "contact.form.title": "Send a direct message",
    "contact.form.body": "Tell me what you're working on or hiring for. Short, specific messages get the fastest response.",
    "contact.field.name": "Your name",
    "contact.field.email": "Email address",
    "contact.field.message": "Your message",
    "contact.field.submit": "Send message",
    "contact.success": "Message captured locally. Your note is ready to be copied or sent — I'll be in touch shortly.",
    "contact.error": "Please complete all fields with a valid email.",

    "contact.info.title": "Direct channels",
    "contact.info.body": "Prefer a different channel? Use whichever works for the way you operate.",
    "contact.info.email": "Email",
    "contact.info.location": "Based in",
    "contact.info.location.v": "Belgium · Open to remote & EU travel",
    "contact.info.languages": "Languages",
    "contact.info.languages.v": "English, French, Dutch, Kiswahili",
    "contact.info.availability": "Currently",
    "contact.info.availability.v": "Open to internships and collaboration",

    /* Footer */
    "footer.tagline": "Independent analysis on EU–Africa trade, logistics, and market entry — written from inside both economic systems.",
    "footer.nav": "Navigate",
    "footer.connect": "Connect",
    "footer.subscribe": "Stay in touch",
    "footer.subscribe.body": "Direct outreach is the fastest way to reach me.",
    "footer.copyright": "© 2026 Eric Niyonkuru. All rights reserved.",
    "footer.built": "Designed & built independently.",
  },

  fr: {
    "lang.label": "Langue",
    "lang.en": "Anglais",
    "lang.fr": "Français",
    "lang.nl": "Néerlandais",
    "lang.sw": "Kiswahili",

    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.insights": "Analyses",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cta": "Travailler avec moi",

    "brand.name": "Eric Niyonkuru",
    "brand.role": "Commerce UE–Afrique · Supply Chain",

    "home.eyebrow": "Positionnement stratégique · Belgique",
    "home.title.a": "Commerce UE–Afrique &",
    "home.title.b": "Analyses Supply Chain",
    "home.subtitle": "J'analyse et simplifie les inefficacités, coûts cachés et barrières structurelles qui ralentissent le commerce entre l'Europe et l'Afrique — et je les traduis en stratégie claire et exécutable.",
    "home.cta.primary": "Voir les analyses",
    "home.cta.secondary": "Me contacter",
    "home.bullet1": "Cartographie des flux et frictions commerciales UE–Afrique",
    "home.bullet2": "Diagnostic logistique, conformité et coûts transfrontaliers",
    "home.bullet3": "Stratégie d'entrée sur le marché pour PME et opérateurs",
    "home.metric1.num": "2 Marchés",
    "home.metric1.lbl": "Focus UE & EAC",
    "home.metric2.num": "4 Langues",
    "home.metric2.lbl": "EN · FR · NL · SW",
    "home.metric3.num": "1 Mission",
    "home.metric3.lbl": "Simplifier le commerce",

    "strip.1": "Conformité commerciale",
    "strip.2": "Stratégie logistique",
    "strip.3": "Entrée de marché",
    "strip.4": "Conception Supply Chain",
    "strip.5": "Corridor UE–Afrique",

    "home.pillars.eyebrow": "Mes axes de travail",
    "home.pillars.title": "Trois lentilles pour les opérateurs sérieux UE–Afrique",
    "home.pillars.subtitle": "La plupart des conversations s'arrêtent à la logistique. La vraie valeur se construit où la conformité, le capital et la conception de corridor se rencontrent.",
    "home.pillar1.title": "Commerce & Conformité",
    "home.pillar1.body": "Décoder la documentation, les régimes tarifaires et la logique de certification qui déterminent si une expédition arrive — ou se bloque en douane.",
    "home.pillar2.title": "Logistique & Structure de coûts",
    "home.pillar2.body": "Cartographier où les coûts vivent réellement : manutention, surestaries, dernier kilomètre, financement et coûts cachés invisibles sur un devis fret.",
    "home.pillar3.title": "Entrée de marché & Stratégie",
    "home.pillar3.body": "Aider les PME européennes à entrer sur les marchés africains — et les opérateurs africains à répondre aux normes européennes — sans perdre 18 mois.",

    "home.featured.eyebrow": "Analyses sélectionnées",
    "home.featured.title": "Des questions plus précises sur un corridor mal compris",
    "home.featured.cta": "Voir toutes les analyses",

    "home.cta.eyebrow": "Construisons quelque chose de durable",
    "home.cta.title": "Vous cherchez un partenaire qui lit les deux cartes — Bruxelles et Bujumbura ?",
    "home.cta.body": "Je suis ouvert aux stages, aux collaborations structurées et aux conversations avec opérateurs, fondateurs et investisseurs actifs sur le corridor UE–Afrique.",

    "about.eyebrow": "À propos",
    "about.title": "Deux marchés. Un opérateur. Une thèse de long terme.",
    "about.lead": "J'ai grandi au Burundi et j'étudie aujourd'hui le commerce international en Belgique. Je me situe à l'intersection de deux économies qui devraient échanger davantage et perdre moins de valeur à la frontière.",
    "about.bio.h": "Le parcours",
    "about.bio.p1": "Je suis né au Burundi, où le commerce informel, la rareté et la résilience font partie du vocabulaire économique quotidien. Mon arrivée en Belgique pour l'université m'a donné accès à l'autre côté de l'équation : marchés régulés, logistique structurée et capital institutionnel.",
    "about.bio.p2": "Ce contraste n'est pas un détail — c'est mon avantage opérationnel. Je lis les deux langages économiques : la logique improvisée des PME africaines et la logique procédurale des systèmes européens.",
    "about.bio.p3": "Mon travail consiste à supprimer les frictions entre ces deux mondes. Moins de théorie, plus d'exécution.",

    "about.profile.label1": "Basé en",
    "about.profile.value1": "Belgique",
    "about.profile.label2": "Origine",
    "about.profile.value2": "Burundi",
    "about.profile.label3": "Études",
    "about.profile.value3": "Commerce International",
    "about.profile.label4": "Focus",
    "about.profile.value4": "Commerce & logistique UE–Afrique",
    "about.profile.label5": "Langues",
    "about.profile.value5": "EN · FR · NL · SW",
    "about.profile.label6": "Ouvert à",
    "about.profile.value6": "Stages · Collaboration · Investisseurs",

    "about.mvv.eyebrow": "Mission, Vision, Avantage",
    "about.mvv.title": "Ce que je construis",
    "about.mission.t": "Mission",
    "about.mission.b": "Simplifier la complexité commerciale entre l'Europe et l'Afrique et transformer des systèmes fragmentés en intelligence claire et exploitable.",
    "about.vision.t": "Vision",
    "about.vision.b": "Aider à construire une infrastructure durable — entreprises, outils et cadres — autour des systèmes commerciaux et logistiques UE–Afrique sur la prochaine décennie.",
    "about.edge.t": "Avantage",
    "about.edge.b": "Maîtrise native de deux réalités économiques, formation européenne structurée, et préférence active pour l'exécution plutôt que l'abstraction.",

    "about.timeline.eyebrow": "Trajectoire",
    "about.timeline.title": "De Bujumbura à Bruxelles — par choix",
    "about.t1.year": "Origine",
    "about.t1.title": "Burundi",
    "about.t1.body": "J'ai grandi exposé aux marchés informels, aux dynamiques de rareté et au réalisme opérationnel des PME africaines.",
    "about.t2.year": "Transition",
    "about.t2.title": "Installation en Belgique",
    "about.t2.body": "Entrée dans le système européen : éducation structurée, commerce régulé, exposition à la logique institutionnelle de l'UE.",
    "about.t3.year": "Maintenant",
    "about.t3.title": "Études en commerce international",
    "about.t3.body": "Construire des cadres formels autour de ce que je comprenais déjà instinctivement — supply chain, entrée de marché, politique commerciale.",
    "about.t4.year": "Suite",
    "about.t4.title": "Voie d'opérateur",
    "about.t4.body": "Stages et collaborations avec entreprises, fonds et fondateurs construisant le corridor UE–Afrique.",

    "insights.eyebrow": "Analyses",
    "insights.title": "Notes de terrain sur le corridor UE–Afrique",
    "insights.lead": "Quatre thèses de travail auxquelles je reviens. Chacune commence par une question que les recruteurs, fondateurs et opérateurs me posent — et chacune a une réponse plus précise que le débat de surface ne le suggère.",

    "insight1.num": "Analyse 01",
    "insight1.title": "Pourquoi le commerce UE–Afrique est inefficace",
    "insight1.summary": "Le goulot n'est rarement le bateau. C'est la chaîne de certifications, relations bancaires, interprétations douanières et passages de documents qui décide si une expédition met 4 jours ou 40.",
    "insight1.takeaway.h": "Conclusion stratégique",
    "insight1.takeaway.b": "Traiter le commerce comme un problème d'information avant de le traiter comme un problème logistique.",

    "insight2.num": "Analyse 02",
    "insight2.title": "Coûts cachés de la logistique transfrontalière",
    "insight2.summary": "Les devis fret affichent les taux maritimes et aériens. Ils n'affichent presque jamais surestaries, exposition de change, écarts de financement, retards de conformité et fuites du dernier kilomètre — qui ajoutent 15 à 30 % au coût rendu.",
    "insight2.takeaway.h": "Conclusion stratégique",
    "insight2.takeaway.b": "Optimiser uniquement la ligne de coût visible, c'est optimiser 70 % du problème.",

    "insight3.num": "Analyse 03",
    "insight3.title": "Barrières d'entrée pour PME africaines et européennes",
    "insight3.summary": "Les PME européennes sous-estiment les réseaux de distribution et de confiance en Afrique. Les PME africaines sous-estiment la conformité, la certification et la prévisibilité exigées en UE. Les deux perdent 12 à 24 mois sur la même leçon.",
    "insight3.takeaway.h": "Conclusion stratégique",
    "insight3.takeaway.b": "L'entrée de marché est un jeu réglementaire et relationnel — pas un jeu marketing.",

    "insight4.num": "Analyse 04",
    "insight4.title": "Pourquoi la supply chain compte plus que la logistique seule",
    "insight4.summary": "La logistique déplace une boîte. La supply chain décide ce qu'il y a dedans, qui paie, quand elle arrive et ce qui se passe sinon. Les entreprises qui traitent la supply chain comme une stratégie surperforment.",
    "insight4.takeaway.h": "Conclusion stratégique",
    "insight4.takeaway.b": "La logistique est l'exécution. La supply chain est le levier.",

    "projects.eyebrow": "Projets",
    "projects.title": "Des actifs en travail, pas une décoration de portfolio",
    "projects.lead": "Voici les concepts et analyses que je développe activement. Ils sont présentés comme le travail initial d'un futur opérateur, pas comme des produits finis.",

    "project1.tag": "Concept SaaS",
    "project1.title": "AfriTradeLink",
    "project1.body": "Concept de plateforme de conformité commerciale et de documentation transformant les démarches douanières, certifications et exigences transfrontalières en flux guidé et auditable pour les PME UE–Afrique.",
    "project1.t1": "Conformité",
    "project1.t2": "SaaS",
    "project1.t3": "Commerce",
    "project1.status": "Concept · 2026",

    "project2.tag": "Recherche",
    "project2.title": "Recherche supply chain UE–Afrique",
    "project2.body": "Analyse continue des points où coût, temps et risque s'accumulent réellement sur les corridors UE–Afrique — fret, financement, friction de conformité, lacunes du dernier kilomètre, raisons structurelles du sous-développement de certaines routes.",
    "project2.t1": "Logistique",
    "project2.t2": "Analyse",
    "project2.t3": "Corridor",
    "project2.status": "Recherche active",

    "project3.tag": "Opérations",
    "project3.title": "Systèmes d'automatisation pour PME",
    "project3.body": "Playbooks d'automatisation pour petites entreprises — combinant outils IA, plateformes no-code et flux structurés pour éliminer les frictions opérationnelles répétitives.",
    "project3.t1": "IA",
    "project3.t2": "Automatisation",
    "project3.t3": "PME",
    "project3.status": "En construction",

    "project4.tag": "Marque",
    "project4.title": "Site personnel / Identité numérique",
    "project4.body": "Ce site — conçu comme un actif de positionnement stratégique, pas un CV. Pensé pour condenser une thèse sérieuse sur le commerce UE–Afrique en première impression crédible.",
    "project4.t1": "Stratégie",
    "project4.t2": "Marque",
    "project4.t3": "Web",
    "project4.status": "En ligne",

    "contact.eyebrow": "Contact",
    "contact.title": "Parlons stratégie, commerce ou collaboration.",
    "contact.lead": "Je lis chaque message personnellement. Si vous construisez quelque chose à l'intersection du commerce UE–Afrique, de la logistique ou de l'entrée de marché — c'est le bon endroit pour commencer.",
    "contact.form.title": "Envoyer un message direct",
    "contact.form.body": "Dites-moi sur quoi vous travaillez ou recrutez. Les messages courts et précis obtiennent la réponse la plus rapide.",
    "contact.field.name": "Votre nom",
    "contact.field.email": "Adresse e-mail",
    "contact.field.message": "Votre message",
    "contact.field.submit": "Envoyer le message",
    "contact.success": "Message enregistré localement. Votre note est prête — je vous recontacte rapidement.",
    "contact.error": "Veuillez compléter tous les champs avec un e-mail valide.",

    "contact.info.title": "Canaux directs",
    "contact.info.body": "Préférez un autre canal ? Utilisez celui qui correspond à votre façon d'opérer.",
    "contact.info.email": "E-mail",
    "contact.info.location": "Basé en",
    "contact.info.location.v": "Belgique · Disponible à distance & déplacements UE",
    "contact.info.languages": "Langues",
    "contact.info.languages.v": "Anglais, Français, Néerlandais, Kiswahili",
    "contact.info.availability": "Actuellement",
    "contact.info.availability.v": "Ouvert aux stages et collaborations",

    "footer.tagline": "Analyse indépendante sur le commerce UE–Afrique, la logistique et l'entrée de marché — écrite depuis l'intérieur des deux systèmes économiques.",
    "footer.nav": "Navigation",
    "footer.connect": "Connecter",
    "footer.subscribe": "Rester en contact",
    "footer.subscribe.body": "Le contact direct est la voie la plus rapide.",
    "footer.copyright": "© 2026 Eric Niyonkuru. Tous droits réservés.",
    "footer.built": "Conçu et construit indépendamment.",
  },

  nl: {
    "lang.label": "Taal",
    "lang.en": "Engels",
    "lang.fr": "Frans",
    "lang.nl": "Nederlands",
    "lang.sw": "Swahili",

    "nav.home": "Home",
    "nav.about": "Over",
    "nav.insights": "Analyses",
    "nav.projects": "Projecten",
    "nav.contact": "Contact",
    "nav.cta": "Werk met mij",

    "brand.name": "Eric Niyonkuru",
    "brand.role": "EU–Afrika Handel · Supply Chain",

    "home.eyebrow": "Strategische positionering · België",
    "home.title.a": "EU–Afrika Handel &",
    "home.title.b": "Supply Chain Analyses",
    "home.subtitle": "Ik analyseer en vereenvoudig de inefficiënties, verborgen kosten en structurele drempels die de handel tussen Europa en Afrika vertragen — en vertaal ze naar duidelijke, uitvoerbare strategie.",
    "home.cta.primary": "Bekijk analyses",
    "home.cta.secondary": "Neem contact op",
    "home.bullet1": "Analyse van EU–Afrika handelsstromen en frictie",
    "home.bullet2": "Grensoverschrijdende logistiek, compliance & kostendiagnose",
    "home.bullet3": "Marktintredestrategie voor kmo's en operators",
    "home.metric1.num": "2 Markten",
    "home.metric1.lbl": "EU & EAC focus",
    "home.metric2.num": "4 Talen",
    "home.metric2.lbl": "EN · FR · NL · SW",
    "home.metric3.num": "1 Missie",
    "home.metric3.lbl": "Handel vereenvoudigen",

    "strip.1": "Handelscompliance",
    "strip.2": "Logistieke strategie",
    "strip.3": "Marktintrede",
    "strip.4": "Supply chain ontwerp",
    "strip.5": "EU–Afrika corridor",

    "home.pillars.eyebrow": "Waar ik op focus",
    "home.pillars.title": "Drie lenzen voor serieuze EU–Afrika operators",
    "home.pillars.subtitle": "De meeste handelsgesprekken stoppen bij logistiek. Echte waarde ontstaat waar compliance, kapitaal en corridorontwerp samenkomen.",
    "home.pillar1.title": "Handel & Compliance",
    "home.pillar1.body": "Documentatie, tariefregimes en certificeringslogica ontleden die bepalen of een zending aankomt — of vastloopt bij de douane.",
    "home.pillar2.title": "Logistiek & Kostenstructuur",
    "home.pillar2.body": "In kaart brengen waar kosten écht zitten: handling, demurrage, last-mile, financiering en onzichtbare kosten die nooit op een vrachtofferte staan.",
    "home.pillar3.title": "Marktintrede & Strategie",
    "home.pillar3.body": "Europese kmo's helpen Afrikaanse markten te betreden — en Afrikaanse operators te voldoen aan EU-normen — zonder 18 maanden te verspillen aan trial-and-error.",

    "home.featured.eyebrow": "Geselecteerde analyses",
    "home.featured.title": "Scherpere vragen over een verkeerd begrepen corridor",
    "home.featured.cta": "Alle analyses",

    "home.cta.eyebrow": "Laten we iets duurzaams bouwen",
    "home.cta.title": "Op zoek naar een partner die beide kaarten leest — Brussel en Bujumbura?",
    "home.cta.body": "Ik sta open voor stages, gestructureerde samenwerkingen en gesprekken met operators, oprichters en investeerders actief op de EU–Afrika corridor.",

    "about.eyebrow": "Over Eric",
    "about.title": "Twee markten. Eén operator. Een langetermijnvisie.",
    "about.lead": "Ik groeide op in Burundi en studeer nu Internationale Handel in België. Ik bevind me op het kruispunt van twee economieën die meer zouden moeten handelen en minder waarde aan de grens zouden moeten verliezen.",
    "about.bio.h": "Het verhaal",
    "about.bio.p1": "Ik ben geboren in Burundi, waar informele handel, schaarste en veerkracht deel uitmaken van het dagelijkse economische vocabulaire. De verhuizing naar België voor mijn studie gaf me toegang tot de andere kant: gereguleerde markten, gestructureerde logistiek en institutioneel kapitaal.",
    "about.bio.p2": "Dat contrast is geen voetnoot — het is mijn operationele voordeel. Ik lees beide economische talen: de improviserende logica van Afrikaanse kmo's en de procedurele logica van Europese systemen.",
    "about.bio.p3": "Mijn werk gaat over het wegnemen van frictie tussen die twee werelden. Minder theorie, meer uitvoering.",

    "about.profile.label1": "Gevestigd in",
    "about.profile.value1": "België",
    "about.profile.label2": "Herkomst",
    "about.profile.value2": "Burundi",
    "about.profile.label3": "Studie",
    "about.profile.value3": "Internationale Handel",
    "about.profile.label4": "Focus",
    "about.profile.value4": "EU–Afrika handel & logistiek",
    "about.profile.label5": "Talen",
    "about.profile.value5": "EN · FR · NL · SW",
    "about.profile.label6": "Open voor",
    "about.profile.value6": "Stages · Samenwerking · Investeerders",

    "about.mvv.eyebrow": "Missie, Visie, Voordeel",
    "about.mvv.title": "Waar ik naartoe bouw",
    "about.mission.t": "Missie",
    "about.mission.b": "Handelscomplexiteit tussen Europa en Afrika vereenvoudigen en gefragmenteerde systemen omzetten in duidelijke, beslissingsklare intelligentie.",
    "about.vision.t": "Visie",
    "about.vision.b": "Mee bouwen aan duurzame infrastructuur — bedrijven, tools en frameworks — rond EU–Afrika handel en supply chain over het komende decennium.",
    "about.edge.t": "Voordeel",
    "about.edge.b": "Native vloeiendheid in twee economische realiteiten, gestructureerde Europese opleiding en een werkende voorkeur voor uitvoering boven abstractie.",

    "about.timeline.eyebrow": "Traject",
    "about.timeline.title": "Van Bujumbura naar Brussel — bewust",
    "about.t1.year": "Origine",
    "about.t1.title": "Burundi",
    "about.t1.body": "Opgegroeid met informele markten, schaarstedynamiek en het operationele realisme van Afrikaanse kmo's.",
    "about.t2.year": "Overgang",
    "about.t2.title": "Verhuizing naar België",
    "about.t2.body": "Toetreding tot het Europese systeem: gestructureerd onderwijs, gereguleerde handel en blootstelling aan EU-instellingenlogica.",
    "about.t3.year": "Nu",
    "about.t3.title": "Studie Internationale Handel",
    "about.t3.body": "Formele kaders bouwen rond wat ik intuïtief al begreep — supply chains, marktintrede en handelsbeleid.",
    "about.t4.year": "Volgende",
    "about.t4.title": "Operatorpad",
    "about.t4.body": "Stages en samenwerkingen met bedrijven, fondsen en oprichters die de EU–Afrika corridor bouwen.",

    "insights.eyebrow": "Analyses",
    "insights.title": "Veldnota's van de EU–Afrika corridor",
    "insights.lead": "Vier werkende thesissen waar ik op terugkom. Elk begint als een vraag die recruiters, oprichters en operators me stellen — en elk heeft een scherper antwoord dan het oppervlakkige debat doet vermoeden.",

    "insight1.num": "Analyse 01",
    "insight1.title": "Waarom EU–Afrika handel inefficiënt is",
    "insight1.summary": "De bottleneck is zelden het schip. Het is de keten van certificeringen, bankrelaties, douane-interpretaties en documentoverdrachten die bepaalt of een zending in 4 dagen of 40 dagen aankomt.",
    "insight1.takeaway.h": "Strategische conclusie",
    "insight1.takeaway.b": "Behandel handel als een informatieprobleem voordat je het als een logistiek probleem behandelt.",

    "insight2.num": "Analyse 02",
    "insight2.title": "Verborgen kosten in grensoverschrijdende logistiek",
    "insight2.summary": "Vrachtoffertes tonen tarieven voor zee en lucht. Ze tonen zelden demurrage, valutarisico, financieringsgaten, compliance-vertragingen en last-mile lekken — die routinematig 15–30% aan landed cost toevoegen.",
    "insight2.takeaway.h": "Strategische conclusie",
    "insight2.takeaway.b": "Wie alleen de zichtbare kostenlijn optimaliseert, optimaliseert 70% van het probleem.",

    "insight3.num": "Analyse 03",
    "insight3.title": "Marktintredebarrières voor Afrikaanse en Europese kmo's",
    "insight3.summary": "Europese kmo's onderschatten distributie- en vertrouwensnetwerken in Afrikaanse markten. Afrikaanse kmo's onderschatten compliance, certificering en voorspelbare levering in EU-markten. Beide verliezen 12–24 maanden aan dezelfde les.",
    "insight3.takeaway.h": "Strategische conclusie",
    "insight3.takeaway.b": "Marktintrede is een regulerend en relationeel spel — geen marketingspel.",

    "insight4.num": "Analyse 04",
    "insight4.title": "Waarom supply chain belangrijker is dan logistiek alleen",
    "insight4.summary": "Logistiek verplaatst een doos. Supply chain bepaalt wat erin zit, wie betaalt, wanneer het aankomt en wat er gebeurt als dat niet zo is. Bedrijven die supply chain als strategie behandelen presteren beter.",
    "insight4.takeaway.h": "Strategische conclusie",
    "insight4.takeaway.b": "Logistiek is uitvoering. Supply chain is hefboom.",

    "projects.eyebrow": "Projecten",
    "projects.title": "Werkende activa, geen portfoliodecoratie",
    "projects.lead": "Concepten en analyses die ik actief ontwikkel. Gepresenteerd als het beginnende werk van een toekomstige operator, niet als afgewerkte producten.",

    "project1.tag": "SaaS-concept",
    "project1.title": "AfriTradeLink",
    "project1.body": "Werkconcept voor een handelscompliance- en documentatieplatform dat douanepapierwerk, certificeringen en grensoverschrijdende vereisten omzet in een gestuurde, controleerbare workflow voor kmo's tussen EU en Afrika.",
    "project1.t1": "Compliance",
    "project1.t2": "SaaS",
    "project1.t3": "Handel",
    "project1.status": "Concept · 2026",

    "project2.tag": "Onderzoek",
    "project2.title": "EU–Afrika supply chain onderzoek",
    "project2.body": "Doorlopende analyse van waar kosten, tijd en risico zich werkelijk opstapelen op EU–Afrika handelsroutes — vracht, financiering, compliance-frictie, last-mile gaten en structurele oorzaken van onderontwikkeling.",
    "project2.t1": "Logistiek",
    "project2.t2": "Analyse",
    "project2.t3": "Corridor",
    "project2.status": "Actief onderzoek",

    "project3.tag": "Operations",
    "project3.title": "Automatiseringssystemen voor kmo's",
    "project3.body": "Lichtgewicht automatiseringsplaybooks voor kleine bedrijven — combinatie van AI-tools, no-code platforms en gestructureerde workflows om operationele frictie te verwijderen.",
    "project3.t1": "AI",
    "project3.t2": "Automatisering",
    "project3.t3": "KMO",
    "project3.status": "In aanbouw",

    "project4.tag": "Merk",
    "project4.title": "Persoonlijke website / Digitale identiteit",
    "project4.body": "Deze website zelf — ontworpen als een strategisch positioneringsactief, geen cv. Een serieuze thesis over EU–Afrika handel comprimeren tot een geloofwaardige eerste indruk.",
    "project4.t1": "Strategie",
    "project4.t2": "Merk",
    "project4.t3": "Web",
    "project4.status": "Live",

    "contact.eyebrow": "Contact",
    "contact.title": "Laten we praten over strategie, handel of samenwerking.",
    "contact.lead": "Ik lees elk bericht persoonlijk. Bouwt u iets op het kruispunt van EU–Afrika handel, logistiek of marktintrede — dan is dit de juiste plek om te beginnen.",
    "contact.form.title": "Stuur een directe boodschap",
    "contact.form.body": "Vertel me waar u aan werkt of voor rekruteert. Korte, specifieke berichten krijgen de snelste reactie.",
    "contact.field.name": "Uw naam",
    "contact.field.email": "E-mailadres",
    "contact.field.message": "Uw bericht",
    "contact.field.submit": "Bericht verzenden",
    "contact.success": "Bericht lokaal opgeslagen. Uw notitie staat klaar — ik neem snel contact op.",
    "contact.error": "Vul alle velden in met een geldig e-mailadres.",

    "contact.info.title": "Directe kanalen",
    "contact.info.body": "Liever een ander kanaal? Gebruik wat bij uw werkstijl past.",
    "contact.info.email": "E-mail",
    "contact.info.location": "Gevestigd in",
    "contact.info.location.v": "België · Open voor remote & EU-reizen",
    "contact.info.languages": "Talen",
    "contact.info.languages.v": "Engels, Frans, Nederlands, Swahili",
    "contact.info.availability": "Op dit moment",
    "contact.info.availability.v": "Open voor stages en samenwerking",

    "footer.tagline": "Onafhankelijke analyse over EU–Afrika handel, logistiek en marktintrede — geschreven van binnenuit beide economische systemen.",
    "footer.nav": "Navigatie",
    "footer.connect": "Verbinden",
    "footer.subscribe": "In contact blijven",
    "footer.subscribe.body": "Direct contact is de snelste route.",
    "footer.copyright": "© 2026 Eric Niyonkuru. Alle rechten voorbehouden.",
    "footer.built": "Onafhankelijk ontworpen en gebouwd.",
  },

  sw: {
    "lang.label": "Lugha",
    "lang.en": "Kiingereza",
    "lang.fr": "Kifaransa",
    "lang.nl": "Kiholanzi",
    "lang.sw": "Kiswahili",

    "nav.home": "Mwanzo",
    "nav.about": "Kuhusu",
    "nav.insights": "Uchanganuzi",
    "nav.projects": "Miradi",
    "nav.contact": "Mawasiliano",
    "nav.cta": "Fanya kazi nami",

    "brand.name": "Eric Niyonkuru",
    "brand.role": "Biashara EU–Afrika · Mtandao wa Ugavi",

    "home.eyebrow": "Msimamo wa kimkakati · Ubelgiji",
    "home.title.a": "Biashara ya EU–Afrika &",
    "home.title.b": "Uchanganuzi wa Mtandao wa Ugavi",
    "home.subtitle": "Ninachanganua na kurahisisha matatizo, gharama zilizofichika, na vizuizi vya kimuundo vinavyochelewesha biashara kati ya Ulaya na Afrika — na kuvigeuza kuwa mkakati wazi unaoweza kutekelezwa.",
    "home.cta.primary": "Tazama Uchanganuzi",
    "home.cta.secondary": "Wasiliana Nami",
    "home.bullet1": "Uchanganuzi wa mtiririko na vikwazo vya biashara EU–Afrika",
    "home.bullet2": "Utafiti wa logistiki ya mipakani, utii na gharama",
    "home.bullet3": "Mkakati wa kuingia sokoni kwa SMEs na waendeshaji",
    "home.metric1.num": "Masoko 2",
    "home.metric1.lbl": "EU & EAC",
    "home.metric2.num": "Lugha 4",
    "home.metric2.lbl": "EN · FR · NL · SW",
    "home.metric3.num": "Lengo 1",
    "home.metric3.lbl": "Rahisisha biashara",

    "strip.1": "Utii wa Biashara",
    "strip.2": "Mkakati wa Logistiki",
    "strip.3": "Kuingia Sokoni",
    "strip.4": "Mpangilio wa Mtandao wa Ugavi",
    "strip.5": "Njia ya EU–Afrika",

    "home.pillars.eyebrow": "Ninachoangazia",
    "home.pillars.title": "Vipengele vitatu kwa waendeshaji wa kweli wa EU–Afrika",
    "home.pillars.subtitle": "Mazungumzo mengi ya biashara yanaishia kwenye logistiki. Thamani halisi inajengwa pale utii, mtaji na ubunifu wa njia hukutana.",
    "home.pillar1.title": "Biashara & Utii",
    "home.pillar1.body": "Kufafanua nyaraka, ushuru na vyeti vinavyoamua kama mzigo unafika — au unakwama mpakani.",
    "home.pillar2.title": "Logistiki & Muundo wa Gharama",
    "home.pillar2.body": "Kuonesha pale gharama hukaa kweli: utunzaji, demurrage, hatua ya mwisho, ufadhili na gharama zisizoonekana.",
    "home.pillar3.title": "Kuingia Sokoni & Mkakati",
    "home.pillar3.body": "Kusaidia SMEs za Ulaya kuingia masoko ya Afrika — na waendeshaji wa Afrika kufikia viwango vya EU — bila kupoteza miezi 18.",

    "home.featured.eyebrow": "Uchanganuzi uliochaguliwa",
    "home.featured.title": "Maswali makali zaidi kuhusu njia inayoeleweka vibaya",
    "home.featured.cta": "Tazama uchanganuzi wote",

    "home.cta.eyebrow": "Tujenge kitu cha kudumu",
    "home.cta.title": "Unatafuta mshirika anayesoma ramani zote mbili — Brussels na Bujumbura?",
    "home.cta.body": "Niko wazi kwa mafunzo ya kazi, ushirikiano uliopangwa, na mazungumzo na waendeshaji, waanzilishi na wawekezaji wanaohamisha mtaji au bidhaa kwenye njia ya EU–Afrika.",

    "about.eyebrow": "Kuhusu Eric",
    "about.title": "Masoko mawili. Mwendeshaji mmoja. Mkakati wa muda mrefu.",
    "about.lead": "Nilikulia Burundi na sasa ninasoma Biashara ya Kimataifa nchini Ubelgiji. Nipo kati ya uchumi mbili zinazopaswa kufanya biashara zaidi na kupoteza thamani kidogo mpakani.",
    "about.bio.h": "Hadithi",
    "about.bio.p1": "Nilizaliwa Burundi, ambapo biashara isiyo rasmi, uhaba na ustahimilivu ni sehemu ya msamiati wa kila siku wa kiuchumi. Kuhamia Ubelgiji kwa chuo kulinipa upande mwingine: masoko yaliyoundwa, logistiki iliyopangwa na mtaji wa kitaasisi.",
    "about.bio.p2": "Tofauti hiyo si maelezo madogo — ni faida yangu ya kiutendaji. Nasoma lugha mbili za kiuchumi: mantiki ya ubunifu wa SMEs za Afrika na mantiki ya kitaratibu ya mifumo ya Ulaya.",
    "about.bio.p3": "Kazi yangu ni kuondoa vikwazo kati ya dunia hizo mbili. Nadharia kidogo, utekelezaji zaidi.",

    "about.profile.label1": "Niko",
    "about.profile.value1": "Ubelgiji",
    "about.profile.label2": "Asili",
    "about.profile.value2": "Burundi",
    "about.profile.label3": "Ninasoma",
    "about.profile.value3": "Biashara ya Kimataifa",
    "about.profile.label4": "Lengo",
    "about.profile.value4": "Biashara & Logistiki EU–Afrika",
    "about.profile.label5": "Lugha",
    "about.profile.value5": "EN · FR · NL · SW",
    "about.profile.label6": "Niko wazi kwa",
    "about.profile.value6": "Mafunzo · Ushirikiano · Wawekezaji",

    "about.mvv.eyebrow": "Lengo, Maono, Faida",
    "about.mvv.title": "Ninachojenga",
    "about.mission.t": "Lengo",
    "about.mission.b": "Kurahisisha utata wa biashara kati ya Ulaya na Afrika, na kugeuza mifumo iliyogawanyika kuwa habari iliyo wazi.",
    "about.vision.t": "Maono",
    "about.vision.b": "Kusaidia kujenga miundombinu ya kudumu — kampuni, zana na miongozo — kuzunguka biashara na ugavi wa EU–Afrika kwa muongo ujao.",
    "about.edge.t": "Faida",
    "about.edge.b": "Ufasaha wa asili katika hali mbili za kiuchumi, mafunzo ya Ulaya yaliyoundwa, na upendeleo wa utekelezaji.",

    "about.timeline.eyebrow": "Safari",
    "about.timeline.title": "Kutoka Bujumbura hadi Brussels — kwa makusudi",
    "about.t1.year": "Asili",
    "about.t1.title": "Burundi",
    "about.t1.body": "Nilikulia kwenye masoko yasiyo rasmi, mienendo ya uhaba, na uhalisia wa kiutendaji wa SMEs za Afrika.",
    "about.t2.year": "Mabadiliko",
    "about.t2.title": "Kuhamia Ubelgiji",
    "about.t2.body": "Niliingia mfumo wa Ulaya: elimu iliyoundwa, biashara iliyodhibitiwa, na mantiki ya kitaasisi ya EU.",
    "about.t3.year": "Sasa",
    "about.t3.title": "Masomo ya Biashara ya Kimataifa",
    "about.t3.body": "Kujenga miongozo rasmi karibu na kile nilichoelewa kwa silika — minyororo ya ugavi, kuingia sokoni, sera ya biashara.",
    "about.t4.year": "Inayofuata",
    "about.t4.title": "Njia ya mwendeshaji",
    "about.t4.body": "Mafunzo na ushirikiano na kampuni, fedha na waanzilishi wanaojenga njia ya EU–Afrika.",

    "insights.eyebrow": "Uchanganuzi",
    "insights.title": "Maelezo kutoka kwenye njia ya EU–Afrika",
    "insights.lead": "Mawazo manne ya kazi ninayorudia. Kila moja huanza na swali ambalo waajiri, waanzilishi na waendeshaji huniuliza — na kila moja lina jibu kali zaidi kuliko mjadala wa juu juu.",

    "insight1.num": "Uchanganuzi 01",
    "insight1.title": "Kwa nini biashara EU–Afrika haifanyi vizuri",
    "insight1.summary": "Kizuizi mara chache ni meli. Ni mlolongo wa vyeti, mahusiano ya benki, tafsiri za forodha, na uhamishaji wa nyaraka unaoamua kama mzigo unasonga kwa siku 4 au 40.",
    "insight1.takeaway.h": "Hitimisho la kimkakati",
    "insight1.takeaway.b": "Tibu biashara kama tatizo la habari kabla ya kulitibu kama tatizo la logistiki.",

    "insight2.num": "Uchanganuzi 02",
    "insight2.title": "Gharama zilizofichika za logistiki ya mipakani",
    "insight2.summary": "Nukuu za mizigo zinaonyesha bei za bahari na anga. Mara chache zinaonyesha demurrage, hatari ya sarafu, mapengo ya ufadhili, ucheleweshaji wa utii na uvujaji wa hatua ya mwisho — vinavyoongeza 15–30% ya gharama halisi.",
    "insight2.takeaway.h": "Hitimisho la kimkakati",
    "insight2.takeaway.b": "Kuboresha tu mstari wa gharama unaoonekana ni kuboresha 70% ya tatizo.",

    "insight3.num": "Uchanganuzi 03",
    "insight3.title": "Vikwazo vya kuingia sokoni kwa SMEs za Afrika na Ulaya",
    "insight3.summary": "SMEs za Ulaya hudharau mitandao ya usambazaji na uaminifu Afrika. SMEs za Afrika hudharau utii, vyeti na utabiri katika masoko ya EU. Wote hupoteza miezi 12–24 kwenye somo lile lile.",
    "insight3.takeaway.h": "Hitimisho la kimkakati",
    "insight3.takeaway.b": "Kuingia sokoni ni mchezo wa udhibiti na mahusiano — si wa masoko.",

    "insight4.num": "Uchanganuzi 04",
    "insight4.title": "Kwa nini mtandao wa ugavi ni muhimu zaidi ya logistiki pekee",
    "insight4.summary": "Logistiki husafirisha kisanduku. Mtandao wa ugavi huamua kilicho ndani, nani analipa, lini kinafika, na kinachotokea kama hakifiki. Kampuni zinazochukulia ugavi kama mkakati hufanya vizuri zaidi.",
    "insight4.takeaway.h": "Hitimisho la kimkakati",
    "insight4.takeaway.b": "Logistiki ni utekelezaji. Mtandao wa ugavi ni nguvu.",

    "projects.eyebrow": "Miradi",
    "projects.title": "Mali za kazi, si mapambo ya portfolio",
    "projects.lead": "Hivi ni dhana na uchanganuzi ninazoendeleza kwa bidii. Zimeelezwa kama kazi ya awali ya mwendeshaji wa baadaye, si bidhaa zilizokamilika.",

    "project1.tag": "Dhana ya SaaS",
    "project1.title": "AfriTradeLink",
    "project1.body": "Dhana inayofanya kazi ya jukwaa la utii wa biashara na nyaraka linalogeuza karatasi za forodha, vyeti na mahitaji ya mipakani kuwa mtiririko ulioongozwa kwa SMEs zinazofanya biashara kati ya EU na Afrika.",
    "project1.t1": "Utii",
    "project1.t2": "SaaS",
    "project1.t3": "Biashara",
    "project1.status": "Dhana · 2026",

    "project2.tag": "Utafiti",
    "project2.title": "Utafiti wa Mtandao wa Ugavi EU–Afrika",
    "project2.body": "Uchanganuzi unaoendelea wa pale gharama, muda na hatari hujikusanya kwenye njia za biashara EU–Afrika — mizigo, ufadhili, vikwazo vya utii, mapengo ya hatua ya mwisho na sababu za muundo.",
    "project2.t1": "Logistiki",
    "project2.t2": "Uchanganuzi",
    "project2.t3": "Njia",
    "project2.status": "Utafiti hai",

    "project3.tag": "Utendaji",
    "project3.title": "Mifumo ya Otomatiki kwa SMEs",
    "project3.body": "Miongozo nyepesi ya otomatiki kwa biashara ndogo — kuunganisha zana za AI, majukwaa ya no-code na mtiririko uliopangwa ili kuondoa kazi zinazorudiwa.",
    "project3.t1": "AI",
    "project3.t2": "Otomatiki",
    "project3.t3": "SME",
    "project3.status": "Inajengwa",

    "project4.tag": "Chapa",
    "project4.title": "Tovuti binafsi / Utambulisho wa kidijitali",
    "project4.body": "Tovuti hii yenyewe — iliyoundwa kama mali ya kimkakati, si CV. Imeundwa kufupisha hoja nzito kuhusu biashara EU–Afrika kuwa hisia ya kwanza yenye uaminifu.",
    "project4.t1": "Mkakati",
    "project4.t2": "Chapa",
    "project4.t3": "Wavuti",
    "project4.status": "Hai",

    "contact.eyebrow": "Mawasiliano",
    "contact.title": "Tuzungumze mkakati, biashara au ushirikiano.",
    "contact.lead": "Ninasoma kila ujumbe binafsi. Kama unajenga kitu kati ya biashara EU–Afrika, logistiki au kuingia sokoni — hii ni sehemu sahihi kuanzia.",
    "contact.form.title": "Tuma ujumbe wa moja kwa moja",
    "contact.form.body": "Niambie unachofanyia kazi au unakoajiri. Ujumbe mfupi na maalum hupata jibu la haraka.",
    "contact.field.name": "Jina lako",
    "contact.field.email": "Anwani ya barua pepe",
    "contact.field.message": "Ujumbe wako",
    "contact.field.submit": "Tuma ujumbe",
    "contact.success": "Ujumbe umehifadhiwa hapa. Maelezo yako tayari — nitawasiliana hivi karibuni.",
    "contact.error": "Tafadhali jaza sehemu zote kwa anwani sahihi ya barua pepe.",

    "contact.info.title": "Njia za moja kwa moja",
    "contact.info.body": "Unapendelea njia nyingine? Tumia inayoendana na utendaji wako.",
    "contact.info.email": "Barua pepe",
    "contact.info.location": "Niko",
    "contact.info.location.v": "Ubelgiji · Wazi kwa kazi za mbali na safari za EU",
    "contact.info.languages": "Lugha",
    "contact.info.languages.v": "Kiingereza, Kifaransa, Kiholanzi, Kiswahili",
    "contact.info.availability": "Kwa sasa",
    "contact.info.availability.v": "Wazi kwa mafunzo na ushirikiano",

    "footer.tagline": "Uchanganuzi wa kujitegemea wa biashara EU–Afrika, logistiki na kuingia sokoni — ulioandikwa kutoka ndani ya mifumo yote miwili ya kiuchumi.",
    "footer.nav": "Tembelea",
    "footer.connect": "Unganisha",
    "footer.subscribe": "Endelea kuwasiliana",
    "footer.subscribe.body": "Mawasiliano ya moja kwa moja ndiyo njia ya haraka zaidi.",
    "footer.copyright": "© 2026 Eric Niyonkuru. Haki zote zimehifadhiwa.",
    "footer.built": "Imeundwa na kujengwa kwa kujitegemea.",
  },
};

const LANG_LABELS = {
  en: "EN · English",
  fr: "FR · Français",
  nl: "NL · Nederlands",
  sw: "SW · Kiswahili",
};

const STORAGE_KEY = "eric.lang";
const SUPPORTED = ["en", "fr", "nl", "sw"];

function getStoredLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v && SUPPORTED.includes(v)) return v;
  } catch (e) {}
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browser) ? browser : "en";
}

function setStoredLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

function applyLang(lang) {
  if (!I18N[lang]) lang = "en";
  document.documentElement.setAttribute("lang", lang);
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  // Update language switcher labels
  document.querySelectorAll(".lang-current").forEach((el) => {
    el.textContent = lang.toUpperCase();
  });
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    const code = btn.getAttribute("data-lang-option");
    btn.setAttribute("aria-current", code === lang ? "true" : "false");
  });

  setStoredLang(lang);
}

/* ---------- Navigation behaviour ---------- */
function setupNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  // Active link by current path
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });

  // Mobile toggle
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Language dropdown
  document.querySelectorAll(".lang-button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = btn.parentElement.querySelector(".lang-menu");
      if (menu) menu.classList.toggle("open");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".lang-menu.open").forEach((m) => m.classList.remove("open"));
  });

  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-lang-option");
      applyLang(code);
      document.querySelectorAll(".lang-menu.open").forEach((m) => m.classList.remove("open"));
    });
  });

  // Scroll state
  const onScroll = () => {
    if (window.scrollY > 8) nav.style.background = "rgba(11,18,21,.92)";
    else nav.style.background = "rgba(11,18,21,.72)";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

/* ---------- Contact form ---------- */
function setupContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const valid = name.length > 1 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && message.length > 4;

    const lang = getStoredLang();
    const dict = I18N[lang] || I18N.en;

    status.classList.remove("success", "error");

    if (!valid) {
      status.classList.add("error");
      status.textContent = dict["contact.error"];
      return;
    }

    // Persist locally as fallback (no backend)
    try {
      const items = JSON.parse(localStorage.getItem("eric.contacts") || "[]");
      items.push({ name, email, message, at: new Date().toISOString() });
      localStorage.setItem("eric.contacts", JSON.stringify(items));
    } catch (err) {}

    status.classList.add("success");
    status.textContent = dict["contact.success"];
    form.reset();
  });
}

/* ---------- Year ---------- */
function setupYear() {
  const y = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = y; });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(getStoredLang());
  setupNav();
  setupReveal();
  setupContactForm();
  setupYear();
});
