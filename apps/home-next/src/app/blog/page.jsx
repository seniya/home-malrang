import { Sandpack } from '@codesandbox/sandpack-react'
import { freeCodeCampDark } from '@codesandbox/sandpack-themes'
export const metadata = {}

export default function BlogPage() {
  const files = {
    '/App.tsx': `export default function App() {
      return <h1>Hello Sandpack</h1>
}`
  }
  return (
    <h1
      style={{
        textAlign: 'center',
        fontSize: 64,
        margin: '25vh 0',
        fontWeight: 'bold'
      }}
    >
      Blog page
      <Sandpack
        template='vite-react-ts'
        theme={freeCodeCampDark}
        options={{
          externalResources: ['https://cdn.tailwindcss.com']
        }}
        files={files}
      />
    </h1>
  )
}
