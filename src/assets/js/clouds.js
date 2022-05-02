import * as klouds from 'klouds';

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
