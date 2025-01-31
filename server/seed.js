const trails = [
  {
    name: "Scafell Pike",
    location: "UK",
    difficulty: "Hard",
    description: "Highest mountain in England with stunning views.",
  },
  {
    name: "Ben Nevis",
    location: "UK",
    difficulty: "Hard",
    description: "Tallest peak in the British Isles, popular with climbers.",
  },
  {
    name: "Hadrian's Wall",
    location: "UK",
    difficulty: "Moderate",
    description: "Historic trail following the Roman wall.",
  },
  {
    name: "Crib Goch",
    location: "UK",
    difficulty: "Hard",
    description: "Challenging ridge walk in Snowdonia.",
  },
  {
    name: "West Highland Way",
    location: "UK",
    difficulty: "Moderate",
    description: "Long-distance trail with diverse landscapes.",
  },
  {
    name: "Pennine Way",
    location: "UK",
    difficulty: "Hard",
    description: "One of the most famous long-distance trails in the UK.",
  },
];

//POSTMAN:
// ADD http://localhost:8080/add-trails
const addTrails = [
  {
    name: "Mount Rainier",
    location: "Washington",
    difficulty: "Hard",
    description:
      "A challenging trail with breathtaking views of the iconic Mount Rainier.",
  },
];

// POST http://localhost:8080/update-trails/1
const updateTrails = [
  {
    name: "Pacific Crest Trail",
    location: "California",
    difficulty: "Hard",
    description:
      "A scenic thru hike across three states from Mexico border to Canada with beautiful views.",
  },
];

// DELETE http://localhost:8080/delete-trails/6
const deleteTrails = [
  {
    id: 6,
  },
];
