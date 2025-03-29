import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10 border-b-2 border-primary-300 dark:border-primary-800'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href='/' aria-label={siteMetadata.headerTitle}>
        <div className='flex items-center justify-between'>
          <div className='bg-primary-200 dark:bg-primary-800 mr-3 rounded-md p-3 text-lg font-bold shadow-md'>
            <div className='flex items-center'>
              <Image
                src='/static/images/logo.svg'
                alt='logo'
                width={40}
                height={40}
              />
              <p className='ml-2 text-lg font-bold'>Malrang</p>
            </div>
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className='hidden h-6 text-2xl font-semibold tracking-wider sm:block'>
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className='flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6'>
        <div className='no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96'>
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-400 m-1 border-b-2 border-transparent font-medium text-gray-900 dark:text-gray-100'
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
