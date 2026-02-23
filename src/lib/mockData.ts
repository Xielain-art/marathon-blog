// src/lib/mockData.ts

export const posts = [
  {
    id: 1,
    slug: "transmission-interference-mars",
    title: "Transmission Interference: Mars Sector 4",
    excerpt:
      "Signal degradation detected in the western quadrant. Immediate investigation required...",
    date: "2024.03.15",
    priority: "HIGH",
    author: "Durandal",
    tags: ["LOG", "MARS"],
  },
  {
    id: 2,
    slug: "logistics-update-v6",
    title: "Logistics Update: V6 Supply Chain",
    excerpt:
      "New shipment of Mjolnir Mk. IV components arrived. Review inventory manifests.",
    date: "2024.03.12",
    priority: "MEDIUM",
    author: "Leela",
    tags: ["LOGISTICS", "SUPPLY"],
  },
  {
    id: 3,
    slug: "security-breach-alert",
    title: "Security Breach: Deck 7 Analysis",
    excerpt:
      "Unidentified biological signatures detected in the cargo hold. Lockdown initiated.",
    date: "2024.03.10",
    priority: "CRITICAL",
    author: "Tycho",
    tags: ["SECURITY", "BREACH"],
  },
  {
    id: 4,
    slug: "mjolnir-recon-54",
    title: "Mjolnir Recon Number 54",
    excerpt:
      "Automated report regarding the deployment of Mark IV cyborg units to the Tau Ceti colony. Casualties within expected parameters.",
    date: "2794.07.25",
    tags: ["LORE", "DEBRIEF"],
    author: "System",
  },
  {
    id: 5,
    slug: "pfhor-activity",
    title: "Pfhor Activity Detected",
    excerpt:
      "Long-range scanners have picked up multiple slipspace ruptures near the colony ship. Security personnel report to stations immediately.",
    date: "2794.08.13",
    tags: ["SECURITY WARNING"],
    author: "Security",
  },
  {
    id: 6,
    slug: "maintenance-sector-7g",
    title: "Maintenance Log: Sector 7G",
    excerpt:
      "Routine maintenance completed on biological processors. Minor organic buildup cleared from ventilation shafts.",
    date: "2794.08.14",
    tags: ["LOG", "MAINTENANCE"],
    author: "Engineering",
  },
];

export const priorityPost = {
  id: "priority-1",
  title: "Durandal OS Update v4.2 Deployment",
  excerpt:
    "Critical system update for ship-wide AI operations. Rampancy mitigation protocols enabled. Do not disregard this broadcast. All secondary systems will experience brief downtime during cycle.",
  date: "2794.08.12",
  tags: ["SYSTEM UPDATE", "AI"],
  slug: "durandal-update-4",
  priority: "CRITICAL",
  classification: "OMEGA",
};

export const recentPosts = posts.slice(3, 6);

export const userComments = [
  {
    id: 1,
    targetTitle: "Durandal OS Update v4.2",
    targetSlug: "durandal-update-4",
    excerpt: "Acknowledged. Updating local firmware routines as directed.",
    date: "2794.08.12",
    author: "Operative",
  },
  {
    id: 2,
    targetTitle: "Pfhor Activity Detected",
    targetSlug: "pfhor-activity",
    excerpt:
      "Confirmed slipspace breach on my end. Moving to security station now. Weapons check: nominal.",
    date: "2794.08.13",
    author: "Operative",
  },
];

export const vitalStats = [
  { label: "Name", value: null, skeleton: true },
  { label: "Contact Email", value: "operative@uesc.net", highlight: true, blink: true },
  { label: "Status", value: "ACTIVE", green: true },
  { label: "User Role", value: "AUTHOR", badge: true },
  { label: "Join Date", value: "2794.01.01" },
  { label: "Total Dispatches", value: "2" },
  { label: "Net Status", value: "ONLINE", green: true },
];

export const historyEvents = [
  {
    date: "2794.01",
    title: "System Registration",
    desc: "Operative successfully enlisted in the UESC Marathon databanks. Access credentials issued.",
    current: false,
  },
  {
    date: "2794.05",
    title: "First Dispatch Published",
    desc: "Initial report transmitted to the global network. Received positive clearance from moderation AI.",
    current: false,
  },
  {
    date: "2794.08",
    title: "Active Contributor",
    desc: "Operative has filed multiple dispatches and appended entries to the transmission log. Status: Ongoing.",
    current: true,
  },
];

export const topContributors = [
  { name: "BOB-7", role: "SECURITY", fallback: "B7", class: "text-primary" },
  {
    name: "ENG-3",
    role: "MAINTENANCE",
    fallback: "E3",
    class: "text-destructive",
  },
  { name: "SFO-2", role: "RECON", fallback: "S2", class: "text-yellow-500" },
];

export const categories = [
  "ALL",
  "LORE",
  "SECURITY",
  "SYSTEM",
  "MAINTENANCE",
  "LOGISTICS",
];
