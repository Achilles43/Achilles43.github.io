// Shared resume data — bilingual (English + Georgian).
// Language-neutral fields (channels, KPI values, market codes, URLs, ids,
// company names, tool/product names, certificate issuers) are kept identical
// across languages so the filter logic keeps working.

const RESUME_EN = {
  name: "Giorgi Kvaratskhelia",
  title: "Digital Marketing Manager",
  headline: "A skilled digital marketer with expertise in paid advertising, email marketing, web analytics, and AI-driven workflows. Proven track record executing successful SEO projects while adeptly employing various marketing tools to drive impactful campaigns across digital platforms.",
  shortPitch: "Full-funnel performance marketing — paid, tracking, SEO, mobile growth.",
  location: "Tbilisi, Georgia",
  phone: "+995 557 077 373",
  email: "kvaratskhelia.giorgi777@gmail.com",
  linkedin: "linkedin.com/in/gk-digital-marketer",

  kpis: [
    { value: "$100K", suffix: "+", label: "Monthly budget", note: "Across Google, Meta, DV360, SA360" },
    { value: "8", suffix: "", label: "Markets shipped", note: "US · CA · AU · NZ · UK · PT · GE · AZ" },
    { value: "5", suffix: "+ yrs", label: "Performance marketing", note: "Since 2021 · paid · tracking · SEO" },
  ],

  channels: [
    "AI", "Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "Analytics",
    "CRM", "Mobile/App", "DV360", "SA360",
  ],

  experience: [
    {
      id: "hashbank", company: "Hashbank", role: "Digital Marketing Manager",
      tag: "Current · Digital Bank", start: "Feb 2026", end: "Present", year: "2026",
      blurb: "Launching marketing from zero at a new mobile-first digital bank.",
      channels: ["Google Ads", "Meta Ads", "Analytics", "Mobile/App", "CRM", "DV360", "SA360", "AI"],
      bullets: [
        "Set up and run all marketing strategy, tools, and channels for a digital bank from day one.",
        "Own mobile-app growth end-to-end: install campaigns, app-event optimization, and in-app activation flows.",
        "Built the Firebase event taxonomy, conversion model, and attribution that the whole company now plans against.",
        "Run paid acquisition across Google Ads (App + Search), Meta, DV360, and SA360 — calibrated to CPA targets and LTV signals.",
        "Create and manage the initial marketing strategy, channel mix, and setup for a digital bank.",
      ],
      results: [
        { v: "2.1×", l: "Install target beaten", dir: "up", t: [60,78,96,118,140,178,210] },
        { v: "50K+", l: "Onboarded clients · < 6 mo", dir: "up", t: [4,12,24,41,60,79,100] },
        { v: "61%", l: "Install → funded account", dir: "up", t: [30,38,44,49,53,57,61] },
        { v: "−34%", l: "CPI vs KPI target", dir: "down", t: [100,96,89,81,76,70,66] },
      ],
    },
    {
      id: "cityzen", company: "Cityzen", role: "Digital Marketing Manager",
      tag: "Current · Premium Real Estate", start: "Mar 2026", end: "Present", year: "2026",
      blurb: "Driving qualified leads for premium apartment sales in Tbilisi.",
      channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "CRM", "Analytics", "AI"],
      bullets: [
        "Lead full-funnel paid strategy on Google Ads, Meta, and LinkedIn Ads for a premium real-estate brand.",
        "Use LinkedIn Ads to reach executive and investor audiences — the buyer profile for premium apartments.",
        "Operate Zoho CRM end-to-end: lead capture, scoring, routing to brokerage, and pipeline reporting.",
        "Tightened the lead-to-tour-to-sale loop so marketing spend ties to closed units, not just form fills.",
        "Aligned creative, landing pages, and SEO around the premium positioning of the developments.",
      ],
      results: [
        { v: "30%", l: "Increase in qualified leads", dir: "up", t: [100,118,140,168,196,220,240] },
        { v: "−34%", l: "Cost per lead", dir: "down", t: [100,94,86,78,72,68,66] },
        { v: "3.1×", l: "CRM pipeline value", dir: "up", t: [100,122,148,178,208,240,268] },
      ],
    },
    {
      id: "zion", company: "Zion", role: "Head of Digital Marketing",
      tag: "Premium Real Estate", start: "Jun 2025", end: "Feb 2026", year: "2025",
      blurb: "Built brand awareness + qualified pipeline for premium apartments.",
      channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "CRM", "Analytics", "DV360", "SA360", "AI"],
      bullets: [
        "Led digital marketing end-to-end: brand awareness through to qualified, sales-ready leads.",
        "Planned and optimized multi-channel campaigns across Google Ads, Meta, LinkedIn Ads, and SEO.",
        "Layered LinkedIn Ads to target high-net-worth and decision-maker audiences for premium apartment inventory.",
        "Implemented advanced tracking and analytics to improve the lead-to-lease conversion rate.",
        "Connected CRM and Meta, and actively worked the CRM to manage and qualify pipeline.",
        "Partnered with sales and creative on brand-aligned, performance-driven campaigns.",
      ],
      results: [
        { v: "3×", l: "Apartments sold via digital", dir: "up", t: [100,124,152,186,220,264,310] },
        { v: "−41%", l: "Cost per lead", dir: "down", t: [100,90,80,72,66,61,59] },
        { v: "37%", l: "Increase in qualified leads", dir: "up", t: [5,10,17,28,44,70,100] },
      ],
    },
    {
      id: "tnet", company: "TNET", role: "Digital Marketing Manager",
      tag: "Georgia's largest digital group", start: "Sep 2022", end: "Jun 2025", year: "2022",
      blurb: "Performance marketing across e-commerce, ticketing, and classifieds.",
      channels: ["Google Ads", "Meta Ads", "DV360", "SA360", "SEO", "Analytics", "AI"],
      bullets: [
        "Managed $100K+ monthly paid media budgets across Google Ads, Meta, DV360, and SA360 — reaching millions of users.",
        "Scaled full-funnel campaigns and lifted ROAS, CTR, and MER through creative, targeting, and bidding optimization across Search, Display, YouTube, Facebook, and Instagram.",
        "Built advanced tracking: GTM integrations, Meta Pixel with microdata events, dynamic product feeds via Merchant Center, and conversion tracking via Meta CAPI.",
        "Led SEO initiatives — technical audits, on-page work, and keyword strategy — using Semrush and Ahrefs for sustained organic growth.",
      ],
      results: [
        { v: "+47%", l: "ROAS lift", dir: "up", t: [100,108,116,125,132,140,147] },
        { v: "−30%", l: "Cost per acquisition", dir: "down", t: [100,95,88,83,78,74,71] },
        { v: "+70%", l: "Organic sessions", dir: "up", t: [100,110,122,133,145,157,168] },
      ],
    },
    {
      id: "bloomex", company: "Bloomex Canada", role: "Paid Ads & SEO Specialist",
      tag: "CA · AU · NZ markets", start: "Feb 2024", end: "Mar 2025", year: "2024",
      blurb: "PPC across Canadian, Australian, and New Zealand markets.",
      channels: ["Google Ads", "Meta Ads", "SEO", "Analytics", "AI"],
      bullets: [
        "Planned, launched, and optimized paid campaigns to grow traffic, conversions, and ROI across three markets.",
        "Ran data-driven A/B tests to refine targeting, bidding strategies, and creative.",
        "Worked with design and content to keep ad copy and visuals on brief and on brand.",
        "Supported SEO via keyword research, content optimization, and technical SEO collaboration.",
      ],
      results: [
        { v: "$150K+", l: "Monthly budget · CA/AU/NZ", dir: "up", t: [46,58,67,76,84,93,100] },
        { v: "−24%", l: "Cost per click", dir: "down", t: [100,96,91,86,82,79,76] },
        { v: "58%", l: "Keywords ranking top 10", dir: "up", t: [100,109,119,128,137,147,157] },
        { v: "+57%", l: "Organic traffic · SEO", dir: "up", t: [100,109,119,128,137,147,157] },
      ],
    },
    {
      id: "lta", company: "LTA", role: "PPC Specialist",
      tag: "Legal · GE · PT · AZ", start: "Sep 2024", end: "Mar 2025", year: "2024",
      blurb: "Performance marketing for international legal consulting brands.",
      channels: ["Google Ads", "Analytics", "AI"],
      bullets: [
        "Ran and optimized Google Search Ads across three country-specific accounts (lta.ge, lta-portugal.pt, lta.az).",
        "Owned full-cycle campaign management: keyword research, ad copy, bidding, and optimization.",
        "Tailored campaigns to each region's audience and legal landscape — lifting leads, lowering CPC, raising conversion rate.",
      ],
      results: [
        { v: "+64%", l: "Inbound leads", dir: "up", t: [100,110,121,133,144,155,164] },
        { v: "−31%", l: "Cost per click", dir: "down", t: [100,94,88,82,77,72,69] },
        { v: "+43%", l: "Conversion rate", dir: "up", t: [100,107,114,122,130,137,143] },
      ],
    },
    {
      id: "casio", company: "Casio.ge & Mywatch.ge", role: "Co-owner",
      tag: "E-commerce · since 2021", start: "Oct 2021", end: "Present", year: "2021",
      blurb: "Built and run two e-commerce brands from scratch.",
      channels: ["Google Ads", "Meta Ads", "SEO", "Analytics", "AI"],
      bullets: [
        "Built and run the company's Shopify sites — from development to performance tracking.",
        "Set up the full Google stack (GTM, GA4, Search Console, Google Ads) and Meta stack (Business Manager, Pixel, Shop, Ads).",
        "Developed and executed SEO and digital marketing strategies from zero — measurable growth across organic and paid.",
      ],
      resultsNote: "Search Console · trailing 12 months, and Google Business Profile · Mar–Aug 2026. Both built from zero.",
      results: [
        { v: "53K", l: "Organic clicks · 12 mo", dir: "up", t: [12,22,36,52,68,85,100] },
        { v: "516K", l: "Search impressions · 12 mo", dir: "up", t: [14,25,39,55,70,86,100] },
        { v: "10.3%", l: "Organic CTR", dir: "up", t: [52,61,70,78,86,95,103] },
        { v: "3.8", l: "Avg. Google position", dir: "down", t: [148,132,118,104,92,84,78] },
        { v: "1,103", l: "Google Profile actions", dir: "up", t: [186,168,238,224,212,148,140] },
        { v: "4.2×", l: "Revenue since launch", dir: "up", t: [10,18,30,45,62,82,100] },
      ],
    },
  ],

  sitesBuilt: [
    { url: "casio.ge", note: "E-commerce · own brand" },
    { url: "mywatch.ge", note: "E-commerce · own brand" },
    { url: "ftla-usa.org", note: "Organization · US" },
    { url: "hoggen.de", note: "Brand site · Germany" },
    { url: "hoggen.ge", note: "Brand site · Georgia" },
    { url: "carroten.ge", note: "Brand site · Georgia" },
    { url: "montivarius.com", note: "Brand site" },
    { url: "fratello-italia.com", note: "Brand site · Italy" },
  ],

  projects: [
    { name: "Richter's Clinic", category: "Healthcare", did: "Google Ads + local SEO for a private clinic — appointment-booking tracking and a rebuilt landing funnel." },
    { name: "Handymen", category: "Home services", did: "Launched paid acquisition and full GA4 tracking for an on-demand home-services marketplace." },
    { name: "Ri.ge", category: "Marketplace · GE", did: "Full-funnel Meta and Google campaigns plus feed-based product ads for a Georgian marketplace." },
    { name: "Structura Development", category: "Real estate", did: "Lead-gen strategy for residential projects — CRM routing and qualified-lead reporting." },
    { name: "GCLO Legal", category: "Legal", did: "Google Search Ads on high-intent legal queries, with on-page SEO and conversion tracking." },
    { name: "Borjomi", category: "FMCG · Beverage", did: "SEO specialist for a leading FMCG beverage brand — on-page optimization and organic search growth." },
    { name: "Magic School", category: "Education", did: "Enrollment campaigns across Meta and Google with a seasonal-intake funnel." },
    { name: "Kalo.ge", category: "E-commerce · GE", did: "SEO specialist — on-page optimization, technical SEO and organic search growth." },
  ],

  skillGroups: [
    { name: "AI & Automation", items: ["AI Agents", "Claude Code", "Antigravity", "Gemini", "Prompt engineering", "AI ad creative", "Workflow automation", "AI-assisted analytics"] },
    { name: "Paid Media", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "DV360", "SA360", "App Campaigns", "YouTube Ads"] },
    { name: "Analytics & Tracking", items: ["GA4", "Google Tag Manager", "Server-side tagging", "Meta CAPI", "Firebase", "Event taxonomy"] },
    { name: "SEO", items: ["Technical SEO", "On-page", "Keyword strategy", "Semrush", "Ahrefs", "Search Console"] },
    { name: "CRM & Lifecycle", items: ["Zoho CRM", "Bitrix24", "Lead scoring", "Pipeline reporting"] },
    { name: "Web Development", items: ["WordPress", "Shopify", "HTML / CSS", "Merchant Center"] },
  ],

  markets: [
    { code: "US", name: "United States" }, { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" }, { code: "NZ", name: "New Zealand" },
    { code: "UK", name: "United Kingdom" }, { code: "PT", name: "Portugal" },
    { code: "GE", name: "Georgia" }, { code: "AZ", name: "Azerbaijan" },
  ],

  education: { school: "Caucasus University", degree: "Bachelor, Business Administration", dates: "Sep 2019 — Sep 2023" },

  aiNotes: [
    "Hashbank is my main full-time role. Cityzen is a remote role I run alongside it — the two don't conflict, and both are current.",
    "At Hashbank and Cityzen I'm the only digital marketer, so the title is Digital Marketing Manager rather than Head of Digital — there's no team under me to head. It isn't a step back from Zion; it's a scope-of-team difference, and I own the whole function in both places.",
    "Bloomex overlapped my time at TNET. TNET was a hybrid role and I had the capacity, so I took Bloomex on remotely without affecting my TNET work.",
    "Zion ended because we didn't align on some ways of working. Bloomex ended when they wanted me back in the office full-time and I work best remote. LTA and a few of the smaller projects were part-time engagements that were always agreed as temporary and closed on schedule.",
    "Casio.ge and Mywatch.ge are my own e-commerce brands. They're built to run without much day-to-day involvement from me, so they don't take time away from my main role.",
    "When I quote a result, the comparison is the period I worked there versus the period before I joined.",
    "On compensation, notice period, and similar terms — I'd rather discuss those in a conversation. Happy to set up a call.",
  ],

  certificates: [
    { name: "Google Ads", issuer: "Google" },
    { name: "Google Analytics 4", issuer: "Google" },
    { name: "Google Tag Manager", issuer: "Google" },
    { name: "Fundamentals of Marketing Technologies", issuer: "MarTech Institute" },
    { name: "Marketing Tools: SEO", issuer: "LinkedIn" },
    { name: "SEO Content Writing", issuer: "LinkedIn" },
    { name: "Remarketing Strategies — Google Ads", issuer: "LinkedIn" },
  ],

  languages: [
    { name: "Georgian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate" },
    { name: "Russian", level: "Intermediate" },
  ],
};

