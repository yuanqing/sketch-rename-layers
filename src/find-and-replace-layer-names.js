import {
  iterateNestedLayers,
  getLayersOnCurrentPage,
  getSelectedLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showSuccessMessage,
  CHECK_BOX,
  DROP_DOWN,
  TEXT_BOX
} from 'sketch-plugin-helper'

export default function findAndReplaceLayerNames () {
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length !== 0
  const settings = openSettingsDialog({
    title: 'Find & Replace Layer Names',
    inputs: [
      {
        type: TEXT_BOX,
        key: 'findAndReplaceLayerNames.findText',
        label: 'Find'
      },
      {
        type: CHECK_BOX,
        key: 'findAndReplaceLayerNames.isCaseSensitive',
        label: 'Case sensitive'
      },
      {
        type: TEXT_BOX,
        key: 'findAndReplaceLayerNames.replaceText',
        label: 'Replace'
      },
      hasSelection && {
        type: DROP_DOWN,
        key: 'findAndReplaceLayerNames.scope',
        label: 'Scope',
        possibleValues: ['Selected layers', 'Current page'],
        value: 'Selected layers'
      }
    ]
  })
  if (!settings) {
    return
  }
  const {
    findText,
    isCaseSensitive,
    replaceText,
    scope
  } = settings.findAndReplaceLayerNames
  const regularExpression = new RegExp(findText, isCaseSensitive ? 'g' : 'gi')
  let count = 0
  const callback = createFindAndReplaceCallback({
    regularExpression,
    replaceText,
    increment: function () {
      count++
    }
  })
  if (scope === 'Selected layers') {
    selectedLayers.forEach(callback)
  } else {
    iterateNestedLayers(getLayersOnCurrentPage(), callback)
  }
  saveTemporarySettings(settings)
  showSuccessMessage(`Renamed ${count} layer${count === 1 ? '' : 's'}`)
}

function createFindAndReplaceCallback ({
  regularExpression,
  replaceText,
  increment
}) {
  return function (layer) {
    if (regularExpression.test(layer.name)) {
      layer.name = layer.name.replace(regularExpression, function () {
        return replaceText
      })
      increment()
    }
  }
}
