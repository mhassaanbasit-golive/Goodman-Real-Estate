import { StatItem, StatCard, CaseStudy, Affiliation, Accolade, ServiceCardData, ProjectUpdate, TestimonialItem } from './types';

export const HERO_STATS: StatItem[] = [
  { id: '1', value: '$1.2B+', label: 'Transaction Volume' },
  { id: '2', value: '25+', label: 'Years Experience' },
  { id: '3', value: '5M+', label: 'Square Feet Developed' }
];

export const STATS_CARDS: StatCard[] = [
  { id: '1', number: '$1.2B+', label: 'Transaction Volume', iconName: 'TrendingUp' },
  { id: '2', number: '25+', label: 'Years Experience', iconName: 'Briefcase' },
  { id: '3', number: '5M+', label: 'Sq. Ft. Developed', iconName: 'MapPin' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rustic-expansion',
    title: 'The Rustic Expansion',
    category: 'Retail',
    location: 'Dallas, San Antonio & Houston',
    client: 'The Rustic Concept Owners',
    squareFootage: 'Various SF',
    completionYear: 'Ongoing',
    status: 'ONGOING',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    problem: 'Single unit, Dallas based, live music venue seeking to grow concept into other markets. Owners had no in-house development capability and were attempting growth strategy using operations staff to execute various aspects of the new unit development.',
    solution: 'Currently providing a comprehensive outsourced solution for all development activities. Full range of development services from environmental studies through design development, CD\'s, bidding, construction and project close-out including all third party vendors and contracts. Projects in Dallas, Houston, and San Antonio.',
    highlights: [
      'Comprehensive outsourced solution for all development activities',
      'Provides full range of services from environmental studies through construction',
      'Direct coordination of all third-party vendors and contracts',
      'Active expansions in Dallas, Houston, and San Antonio'
    ]
  },
  {
    id: 'painted-tree-marketplace',
    title: 'Painted Tree Marketplace',
    category: 'Commercial',
    location: 'Highland Village, TX',
    client: 'Painted Tree Marketplace',
    squareFootage: '35,000 SF',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    problem: 'Arkansas based operator of large format home decor stores looking to grow outside of their home territory. Owners had no in-house development capability and were attempting a growth strategy while also trying to operate existing locations.',
    solution: 'Provided a comprehensive outsourced solution for all development activities. Full range of development services: design development, CD\'s, bidding, construction and project close-out including all third party vendors and contracts. Project in Highland Village, TX.',
    highlights: [
      'Fully outsourced development solution for national growth',
      'Managed design development, CD\'s, and bidding phases',
      'Successfully delivered Highland Village, TX location',
      'Overcame lack of in-house development staff while sustaining existing operations'
    ]
  },
  {
    id: 'raleigh-kitchen101-violet',
    title: 'The Raleigh, Kitchen 101, & Violet Room',
    category: 'Commercial',
    location: 'Irving, TX',
    client: 'Raleigh Concept Group',
    squareFootage: '30,000 SF',
    completionYear: 'Spring 2020',
    status: 'ONGOING',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    problem: 'Restaurant owner based in Dallas, TX looking to build large multi-use, one of a kind facility to host casual dining, large concert events and private functions in 30,000 SF multi-level space.',
    solution: 'Currently providing a comprehensive outsourced solution for all development activities. Full range of services including bidding, construction and project close-out for all third party vendors and contracts. Project due to open Spring 2020.',
    highlights: [
      '30,000 SF multi-level mixed-use hospitality and entertainment space',
      'Complex program integration (casual dining, concert stage, private functions)',
      'Direct oversight of bidding, construction, and close-out',
      'Unified project timeline across multiple third-party vendors'
    ]
  },
  {
    id: 'bowl-barrel-expansion',
    title: 'Bowl and Barrel Expansion',
    category: 'Retail',
    location: 'Dallas, San Antonio & Houston',
    client: 'FreeRange Concepts / Bowl & Barrel',
    squareFootage: 'Various SF',
    completionYear: 'Ongoing',
    status: 'ONGOING',
    image: 'https://images.unsplash.com/photo-1538510101211-14d59fdfb62c?auto=format&fit=crop&q=80&w=800',
    problem: 'Single unit, Dallas based, bowling and dining establishment seeking to grow concept into other markets. Owners had no in-house development capability and were attempting growth strategy using operations staff to execute various aspects of the new unit development.',
    solution: 'Currently providing a comprehensive outsourced solution for all development activities. Full range of development services from environmental studies through design development, CD\'s, bidding, construction and project close-out including all third party vendors and contracts. Projects in Dallas, Houston, and San Antonio.',
    highlights: [
      'Successful multi-market brand scaling from single unit concept',
      'Complete environmental, design, and construction services',
      'Outsourced development partner for operations-focused client leadership',
      'Concurrent development execution in Dallas, Houston, and San Antonio'
    ]
  },
  {
    id: 'industrial-relocation',
    title: 'Industrial Relocation',
    category: 'Industrial',
    location: 'DFW, GA, Houston',
    client: 'Commercial Kitchen Equipment Supplier',
    squareFootage: 'Various SF',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    problem: 'Commercial kitchen equipment supplier outgrew it\'s facilities in multiple locations and needed to relocate. Senior staff fully absorbed in company growth with no time to focus on next location.',
    solution: 'Sourced appropriate sized facilities and negotiated long-term leases. Also provided full range of development services to drive the complete coordination of design and build-out of facilities.',
    highlights: [
      'Sourced optimal multi-market facilities and secured long-term leases',
      'Comprehensive design and tenant build-out coordination',
      'Minimized distraction for senior corporate leadership',
      'Streamlined concurrent industrial transitions across three major regions'
    ]
  },
  {
    id: 'rib-crib-growth',
    title: 'Rib Crib Growth',
    category: 'Retail',
    location: 'TX, OK, KS, AR',
    client: 'Rib Crib',
    squareFootage: 'Various SF',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    problem: 'Regional barbecue chain ramping up growth with no in-house development department. Growth constrained by lack of staff to execute and oversee development roll-out of new units.',
    solution: 'Provided development services on an outsourced basis coordinating scope of all third party vendors once development agreement is signed. Oversight responsibility for all construction activities, contractor RFI\'s, pay applications, punchlists, etc. 11 projects completed and located in Texas, Oklahoma, Kansas and Arkansas.',
    highlights: [
      '11 new restaurant units successfully delivered across four states',
      'Acting as outsourced corporate real estate development department',
      'End-to-end management of contractor RFI\'s, pay applications, and punchlists',
      'Coordinated complex third-party vendor schedules under tight timelines'
    ]
  },
  {
    id: 'strip-center-development',
    title: 'Strip-Center Development',
    category: 'Commercial',
    location: 'Sherman, TX',
    client: 'High Net Worth Investor',
    squareFootage: '12,000 SF',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    problem: 'High net worth investor owned large shopping center with developable outparcel. He desired to build a small strip on the parcel to house two tenants, but was capital constrained and had no in-house development capability.',
    solution: 'Acted as the investor\'s sole development partner on an outsourced basis to coordinate the process from re-plat through entitlements, design and construction. Handled all aspects of tenant construction with two national tenants. One of the tenants (Rib Crib) subsequently engaged Goodman Real Estate Solutions to assist with their new unit roll-out.',
    highlights: [
      'Coordinated the full process from initial re-plat to entitlements and design',
      'Delivered turn-key construction services for two national tenants',
      'Overcame investor capital and expertise constraints',
      'Generated follow-on advisory corporate relationships with tenants'
    ]
  },
  {
    id: 'post-katrina-rehab',
    title: 'Post-Katrina Rehab',
    category: 'Commercial',
    location: 'Biloxi, MS',
    client: 'Biloxi Retail Center Owner',
    squareFootage: '150,000 SF',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    problem: 'Owner purchased a historically successful, but 75% destroyed 150,000 SF center in Biloxi, MS shortly after Hurricane Katrina. After complete renovation, many tenants chose not to or could not return and re-occupy. Cost of insurance for waterfront space was exorbitant and suburban opportunities away from the coastline became more attractive. A once bustling retail area was potentially never going to recover. Occupancy stabilized at less than 30%.',
    solution: 'With no leasing prospects and no anchor, it was time to think outside the box. A nearby 1970\'s village Walmart was site constrained and was rumored to want to leave the area. After 2 years of negotiation, convinced Walmart to relocate and build 160,000 SF Walmart Supercenter on vacant land adjacent to owner\'s center. Negotiated a cross access easement for their customers to enter and exit to a major roadway. Also obtained and granted off-site signage rights for Walmart to further identify their proximity behind owner\'s site. Three national tenants negotiating large leases with owner as a result, boosting center occupancy to over 80%.',
    highlights: [
      'Rescued a storm-damaged shopping center stabilizing occupancy above 80%',
      'Convinced Walmart to relocate and build an adjacent 160,000 SF Supercenter',
      'Negotiated critical cross access easement and complex municipal signage approvals',
      'Catalyzed high-volume tenant demand in a severely underperforming district'
    ]
  },
  {
    id: 'retail-redevelopment',
    title: 'Retail Redevelopment',
    category: 'Commercial',
    location: 'Mesquite, TX',
    client: 'Mesquite Land Assemblage Owner',
    squareFootage: '20 Acres',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    problem: 'Last 20 acres of large retail assemblage in Mesquite, TX had difficulty attracting buyers due to governmental and neighborhood opposition. Re-zone to residential was not approved. Owners were trapped with undevelopable land. Adjacent Target store was rumored to be wanting to leave area, further limiting exit prospects.',
    solution: 'Convinced Target to buy 4 acres to expand and re-build as a Super Target. However, the remaining 16 acres would then be further compromised due to position behind loading dock of Super Target. Owner unwilling to be left with this acreage, despite sale to Target. Convinced adjoining shopping center owner and City of Mesquite to buy the balance of the land for future use. Owner fully exited from land and area was revitalized with new Super Target.',
    highlights: [
      'Convinced Target to expand and re-build as a landmark Super Target',
      'Overcame neighborhood and governmental opposition to unlock development',
      'Negotiated multi-party sale of compromised acreage to city and adjacent owner',
      'Revitalized regional economic corridor and secured full exit for original owner'
    ]
  },
  {
    id: 'value-add-opportunity',
    title: 'Value-Add Opportunity',
    category: 'Industrial',
    location: 'Carrollton, TX',
    client: 'Shopping Center Owner',
    squareFootage: '175,000 SF',
    completionYear: 'Completed',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    problem: 'Aging 175,000 SF center in Carrollton, TX with a valuable vacant theater space hidden in a back part of the site. Major redevelopment of competitive center across freeway was attracting all available tenants. Center was rapidly losing occupancy. Anchor threatening to not renew.',
    solution: 'Tore down 8,000 SF of hard to lease middle of center, providing access and visibility to hidden theater, which was then leased to Bally Fitness. Convinced City to allow off-site signage to provide highway pylon for Bally. Anchor renewed and leasing accelerated. Center reached stabilized 90% occupancy and was then sold to national shopping center investor.',
    highlights: [
      'Repositioned aging retail asset by strategic partial demolition (8,000 SF)',
      'Leased hidden vacant theater space to major national fitness anchor',
      'Negotiated city sign variances for critical highway pylon visibility',
      'Stabilized occupancy to 90%, enabling premium exit sale to institutional investor'
    ]
  }
];

