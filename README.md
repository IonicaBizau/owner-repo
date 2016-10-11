
# owner-repo

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/owner-repo.svg)](https://www.npmjs.com/package/owner-repo) [![Downloads](https://img.shields.io/npm/dt/owner-repo.svg)](https://www.npmjs.com/package/owner-repo) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Parse the the owner/repo snippets.

## :cloud: Installation

```sh
$ npm i --save owner-repo
```


## :clipboard: Example



```js
const ownerRepo = require("owner-repo");

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
```

## :memo: Documentation


### `ownerRepo(input)`
Parses the input string as `owner[/repo]`.

#### Params
- **String** `input`: The input string in the `owner[/repo]` format.

#### Return
- **Object** An object contaning the following fields:
 - `owner` (String): The repository owner.
 - `repo` (String): The repository name.
 - `full_name` (String): The full name (in the `owner[/repo]` format).
 - `stringify` (Function): Stringifies the parsed object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`gh-repos`](https://github.com/IonicaBizau/gh-repos#readme)—Get one or all the owner repositories from GitHub.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