const RESUME_KA = {
  name: "გიორგი კვარაცხელია",
  title: "ციფრული მარკეტინგის მენეჯერი",
  headline: "გამოცდილი ციფრული მარკეტერი, ფასიანი რეკლამის, ვებ/მობაილ ანალიტიკისა და AI-ზე დაფუძნებული სამუშაო პროცესების ექსპერტიზით. მაქვს მრავალი წარმატებული SEO პროექტის გამოცდილება, ეფექტურად ვიყენებ სხვადასხვა მარკეტინგულ ინსტრუმენტს ციფრულ პლატფორმებზე შედეგიანი კამპანიების წარმართვისთვის.",
  shortPitch: "Full-funnel performance მარკეტინგი — paid, ტრექინგი, SEO, მობილური ზრდა.",
  location: "თბილისი, საქართველო",
  phone: "+995 557 077 373",
  email: "kvaratskhelia.giorgi777@gmail.com",
  linkedin: "linkedin.com/in/gk-digital-marketer",

  kpis: [
    { value: "$100K", suffix: "+", label: "თვიური ბიუჯეტი", note: "Google, Meta, DV360, SA360-ზე" },
    { value: "8", suffix: "", label: "ბაზარი", note: "US · CA · AU · NZ · UK · PT · GE · AZ" },
    { value: "5", suffix: "+ წელი", label: "Performance მარკეტინგი", note: "2021-დან · paid · ტრექინგი · SEO" },
  ],

  channels: [
    "AI", "Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "Analytics",
    "CRM", "Mobile/App", "DV360", "SA360",
  ],

  experience: [
    {
      id: "hashbank", company: "Hashbank", role: "ციფრული მარკეტინგის მენეჯერი",
      tag: "მიმდინარე · ციფრული ბანკი", start: "თებ. 2026", end: "დღემდე", year: "2026",
      blurb: "ვუშვებ მარკეტინგს ნულიდან ახალ mobile-first ციფრულ ბანკში.",
      channels: ["Google Ads", "Meta Ads", "Analytics", "Mobile/App", "CRM", "DV360", "SA360", "AI"],
      bullets: [
        "ციფრული ბანკისთვის პირველივე დღიდან ავაწყვე და ვმართავ მარკეტინგის მთელ სტრატეგიას, ინსტრუმენტებსა და არხებს.",
        "სრულად ვმართავ მობილური აპლიკაციის მარკეტინგს: install კამპანიები, app-event ოპტიმიზაცია და აპში აქტივაციის ფლოუები.",
        "ავაწყვე Firebase-ის event taxonomy, კონვერსიის მოდელი და ატრიბუცია, რასაც მთელი კომპანია ეყრდნობა დაგეგმვისას.",
        "ვმართავ paid acquisition-ს Google Ads-ზე (App + Search), Meta-ზე, DV360-სა და SA360-ზე — CPA-ს მიზნებსა და LTV სიგნალებზე მორგებით.",
        "ვქმნი და ვმართავ ციფრული ბანკის საწყის მარკეტინგულ სტრატეგიას, არხების მიქსსა და სეტაპს.",
      ],
      results: [
        { v: "2.1×", l: "install-ის მიზნის გადაჭარბება", dir: "up", t: [60,78,96,118,140,178,210] },
        { v: "50K+", l: "დაონბორდინგებული კლიენტი · < 6 თვე", dir: "up", t: [4,12,24,41,60,79,100] },
        { v: "61%", l: "ინსტალაცია → აქტივაცია", dir: "up", t: [30,38,44,49,53,57,61] },
        { v: "−34%", l: "CPI KPI მიზნის მიმართ", dir: "down", t: [100,96,89,81,76,70,66] },
      ],
    },
    {
      id: "cityzen", company: "Cityzen", role: "ციფრული მარკეტინგის მენეჯერი",
      tag: "მიმდინარე · პრემიუმ უძრავი ქონება", start: "მარ. 2026", end: "დღემდე", year: "2026",
      blurb: "ვაგენერირებ კვალიფიციურ ლიდებს პრემიუმ ბინების გაყიდვისთვის თბილისში.",
      channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "CRM", "Analytics", "AI"],
      bullets: [
        "ვუძღვები full-funnel paid სტრატეგიას Google Ads-ზე, Meta-სა და LinkedIn Ads-ზე პრემიუმ უძრავი ქონების ბრენდისთვის.",
        "LinkedIn Ads-ით ვწვდები მენეჯერულ და ინვესტორ აუდიტორიას — პრემიუმ ბინების მყიდველის პროფილს.",
        "სრულად ვმართავ Zoho CRM-ს: ლიდების მოგროვება, სქორინგი, ბროკერიჯზე გადამისამართება და pipeline-ის რეპორტინგი.",
        "გავამკაცრე lead-to-tour-to-sale ციკლი ისე, რომ სარეკლამო ხარჯი დაუკავშირდა გაყიდულ ბინებს და არა მხოლოდ ფორმის შევსებას.",
        "კრეატივი, ლენდინგები და SEO მოვარგე პროექტების პრემიუმ პოზიციონირებას.",
      ],
      results: [
        { v: "30%", l: "კვალიფიციური ლიდების ზრდა", dir: "up", t: [100,118,140,168,196,220,240] },
        { v: "−34%", l: "ლიდის ფასი", dir: "down", t: [100,94,86,78,72,68,66] },
        { v: "3.1×", l: "CRM პაიპლაინის ღირებულება", dir: "up", t: [100,122,148,178,208,240,268] },
      ],
    },
    {
      id: "zion", company: "Zion", role: "ციფრული მარკეტინგის ხელმძღვანელი",
      tag: "პრემიუმ უძრავი ქონება", start: "ივნ. 2025", end: "თებ. 2026", year: "2025",
      blurb: "ავაშენე ბრენდის ცნობადობა + კვალიფიციური pipeline პრემიუმ ბინებისთვის.",
      channels: ["Google Ads", "Meta Ads", "LinkedIn Ads", "SEO", "CRM", "Analytics", "DV360", "SA360", "AI"],
      bullets: [
        "სრულად ვუძღვებოდი ციფრულ მარკეტინგს: ბრენდის ცნობადობიდან გაყიდვისთვის მზა კვალიფიციურ ლიდებამდე.",
        "ვგეგმავდი და ვაოპტიმიზებდი მრავალარხიან კამპანიებს Google Ads-ზე, Meta-ზე, LinkedIn Ads-სა და SEO-ში.",
        "დავამატე LinkedIn Ads მაღალშემოსავლიან და გადაწყვეტილების მიმღებ აუდიტორიაზე გასასვლელად პრემიუმ ბინების სეგმენტში.",
        "დავნერგე გაფართოებული ტრექინგი და ანალიტიკა lead-to-lease კონვერსიის გასაუმჯობესებლად.",
        "დავაკავშირე CRM და Meta და აქტიურად ვმუშაობდი CRM-ში pipeline-ის სამართავად და საკვალიფიკაციოდ.",
        "ვთანამშრომლობდი გაყიდვებისა და კრეატივის გუნდებთან ბრენდზე მორგებულ, performance-ზე ორიენტირებულ კამპანიებზე.",
      ],
      results: [
        { v: "3×", l: "ციფრულით გაყიდული ბინები", dir: "up", t: [100,124,152,186,220,264,310] },
        { v: "−41%", l: "ლიდის ფასი", dir: "down", t: [100,90,80,72,66,61,59] },
        { v: "37%", l: "კვალიფიციური ლიდების ზრდა", dir: "up", t: [5,10,17,28,44,70,100] },
      ],
    },
    {
      id: "tnet", company: "TNET", role: "ციფრული მარკეტინგის მენეჯერი",
      tag: "საქართველოს უმსხვილესი ციფრული ჯგუფი", start: "სექ. 2022", end: "ივნ. 2025", year: "2022",
      blurb: "Performance მარკეტინგი e-commerce-ში, ტიკეტინგსა და განცხადებების პლატფორმებზე.",
      channels: ["Google Ads", "Meta Ads", "DV360", "SA360", "SEO", "Analytics", "AI"],
      bullets: [
        "ვმართავდი $100K+ თვიურ სარეკლამო ბიუჯეტს Google Ads-ზე, Meta-ზე, DV360-სა და SA360-ზე — მილიონობით მომხმარებელთან წვდომით.",
        "ვაფართოებდი full-funnel კამპანიებს და ვზრდიდი ROAS-ს, CTR-სა და MER-ს კრეატივის, თარგეთინგისა და bidding-ის ოპტიმიზაციით Search-ზე, Display-ზე, YouTube-ზე, Facebook-სა და Instagram-ზე.",
        "ავაწყვე გაფართოებული ტრექინგი: GTM ინტეგრაციები, Meta Pixel microdata event-ებით, დინამიური პროდუქტ ფიდები Merchant Center-ით და კონვერსიის ტრექინგი Meta CAPI-ით.",
        "ვუძღვებოდი SEO ინიციატივებს — ტექნიკური აუდიტი, on-page სამუშაოები და საკვანძო სიტყვების სტრატეგია — Semrush-სა და Ahrefs-ის გამოყენებით მდგრადი ორგანული ზრდისთვის.",
      ],
      results: [
        { v: "+47%", l: "ROAS-ის ზრდა", dir: "up", t: [100,108,116,125,132,140,147] },
        { v: "−30%", l: "შეძენის ფასი", dir: "down", t: [100,95,88,83,78,74,71] },
        { v: "+70%", l: "ორგანული სესიები", dir: "up", t: [100,110,122,133,145,157,168] },
      ],
    },
    {
      id: "bloomex", company: "Bloomex Canada", role: "Paid Ads & SEO სპეციალისტი",
      tag: "CA · AU · NZ ბაზრები", start: "თებ. 2024", end: "მარ. 2025", year: "2024",
      blurb: "PPC კანადის, ავსტრალიისა და ახალი ზელანდიის ბაზრებზე.",
      channels: ["Google Ads", "Meta Ads", "SEO", "Analytics", "AI"],
      bullets: [
        "ვგეგმავდი, ვუშვებდი და ვაოპტიმიზებდი paid კამპანიებს ტრაფიკის, კონვერსიებისა და ROI-ს გასაზრდელად სამ ბაზარზე.",
        "ვატარებდი data-driven A/B ტესტებს თარგეთინგის, bidding სტრატეგიებისა და კრეატივის დასახვეწად.",
        "ვმუშაობდი დიზაინისა და კონტენტის გუნდებთან, რომ სარეკლამო ტექსტი და ვიზუალი ბრიფსა და ბრენდს შეესაბამებოდა.",
        "ვეხმარებოდი SEO-ს საკვანძო სიტყვების კვლევით, კონტენტის ოპტიმიზაციითა და ტექნიკურ SEO თანამშრომლობით.",
      ],
      results: [
        { v: "$150K+", l: "თვიური ბიუჯეტი · CA/AU/NZ", dir: "up", t: [46,58,67,76,84,93,100] },
        { v: "−24%", l: "კლიკის ფასი", dir: "down", t: [100,96,91,86,82,79,76] },
        { v: "58%", l: "საკვანძო სიტყვები top-10-ში", dir: "up", t: [100,109,119,128,137,147,157] },
        { v: "+57%", l: "ორგანული ტრაფიკი · SEO", dir: "up", t: [100,109,119,128,137,147,157] },
      ],
    },
    {
      id: "lta", company: "LTA", role: "PPC სპეციალისტი",
      tag: "იურიდიული · GE · PT · AZ", start: "სექ. 2024", end: "მარ. 2025", year: "2024",
      blurb: "Performance მარკეტინგი საერთაშორისო იურიდიული საკონსულტაციო ბრენდებისთვის.",
      channels: ["Google Ads", "Analytics", "AI"],
      bullets: [
        "ვმართავდი და ვაოპტიმიზებდი Google Search Ads-ს სამი ქვეყნის აქაუნთზე (lta.ge, lta-portugal.pt, lta.az).",
        "სრულად ვმართავდი კამპანიის ციკლს: საკვანძო სიტყვების კვლევა, სარეკლამო ტექსტი, bidding და ოპტიმიზაცია.",
        "კამპანიებს ვამორგებდი თითოეული რეგიონის აუდიტორიასა და იურიდიულ სპეციფიკას — ვზრდიდი ლიდებს, ვამცირებდი CPC-ს, ვზრდიდი კონვერსიას.",
      ],
      results: [
        { v: "+64%", l: "შემომავალი ლიდები", dir: "up", t: [100,110,121,133,144,155,164] },
        { v: "−31%", l: "კლიკის ფასი", dir: "down", t: [100,94,88,82,77,72,69] },
        { v: "+43%", l: "კონვერსიის მაჩვენებელი", dir: "up", t: [100,107,114,122,130,137,143] },
      ],
    },
    {
      id: "casio", company: "Casio.ge & Mywatch.ge", role: "თანამფლობელი",
      tag: "E-commerce · 2021-დან", start: "ოქტ. 2021", end: "დღემდე", year: "2021",
      blurb: "ავაშენე და ვმართავ ორ e-commerce ბრენდს ნულიდან.",
      channels: ["Google Ads", "Meta Ads", "SEO", "Analytics", "AI"],
      bullets: [
        "ავაწყვე და ვმართავ კომპანიის Shopify საიტებს — დეველოპმენტიდან performance ტრექინგამდე.",
        "დავნერგე სრული Google სტეკი (GTM, GA4, Search Console, Google Ads) და Meta სტეკი (Business Manager, Pixel, Shop, Ads).",
        "შევქმენი და განვახორციელე SEO და ციფრული მარკეტინგის სტრატეგიები ნულიდან — გაზომვადი ზრდა ორგანულსა და paid-ში.",
      ],
      resultsNote: "Search Console · ბოლო 12 თვე და Google Business Profile · მარ.–აგვ. 2026. ორივე ნულიდან აწყობილი.",
      results: [
        { v: "53K", l: "ორგანული კლიკები · 12 თვე", dir: "up", t: [12,22,36,52,68,85,100] },
        { v: "516K", l: "ჩვენებები საძიებოში · 12 თვე", dir: "up", t: [14,25,39,55,70,86,100] },
        { v: "10.3%", l: "ორგანული CTR", dir: "up", t: [52,61,70,78,86,95,103] },
        { v: "3.8", l: "საშუალო პოზიცია Google-ში", dir: "down", t: [148,132,118,104,92,84,78] },
        { v: "1,103", l: "Google პროფილის ქმედებები", dir: "up", t: [186,168,238,224,212,148,140] },
        { v: "4.2×", l: "შემოსავალი გაშვებიდან", dir: "up", t: [10,18,30,45,62,82,100] },
      ],
    },
  ],

  sitesBuilt: [
    { url: "casio.ge", note: "E-commerce · საკუთარი ბრენდი" },
    { url: "mywatch.ge", note: "E-commerce · საკუთარი ბრენდი" },
    { url: "ftla-usa.org", note: "ორგანიზაცია · US" },
    { url: "hoggen.de", note: "ბრენდის საიტი · გერმანია" },
    { url: "hoggen.ge", note: "ბრენდის საიტი · საქართველო" },
    { url: "carroten.ge", note: "ბრენდის საიტი · საქართველო" },
    { url: "montivarius.com", note: "ბრენდის საიტი" },
    { url: "fratello-italia.com", note: "ბრენდის საიტი · იტალია" },
  ],

  projects: [
    { name: "Richter's Clinic", category: "ჯანდაცვა", did: "Google Ads + ლოკალური SEO კლინიკისთვის — ვიზიტზე ჩაწერის ტრექინგი და ახლიდან აწყობილი ლენდინგი." },
    { name: "Handymen", category: "საოჯახო სერვისები", did: "გავუშვი paid acquisition და სრული GA4 ტრექინგი საოჯახო სერვისების მარკეტფლეისისთვის." },
    { name: "Ri.ge", category: "მარკეტფლეისი · GE", did: "Full-funnel Meta და Google კამპანიები და ფიდზე დაფუძნებული პროდუქტ რეკლამები ქართული მარკეტფლეისისთვის." },
    { name: "Structura Development", category: "უძრავი ქონება", did: "ლიდგენერაციის სტრატეგია საცხოვრებელი პროექტებისთვის — CRM-ში განაწილება და ლიდების რეპორტინგი." },
    { name: "GCLO Legal", category: "იურიდიული", did: "Google Search Ads მაღალი ინტენტის იურიდიულ მოთხოვნებზე, on-page SEO და კონვერსიის ტრექინგი." },
    { name: "Borjomi", category: "FMCG · სასმელი", did: "SEO სპეციალისტი წამყვანი FMCG სასმელის ბრენდისთვის — on-page ოპტიმიზაცია და ორგანული ზრდა." },
    { name: "Magic School", category: "განათლება", did: "მოსწავლეთა მოზიდვის კამპანიები Meta-სა და Google-ზე, სეზონური ჩარიცხვის ფანელი." },
    { name: "Kalo.ge", category: "E-commerce · GE", did: "SEO სპეციალისტი — on-page ოპტიმიზაცია, ტექნიკური SEO და ორგანული ზრდა." },
  ],

  skillGroups: [
    { name: "AI და ავტომატიზაცია", items: ["AI Agents", "Claude Code", "Antigravity", "Gemini", "Prompt engineering", "AI კრეატივი", "პროცესების ავტომატიზაცია", "AI ანალიტიკა"] },
    { name: "Paid Media", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "DV360", "SA360", "App Campaigns", "YouTube Ads"] },
    { name: "ანალიტიკა და ტრექინგი", items: ["GA4", "Google Tag Manager", "Server-side ტეგირება", "Meta CAPI", "Firebase", "Event taxonomy"] },
    { name: "SEO", items: ["ტექნიკური SEO", "On-page", "საკვანძო სიტყვები", "Semrush", "Ahrefs", "Search Console"] },
    { name: "CRM და Lifecycle", items: ["Zoho CRM", "Bitrix24", "Lead scoring", "Pipeline რეპორტინგი"] },
    { name: "ვებ დეველოპმენტი", items: ["WordPress", "Shopify", "HTML / CSS", "Merchant Center"] },
  ],

  markets: [
    { code: "US", name: "აშშ" }, { code: "CA", name: "კანადა" },
    { code: "AU", name: "ავსტრალია" }, { code: "NZ", name: "ახალი ზელანდია" },
    { code: "UK", name: "დიდი ბრიტანეთი" }, { code: "PT", name: "პორტუგალია" },
    { code: "GE", name: "საქართველო" }, { code: "AZ", name: "აზერბაიჯანი" },
  ],

  education: { school: "კავკასიის უნივერსიტეტი", degree: "ბაკალავრი, ბიზნესის ადმინისტრირება", dates: "სექ. 2019 — სექ. 2023" },

  aiNotes: [
    "ჰეშბანკი ჩემი მთავარი სრული განაკვეთის სამსახურია. Cityzen-ში დისტანციურად ვმუშაობ პარალელურად — ერთმანეთს არ ეწინააღმდეგება და ორივე მიმდინარეა.",
    "ჰეშბანკსა და Cityzen-ში ერთადერთი ციფრული მარკეტოლოგი ვარ, ამიტომ პოზიცია Digital Marketing Manager-ია და არა Head of Digital — გუნდი, რომელსაც ვხელმძღვანელებდი, არ არსებობს. ეს Zion-იდან უკან ნაბიჯი არ არის — გუნდის მასშტაბის განსხვავებაა, ფუნქციას სრულად ორივე ადგილას ვფლობ.",
    "Bloomex გადაფარავდა TNET-ის პერიოდს. TNET ჰიბრიდული როლი იყო და რესურსი მქონდა, ამიტომ Bloomex დისტანციურად ავიღე, TNET-ის სამუშაოს ხარჯზე ეს არ მოხდა.",
    "Zion დასრულდა, რადგან სამუშაო მიდგომებზე ვერ შევთანხმდით. Bloomex-ში როცა ოფისიდან მუშაობა მოითხოვეს, დისტანციური ფორმატი მირჩევნია და გამოვედი. LTA და რამდენიმე მცირე პროექტი თავიდანვე დროებით, ნახევარ განაკვეთზე შეთანხმებული იყო და დაგეგმილად დასრულდა.",
    "Casio.ge და Mywatch.ge ჩემი საკუთარი ელექტრონული კომერციის ბრენდებია. ისე არის აწყობილი, რომ ყოველდღიური ჩართულობა არ სჭირდება, ამიტომ მთავარ სამსახურს დროს არ აკლებს.",
    "როცა შედეგს ვასახელებ, შედარება არის ჩემი მუშაობის პერიოდი vs. მის წინა პერიოდი.",
    "ხელფასის, გათავისუფლების ვადის და მსგავს პირობებზე მირჩევნია შეხვედრაზე ვისაუბროთ. სიამოვნებით მოვაწყობ ზარს.",
  ],

  // Hand-written Georgian answers. Matched locally by keyword first (no AI call),
  // and also handed to the model as verbatim-reuse material.
  faqKa: [
    { k: ["ერთად", "ერთდროულ", "გადაფარ", "overlap", "პარალელურ"], a: "TNET-ში ჰიბრიდულ რეჟიმში ვმუშაობდი და თავისუფალი რესურსი მქონდა, ამიტომ Bloomex-ის დისტანციური როლი დამატებით ავიღე. TNET-ში სამუშაო პროცესს ეს არ შეუშლია." },
    { k: ["ორივე", "მიმდინარე", "სად მუშაობ", "ახლა მუშაობ", "დღეს რომელ"], a: "ამჟამად ორ პოზიციაზე ვმუშაობ: Hashbank ჩემი ძირითადი, სრული განაკვეთის სამსახურია, Cityzen კი დისტანციური როლია, რომელსაც პარალელურად ვუძღვები." },
    { k: ["head of digital", "თანამდებობ", "უკან ნაბიჯ", "დაქვეითებ", "პოზიცია რატომ"], a: "Hashbank-სა და Cityzen-ში ციფრული მიმართულების ერთადერთი სპეციალისტი ვარ, ამიტომ პოზიცია Digital Marketing Manager-ია — გუნდი, რომელსაც ხელმძღვანელობა დასჭირდებოდა, არ არსებობს. უკან ნაბიჯი არ არის: მიმართულებას სრულად ვფლობ ორივე ადგილას." },
    { k: ["zion", "ზიონ"], a: "Zion-ში მუშაობა დასრულდა, რადგან სამუშაო მიდგომებზე ვერ შევთანხმდით. იმ პერიოდში ციფრული არხებით გაყიდული ბინების რაოდენობა სამჯერ გაიზარდა." },
    { k: ["bloomex", "ბლუმექს"], a: "Bloomex-ში დისტანციურად ვმუშაობდი და როცა ოფისიდან მუშაობა მოითხოვეს, გამოსვლა გადავწყვიტე — დისტანციური ფორმატი ჩემთვის უფრო ეფექტურია. კანადის, ავსტრალიისა და ახალი ზელანდიის ბაზრებზე თვეში $150K-ზე მეტ ბიუჯეტს ვმართავდი." },
    { k: ["lta", "დროებით", "ნახევარ განაკვეთ", "part-time"], a: "LTA და რამდენიმე მცირე პროექტი თავიდანვე დროებით, ნახევარ განაკვეთზე იყო შეთანხმებული და დაგეგმილად დასრულდა." },
    { k: ["casio", "mywatch", "საკუთარ ბიზნეს", "პირად ბიზნეს", "კონფლიქტ"], a: "Casio.ge და Mywatch.ge ჩემი საკუთარი ელექტრონული კომერციის ბრენდებია. ისე არის აწყობილი, რომ ყოველდღიური ჩართულობა არ სჭირდება, ამიტომ ძირითად სამსახურს დროს არ აკლებს." },
    { k: ["რასთან ადარებ", "baseline", "საიდან მოდის", "შედარებ", "ციფრებ რეალურ"], a: "როცა შედეგს ვასახელებ, შედარება არის ჩემი მუშაობის პერიოდი მის წინა პერიოდთან — ყველა ციფრი რეალური კამპანიის მონაცემებიდან მოდის." },
    { k: ["ხელფას", "salary", "კომპენსაცი", "ანაზღაურებ", "მოლოდინ"], a: "ანაზღაურებაზე მირჩევნია პირდაპირ საუბარში შევთანხმდეთ — მოხარული ვიქნები, ზარი დავნიშნოთ." },
    { k: ["გათავისუფლებ", "notice", "როდის დაიწყებ", "ხელმისაწვდომ"], a: "დაწყების ვადებზე სიამოვნებით ვისაუბრებ შეხვედრაზე — დაგეგმვა მოქნილად შემიძლია." },
    { k: ["განათლებ", "უნივერსიტეტ", "დიპლომ", "ბაკალავრ"], a: "კავკასიის უნივერსიტეტის ბიზნესის ადმინისტრირების ბაკალავრი ვარ — 2019-2023 წლები." },
    { k: ["სერტიფიკატ", "სერთიფიკატ", "certificat"], a: "მაქვს Google-ისა და Meta-ს პროფესიული სერტიფიკატები paid მედიისა და ანალიტიკის მიმართულებით — სრული სია CV-ის სერტიფიკატების ბლოკშია." },
    { k: ["ენებ", "ენას ფლობ", "ინგლისურ"], a: "ქართული მშობლიური მაქვს, ინგლისურს პროფესიულ დონეზე ვფლობ — საერთაშორისო ბაზრებზე სამუშაო კომუნიკაცია ინგლისურად მქონდა." },
    { k: ["რამდენი წელ", "ხანია", "სტაჟ", "გამოცდილება წელ"], a: "ციფრულ მარკეტინგში 2021 წლიდან ვმუშაობ — 5 წელზე მეტი გამოცდილება paid მედიაში, ტრეკინგსა და SEO-ში." },
    { k: ["ბიუჯეტ", "budget", "რამდენს მართავ"], a: "თვეში $100K-ზე მეტ სარეკლამო ბიუჯეტს ვმართავდი Google, Meta, DV360 და SA360 პლატფორმებზე, 8 ბაზარზე." },
    { k: ["ინსტრუმენტ", "ხელსაწყო", "tools", "პლატფორმებ", "რითი მუშაობ"], a: "ძირითადად Google Ads, Meta Ads, DV360, SA360, GA4, GTM, Looker Studio და Ahrefs/Semrush — ტრეკინგის სეტაპს, ფიდებსა და რეპორტინგს თავად ვაწყობ." },
    { k: ["seo"], a: "SEO-ს ტექნიკურ და კონტენტ მხარეს ორივეს ვმართავ — Casio.ge-ზე ორგანული ტრაფიკი ნულიდან ავაწყე 53 ათას კლიკამდე და საკვანძო სიტყვების 58% ტოპ-10-შია." },
    { k: ["გუნდ", "ხელმძღვანელ", "team"], a: "Zion-ში ციფრულ მიმართულებას სრულად ვხელმძღვანელობდი, ახლა კი Hashbank-სა და Cityzen-ში ერთპიროვნულად ვფლობ ამ ფუნქციას — გარე პარტნიორებთან და ფრილანსერებთან მუშაობის გამოცდილებაც მაქვს." },
    { k: ["დაგიკავშირდ", "კონტაქტ", "ზარ", "შეხვედრ", "მეილ", "email"], a: "სიამოვნებით — მომწერე kvaratskhelia.giorgi777@gmail.com-ზე, დამიკავშირდი +995 557 077 373-ზე, ან პირდაპირ დაჯავშნე ზარი ამ გვერდიდან." },
    { k: ["რატომ უნდა", "რატომ შენ", "ძლიერი მხარ", "უპირატესობ"], a: "იშვიათი კომბინაცია მაქვს: paid მედია, SEO და ტრეკინგი ერთ ხელშია, ამიტომ არხებს ერთმანეთისგან მოწყვეტით არ ვმართავ — და ყველა როლში გაზომვადი ზრდა დამრჩა." },
  ],

  certificates: [
    { name: "Google Ads", issuer: "Google" },
    { name: "Google Analytics 4", issuer: "Google" },
    { name: "Google Tag Manager", issuer: "Google" },
    { name: "მარკეტინგის ტექნოლოგიების საფუძვლები", issuer: "MarTech Institute" },
    { name: "მარკეტინგის ხელსაწყოები: SEO", issuer: "LinkedIn" },
    { name: "SEO კონტენტის წერა", issuer: "LinkedIn" },
    { name: "რიმარკეტინგის სტრატეგიები — Google Ads", issuer: "LinkedIn" },
  ],

  languages: [
    { name: "ქართული", level: "მშობლიური" },
    { name: "ინგლისური", level: "თავისუფლად" },
    { name: "ესპანური", level: "საშუალო" },
    { name: "რუსული", level: "საშუალო" },
  ],
};

