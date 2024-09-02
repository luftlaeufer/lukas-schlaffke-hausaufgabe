import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import { useCallback } from 'react'

const DashboardQuery = graphql`
  query DashboardQuery($cursor: String) {
    Admin {
      Tree {
        GetContentNodes(first: 5, after: $cursor) {
          edges {
            node {
              structureDefinition {
                title
              }
              id
            }
            cursor
          }
        }
      }
    }
  }
`

const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(DashboardQuery, {
    cursor: null,
  })
  const { edges: contentNodes } = data?.Admin?.Tree?.GetContentNodes ?? {}

  if (!data) {
    return <div className='p-4'>Loading...</div>
  }

  // sanitise title from white space and filter empty titles
  const cleanUpTitleFilter = useCallback((input: string | undefined) => {
    const titleTrimmed = input?.trim()
    return (titleTrimmed && titleTrimmed?.length > 0) ?? false
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <ul className='my-4 grid gap-3 grid-cols-3'>
        {contentNodes
          ?.filter((edge) =>
            cleanUpTitleFilter(edge?.node.structureDefinition.title)
          )
          .map((edge) => (
            <li
              key={edge?.node.id}
              className='p-4 bg-slate-800 rounded mb-3 min-h-36 shadow-md'
            >
              <span className='text-lg font-semibold'>
                {edge?.node.structureDefinition?.title}
              </span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Dashboard
