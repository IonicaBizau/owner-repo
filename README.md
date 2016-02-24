# owner-repo [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/owner-repo.svg)](https://www.npmjs.com/package/owner-repo) [![Downloads](https://img.shields.io/npm/dt/owner-repo.svg)](https://www.npmjs.com/package/owner-repo) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Parse the the owner/repo snippets.

## Installation

```sh
$ npm i --save owner-repo
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md