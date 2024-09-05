import { graphql, useLazyLoadQuery } from 'react-relay'
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql'
import { Reorder } from 'framer-motion'
import TitleCard from './TitleCard'
import useDashboard from '../hooks/useDashboard'
import { useRef } from 'react'
import Modal from './Modal'
import { createPortal } from 'react-dom'

const DashboardQuery = graphql`
  query DashboardQuery {
    Admin {
      Tree {
        GetContentNodes(first: 10) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
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

  const { titles, setTitles, setTitlesOrder } = useDashboard({ data })

  const dialogRef = useRef<HTMLDialogElement>(null)

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
        <div className='pb-2'>
          {titles.map(
            (title) => title && <TitleCard title={title} key={title} />
          )}
        </div>
      </Reorder.Group>
      <button
        className='mb-16 p-2 px-8 rounded text-white mt-4 bg-blue-600 hover:bg-blue-500 mx-auto block'
        onClick={() => dialogRef.current?.showModal()}
      >
        Mehr anzeigen
      </button>
      {createPortal(<Modal dialogRef={dialogRef} />, document.body)}
    </div>
  )
}

export default Dashboard
