import {
  graphql,
  useFragment,
  useLazyLoadQuery,
  usePaginationFragment,
} from 'react-relay'
import type {
  DashboardQuery,
  DashboardQuery$data,
} from './__generated__/DashboardQuery.graphql'
import { useCallback } from 'react'
import type {
  DashboardQueryFragment$data,
  DashboardQueryFragment$key,
} from './__generated__/DashboardQueryFragment.graphql'
import type { DashboardNodesFragment$key } from './__generated__/DashboardNodesFragment.graphql'

const DashboardQuery = graphql`
  query DashboardQuery {
    Admin {
      Tree {
        GetContentNodes {
          ...DashboardNodesFragment
        }

        # GetContentNodes(first: $first, after: $after) {
        #   edges {
        #     node {
        #       structureDefinition {
        #         title
        #       }
        #       id
        #     }
        #     cursor
        #   }
        #   pageInfo {
        #     hasNextPage
        #     endCursor
        #   }
        # }
      }
    }
  }
`

const DashboardNodesFragment = graphql`
  fragment DashboardNodesFragment on TreeNodesConnection {
    edges {
      node {
        structureDefinition {
          title
        }
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
`

const NodeList = ({ data }: { data: DashboardNodesFragment$key }) => {
  const { edges } = useFragment(DashboardNodesFragment, data)

  // const {
  //   data: lazyData,
  //   loadNext,
  //   hasNext,
  //   isLoadingNext,
  // } = usePaginationFragment(DashboardQueryFragment, nodes)

  console.log(edges)

  const loadMore = () => {
    // loadNext(10)
  }

  return (
    <div>
      <ul className='my-4 grid gap-3 grid-cols-3'>
        {edges?.map((edge) => (
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
      <button
        onClick={loadMore}
        className='bg-slate-200 text-slate-950 px-8 py-2 rounded hover:bg-slate-300'
      >
        Load more
      </button>
    </div>
  )
}

const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(DashboardQuery, {})

  // const {
  //   data: lazyData,
  //   loadNext,
  //   hasNext,
  //   isLoadingNext,
  // } = usePaginationFragment(DashboardQueryFragment, data)

  if (!data) {
    return <div className='p-4'>Loading...</div>
  }

  // sanitise title from white space and filter empty titles
  const cleanUpTitleFilter = useCallback((input: string | undefined) => {
    const titleTrimmed = input?.trim()
    return (titleTrimmed && titleTrimmed?.length > 0) ?? false
  }, [])

  // const loadMore = () => {
  //   // loadNext(10)
  // }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <NodeList data={data.Admin.Tree.GetContentNodes} />
      {/* <ul className='my-4 grid gap-3 grid-cols-3'>
        {contentNodes
          // ?.filter((edge) =>
          //   cleanUpTitleFilter(edge?.node.structureDefinition.title)
          // )
          ?.map((edge) => (
            <li
              key={edge?.node.id}
              className='p-4 bg-slate-800 rounded mb-3 min-h-36 shadow-md'
            >
              <span className='text-lg font-semibold'>
                {edge?.node.structureDefinition?.title}
              </span>
            </li>
          ))}
      </ul> */}
      {/* <button
        onClick={loadMore}
        className='bg-slate-200 text-slate-950 px-8 py-2 rounded hover:bg-slate-300'
      >
        Load more
      </button> */}
    </div>
  )
}

export default Dashboard
