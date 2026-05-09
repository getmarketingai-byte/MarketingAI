import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "90-Day Social Media Content Calendar for Tradies | MarketingAI",
  description:
    "Your complete 90-day social media content calendar. 90 Instagram captions, 30 Facebook posts, 10 video scripts, hashtag guide, and posting schedule.",
  robots: { index: false, follow: false },
};

type IGPost = {
  day: number;
  pillar: string;
  hook: string;
  body: string;
  cta: string;
  hashtags: string[];
};

type FBPost = {
  week: number;
  title: string;
  body: string;
};

type VideoScript = {
  num: number;
  title: string;
  format: string;
  script: string;
};

const instagramPosts: IGPost[] = [
  { day: 1, pillar: "Before & After", hook: "Day 1 before: bathroom giving 1970s nightmare. After: sorted.", body: "Blocked drain, cracked grout, leaky tap -- our team fixed the lot in one visit.", cta: "Got a bathroom needing work? Drop us a message.", hashtags: ["#tradiesofinstagram","#beforeandafter","#tradie","#australiantradie","#tradelife"] },
  { day: 2, pillar: "Before & After", hook: "Day 1 vs done. Kitchen tap drip is gone.", body: "Old tap dripping, cabinet underneath rotting. New tap in, cabinet dried, problem solved.", cta: "Dripping tap adds up. Book us in.", hashtags: ["#plumbingwork","#kitchentap","#beforeandafter","#tradie","#localplumber"] },
  { day: 3, pillar: "Before & After", hook: "Before: electrical panel from 1989. After: safe, up to code.", body: "Old switchboard was a fire hazard. Full upgrade done. Family can sleep easier.", cta: "When did you last check your switchboard?", hashtags: ["#electrician","#switchboard","#electricalsafety","#beforeandafter","#certifiedelec"] },
  { day: 4, pillar: "Tips & Education", hook: "3 signs your hot water system is about to fail.", body: "1. Water takes 60+ seconds to heat. 2. Rusty water from hot taps. 3. Popping or rumbling from the tank. Two of these means book a check.", cta: "Call before it fails on a Friday night.", hashtags: ["#hotwatertips","#plumbingtips","#homeowner","#tips","#plumber"] },
  { day: 5, pillar: "Before & After", hook: "We do not do halfway. Deck went from embarrassing to stunning.", body: "Rotten boards, wobbly rail, faded timber. New hardwood, fresh balusters, sealed and treated.", cta: "Send us your before pics. We love a challenge.", hashtags: ["#decking","#carpentry","#beforeandafter","#tradie","#buildersofaustralia"] },
  { day: 6, pillar: "Behind the Scenes", hook: "6am. Van loaded. First job by 7.", body: "Tools checked, parts stocked, schedule confirmed. We do not turn up surprised -- we turn up prepared.", cta: "Book us and we will be ready for your job the same way.", hashtags: ["#tradelife","#tradie","#earlystart","#behindthescenes","#tradiesofinstagram"] },
  { day: 7, pillar: "Tips & Education", hook: "Never pour cooking oil down the drain.", body: "Grease cools and solidifies in pipes. Over months it builds a blockage that costs hundreds to clear. Use a jar, let it cool, bin it.", cta: "Already have a slow drain? Call us.", hashtags: ["#plumbingtips","#blockeddrains","#homeadvice","#tips","#localplumber"] },
  { day: 8, pillar: "Before & After", hook: "Hot water system gave up Friday night. Family of 5.", body: "Emergency at 7pm. New unit installed, hot water running by 10pm. No one should go without hot water.", cta: "Hot water emergency? Call us any time.", hashtags: ["#hotwater","#emergencyplumbing","#plumber","#instanthotwater","#tradiesofinstagram"] },
  { day: 9, pillar: "Customer Stories", hook: "Client called at 8pm. Flooded bathroom.", body: "Cracked flexible hose behind the toilet. Replaced in 25 minutes. Best decision they made that day.", cta: "Emergency plumbing, any time. Save our number.", hashtags: ["#customerstory","#plumbing","#emergency","#happyclient","#plumber"] },
  { day: 10, pillar: "Before & After", hook: "Garage floor: before (oil stains) vs after (sealed).", body: "Pressure-washed, acid etched, two coats of epoxy. Showroom-ready now.", cta: "Epoxy floor quotes this week -- reply YES.", hashtags: ["#garagefloor","#epoxyflooring","#beforeandafter","#tradelife","#tradie"] },
  { day: 11, pillar: "Tips & Education", hook: "How to reset a tripped safety switch in 30 seconds.", body: "Unplug devices on the circuit. Find your switchboard. Flip the switch OFF then ON. Still tripping? Fault in a device -- test them one by one.", cta: "Persistent trips mean something is wrong.", hashtags: ["#electricaltips","#safetyswitch","#homeowner","#tips","#electrician"] },
  { day: 12, pillar: "Before & After", hook: "Blocked drain was making the whole house smell. Not anymore.", body: "Camera inspection found the problem 12 metres in. Hydro-jet sorted it in 45 minutes.", cta: "Slow drains? Book a camera inspection.", hashtags: ["#blockeddrain","#draincleaning","#beforeandafter","#plumbing","#localplumber"] },
  { day: 13, pillar: "Behind the Scenes", hook: "What is actually in a tradies toolbox.", body: "The right tool makes a 3-hour job a 45-minute job. We invest in gear so jobs are done properly and quickly.", cta: "Need a job done right? Book us.", hashtags: ["#tradietools","#tradelife","#behindthescenes","#tools","#tradie"] },
  { day: 14, pillar: "Tips & Education", hook: "The tap washer that prevents a large water bill.", body: "A dripping tap loses 2,000-10,000 litres per year. A washer costs almost nothing and takes 20 minutes to swap.", cta: "Happy to show you how, or we can do it. DM us.", hashtags: ["#plumbingtips","#tapwasher","#waterbill","#tips","#plumber"] },
  { day: 15, pillar: "Before & After", hook: "Heritage home exterior was peeling and sad. We sorted it.", body: "Full prep, prime, two topcoats in period-correct colours. The neighbours stopped to say thanks.", cta: "Heritage work? We know what we are doing.", hashtags: ["#heritagehome","#painting","#exteriorpainting","#beforeandafter","#painter"] },
  { day: 16, pillar: "Customer Stories", hook: "Client had three quotes before us. Ours was the middle price.", body: "The others could not explain what they were going to do or why. We walked him through the whole job first.", cta: "We explain every job before we start. Get a quote.", hashtags: ["#customerstory","#transparency","#quote","#happyclient","#tradie"] },
  { day: 17, pillar: "Before & After", hook: "Leaking roof that stained the ceiling. Now bone dry.", body: "Cracked mortar at the ridge cap. New mortar, resealed flashing, repainted affected ceiling.", cta: "Rain season coming. Do not wait for a wet ceiling.", hashtags: ["#roofing","#roofrepair","#leakingroof","#beforeandafter","#roofer"] },
  { day: 18, pillar: "Tips & Education", hook: "4 electrical things buyers check before making an offer.", body: "1. Switchboard age. 2. Safety switches on all circuits. 3. Power points per room. 4. Hot water tariff. Buyers and inspectors look at all of these.", cta: "Selling soon? Get an electrical pre-sale check.", hashtags: ["#electricaltips","#realestate","#homesale","#tips","#electrician"] },
  { day: 19, pillar: "Before & After", hook: "Old laundry, new laundry. Same room -- completely different vibe.", body: "New trough, taps, replaced rotting floor, added overhead cabinet.", cta: "Laundry reno quote -- message us your floor plan.", hashtags: ["#laundry","#renovations","#plumber","#beforeandafter","#homeimprovement"] },
  { day: 20, pillar: "Behind the Scenes", hook: "Team lunch. This is the crew that shows up for your jobs.", body: "Small team -- you get one of these four every time. Consistency, not a random sub-contractor each visit.", cta: "Small team, big results. Book us.", hashtags: ["#tradielife","#team","#behindthescenes","#smallbusiness","#tradie"] },
  { day: 21, pillar: "Tips & Education", hook: "How to tell if your roof is leaking before the ceiling stains.", body: "Go into the roof space on a clear day. Look for water stains on sarking, daylight coming through, or wet insulation. Catching it early saves thousands.", cta: "Roof inspection -- under 30 mins for most homes.", hashtags: ["#roofingtips","#roofmaintenance","#homeowner","#tips","#builder"] },
  { day: 22, pillar: "Before & After", hook: "Pool pump dead. Family summer saved.", body: "Seized motor, cracked housing, electrical fault. New pump and switch. Pool running perfectly.", cta: "Pool equipment check before summer. Book in.", hashtags: ["#poolpump","#poolelectrical","#beforeandafter","#summerpool","#electrician"] },
  { day: 23, pillar: "Customer Stories", hook: "Family had been living without a working kitchen since they moved in.", body: "Previous owner DIY fit-out never properly connected. Fixed in a day. First proper water pressure in 18 months.", cta: "Inherited a problem? We sort those. DM us.", hashtags: ["#customerstory","#kitchen","#plumbing","#happyclient","#renovation"] },
  { day: 24, pillar: "Before & After", hook: "Grease trap had not been cleaned since nobody knows.", body: "Commercial kitchen grade trap cleaned, descaled, running clear. Chef said they could smell the difference.", cta: "Commercial kitchen? Regular cleaning is your legal requirement.", hashtags: ["#greasetrap","#commercialplumbing","#beforeandafter","#tradework","#plumber"] },
  { day: 25, pillar: "Tips & Education", hook: "What your tradie should always do that many do not.", body: "Clean up completely. Show you what was done and why. Give a written quote before starting. Provide compliance cert for notifiable work.", cta: "This is how we operate. Every job.", hashtags: ["#tradie","#tradietips","#homeowner","#tips","#tradiesofinstagram"] },
  { day: 26, pillar: "Before & After", hook: "Fence was one storm away from falling on the neighbours dog.", body: "Leaning posts, rust, two broken panels. All replaced with Colorbond, properly concreted posts.", cta: "Fence check before the next storm -- we can fit you in this week.", hashtags: ["#fencing","#colorbond","#fencebuilder","#beforeandafter","#buildersofinstagram"] },
  { day: 27, pillar: "Behind the Scenes", hook: "Thursday afternoon admin. The part nobody talks about.", body: "Quotes, invoices, job photos, material orders, scheduling. Half the tools, half the laptop.", cta: "We are on top of the admin. Which means on top of YOUR job.", hashtags: ["#smallbusiness","#tradelife","#behindthescenes","#tradiebusiness","#tradie"] },
  { day: 28, pillar: "Tips & Education", hook: "Safety switch -- here is what it does and why it matters.", body: "It monitors current in and out. If imbalance exceeds 30 milliamps -- fatal shock threshold -- it cuts power in 10ms. That is what saves lives.", cta: "Missing safety switches on circuits? That is a risk. Call us.", hashtags: ["#electricalsafety","#safetyswitch","#electricaltips","#tips","#electrician"] },
  { day: 29, pillar: "Before & After", hook: "House went from dark and tired to light and modern.", body: "Replaced all downlights with dimmable LEDs, added feature pendants to kitchen and dining.", cta: "LED upgrade quote? Comment YES.", hashtags: ["#lighting","#ledlighting","#electrician","#beforeandafter","#homestyle"] },
  { day: 30, pillar: "Customer Stories", hook: "Review: Best tradie experience we have had in 15 years.", body: "On time, clean, explained what we found, fixed it properly, fair price, followed up the next day.", cta: "This is the service we deliver every time. Book us in.", hashtags: ["#review","#customerstory","#5stars","#happyclient","#tradie"] },
  { day: 31, pillar: "Before & After", hook: "New concrete driveway. The old one was a pothole obstacle course.", body: "Broke out cracked asphalt, graded and compacted base, poured reinforced concrete. Edged and finished properly.", cta: "Driveway quote in 48 hours. Message your suburb.", hashtags: ["#concrete","#driveway","#concretework","#beforeandafter","#concreter"] },
  { day: 32, pillar: "Tips & Education", hook: "The 5-minute drainage check every homeowner should do after rain.", body: "Walk your boundary and watch where water pools. Check downpipes are clear. Look for water tracking toward the house. Soft ground against the foundation is a warning sign.", cta: "Drainage issue? We assess and quote a fix. DM us.", hashtags: ["#drainage","#homeowner","#plumbingtips","#tips","#builder"] },
  { day: 33, pillar: "Before & After", hook: "Ensuite that made guests wince. Now guests are jealous.", body: "Retiled floor and feature wall, new vanity, replaced ceiling exhaust. Six days of work, result that lasts 20 years.", cta: "Ensuite reno consultation -- free, no obligation. DM us.", hashtags: ["#ensuite","#tilingwork","#bathroomrenovation","#beforeandafter","#tilersofinstagram"] },
  { day: 34, pillar: "Behind the Scenes", hook: "New truck day. We are expanding.", body: "Second vehicle on the road from next month. More capacity, faster response, same quality.", cta: "More availability coming soon. Lock in your job now.", hashtags: ["#tradelife","#businessgrowth","#behindthescenes","#newvan","#tradie"] },
  { day: 35, pillar: "Tips & Education", hook: "Why your power bill jumped and what it usually means.", body: "Four main causes: hot water element wearing out, ageing air conditioner, leaking pool pump running constantly, or a faulty appliance not shutting off.", cta: "Energy audit or appliance fault check -- we can help. Call us.", hashtags: ["#powerbill","#electricaltips","#homeowner","#tips","#electrician"] },
  { day: 36, pillar: "Before & After", hook: "Air con was working harder than a tradie in January. Time to upgrade.", body: "Old unit was a 15-year-old energy guzzler drawing twice the power it should. New inverter split system -- 40% cheaper to run.", cta: "AC health check or replacement quote -- book before summer.", hashtags: ["#aircon","#airconditioning","#electrician","#beforeandafter","#hvac"] },
  { day: 37, pillar: "Customer Stories", hook: "Elderly client, pension budget. We found a way to make it work.", body: "Hot water system needed replacing. We found a quality unit at a better price point and did the job in one visit.", cta: "We work with all budgets where we can. Call and talk to us first.", hashtags: ["#community","#customerstory","#tradie","#happyclient","#tradiesofaustralia"] },
  { day: 38, pillar: "Before & After", hook: "Alfresco: before (neglected slab) vs after (entertainers dream).", body: "Levelled the slab, built the pergola frame, ran power for lighting and ceiling fan.", cta: "Alfresco project? Let us price it up. Message us photos.", hashtags: ["#alfresco","#pergola","#outdoorbuilder","#beforeandafter","#tradiesofinstagram"] },
  { day: 39, pillar: "Tips & Education", hook: "How long things actually last -- the honest tradesman version.", body: "Hot water system: 8-12 years. Roof: 20-50 years depending on material. Tap washers: 5-10 years. Timber deck without maintenance: 5 years. With annual oil: 15-20 years.", cta: "Things due for a check or replacement? We can assess. Book in.", hashtags: ["#homeowner","#maintenance","#tradietips","#tips","#tradie"] },
  { day: 40, pillar: "Before & After", hook: "Water pressure was a trickle. Now it is a proper shower again.", body: "Corroded pressure regulator plus a blockage in the main line. Regulator replaced, line flushed. Pressure restored.", cta: "Low water pressure? Usually an easy fix. Call us.", hashtags: ["#waterpressure","#plumbing","#showerfix","#beforeandafter","#plumber"] },
  { day: 41, pillar: "Behind the Scenes", hook: "Training day. Keeping up with the newest systems.", body: "New gas appliance ranges, updated compliance requirements, advanced diagnostic tools. One day a month on training.", cta: "You want a tradie who keeps up with their trade. That is us.", hashtags: ["#training","#tradelife","#behindthescenes","#continuous","#tradie"] },
  { day: 42, pillar: "Tips & Education", hook: "The right way to maintain timber decking so it lasts 20 years.", body: "Sand the surface every 2-3 years. Re-oil while timber is dry. Use a penetrating oil, not a surface coating. Do not let leaves sit on it wet.", cta: "Deck needing work? We resand, repair, and refinish. Quote anytime.", hashtags: ["#deckmaintenance","#carpentry","#timber","#tips","#tradiesofinstagram"] },
  { day: 43, pillar: "Before & After", hook: "Subfloor repair -- boring to look at, critical to live on.", body: "Timber bearers were termite-damaged. You would not know from above but the floor would have started moving. Caught it, fixed it.", cta: "Subfloor inspection -- especially in older homes. Book us.", hashtags: ["#subfloor","#timberflooring","#carpentry","#beforeandafter","#builder"] },
  { day: 44, pillar: "Customer Stories", hook: "Property manager: tenant had no hot water on a Friday afternoon.", body: "New unit installed by 6pm. Tenant had hot water for the weekend. Property manager said we are the only plumber they call now.", cta: "Property managers -- we make you look good. Save our number.", hashtags: ["#propertymanager","#customerstory","#hotwater","#happyclient","#plumber"] },
  { day: 45, pillar: "Before & After", hook: "Commercial bathroom: unusable vs back in business.", body: "Full commercial washroom fit-out after the previous plumber left mid-job. Compliance cert issued, business open Monday.", cta: "Commercial project? We finish what others start. Call us.", hashtags: ["#commercialplumbing","#fitout","#tradework","#beforeandafter","#plumber"] },
  { day: 46, pillar: "Tips & Education", hook: "What happens if you ignore a cracked tile in the shower.", body: "Water gets behind the tile. It soaks the waterproofing membrane. When the membrane fails, more tiles crack. One tile fixed early: small cost. Full rip-out: large cost.", cta: "Cracked grout or tile in your shower? Get it looked at now. Call us.", hashtags: ["#tiling","#showerrepair","#homeowner","#tips","#tiler"] },
  { day: 47, pillar: "Before & After", hook: "Retaining wall about to take the garden with it.", body: "Bowed timbers, undermined footings. New block retaining wall, engineered drainage behind it.", cta: "Worried about your retaining wall? We will come and look. Free.", hashtags: ["#retainingwall","#blockwork","#masonry","#beforeandafter","#builder"] },
  { day: 48, pillar: "Behind the Scenes", hook: "What we check before we close a job.", body: "Photos of the completed work. Test run of every fixture or fitting. Cleanup -- we leave your place the way we found it.", cta: "This is our standard. Every job. Call to book.", hashtags: ["#quality","#tradelife","#behindthescenes","#standards","#tradiesofinstagram"] },
  { day: 49, pillar: "Tips & Education", hook: "3 things to do right now if you smell gas.", body: "1. Do NOT turn any switch or light on or off. 2. Open all windows and doors immediately. 3. Leave the building, shut the meter off, call the gas emergency line.", cta: "Gas leak or gas work of any kind -- we are licensed. Call us.", hashtags: ["#gassafety","#gasplumber","#homeowner","#safety","#emergencyplumbing"] },
  { day: 50, pillar: "Before & After", hook: "Kitchen reno -- 9 days start to finish.", body: "New layout, moved the gas, relocated power points, waterproofed under the sink properly. The way it should have been done 20 years ago.", cta: "Kitchen reno quote -- supply your measurements in the DM.", hashtags: ["#kitchenrenovation","#plumber","#electrician","#beforeandafter","#renovation"] },
  { day: 51, pillar: "Customer Stories", hook: "Client feedback: Showed up when they said they would. Did not know that was possible.", body: "Punctuality is non-negotiable for us. If we are running late by more than 15 minutes, we call ahead. Always.", cta: "On time. Every time. See for yourself. Book us.", hashtags: ["#punctual","#customerstory","#tradie","#happyclient","#tradiesofinstagram"] },
  { day: 52, pillar: "Before & After", hook: "Brick repointing: ugly vs the way it should look.", body: "Crumbling mortar in a 1960s brick wall lets in moisture. Raked out and repointed two full sections.", cta: "Brick wall concerns? Repointing is cheaper than you think. DM us.", hashtags: ["#brickwork","#repointing","#masonry","#beforeandafter","#builder"] },
  { day: 53, pillar: "Tips & Education", hook: "Why good tradies cost more and why it is worth it.", body: "You are paying for: full insurance coverage, licensed workers, quality materials, a workmanship warranty, and someone who will come back if something is not right.", cta: "We stand behind every job. If something is not right, we fix it free.", hashtags: ["#tradie","#quality","#tradietips","#tips","#tradiesofaustralia"] },
  { day: 54, pillar: "Before & After", hook: "Switchboard failed an inspection. Safe to use in 4 hours.", body: "Failed safety switch, double-adapted circuits, not earthed correctly. Full upgrade done within a business day. Certificate of compliance provided.", cta: "Selling your home? Get your electrical sorted first. Call us.", hashtags: ["#electrician","#switchboard","#electricalsafety","#beforeandafter","#certifiedelec"] },
  { day: 55, pillar: "Behind the Scenes", hook: "Saturday morning emergency callout while the suburb sleeps.", body: "A blocked sewer does not wait for business hours. We were on-site at 6:30am. Job done before 9. Client had brunch with family as planned.", cta: "After-hours and weekend callouts. Save our number.", hashtags: ["#emergencyplumbing","#afterhours","#tradelife","#behindthescenes","#plumber"] },
  { day: 56, pillar: "Tips & Education", hook: "Summer checklist: 5 things to check before the heat hits.", body: "1. Air conditioner filters cleaned and unit serviced. 2. Hot water system pressure valve tested. 3. Pool pump and filter checked. 4. Garden irrigation pressure correct. 5. Outdoor power points tested.", cta: "Summer prep service -- book now before the queues fill up.", hashtags: ["#summerchecklist","#homeowner","#tradietips","#tips","#tradie"] },
  { day: 57, pillar: "Before & After", hook: "Spa was not sparking joy. It is now.", body: "Cracked shell repaired, pump replaced, new LED lighting, jets reconditioned. Cost a fraction of a new spa.", cta: "Spa or pool repair -- send us photos and we will quote same day.", hashtags: ["#sparepair","#poolbuilder","#electrician","#beforeandafter","#tradie"] },
  { day: 58, pillar: "Customer Stories", hook: "First home buyer asked for a pre-purchase inspection. Saved them big.", body: "Found switchboard needing full upgrade, corroding main line, soft subfloor timbers. They renegotiated the price.", cta: "Buying a home? Get a pre-purchase inspection. Call us.", hashtags: ["#prepurchase","#customerstory","#homebuyer","#happyclient","#tradie"] },
  { day: 59, pillar: "Before & After", hook: "Commercial cool room that was anything but cool.", body: "Refrigerant leak, compressor running hot, door seal failing. Sorted in one visit. Back operational the same afternoon.", cta: "Commercial refrigeration fault? We are on call. Save our number.", hashtags: ["#refrigeration","#commercialrefrig","#tradework","#beforeandafter","#electrician"] },
  { day: 60, pillar: "Tips & Education", hook: "The real reason pipes burst in cold snaps.", body: "Water expands about 9 percent when it freezes. Old or undersized pipes cannot absorb that pressure. Pipes in uninsulated roof spaces are highest risk.", cta: "Burst or leaking pipe? Emergency callout, any time. Save our number.", hashtags: ["#plumbingtips","#winterplumbing","#pipes","#tips","#plumber"] },
  { day: 61, pillar: "Before & After", hook: "Skylight was a rain collection device. Now it keeps rain out.", body: "Failed flashing, no secondary seal, staining on three ceilings. Resealed and waterproofed properly.", cta: "Skylight or roof leak? Do not ignore it. Call before it gets worse.", hashtags: ["#skylight","#roofing","#waterproofing","#beforeandafter","#roofer"] },
  { day: 62, pillar: "Behind the Scenes", hook: "When the scope changes mid-job -- here is how we handle it.", body: "Found extra work once the wall was open. Stopped. Photographed. Called the client, explained, gave them a revised quote on the spot. No surprises on the invoice.", cta: "Transparent trades work. That is how we do it. Book us.", hashtags: ["#tradie","#transparency","#behindthescenes","#honesty","#smallbusiness"] },
  { day: 63, pillar: "Tips & Education", hook: "What up to code actually means and why it matters when you sell.", body: "Work done in the 1980s may be legal to keep but cannot be added to without upgrading to current code. Buyers and their lawyers know this.", cta: "Pre-sale electrical or plumbing check? We do those. Call us.", hashtags: ["#buildingcode","#realestate","#homeowner","#tips","#tradie"] },
  { day: 64, pillar: "Before & After", hook: "Bathroom fan was pushing moisture INTO the roof. Fixed.", body: "Flex duct had come loose at the connection -- condensation was going straight into the ceiling cavity. Reconnected, insulated, mould treated.", cta: "Bathroom condensation issues? Let us check your exhaust routing. Book in.", hashtags: ["#bathroomfan","#ventilation","#plumbing","#beforeandafter","#builder"] },
  { day: 65, pillar: "Customer Stories", hook: "Turned a one-off job into a full-year maintenance contract.", body: "Came in to fix a burst pipe. Did a full walkthrough. Found six other things. Now on a yearly maintenance plan. Better for them, reliable for us.", cta: "Maintenance contract -- peace of mind, no surprises. Ask us about it.", hashtags: ["#maintenance","#customerstory","#tradie","#happyclient","#plumber"] },
  { day: 66, pillar: "Before & After", hook: "Carport vs covered outdoor entertaining area. Same footprint.", body: "Extended the existing carport slab, built a frame, added a corrugated roof, guttering and a downpipe to tank.", cta: "Carport extension or alfresco? Quote this week. DM your address.", hashtags: ["#carport","#outdoorliving","#builder","#beforeandafter","#renovation"] },
  { day: 67, pillar: "Local Community", hook: "Proud to sponsor the under-10s this season.", body: "Supporting local sport is important to us. These kids work hard every Saturday morning. Good luck this season.", cta: "Support local when you can -- including your local tradie.", hashtags: ["#localcommunity","#localsport","#community","#sponsor","#tradie"] },
  { day: 68, pillar: "Before & After", hook: "Main water line was a ticking time bomb. Replaced before it blew.", body: "Poly pipe from 1985, already showing stress cracks in three places. Replaced the full main with quality copper. No emergency this summer.", cta: "Older home? Your main line deserves a check-up. Call us.", hashtags: ["#waterpipe","#plumbing","#repiping","#beforeandafter","#plumber"] },
  { day: 69, pillar: "Behind the Scenes", hook: "End of year wrap: jobs completed this year.", body: "Over 400 jobs. Zero comebacks we did not fix immediately. 47 five-star reviews. One team. Proud of this year.", cta: "Get in early for the new year. Demand is strong.", hashtags: ["#yearinreview","#tradelife","#behindthescenes","#smallbusiness","#tradie"] },
  { day: 70, pillar: "Local Community", hook: "Big week for our suburb. New community hall opens tomorrow.", body: "We helped with some of the electrical work behind the scenes. Proud to have contributed to something this community will use for decades.", cta: "We work in this area. Call for a quote anytime.", hashtags: ["#localcommunity","#community","#electrician","#suburb","#localbusiness"] },
  { day: 71, pillar: "Before & After", hook: "Home office extension: before (empty corner) vs after (dream workspace).", body: "10sqm addition, double power circuits, data points, split system, built-in joinery. Client works from home 5 days a week now.", cta: "Home office extension? Great time to do it. Get a quote.", hashtags: ["#homeoffice","#extension","#builder","#beforeandafter","#renovation"] },
  { day: 72, pillar: "Customer Stories", hook: "Builder called us to rescue a project another sub had walked off.", body: "Half-finished rough-in, wrong pipe sizing, compliance issues. We fixed the existing work and got the frame inspection passed.", cta: "Builders -- we are available for commercial and residential sub-contract. Call.", hashtags: ["#builder","#customerstory","#subcontract","#happyclient","#tradie"] },
  { day: 73, pillar: "Before & After", hook: "Ceiling collapse risk. Avoided. Another day at the office.", body: "Cornices separating, ceiling rose cracking -- the old plasterwork was letting go. Re-secured, patched and plastered. Crisis averted quietly.", cta: "Cracking or sagging ceiling? Do not wait. We can look this week.", hashtags: ["#plasterwork","#plastering","#homerepair","#beforeandafter","#builder"] },
  { day: 74, pillar: "Local Community", hook: "Flood clean-up in our suburb last week. Here is what we did.", body: "When neighbours are in trouble, you show up. Our crew donated a day to help three households clear up after flash flooding. Plumbing inspections done free.", cta: "If your property flooded, call us. We will help where we can.", hashtags: ["#floodcleanup","#community","#localcommunity","#plumber","#tradiesofaustralia"] },
  { day: 75, pillar: "Before & After", hook: "Outdated laundry to functional mudroom. Same space, new life.", body: "Moved the trough, added bench and hooks, tiled the floor, ran a power point for the fridge. Mudroom to laundry workflow now takes 30 seconds.", cta: "Laundry or mudroom reno? Send us the room size. We will quote it.", hashtags: ["#laundry","#mudroom","#renovation","#beforeandafter","#plumber"] },
  { day: 76, pillar: "Behind the Scenes", hook: "How we price a job: the honest version.", body: "Materials at cost plus a margin. Labour at our hourly rate. Travel if you are over 30 minutes. No mystery line items. We can walk you through any invoice.", cta: "No surprises on price. That is a promise. Book a quote.", hashtags: ["#pricing","#transparency","#tradelife","#behindthescenes","#tradie"] },
  { day: 77, pillar: "Personality", hook: "Hot take: the best jobs are the ones nobody calls glamorous.", body: "Blocked drains. Rusty pipes. Electrical faults at 6am. This is real work that makes real difference to peoples days. Would not swap it for a desk job.", cta: "Pride in the trade. Book someone who means it.", hashtags: ["#tradie","#pride","#tradelife","#personality","#tradiesofinstagram"] },
  { day: 78, pillar: "Before & After", hook: "Gas heater was putting CO into the living room. Not any more.", body: "Cracked heat exchanger -- a silent and serious risk. New unit installed, flued correctly, CO detector fitted. Safe heat this winter.", cta: "Gas heater service before winter. Book now before the rush.", hashtags: ["#gasheater","#heating","#gasplumber","#beforeandafter","#tradelife"] },
  { day: 79, pillar: "Customer Stories", hook: "Review: Quoted the job honestly and did not add extras at the end.", body: "Our invoice matched our quote. It always does unless scope genuinely changes -- and we call before that happens. Trust is built job by job.", cta: "Honest quotes, honest invoices. That is the deal. Book us.", hashtags: ["#review","#customerstory","#transparency","#happyclient","#tradie"] },
  { day: 80, pillar: "Before & After", hook: "30-year-old gutters. The upgrade was overdue.", body: "Rusting, overflowing, pulling away from the fascia. Full replacement with quad gutters and proper downpipes run to a water tank.", cta: "Gutter check or replacement quote -- reply with your suburb.", hashtags: ["#gutters","#roofplumbing","#gutterreplacement","#beforeandafter","#plumber"] },
  { day: 81, pillar: "Local Community", hook: "Local hardware store has been there 40 years. Still our first call.", body: "We could order everything online cheaper. But they know their stock and give the right advice. Supporting local makes the whole suburb stronger.", cta: "Shop local. Hire local. Build local.", hashtags: ["#localbusiness","#community","#tradielife","#supportlocal","#tradie"] },
  { day: 82, pillar: "Personality", hook: "My dad was a plumber. His dad was a plumber. I am a plumber.", body: "The trade is in the blood. He showed me that doing a job properly is not just professional -- it is personal. That is still how I approach every callout.", cta: "Third generation tradesperson. Book us.", hashtags: ["#tradie","#family","#personality","#tradelife","#plumber"] },
  { day: 83, pillar: "Behind the Scenes", hook: "This is what 10 years of trade work in this suburb looks like.", body: "Hundreds of homes. Repeat clients. Referrals that keep us busy without advertising. We built this business one honest job at a time.", cta: "Thank you for 10 years. Still here, still working hard.", hashtags: ["#10years","#smallbusiness","#behindthescenes","#community","#tradie"] },
  { day: 84, pillar: "Personality", hook: "Do you ever turn jobs down? Yes.", body: "If a client wants a shortcut that would be unsafe or non-compliant, I say no and explain why. My name is on every job. That matters more than a single invoice.", cta: "We do the job right or we do not do it. Simple.", hashtags: ["#tradie","#standards","#personality","#quality","#tradiesofinstagram"] },
  { day: 85, pillar: "Local Community", hook: "School fundraiser -- we donated a full-day labour voucher.", body: "A family used it for an emergency hot water replacement. The relief on that parent face was the best part of our week. Community is everything.", cta: "We give back where we can. Book us for your next job and support local.", hashtags: ["#schoolfundraiser","#community","#localcommunity","#tradie","#tradiesofaustralia"] },
  { day: 86, pillar: "Customer Stories", hook: "10-year client just sent us their daughter new home. Third generation.", body: "We have done work for the grandparents, the parents, and now the kids. That kind of loyalty means everything. We earn it by doing the job right every single time.", cta: "We look after our clients for the long term. Call us for your next job.", hashtags: ["#loyalty","#customerstory","#community","#happyclient","#tradiesofaustralia"] },
  { day: 87, pillar: "Personality", hook: "Saturday morning and I am thinking about drains again.", body: "Occupational hazard. You spend long enough in the trade and you look at every house wondering about its plumbing. It is a gift. Mostly.", cta: "At least one of us is thinking about your pipes. Book us.", hashtags: ["#tradie","#humor","#personality","#tradelife","#plumber"] },
  { day: 88, pillar: "Local Community", hook: "10 years operating out of this suburb.", body: "This suburb built our business. Every referral, every repeat client, every review. We are staying local, staying committed to the trade. Thank you.", cta: "Decade in, still going strong. Book us for your next job.", hashtags: ["#localcommunity","#10years","#smallbusiness","#tradie","#suburb"] },
  { day: 89, pillar: "Personality", hook: "Why I still love this job after 15 years.", body: "You solve a real problem, the client face changes, and you drive away knowing their day is better. That is not complicated. But it matters every single time.", cta: "Book the tradie who still cares after 15 years.", hashtags: ["#tradie","#passion","#personality","#tradelife","#tradiesofaustralia"] },
  { day: 90, pillar: "Personality", hook: "Day 90. Thanks for following along. This is just us, doing the work.", body: "If anything from the last 90 days was useful -- the tips, the transformations, the stories -- that is why we share. We are just a trade business trying to do things properly.", cta: "We are here when you need us. Save our number. See you in the next 90.", hashtags: ["#tradie","#90days","#personality","#community","#tradiesofinstagram"] },
];

