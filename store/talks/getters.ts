import { GetterTree } from '~/node_modules/vuex'
import { Talk, TalksState } from '~/store/talks/index'

export const GET_TALKS = 'talks/getTalks'

export const getters: GetterTree<TalksState, TalksState> = {
  getTalks: (state: TalksState): Talk[] => state.talks
}

export default getters
