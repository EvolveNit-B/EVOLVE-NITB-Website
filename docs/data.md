# Data & Content

All site content is stored as plain JavaScript exports in `src/app/data/`. To update content, edit the relevant file — no database or CMS involved.

---

## `team.js`

Three named exports: `Founder`, `FinalYear`, `PreFinalYear`. Each is an array of member objects.

### Shape

```js
{
  id: number,
  src: string,        // photo path relative to /public/, e.g. "/Team/Founders/MrYashAtlani.jpg"
  name: string,
  instagram: string,  // full URL
  linkedin: string,   // full URL
  position: string    // display title, e.g. "President", "Web Development Head"
}
```

### Groups

| Export | Members | Roles |
|---|---|---|
| `Founder` | 4 | Founder |
| `FinalYear` | 3 | President, Vice President |
| `PreFinalYear` | ~20 | Coordinator, and heads across Operations, Projects, Events, Mechanical, Electronics, Robotics, Electrical, Web Dev, Sponsorship, Social Media, PR, Inventory, Logistics |

### Adding a member

1. Add the member's photo to the appropriate subfolder under `public/Team/`
2. Add a new object to the correct array in `team.js`
3. Set `id` to the next available integer in that array

---

## `projects.js`

Named export `projects` — array of project objects.

### Shape

```js
{
  title: string,
  description: string,       // short text shown on the project card
  longDescription: string,   // full text shown in the detail modal
  icon: JSX.Element,         // a Lucide React icon, e.g. <Car className="w-6 h-6" />
  tags: string[],            // e.g. ["EV Conversion", "IoT", "Automotive"]
  image: string,             // path relative to /public/, e.g. "/projects/Maruti800.jpeg"
  gradient: string,          // Tailwind gradient classes (decorative, e.g. "from-yellow-500/20 to-orange-500/20")
  people: string[]           // contributor names
}
```

### Current projects (12)

| Title | Domain |
|---|---|
| E Maruti 800 | EV Conversion |
| Electric Bicycle | IoT / EV |
| Swarm Drones | Robotics / AI |
| Biomimetic Underwater Robot | Robotics / Computer Vision |
| Maze Solver Robot | AI / Embedded |
| Hexapod | Robotics / Embedded |
| Abhimanyu | Mechatronics / Wireless |
| Ionic Thrusters | Space Tech / Physics |
| RC Air Glider | Aerodynamics / RC |
| RFID Door Lock System | IoT / Firebase |
| Kashyap | AI / 5G / Precision Agriculture |
| Ornithopter | Bio-inspired / Aerodynamics |

### Adding a project

1. Add the project image to `public/projects/`
2. Import the desired Lucide icon at the top of `projects.js`
3. Add a new object to the `projects` array

---

## `eventData.js`

Named export `eventData` — array of event objects.

### Shape

```js
{
  id: number,
  image: string,                           // path relative to /public/, e.g. "/Events/batsim.jpeg"
  event_name: string,
  event_desc: string,
  tags: Array<{ key: number, value: string }>,  // tag keys must be unique across the array
  brochureLink: string                     // path to brochure — can be an image or a PDF
}
```

### Current events (10)

| Name | Tags |
|---|---|
| BATTSIM | EV Battery, Simulation |
| Water Robot Race | Robotics, Competition |
| EV Day 2025 | EV, TechTrack 2.0 |
| Tech Track 2.0 | Hackathon, Innovation |
| Project Exhibition | Smart Tech, Techno Search |
| Tech Track 1.0 | Hackathon, Innovation |
| Air Show 2024 | Glider, Drones |
| Workshop on Vehicle Dynamics | Workshop, Sustainable Mobility |
| EV Day 2024 | EV Day, Celebration |
| Gizmo Craft | Workshop, Gadgets |

### Adding an event

1. Add the event image to `public/Events/`
2. Add the brochure file to `public/Brochure/` (or reuse the event image as the brochure)
3. Add a new object to the `eventData` array
4. Ensure all `tag.key` values are unique across the entire array

---

## Achievements

Achievement data is **hardcoded directly inside `src/app/components/Achievements.jsx`** — it is not in a separate data file. To add or update an achievement, edit that component directly.

Each achievement entry has: image path, title, organization, badge text, description, and year.

Achievement images live in `public/Achievement/`.
