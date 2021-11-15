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

## Important Note

Do not modify the .bitmap file

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

## Add a new component

```sh
bit create react-component ui/card
# stop the server
bit compile
```

Every time a new component is added, there is the need to compile again.

## Using another component

- Don't use relative imports
- Use the package name from the local server

## Checking the status

```sh
bit status
```

- Should show an ok for all the components. If so, you may want to tag it as a version.

## Tag a version

```sh
bit tag --all [version]
```

Tagging uses semantic's syntax. E.g. 1.0.0

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

## Create a scope in bit.dev

- Create a scope for the project.
- Copy the scope project: jonakru.training and paste it on 'defaultScope' of workspace.jsonc

## Link local with remote

```sh
bit link
```

## Update imports to be from the account/project

In the components that require other imports, update the import to update from remote and not from local.

For example, in the card component:

```js
import { Button } from "@jonakru/ui.button";
```

to

```js
import { Button } from "@jonakru/training.ui.button";
```

## Check the status

```sh
bit compile
```

If neccesary, compile again

## Compile again

```sh
bit compile
```

## Tag again

```sh
bit tag --all 1.1.0
```

- Similar to ``` git commit ```

## Publish the component to the bit account

```sh
bit export
```

- Similar to ``` git push ```

## Component usage

- In the bit.dev website, you can copy the component address.
- It has been both added to yarn and npm.
- You can also import / install it to a bit project
