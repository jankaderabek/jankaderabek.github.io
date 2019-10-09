export interface Talk {
  title: string,
  date: string,
  link: string
}

export interface TalksState {
  talks: Talk[]
}

export const state = (): TalksState => ({
  talks: []
})
