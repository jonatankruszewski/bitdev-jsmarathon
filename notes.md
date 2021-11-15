# Notes for getting started

Notes for the following [YouTube video](https://www.youtube.com/watch?v=7afMBwj5fR4&ab_channel=ThisDotMedia)

## Initializing bit project

```sh
bit init --harmony
```

## Uncomment the following line in workspace.jsonc

```js
"teambit.react/react":{}
```

## Do not modify the .bitmap file

## Add dependencies

```sh
bit install react --type peer
bit install react-dom --type peer
```

## Creating components

```sh
bit create react-component ui/button
```

## Check other bit templates

```sh
bit templates
```

## Adding testing dependency

```sh
bit install @testing-library/react
```

## Modify the button

- Added button.module.scss
- Added variant handling

## Spinning a local server

```sh
bit start
```

## Checking the status

```sh
bit status
```

- Should show an ok for all the components

## Tag a version

```sh
bit tag -all [version]
```

## Create an account in [Bit.dev](http://bit.dev)

- Select the Harmony version (Beta)
- Give a scope name
- Copy it.

## Add the scope to workspace.jsonc

- Scope: jonakru.training

## Login to your account

```sh
bit login
```

```sh
bit link
```

```sh
bit export
```