export const VERIFIED_ACCOLADES: Accolade[] = [
  { id: '1', text: 'CLHMS™ Million Dollar Guild® Elite Member' },
  { id: '2', text: 'Top 1% Texas Commercial Brokers Association' },
  { id: '3', text: 'D Magazine Best Real Estate Producer Award' },
  { id: '4', text: 'Over $1.2 Billion in Career Transaction Volume' }
];

export const CREDENTIALS: string[] = [
  'CLHMS™ Certified',
  'CCIM Candidate',
  'TAR Member',
  'NAR Commercial Certified',
  'ULI Associate',
  'ICSC Active Member'
];

export const AFFILIATIONS: Affiliation[] = [
  { id: '1', title: 'Institute for Luxury Home Marketing (CLHMS)', iconName: 'Award' },
  { id: '2', title: 'Certified Commercial Investment Member (CCIM) Institute', iconName: 'ShieldCheck' },
  { id: '3', title: 'Urban Land Institute (ULI) North Texas Division', iconName: 'Globe' },
  { id: '4', title: 'International Council of Shopping Centers (ICSC)', iconName: 'Building' }
];

export const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: '1',
    title: 'Strategic Asset Advisory & Asset Management',
    description: 'We optimize and defend property portfolios, ensuring stable returns, intelligent recapitalization, and sound financial modeling.',
    iconName: 'TrendingUp',
    items: ['Asset Management', 'Repositioning', 'Advisory', 'Due Diligence']
  },
  {
    id: '2',
    title: 'Development Services & Entitlements',
    description: 'Navigating municipal complexity, building code hurdles, and land approvals to de-risk development from day one.',
    iconName: 'FileText',
    items: ['Advisory', 'Entitlements', 'Due Diligence', 'Construction']
  },
  {
    id: '3',
    title: 'Transaction Management & Leasing',
    description: 'Connecting top-tier institutional tenants with premium retail, logistics, and mixed-use spaces across Texas.',
    iconName: 'Briefcase',
    items: ['Leasing', 'Asset Management', 'Advisory', 'Due Diligence']
  },
  {
    id: '4',
    title: 'Project Design & Construction Oversight',
    description: 'We orchestrate elite architects, engineers, and general contractors to deliver stunning structures on time and on budget.',
    iconName: 'HardHat',
    items: ['Design', 'Construction', 'Repositioning', 'Entitlements']
  }
];

