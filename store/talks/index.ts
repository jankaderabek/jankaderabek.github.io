export interface Talk {
  title: string
}

export interface TalksState {
  talks: Talk[]
}

export const state = (): TalksState => ({
  talks: []
})
