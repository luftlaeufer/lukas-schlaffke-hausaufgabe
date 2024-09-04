import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import { useCallback, useState } from 'react'
import { Reorder } from 'framer-motion'

import TitleCard from './TitleCard'

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
  const edges = data.Admin.Tree.GetContentNodes?.edges

  const titles = [
    ...(edges?.map((edge) => edge?.node?.structureDefinition?.title) ?? []),
  ]

  const [titleCards, setTitleCards] = useState(titles)

  // sanitise title from white space and filter empty titles
  const cleanUpTitleFilter = useCallback(
    (input: string | undefined) =>
      input !== undefined && input.trim().length > 0,
    []
  )

  return (
    <div className='my-4 p-4 xl:p-0'>
      <h1 className='text-3xl mb-8 font-bold'>Lektionen</h1>
      <Reorder.Group axis='y' onReorder={setTitleCards} values={titleCards}>
        {titleCards
          .filter((title) => cleanUpTitleFilter(title))
          .map((title) => title && <TitleCard title={title} key={title} />)}
      </Reorder.Group>
    </div>
  )
}

export default Dashboard