const facebookPosts: FBPost[] = [
  { week: 1, title: "What your hot water system is trying to tell you", body: "Most hot water system failures give you weeks of warning before they fail completely. The problem is most homeowners do not know what to look for.\n\nSigns we see most often before a system gives out:\n\n1. Hot water takes noticeably longer to reach the tap than it used to\n2. You are running out of hot water more quickly, even with normal usage\n3. Popping or rumbling sounds from the tank -- that is sediment buildup on the element\n4. The pressure relief valve on the side of the unit is dripping\n5. Rust-coloured water from the hot tap\n\nAny one of these is worth a phone call. Two or more and it is time to book a service inspection before it fails on a Friday evening.\n\nWe service all brands. Give us a call." },
  { week: 2, title: "The honest guide to getting a good tradie quote", body: "Getting three quotes is common advice. But a lot of homeowners do not know how to compare them properly. Price is not everything.\n\nWhat to look for when you get a quote:\n\n1. Is the scope written down? A quote that just says fix bathroom tap for a price is useless if a dispute arises. You want exactly what will be done, what materials are included, what is excluded.\n2. Are they licensed and insured? Ask for their licence number. No licence means no insurance.\n3. Do they explain the why? A good tradie should be able to tell you why they are recommending what they are recommending.\n4. Does the price include GST? Make sure you are comparing apples to apples.\n5. Is there a warranty on workmanship? We offer 12 months on all our work.\n\nThe cheapest quote is often not the best value. The best value is the one who does the job right the first time and stands behind it." },
  { week: 3, title: "Why winter is actually the best time to book trade work", body: "Everyone rushes to book tradies in spring and summer. But here is the honest truth: winter is when we have the most availability.\n\nThat means:\n- Faster booking times (often same week vs 3-4 weeks in peak season)\n- More flexibility on scheduling to suit your day\n- No summer rush pricing\n\nAnd winter is also when certain problems are most obvious:\n- Roof leaks show up in the rain\n- Heating systems reveal faults when they are running constantly\n- Cold snaps expose pipe insulation issues\n- Condensation issues become visible in bathrooms and laundries\n\nIf you have been meaning to get something sorted, right now is often the best time -- not just for your schedule, but for ours.\n\nWhat is on your list? Drop us a message." },
  { week: 4, title: "Before you buy that older home: what to check", body: "We do a lot of pre-purchase inspections. Here are the things we find most often in older homes that buyers did not know to ask about.\n\nElectrical:\n- Old switchboards without safety switches (required on all circuits in most states)\n- Aluminium wiring (common in some 1960s-70s homes)\n- Overloaded circuits with too many double adapters\n\nPlumbing:\n- Lead water pipes (any home pre-1970 may have them)\n- Galvanised steel pipes that have corroded inside\n- Non-compliant hot water system installations\n- Cracked or root-invaded sewer lines\n\nStructural:\n- Subfloor moisture or termite activity\n- Roof timbers showing stress or moisture damage\n\nNone of these are deal-breakers on their own -- but they affect negotiation and budget. A pre-purchase inspection runs a few hundred dollars. It can save tens of thousands.\n\nBuying in our area? Call us." },
  { week: 5, title: "Our approach to reviews (we do not have a policy -- and that is the point)", body: "We have never asked a client to leave a review immediately after a job while we are still standing in their kitchen. That always felt off.\n\nOur approach: do the job properly, follow up a few days later to make sure everything is working well, and let reviews come naturally from people who genuinely want to leave one.\n\nAs a result, our reviews tend to say things like: came back to check everything was fine, no nasty surprises on the invoice, explained what they were doing before they started.\n\nThat is what we are going for.\n\nIf you have used us and had a good experience, we would genuinely appreciate a review. And if something was not right -- please call us first. We fix our mistakes." },
  { week: 6, title: "What to do in a plumbing emergency (step by step)", body: "If something goes wrong with your plumbing -- burst pipe, flooding, sewage backup -- here is exactly what to do.\n\nStep 1: Locate your water main and turn it off. In most Australian homes this is at the front of the property near the meter, or under the kitchen sink.\n\nStep 2: If it is a hot water issue, turn off the hot water system as well. Electric: switch off the circuit breaker. Gas: turn off the gas at the meter.\n\nStep 3: Take a photo of the damage before cleaning up. If the problem is covered by home insurance, you will need documentation.\n\nStep 4: Call your plumber. Have your address ready and describe what happened clearly.\n\nStep 5: Do not use any drains until we have been able to assess the situation. Especially if you suspect a sewer blockage.\n\nWe are available for emergencies after hours. Save our number somewhere you can find it in a panic." },
  { week: 7, title: "How we decide whether to repair or replace", body: "One of the most common questions we get is: should I fix this or just replace it?\n\nHonest answer: it depends on three things.\n\n1. Age of the item. If it is past or near its expected life, repair often just delays the inevitable. A hot water system that is 14 years old and needs a significant repair is often better replaced than patched.\n\n2. Cost of repair vs replacement. As a rough guide: if repair costs more than 40 percent of replacement cost, lean toward replacement.\n\n3. Whether parts are still available. Older appliances sometimes have parts that are no longer manufactured or take weeks to source.\n\nWe will always give you both options and our honest recommendation. We are not in the business of replacing things that have plenty of life left.\n\nHave something that needs a decision? Give us a call." },
  { week: 8, title: "Why we stopped hiding our prices", body: "A few years ago we were more cagey about pricing. Depends on the job. We will have to come out and see. All technically true, but not very helpful to someone who just wants a rough idea.\n\nWe changed that.\n\nNow we have a published callout rate, a labour rate, and we give indicative ranges for common jobs. We still need to see most jobs before giving a firm quote -- but at least you know the ballpark.\n\nThe reason we changed: we kept winning jobs from clients who said you are the first tradie who actually told me what it was going to cost before turning up.\n\nTransparency is not just better ethics -- it is better business. We attract clients who value honesty, and those are the clients we most want to work with.\n\nAny questions on pricing before you book? Just ask." },
  { week: 9, title: "The 15-minute home maintenance check you should do every 6 months", body: "This takes about 15 minutes and it catches small problems before they become expensive ones.\n\nElectrical:\n- Press the TEST button on each safety switch in your switchboard. It should trip. Press RESET to restore. If it does not trip, it is faulty.\n- Check outdoor power points for moisture or cracking.\n- Note any lights flickering or circuits that trip regularly.\n\nPlumbing:\n- Run all taps and check the pressure. Low pressure can signal a developing problem.\n- Check under every sink for moisture or drips.\n- Flush all toilets and confirm they fill and stop correctly.\n\nGeneral:\n- Look at your roof from the yard after rain.\n- Check any exposed pipe lagging for cracking or missing sections.\n\nFound something? Even if you are not sure it is a problem, a quick phone call is worth making." },
  { week: 10, title: "What actually goes wrong with electrical safety switches", body: "Safety switches save lives. They cut power in 10 milliseconds when they detect current leaking to earth. But they fail. Here is why.\n\n1. They trip on nuisance faults and get reset so many times that the mechanism wears out. The switch still looks fine but the trip time slows down -- no longer within the safe threshold.\n\n2. Moisture gets into the switch housing over many years, corroding internal contacts.\n\n3. In older installations, the switch is not protecting all the right circuits.\n\nTest yours every 6 months (there is a test button on the switch). If it is over 10 years old, a replacement is worth considering.\n\nNot sure what you have or whether it is working? Call us for a switchboard health check." },
  { week: 11, title: "Running a small trade business: what the first 5 years taught us", body: "We get asked by apprentices and younger tradies about running a business. Here is an honest version of what we have learned.\n\nYear 1: You will undercharge. You know how to do the work but have not figured out your real costs yet.\n\nYear 2-3: The admin catches up to you. Get software and a bookkeeper earlier than feels necessary.\n\nYear 4: Referrals kick in and you realise your reputation is your actual business. Showing up on time, doing what you said, calling when there is a problem -- these turn out to be a competitive advantage.\n\nYear 5: You understand your best clients. Not by revenue -- by how much they trust you and refer you.\n\nWe are still learning. But that is the version we wish someone had told us." },
  { week: 12, title: "Drainage: the unglamorous thing that matters more than anything", body: "Nobody puts drainage on the mood board. But drainage is the single thing that protects your home from the ground up.\n\nWhat bad drainage actually causes:\n- Water against your foundation erodes supporting soil, leading to subsidence and cracking\n- Moisture under a timber floor destroys the subfloor timbers\n- Water behind retaining walls builds up hydrostatic pressure until the wall fails\n- Blocked gutters and downpipes cause roof space moisture and mould\n\nGood drainage requires correct fall on surface water away from the house, clear gutters and downpipes directed away from the foundation, agricultural drains behind retaining structures, and subfloor ventilation.\n\nIf your property has any of these problems, drainage should be part of the conversation.\n\nWe assess and quote drainage works. Call us." },
  { week: 13, title: "Gas safety in the home: what every Australian household should know", body: "Gas is convenient and efficient, but it needs to be respected.\n\nSmell gas? These are the rules:\n- Do NOT operate any electrical switch -- including lights\n- Open windows and doors immediately\n- Leave the building\n- Turn off gas at the meter (outside, usually at the front)\n- Call the gas emergency line or us -- do not go back in until it has been inspected\n\nGas appliance servicing:\n- Gas heaters should be serviced every 2 years -- a cracked heat exchanger can introduce carbon monoxide into your living space\n- Hot water systems every 5 years at minimum\n\nCarbon monoxide is odourless and colourless. A CO detector near sleeping areas is a worthwhile investment if you have gas appliances.\n\nAll gas work in Australia must be done by a licensed gas fitter." },
  { week: 14, title: "What a plumbing inspection covers and when you need one", body: "A plumbing inspection is a systematic assessment of all the plumbing systems in a property.\n\nWhat we look at:\n- All visible pipes: material, condition, age, signs of corrosion or prior leaks\n- Hot water system: age, pressure relief operation, anode condition where accessible\n- All fixtures: taps, toilets, showers, tubs -- flow, drainage, seals\n- Drains: flow rate at all points, signs of partial blockage\n- Roof plumbing: gutters, downpipes, overflows\n- External drainage: surface water direction\n\nWhen to get one:\n- Pre-purchase (the obvious one)\n- Before a major renovation where plumbing will be disturbed\n- If you are experiencing recurring problems\n- If your home is over 30 years old and has never had one\n- After a flood or major water event\n\nWe provide a written report with photos. Book a plumbing inspection." },
  { week: 15, title: "How to prepare your home before a tradie arrives", body: "A bit of preparation before a tradie arrives can make the job faster, cheaper, and less disruptive.\n\nFor plumbing:\n- Clear the area under the sink or around the affected fixture\n- Know where your water main is (we may need to turn it off)\n- If it is a leak, have a towel and bucket ready\n\nFor electrical:\n- Clear access to your switchboard\n- Know which circuits have been tripping or causing problems\n- Have a list of the areas where you have noticed issues\n\nFor any job:\n- Move furniture or items that block access to the work area\n- Secure pets somewhere comfortable -- open doors and tool bags are not safe for curious animals\n- Be available for the first few minutes to walk us through what you have observed\n\nYou do not need to hover. Most tradies work faster when they have space and quiet." },
  { week: 16, title: "The difference between a tradesperson and a contractor -- and why it matters", body: "These terms are often used interchangeably but they mean different things.\n\nA tradesperson is an individual with a trade qualification and licence in a specific skill: plumber, electrician, carpenter. They are qualified to do the work themselves.\n\nA contractor is a business entity that takes on contracts. They may be a sole trader doing the work themselves, or they may engage subcontractors.\n\nWhy does this matter? When you hire a contractor, the person who turns up on the day may be a different business to the one who quoted you. That is not necessarily a problem -- it is normal in construction -- but it is worth asking:\n- Who exactly will be doing the work?\n- Are they licensed for this type of work?\n- Who do I contact if there is a warranty issue?\n\nWith us, the person who quotes is the person who does the work. No sub-contracts without telling you." },
  { week: 17, title: "Renovation order: what goes first (and why getting it wrong is expensive)", body: "One of the most common expensive mistakes in home renovation is doing things in the wrong order.\n\nThe correct sequence for wet areas (bathrooms, kitchens, laundries):\n1. Structural work first: any wall removal, framing, subfloor repairs\n2. Rough-in: plumbing and electrical pipes and cables behind the walls\n3. Waterproofing: applied to substrate before any tiling\n4. Tiling\n5. Fixtures: taps, shower fittings, vanity\n6. Final electrical: power points, lights, exhaust fans\n7. Joinery and finishing\n\nWhere it goes wrong: tiles go in before waterproofing is properly cured, electrical rough-in happens after walls are closed, fixtures are purchased before rough-in measurements are confirmed.\n\nA good tradie or builder will give you a sequence. Stick to it, even when it feels slow.\n\nPlanning a reno? We can advise on the plumbing and electrical sequencing before you start. That conversation is free." },
  { week: 18, title: "Understanding your water meter and what it can tell you", body: "Your water meter is one of the most underrated diagnostic tools in your home.\n\nHow to read it: Most Australian meters show cubic metres. Read the black numbers; the red digits are fractions of a cubic metre.\n\nHow to check for a leak: Write down the reading, do not use any water for 30 minutes, read it again. If the number has changed, water is moving somewhere it should not be.\n\nWhat to look for in your usage:\n- Average Australian household uses 150-250 litres per person per day\n- If your bill has jumped significantly without obvious cause, check for a toilet running constantly (put food dye in the tank -- if colour appears in the bowl without flushing, it is leaking)\n- A continuously dripping tap wastes up to 9,000 litres a year\n\nIf you suspect a leak but cannot find it, we have pressure testing and acoustic leak detection equipment. Call us." },
  { week: 19, title: "What we have changed about how we do business in the last 3 years", body: "Three years ago we made some deliberate decisions about how we run this business. Here is what changed and why.\n\nWe stopped taking every job. We specialise now. When someone calls for work outside our core skills, we refer them to someone better placed.\n\nWe got serious about response time. A missed call and a same-day callback became a hard rule.\n\nWe started sending job confirmations with a photo of who is coming. Clients should not open the door to a stranger.\n\nWe began following up every job at 48 hours. Just a quick message: everything working well? More than anything else, this has generated our reviews and repeat clients.\n\nWe raised our prices to reflect quality. Underpricing leads to rushing, which leads to mistakes.\n\nNone of this is revolutionary. But being consistent about it matters." },
  { week: 20, title: "Preparing your home for sale: the tradie checklist", body: "If you are planning to sell in the next 12 months, here is the trade work that makes the biggest difference to buyer perception and price.\n\nHigh impact, relatively low cost:\n- Fix all dripping taps (buyers notice and think deferred maintenance)\n- Replace cracked or missing power point and light switch covers\n- Test and replace any non-functioning lights\n- Fix any sticking or non-latching doors\n\nMedium impact, worth doing:\n- Freshen bathroom caulking if it is discoloured or peeling\n- Replace any cracked tiles in wet areas\n- Clean or replace exhaust fans in bathrooms\n\nGet a quote for these before listing:\n- Hot water system if it is over 10 years old\n- Electrical switchboard if it does not have safety switches\n- Any roof concerns or gutters pulling away\n\nThe rule of thumb: fix anything a buyer inspector will find, before they find it.\n\nWe offer pre-sale property checks. Call before you list." },
  { week: 21, title: "Frequently asked questions: what you actually want to know", body: "Here are the questions we get most often, with honest answers.\n\nDo you charge for quotes? For straightforward jobs, no. For large or complex jobs, we may charge a site inspection fee which is credited toward the job if you proceed.\n\nHow do I know if your quote is fair? Ask two or three tradies. Compare scope as much as price. A quote that is 30 percent lower usually means something is being excluded.\n\nDo you guarantee your work? Yes. 12 months on workmanship, manufacturer warranty on parts. If something we installed fails due to workmanship, we come back and fix it at no charge.\n\nWhat happens if you find additional problems during the job? We stop, photograph, call you, explain, and give you a revised quote before proceeding. You decide.\n\nCan I supply my own materials? Yes, but we cannot warranty them if they fail.\n\nAny other questions? Message us." },
  { week: 22, title: "What happens after a flood: plumbing and electrical", body: "If your home has been flooded, here is what needs to happen on the plumbing and electrical side before you move back in.\n\nElectrical -- critical:\n- Do NOT turn power back on until an electrician has inspected the switchboard, all circuits, and all fixtures that were submerged. Water and electricity is a fatal combination.\n- Every power point and light fitting that was flooded needs to be inspected, tested, and usually replaced.\n- Switchboards that have been submerged need full replacement.\n\nPlumbing:\n- All drains should be flushed and inspected.\n- Any flexible hoses under sinks or to toilets that were submerged should be replaced.\n- Check your hot water system -- sediment, electrical components, and pressure relief valves all need assessment after flooding.\n\nGeneral:\n- Document everything with photos before cleaning up -- insurance claims require it.\n\nWe do flood recovery work. Call us." },
  { week: 23, title: "Why we are still a small team (and plan to stay that way)", body: "We get asked sometimes if we are going to expand and take on more staff. Honest answer: carefully, and only in ways that do not compromise what people hire us for.\n\nHere is the problem with rapid growth in trade businesses: quality control does not scale easily. The reason our reviews say what they say is because the same core people do every job, and they know what our standard is.\n\nWhen you add a new person every few months to chase growth, you either get quality slipping before the new person is fully trained, or the business owner spending all their time supervising instead of doing the work.\n\nWe are taking a different approach: grow slowly, train well, only take on new team members when we can genuinely train them to our standard.\n\nFor you as a client: you get a consistent team. You know who is coming. They know our standards." },
  { week: 24, title: "Greywater and rainwater: what is legal and what is not", body: "There is a lot of confusion about what you can and cannot do with greywater and rainwater in Australia.\n\nRainwater:\n- Collection in tanks is legal and encouraged in most states\n- Using rainwater for toilets, laundry cold water, and garden irrigation is generally permitted\n- Using rainwater for drinking or cooking requires specific filtration and treatment\n- Rainwater tanks need an overflow that connects to the stormwater system\n\nGreywater (water from sinks, showers, laundry -- but not toilets):\n- Untreated greywater can be used for sub-surface garden irrigation in most states\n- You cannot use untreated greywater on edible plants\n- Any greywater plumbing must be done by a licensed plumber\n\nBlackwater (from toilets) must always go to the sewer or an approved septic system. No exceptions.\n\nThinking about a rainwater tank or greywater system? We install and connect both. Call us." },
  { week: 25, title: "Summer home maintenance checklist", body: "As the warmer months arrive, here is the maintenance checklist we recommend for every home.\n\nPlumbing:\n- Service your hot water system (if 3+ years since last service, book it in)\n- Check garden irrigation systems for blocked heads, correct pressure, and no leaks at connectors\n- Inspect pool or spa equipment: pump, filter, chlorinator\n- Clean gutters if you have not since autumn\n\nElectrical:\n- Have your air conditioner serviced before the first heat wave, not during\n- Check that all outdoor power points have working covers and no moisture ingress\n- If you have a pool, ensure the pool light and equipment are on their own circuit with appropriate safety switches\n- Test your smoke alarms and replace batteries\n\nGeneral:\n- Check for ant or termite activity around timber subfloors -- they are most active now\n\nNeed help with any of these? We are taking bookings now." },
  { week: 26, title: "Thank you -- and what comes next", body: "If you have been following along for the past few weeks, thank you.\n\nWe started sharing this content because we wanted to be useful, not just visible. There is no shortage of trade businesses on social media. Most of them post photos of finished jobs and that is it.\n\nWe wanted to do something different: actually share what we know, in plain language, in a way that helps homeowners make better decisions -- whether they call us or not.\n\nFrom the response we have had, it seems like that was worth doing.\n\nIf there is a topic you would like us to cover -- something you have always wondered about your plumbing, electrical, or building -- let us know in the comments.\n\nAnd if you have been meaning to book us for a job, now is a good time.\n\nThank you for following along." },
];

