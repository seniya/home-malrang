import nextra from 'nextra'

const withNextra = nextra({
  // ... Other Nextra config options
  latex: true,
  search: {
    codeblocks: false
  }
  // contentDirBasePath: '/docs'
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  reactStrictMode: true
})
