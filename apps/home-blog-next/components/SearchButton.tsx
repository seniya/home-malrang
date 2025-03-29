import siteMetadata from '@/data/siteMetadata'
import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' ||
      siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper
        aria-label='Search'
        className='retro-button mr-1 ml-2 h-8 w-8 rounded-md bg-gray-100 p-1.5 dark:bg-gray-800'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='text-gray-900 dark:text-gray-100'
        >
          <path
            fillRule='evenodd'
            d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
            clipRule='evenodd'
          />
        </svg>
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
