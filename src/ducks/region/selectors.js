import { createSelector } from 'reselect'

const selectBase = state => state.region

export const selectRegions = () => {
  return [
    {
      id: 'gb',
      name: 'Great Britains'
    },
    {
      id: 'us',
      name: 'United States'
    }
  ]
}

export const selectCurrentRegion = createSelector(
  selectBase,
  region => region.region
)
