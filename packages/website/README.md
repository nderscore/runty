# Docs Website

The documentation website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

The documentation website references the parent directory as a dependency, so that it can use the library.

```shell
# build the runty library

$ yarn
$ yarn build

# go to website project directory and install dependencies

$ cd website
$ yarn
```

### Local Development

```shell
# while in the website/ directory

$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.
