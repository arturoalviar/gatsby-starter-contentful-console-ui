const path = require('path')
const {
  allContentfulPostQuery,
  allContentfulAuthorQuery,
  allContentfulCategoryQuery,
} = require('./src/gatsby/queries')
const {
  generatePostPages,
  generatePaginatedPages,
  generateCollectionPages,
} = require('./src/gatsby/gatsbyNodeUtils')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// Define custom alias paths
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.join(__dirname, 'src/components'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@styles': path.join(__dirname, 'src/styles'),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve('./src/templates/blog.js')
  const postTemplate = require.resolve('./src/templates/post.js')
  const authorPageTemplate = require.resolve('./src/templates/author/page.js')
  const authorsTemplate = require.resolve(
    './src/templates/author/collection.js'
  )
  const categoryPageTemplate = require.resolve(
    './src/templates/category/page.js'
  )
  const categoriesTemplate = require.resolve(
    './src/templates/category/collection.js'
  )

  const postsResult = await wrapper(graphql(allContentfulPostQuery))
  const authorsResult = await wrapper(graphql(allContentfulAuthorQuery))
  const categoryResult = await wrapper(graphql(allContentfulCategoryQuery))

  const posts = postsResult.data.allContentfulPost.edges
  const authors = authorsResult.data.allContentfulAuthor.edges
  const categories = categoryResult.data.allContentfulCategory.edges

  // create the blog page
  generatePaginatedPages({
    edges: posts,
    pageTemplate: blogTemplate,
    slugPrefix: 'blog',
    createPage,
  })

  // creates the authors page
  generatePaginatedPages({
    edges: authors,
    pageTemplate: authorsTemplate,
    slugPrefix: 'authors',
    createPage,
  })

  // creates the categories page
  generatePaginatedPages({
    edges: categories,
    pageTemplate: categoriesTemplate,
    slugPrefix: 'categories',
    createPage,
  })

  // creates a page for each blog post
  generatePostPages({
    edges: posts,
    pageTemplate: postTemplate,
    slugPrefix: 'blog',
    createPage,
  })

  // creates a page for each author and displays each post they created
  generateCollectionPages({
    edges: authors,
    pageTemplate: authorPageTemplate,
    baseSlug: 'authors',
    createPage,
  })

  // creates a page for each category and displays each post using that category
  generateCollectionPages({
    edges: categories,
    pageTemplate: categoryPageTemplate,
    baseSlug: 'categories',
    createPage,
  })
}
