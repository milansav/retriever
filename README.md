# Retriever

<img src="raw/logo.png" height=300>

A minimalistic TypeScript fetch library focusing on user-experience.

## Usage

### Installation

`npm i @milandev/retriever`

Call signature:

`Get(<url>, <options>)`

`Post(<url>, <options>)`

`Put(<url>, <options>)`

`Delete(<url>, <options>)`

where:

`<url>` - `URL | string`

`<options>` - `BodyInit`

- Make a simple request to an endpoint

```ts
import { Get, Post, Put, Delete } from "@milandev/retirever";

Get("https://example.com");
Post("https://example.com");
Put("https://example.com");
Delete("https://example.com");
```

- A request expecting response of certain type.

```ts
import { Get, Post, Put, Delete } from "@milandev/retirever";

// user infers type User
const user = Get<User>("https://example.com");

// purchase infers type Purchase
const purchase = Post<Purchase>("https://example.com");

// organizations infers type Organization[]
const organizations = Put<Organization[]>("https://example.com");

// confirmation infers type Confirmation
const confirmation = Delete<Confirmation>("https://example.com");
```

- A request requiring authentication

```ts
import { Get } from "@milandev/retriever";

const token = "mytoken";
const files = Get(
  "http://localhost:3000/files",
  useAuth(token, {
    // settings
  })
);
```

**Note:** Get, Post, Put, Delete don't allow you to override `method`. To specify custom `method` use `useFetch`.

Call signature:

`useFetch(<url>, <options>)`

where:

`<url>` - `URL | string`

`<options>` - `BodyInit`

## Limitations

Retriever currently does not support any response MIME-types other than `application/json`.

Retriever currently supports only Bearer token Authorization.

Retriever currently does not do runtime type checking.
