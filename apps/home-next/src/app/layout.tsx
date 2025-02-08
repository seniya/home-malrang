import '@/app/globals.css'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export const metadata = {
  metadataBase: new URL('https://www.malrang.net'),
  title: {
    template: '%s - malrang.net'
  },
  description: 'malrang.net',
  applicationName: 'malrang.net',
  generator: 'Next.js',
  appleWebApp: {
    title: 'malrang.net'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://www.malrang.net'
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Home</b>
          <span style={{ opacity: '60%' }}> Welcome</span>
        </div>
      }
      // discord server
      chatLink=''
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang='ko' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={<Banner storageKey='bannerKey'>Hello</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>}
          editLink='Edit this page on GitHub'
          docsRepositoryBase='https://github.com/seniya/home-malrang'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