export const PROJECT_UPDATES: ProjectUpdate[] = [
  {
    id: 'update-1',
    title: 'Goodman Real Estate Breaks Ground on Commerce Crossing Phase I',
    date: 'July 15, 2026',
    summary: 'Heavy machinery has officially arrived on-site in Fort Worth. Groundwork has begun for the foundation of Building A, a 180,000 SF premium logistics terminal scheduled for dry shell delivery in Q2 2027.',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: 'update-2',
    title: 'The Grand Plaza Welcomes National Anchor Organic Grocer',
    date: 'June 02, 2026',
    summary: 'The Grand Plaza project has completed its core construction. Tenant build-out is now underway with the premium organic grocer initiating interior styling. Grand opening ceremony scheduled for October.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: 'update-3',
    title: 'Herb Goodman Panelist at the 2026 Southwest Real Estate Summit',
    date: 'May 10, 2026',
    summary: 'Principal Herb Goodman shared key insights regarding commercial retrofitting and urban transit-oriented developments at this year\'s summit in Dallas.',
    status: 'Completed'
  },
  {
    id: 'update-4',
    title: 'Zoning Re-Classification Approved for Logistics Hub North Expansion',
    date: 'April 22, 2026',
    summary: 'The Houston City Council unanimously approved the 8-acre zoning extension for Phase II expansion of Logistics Hub North, increasing potential layout capacity.',
    status: 'Completed'
  },
  {
    id: 'update-5',
    title: 'Advisory Retainer Secured for 12-Asset Retail Portfolio in West Texas',
    date: 'March 11, 2026',
    summary: 'Goodman Real Estate Solutions has been retained as the principal advisor for repositioning a large private equity-owned retail portfolio spanning Midland and Odessa.',
    status: 'Ongoing'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'koons-real-estate-law',
    companyLogo: 'Koons Law',
    companyName: 'Koons Real Estate Law',
    quote: 'As an attorney accustomed to development delays caused by cities, tenants and large companies, I was extremely impressed at Herb\'s abilities to frame the issues perfectly for each party, and then quickly negotiate solutions through the attorneys, principals and engineers. He is a seasoned real estate professional who approaches projects with creativity, tenacity and skill.',
    authorName: 'Kathryn L. Koons',
    authorTitle: 'Founding Shareholder'
  },
  {
    id: 'e2m',
    companyLogo: 'E2M',
    companyName: 'E2M Partners',
    quote: 'Herb\'s greatest skill is his focus on solving problems rather than bemoaning the difficulty of any situation. He is quite capable of solving very complicated problems involving multiple parties and is very much an \'outside the box\' thinker in order to achieve a satisfactory solution.',
    authorName: 'Rick Slaven',
    authorTitle: 'Founding Partner'
  },
  {
    id: 'biloxi',
    companyLogo: 'Biloxi',
    companyName: 'City of Biloxi',
    quote: 'During the past several years, I have had the opportunity to work with Herb on a number of development and renovation projects here in Biloxi, MS. His marketing and management skills are superb and he is very thorough in any endeavor he undertakes.',
    authorName: 'Jerry Creel',
    authorTitle: 'Director of Community Development'
  },
  {
    id: 'cro',
    companyLogo: 'CRO',
    companyName: 'CRO Inc.',
    quote: 'Herb has great real estate, lease negotiation, quantitative and mathematical problem solving (and problem seeing) abilities. He is 100% honest and always steps up to the plate. He is always available and a team player who tackles a problem with the gusto of a hound dog. He is one of the most organized persons I have ever met.',
    authorName: 'Gene Street',
    authorTitle: 'Former Chairman of the Board'
  },
  {
    id: 'rib-crib',
    companyLogo: 'Rib Crib',
    companyName: 'Rib Crib',
    quote: 'Herb\'s been a tremendous asset in assisting our organization develop more than a dozen projects over the last couple of years. He\'s been a fierce advocate for us as his client regardless of how large or small his role within a given project. We look forward to our continued relationship with Goodman Real Estate Solutions.',
    authorName: 'Seth Nimmo',
    authorTitle: 'Vice President of Finance & Development'
  },
  {
    id: 'freerange-concepts',
    companyLogo: 'FreeRange Concepts',
    companyName: 'FreeRange Concepts',
    quote: 'I have worked with Herb Goodman for over ten years and his attention to detail is incredible. As a restaurant owner, I can safely say that Herb has been integral to our team in site selection and due diligence, lease and purchase agreement review and negotiation, pre-construction coordination with architects and engineers, construction management, and shepherding the closeout process for new stores. Herb is an extremely important member of our team.',
    authorName: 'Josh Sepkowitz',
    authorTitle: 'Founder'
  }
];