// ───────────────────────────── UI STRINGS ─────────────────────────────
const UI_STRINGS = {
  en: {
    headerBadge: "Open to roles · Tbilisi, GE",
    headerTagline: "Performance · Tracking · SEO · AI",
    experience: "Experience",
    selectedExp: "Experience at a glance",
    top3: "Top 3 roles",
    rolesCount: (n) => `${n} roles · 2021 → now`,
    all: "All",
    projects: "Projects",
    brands: (n) => `${n} brands`,
    resultsLabel: "Results delivered",
    hoverHint: "hover a card",
    whatIDid: "What I did",
    skills: "Skills & Expertise",
    toolsUsed: "Tools used in production",
    sites: "Websites I built",
    sitesRight: "Designed · built · launched",
    sitesIntro: "Beyond marketing, I personally design, build, and launch production websites end-to-end — development, SEO, and analytics setup.",
    markets: "Markets shipped",
    countries: "8 countries",
    education: "Education",
    languages: "Languages",
    certificates: "Certificates",
    earned: (n) => `${n} earned`,
    contact: { Email: "Email", Phone: "Phone", LinkedIn: "LinkedIn", "Based in": "Based in" },
    builtTitle: "This résumé is a live app — I designed, built & shipped it myself.",
    builtSub: "AI features, front-end, and deployment included. Not a template.",
    askBtn: "Ask my CV",
    tbFull: "◆  Full CV",
    tbShort: "◇  30-sec",
    tbLight: "◐  Light",
    tbDark: "◑  Dark",
    tbDownload: "↓  Download PDF",
    tbDownloading: "⏳  Generating…",
    tbBook: "◷  Book a call",
    bookTitle: "Intro call — 15 min",
    bookBody: "A short Google Meet to talk through my experience and how I could fit your team. Pick any slot that works for you.",
    bookGo: "Pick a time  →",
    bookNo: "Not now",
    hintTitle: "In a hurry?",
    hintBody: "Switch to the 30-second version \u2014 just the roles and the numbers.",
    hintGo: "Show me",
    hintNo: "Dismiss",
    tbLang: "ქართული",
    chatTitle: "Ask my CV",
    chatSubtitle: "AI trained on my résumé",
    chatEmpty: "👋 Hi, I'm Giorgi — well, an AI trained on my CV. Ask me about my results, the channels I run, my AI work, or whether I'm a fit for your role. Try one of the questions below to start.",
    chatPlaceholder: "Ask me anything…",
    chatThinking: "Thinking…",
    chatNotFound: "I couldn't find that in my CV.",
    chatError: "Sorry — I couldn't reach the AI just now. Please try again in a moment.",
    chatLimitReached: "You've reached today's question limit. Please reach out to me directly — email, phone, or LinkedIn are on the CV.",
    chatClose: "Close",
    suggested: [
      "What results have you actually driven?",
      "Are you a good fit for a growth role?",
      "Do you have hands-on AI experience?",
      "Which markets and channels have you run?",
      "Can you build websites yourself?",
    ],
    langName: "English",
  },
  ka: {
    headerBadge: "Open to roles · Tbilisi, GE",
    headerTagline: "Performance · Tracking · SEO · AI",
    experience: "გამოცდილება",
    selectedExp: "გამოცდილება მოკლედ",
    top3: "ტოპ 3 როლი",
    rolesCount: (n) => `${n} როლი · 2021 → დღემდე`,
    all: "ყველა",
    projects: "პროექტები",
    brands: (n) => `${n} ბრენდი`,
    resultsLabel: "მიღწეული შედეგები",
    hoverHint: "გადაატარე კურსორი",
    whatIDid: "რა გავაკეთე",
    skills: "უნარები და ექსპერტიზა",
    toolsUsed: "გამოყენებული ხელსაწყოები",
    sites: "ჩემი აწყობილი საიტები",
    sitesRight: "დიზაინი · აწყობა · გაშვება",
    sitesIntro: "მარკეტინგის გარდა, პირადად ვქმნი, ვაწყობ და ვუშვებ საიტებს სრულ ციკლში — დეველოპმენტი, SEO და ანალიტიკის დაყენება.",
    markets: "ბაზრები",
    countries: "8 ქვეყანა",
    education: "განათლება",
    languages: "ენები",
    certificates: "სერტიფიკატები",
    earned: (n) => `${n} მოპოვებული`,
    contact: { Email: "ელ.ფოსტა", Phone: "ტელეფონი", LinkedIn: "LinkedIn", "Based in": "მდებარეობა" },
    builtTitle: "ეს CV ცოცხალი აპლიკაციაა — თავად დავაპროექტე, ავაწყვე და გავუშვი.",
    builtSub: "AI ფუნქციები, ფრონტ-ენდი და დეპლოი — ჩემი ნამუშევარია. არა შაბლონი.",
    askBtn: "ჰკითხე ჩემს CV-ს",
    tbFull: "◆  სრული CV",
    tbShort: "◇  30 წამი",
    tbLight: "◐  ღია",
    tbDark: "◑  მუქი",
    tbDownload: "↓  PDF ჩამოტვირთვა",
    tbDownloading: "⏳  მუშავდება…",
    tbBook: "◷  ზარის დაჯავშნა",
    bookTitle: "გასაცნობი ზარი — 15 წთ",
    bookBody: "მოკლე შეხვედრა Google Meet-ზე ჩემს გამოცდილებასა და შესაძლო თანამშრომლობაზე. აირჩიე შენთვის მოსახერხებელი დრო.",
    bookGo: "დროის არჩევა  →",
    bookNo: "ჯერ არა",
    hintTitle: "გეჩქარებათ?",
    hintBody: "გადართეთ 30-წამიან ვერსიაზე \u2014 მხოლოდ როლები და ციფრები.",
    hintGo: "მაჩვენე",
    hintNo: "დახურვა",
    tbLang: "English",
    chatTitle: "ჰკითხე ჩემს CV-ს",
    chatSubtitle: "AI, ჩემს CV-ზე გაწვრთნილი",
    chatEmpty: "👋 გამარჯობა, გიორგი ვარ — უფრო სწორად, ჩემს CV-ზე გაწვრთნილი AI. მკითხე ჩემი შედეგების, არხების, AI-სთან მუშაობის ან იმის შესახებ, შესაფერისი ვარ თუ არა შენი ვაკანსიისთვის. დასაწყებად სცადე ქვემოთ მოცემული კითხვები.",
    chatPlaceholder: "მკითხე ნებისმიერი რამ…",
    chatThinking: "ვფიქრობ…",
    chatNotFound: "ამის შესახებ ჩემს CV-ში ინფორმაცია ვერ ვიპოვე.",
    chatError: "ბოდიში — AI-სთან დაკავშირება ვერ მოხერხდა. სცადე ცოტა ხანში.",
    chatLimitReached: "დღეს კითხვების ლიმიტს მიაღწიე. დამიკავშირდი პირდაპირ — ელ.ფოსტა, ტელეფონი ან LinkedIn მოიხე CV-ში.",
    chatClose: "დახურვა",
    suggested: [
      "რა შედეგები მაქვს რეალურად მიღწეული?",
      "შესაფერისი ვარ growth როლისთვის?",
      "მაქვს თუ არა AI-სთან მუშაობის გამოცდილება?",
      "რომელ ბაზრებსა და არხებზე მიმუშავია?",
      "შემიძლია საიტების აშენება დამოუკიდებლად?",
    ],
    langName: "ქართული",
  },
};

