import {
  heroImg,
  beefWellington,
  braisedBeef,
  truffleEggs,
  heirloomTomatoes,
  truffles,
  souffle,
  canapes,
  steamingSoup,
  microgreens,
} from "@/lib/images";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-hiring-private-chef",
    title: "What to Expect When You Hire a Private Chef",
    date: "12 April 2026",
    excerpt:
      "Thinking about booking a private chef for your dinner party or event? Here's exactly what the experience looks like — from the initial enquiry to the last course.",
    category: "Behind the Scenes",
    readTime: "5 min read",
    image: heroImg,
    imageAlt: "Elegant fine dining dish prepared by private chef Andrew Taylor",
    content: `
      <p>Hiring a private chef for the first time can feel like uncharted territory. What do you actually get? How involved do you need to be? What happens in your kitchen? After more than 15 years working in clients' homes across Essex, Cambridge, and Hertfordshire, I've answered these questions hundreds of times — so let me walk you through it.</p>

      <h2>The Consultation</h2>
      <p>Every booking starts with a conversation. I want to understand the occasion, the number of guests, any dietary requirements, and your general preferences. Do you love bold, confident flavours or something more delicate? Is there a particular dish you've always wanted to try? This is your evening — the menu should reflect your tastes, not just mine.</p>
      <p>For dinner parties, I'll propose a full menu for your approval. This typically includes canapés with drinks, a starter, a fish or intermediate course, a main, and dessert. We can go shorter or longer depending on the occasion.</p>

      <h2>On the Day</h2>
      <p>I arrive a couple of hours before service to set up, prep, and get the kitchen organised. You won't need to lift a finger — in fact, I'd encourage you to enjoy a drink with your guests while I take care of everything behind the scenes.</p>
      <p>During service, I work quietly and efficiently. Courses arrive at a natural pace, and I'm always on hand if you need anything. After the final course, I clean the kitchen thoroughly — you'll wake up the next morning to a spotless kitchen.</p>

      <h2>What You'll Need</h2>
      <p>A reasonably equipped kitchen is all that's required. I bring my own knives and specialist equipment. A working oven, hob, and fridge are the basics. If you're planning a larger event and have any concerns about kitchen capacity, just mention it during our consultation and we'll find a solution.</p>

      <h2>The Cost</h2>
      <p>Private chef services are priced based on the number of guests, the complexity of the menu, and the duration of service. Costs typically cover my time, travel, and any specialist equipment — ingredients are usually charged separately at cost, with no markup. I'll provide a clear, itemised quote before you commit to anything.</p>

      <h2>Is a Private Chef Right for You?</h2>
      <p>If you want to host a truly special dinner — one where you can be a proper host, enjoy your guests, and not spend the evening chained to the oven — then yes, a private chef is exactly right. Whether it's a milestone birthday, an anniversary dinner, a client entertainment evening, or simply because you deserve a spectacular meal at home, I'd love to help make it happen.</p>
      <p>Get in touch to discuss your next occasion.</p>
    `,
  },
  {
    slug: "beef-wellington-private-dining-centrepiece",
    title: "Beef Wellington: The Ultimate Private Dining Centrepiece",
    date: "8 April 2026",
    excerpt:
      "Few dishes command a dinner table quite like a perfectly made Beef Wellington. Here's why it remains the gold standard for private dining — and what makes a great one.",
    category: "Dishes & Menus",
    readTime: "4 min read",
    image: beefWellington,
    imageAlt: "Golden latticed Beef Wellington fresh from the oven by Andrew Taylor",
    content: `
      <p>There are dishes that feed people, and then there are dishes that create moments. Beef Wellington is firmly in the second category. The gasp when it arrives at the table, the moment the knife cuts through that golden pastry crust to reveal the perfectly pink centre — it never gets old, no matter how many times I've made it.</p>

      <h2>What Makes a Great Wellington</h2>
      <p>The fundamentals are straightforward: a prime beef fillet, a layer of finely chopped mushroom duxelles, a wrapping of Parma ham to protect the pastry, and a case of buttery puff pastry baked to a deep, rich gold. But every element has to be executed precisely.</p>
      <p>The fillet must be seared hard to develop colour and seal the exterior, then chilled before wrapping — if it goes in warm, the pastry and duxelles cook unevenly. The duxelles themselves need to be cooked until completely dry; any residual moisture makes the pastry soggy from the inside. The pastry needs to be cold when it goes into a very hot oven.</p>
      <p>And then there's the resting. A Wellington needs at least ten minutes to rest after coming out of the oven. The internal temperature continues to rise during this time — without resting, you'll lose all those precious juices the moment you cut into it.</p>

      <h2>Why It Works So Well for Private Dining</h2>
      <p>From a chef's perspective, Beef Wellington is ideal for dinner parties because much of the work is done in advance. The Wellington can be prepared and wrapped hours before guests arrive, refrigerated, and then simply transferred to the oven to order. That means I can be fully present during service rather than frantically working over a hot pan.</p>
      <p>From a guest's perspective, it's a showpiece. It photographs beautifully, it carves at the table, and there's something wonderfully theatrical about the whole presentation that elevates even an informal gathering into something memorable.</p>

      <h2>Accompaniments</h2>
      <p>I typically serve Wellington with a rich Madeira jus, a silky potato purée, and seasonal vegetables — roasted heritage carrots, wilted greens, or whatever is best from the market that week. In truffle season, a truffle and mushroom sauce takes the dish to another level entirely.</p>

      <h2>A Note on Provenance</h2>
      <p>The quality of the beef matters enormously. I source my fillet from trusted butchers who work with British farms committed to quality and welfare. Aged beef has a depth of flavour that commodity fillet simply cannot match. When the primary ingredient is this important, there's no point compromising.</p>
      <p>If Beef Wellington is on your wishlist for a dinner party, I'd love to make it for you. Get in touch and let's start planning your menu.</p>
    `,
  },
  {
    slug: "seasonal-winter-menus-private-chef",
    title: "Cooking with the Seasons: Why Seasonal Menus Always Win",
    date: "1 April 2026",
    excerpt:
      "A menu built around what's at its best right now will always outperform one that ignores the calendar. Here's how I approach seasonal cooking for private dining.",
    category: "Dishes & Menus",
    readTime: "4 min read",
    image: heirloomTomatoes,
    imageAlt: "Seasonal heirloom tomatoes — fresh local produce for private chef menus",
    content: `
      <p>The most important ingredient in any dish isn't in the recipe. It's the calendar. A tomato in July, sun-warmed and bursting with flavour, is a completely different ingredient to a tomato in December — pale, watery, and grown under artificial light somewhere it shouldn't be. The same is true across the entire produce spectrum.</p>
      <p>When I'm planning menus for private dining clients, seasonality isn't a nice-to-have — it's the foundation everything else is built on.</p>

      <h2>Why Seasonal Produce Wins Every Time</h2>
      <p>Seasonal produce is picked closer to its peak, which means it reaches your plate with more nutrients, more flavour, and better texture. It hasn't spent days in cold storage or weeks on a container ship. It's been grown in the right conditions, at the right time of year, by farmers who know what they're doing.</p>
      <p>There's also a cost argument. In-season produce is abundant, which means it's more affordable — that saving gets passed directly to my clients. Sourcing asparagus in November costs three times what it costs in May, and the quality is a fraction of it.</p>

      <h2>What's Exciting Right Now</h2>
      <p>British food has seasons worth celebrating. Spring brings asparagus, wild garlic, and Jersey Royals. Summer arrives with courgette flowers, broad beans, heritage tomatoes, and soft fruits. Autumn is the most dramatic — game, mushrooms, squash, quinces, and the first root vegetables. Winter offers celeriac, leeks, Savoy cabbage, salsify, and the magnificent citrus season.</p>
      <p>Black truffles peak in winter. Morels appear in spring. Wild sea bass is at its best in autumn. Building a menu around these moments produces food that is genuinely of its time and place — which is exactly what private dining should feel like.</p>

      <h2>How I Build a Seasonal Menu</h2>
      <p>I visit suppliers regularly throughout the year and keep a close eye on what's performing well. When I sit down to plan a client's menu, I start with what's exceptional right now, then build dishes around those anchors. Sometimes a spectacular piece of fish or a delivery of extraordinary mushrooms will entirely change the direction of a menu I'd half-planned in my head.</p>
      <p>This is one of the genuine pleasures of private cooking compared to restaurant work — the flexibility to follow the seasons honestly, without being locked into a printed menu that has to stay the same for three months.</p>

      <h2>Local Sourcing in Essex and Cambridgeshire</h2>
      <p>Based in Clavering, I'm fortunate to have some exceptional producers on my doorstep. The flatlands of Cambridgeshire produce outstanding brassicas, root vegetables, and salads. Essex has excellent fruit growing traditions and fantastic seafood access via Mersea and Harwich. I use these local connections wherever possible — the provenance story matters, and guests appreciate knowing where their food came from.</p>
      <p>If you'd like to discuss a seasonally-led menu for your next dinner party, I'd love to hear from you.</p>
    `,
  },
  {
    slug: "planning-perfect-dinner-party-private-chef",
    title: "How to Plan the Perfect Dinner Party (with a Private Chef)",
    date: "22 March 2026",
    excerpt:
      "Hosting a dinner party should be enjoyable — not stressful. Here's how working with a private chef transforms the experience, and the simple steps to planning an evening your guests will remember.",
    category: "Events & Hosting",
    readTime: "6 min read",
    image: canapes,
    imageAlt: "Elegant canapés on skeleton leaves — private dinner party starters by Andrew Taylor",
    content: `
      <p>Hosting a dinner party is one of the great social pleasures — but it comes with a persistent anxiety. You want to be present with your guests, glass in hand, actually enjoying the evening. Instead, you end up hot and frazzled in the kitchen, apologising for the timing and wishing you'd booked a restaurant.</p>
      <p>A private chef removes that problem entirely. Here's how to plan an evening that runs beautifully from the first canapé to the final petit four.</p>

      <h2>Start with the Guest List</h2>
      <p>Before we discuss food, think about your guests. Are they adventurous eaters or do they have strong preferences? Are there dietary requirements — vegetarian, vegan, allergies, intolerances? The menu has to work for the room. I'll always ask about this during our initial conversation, and it fundamentally shapes what I propose.</p>
      <p>For private dining, I work well with anything from an intimate dinner for two up to around twenty guests. Beyond that, the logistics change and we'd discuss a more structured catering arrangement.</p>

      <h2>Set the Tone with the Menu</h2>
      <p>The menu sets the entire tone of the evening. A long, elaborate tasting menu says "this is a special occasion, savour every moment." A shorter, more relaxed three-course menu with wine says "this is a wonderful dinner among friends." Neither is wrong — they're just different evenings.</p>
      <p>I'd always suggest starting with canapés served with drinks. They signal to guests that the evening has truly begun, and they give me valuable time to set up and prepare the kitchen for service. A couple of elegantly designed bites — perhaps a truffle egg, a smoked salmon blini, a tiny tartlet — immediately elevates the atmosphere.</p>

      <h2>Think About the Flow</h2>
      <p>A well-paced dinner party doesn't rush and doesn't drag. Courses should arrive with enough breathing room between them for conversation to develop and wine to be poured. I'll always coordinate timing with you — if the conversation is flowing beautifully and you'd like to linger over the starter, just say the word and I'll hold the main course.</p>
      <p>This level of responsiveness is one of the real advantages of a private chef over a restaurant. The evening moves at your pace.</p>

      <h2>Wines and Pairings</h2>
      <p>I'm happy to suggest wine pairings for each course if you'd like guidance. Alternatively, I can work with whatever you've chosen to serve. If you'd like a full drinks recommendation alongside the menu, I'll put something together that complements each dish without overwhelming it.</p>

      <h2>The Morning After</h2>
      <p>One of the things clients tell me they appreciate most — the kitchen is left cleaner than I found it. Everything is washed up, surfaces wiped, and bins emptied. You can go to bed happy after your guests leave, rather than facing a mountain of washing up in the morning.</p>

      <h2>Locations I Cover</h2>
      <p>Based in Clavering, Essex, I serve dinner party clients across Cambridge, Bishop's Stortford, Saffron Walden, Chelmsford, Stevenage, Hertfordshire, and the surrounding areas. Travel up to around 30 miles from Clavering is standard — further afield can be arranged for larger events.</p>
      <p>If you're planning a dinner party and would like to discuss menus and availability, I'd love to hear from you.</p>
    `,
  },
  {
    slug: "private-chef-vs-catering-difference",
    title: "Private Chef vs. Caterer: What's the Difference?",
    date: "15 March 2026",
    excerpt:
      "A private chef and a caterer are not the same thing — and the difference matters enormously for your event. Here's a clear breakdown of what each offers and when to choose which.",
    category: "Behind the Scenes",
    readTime: "4 min read",
    image: braisedBeef,
    imageAlt: "Braised beef in copper pots — fine dining by private chef Andrew Taylor",
    content: `
      <p>When people first start thinking about having someone cook for their event, they often use "private chef" and "caterer" interchangeably. They're not the same thing, and understanding the difference will help you choose what's right for your occasion.</p>

      <h2>What a Caterer Does</h2>
      <p>A caterer typically operates at scale. They prepare food off-site in a commercial kitchen, transport it to your venue, and serve it — often buffet-style, or from a set menu with limited customisation. Catering works exceptionally well for large events: weddings, corporate lunches, conferences, and parties of 50 or more where individual attention per guest isn't feasible.</p>
      <p>The food is designed to hold well during transport and service, which means certain techniques and ingredients are off the table. You won't get a perfectly pink beef fillet from a caterer — the logistics make it impossible. What you get is reliable, competent food delivered at scale.</p>

      <h2>What a Private Chef Offers</h2>
      <p>A private chef cooks for you, specifically, in your kitchen. The menu is designed around your preferences, dietary requirements, and the ingredients that are exceptional right now. There's no batch cooking, no holding on a hot plate, no compromise on technique.</p>
      <p>Because I'm cooking to order in your kitchen, I can execute dishes that would never work in a catering context — soufflés, delicate fish preparations, dishes that depend on precise timing, anything served at exactly the right temperature. The food is genuinely restaurant-quality because it's being made the same way a restaurant kitchen would make it, just in your home.</p>
      <p>The experience is also entirely different. You have a dedicated professional managing the food and service throughout your evening. It's personal, attentive, and tailored entirely to you.</p>

      <h2>Which Is Right for Your Event?</h2>
      <p>For intimate dinner parties, special celebrations, weekly household cooking, and any event where quality and personalisation matter most — a private chef is the right choice. For large-scale events where feeding 80 people efficiently is the priority — a caterer is the right choice.</p>
      <p>For events in the middle — say 20 to 40 guests — it depends on the nature of the occasion. A seated dinner for 30 where every guest has a composed plate is private chef territory. A standing cocktail reception for 40 where canapés circulate is more naturally a catering job, though I do offer canapé and reception events at the larger end of my range.</p>

      <h2>The Question to Ask Yourself</h2>
      <p>The clearest question is this: do you want the experience to feel like a restaurant in your home, or do you want an efficiently organised food operation? Both are valid, but they're different things. If the answer is the former, you want a private chef.</p>
      <p>I'd be happy to discuss whether your event is a good fit for what I offer — just get in touch and we can talk it through.</p>
    `,
  },
  {
    slug: "black-truffles-private-dining-essex",
    title: "The Black Truffle Season: A Luxury Worth Celebrating",
    date: "5 March 2026",
    excerpt:
      "Black truffle season runs from December to March, and for private dining clients, it's the most exciting time of year. Here's how I use truffles — and why fresh is everything.",
    category: "Ingredients",
    readTime: "3 min read",
    image: truffles,
    imageAlt: "Fresh black Périgord truffles — seasonal luxury ingredient used by private chef Andrew Taylor",
    content: `
      <p>There are very few ingredients that change a dish simply by being present in the room. Black truffle is one of them. The moment you open a bag of fresh Périgord truffle, the aroma fills the kitchen — that extraordinary combination of earth, wood smoke, and something almost animal. It's one of the most complex natural aromas in the food world.</p>

      <h2>Fresh vs. Preserved</h2>
      <p>The first thing to understand about truffle is that fresh and preserved are almost entirely different ingredients. A jar of truffle paste or truffle oil (most of which doesn't contain real truffle at all — it's a synthetic compound called 2,4-dithiapentane) bears almost no relation to a fresh truffle shaved tableside.</p>
      <p>Fresh black truffle has a brief season — roughly December through to early March, peaking in January. This is when prices peak too, but so does the quality. The flavour is at its most intense, the aroma most penetrating. This is when truffle is worth using.</p>

      <h2>How I Use Truffles in Private Dining</h2>
      <p>The most fundamental rule with fresh truffle is: do less. Truffle doesn't need embellishment — it needs a backdrop that lets it speak. Butter, eggs, cream, and pasta are its natural companions because their neutrality allows the truffle to dominate.</p>
      <p>A classic in my winter menus is a truffle scrambled egg — slow-cooked curds with an almost impossible richness, topped with shaved truffle and served in the shell. Simple, direct, and extraordinary. Similarly, a pasta with a brown butter and truffle sauce, finished tableside with a truffle plane, is hard to improve on.</p>
      <p>For a more elaborate course, I'll do a beef or veal fillet with a truffle jus and shaved truffle over the top. The earthiness of the truffle lifts the depth of the meat in a way that few other ingredients can.</p>

      <h2>Sourcing</h2>
      <p>I source my truffles through a trusted importer who works directly with producers in the Périgord and Umbria regions. The quality and freshness is consistent, which is essential — a truffle that's been sitting for too long loses its aroma rapidly and is not worth the premium.</p>
      <p>If you're interested in a winter truffle menu for a dinner party, the season is short — don't leave it too late. I'd love to put something together for you.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
