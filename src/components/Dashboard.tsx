import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import Description from './Description'

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
              description
              image {
                url
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

  const hasImageFilter = useCallback((src: string | null | undefined) => {
    return src && src.length > 0
  }, [])

  return (
    <div className='my-4 p-4 xl:p-0'>
      <h1 className='text-3xl my-8 font-bold'>Dashboard</h1>
      <ul className='mt-2 grid md:grid-cols-2 xl:grid-cols-3 gap-8 pb-8'>
        {edges
          ?.filter((edge) =>
            cleanUpTitleFilter(edge?.node?.structureDefinition?.title)
          )
          .filter((edge) => hasImageFilter(edge?.node?.image?.url))
          .map((edge) => (
            <li
              className='p bg-slate-800 rounded mb-3 min-h-36 shadow-md'
              key={edge?.node.id}
            >
              <div className=''>
                <figure className='h-96'>
                  <img
                    className='object-cover w-full h-full rounded-t-md'
                    src={edge?.node?.image?.url!}
                  />
                </figure>
                <div className='p-4'>
                  <h3 className='text-lg font-bold mt-2 mb-4'>
                    {edge?.node.structureDefinition.title}
                  </h3>
                  <Description description={edge?.node.description} />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Dashboard