window.RESUME_I18N = { en: RESUME_EN, ka: RESUME_KA };
window.UI_STRINGS = UI_STRINGS;
window.RESUME = RESUME_EN; // default / backward-compat

// ── "Ask my CV" on a public deploy (e.g. GitHub Pages) ──
// Inside this workspace / the share link, the chat uses a built-in AI helper — no setup needed.
// On a static host like GitHub Pages that helper doesn't exist, so you need a tiny serverless
// proxy that holds your Anthropic API key and forwards chat requests to Claude.
// Once you deploy one (see chat for the 5-minute Cloudflare Worker recipe), paste its URL below:
window.ASK_CV_PROXY_URL = "https://snowy-fire-6121.kvaratskhelia-giorgi777.workers.dev";

// ── Lightweight first-party analytics (sends beacons to the Worker /track endpoint) ──
window.trackCV = (function () {
  const base = () => (window.ASK_CV_PROXY_URL || "").replace(/\/+$/, "");
  let sid = "";
  let start = 0;
  let curLang = "en";
  let sent = 0;
  function send(payload) {
    const url = base() + "/log";
    if (!base()) return;
    try {
      fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true }).catch(() => {});
    } catch (e) {}
  }
  function device() {
    const w = window.innerWidth;
    if (w < 700) return "mobile";
    if (w < 1100) return "tablet";
    return "desktop";
  }
  function flushTime() {
    if (!sid) return;
    const secs = Math.round((Date.now() - start) / 1000);
    if (secs < 1) return;
    send({ type: "time", sid, secs });
  }
  return {
    init() {
      if (sid) return;
      sid = (Date.now().toString(36) + Math.random().toString(36).slice(2, 8));
      start = Date.now();
      send({
        type: "visit", sid, lang: curLang,
        ref: document.referrer || "direct",
        dev: device(),
        w: window.innerWidth, h: window.innerHeight,
        tz: (Intl.DateTimeFormat().resolvedOptions().timeZone || ""),
        ua: navigator.userAgent.slice(0, 160),
      });
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushTime(); });
      window.addEventListener("pagehide", flushTime);
      window.addEventListener("beforeunload", flushTime);
      // periodic heartbeat so long sessions still record time
      setInterval(flushTime, 30000);
    },
    lang(l) { curLang = l; if (sid) send({ type: "lang", sid, lang: l }); },
    event(name) { send({ type: "event", sid, name }); },
  };
})();


