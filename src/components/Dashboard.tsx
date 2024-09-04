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
    <div className='p-4 xl:p-0'>
      <h1 className='text-3xl font-bold mb-4 mt-12'>Lektionen</h1>
      <p className='mb-4'>Ordnen Sie Ihren Lehrplan so, wie Sie es wollen.</p>
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
