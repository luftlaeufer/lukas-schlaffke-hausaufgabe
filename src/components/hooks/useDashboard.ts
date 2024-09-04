import { useCallback, useState } from 'react'
import { DashboardQuery$data } from '../__generated__/DashboardQuery.graphql'
import { localState } from '../utils/helper'

interface UseDashboardInterface {
    data: DashboardQuery$data
}

const useDashboard = ({data}: UseDashboardInterface) => {
    const edges = data.Admin.Tree.GetContentNodes?.edges

    // spread all titles from API in an array to use as initial state
    const titlesFromAPI = [
      ...(edges?.map((edge) => edge?.node?.structureDefinition?.title) ?? []),
    ]
  
    // on page refresh get the titles from local storage instead of API
    const getOrderedTitles = useCallback(() => {
        const orderedTitles = localStorage.getItem(localState.TITLE_CARDS)
        return orderedTitles ? JSON.parse(orderedTitles) : titlesFromAPI
      }, [titlesFromAPI])
  
    // titles state
    const [titles, setTitles] = useState<typeof titlesFromAPI>(getOrderedTitles())
  
    // save new title order in local storage, if titles have been re-arranged
    const setTitlesOrder = useCallback(() => localStorage.setItem(localState.TITLE_CARDS, JSON.stringify(titles)), [titles])
  
    // sanitise title from white space and filter empty titles
    const cleanUpTitleFilter = useCallback(
      (input: string | undefined) =>
        input !== undefined && input.trim().length > 0,
      [],
    )

    return {
        titles: titles.filter(title => cleanUpTitleFilter(title)),
        setTitles,
        setTitlesOrder,
    }

}

export default useDashboard