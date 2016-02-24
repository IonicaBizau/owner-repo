const ownerRepo = require("../lib");

console.log(ownerRepo("IonicaBizau/git-stats"));
// { stringify: [Function],
//   repo: 'git-stats',
//   owner: 'IonicaBizau',
//   full_name: 'IonicaBizau/git-stats' }

console.log(ownerRepo("IonicaBizau"));
// { stringify: [Function],
//   repo: null,
//   owner: 'IonicaBizau',
//   full_name: 'IonicaBizau' }
