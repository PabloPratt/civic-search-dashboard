const records = [
  {
    title: "Harris County business filing cluster",
    county: "Harris",
    risk: "Compliance",
    source: "County clerk sample feed",
    score: 94,
    description: "Potential entity overlap across three filing names and two registered addresses.",
  },
  {
    title: "Travis civil docket watch",
    county: "Travis",
    risk: "Civil",
    source: "Civil docket sample",
    score: 89,
    description: "Recent filing activity linked to a recurring plaintiff and adjacent matter tags.",
  },
  {
    title: "Dallas property transfer review",
    county: "Dallas",
    risk: "Property",
    source: "Property index sample",
    score: 84,
    description: "Transfer pattern with high-value parcels and incomplete owner normalization.",
  },
  {
    title: "Harris permit anomaly",
    county: "Harris",
    risk: "Compliance",
    source: "Permit sample feed",
    score: 78,
    description: "Permit updates accelerated after a long inactive period.",
  },
  {
    title: "Travis organization alias match",
    county: "Travis",
    risk: "Civil",
    source: "Alias dictionary sample",
    score: 82,
    description: "Likely organization alias match found across filings and public notices.",
  },
  {
    title: "Dallas title chain flag",
    county: "Dallas",
    risk: "Property",
    source: "Title sample feed",
    score: 74,
    description: "Missing intermediate owner in title history sample.",
  },
];

const query = document.querySelector("#query");
const county = document.querySelector("#county");
const risk = document.querySelector("#risk");
const results = document.querySelector("#results");

function render() {
  const text = query.value.trim().toLowerCase();
  const visible = records.filter((record) => {
    const haystack = `${record.title} ${record.county} ${record.risk} ${record.description}`.toLowerCase();
    return (!text || haystack.includes(text))
      && (county.value === "all" || record.county === county.value)
      && (risk.value === "all" || record.risk === risk.value);
  });

  results.replaceChildren(...visible.map((record) => {
    const article = document.createElement("article");
    article.className = "panel result";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = `${record.county} · ${record.risk}`;

    const title = document.createElement("h2");
    title.textContent = record.title;

    const description = document.createElement("p");
    description.className = "tagline";
    description.textContent = record.description;

    const source = document.createElement("p");
    source.className = "source";
    source.textContent = record.source;

    const score = document.createElement("p");
    score.className = "score";
    score.textContent = `${record.score}% confidence`;

    article.append(badge, title, description, source, score);
    return article;
  }));
}

[query, county, risk].forEach((control) => control.addEventListener("input", render));
render();
