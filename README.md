# Hi

## /1 Failing

```
yarn
yarn test
```

With `"@graphql-yoga/common": "2.6.0"` it's failing with this message:

```
[WebServer] TypeError [ERR_INVALID_CHAR]: Invalid character in header content ["append"]
```

You can see the error if you go to http://localhost:3000/api/graphql

## /2 Working

```
yarn add @graphql-yoga/common@2.0.0
yarn test
```

With `"@graphql-yoga/common": "2.6.0"` it's working!
