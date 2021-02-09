<h1 align="center">
  <a href="https://gatsby-starter-contentful-console-ui.vercel.app/">
    <img alt="Console UI Logo" title="Console UI Logo" src="src/images/console-ui-icon.png" width="96">
  </a> 
  </br>
    Gatsby Starter Contentful - Console UI
</h1>

<h4 align="center">
  A starter template inspired by modern consoles' UIs
</h4>

<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=arturoalviar">
    <img src="https://img.shields.io/twitter/follow/arturoalviar.svg?label=Follow%20@arturoalviar" alt="Follow @arturoalviar" />
  </a>
</p>

Demo: https://gatsby-starter-contentful-console-ui.vercel.app/

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Modifying the starter](#modifying-the-starter)
  - [GraphQL queries](#graphql-queries)
  - [Chakra UI](#chakra-ui)
  - [Gatsby Config](#gatsby-config)
  - [Gatsby Node](#gatsby-node)
  - [Contentful rich text](#contentful-rich-text)
  - [Contentful and the GraphQL schema](#contentful-and-the-graphql-schema)

## Features

- [GatsbyJS](http://gatsbyjs.com/)
- [Contentful CMS](https://www.contentful.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Framer Motion](https://www.framer.com/api/motion/)
- [Sora Typeface](https://fonts.google.com/specimen/Sora)
- Light/Dark theme support

## Getting Started

1. **Get the source code**

   ```
   # Clone this repository
   git clone https://github.com/arturoalviar/gatsby-starter-contentful-console-ui

   # Navigate into the directory
   cd gatsby-starter-contentful-console-ui
   ```

2. **Install dependencies**

   ```
   yarn
   
   # or
   
   npm install
   ```

3. **Contentful setup**

   During the setup process, you will need to provide the following information:

   - Contentful Space ID
   - Content Management API Access Token
   - Content Delivery API Access Token


   ```
   yarn setup

   # or

   npm run setup
   ```

   After completing the setup process, .env files will be generated.

4. **Finishing up**

   You are now ready to start developing 🎉

   ```
   yarn start

   # or

   npm start
   ```

   Your site will be available at http://localhost:8000.

## Modifying the starter

### GraphQL queries

The majority of GraphQL queries are located in the `src/gatsby` folder. In the `src/gatsby/fragments` folder, there are files with the suffix `.fragment.js` which define GraphQL fragments.

[Learn more about GraphQL fragments](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/using-graphql-fragments/)

### Chakra UI

This starter uses Chakra UI for theming and styling. The `src/@chakra-ui/gatsby-plugin` folder contains the overrides of the default Chakra UI theme.

[Learn more about Chakra UI theme customization](https://chakra-ui.com/docs/theming/customize-theme)

### Gatsby Config

#### Configure Site Metadata and Manifest

To change the site's metadata (e.g title, description), edit the `config/index.js` file. Similarly, edit this file to configure your manifest options.

### Gatsby Node

#### Alias paths

This starter uses alias paths similar to Vue (e.g. @components). They are defined under `exports.onCreateWebpackConfig` in the `gatsby-node.js` file.

#### Generating pages

This starter has a number of helper functions to simplify generating pages which can be found at `src/gatsby/gatsbyNodeUtils.js`. All the queries for generating pages can be found at `src/gatsby/queries`.

#### Pagination

By default, all pages that query a collection support pagination. The items per page can be adjusted in the `generatePaginatedPages` and `generateCollectionPages` by setting the `postsPerPage` to the desired value (the default value is 6).

```javascript
// create the blog page
generatePaginatedPages({
  edges: posts,
  pageTemplate: blogTemplate,
  slugPrefix: 'blog',
  postsPerPage: 8, // pass -1 to disable pagination
  createPage,
})
```

### Contentful rich text

The ContentfulContent component, located in `src/components`, does a good amount of heavy lifting in this starter since it handles the rendering of all rich text. The content types that contain a rich text field are `Page` and `Post`.

The [`@contentful/rich-text-react-renderer`](https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer) package contains an appropriately named function, `documentToReactComponents`, which takes in content and a set of options. The options consist of functions that determine how a rich text type will be rendered. The ContentfulContent component contains a number of defined functions for rich text types but it does not cover all possible types; the [`@contentful/rich-text-types` package](https://github.com/contentful/rich-text/tree/master/packages/rich-text-types) details all possible rich text types.

Modifying the ContentfulContent component gives you absolute control on how you want the rich content to be displayed. For example, this starter renders each image in a post using the BlogPostImage component found in `src/components/BlogPost`. The component renders the image wrapped in an anchor tag along with a Chakra UI modal; when the image is clicked, a modal is rendered to display the image at a greater size. However, if you do not want to include a modal, you can do the following:

```javascript
// src/components/ContentfulContent.js
// renders image and Chakra UI modal
...
[BLOCKS.EMBEDDED_ASSET]: node => {
  const { id } = node.data.target.sys
  const { fluid } = references.find(
    ({ contentful_id }) => contentful_id === id
  )

  return fluid && <BlogPostImage fluid={fluid} />
},
...
```

change to:

```javascript
// src/components/ContentfulContent.js
// renders gatsby responsive image
...
[BLOCKS.EMBEDDED_ASSET]: node => {
  const { id } = node.data.target.sys
  const { fluid } = references.find(
    ({ contentful_id }) => contentful_id === id
  )

  // make sure to import Img from 'gatsby-image'
  return fluid && <Img fluid={fluid} />
},
...
```

### Contentful and the GraphQL schema

Since this starter relies on a particular predefined Contentful space, it is important to note that as mentioned in the `gatsby-source-contenful` plugin's readme: **fields that do not have at least one populated instance will not be created in the GraphQL schema.**

This means that any content types without at least one entry will not register in the GraphQL schema. In addition, if a content type has an optional field, and that field is never filled in every instance of said content type, it will also not be created in the GraphQL schema. For example, this starter has only one `author` entry. If that entry is deleted, you will get an error when running the site since certain queries reference `author` but since there are no instances of `author` in the space, it will not be registered in the schema. This will result in an error. Similarly, if all the authors do not have a twitter handle field filled out, the `twitterHandle` field will not be added to the GraphQL schema.

If you plan to remove a certain content type, in order to avoid errors, make sure to remove references of that content type.
