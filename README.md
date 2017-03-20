
# owner-repo

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/owner-repo.svg)](https://www.npmjs.com/package/owner-repo) [![Downloads](https://img.shields.io/npm/dt/owner-repo.svg)](https://www.npmjs.com/package/owner-repo)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`gh-repos`](https://github.com/IonicaBizau/gh-repos#readme)—Get one or all the owner repositories from GitHub.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