const videoScripts: VideoScript[] = [
  {
    num: 1,
    title: "3 Signs Your Hot Water System Is About to Fail",
    format: "60 seconds, talking head to camera",
    script: `HOOK (first 3 seconds):
Your hot water system is about to die. Here are the three warning signs.

BODY:
Sign one: It takes more than 60 seconds to get hot water at the tap. The element is struggling.

Sign two: Your hot water runs out faster than it used to. Even with normal usage. The tank is losing capacity.

Sign three: Popping or rumbling sounds from the tank. That is sediment on the heating element. It is working three times harder than it should.

CTA:
If you are seeing two of these, call your plumber before it fails on a Friday night. Save the number now.`,
  },
  {
    num: 2,
    title: "How to Turn Off Your Water in an Emergency",
    format: "90 seconds, on-location walkthrough",
    script: `HOOK:
If a pipe bursts in your house, you have about 30 seconds to find this before water causes serious damage.

BODY:
[Walk to water meter at property boundary]
This is your water main. In most Australian homes, it is at the front of the property near the street, or it might be under the kitchen sink.

[Demonstrate turning the valve]
Turn the valve clockwise to close. That is it. Water stops to the whole house.

[Point to hot water system]
If it is a hot water issue specifically, there is also a valve on the cold water inlet pipe of your hot water system. Turn that one off too.

CTA:
Go find yours right now. Before you need it. And save your plumber number in your phone while you are at it.`,
  },
  {
    num: 3,
    title: "Why Cheap Tradie Quotes Cost More in the Long Run",
    format: "60 seconds, talking head to camera",
    script: `HOOK:
The cheapest quote is often the most expensive decision.

BODY:
Here is what a low quote usually means:

They are cutting corners on materials. Cheaper pipes, cheaper fittings, cheaper fixtures. They fail sooner.

They are not licensed for this work, which means no insurance and no comeback if it goes wrong.

Or they underquoted to win the job and they will add costs back in once they have started.

The right question when getting quotes is not who is cheapest -- it is who can explain exactly what they are going to do and why.

CTA:
A tradie who talks you through the job before starting is worth more than one who just gives you a number. Book accordingly.`,
  },
  {
    num: 4,
    title: "The 30-Second Safety Switch Test Every Australian Should Know",
    format: "60 seconds, on-location switchboard demo",
    script: `HOOK:
This test could save your life. It takes 30 seconds. Most people have never done it.

BODY:
[Walk to switchboard]
Find your switchboard. Every home has one -- usually in the garage, laundry, or hallway.

Look for switches labelled Safety Switch or with a test button on them.

[Point to test button]
Press this test button.

[Safety switch trips]
It should trip. That is correct. That is what it is supposed to do.

Now press reset to restore power.

[Show non-functional example]
If it does not trip? It is broken. It looks fine. It feels fine. But it will not protect you.

CTA:
Call your electrician and get it replaced. This is not optional. This is the thing between you and a fatal shock.`,
  },
  {
    num: 5,
    title: "What Happens If You Ignore a Leaking Tap for a Year",
    format: "45 seconds, talking head plus under-sink footage",
    script: `HOOK:
One dripping tap. One year. Here is what that actually costs you.

BODY:
A tap dripping at one drip per second loses about 10,000 litres of water per year.

At current water rates, that is around 30 to 50 dollars on your bill. Every year.

But the real cost is what is underneath.

[Show under-sink footage]
Constant moisture under the cabinet. Swelling. Mould. Cabinet starting to rot.

At some point it is not a tap washer -- it is a cabinet replacement.

CTA:
A tap washer costs five dollars and twenty minutes. Do not let it become a five hundred dollar cabinet.`,
  },
  {
    num: 6,
    title: "What a Tradie Should Always Do (That Many Do Not)",
    format: "60 seconds, talking head to camera",
    script: `HOOK:
Here are the five things a good tradie does that separate them from the rest.

BODY:
One: They give you a written quote before starting. Not a number on a text. A written scope of work.

Two: They explain what they found and why they are recommending what they are recommending.

Three: They call you if anything changes mid-job. No surprises on the invoice.

Four: They clean up completely before leaving.

Five: They come back if something is not right. No argument.

CTA:
This is not extraordinary. It is the minimum. Hold your tradie to it.`,
  },
  {
    num: 7,
    title: "How to Spot a Roof Leak Before It Stains Your Ceiling",
    format: "90 seconds, on-location roof space walkthrough",
    script: `HOOK:
By the time you see a ceiling stain, the damage is already weeks old. Here is how to find a roof leak early.

BODY:
[Show roof space access]
This is the roof space. You can access most of these through the ceiling manhole in the hallway or bedroom.

[Shine torch on sarking and timbers]
On a dry, sunny day, go in with a torch and look for:

Water stains on the timber rafters. Wet or discoloured insulation. And any point where you can see daylight coming through.

[Show example staining on timber]
This is what moisture damage looks like. Caught here, this is a small repair. If this had been left another six months and transferred to the ceiling, it would be a large repair.

CTA:
Check your roof space once a year. Take a torch. It takes ten minutes and it saves thousands.`,
  },
  {
    num: 8,
    title: "The Real Reason We Show Up on Time",
    format: "45 seconds, talking head to camera",
    script: `HOOK:
We have a strict punctuality policy. Here is why.

BODY:
When a tradie is late with no communication, you have to make a decision: do I leave for work, or do I keep waiting?

That is not fair to you. Your time has value.

Our policy is simple: if we are going to be more than 15 minutes behind schedule, we call before that 15 minutes is up. Every time. No exceptions.

If we cannot make it, we tell you immediately and reschedule at your convenience.

CTA:
Not revolutionary. But it is apparently rare enough that clients mention it in every third review. Book a tradie who respects your time.`,
  },
  {
    num: 9,
    title: "Gas Safety: What to Do If You Smell Gas",
    format: "60 seconds, urgent-tone talking head to camera",
    script: `HOOK:
If you smell gas in your home, here is exactly what to do. Write this down.

BODY:
Step one: Do NOT turn any switch on or off. Not a light. Not the stove. The spark can ignite gas.

Step two: Open every window and door immediately.

Step three: Leave the building.

Step four: At the front of your property, there is a gas meter. There is a valve on it. Turn it to the off position.

Step five: Call your gas emergency line or a licensed gas fitter from outside the building. Do not go back inside until it has been inspected.

CTA:
Save your gas fitter number now. This is not a call to make while you are standing in a gas-filled kitchen.`,
  },
  {
    num: 10,
    title: "Before and After: The Bathroom Nobody Wanted to Use",
    format: "90 seconds, transformation reveal",
    script: `HOOK:
This is the bathroom the family had not used properly in two years.

BODY:
[Show before footage -- cracked tiles, broken tap, mould, broken exhaust]
Broken tap. Cracked tiles. Mould at the ceiling. Exhaust fan that had not worked since the previous owners.

The family was using the ensuite and the kids were sharing it. All because nobody wanted to spend money on this room.

[Show work in progress]
Here is what it took: two days. Retile the floor and shower walls. New vanity tap and mixer. New exhaust fan properly vented through the roof. Treat the mould, repaint the ceiling.

[Reveal after footage]
Same room. Night and day.

Cost: less than a lot of people assume. Less than ignoring it for another two years, anyway.

CTA:
If you have got a bathroom you have been avoiding, send us photos. We will tell you what it would take.`,
  },
];

