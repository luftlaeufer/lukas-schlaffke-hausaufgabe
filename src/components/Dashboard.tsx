import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import { useCallback } from 'react'

const DashboardQuery = graphql`
  query DashboardQuery {
    Admin {
      Tree {
        GetContentNodes(first: 30) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              id
              structureDefinition {
                title
              }
            }
          }
        }
      }
    }
  }
`

const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(DashboardQuery, {})
  const edges = data.Admin.Tree.GetContentNodes?.edges ?? []

  // sanitise title from white space and filter empty titles
  const cleanUpTitleFilter = useCallback((input: string | undefined) => {
    const titleTrimmed = input?.trim()
    return (titleTrimmed && titleTrimmed?.length > 0) ?? false
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <ul className='mt-2'>
        {edges
          ?.filter((edge) =>
            cleanUpTitleFilter(edge?.node?.structureDefinition?.title)
          )
          .map((edge) => (
            <li
              className='p-4 bg-slate-800 rounded mb-3 min-h-36 shadow-md'
              key={edge?.node.id}
            >
              <h3>{edge?.node.structureDefinition.title}</h3>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Dashboard
