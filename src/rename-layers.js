import { calculateCoordinatesRelativeToPage } from 'sketch-plugin-helper'

export default function renameLayers ({ layers, layerNamePattern }) {
  preprocessLayers(layers).forEach(function ({ layer, x, xy, y, yx }, index) {
    layer.name = interpolate({
      pattern: layerNamePattern,
      values: {
        i: index + 1,
        n: layer.name,
        x,
        xy,
        y,
        yx
      }
    })
  })
}

function preprocessLayers (layers) {
  const layersWithAbsoluteCoordinates = layers.map(function (layer) {
    const { x, y } = calculateCoordinatesRelativeToPage(layer)
    return {
      x,
      y,
      id: layer.id
    }
  })
  const yIndices = mapLayerIdsToIndices({
    layers: layersWithAbsoluteCoordinates,
    primaryIndexKey: 'y',
    secondaryIndexKey: 'x'
  })
  const xIndices = mapLayerIdsToIndices({
    layers: layersWithAbsoluteCoordinates,
    primaryIndexKey: 'x',
    secondaryIndexKey: 'y'
  })
  return layers.map(function (layer) {
    const id = layer.id
    return {
      layer,
      x: xIndices[id].primaryIndex,
      xy: xIndices[id].secondaryIndex,
      y: yIndices[id].primaryIndex,
      yx: yIndices[id].secondaryIndex
    }
  })
}

function mapLayerIdsToIndices ({ layers, primaryIndexKey, secondaryIndexKey }) {
  const mapCoordinatesToLayers = {}
  const coordinates = []
  layers.forEach(function (layer) {
    const coordinate = layer[primaryIndexKey]
    if (!mapCoordinatesToLayers[coordinate]) {
      mapCoordinatesToLayers[coordinate] = []
    }
    if (coordinates.indexOf(coordinate) === -1) {
      coordinates.push(coordinate)
    }
    mapCoordinatesToLayers[coordinate].push(layer)
  })
  const result = {}
  coordinates
    .sort(function (a, b) {
      return a - b
    })
    .forEach(function (coordinate, primaryIndex) {
      mapCoordinatesToLayers[coordinate]
        .sort(function (a, b) {
          return a[secondaryIndexKey] - b[secondaryIndexKey]
        })
        .forEach(function ({ id }, secondaryIndex) {
          result[id] = {
            primaryIndex: primaryIndex + 1,
            secondaryIndex: secondaryIndex + 1
          }
        })
    })
  return result
}

const keyRegularExpression = /(%(?:i|n|xy?|yx?))/g

function interpolate ({ pattern, values }) {
  return pattern.replace(keyRegularExpression, function (match, key) {
    return values[key.substring(1)]
  })
}
