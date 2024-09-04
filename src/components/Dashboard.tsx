import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import { Reorder } from 'framer-motion'
import TitleCard from './TitleCard'
import useDashboard from './hooks/useDashboard'

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

  const { titles, setTitles, setTitlesOrder } = useDashboard({ data })

  return (
    <div className='my-4 p-4 xl:p-0'>
      <h1 className='text-3xl mb-8 font-bold'>Lektionen</h1>
      <Reorder.Group
        values={titles}
        onReorder={setTitles}
        axis='y'
        onMouseUp={() => setTitlesOrder()}
      >
        <div className='pb-8'>
          {titles.map(
            (title) => title && <TitleCard title={title} key={title} />
          )}
        </div>
      </Reorder.Group>
    </div>
  )
}

export default Dashboard
