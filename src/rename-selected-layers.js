import {
  getSelectedLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showErrorMessage,
  showSuccessMessage,
  TEXT_BOX
} from 'sketch-plugin-helper'

import renameLayers from './rename-layers'

export default function renameSelectedLayers () {
  const layers = getSelectedLayers()
  if (layers.length === 0) {
    showErrorMessage('Select a layer')
    return
  }
  const settings = openSettingsDialog({
    title: 'Rename Selected Layers',
    inputs: [
      {
        type: TEXT_BOX,
        key: 'renameSelectedLayers.layerNamePattern',
        label: 'Layer name'
      }
    ]
  })
  if (!settings) {
    return
  }
  saveTemporarySettings(settings)
  const { layerNamePattern } = settings.renameSelectedLayers
  renameLayers({ layers, layerNamePattern })
  showSuccessMessage('Renamed selected layers')
}
