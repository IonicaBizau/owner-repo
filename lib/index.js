"use strict";

const ownerRepoStringify = require("owner-repo-stringify");

/**
 * ownerRepo
 * Parses the input string as `owner[/repo]`.
 *
 * @name ownerRepo
 * @function
 * @param {String} input The input string in the `owner[/repo]` format.
 * @return {Object} An object contaning the following fields:
 *
 *  - `owner` (String): The repository owner.
 *  - `repo` (String): The repository name.
 *  - `full_name` (String): The full name (in the `owner[/repo]` format).
 *  - `stringify` (Function): Stringifies the parsed object.
 *
 */
module.exports = function ownerRepo(input) {

    if (typeof input !== "string") {
        throw new TypeError("The input value should be a string.");
    }

    let splits = input.split("/")
      , owner = null
      , repo = null
      ;

    if (splits.length > 1) {
        owner = splits[0];
        repo = splits[1];
    } else {
        owner = input;
        repo = null;
    };

    return {
        stringify: function (o, r) {
            o && (this.owner = o);
            r && (this.repo = r);
            return ownerRepoStringify(this.owner, this.repo);
        }
      , repo: repo
      , owner: owner
      , full_name: ownerRepoStringify(owner, repo)
    };
};
