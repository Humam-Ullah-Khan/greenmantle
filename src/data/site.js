/* ==========================================================================
   Site-wide content & configuration
   All copy, contact details and imagery in one place for easy editing.
   ========================================================================== */

export const company = {
  name: 'Greenmantle Tree Care',
  tagline: 'Expert arboricultural care, from root to canopy',
  // TODO: Replace with the client's real contact details before launch.
  phone: '01234 567 890',
  phoneHref: 'tel:+441234567890',
  email: 'hello@greenmantletreecare.co.uk',
  address: 'The Old Sawmill, Greenmantle Yard, Marlow, Buckinghamshire SL7 1AB',
  hours: 'Mon–Fri: 7:30am – 6pm · Sat: 8am – 1pm',
  serviceAreas: [
    'Buckinghamshire',
    'Oxfordshire',
    'Berkshire',
    'Hertfordshire',
    'Greater London',
  ],
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    x: '#',
  },
}

export const topbar = {
  credentials: ['ARB Approved Contractors', 'NPTC Certified', '£5m Public Liability'],
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#team' },
  { label: 'Accreditations', href: '#accreditations' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'ARB Approved Tree Surgeons',
  title: 'Expert tree care, from root to canopy',
  lead: 'From delicate crown reductions to full tree removal, our certified arborists care for your trees with precision, safety and genuine respect for the landscape.',
  image:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&auto=format&fit=crop',
  splitImage:
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&h=1100&q=80&auto=format&fit=crop',
  imageAlt: 'A tall tree in a misty woodland',
}

export const services = [
  {
    title: 'Tree Pruning & Crown Work',
    desc: 'Crown reductions, thinning, lifting and deadwooding to improve health, shape and safety — all to BS 3998 standards.',
    icon: 'prune',
  },
  {
    title: 'Tree Felling & Removal',
    desc: 'Safe, controlled felling and sectional dismantling, even in tight spaces, with the surrounding landscape fully protected.',
    icon: 'fell',
  },
  {
    title: 'Stump Grinding',
    desc: 'Complete stump and root removal below ground level, leaving your site ready to re-plant, turf or pave.',
    icon: 'stump',
  },
  {
    title: 'Hedge & Shrub Care',
    desc: 'Hedge trimming, reductions and shaping plus shrub pruning to keep boundaries neat and growing strong through the seasons.',
    icon: 'hedge',
  },
  {
    title: 'Planting & Soil Care',
    desc: 'Tree and shrub planting, soil de-compaction and mulching to give new and established plantings the best start.',
    icon: 'plant',
  },
  {
    title: 'Pest & Disease Management',
    desc: 'Expert diagnosis and treatment of common threats such as ash dieback, honey fungus and bracket fungi.',
    icon: 'bug',
  },
]

export const emergency = {
  title: '24/7 Emergency Storm Response',
  desc: 'Storm damage, fallen trees and dangerous limbs? Our rapid-response team is on call day and night.',
}

export const accreditations = [
  { abbr: 'ARB', label: 'Arboricultural Association Approved Contractor' },
  { abbr: 'NPTC', label: 'NPTC / City & Guilds Certified Teams' },
  { abbr: 'ISA', label: 'International Society of Arboriculture' },
  { abbr: 'BS 3998', label: 'British Standard for Tree Work' },
  { abbr: '£5m', label: 'Fully Insured Public Liability' },
]

export const regulatory = {
  eyebrow: 'Planning & Legislation',
  title: 'We handle the paperwork, not just the trees',
  lead: 'Working on trees in the UK comes with legal responsibilities. As specialists in tree-related legislation, we take the stress out of compliance so you don’t have to.',
  points: [
    {
      title: 'Tree Preservation Orders (TPOs)',
      desc: 'We assess TPO status, prepare applications and act on your behalf with the local authority.',
    },
    {
      title: 'Conservation Areas',
      desc: 'Trees in conservation areas are protected too. We handle the notifications and required notices.',
    },
    {
      title: 'Section 211 Notices',
      desc: 'Six weeks’ notice is often required before working on protected trees — we manage the process end to end.',
    },
  ],
}

export const team = [
  {
    name: 'James Hartley',
    role: 'Founder & Lead Arborist',
    certs: 'ISA Certified · NPTC Climber',
    focus: 'Veteran tree care & crown work',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Priya Nair',
    role: 'Consulting Arborist',
    certs: 'MSc Arboriculture · ISA',
    focus: 'TPOs, surveys & planning',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Tom Whitaker',
    role: 'Climbing Arborist',
    certs: 'NPTC Climber & Chainsaw',
    focus: 'Felling & storm response',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop',
  },
]

export const splitPromo = [
  {
    kind: 'residential',
    eyebrow: 'For Your Home',
    title: 'Residential tree care',
    desc: 'Keep your garden safe, beautiful and thriving. From a single overgrown conifer to a full landscape plan, we bring expert care right to your door.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop',
    alt: 'A mature tree in a well-kept garden',
    cta: 'Explore home services',
  },
  {
    kind: 'commercial',
    eyebrow: 'For Your Business',
    title: 'Commercial grounds maintenance',
    desc: 'Reliable, scheduled tree and grounds care for estates, schools, councils and businesses — protecting your property value and keeping sites safe and compliant.',
    image:
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=80&auto=format&fit=crop',
    alt: 'Sunlight through green leaves on a commercial grounds site',
    cta: 'Explore commercial services',
  },
]

export const brandStory = {
  title: 'We believe thriving communities start with healthy trees.',
  body: 'For over fifteen years we’ve cared for the trees of Buckinghamshire and beyond — one garden, one street and one woodland at a time. Every tree we tend helps cleaner air, richer wildlife and stronger neighbourhoods.',
  image:
    'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=1200&q=80&auto=format&fit=crop',
  alt: 'A quiet forest of tall trees',
}

export const beforeAfter = {
  eyebrow: 'Transformation Portfolio',
  title: 'Hazard mitigation before & after',
  lead: 'Drag the slider to see the difference our certified arborists make — from overgrown and storm-damaged to safe, tidy and beautifully maintained.',
  items: [
    {
      title: 'Overgrown hedge reduced & reshaped',
      location: 'Marlow, Buckinghamshire',
      before:
        'https://images.pexels.com/photos/4941917/pexels-photo-4941917.jpeg?auto=compress&cs=tinysrgb&w=900',
      after:
        'https://images.pexels.com/photos/36713682/pexels-photo-36713682.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      title: 'Storm-damaged tree cleared & grounds restored',
      location: 'Oxford, Oxfordshire',
      before:
        'https://images.pexels.com/photos/32394146/pexels-photo-32394146.jpeg?auto=compress&cs=tinysrgb&w=900',
      after:
        'https://images.pexels.com/photos/29821815/pexels-photo-29821815.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
  ],
}

export const footer = {
  blurb:
    'Greenmantle Tree Care is an ARB approved tree surgery company providing specialist arboricultural services across Buckinghamshire, Oxfordshire and the surrounding counties.',
  quickLinks: [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#team' },
    { label: 'Accreditations', href: '#accreditations' },
    { label: 'Contact', href: '#contact' },
  ],
}
