// Shared content data for all three DCH Construction redesign options
// All "reviews" are plausible composites based on real review themes — replace with real Google reviews

window.DCH_DATA = {
  company: {
    name: "DCH Construction",
    fullName: "DCH Construction LLC",
    tagline: "Basements, built for the way you live.",
    established: 2001,
    experience: "75+ years combined",
    duration: "6 weeks",
    warranty: "1-year workmanship warranty",
    phone: "(303) 555-0167",
    email: "hello@dchconstructionllc.com",
    owners: ["Donald C. Hesse III", "Susan A. Hesse"],
    serviceArea: [
      "Aurora", "Parker", "Castle Rock", "Lone Tree",
      "Highlands Ranch", "Castle Pines", "Centennial", "Littleton"
    ],
    counties: ["Douglas County", "Arapahoe County", "Jefferson County"],
    badges: [
      "Family + Veteran Owned",
      "Licensed & Insured",
      "BBB Accredited",
      "Est. 2001"
    ],
  },

  services: [
    {
      id: "basement-finishing",
      eyebrow: "01 — Specialty",
      name: "Basement Finishing",
      blurb: "Cold, unfinished space transformed into the most-used room in the house. Framing, electrical, plumbing, drywall, finishes — managed end-to-end.",
      includes: ["Permitting + inspections", "Framing & drywall", "Egress windows", "Lighting & electrical", "HVAC & plumbing", "Trim, paint, flooring"],
      timeline: "6 weeks typical",
      placeholder: "finished basement — wide great room",
    },
    {
      id: "wet-bars",
      eyebrow: "02 — Entertain",
      name: "Wet Bars & Lounges",
      blurb: "Built-in cabinetry, stone tops, beverage fridges, custom lighting. The corner of the basement that earns its own zip code.",
      includes: ["Custom cabinetry", "Stone + quartz tops", "Bar sinks + plumbing", "Beverage centers", "Under-cabinet lighting"],
      timeline: "Within scope",
      placeholder: "wet bar — quartz + walnut",
    },
    {
      id: "media-rooms",
      eyebrow: "03 — Watch",
      name: "Media Rooms & Theaters",
      blurb: "Tiered seating, blackout treatments, sound-isolated walls, projector or wall TV. Movie night, every night.",
      includes: ["Soundproof framing", "Projector pre-wire", "Tiered platforms", "Recessed lighting scenes", "AV rough-in"],
      timeline: "Within scope",
      placeholder: "home theater — tiered seating",
    },
    {
      id: "bathrooms",
      eyebrow: "04 — Refresh",
      name: "Bathrooms",
      blurb: "Full baths, three-quarter baths, powder rooms. Tile from floor to ceiling, walk-in showers, custom vanities.",
      includes: ["Full + 3/4 baths", "Walk-in tile showers", "Heated floors", "Custom vanities", "Schluter waterproofing"],
      timeline: "3–5 weeks standalone",
      placeholder: "basement bath — tile + brass",
    },
    {
      id: "guest-suites",
      eyebrow: "05 — Host",
      name: "Guest Suites",
      blurb: "A bedroom, a bath, and a quiet door. Built to code with egress, ready for in-laws, returning grads, or the listing.",
      includes: ["Code-compliant egress", "Private bath", "Walk-in closet", "Sound-isolated walls"],
      timeline: "Within scope",
      placeholder: "guest suite — bed + reading nook",
    },
    {
      id: "home-offices",
      eyebrow: "06 — Work",
      name: "Home Offices & Gyms",
      blurb: "Built-ins, rubber floors, mirrors, ventilation, dedicated circuits. The 6 a.m. workout and the 9 a.m. meeting in one trip downstairs.",
      includes: ["Built-in desks + storage", "Rubber + cork flooring", "Mirror walls", "Dedicated circuits", "Ventilation upgrades"],
      timeline: "Within scope",
      placeholder: "home gym — rubber floor + mirror",
    },
    {
      id: "storage",
      eyebrow: "07 — Stash",
      name: "Storage & Built-Ins",
      blurb: "Shelving systems, utility rooms, wine storage, under-stair libraries. Every cubic foot, considered.",
      includes: ["Custom shelving", "Utility room reorgs", "Wine + bottle storage", "Under-stair builds"],
      timeline: "Within scope",
      placeholder: "built-in storage wall",
    },
  ],

  projects: [
    { id: "p1", name: "The Walnut Hideaway", town: "Castle Pines, CO", sqft: 1850, weeks: 6, year: 2025, blurb: "Great room, wet bar, three-quarter bath, and a tucked-away guest suite. Walnut millwork throughout.", placeholder: "wide basement great room with walnut bar" },
    { id: "p2", name: "Foothills Theater", town: "Highlands Ranch, CO", sqft: 1100, weeks: 5, year: 2025, blurb: "Tiered seven-seat theater with full sound treatment and a backlit bar at the rear.", placeholder: "home theater — tiered, backlit bar" },
    { id: "p3", name: "Parker Family Hub", town: "Parker, CO", sqft: 1600, weeks: 6, year: 2024, blurb: "Playroom for the kids, gym for the parents, and a quiet office tucked behind a barn door.", placeholder: "basement playroom + office split" },
    { id: "p4", name: "Cherry Creek Suite", town: "Aurora, CO", sqft: 950, weeks: 4, year: 2024, blurb: "Mother-in-law suite with private entrance, full bath, and a small kitchenette.", placeholder: "guest suite — neutral palette" },
    { id: "p5", name: "Castle Rock Cellar", town: "Castle Rock, CO", sqft: 1400, weeks: 7, year: 2024, blurb: "Climate-controlled wine wall, tasting bar, and a poker room with custom lighting scenes.", placeholder: "wine cellar + tasting room" },
    { id: "p6", name: "Lone Tree Loft", town: "Lone Tree, CO", sqft: 2100, weeks: 8, year: 2025, blurb: "Open-concept lounge, full bar, two guest rooms, and an integrated gym. Top to bottom.", placeholder: "open basement lounge — wide angle" },
  ],

  reviews: [
    { name: "Jennifer M.", town: "Parker, CO", rating: 5, year: 2025, source: "Google",
      quote: "Trei and Sue treated our basement like it was their own home. Six weeks, on the dot, and the great room is now where everyone ends up — including the dog." },
    { name: "Mike R.", town: "Castle Rock, CO", rating: 5, year: 2025, source: "Google",
      quote: "We got three quotes. DCH wasn't the cheapest, but they were the only ones who walked the basement with a tape measure and asked us how we actually live. Worth every dollar." },
    { name: "Sarah K.", town: "Highlands Ranch, CO", rating: 5, year: 2024, source: "Google",
      quote: "Communication was unreal. Daily updates, photos at the end of every week, and not one surprise on the final invoice. We're already planning the bathroom upstairs with them." },
    { name: "David L.", town: "Aurora, CO", rating: 5, year: 2024, source: "Google",
      quote: "Veteran-owned, family-owned, and it shows. Crew was respectful, on time, and clean — like, sweep-the-driveway clean. Highly recommend." },
    { name: "Patricia W.", town: "Lone Tree, CO", rating: 5, year: 2025, source: "BBB",
      quote: "Trei sat with us for two hours on the first visit and sketched three different layouts on graph paper. We picked option two. He delivered it almost exactly." },
    { name: "Carlos G.", town: "Centennial, CO", rating: 5, year: 2024, source: "Google",
      quote: "We had a leak issue mid-project that wasn't their fault. They handled it like it was. Brought in their plumber the same day. That's how you know who you're working with." },
    { name: "Anna T.", town: "Castle Pines, CO", rating: 5, year: 2025, source: "Google",
      quote: "Beautiful work, clean job site, kid-friendly crew. The wet bar is the showpiece — guests can't stop touching the walnut." },
    { name: "Greg H.", town: "Parker, CO", rating: 5, year: 2024, source: "Google",
      quote: "Hired DCH after a competitor disappeared mid-bid. Should have started with them. Permits handled, inspections handled, finished in six." },
  ],

  process: [
    { n: "01", title: "Walk-through", body: "We come to you, measure twice, and listen to how you actually want to use the space. No high-pressure pitch." },
    { n: "02", title: "Design + quote", body: "Layout sketches, fixture selections, and a written quote with no soft numbers. What you sign is what you pay." },
    { n: "03", title: "Permits + crew", body: "We pull permits, schedule inspections, and assemble licensed sub-trades. Our ownership runs every job, end to end." },
    { n: "04", title: "Six weeks of build", body: "Demo, framing, mechanicals, drywall, finishes. Weekly progress photos. A clean job site, every day." },
    { n: "05", title: "Walk-through + warranty", body: "Final inspection, punch list, then a one-year workmanship warranty in writing. We pick up the phone after." },
  ],

  faqs: [
    { q: "How long does a basement take?", a: "Most basement projects wrap in six weeks from demo to final walk-through. Larger or more complex builds run seven to eight." },
    { q: "Do you pull the permits?", a: "Yes — every project is permitted through the municipality with a licensed contractor's permit. Plumbing, electrical, and HVAC are pulled separately by our licensed sub-trades." },
    { q: "Are you insured?", a: "DCH and every sub-trade we use carry insurance — it's a Colorado state requirement and we don't bend it." },
    { q: "Do you match competitor quotes?", a: "We meet comparable written quotes from licensed competitors, with some restrictions. Bring us the quote and we'll talk straight." },
    { q: "What's the warranty?", a: "One-year workmanship warranty on everything we build, in writing, at handover. We answer the phone after." },
    { q: "Do you do upper-level remodels?", a: "Yes — kitchens, baths, and full home remodels too. Basements are our specialty, but the same crew handles the rest." },
  ],

  stats: [
    { value: "2001", label: "Established" },
    { value: "75+", label: "Years combined experience" },
    { value: "6 wks", label: "Typical project duration" },
    { value: "1 yr", label: "Workmanship warranty" },
  ],
};
