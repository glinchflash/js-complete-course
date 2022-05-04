const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

document.write(`<ol>`);
for (let i = 14; i > -1; i--) {
  document.write(`<li>${tvshows[i]}</li>`);
  console.log(tvshows[i])
  console.log([i])
}
document.write(`</ol>`);

