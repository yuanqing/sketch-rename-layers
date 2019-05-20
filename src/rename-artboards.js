import {
  getArtboardsOnCurrentPage,
  getSelectedArtboards,
  openSettingsDialog,
  saveTemporarySettings,
  showSuccessMessage,
  DROP_DOWN,
  TEXT_BOX
} from 'sketch-plugin-helper'

import renameLayers from './rename-layers'

export default function renameArtboards () {
  const selectedArtboards = getSelectedArtboards()
  const hasSelection = selectedArtboards.length !== 0
  const settings = openSettingsDialog({
    title: 'Rename Artboards',
    formFields: [
      {
        type: TEXT_BOX,
        key: 'renameArtboards.layerNamePattern',
        label: 'New artboard name'
      },
      hasSelection && {
        type: DROP_DOWN,
        key: 'renameArtboards.scope',
        label: 'Scope',
        possibleValues: ['Selected artboards', 'Current page'],
        value: 'Selected artboards'
      }
    ]
  })
  if (!settings) {
    return
  }
  saveTemporarySettings(settings)
  const { layerNamePattern, scope } = settings.renameArtboards
  const layers =
    scope === 'Selected artboards'
      ? selectedArtboards
      : getArtboardsOnCurrentPage()
  renameLayers({ layers, layerNamePattern })
  showSuccessMessage('Renamed artboards')
}