const pillarColors: Record<string, string> = {
  "Before & After": "bg-blue-100 text-blue-800",
  "Tips & Education": "bg-green-100 text-green-800",
  "Behind the Scenes": "bg-purple-100 text-purple-800",
  "Customer Stories": "bg-yellow-100 text-yellow-800",
  "Local Community": "bg-red-100 text-red-800",
  "Personality": "bg-orange-100 text-orange-800",
};

function PostCard({ post }: { post: IGPost }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-bold text-gray-400">DAY {post.day}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pillarColors[post.pillar] || "bg-gray-100 text-gray-700"}`}>
          {post.pillar}
        </span>
      </div>
      <p className="font-bold text-gray-900 text-sm leading-snug">{post.hook}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{post.body}</p>
      <p className="text-orange-600 text-sm font-medium">{post.cta}</p>
      <div className="flex flex-wrap gap-1">
        {post.hashtags.map((h) => (
          <span key={h} className="text-xs text-gray-400">{h}</span>
        ))}
      </div>
    </div>
  );
}

function FBCard({ post }: { post: FBPost }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">WEEK {post.week}</span>
      </div>
      <h3 className="font-bold text-gray-900">{post.title}</h3>
      <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{post.body}</div>
    </div>
  );
}

function ScriptCard({ script }: { script: VideoScript }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">SCRIPT {script.num}</span>
          <h3 className="font-bold text-gray-900 mt-2">{script.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{script.format}</p>
        </div>
      </div>
      <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans bg-gray-50 rounded-lg p-4">{script.script}</pre>
    </div>
  );
}

