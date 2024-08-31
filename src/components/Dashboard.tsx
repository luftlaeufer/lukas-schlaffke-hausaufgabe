import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import { useCallback } from 'react'

const DashboardQuery = graphql`
  query DashboardQuery {
    Admin {
      Tree {
        GetContentNodes {
          edges {
            node {
              structureDefinition {
                title
              }
              id
            }
          }
        }
      }
    }
  }
`

const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(DashboardQuery, {})
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
      <h1 className='text-2xl'>Dashboard</h1>
      <p>Hello TODO: USERNAME</p>
      <ul className='grid grid-cols-6 gap-3 my-4'>
        {contentNodes
          ?.filter((edge) =>
            cleanUpTitleFilter(edge?.node.structureDefinition.title)
          )
          .map((edge) => (
            <li
              key={edge?.node.id}
              className='p-4 bg-slate-800 rounded mb-2 shadow-md flex items-center justify-center'
            >
              {edge?.node.structureDefinition?.title}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Dashboard
