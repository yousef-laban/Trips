import pic1 from "./pics/bridge-to-nowhere.jpg";
import pic2 from "./pics/rangitoto-summit.jpg";
import pic3 from "./pics/queen-charlotte-track.jpg";
import pic4 from "./pics/mou-waho-island.jpg";
import pic5 from "./pics/franz-josef-heli-hike.jpg";

const trips = [
  {
    id: 1,
    name: "Bridge to Nowhere ",
    slug: "bridge-to-nowhere ",
    image: `${pic1}`,
    distance: "1 km ",
    diffuclty: "Easy",
    description:
      "The walk to the Bridge to Nowhere starts from the Mangapurua Landing. It’s an easy gradient and only takes approximately 40 minutes. The historic Bridge to Nowhere symbolises a failed attempt at back country pioneering by a community of returned World War 1 servicemen and their families. The steel enforced, concrete bridge opened in 1936 and was replacing a wooden swing bridge that had been constructed across the Mangapurua Stream to connect the isolated valleys with the riverboats that brought goods along the Whanganui River.",
  },
  {
    id: 2,
    name: "Rangitoto Summit ",
    slug: "rangitoto-summit ",
    image: `${pic2}`,
    distance: "3 km",
    diffuclty: "Medium",
    description:
      "Rangitoto island is only a short ferry ride from downtown Auckland but seems like another world away. The island erupted from the sea only 600 years ago which makes it the youngest island in the Hauraki Gulf. The best views are of course to be had from the summit. Follow the well signposted track on its gentle climb through lava fields and pōhutukawa forest (New Zealand Christmas Tree).It takes approx. 1 hour to climb the 3km to the top. From the summit you get rewarded with panamoric views of the Hauraki Gulf and further to Auckland’s skyline. On your way up or down the detour to the Lava Caves is well worth your time (15 minutes one-way), however keep in mind that if you want to explore the tunnels and caves you need to bring a torch. Fullers takes you over to the island in just 25 minutes from the downtown ferry terminal.",
  },
  {
    id: 3,
    name: "Queen Charlotte Track ",
    slug: "queen-charlotte-track ",
    image: `${pic3}`,
    distance: "13 km",
    diffuclty: "Medium",
    description:
      "Explore the magnificient Marlborough Sounds by walking parts of the Queen Charlotte Track. The track is accessible by boat from many bays and water taxis can drop and pick you up at pre-arranged spots. A popular stretch for a day walk is the section between Furneaux Lodge and Punga Cove. Beachcomber Cruises take you from Picton to Furneaux Lodge, where you can pre-load on coffee or even brunch before you start your walk to Punga Cove Resort. The track follows the coastline around Endeavour Inlet through native bush, it’s almost 13km so depending on your fitness it may take you anywhere from 3-4.5 hours ",
  },
  {
    id: 4,
    name: "Mou Waho Island ",
    slug: "mou-waho-island ",
    image: `${pic4}`,
    distance: "15 km ",
    diffuclty: "Easy",
    description:
      "Mou Waho Island is a predator free nature reserve in Lake Wanaka. You can find Kereru (wood pigeon), Korimaka (Bell Bird), Tomtits and Weka on the island. Wanaka Watertaxi take you on the 15 km journey along the lake to the island. Once there you have 1.5 hours to explore, a 20 minute walk bring you to a hidden lake, that has been created by glacial action a few thousand years ago. On that lake is a small rocky island which gives you the “island on a lake, on an island on a lake on an island on the sea” :) Head up to the top of the island (Tyrwhitt Peak) for expansive views of the lake(s) and the mountain peaks surrounding Wanaka. ",
  },
  {
    id: 5,
    name: "Franz Josef Heli Hike ",
    slug: "franz-josef-heli-hike ",
    image: `${pic5}`,
    distance: "42 km ",
    diffuclty: "Hard",
    description:
      "Want to experience a Glacier first hand but don’t fancy a long climb or walk? Join a Heli Hike with Franz Josef  Glacier Guides! A short scenic flight in the helicopter lands you on the ice. From there knowledgeable guides lead you on a two hour guide tour of the glacier exploring its many key features. Because the glacier is so fast moving, its features are constantly changing - you might find yourself sliding through a narrow crevasse or between towering walls of ice, crawling through blue ice tunnels or hanging out in ice caves.",
  },
];
export default trips;
