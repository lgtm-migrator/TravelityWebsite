import * as klouds from 'klouds';

/**
 * Creates kloud instances
 * @param {string} kloud1 scene 1 element id
 * @param {string} kloud2 scene 2 element id
 *
 */
export function createClouds(kloud1, kloud2) {
  klouds.create({
    selector: kloud1,
    speed: 1,
    layerCount: 7,
    cloudColor1: '#a8c2fe',
    cloudColor2: '#fff2f1',
    bgColor: '#a2bdfe',
  });
  klouds.create({
    selector: kloud2,
    speed: -1,
    layerCount: 7,
    cloudColor1: '#a8c2fe',
    cloudColor2: '#fff2f1',
    bgColor: '#aec6fe',
  });
}
