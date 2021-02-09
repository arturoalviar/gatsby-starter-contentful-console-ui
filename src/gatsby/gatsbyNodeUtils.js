const generatePostPages = ({
  edges,
  pageTemplate,
  createPage,
  slugPrefix = '',
}) => {
  edges.forEach(({ node }, index) => {
    const { id, slug } = node
    const prevNode = index === 0 ? edges[edges.length - 1] : edges[index - 1]
    const nextNode = index === edges.length - 1 ? edges[0] : edges[index + 1]
    const { id: prevID } = prevNode.node
    const { id: nextID } = nextNode.node

    createPage({
      path: `${slugPrefix}/${slug}`,
      component: pageTemplate,
      context: {
        id,
        prevID,
        nextID,
      },
    })
  })
}

const generatePaginatedPages = ({
  edges,
  pageTemplate,
  createPage,
  postsPerPage = 6,
  slugPrefix = '',
  context = {},
}) => {
  const numberOfPages =
    postsPerPage >= 1 ? Math.ceil(edges.length / postsPerPage) : 1

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/${slugPrefix}` : `/${slugPrefix}/${index + 1}`,
      component: pageTemplate,
      context: {
        ...context,
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        numberOfPages,
      },
    })
  })
}

const generateCollectionPages = ({
  edges,
  pageTemplate,
  createPage,
  postsPerPage = 6,
  baseSlug = '',
}) => {
  edges.forEach(({ node }) => {
    const { id, slug, post } = node

    generatePaginatedPages({
      edges: post,
      pageTemplate,
      createPage,
      postsPerPage,
      slugPrefix: `${baseSlug}/${slug}`,
      context: {
        id,
      },
    })
  })
}

exports.generatePostPages = generatePostPages
exports.generatePaginatedPages = generatePaginatedPages
exports.generateCollectionPages = generateCollectionPages
