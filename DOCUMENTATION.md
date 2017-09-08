## Documentation

You can see below the API reference of this module.

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

