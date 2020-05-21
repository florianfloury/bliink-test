import SVG from './svg/';

export default class AssetsHelpers {
  static getSVG(svgName) {
    return SVG[svgName];
  }
}