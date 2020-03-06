import { createSelector } from 'reselect'

const selectBase = state => state.region

export const selectCurrentRegionId = createSelector(
  selectBase,
  region => region.region || 'us'
)

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
  selectRegions,
  selectCurrentRegionId,
  (regions, currentRegion) =>
    regions.find(region => region.id === currentRegion)
)
