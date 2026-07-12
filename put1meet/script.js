const SUPABASE_URL = "https://vruyrpukjaiapmvgbzgv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_0p7NHvbRX63BBLMlnL_OOQ_kXR6aDi7";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) || null;

const spots = [
  {
    id: "bangalore-fort",
    name: "Bangalore Fort Remnants",
    area: "KR Market / Pete",
    tags: ["heritage", "night"],
    mood: "Old stone, city noise, history",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Old%20Bangalore%20Fort%2C%20Inside%20View.JPG?width=1200",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bangalore%20Fort%20KR%20Market%20Bengaluru",
    blurb:
      "A legal public heritage stop with the surviving Delhi Gate, bastions, old-city lanes, and Tipu Sultan's Summer Palace close by.",
    groups: [
      { day: "Friday", date: "10 Jul", time: "5:30 PM", people: 8 },
      { day: "Sunday", date: "12 Jul", time: "8:00 AM", people: 14 },
      { day: "Wednesday", date: "15 Jul", time: "6:15 PM", people: 5 },
    ],
    tips: [
      "Start before sunset so you can see the stone details clearly.",
      "Pair it with KR Market lanes, Avenue Road books, and Tipu Sultan's Summer Palace.",
      "Keep bags light and stay with the group in crowded lanes.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.7",
        text: "Feels unreal that this much history is sitting inside regular traffic.",
        photo:
          "https://images.unsplash.com/photo-1605649461784-edc0ea9b420c?auto=format&fit=crop&w=900&q=80",
      },
      {
        user: "Community visitor",
        rating: "4.3",
        text: "Best with someone who knows the stories. Go early, then get breakfast nearby.",
        photo:
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "devanahalli-fort",
    name: "Devanahalli Fort Loop",
    area: "North Bengaluru",
    tags: ["heritage"],
    mood: "Fort walls and quiet lanes",
    image:
      "https://bengaluruprayana.com/wp-content/uploads/2023/10/Discovering-Devanahalli-Fort-Unraveling-the-History-of-Bangalores-Ancient-Stronghold.jpeg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Devanahalli%20Fort%20Bengaluru",
    blurb:
      "A walkable fort settlement near the airport side, known for old gateways, bastions, temples, and Tipu Sultan history.",
    groups: [
      { day: "Saturday", date: "11 Jul", time: "7:00 AM", people: 11 },
      { day: "Saturday", date: "18 Jul", time: "4:30 PM", people: 7 },
    ],
    tips: [
      "Go in the morning if you want cooler light and cleaner photos.",
      "Respect homes and temples inside the fort area.",
      "Carry cash for tea/snacks; keep the route slow and local-friendly.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.5",
        text: "Not flashy, but the small streets inside the fort are the whole point.",
        photo:
          "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "airport-plane-spotting",
    name: "Airport Plane Spotting Pull-up",
    area: "Kempegowda Airport side",
    tags: ["night", "nature"],
    mood: "Parked cars, runway lights, aircraft overhead",
    image:
      "https://images.bhaskarassets.com/web2images/1884/2025/04/14/kempegowda-international-airport-bengaluru_1744617117.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kempegowda%20International%20Airport%20plane%20spotting%20viewpoint%20Bengaluru",
    blurb:
      "A public airport-side pull-up plan for watching flights from safe roadside or cafe-side areas without entering restricted airport zones.",
    groups: [
      { day: "Friday", date: "10 Jul", time: "8:30 PM", people: 13 },
      { day: "Saturday", date: "11 Jul", time: "6:15 AM", people: 9 },
      { day: "Sunday", date: "12 Jul", time: "7:45 PM", people: 18 },
    ],
    tips: [
      "Stay only in public parking, cafe, or safe roadside areas and never enter restricted airport property.",
      "Evening is best for runway lights; early morning is better for cleaner photos.",
      "Carry water, keep headlights low when parked, and move if security or police asks the group to leave.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.6",
        text: "Best chill drive plan. You hear the flights before you see them.",
        photo:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
      },
      {
        user: "Community visitor",
        rating: "4.4",
        text: "Go with a small group and keep it respectful. The night lights are worth it.",
        photo:
          "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "avenue-road",
    name: "Avenue Road Hidden Walk",
    area: "Chickpet",
    tags: ["heritage", "night"],
    mood: "Books, shutters, old city layers",
    image:
      "https://static.toiimg.com/thumb/imgsize-1295217%2Cmsid-69275407%2Cwidth-900%2Cresizemode-4/69275407.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avenue%20Road%20Chickpet%20Bengaluru",
    blurb:
      "A social old-city route inspired by heritage walk chatter: bookshops, churches, market edges, and fading commercial architecture.",
    groups: [
      { day: "Thursday", date: "9 Jul", time: "6:00 PM", people: 9 },
      { day: "Sunday", date: "12 Jul", time: "9:30 AM", people: 16 },
    ],
    tips: [
      "Keep the group small so you do not block shopfronts.",
      "Best route: Avenue Road, Rice Memorial Church exterior, KR Market edge.",
      "Ask before photographing people, interiors, or shop counters.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.8",
        text: "10/10 if you like chaotic history and used-book hunting.",
        photo:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "bugle-rock",
    name: "Bugle Rock Sunset",
    area: "Basavanagudi",
    tags: ["nature", "heritage", "hills"],
    mood: "Rock park, watchtower, old Bangalore",
    image:
      "https://explore-bangalore-menu.s3.ap-south-1.amazonaws.com/parks/bugle-rock-park/image-1.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bugle%20Rock%20Park%20Basavanagudi%20Bengaluru",
    blurb:
      "A public park built around ancient rock formations, with temple streets and classic Basavanagudi food close by.",
    groups: [
      { day: "Friday", date: "10 Jul", time: "5:00 PM", people: 12 },
      { day: "Tuesday", date: "14 Jul", time: "6:00 AM", people: 6 },
    ],
    tips: [
      "Go for golden hour, then walk to Gandhi Bazaar for food.",
      "Do not climb unsafe edges or disturb park users.",
      "Bring a small tripod only if the park rules allow it that day.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.6",
        text: "Easy, pretty, and still has that old Bangalore texture.",
        photo:
          "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "gavipuram",
    name: "Gavipuram Heritage Corners",
    area: "South Bengaluru",
    tags: ["heritage"],
    mood: "Temple streets and hidden hillocks",
    image:
      "https://i0.wp.com/motofoodie.in/wp-content/uploads/2024/09/Entrance-of-the-Gavi-Gangadhareshwara-Cave-Temple-Heritage-Walk-in-Bengaluru-by-INTACH.jpg?resize=1024%2C768&ssl=1",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gavipuram%20Gavi%20Gangadhareshwara%20Temple%20Bengaluru",
    blurb:
      "A route around Gavipuram and nearby older water systems, inspired by recent local heritage walk interest.",
    groups: [
      { day: "Sunday", date: "12 Jul", time: "7:30 AM", people: 10 },
      { day: "Sunday", date: "19 Jul", time: "7:30 AM", people: 4 },
    ],
    tips: [
      "Use public streets and temple-access areas only.",
      "Wear simple walking shoes; some lanes are uneven.",
      "A local guide makes this route much better.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.4",
        text: "Quiet, layered, and less Instagram-obvious than most city walks.",
        photo:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "nandi-hills",
    name: "Nandi Hills Public Sunrise",
    area: "Chikkaballapur side",
    tags: ["nature", "heritage", "hills"],
    mood: "Fort hill, sunrise, early drive",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise%20at%20Nandi%20Hills.jpg?width=1200",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nandi%20Hills%20Karnataka",
    blurb:
      "A classic public hill-fort visit near Bengaluru. The app groups people for official-entry sunrise slots and cleanup-friendly walks.",
    groups: [
      { day: "Saturday", date: "11 Jul", time: "4:45 AM", people: 18 },
      { day: "Sunday", date: "12 Jul", time: "4:45 AM", people: 21 },
    ],
    tips: [
      "Check current entry timing and booking rules before leaving.",
      "Carry a jacket, water, and a trash bag for your own waste.",
      "Skip restricted structures and avoid graffiti or carving names.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.2",
        text: "Crowded, but the sunrise still hits if you arrive early and stay patient.",
        photo:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "hanumagiri-hills",
    name: "Hanumagiri Hills",
    area: "AG's Layout / Ittamadu",
    tags: ["hills", "nature", "heritage"],
    mood: "City hillock, Hanuman temple, quiet views",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGrNgOxl1TKjI---z2oY-HXjZRhCEuw1BIVs5JoDROzEejzbb1p4IFInAMu_dlnuz2nI544NhX0um_7F_k73SohQjqA2B16ikjJkIahJ1THo7CR4uIt6wbzmz3X8Tk_w9uPhwSF=w1200-h675-k-no",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hanumagiri%20Betta%20AG%27s%20Layout%20Ittamadu%20Bengaluru",
    blurb:
      "A public hill-temple walk around Hanumagiri Betta, known for its Hanuman/Anjaneya temple side and small city-hill feel inside Bengaluru.",
    groups: [
      { day: "Saturday", date: "18 Jul", time: "6:45 AM", people: 8 },
      { day: "Thursday", date: "23 Jul", time: "5:30 PM", people: 6 },
    ],
    tips: [
      "Use the temple/public-stair side as the meet point and respect prayer timings.",
      "Keep it low-noise; this is a local devotional hillock, not a party spot.",
      "Go in daylight for views and safer steps; avoid restricted or construction edges.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.3",
        text: "Feels like a tiny hidden city hill. Best for a calm morning walk.",
        photo:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "hulimavu-rocks",
    name: "Hulimavu Cave Rocks",
    area: "Behind Royal Meenakshi Mall",
    tags: ["hills", "nature", "heritage"],
    mood: "Small hillock, cave temple, local rock trail",
    image:
      "https://mygate.com/blog/wp-content/uploads/2022/10/unnamed-7.jpeg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hulimavu%20Cave%20Temple%20Royal%20Meenakshi%20Mall%20Bengaluru",
    blurb:
      "Area-level pick for the small rocky hillock/cave-temple side behind the Meenakshi Mall stretch. Use public paths, temple timings, and avoid private layouts.",
    groups: [
      { day: "Saturday", date: "18 Jul", time: "6:30 AM", people: 9 },
      { day: "Wednesday", date: "22 Jul", time: "5:15 PM", people: 6 },
    ],
    tips: [
      "Use the Hulimavu Cave Temple / public road side as the meet point.",
      "Do not enter fenced layouts, construction areas, or forest-edge private land.",
      "Best for sunrise/sunset photos, but leave before it gets dark.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.1",
        text: "Small but fun if you are nearby. The cave-temple side makes it feel hidden.",
        photo:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "vivekananda-gudda",
    name: "Vivekananda Gudda",
    area: "Bengaluru outskirts",
    tags: ["hills", "nature", "heritage"],
    mood: "Hilltop walk, open view, quiet temple-side energy",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHUy9mq0R6_-PNSE6KozDz1YGuugpgV9vaK563l_klRZysC_N4JNRmL-kxWNhcm37jzgVquKBQL56uS_4gciJXmgpYLAn30xpIrFT4-RPFyJ0d7cujn4Fkmmnyv3DHoog70gcGB0co9QPU=w1200-h675-k-no",
    mapUrl: "https://maps.app.goo.gl/jjNQbsbeDn314xWJ9",
    blurb:
      "A public gudda-style hill spot for small sunrise or evening groups, with a focus on staying on open paths and respecting local temple or village areas nearby.",
    groups: [
      { day: "Saturday", date: "25 Jul", time: "6:00 AM", people: 9 },
      { day: "Sunday", date: "26 Jul", time: "5:00 PM", people: 6 },
      { day: "Thursday", date: "30 Jul", time: "6:15 AM", people: 5 },
    ],
    tips: [
      "Go in daylight and stick to clear public paths.",
      "Keep noise low near temple or residential areas.",
      "Wear shoes with grip and avoid loose rock edges after rain.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.4",
        text: "Good quiet hill energy. Best with a small group and an early start.",
        photo:
          "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2016/06/20160522_172531.jpg?resize=900%2C506",
      },
    ],
  },
  {
    id: "acchala-bettu",
    name: "Acchala Bettu",
    area: "Bengaluru outskirts",
    tags: ["hills", "nature"],
    mood: "Dry trail, open valley view, cloudy hill air",
    image:
      "assets/acchala-bettu.png",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Acchala%20Bettu%20Karnataka",
    blurb:
      "A rocky bettu-style viewpoint for small daylight groups, with open scrub trails and wide views over the surrounding hills.",
    groups: [
      { day: "Saturday", date: "25 Jul", time: "6:15 AM", people: 7 },
      { day: "Sunday", date: "26 Jul", time: "5:15 PM", people: 5 },
      { day: "Friday", date: "31 Jul", time: "6:00 AM", people: 4 },
    ],
    tips: [
      "Go in daylight and avoid loose rock edges after rain.",
      "Carry water; the trail looks exposed and dry.",
      "Keep the group small, stay on clear paths, and leave before it gets dark.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.4",
        text: "Quiet hill view with a proper offbeat feel. Best when the sky is dramatic.",
        photo:
          "assets/acchala-bettu.png",
      },
    ],
  },
  {
    id: "turahalli-rocks",
    name: "Turahalli Tree Park",
    area: "Kanakapura Road",
    tags: ["hills", "nature"],
    mood: "Rocky forest edge, city views",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkNPNy_5fFv5AbfAnW3IBUwHwOCbGfo-ID2hLyMeQK-GCUIQXZ-CgtdbjmR7OIr-vvpW2J2viG-GVPmUDyXJYZsqEz2IKV6zPESKCVoMTTN_aWzglR29cll9FhXbSw_v47g-HcdPQ=w1200-h675-k-no",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Turahalli%20Tree%20Park%20Bengaluru",
    blurb:
      "A well-known public rocky viewpoint and trail zone. Keep it low-impact: no fires, no littering, no loud night groups.",
    groups: [
      { day: "Sunday", date: "19 Jul", time: "6:00 AM", people: 15 },
      { day: "Friday", date: "24 Jul", time: "5:30 PM", people: 8 },
    ],
    tips: [
      "Go early and stay on existing public trails.",
      "Carry water and avoid monsoon-slick rock faces.",
      "Respect forest rules and skip any blocked or restricted sections.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.6",
        text: "Easy city escape. The skyline view is the reason to go.",
        photo:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "turahalli-forest-road",
    name: "Turahalli Forest Road",
    area: "Kanakapura Road / Turahalli side",
    tags: ["nature", "hills", "night"],
    mood: "Quiet forest road, bikes, morning air",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxWqNurdj5dksmGrpCAu0gapHei7o8RkvEeWfWZ8GwdR2Q0pueIjLscpnv3r1OOUD9HLXJ7H-7VW5KOkDgzdUDGTCDwa_jzF1r0OgTSKKcHIlZIK5Vxf8RT_dPRtm9Wtv4Ti0L=w1200-h675-k-no",
    mapUrl: "https://maps.app.goo.gl/Q4JMDTTNHNs1fwJn6",
    blurb:
      "A public road-side Turahalli meet point for calm drives, short walks, and forest-edge views without entering blocked or restricted sections.",
    groups: [
      { day: "Saturday", date: "25 Jul", time: "6:30 AM", people: 10 },
      { day: "Sunday", date: "26 Jul", time: "5:15 PM", people: 7 },
      { day: "Wednesday", date: "29 Jul", time: "6:00 AM", people: 5 },
    ],
    tips: [
      "Use the public road as the meet point and avoid any barricaded forest paths.",
      "Morning is best for cooler air and fewer vehicles.",
      "Keep music low, do not litter, and leave before it gets too dark.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.5",
        text: "Nice low-effort road spot when you want Turahalli vibes without a long hike.",
        photo:
          "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2016/06/20160522_172531.jpg?resize=900%2C506",
      },
    ],
  },
  {
    id: "bannerghatta-quarry-edge",
    name: "Bannerghatta Quarry Viewpoints",
    area: "Bannerghatta / Kaggalipura side",
    tags: ["hills", "nature", "abandoned"],
    mood: "Old quarry mood, forest-edge views",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrq5lB5kRFIssHyPlxe7tzBTR3HSKW0Kw9Z3AUNAAqWWeIFRGctWKm7vaTBfDWNbXazYorB_MA0RItvoB28mCAPhglxteuokmn2YKgKrpboMJCNJ-S7q6jNxs1yjku6a-2H4N0=w1200-h675-k-no",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kaggalipura%20Bannerghatta%20Bengaluru",
    blurb:
      "A legal-viewpoint style entry inspired by quarry/hill chatter around Bannerghatta. Meet only at public roads/viewpoints; do not enter active or fenced quarry land.",
    groups: [
      { day: "Saturday", date: "25 Jul", time: "6:15 AM", people: 7 },
      { day: "Sunday", date: "26 Jul", time: "4:45 PM", people: 5 },
    ],
    tips: [
      "Treat this as a viewpoint route, not a quarry-entry route.",
      "Avoid forest buffer, blasting areas, and private quarry roads.",
      "Go with locals who know public-access paths.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "4.0",
        text: "Good moody photos from public edges, but safety matters a lot here.",
        photo:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "broken-bridge-nice-road",
    name: "Broken Bridge over NICE Road",
    area: "NICE Road side",
    tags: ["abandoned", "night", "nature"],
    mood: "Concrete edge, road views, unfinished-bridge feel",
    image:
      "assets/broken-bridge-over-nice-road.png?v=2",
    imagePosition: "center 72%",
    mapUrl: "https://maps.app.goo.gl/qBQ3bXm6wBcuSbmYA",
    blurb:
      "A road-side abandoned-style viewpoint around the NICE Road side. Keep it to public access areas only and do not climb damaged, blocked, or unsafe bridge sections.",
    groups: [
      { day: "Saturday", date: "25 Jul", time: "5:45 PM", people: 6 },
      { day: "Sunday", date: "26 Jul", time: "7:00 AM", people: 8 },
      { day: "Friday", date: "31 Jul", time: "5:30 PM", people: 5 },
    ],
    tips: [
      "Use the public roadside as the meet point and stay away from traffic lanes.",
      "Do not climb broken concrete, barriers, or any blocked bridge structure.",
      "Go in daylight or golden hour; leave before visibility drops.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "3.9",
        text: "Looks cinematic from the safe side, but this is definitely a look-don't-climb spot.",
        photo:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "kothanur-stalled-builds",
    name: "Kothanur Stalled-Build Area",
    area: "North Bengaluru",
    tags: ["abandoned", "night"],
    mood: "Unfinished-building stories, area-level only",
    image:
      "https://s3.ap-south-1.amazonaws.com/prophunt.prod.fs/projects/6800f9ee06c6c262670d0e97/images/coverImage/0.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kothanur%20North%20Bengaluru",
    blurb:
      "An area-level abandoned-building watchlist entry, based on public reports of stalled/under-construction structures. No trespass pins; use only public roads and verified guided access.",
    groups: [
      { day: "Saturday", date: "18 Jul", time: "4:30 PM", people: 4 },
      { day: "Sunday", date: "26 Jul", time: "8:00 AM", people: 6 },
    ],
    tips: [
      "Do not enter unfinished buildings, locked compounds, or disputed private property.",
      "Use this for photo walks from public streets only.",
      "Avoid night visits and report unsafe structures instead of exploring them.",
    ],
    reviews: [
      {
        user: "Community visitor",
        rating: "3.7",
        text: "Interesting architecture from the road, but definitely not an entry spot.",
        photo:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const savedSuggestedSpots = JSON.parse(localStorage.getItem("put1meetSuggestedSpots") || "[]");
if (Array.isArray(savedSuggestedSpots)) {
  spots.push(...savedSuggestedSpots);
}

const publicProfiles = [];

function hydrateSpotGroups(spot, spotIndex) {
  spot.groups.forEach((group, groupIndex) => {
    group.id = `${spot.id}-${group.date.toLowerCase().replace(/\s+/g, "-")}-${groupIndex}`;
    group.attendees = [];
  });
  if (spot.groups.some((group) => group.id === `${spot.id}-minor-test`)) return;
  spot.groups.push({
    day: "Test group",
    date: "No adult",
    time: "5:00 PM",
    people: 3,
    id: `${spot.id}-minor-test`,
    attendees: [],
  });
}

spots.forEach(hydrateSpotGroups);

const grid = document.querySelector("#spotGrid");
const drawer = document.querySelector("#drawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const drawerContent = document.querySelector("#drawerContent");
const closeDrawer = document.querySelector("#closeDrawer");
const authActions = document.querySelector("#authActions");
const authBackdrop = document.querySelector("#authBackdrop");
const authModal = document.querySelector("#authModal");
const closeAuth = document.querySelector("#closeAuth");
const authForm = document.querySelector("#authForm");
const authTitle = document.querySelector("#authTitle");
const authNote = document.querySelector("#authNote");
const authError = document.querySelector("#authError");
const otpBox = document.querySelector("#otpBox");
const otpStatus = document.querySelector("#otpStatus");
const verifiedPhone = document.querySelector("#verifiedPhone");
const emailVerifyBox = document.querySelector("#emailVerifyBox");
const emailVerifyStatus = document.querySelector("#emailVerifyStatus");
const profileSearch = document.querySelector("#profileSearch");
const searchResults = document.querySelector("#searchResults");
let authMode = "signup";
let otpState = { code: "", phone: "", verified: false };
let pendingJoin = null;
let currentUser = JSON.parse(localStorage.getItem("put1meetUser") || "null");
const joinedGroups = new Set(JSON.parse(localStorage.getItem("put1meetJoinedGroups") || "[]"));
const followedPeople = new Set(JSON.parse(localStorage.getItem("put1meetFollowedPeople") || "[]"));
const chatStore = JSON.parse(localStorage.getItem("put1meetChats") || "{}");
const uploadStore = JSON.parse(localStorage.getItem("put1meetUploads") || "{}");
const reviewStore = JSON.parse(localStorage.getItem("put1meetMeetReviews") || "{}");
const siteRoleStore = JSON.parse(localStorage.getItem("put1meetSiteRoles") || "{}");
const removedDummyProfileNames = [
  "Aarav",
  "Diya",
  "Kabir",
  "Meera",
  "Rohan",
  "Sana",
  "Neil",
  "Tara",
  "Ishan",
  "Rhea",
  "Aditya",
  "Naina",
  "Pranav",
  "Zoya",
  "Vivaan",
  "Aisha",
  "Reyansh",
  "Kiara",
  "Arjun",
  "Sara",
  "Yash",
  "Anvi",
  "Krish",
  "Tanya",
  "Arya",
  "Sahil",
  "Maya",
  "Dhruv",
  "Ria",
  "Dev",
  "Niv",
];
const removedDummyProfileIds = new Set(removedDummyProfileNames.map((name) => name.toLowerCase()));
let activeSpotId = null;
let activeAction = null;
let activeChatKey = null;
let activeChatMeta = null;
let groupSafetyNotice = "";
const chatBackdrop = document.querySelector("#chatBackdrop");
const chatModal = document.querySelector("#chatModal");
const closeChat = document.querySelector("#closeChat");
const chatContent = document.querySelector("#chatContent");

function purgeDummyProfileData() {
  removedDummyProfileIds.forEach((id) => followedPeople.delete(id));
  saveFollowedPeople();
  let changedChats = false;
  Object.keys(chatStore).forEach((key) => {
    const directId = key.startsWith("dm-") ? key.replace("dm-", "") : "";
    if (removedDummyProfileIds.has(directId)) {
      delete chatStore[key];
      changedChats = true;
      return;
    }
    const filtered = (chatStore[key] || []).filter((message) => !removedDummyProfileNames.includes(message.sender));
    if (filtered.length !== (chatStore[key] || []).length) {
      chatStore[key] = filtered;
      changedChats = true;
    }
  });
  if (changedChats) saveObject("put1meetChats", chatStore);
}

function saveJoinedGroups() {
  localStorage.setItem("put1meetJoinedGroups", JSON.stringify([...joinedGroups]));
}

function saveFollowedPeople() {
  localStorage.setItem("put1meetFollowedPeople", JSON.stringify([...followedPeople]));
}

function saveObject(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readPhotoFile(file) {
  if (!file) return Promise.resolve("");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function saveSuggestedSpots() {
  localStorage.setItem("put1meetSuggestedSpots", JSON.stringify(savedSuggestedSpots));
}

function saveSiteRoles() {
  localStorage.setItem("put1meetSiteRoles", JSON.stringify(siteRoleStore));
}

function saveCurrentUser() {
  if (!currentUser) return;
  localStorage.setItem("put1meetUser", JSON.stringify(currentUser));
  localStorage.setItem("put1meetLastUser", JSON.stringify(currentUser));
  const username = normalizeUsername(currentUser.username || "");
  if (!username) return;
  const accounts = getAccountStore();
  if (accounts[username]) {
    accounts[username].user = currentUser;
    saveAccountStore(accounts);
  }
}

function normalizeUsername(username = "") {
  return username.trim().toLowerCase().replace(/[^a-z0-9_.]/g, "");
}

function getAccountStore() {
  return JSON.parse(localStorage.getItem("put1meetAccounts") || "{}");
}

function saveAccountStore(accounts) {
  localStorage.setItem("put1meetAccounts", JSON.stringify(accounts));
}

function profileRowToPerson(row) {
  return normalizePerson({
    id: row.id,
    username: row.username || "",
    name: row.name || row.username || "Explorer",
    age: Number(row.age || 18),
    gender: row.gender || "Prefer not to say",
    email: row.email || "",
    phone: row.phone || "",
    instagram: row.instagram || "",
    bio: row.bio || "",
    placesVisited: Number(row.places_visited || 0),
    preferredVibe: row.preferred_vibe || "heritage",
    randomRequests: row.random_requests || "yes",
    siteRole: row.site_role || "member",
    relationship: "explorer",
  });
}

function makeSupabaseProfile(user, username = "") {
  const meta = user?.user_metadata || {};
  return {
    username: meta.username || username || "",
    name: meta.name || meta.full_name || username || "Explorer",
    age: Number(meta.age || 18),
    gender: meta.gender || "Prefer not to say",
    email: user?.email || meta.email || "",
    emailVerified: Boolean(user?.email_confirmed_at),
    phone: meta.phone || "",
    phoneVerified: Boolean(meta.phoneVerified),
    instagram: meta.instagram || "",
    bio: meta.bio || "",
    placesVisited: Number(meta.placesVisited || 0),
    preferredVibe: meta.preferredVibe || "heritage",
    randomRequests: meta.randomRequests || "yes",
    supabaseUserId: user?.id || "",
  };
}

async function syncSupabaseSession() {
  if (!supabaseClient) return;
  const { data } = await supabaseClient.auth.getSession();
  if (!data?.session?.user) return;
  currentUser = { ...(currentUser || {}), ...makeSupabaseProfile(data.session.user, currentUser?.username) };
  localStorage.setItem("put1meetUser", JSON.stringify(currentUser));
  localStorage.setItem("put1meetLastUser", JSON.stringify(currentUser));
  await loadPublicProfiles();
  renderAuthActions();
}

async function hasSupabaseSession() {
  if (!supabaseClient) return false;
  const { data } = await supabaseClient.auth.getSession();
  return Boolean(data?.session?.user);
}

async function loadPublicProfiles() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, name, age, gender, email, phone, instagram, bio, places_visited, preferred_vibe, random_requests, site_role")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error || !Array.isArray(data)) return;
  publicProfiles.splice(0, publicProfiles.length, ...data.map(profileRowToPerson));
}

async function saveProfileToSupabase(profile) {
  if (!supabaseClient || !profile?.supabaseUserId) return;
  const signedIn = await hasSupabaseSession();
  if (!signedIn) return;
  await supabaseClient.from("profiles").upsert({
    id: profile.supabaseUserId,
    username: profile.username,
    name: profile.name,
    age: profile.age,
    gender: profile.gender,
    email: profile.email,
    phone: profile.phone,
    instagram: profile.instagram,
    bio: profile.bio,
    places_visited: profile.placesVisited,
    preferred_vibe: profile.preferredVibe,
    random_requests: profile.randomRequests,
    site_role: profile.siteRole || "member",
    updated_at: new Date().toISOString(),
  });
}

function usernameIsTaken(username, currentUsername = "") {
  const normalized = normalizeUsername(username);
  const current = normalizeUsername(currentUsername);
  if (!normalized || normalized === current) return false;
  const accounts = getAccountStore();
  const profileNames = publicProfiles.map((person) => normalizeUsername(person.username || person.name || ""));
  return Boolean(accounts[normalized]) || profileNames.includes(normalized);
}

function setAuthError(message = "") {
  authError.hidden = !message;
  authError.textContent = message;
}

function normalizePerson(person, index = 0) {
  const handle = person.instagram || "";
  return {
    id: person.id || person.name.toLowerCase().replace(/\s+/g, "-"),
    instagram: handle,
    placesVisited: person.placesVisited ?? 0,
    bio: person.bio || "",
    photos: person.photos || [],
    ...person,
  };
}

function getCurrentProfile() {
  if (!currentUser) return null;
  return normalizePerson({
    id: "me",
    instagram: currentUser.instagram || "",
    placesVisited: Number(currentUser.placesVisited || 0),
    bio: currentUser.bio || "",
    preferredVibe: currentUser.preferredVibe || "heritage",
    randomRequests: currentUser.randomRequests || "yes",
    photos: currentUser.photos || [],
    ...currentUser,
  });
}

function isProfileComplete(user = currentUser) {
  const isCurrentAccount = Boolean(user && (user === currentUser || user.id === "me"));
  return Boolean(
    user?.instagram &&
      user?.bio &&
      Number(user?.placesVisited) >= 0 &&
      user?.preferredVibe &&
      user?.randomRequests &&
      (!isCurrentAccount || (user?.phoneVerified && user?.emailVerified)),
  );
}

function normalizePhone(phone = "") {
  return phone.replace(/[^\d+]/g, "");
}

function phoneLooksValid(phone = "") {
  return phone.replace(/\D/g, "").length >= 10;
}

function setOtpMessage(message, verified = false) {
  otpStatus.textContent = message;
  otpBox.classList.toggle("verified", verified);
  verifiedPhone.hidden = !verified;
  verifiedPhone.textContent = verified ? `Verified phone: ${authForm.phone.value}` : "";
}

function setEmailVerifyMessage(message, verified = false) {
  emailVerifyStatus.textContent = message;
  emailVerifyBox.classList.toggle("verified", verified);
}

function syncVerificationUi() {
  const isCompletingExistingProfile = Boolean(currentUser);
  const phone = normalizePhone(authForm.phone.value);
  const phoneAlreadyVerified =
    isCompletingExistingProfile && currentUser.phoneVerified && phone === normalizePhone(currentUser.phone || "");

  authForm.phone.closest("label").hidden = authMode === "signin";
  otpBox.hidden = authMode === "signin";
  emailVerifyBox.hidden = !isCompletingExistingProfile;

  if (authMode === "signin") return;

  if (phoneAlreadyVerified) {
    otpState = { ...otpState, phone, verified: true };
    setOtpMessage(`Phone verified: ${currentUser.phone}`, true);
  } else if (otpState.verified && otpState.phone === phone) {
    setOtpMessage("Phone number verified.", true);
  } else {
    otpState = { ...otpState, phone, verified: false };
    setOtpMessage("Send an OTP before creating your account.", false);
  }

  if (!isCompletingExistingProfile) return;
  if (currentUser.emailVerified) {
    setEmailVerifyMessage(`Verified: ${currentUser.email}`, true);
  } else {
    setEmailVerifyMessage("Verify this later from Complete profile.", false);
  }
}

function setAuthFieldVisible(name, visible) {
  const field = authForm.elements[name];
  if (!field) return;
  const wrapper = field.closest("label");
  if (wrapper) wrapper.hidden = !visible;
  field.disabled = !visible;
  if (!visible) field.required = false;
}

function syncAuthModeFields() {
  const isSignin = authMode === "signin";
  ["email", "name", "age", "gender", "phone", "otp", "instagram", "bio", "placesVisited", "preferredVibe", "randomRequests"].forEach(
    (name) => setAuthFieldVisible(name, !isSignin),
  );
  authForm.username.disabled = false;
  authForm.username.required = true;
  authForm.password.disabled = false;
  authForm.password.required = isSignin || !currentUser;
  authForm.password.autocomplete = isSignin ? "current-password" : "new-password";
  authForm.password.placeholder = isSignin ? "Your password" : "Make a password";
  authForm.name.required = !isSignin;
  authForm.age.required = !isSignin;
  authForm.gender.required = !isSignin;
  authForm.email.required = !isSignin;
  authForm.phone.required = !isSignin;
  otpBox.hidden = isSignin;
  emailVerifyBox.hidden = isSignin || !currentUser;
  authForm.querySelector('button[type="submit"]').textContent = isSignin ? "Sign in" : "Continue";
}

function profileInitials(user) {
  return user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderAuthActions() {
  if (currentUser) {
    const profile = getCurrentProfile();
    const notificationCount = getMessengerNotificationCount();
    authActions.innerHTML = `
      <button class="messenger-button" type="button" data-open-inbox aria-label="Open messenger">
        <span></span>
        ${notificationCount ? `<strong>${notificationCount}</strong>` : ""}
      </button>
      <button class="profile-chip" type="button" data-my-profile>
        <span class="avatar">${profileInitials(profile)}</span>
        <span>${profile.name}${roleBadgeMarkup(profile)}</span>
      </button>
      ${
        isProfileComplete()
          ? ""
          : '<button class="auth-button" type="button" data-complete-profile>Complete profile</button>'
      }
      <button class="auth-button" type="button" data-open-settings>Settings</button>
      <button class="auth-button primary-lite" type="button" data-signout>Sign out</button>
    `;
    return;
  }

  authActions.innerHTML = `
    <button class="auth-button" type="button" data-open-auth="signin">Sign in</button>
    <button class="auth-button primary-lite" type="button" data-open-auth="signup">Sign up</button>
  `;
}

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authTab === mode);
  });
  authTitle.textContent = mode === "signup" ? (currentUser ? "Complete your profile" : "Create your profile") : "Sign in";
  authNote.textContent =
    mode === "signup"
      ? currentUser
        ? "Finish your details here. Email verification can be done now, but phone must stay verified."
        : "Choose a username, password, and verify your phone before your account is created."
      : "Use your username and password to sign in.";
  setAuthError("");
  syncVerificationUi();
  syncAuthModeFields();
}

function openAuth(mode = "signup") {
  setAuthMode(mode);
  if (currentUser) {
    authForm.username.value = currentUser.username || "";
    authForm.name.value = currentUser.name || "";
    authForm.age.value = currentUser.age || "";
    authForm.gender.value = currentUser.gender || "";
    authForm.email.value = currentUser.email || "";
    authForm.phone.value = currentUser.phone || "";
    authForm.instagram.value = currentUser.instagram || "";
    authForm.bio.value = currentUser.bio || "";
    authForm.placesVisited.value = currentUser.placesVisited ?? "";
    authForm.preferredVibe.value = currentUser.preferredVibe || "heritage";
    authForm.randomRequests.value = currentUser.randomRequests || "yes";
  } else {
    authForm.reset();
  }
  authForm.password.value = "";
  syncVerificationUi();
  syncAuthModeFields();
  authBackdrop.hidden = false;
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
}

function hideAuth() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
  authBackdrop.hidden = true;
}

const fallbackImages = {
  abandoned:
    "https://bengaluruprayana.com/wp-content/uploads/2023/10/Discovering-Devanahalli-Fort-Unraveling-the-History-of-Bangalores-Ancient-Stronghold.jpeg",
  hills:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise%20at%20Nandi%20Hills.jpg?width=1200",
  heritage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Old%20Bangalore%20Fort%2C%20Inside%20View.JPG?width=1200",
  nature:
    "https://explore-bangalore-menu.s3.ap-south-1.amazonaws.com/parks/turahalli-forest/image-1.jpg",
  night:
    "https://images.bhaskarassets.com/web2images/1884/2025/04/14/kempegowda-international-airport-bengaluru_1744617117.jpg",
};

function fallbackImageFor(spot) {
  const tag = spot.tags.find((item) => fallbackImages[item]);
  return fallbackImages[tag] || fallbackImages.heritage;
}

function renderSpots(filter = "all") {
  const visible = filter === "all" ? spots : spots.filter((spot) => spot.tags.includes(filter));
  grid.innerHTML = visible
    .map(
      (spot) => `
        <article class="spot-card">
          <img src="${spot.image}" alt="${spot.name}" loading="lazy" referrerpolicy="no-referrer" style="object-position: ${spot.imagePosition || "center"};" onerror="this.onerror=null; this.src='${fallbackImageFor(spot)}';">
          <div class="spot-body">
            <div class="meta-row">
              <span class="pill">${spot.area}</span>
              <span class="pill">${spot.mood}</span>
            </div>
            <h3>${spot.name}</h3>
            <p>${spot.blurb}</p>
            <div class="card-actions">
              <button data-action="tips" data-id="${spot.id}">Tips</button>
              <button data-action="reviews" data-id="${spot.id}">Reviews</button>
              <a class="location-button" href="${spot.mapUrl}" target="_blank" rel="noopener">Location</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function groupMarkup(spot) {
  const defaultMinAge = currentUser?.defaultMinAge || 14;
  const defaultMaxAge = currentUser?.defaultMaxAge || 80;
  const defaultGender = currentUser?.defaultGroupGender || "any";
  return `
    <section class="drawer-section">
      <div class="group-section-head">
        <h4>Upcoming groups</h4>
        <button class="mini-button secondary" data-toggle-create-group="${spot.id}">Make new group</button>
      </div>
      ${groupSafetyNotice ? `<p class="safety-warning">${groupSafetyNotice}</p>` : ""}
      <form class="create-group-form" data-create-group-form="${spot.id}" hidden>
        <input name="day" placeholder="Day" aria-label="Group day" required>
        <input name="date" placeholder="Date" aria-label="Group date" required>
        <input name="time" placeholder="Time" aria-label="Group time" required>
        <input name="minAge" inputmode="numeric" min="14" max="80" placeholder="Min age" value="${defaultMinAge}" aria-label="Minimum age">
        <input name="maxAge" inputmode="numeric" min="14" max="80" placeholder="Max age" value="${defaultMaxAge}" aria-label="Maximum age">
        <select name="gender" aria-label="Allowed gender">
          <option value="any" ${defaultGender === "any" ? "selected" : ""}>Any gender</option>
          <option value="Female" ${defaultGender === "Female" ? "selected" : ""}>Female</option>
          <option value="Male" ${defaultGender === "Male" ? "selected" : ""}>Male</option>
          <option value="Non-binary" ${defaultGender === "Non-binary" ? "selected" : ""}>Non-binary</option>
          <option value="Prefer not to say" ${defaultGender === "Prefer not to say" ? "selected" : ""}>Prefer not to say</option>
        </select>
        <button class="mini-button secondary" type="submit">Create</button>
      </form>
      ${spot.groups
        .filter((group) => groupVisibleToCurrentUser(group))
        .map(
          (group) => {
            const joined = joinedGroups.has(group.id);
            const attendees = getGroupAttendees(group, joined);
            const blockedForMinor = !joined && currentUser && !canCurrentUserJoinGroup(group);
            return `
            <div class="meet-item" data-group-card="${group.id}">
              <div class="meet-main">
                <strong>${group.day}, ${group.date} at ${group.time}</strong>
                <span>${attendees.length} people going</span>
                ${criteriaSummary(group)}
                ${blockedForMinor ? '<small class="minor-note">Needs at least one 18+ person for under-18 members.</small>' : ""}
              </div>
              <button class="join ${joined ? "leave" : ""}" data-join-group="${group.id}" data-spot-id="${spot.id}" ${blockedForMinor ? "disabled" : ""}>
                ${joined ? "Leave" : "Join"}
              </button>
              ${
                joined
                  ? `
                    <div class="group-tools">
                      <button class="mini-button secondary" data-group-chat="${group.id}" data-spot-id="${spot.id}">Group chat</button>
                      <button class="mini-button gold" data-after-meet="${group.id}">Review / upload pics</button>
                    </div>
                    ${attendeeMarkup(attendees)}
                    ${afterMeetMarkup(spot, group)}
                  `
                  : ""
              }
            </div>
          `;
          },
        )
        .join("") || '<p class="muted-small">No groups match your profile settings right now.</p>'}
    </section>
  `;
}

function getGroupAttendees(group, joined = joinedGroups.has(group.id)) {
  const people = group.attendees.map((person, index) => normalizePerson(person, index));
  if (joined && currentUser) return [...people, getCurrentProfile()];
  return people;
}

function groupHasAdult(group) {
  return getGroupAttendees(group, false).some((person) => Number(person.age) >= 18);
}

function currentUserNeedsAdult() {
  return currentUser && Number(currentUser.age) < 18;
}

function canCurrentUserJoinGroup(group) {
  return !currentUserNeedsAdult() || groupHasAdult(group);
}

function groupMatchesCurrentUserCriteria(group) {
  if (!group.criteria) return true;
  if (!currentUser) return false;
  const age = Number(currentUser.age);
  const minAge = Number(group.criteria.minAge || 0);
  const maxAge = Number(group.criteria.maxAge || 99);
  const gender = group.criteria.gender || "any";
  return age >= minAge && age <= maxAge && (gender === "any" || currentUser.gender === gender);
}

function groupVisibleToCurrentUser(group) {
  return joinedGroups.has(group.id) || groupMatchesCurrentUserCriteria(group);
}

function criteriaSummary(group) {
  if (!group.criteria) return "";
  const gender = group.criteria.gender === "any" ? "any gender" : group.criteria.gender;
  return `<small class="criteria-note">${group.criteria.minAge}-${group.criteria.maxAge} yrs · ${gender}</small>`;
}

const defaultSiteRoles = {};

function getSiteRole(person) {
  if (!person) return "member";
  const username = normalizeUsername(person.username || person.name || "");
  if (person.id === "me") {
    return currentUser?.siteRole || siteRoleStore.me || (username.includes("rehan") ? "owner" : "member");
  }
  return siteRoleStore[person.id] || person.siteRole || defaultSiteRoles[person.id] || "member";
}

function roleBadgeMarkup(person) {
  const role = getSiteRole(person);
  if (role === "member") return "";
  return `<span class="role-badge ${role}">${role}</span>`;
}

function canManageSiteRoles() {
  return getSiteRole(getCurrentProfile()) === "owner";
}

function siteRoleDescription(person) {
  const role = getSiteRole(person);
  const descriptions = {
    owner: "Website owner - can manage admins, moderators, reports, and settings.",
    admin: "Website admin - can review reports, manage listings, and help keep put1meet safe.",
    moderator: "Website moderator - can review requests, reports, and flagged spot details.",
    member: "Community member",
  };
  return descriptions[role] || descriptions.member;
}

function roleSelectMarkup(person) {
  const role = getSiteRole(person);
  return `
    <label class="role-select-row">
      <span>
        <strong>${person.name}</strong>
        <small>${person.instagram || getRelationshipLabel(person)}</small>
      </span>
      <select name="siteRole-${person.id}">
        <option value="member" ${role === "member" ? "selected" : ""}>Member</option>
        <option value="moderator" ${role === "moderator" ? "selected" : ""}>Moderator</option>
        <option value="admin" ${role === "admin" ? "selected" : ""}>Admin</option>
      </select>
    </label>
  `;
}

function siteRoleManagerMarkup() {
  const people = getAllProfiles()
    .filter((person) => person.id !== "me")
    .filter((person, index, list) => list.findIndex((item) => item.id === person.id) === index)
    .slice(0, 8);
  return `
    <div class="role-manager">
      <p class="muted-small">Assign website permissions for trusted people.</p>
      ${people.map(roleSelectMarkup).join("")}
    </div>
  `;
}

function setGroupSafetyNotice(message) {
  groupSafetyNotice = message;
  window.setTimeout(() => {
    if (groupSafetyNotice === message) groupSafetyNotice = "";
  }, 5000);
}

function attendeeMarkup(attendees) {
  return `
    <div class="attendees">
      ${attendees
        .map(
          (person) => {
            return `
            <div class="attendee-row">
              <span class="avatar">${profileInitials(person)}</span>
              <div>
                <button class="link-button" data-view-profile="${person.id}">${person.name}</button>
                ${roleBadgeMarkup(person)}
                <span>${person.age} years old - ${person.gender}</span>
              </div>
              <div class="attendee-actions">
                ${
                  person.id === "me"
                    ? ""
                    : `<button class="mini-button" data-direct-chat="${person.id}">Text</button>`
                }
              </div>
            </div>
          `;
          },
        )
        .join("")}
    </div>
  `;
}

function afterMeetMarkup(spot, group) {
  const uploads = uploadStore[group.id] || [];
  const meetReviews = reviewStore[group.id] || [];
  return `
    <div class="after-meet" data-after-panel="${group.id}" hidden>
      <h4>After the meet</h4>
      <p class="muted-small">Once the meetup is done, add a review and upload photos for everyone to see.</p>
      <form class="review-form" data-review-form="${group.id}" data-spot-id="${spot.id}">
        <input name="rating" inputmode="decimal" placeholder="4.8" aria-label="Rating out of 5" required>
        <input name="text" placeholder="How was the meet?" aria-label="Review text" required>
        <button class="mini-button secondary" type="submit">Post</button>
      </form>
      <div class="upload-row">
        <input type="file" accept="image/*" data-photo-input="${group.id}" aria-label="Upload meetup photo">
        <button class="mini-button gold" data-photo-upload="${group.id}" data-spot-id="${spot.id}">Upload pic</button>
      </div>
      ${meetReviews
        .map(
          (review) => `
            <div class="review">
              <strong>${review.user} rated ${review.rating}/5</strong>
              <span>${review.text}</span>
            </div>
          `,
        )
        .join("")}
      ${
        uploads.length
          ? `<div class="photo-grid">${uploads
              .map((photo) => `<img src="${photo}" alt="Uploaded meetup photo">`)
              .join("")}</div>`
          : '<p class="muted-small">No uploaded photos yet.</p>'
      }
    </div>
  `;
}

function tipsMarkup(spot) {
  return `
    <section class="drawer-section">
      <h4>Tips</h4>
      <ul class="tip-list">
        ${spot.tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    </section>
  `;
}

function reviewsMarkup(spot) {
  return `
    <section class="drawer-section">
      <h4>Reviews and photos</h4>
      ${spot.reviews
        .map(
          (review) => `
            <div class="review">
              <strong>${review.user} rated ${review.rating}/5</strong>
              <span>${review.text}</span>
              <img src="${review.photo}" alt="Photo from ${review.user}'s review" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallbackImageFor(spot)}';">
            </div>
          `,
        )
        .join("")}
    </section>
  `;
}

function findGroup(groupId) {
  for (const spot of spots) {
    const group = spot.groups.find((item) => item.id === groupId);
    if (group) return { spot, group };
  }
  return null;
}

function findPerson(personId) {
  if (personId === "me" && currentUser) return getCurrentProfile();
  for (const spot of spots) {
    for (const group of spot.groups) {
      const person = getGroupAttendees(group, false).find((item) => item.id === personId);
      if (person) return person;
    }
  }
  return null;
}

function getAllProfiles() {
  const profiles = new Map();
  if (currentUser) profiles.set("me", getCurrentProfile());
  publicProfiles.forEach((person) => {
    if (person.id !== currentUser?.supabaseUserId) profiles.set(person.id, person);
  });
  spots.forEach((spot) => {
    spot.groups.forEach((group) => {
      getGroupAttendees(group, false).forEach((person) => profiles.set(person.id, person));
    });
  });
  return [...profiles.values()];
}

function renderProfileSearch(query) {
  const term = query.trim().toLowerCase();
  if (!term) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }
  const matches = getAllProfiles()
    .filter((person) =>
      [person.name, person.instagram, person.bio, person.relationship]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(term)),
    )
    .slice(0, 6);

  searchResults.innerHTML = matches.length
    ? matches
        .map(
          (person) => `
            <button type="button" data-search-profile="${person.id}">
              <span class="avatar">${profileInitials(person)}</span>
              <span>
                <strong>${person.name}${roleBadgeMarkup(person)}</strong>
                <small>${person.instagram || "No Instagram"} · ${getRelationshipLabel(person)}</small>
              </span>
            </button>
          `,
        )
        .join("")
    : '<p>No profiles found.</p>';
  searchResults.hidden = false;
}

function getJoinedGroupEntries() {
  return [...joinedGroups]
    .map((groupId) => findGroup(groupId))
    .filter(Boolean);
}

function groupLabel(spot, group) {
  return `${spot.name} - ${group.day}, ${group.date}`;
}

function getSharedGroupsWithPerson(personId) {
  return getJoinedGroupEntries()
    .filter(({ group }) =>
      getGroupAttendees(group, true).some((person) => person.id === personId),
    )
    .map(({ spot, group }) => groupLabel(spot, group));
}

function getDmEntries() {
  return Object.entries(chatStore)
    .filter(([key, messages]) => key.startsWith("dm-") && messages.length)
    .map(([key, messages]) => {
      const person = findPerson(key.replace("dm-", ""));
      if (person) {
        cleanDirectMessageSeed(key, { kind: "Direct message", title: person.name });
        messages = chatStore[key] || [];
      }
      return { key, person, messages };
    })
    .filter((entry) => entry.person && entry.messages.length);
}

function isTrustedPerson(person) {
  return ["following", "follower", "mutual"].includes(person.relationship);
}

function getTrustedDmEntries() {
  return getDmEntries().filter((entry) => isTrustedPerson(entry.person));
}

function getRequestDmEntries() {
  const savedRandomDms = getDmEntries().filter((entry) => !isTrustedPerson(entry.person));
  return savedRandomDms;
}

function getRelationshipLabel(person) {
  const labels = {
    following: "You follow each other nearby",
    follower: "Follows you",
    mutual: "Mutual explorer",
    random: "Request",
    explorer: "Explorer",
  };
  return labels[person.relationship] || "Explorer";
}

function getFollowerCount(person) {
  if (person.id === "me") return 0;
  return followedPeople.has(person.id) ? 1 : 0;
}

function getFollowingCount(person) {
  if (person.id === "me") return followedPeople.size;
  return 0;
}

function getMutualProfiles(person) {
  const allProfiles = getAllProfiles().filter((profile) => profile.id !== "me" && profile.id !== person.id);
  const mutuals = allProfiles.filter((profile) => profile.relationship === "mutual" || followedPeople.has(profile.id));
  if (person.id === "me") return mutuals;
  if (person.relationship === "mutual" || followedPeople.has(person.id)) {
    return mutuals.slice(0, 4);
  }
  return mutuals.slice(0, 2);
}

function getMutualCount(person) {
  if (person.id === "me") return 0;
  return getMutualProfiles(person).length + (person.relationship === "follower" ? 1 : 0);
}

function mutualMarkup(person) {
  const mutuals = getMutualProfiles(person);
  if (!mutuals.length && person.id !== "me") {
    return '<p class="muted-small">No mutuals yet. Follow more explorers to see shared people here.</p>';
  }
  if (!mutuals.length) return '<p class="muted-small">No mutuals yet.</p>';
  const handles = mutuals.slice(0, 3).map((mutual) => (mutual.instagram || `@${mutual.name}`).replace(/^@/, ""));
  const remaining = mutuals.length - handles.length;
  return `
    <button class="mutual-summary" type="button" data-open-mutuals="${person.id}">
      ${handles.join(", ")}${remaining > 0 ? ` and ${remaining} others` : ""}
    </button>
  `;
}

function preferenceLabel(value = currentUser?.preferredVibe || "heritage") {
  const labels = {
    heritage: "heritage and old-city walks",
    nature: "nature and sunrise spots",
    hills: "hills and viewpoints",
    abandoned: "abandoned-style public spots",
    night: "night vibe spots",
    all: "public and interesting spots",
  };
  return labels[value] || labels.heritage;
}

function getInviteCandidates() {
  const preferred = currentUser?.preferredVibe || "heritage";
  const allGroups = spots.flatMap((spot) =>
    spot.groups.map((group) => ({ spot, group })),
  );

  return allGroups
    .filter(({ spot, group }) => !joinedGroups.has(group.id))
    .filter(({ group }) => groupMatchesCurrentUserCriteria(group))
    .filter(({ spot }) => preferred === "all" || spot.tags.includes(preferred))
    .map(({ spot, group }, index) => {
      const inviter = normalizePerson(group.attendees[index % group.attendees.length], index);
      return {
        id: `${group.id}-${inviter.id}`,
        inviter,
        spot,
        group,
        type: inviter.relationship === "random" ? "request" : "invite",
      };
    });
}

function getInviteEntries() {
  return getInviteCandidates()
    .filter((invite) => invite.type === "invite")
    .slice(0, 3);
}

function getRequestEntries() {
  if (currentUser?.randomRequests === "no") return [];
  return getInviteCandidates()
    .filter((invite) => invite.type === "request")
    .slice(0, 3);
}

function getMessengerNotificationCount() {
  return Math.min(
    9,
    getTrustedDmEntries().length + getInviteEntries().length + getRequestEntries().length + getRequestDmEntries().length,
  );
}

function openProfile(personId) {
  const person = findPerson(personId);
  if (!person) return;
  const isMe = person.id === "me";
  const isFollowing = followedPeople.has(person.id);
  const mutualCount = getMutualCount(person);
  drawerContent.innerHTML = `
    <div class="profile-panel">
      ${!isProfileComplete(person) ? '<p class="complete-warning">Complete your profile so people know who they are meeting.</p>' : ""}
      <div class="insta-profile-head">
        <span class="profile-avatar">${profileInitials(person)}</span>
        <div class="profile-main">
          <div class="profile-title-row">
            <div>
              <h3>${person.name}${roleBadgeMarkup(person)}</h3>
              <span>${person.instagram || "Instagram not added"}</span>
            </div>
            ${
              isMe
                ? '<button class="mini-button secondary" data-complete-profile>Edit profile</button>'
                : `<button class="mini-button ${isFollowing ? "" : "gold"}" data-follow-person="${person.id}">
                    ${isFollowing ? "Following" : "Follow"}
                  </button>`
            }
          </div>
          <div class="insta-stats" aria-label="Profile stats">
            <div><strong>${person.photos?.length || 0}</strong><span>posts</span></div>
            <div><strong>${getFollowerCount(person)}</strong><span>followers</span></div>
            <div><strong>${getFollowingCount(person)}</strong><span>following</span></div>
            <div><strong>${mutualCount}</strong><span>mutuals</span></div>
          </div>
          <p class="profile-bio">
            <span class="site-role-line">${siteRoleDescription(person)}</span>
            <strong>${person.age} · ${person.gender}</strong>
            ${person.bio || "No bio added yet."}
          </p>
          <p class="muted-small">${person.placesVisited || 0} places visited</p>
        </div>
      </div>
      <div class="profile-actions">
        ${
          isMe
            ? '<button class="mini-button secondary" data-complete-profile>Complete profile</button>'
            : `
              <button class="mini-button secondary" data-direct-chat="${person.id}">Message</button>
              <button class="mini-button" data-view-profile="${person.id}">Mutuals</button>
            `
        }
      </div>
      <section class="drawer-section">
        <h4>Mutuals</h4>
        ${mutualMarkup(person)}
      </section>
      <section class="drawer-section">
        <h4>Uploaded pictures</h4>
        ${
          person.photos?.length
            ? `<div class="photo-grid">${person.photos
              .map((photo) => `<img src="${photo}" alt="${person.name} upload" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallbackImages.nature}';">`)
                .join("")}</div>`
            : '<p class="muted-small">No pictures uploaded yet.</p>'
        }
      </section>
    </div>
  `;
  drawerBackdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function openSettings() {
  if (!currentUser) {
    openAuth("signin");
    return;
  }
  const settings = {
    profileVisibility: currentUser.profileVisibility || "everyone",
    showAgeGender: currentUser.showAgeGender || "groups",
    showInstagram: currentUser.showInstagram || "followers",
    allowDmFrom: currentUser.allowDmFrom || "followers",
    inviteSource: currentUser.inviteSource || "followers",
    preferredVibe: currentUser.preferredVibe || "heritage",
    randomRequests: currentUser.randomRequests || "yes",
    defaultMinAge: currentUser.defaultMinAge || 14,
    defaultMaxAge: currentUser.defaultMaxAge || 80,
    defaultGroupGender: currentUser.defaultGroupGender || "any",
  };
  drawerContent.innerHTML = `
    <div class="profile-panel">
      <p class="section-kicker">Account</p>
      <h3>Settings</h3>
      <form class="settings-form" data-settings-form>
        <section class="settings-block">
          <h4>Privacy</h4>
          <label>
            Profile visibility
            <select name="profileVisibility">
              <option value="everyone" ${settings.profileVisibility === "everyone" ? "selected" : ""}>Everyone</option>
              <option value="followers" ${settings.profileVisibility === "followers" ? "selected" : ""}>Followers only</option>
              <option value="groups" ${settings.profileVisibility === "groups" ? "selected" : ""}>People in my groups</option>
            </select>
          </label>
          <label>
            Show age and gender
            <select name="showAgeGender">
              <option value="groups" ${settings.showAgeGender === "groups" ? "selected" : ""}>Only after joining same group</option>
              <option value="followers" ${settings.showAgeGender === "followers" ? "selected" : ""}>Followers only</option>
              <option value="everyone" ${settings.showAgeGender === "everyone" ? "selected" : ""}>Everyone</option>
            </select>
          </label>
          <label>
            Show Instagram
            <select name="showInstagram">
              <option value="followers" ${settings.showInstagram === "followers" ? "selected" : ""}>Followers only</option>
              <option value="groups" ${settings.showInstagram === "groups" ? "selected" : ""}>People in my groups</option>
              <option value="everyone" ${settings.showInstagram === "everyone" ? "selected" : ""}>Everyone</option>
              <option value="hidden" ${settings.showInstagram === "hidden" ? "selected" : ""}>Hide it</option>
            </select>
          </label>
          <label>
            Who can message me
            <select name="allowDmFrom">
              <option value="followers" ${settings.allowDmFrom === "followers" ? "selected" : ""}>Followers and mutuals</option>
              <option value="groups" ${settings.allowDmFrom === "groups" ? "selected" : ""}>People in my groups</option>
              <option value="everyone" ${settings.allowDmFrom === "everyone" ? "selected" : ""}>Everyone</option>
            </select>
          </label>
        </section>
        <section class="settings-block">
          <h4>Preferences</h4>
          <label>
            Meet invites
            <select name="inviteSource">
              <option value="followers" ${settings.inviteSource === "followers" ? "selected" : ""}>Followers and mutuals</option>
              <option value="groups" ${settings.inviteSource === "groups" ? "selected" : ""}>People in my groups</option>
              <option value="everyone" ${settings.inviteSource === "everyone" ? "selected" : ""}>Everyone including requests</option>
            </select>
          </label>
          <label>
            Preferred spots
            <select name="preferredVibe">
              <option value="heritage" ${settings.preferredVibe === "heritage" ? "selected" : ""}>Heritage and old-city walks</option>
              <option value="nature" ${settings.preferredVibe === "nature" ? "selected" : ""}>Nature and sunrise spots</option>
              <option value="hills" ${settings.preferredVibe === "hills" ? "selected" : ""}>Hills and viewpoints</option>
              <option value="abandoned" ${settings.preferredVibe === "abandoned" ? "selected" : ""}>Abandoned-style public spots</option>
              <option value="night" ${settings.preferredVibe === "night" ? "selected" : ""}>Night vibe spots</option>
              <option value="all" ${settings.preferredVibe === "all" ? "selected" : ""}>Anything public and interesting</option>
            </select>
          </label>
          <label>
            Random requests
            <select name="randomRequests">
              <option value="yes" ${settings.randomRequests === "yes" ? "selected" : ""}>Show requests matching my preferences</option>
              <option value="no" ${settings.randomRequests === "no" ? "selected" : ""}>Only people I follow or who follow me</option>
            </select>
          </label>
        </section>
        <section class="settings-block">
          <h4>Default group settings</h4>
          <div class="settings-grid">
            <label>Min age<input name="defaultMinAge" inputmode="numeric" min="14" max="80" value="${settings.defaultMinAge}"></label>
            <label>Max age<input name="defaultMaxAge" inputmode="numeric" min="14" max="80" value="${settings.defaultMaxAge}"></label>
          </div>
          <label>
            Gender
            <select name="defaultGroupGender">
              <option value="any" ${settings.defaultGroupGender === "any" ? "selected" : ""}>Any gender</option>
              <option value="Female" ${settings.defaultGroupGender === "Female" ? "selected" : ""}>Female</option>
              <option value="Male" ${settings.defaultGroupGender === "Male" ? "selected" : ""}>Male</option>
              <option value="Non-binary" ${settings.defaultGroupGender === "Non-binary" ? "selected" : ""}>Non-binary</option>
              <option value="Prefer not to say" ${settings.defaultGroupGender === "Prefer not to say" ? "selected" : ""}>Prefer not to say</option>
            </select>
          </label>
        </section>
        <section class="settings-block">
          <h4>Website role</h4>
          <p class="role-current">${roleBadgeMarkup(getCurrentProfile()) || '<span class="role-badge member">member</span>'} ${siteRoleDescription(getCurrentProfile())}</p>
          ${canManageSiteRoles() ? siteRoleManagerMarkup() : '<p class="muted-small">Only the website owner can change admin and moderator roles.</p>'}
        </section>
        <button class="mini-button secondary" type="submit">Save settings</button>
      </form>
    </div>
  `;
  drawerBackdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function openMutuals(personId) {
  const person = findPerson(personId);
  if (!person) return;
  const mutuals = getMutualProfiles(person);
  chatContent.innerHTML = `
    <div class="chat-panel">
      <p class="section-kicker">Mutuals</p>
      <h2>${person.name}</h2>
      <div class="mutual-list">
        ${
          mutuals.length
            ? mutuals
                .map(
                  (mutual) => `
                    <button class="inbox-item" type="button" data-mutual-profile="${mutual.id}">
                      <span class="avatar">${profileInitials(mutual)}</span>
                      <span>
                        <strong>${mutual.name}</strong>
                        <em>${mutual.instagram || "No Instagram"}</em>
                        <small>${getRelationshipLabel(mutual)}</small>
                      </span>
                    </button>
                  `,
                )
                .join("")
            : '<p class="muted-small">No mutual profiles yet.</p>'
        }
      </div>
    </div>
  `;
  chatBackdrop.hidden = false;
  chatModal.classList.add("open");
  chatModal.setAttribute("aria-hidden", "false");
}

function seedMessages(key, meta) {
  if (chatStore[key]) return chatStore[key];
  chatStore[key] = [];
  saveObject("put1meetChats", chatStore);
  return chatStore[key];
}

function cleanDirectMessageSeed(key, meta) {
  if (meta.kind !== "Direct message" || !chatStore[key]) return;
  const badStarterTexts = new Set([
    `Anyone planning transport for ${meta.title}?`,
    "I can meet near the metro and split a cab.",
  ]);
  const cleaned = chatStore[key].filter(
    (message) => !(["Diya", "Kabir"].includes(message.sender) && badStarterTexts.has(message.text)),
  );
  if (cleaned.length !== chatStore[key].length) {
    chatStore[key] = cleaned;
    saveObject("put1meetChats", chatStore);
  }
}

function openChat(key, meta) {
  if (!currentUser) {
    pendingJoin = null;
    openAuth("signup");
    return;
  }
  activeChatKey = key;
  activeChatMeta = meta;
  cleanDirectMessageSeed(key, meta);
  const messages = seedMessages(key, meta);
  const directProfileId = key.startsWith("dm-") ? key.replace("dm-", "") : "";
  chatContent.innerHTML = `
    <div class="chat-panel">
      <p class="section-kicker">${meta.kind}</p>
      ${
        directProfileId
          ? `<button class="chat-profile-title" data-chat-profile="${directProfileId}">
              <span class="avatar">${profileInitials(findPerson(directProfileId) || { name: meta.title })}</span>
              <span>${meta.title}</span>
            </button>`
          : `<h2>${meta.title}</h2>`
      }
      <div class="chat-list" id="chatList">
        ${
          messages.length
            ? messages
                .map(
                  (message) => `
                    <div class="message ${message.sender === currentUser.name ? "mine" : ""}">
                      <strong>${message.sender}</strong>
                      <span>${message.text}</span>
                    </div>
                  `,
                )
                .join("")
            : '<p class="muted-small">No messages here yet. Start the conversation.</p>'
        }
      </div>
      <form class="chat-form" id="chatForm">
        <input name="message" placeholder="Type a message..." aria-label="Message" required>
        <button class="mini-button secondary" type="submit">Send</button>
      </form>
    </div>
  `;
  chatBackdrop.hidden = false;
  chatModal.classList.add("open");
  chatModal.setAttribute("aria-hidden", "false");
}

function openInbox(mode = "messages") {
  if (!currentUser) {
    openAuth("signin");
    return;
  }
  const dms = getTrustedDmEntries();
  const groups = getJoinedGroupEntries();
  const invites = getInviteEntries();
  const requests = getRequestEntries();
  const requestDms = getRequestDmEntries();
  const isRequests = mode === "requests";
  const isInvites = mode === "invites";
  chatContent.innerHTML = `
    <div class="chat-panel">
      <div class="inbox-head">
        <div>
          <p class="section-kicker">Messenger</p>
          <h2>Inbox</h2>
        </div>
        <button class="requests-button ${isRequests ? "active" : ""}" data-inbox-tab="requests">
          Requests <span>${requests.length + requestDms.length}</span>
        </button>
      </div>
      <div class="inbox-tabs" role="group" aria-label="Messenger sections">
        <button class="${mode === "messages" ? "active" : ""}" data-inbox-tab="messages">People who texted you</button>
        <button class="${isInvites ? "active" : ""}" data-inbox-tab="invites">Meet invites</button>
      </div>
      ${
        mode === "messages"
          ? `
      <section class="inbox-section active">
        ${
          dms.length
            ? dms
                .map(
                  ({ key, person, messages }) => `
                    <button class="inbox-item" data-inbox-dm="${person.id}">
                      <span class="avatar">${profileInitials(person)}</span>
                      <span>
                        <strong>${person.name}</strong>
                        <em>${getSharedGroupsWithPerson(person.id)[0] || getRelationshipLabel(person)}</em>
                        <small>${messages.at(-1).sender === currentUser.name ? "You" : messages.at(-1).sender}: ${messages.at(-1).text}</small>
                      </span>
                    </button>
                  `,
                )
                .join("")
            : '<p class="muted-small">No one has texted you yet.</p>'
        }
      </section>
      `
          : ""
      }
      ${
        isInvites
          ? `
      <section class="inbox-section active">
        ${
          invites.length
            ? invites
                .map(
                  ({ inviter, spot, group }) => `
                    <div class="inbox-item invite-card">
                      <span class="avatar">${profileInitials(inviter)}</span>
                      <span>
                        <strong>${inviter.name} invited you</strong>
                        <em>${getRelationshipLabel(inviter)}</em>
                        <small>${groupLabel(spot, group)} at ${group.time}</small>
                      </span>
                      <button class="mini-button secondary" data-accept-invite="${group.id}">Join</button>
                    </div>
                  `,
                )
                .join("")
            : '<p class="muted-small">No invites from people you follow yet.</p>'
        }
        <div class="inbox-subsection">
          <h4>Groups you are in</h4>
          ${
            groups.length
              ? groups
                  .map(
                    ({ spot, group }) => `
                      <button class="inbox-item" data-inbox-group="${group.id}">
                        <span class="avatar">GC</span>
                        <span>
                          <strong>${spot.name}</strong>
                          <small>${group.day}, ${group.date} at ${group.time}</small>
                        </span>
                      </button>
                    `,
                  )
                  .join("")
              : '<p class="muted-small">Join a group to see it here.</p>'
          }
        </div>
      </section>
      `
          : ""
      }
      ${
        isRequests
          ? `
      <section class="inbox-section active">
        <h4>Message requests</h4>
        ${
          requestDms.length
            ? requestDms
                .map(
                  ({ person, messages }) => `
                    <button class="inbox-item request" data-inbox-dm="${person.id}">
                      <span class="avatar">${profileInitials(person)}</span>
                      <span>
                        <strong>${person.name}</strong>
                        <em>Not followed - matched your ${preferenceLabel()} preference</em>
                        <small>${messages.at(-1).sender === currentUser.name ? "You" : messages.at(-1).sender}: ${messages.at(-1).text}</small>
                      </span>
                    </button>
                  `,
                )
                .join("")
            : '<p class="muted-small">No message requests right now.</p>'
        }
        <div class="inbox-subsection">
          <h4>Meet requests</h4>
        ${
          requests.length
            ? requests
                .map(
                  ({ inviter, spot, group }) => `
                    <div class="inbox-item invite-card request">
                      <span class="avatar">${profileInitials(inviter)}</span>
                      <span>
                        <strong>${inviter.name} requested to meet</strong>
                        <em>Matched your ${preferenceLabel()} preference</em>
                        <small>${groupLabel(spot, group)} at ${group.time}</small>
                      </span>
                      <button class="mini-button gold" data-accept-invite="${group.id}">Accept</button>
                    </div>
                  `,
                )
                .join("")
            : '<p class="muted-small">No random requests match your preferences right now.</p>'
        }
        </div>
      </section>
      `
          : ""
      }
    </div>
  `;
  chatBackdrop.hidden = false;
  chatModal.classList.add("open");
  chatModal.setAttribute("aria-hidden", "false");
}

function hideChat() {
  chatModal.classList.remove("open");
  chatModal.setAttribute("aria-hidden", "true");
  chatBackdrop.hidden = true;
}

function rerenderActiveDrawer() {
  if (activeSpotId && activeAction) openDrawer(activeSpotId, activeAction);
}

function openDrawer(spotId, action) {
  const spot = spots.find((item) => item.id === spotId);
  activeSpotId = spotId;
  activeAction = action === "groups" ? "tips" : action;
  const sections = {
    tips: tipsMarkup(spot),
    reviews: reviewsMarkup(spot),
  };

  drawerContent.innerHTML = `
    <div class="drawer-spot-head">
      <div>
        <div class="meta-row">
          <span class="pill">${spot.area}</span>
          <span class="pill">${spot.mood}</span>
        </div>
        <h3>${spot.name}</h3>
        <p>${spot.blurb}</p>
      </div>
      <div class="drawer-actions">
        <button data-action="tips" data-id="${spot.id}">Tips</button>
        <button data-action="reviews" data-id="${spot.id}">Reviews</button>
        <a class="location-button" href="${spot.mapUrl}" target="_blank" rel="noopener">Location</a>
      </div>
    </div>
    ${sections[activeAction]}
  `;

  drawerBackdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function hideDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.hidden = true;
}

document.addEventListener("click", async (event) => {
  const searchedProfileButton = event.target.closest("[data-search-profile]");
  if (searchedProfileButton) {
    profileSearch.value = "";
    searchResults.hidden = true;
    openProfile(searchedProfileButton.dataset.searchProfile);
    return;
  }

  const chatProfileButton = event.target.closest("[data-chat-profile]");
  if (chatProfileButton) {
    hideChat();
    openProfile(chatProfileButton.dataset.chatProfile);
    return;
  }

  const mutualProfileButton = event.target.closest("[data-mutual-profile]");
  if (mutualProfileButton) {
    hideChat();
    openProfile(mutualProfileButton.dataset.mutualProfile);
    return;
  }

  const openMutualsButton = event.target.closest("[data-open-mutuals]");
  if (openMutualsButton) {
    openMutuals(openMutualsButton.dataset.openMutuals);
    return;
  }

  const followButton = event.target.closest("[data-follow-person]");
  if (followButton) {
    const personId = followButton.dataset.followPerson;
    if (followedPeople.has(personId)) {
      followedPeople.delete(personId);
    } else {
      followedPeople.add(personId);
    }
    saveFollowedPeople();
    openProfile(personId);
    return;
  }

  const toggleCreateGroupButton = event.target.closest("[data-toggle-create-group]");
  if (toggleCreateGroupButton) {
    const form = document.querySelector(
      `[data-create-group-form="${toggleCreateGroupButton.dataset.toggleCreateGroup}"]`,
    );
    if (form) form.hidden = !form.hidden;
    return;
  }

  const inboxTabButton = event.target.closest("[data-inbox-tab]");
  if (inboxTabButton) {
    openInbox(inboxTabButton.dataset.inboxTab);
    return;
  }

  const inboxButton = event.target.closest("[data-open-inbox]");
  if (inboxButton) {
    openInbox();
    return;
  }

  const settingsButton = event.target.closest("[data-open-settings]");
  if (settingsButton) {
    openSettings();
    return;
  }

  const inboxDmButton = event.target.closest("[data-inbox-dm]");
  if (inboxDmButton) {
    const person = findPerson(inboxDmButton.dataset.inboxDm);
    if (person) {
      openChat(`dm-${person.id}`, {
        kind: "Direct message",
        title: person.name,
      });
    }
    return;
  }

  const inboxGroupButton = event.target.closest("[data-inbox-group]");
  if (inboxGroupButton) {
    const match = findGroup(inboxGroupButton.dataset.inboxGroup);
    if (match) {
      openChat(`group-${match.group.id}`, {
        kind: "Group chat",
        title: `${match.spot.name} - ${match.group.day}, ${match.group.date}`,
      });
    }
    return;
  }

  const acceptInviteButton = event.target.closest("[data-accept-invite]");
  if (acceptInviteButton) {
    const match = findGroup(acceptInviteButton.dataset.acceptInvite);
    if (match && !canCurrentUserJoinGroup(match.group)) {
      setGroupSafetyNotice("Because your age is under 18, this meet needs at least one 18+ person before you can join.");
      hideChat();
      openDrawer(match.spot.id, "groups");
      return;
    }
    joinedGroups.add(acceptInviteButton.dataset.acceptInvite);
    saveJoinedGroups();
    renderAuthActions();
    openInbox(acceptInviteButton.textContent.trim() === "Accept" ? "requests" : "invites");
    return;
  }

  const myProfileButton = event.target.closest("[data-my-profile]");
  if (myProfileButton) {
    openProfile("me");
    return;
  }

  const completeProfileButton = event.target.closest("[data-complete-profile]");
  if (completeProfileButton) {
    openAuth("signup");
    return;
  }

  const openAuthButton = event.target.closest("[data-open-auth]");
  if (openAuthButton) {
    openAuth(openAuthButton.dataset.openAuth);
    return;
  }

  if (event.target.closest("[data-signout]")) {
    if (supabaseClient) await supabaseClient.auth.signOut();
    currentUser = null;
    joinedGroups.clear();
    localStorage.removeItem("put1meetUser");
    saveJoinedGroups();
    renderAuthActions();
    if (drawer.classList.contains("open")) hideDrawer();
    return;
  }

  const groupChatButton = event.target.closest("[data-group-chat]");
  if (groupChatButton) {
    const match = findGroup(groupChatButton.dataset.groupChat);
    if (match) {
      openChat(`group-${match.group.id}`, {
        kind: "Group chat",
        title: `${match.spot.name} - ${match.group.day}, ${match.group.date}`,
      });
    }
    return;
  }

  const directChatButton = event.target.closest("[data-direct-chat]");
  if (directChatButton) {
    const person = findPerson(directChatButton.dataset.directChat);
    if (person) {
      openChat(`dm-${person.id}`, {
        kind: "Direct message",
        title: person.name,
      });
    }
    return;
  }

  const profileButton = event.target.closest("[data-view-profile]");
  if (profileButton) {
    openProfile(profileButton.dataset.viewProfile);
    return;
  }

  const afterMeetButton = event.target.closest("[data-after-meet]");
  if (afterMeetButton) {
    const panel = document.querySelector(`[data-after-panel="${afterMeetButton.dataset.afterMeet}"]`);
    if (panel) panel.hidden = !panel.hidden;
    return;
  }

  const photoUploadButton = event.target.closest("[data-photo-upload]");
  if (photoUploadButton) {
    const groupId = photoUploadButton.dataset.photoUpload;
    const input = document.querySelector(`[data-photo-input="${groupId}"]`);
    const file = input?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadStore[groupId] = [...(uploadStore[groupId] || []), reader.result];
      if (currentUser) {
        currentUser.photos = [...(currentUser.photos || []), reader.result];
        localStorage.setItem("put1meetUser", JSON.stringify(currentUser));
      }
      saveObject("put1meetUploads", uploadStore);
      rerenderActiveDrawer();
      const refreshedPanel = document.querySelector(`[data-after-panel="${groupId}"]`);
      if (refreshedPanel) refreshedPanel.hidden = false;
    });
    reader.readAsDataURL(file);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    openDrawer(actionButton.dataset.id, actionButton.dataset.action);
    return;
  }

  const filterButton = event.target.closest(".filter");
  if (filterButton) {
    document.querySelectorAll(".filter").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderSpots(filterButton.dataset.filter);
    return;
  }

  const joinButton = event.target.closest("[data-join-group]");
  if (joinButton) {
    const groupId = joinButton.dataset.joinGroup;
    const spotId = joinButton.dataset.spotId;

    if (!currentUser) {
      pendingJoin = { groupId, spotId };
      openAuth("signup");
      return;
    }

    if (joinedGroups.has(groupId)) {
      joinedGroups.delete(groupId);
    } else {
      const match = findGroup(groupId);
      if (match && !canCurrentUserJoinGroup(match.group)) {
        setGroupSafetyNotice("Because your age is under 18, this meet needs at least one 18+ person before you can join.");
        openDrawer(spotId, "groups");
        return;
      }
      joinedGroups.add(groupId);
    }
    saveJoinedGroups();
    openDrawer(spotId, "groups");
  }
});

closeDrawer.addEventListener("click", hideDrawer);
drawerBackdrop.addEventListener("click", hideDrawer);
closeAuth.addEventListener("click", hideAuth);
authBackdrop.addEventListener("click", hideAuth);
closeChat.addEventListener("click", hideChat);
chatBackdrop.addEventListener("click", hideChat);

profileSearch.addEventListener("input", () => renderProfileSearch(profileSearch.value));
profileSearch.addEventListener("focus", () => renderProfileSearch(profileSearch.value));

document.addEventListener("click", (event) => {
  if (!event.target.closest(".profile-search")) {
    searchResults.hidden = true;
  }
});

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => setAuthMode(tab.dataset.authTab));
});

authForm.phone.addEventListener("input", syncVerificationUi);
authForm.email.addEventListener("input", () => {
  if (!currentUser) return;
  const changedEmail = authForm.email.value.trim() !== currentUser.email;
  setEmailVerifyMessage(
    changedEmail ? "Save the new email first, then verify it from Complete profile." : "Verify this later from Complete profile.",
    false,
  );
});

authForm.addEventListener("click", (event) => {
  if (event.target.closest("[data-send-otp]")) {
    const phone = normalizePhone(authForm.phone.value);
    if (!phoneLooksValid(phone)) {
      setOtpMessage("Enter a valid phone number first.", false);
      authForm.phone.focus();
      return;
    }
    otpState = {
      phone,
      code: String(Math.floor(100000 + Math.random() * 900000)),
      verified: false,
    };
    authForm.otp.value = "";
    setOtpMessage(`OTP sent to ${authForm.phone.value}. Demo code: ${otpState.code}`, false);
    authForm.otp.focus();
  }

  if (event.target.closest("[data-verify-otp]")) {
    const phone = normalizePhone(authForm.phone.value);
    if (!otpState.code || otpState.phone !== phone) {
      setOtpMessage("Send a fresh OTP for this phone number.", false);
      return;
    }
    if (authForm.otp.value.trim() !== otpState.code) {
      setOtpMessage("That OTP is not correct. Try again.", false);
      return;
    }
    otpState.verified = true;
    setOtpMessage("Phone number verified.", true);
  }

  if (event.target.closest("[data-send-email-verify]")) {
    if (!currentUser) return;
    const email = authForm.email.value.trim();
    if (!email || !email.includes("@")) {
      setEmailVerifyMessage("Enter a valid email address first.", false);
      authForm.email.focus();
      return;
    }
    currentUser = { ...currentUser, email, emailVerified: true };
    localStorage.setItem("put1meetUser", JSON.stringify(currentUser));
    setEmailVerifyMessage(`Verification link sent. Marked verified for demo: ${email}`, true);
    renderAuthActions();
  }
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(authForm);
  if (authMode === "signin") {
    const username = normalizeUsername(formData.get("username"));
    const rawLogin = String(formData.get("username") || "").trim();
    const password = formData.get("password");
    const account = getAccountStore()[username];
    if (supabaseClient) {
      const email = account?.user?.email || (rawLogin.includes("@") ? rawLogin : "");
      if (!email) {
        setAuthError("Use your email once on this device, then username sign in will work too.");
        return;
      }
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) {
        setAuthError(error.message || "Email or password is wrong.");
        return;
      }
      currentUser = { ...(account?.user || {}), ...makeSupabaseProfile(data.user, username) };
    } else {
      if (!account || account.password !== password) {
        setAuthError("Username or password is wrong.");
        return;
      }
      currentUser = account.user;
    }
    localStorage.setItem("put1meetUser", JSON.stringify(currentUser));
    localStorage.setItem("put1meetLastUser", JSON.stringify(currentUser));
    renderAuthActions();
    hideAuth();
    return;
  }
  const phone = normalizePhone(formData.get("phone") || "");
  const username = normalizeUsername(formData.get("username"));
  const password = formData.get("password");
  const accounts = getAccountStore();
  const existingPassword = accounts[normalizeUsername(currentUser?.username)]?.password || "";
  if (username.length < 3) {
    setAuthError("Username needs at least 3 letters or numbers.");
    authForm.username.focus();
    return;
  }
  if (usernameIsTaken(username, currentUser?.username)) {
    setAuthError("That username is already used. Try another one.");
    authForm.username.focus();
    return;
  }
  if (!currentUser && String(password).length < 6) {
    setAuthError("Password needs at least 6 characters.");
    authForm.password.focus();
    return;
  }
  if (currentUser && password && String(password).length < 6) {
    setAuthError("New password needs at least 6 characters.");
    authForm.password.focus();
    return;
  }
  const existingVerifiedPhone =
    currentUser?.phoneVerified && phone && phone === normalizePhone(currentUser.phone || "");
  if (authMode === "signup" && (!phoneLooksValid(phone) || (!otpState.verified && !existingVerifiedPhone))) {
    setOtpMessage("Verify your phone with OTP before continuing.", false);
    authForm.phone.focus();
    return;
  }
  const email = formData.get("email").trim();
  const emailVerified = currentUser?.email === email ? Boolean(currentUser?.emailVerified) : false;
  const profilePayload = {
    username,
    name: formData.get("name").trim(),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    email,
    phone: formData.get("phone").trim(),
    phoneVerified: authMode === "signup" ? true : Boolean(currentUser?.phoneVerified),
    instagram: formData.get("instagram").trim(),
    bio: formData.get("bio").trim(),
    placesVisited: Number(formData.get("placesVisited") || 0),
    preferredVibe: formData.get("preferredVibe"),
    randomRequests: formData.get("randomRequests"),
  };
  let supabaseUser = null;
  const signedIntoSupabase = await hasSupabaseSession();
  const shouldCreateSupabaseAccount = supabaseClient && (!currentUser || !signedIntoSupabase || !currentUser.supabaseUserId);
  if (shouldCreateSupabaseAccount) {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password: password || existingPassword,
      options: { data: profilePayload },
    });
    if (error) {
      setAuthError(error.message || "Could not create your Supabase account.");
      return;
    }
    supabaseUser = data.user;
  } else if (supabaseClient && currentUser) {
    const updatePayload = { data: profilePayload };
    if (email && email !== currentUser.email) updatePayload.email = email;
    if (password) updatePayload.password = password;
    const { data, error } = await supabaseClient.auth.updateUser(updatePayload);
    if (error) {
      setAuthError(error.message || "Could not update your Supabase profile.");
      return;
    }
    supabaseUser = data.user;
  }
  currentUser = {
    ...(currentUser || {}),
    ...profilePayload,
    emailVerified: supabaseUser ? Boolean(supabaseUser.email_confirmed_at) : emailVerified,
    supabaseUserId: supabaseUser?.id || currentUser?.supabaseUserId || "",
  };
  await saveProfileToSupabase(currentUser);
  await loadPublicProfiles();
  accounts[username] = { password: password || existingPassword, user: currentUser };
  saveAccountStore(accounts);
  localStorage.setItem("put1meetUser", JSON.stringify(currentUser));
  localStorage.setItem("put1meetLastUser", JSON.stringify(currentUser));
  renderAuthActions();
  hideAuth();

  if (pendingJoin) {
    const match = findGroup(pendingJoin.groupId);
    if (match && canCurrentUserJoinGroup(match.group)) {
      joinedGroups.add(pendingJoin.groupId);
      saveJoinedGroups();
    } else {
      setGroupSafetyNotice("Because your age is under 18, this meet needs at least one 18+ person before you can join.");
    }
    openDrawer(pendingJoin.spotId, "groups");
    pendingJoin = null;
  }
});

document.addEventListener("submit", async (event) => {
  const suggestionForm = event.target.closest("[data-spot-suggestion-form]");
  if (suggestionForm) {
    event.preventDefault();
    const formData = new FormData(suggestionForm);
    const name = formData.get("spotName").trim();
    const area = formData.get("area").trim();
    const mapUrl = formData.get("mapUrl").trim();
    const photoFile = suggestionForm.elements.photo.files[0];
    const message = document.querySelector("#spotSuggestionMessage");
    if (!name || !area) return;
    try {
      const photo = await readPhotoFile(photoFile);
      const newSpot = {
        id: `suggested-${slugify(name)}-${Date.now()}`,
        name,
        area,
        tags: ["nature"],
        mood: "Community suggestion",
        image: photo || fallbackImages.nature,
        mapUrl: mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${area}`)}`,
        blurb: "A community-suggested public spot. Check access, daylight, and local rules before planning a meet.",
        groups: [
          { day: "Saturday", date: "Next open", time: "6:30 AM", people: 3 },
          { day: "Sunday", date: "Next open", time: "5:00 PM", people: 2 },
        ],
        tips: [
          "Verify the route on Google Maps before leaving.",
          "Use public access only and avoid private or restricted areas.",
          "Go with a small group first and add a review after visiting.",
        ],
        reviews: photo
          ? [
              {
                user: currentUser?.name || "Community",
                rating: "4.0",
                text: "Submitted with a photo by the community.",
                photo,
              },
            ]
          : [],
      };
      savedSuggestedSpots.push(newSpot);
      saveSuggestedSpots();
      spots.push(newSpot);
      hydrateSpotGroups(newSpot, spots.length - 1);
      const activeFilter = document.querySelector(".filter.active")?.dataset.filter || "all";
      renderSpots(activeFilter);
      suggestionForm.reset();
      if (message) {
        message.textContent = `${name} was added to the spot list.`;
        message.hidden = false;
      }
    } catch {
      if (message) {
        message.textContent = "Could not read that photo. Try another image or submit without one.";
        message.hidden = false;
      }
    }
    return;
  }

  const settingsForm = event.target.closest("[data-settings-form]");
  if (settingsForm) {
    event.preventDefault();
    const formData = new FormData(settingsForm);
    const minAge = Number(formData.get("defaultMinAge") || 14);
    const maxAge = Number(formData.get("defaultMaxAge") || 80);
    if (minAge > maxAge) {
      settingsForm.insertAdjacentHTML(
        "afterbegin",
        '<p class="complete-warning">Default group settings need a minimum age lower than the maximum age.</p>',
      );
      return;
    }
    currentUser = {
      ...currentUser,
      profileVisibility: formData.get("profileVisibility"),
      showAgeGender: formData.get("showAgeGender"),
      showInstagram: formData.get("showInstagram"),
      allowDmFrom: formData.get("allowDmFrom"),
      inviteSource: formData.get("inviteSource"),
      preferredVibe: formData.get("preferredVibe"),
      randomRequests: formData.get("randomRequests"),
      defaultMinAge: minAge,
      defaultMaxAge: maxAge,
      defaultGroupGender: formData.get("defaultGroupGender"),
    };
    if (canManageSiteRoles()) {
      for (const [key, value] of formData.entries()) {
        if (!key.startsWith("siteRole-")) continue;
        const personId = key.replace("siteRole-", "");
        if (["member", "moderator", "admin"].includes(value)) {
          siteRoleStore[personId] = value;
        }
      }
      saveSiteRoles();
    }
    saveCurrentUser();
    await saveProfileToSupabase(currentUser);
    await loadPublicProfiles();
    renderAuthActions();
    drawerContent.querySelector(".profile-panel")?.insertAdjacentHTML(
      "afterbegin",
      '<p class="complete-warning">Settings saved.</p>',
    );
    return;
  }

  const createGroupForm = event.target.closest("[data-create-group-form]");
  if (createGroupForm) {
    event.preventDefault();
    if (!currentUser) {
      openAuth("signup");
      return;
    }
    const spot = spots.find((item) => item.id === createGroupForm.dataset.createGroupForm);
    const formData = new FormData(createGroupForm);
    const minAge = Number(formData.get("minAge") || 14);
    const maxAge = Number(formData.get("maxAge") || 80);
    const gender = formData.get("gender") || "any";
    if (currentUserNeedsAdult()) {
      setGroupSafetyNotice("Because your age is under 18, a new meet needs an 18+ person in the group. Join a meet with an adult already listed.");
      openDrawer(spot.id, "groups");
      return;
    }
    if (minAge > maxAge) {
      setGroupSafetyNotice("The group settings need a minimum age lower than the maximum age.");
      openDrawer(spot.id, "groups");
      return;
    }
    if (Number(currentUser.age) < minAge || Number(currentUser.age) > maxAge || (gender !== "any" && currentUser.gender !== gender)) {
      setGroupSafetyNotice("Your own profile must match the group settings you choose.");
      openDrawer(spot.id, "groups");
      return;
    }
    const newGroup = {
      day: formData.get("day").trim(),
      date: formData.get("date").trim(),
      time: formData.get("time").trim(),
      people: 1,
      id: `${spot.id}-custom-${Date.now()}`,
      criteria: { minAge, maxAge, gender },
      attendees: [],
    };
    spot.groups.unshift(newGroup);
    joinedGroups.add(newGroup.id);
    saveJoinedGroups();
    openDrawer(spot.id, "groups");
    return;
  }

  const chatForm = event.target.closest("#chatForm");
  if (chatForm) {
    event.preventDefault();
    const input = chatForm.elements.message;
    const text = input.value.trim();
    if (!text || !activeChatKey || !currentUser) return;
    chatStore[activeChatKey] = [
      ...(chatStore[activeChatKey] || []),
      { sender: currentUser.name, text },
    ];
    saveObject("put1meetChats", chatStore);
    openChat(activeChatKey, activeChatMeta);
    return;
  }

  const reviewForm = event.target.closest("[data-review-form]");
  if (reviewForm) {
    event.preventDefault();
    if (!currentUser) {
      openAuth("signup");
      return;
    }
    const groupId = reviewForm.dataset.reviewForm;
    const formData = new FormData(reviewForm);
    reviewStore[groupId] = [
      ...(reviewStore[groupId] || []),
      {
        user: currentUser.name,
        rating: formData.get("rating"),
        text: formData.get("text"),
      },
    ];
    saveObject("put1meetMeetReviews", reviewStore);
    rerenderActiveDrawer();
    const refreshedPanel = document.querySelector(`[data-after-panel="${groupId}"]`);
    if (refreshedPanel) refreshedPanel.hidden = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideDrawer();
    hideAuth();
    hideChat();
  }
});

purgeDummyProfileData();
renderSpots();
renderAuthActions();
syncSupabaseSession();