const pillars = ["All", "Before & After", "Tips & Education", "Behind the Scenes", "Customer Stories", "Local Community", "Personality"];

export default function TradieCalendarContentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-900">90-Day Tradie Content Calendar</h1>
              <p className="text-sm text-gray-500">Your complete social media system</p>
            </div>
            <a
              href="https://buy.stripe.com/aFa6oJgvX7O10YrdS2bsc02"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Get the Marketing Audit &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* Welcome & Stats */}
        <section>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Welcome to your 90-Day Content Calendar</h2>
            <p className="text-orange-100 mb-6 max-w-2xl">
              Everything you need to build a consistent, professional social media presence for your trade business.
              Post daily on Instagram and weekly on Facebook -- all the hard work is done.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                ["90", "Instagram Posts"],
                ["26", "Facebook Posts"],
                ["10", "Video Scripts"],
                ["6", "Content Pillars"],
                ["1", "Hashtag Guide"],
              ].map(([num, label]) => (
                <div key={label} className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold">{num}</div>
                  <div className="text-xs text-orange-100 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to use this calendar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Customise the template", desc: "Replace [suburb], [team name], and [store name] placeholders with your real business details. Add your business name and contact details to each post." },
              { step: "2", title: "Shoot the content", desc: "Take the before/after photo or short video that matches each post. The caption is done -- you just need the visual. Use your phone. Authentic beats polished." },
              { step: "3", title: "Schedule in advance", desc: "Use Meta Business Suite (free), Later, or Buffer to schedule 2 weeks at a time. Batch your content creation every fortnight and you will never miss a post." },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Pillars */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your 6 content pillars</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { pillar: "Before & After", count: 36, desc: "Transformation photos. Highest engagement of any content type." },
              { pillar: "Tips & Education", count: 18, desc: "Useful homeowner advice. Builds authority and saves for later." },
              { pillar: "Behind the Scenes", count: 12, desc: "The real side of your business. Builds trust and human connection." },
              { pillar: "Customer Stories", count: 12, desc: "Social proof and reviews. Converts followers to callers." },
              { pillar: "Local Community", count: 6, desc: "Sponsorships, local events. Shows you care about the area." },
              { pillar: "Personality", count: 6, desc: "Your values and voice. What makes your business different." },
            ].map((item) => (
              <div key={item.pillar} className={`rounded-xl p-4 ${pillarColors[item.pillar] || "bg-gray-100 text-gray-700"}`}>
                <div className="text-xl font-extrabold">{item.count}</div>
                <div className="font-semibold text-sm mt-1">{item.pillar}</div>
                <div className="text-xs mt-2 opacity-75">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Posting Schedule */}
        <section id="schedule">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly posting schedule</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Day</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Content Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Best Time</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Monday", "Before & After", "8:00 AM", "Start the week with a win. Highest engagement day."],
                  ["Tuesday", "Tips & Education", "12:00 PM", "Lunchtime educational content. High save and share rate."],
                  ["Wednesday", "Behind the Scenes", "9:00 AM", "Mid-week authenticity. Shows the human side of your business."],
                  ["Thursday", "Customer Stories", "5:00 PM", "End of day social proof. High trust content."],
                  ["Friday", "Before & After or Personality", "8:00 AM", "Feel-good end of week. Personality posts on alternate Fridays."],
                  ["Saturday", "Rest or optional", "--", "Post only if you have great spontaneous content."],
                  ["Sunday", "Rest", "--", "Plan next week content. Do not post -- low engagement day."],
                ].map(([day, type, time, note]) => (
                  <tr key={day} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{day}</td>
                    <td className="px-4 py-3 text-gray-600">{type}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{time}</td>
                    <td className="px-4 py-3 text-gray-400 hidden md:table-cell text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-2">Best posting times</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li><strong>Instagram:</strong> 7-9 AM, 12-2 PM, 5-7 PM</li>
                <li><strong>Facebook:</strong> Wed 11 AM-1 PM, Thu 1-4 PM, Fri 10-11 AM</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <h3 className="font-bold text-green-900 mb-2">Batching tip</h3>
              <p className="text-sm text-green-800">Set aside 2 hours every fortnight. Shoot 10 photos and write captions in one session, then schedule them all at once using Meta Business Suite (free).</p>
            </div>
          </div>
        </section>

        {/* Hashtag Guide */}
        <section id="hashtags">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hashtag strategy guide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                category: "Broad (always include 2-3)",
                tags: ["#tradie", "#tradiesofinstagram", "#tradiesofaustralia", "#australiantradie", "#tradelife"],
              },
              {
                category: "Plumbing niche",
                tags: ["#plumber", "#plumbing", "#plumbingwork", "#localplumber", "#emergencyplumbing"],
              },
              {
                category: "Electrical niche",
                tags: ["#electrician", "#electricalwork", "#certifiedelec", "#electricalsafety"],
              },
              {
                category: "Building niche",
                tags: ["#builder", "#buildersofaustralia", "#renovation", "#homeimprovement", "#carpentry"],
              },
              {
                category: "Location (add your suburb)",
                tags: ["#[suburb]", "#[suburb]tradie", "#[city]plumber", "#[city]electrician", "#[suburb]renovations"],
              },
              {
                category: "Tips content",
                tags: ["#homeowner", "#homeadvice", "#tradietips", "#hometips", "#maintenancetips"],
              },
              {
                category: "Before & after content",
                tags: ["#beforeandafter", "#renovation", "#homeimprovement", "#homerenovation", "#transformationtuesday"],
              },
              {
                category: "Customer story content",
                tags: ["#customerstory", "#happyclient", "#review", "#5stars", "#testimonial"],
              },
            ].map((group) => (
              <div key={group.category} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{group.category}</h3>
                <div className="space-y-1">
                  {group.tags.map((tag) => (
                    <div key={tag} className="text-sm text-gray-600 bg-gray-50 rounded px-2 py-1">{tag}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <h3 className="font-bold text-yellow-900 mb-2">How to use hashtags effectively</h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>Use 5-10 hashtags per Instagram post. More is not better -- relevance is.</li>
              <li>Mix broad (2-3), niche (2-3), and location (2-3) hashtags in every post.</li>
              <li>Always add your suburb and nearby city hashtags -- these bring local leads.</li>
              <li>Put hashtags in the caption or first comment -- both work equally well.</li>
              <li>Avoid banned hashtags. If a hashtag shows no recent posts, it may be banned.</li>
            </ul>
          </div>
        </section>

        {/* Instagram Posts */}
        <section id="instagram">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">90 Instagram captions</h2>
              <p className="text-sm text-gray-500 mt-1">One post per day, across 6 content pillars. Copy, customise, and post.</p>
            </div>
          </div>

          {pillars.filter(p => p !== "All").map((pillar) => (
            <div key={pillar} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${pillarColors[pillar] || "bg-gray-100 text-gray-700"}`}>
                  {pillar}
                </span>
                <span className="text-sm text-gray-500">
                  {instagramPosts.filter(p => p.pillar === pillar).length} posts
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {instagramPosts.filter(p => p.pillar === pillar).map((post) => (
                  <PostCard key={post.day} post={post} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Facebook Posts */}
        <section id="facebook">
          <h2 className="text-xl font-bold text-gray-900 mb-2">26 Facebook posts</h2>
          <p className="text-sm text-gray-500 mb-6">
            Post once per week on Facebook. These are longer-form, educational posts that build trust and drive bookings.
            Customise the placeholders and post on Wednesday or Thursday for best reach.
          </p>
          <div className="space-y-4">
            {facebookPosts.map((post) => (
              <FBCard key={post.week} post={post} />
            ))}
          </div>
        </section>

        {/* Video Scripts */}
        <section id="videos">
          <h2 className="text-xl font-bold text-gray-900 mb-2">10 video scripts</h2>
          <p className="text-sm text-gray-500 mb-6">
            Short-form video for Instagram Reels, Facebook Reels, and TikTok.
            Film on your phone. Authentic and unpolished outperforms studio quality for tradies.
            Add your business name and contact details at the end of each video.
          </p>
          <div className="space-y-4">
            {videoScripts.map((script) => (
              <ScriptCard key={script.num} script={script} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to go further?</h2>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">
              This content calendar gives you what to post. A MarketingAI audit tells you how to
              turn those followers into paying clients -- with a full strategy reviewed by a marketing expert.
            </p>
            <a
              href="https://buy.stripe.com/aFa6oJgvX7O10YrdS2bsc02"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
            >
              Get the $49 Marketing Audit &rarr;
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
