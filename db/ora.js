var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __markAsModule = (target) =>
  __defProp(target, '__esModule', { value: true })
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    )
  }
var __export = (target, all) => {
  __markAsModule(target)
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
var __reExport = (target, module2, desc) => {
  if (
    (module2 && typeof module2 === 'object') ||
    typeof module2 === 'function'
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== 'default')
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        })
  }
  return target
}
var __toModule = (module2) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        'default',
        module2 && module2.__esModule && 'default' in module2
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  )
}

// node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
var require_color_name = __commonJS({
  'node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js'(
    exports,
    module2
  ) {
    'use strict'
    module2.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    }
  },
})

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  'node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js'(
    exports,
    module2
  ) {
    var cssKeywords = require_color_name()
    var reverseKeywords = {}
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key
    }
    var convert = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] },
    }
    module2.exports = convert
    for (const model of Object.keys(convert)) {
      if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model)
      }
      if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model)
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model)
      }
      const { channels, labels } = convert[model]
      delete convert[model].channels
      delete convert[model].labels
      Object.defineProperty(convert[model], 'channels', { value: channels })
      Object.defineProperty(convert[model], 'labels', { value: labels })
    }
    convert.rgb.hsl = function (rgb) {
      const r = rgb[0] / 255
      const g = rgb[1] / 255
      const b = rgb[2] / 255
      const min = Math.min(r, g, b)
      const max = Math.max(r, g, b)
      const delta = max - min
      let h
      let s
      if (max === min) {
        h = 0
      } else if (r === max) {
        h = (g - b) / delta
      } else if (g === max) {
        h = 2 + (b - r) / delta
      } else if (b === max) {
        h = 4 + (r - g) / delta
      }
      h = Math.min(h * 60, 360)
      if (h < 0) {
        h += 360
      }
      const l = (min + max) / 2
      if (max === min) {
        s = 0
      } else if (l <= 0.5) {
        s = delta / (max + min)
      } else {
        s = delta / (2 - max - min)
      }
      return [h, s * 100, l * 100]
    }
    convert.rgb.hsv = function (rgb) {
      let rdif
      let gdif
      let bdif
      let h
      let s
      const r = rgb[0] / 255
      const g = rgb[1] / 255
      const b = rgb[2] / 255
      const v = Math.max(r, g, b)
      const diff = v - Math.min(r, g, b)
      const diffc = function (c) {
        return (v - c) / 6 / diff + 1 / 2
      }
      if (diff === 0) {
        h = 0
        s = 0
      } else {
        s = diff / v
        rdif = diffc(r)
        gdif = diffc(g)
        bdif = diffc(b)
        if (r === v) {
          h = bdif - gdif
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif
        }
        if (h < 0) {
          h += 1
        } else if (h > 1) {
          h -= 1
        }
      }
      return [h * 360, s * 100, v * 100]
    }
    convert.rgb.hwb = function (rgb) {
      const r = rgb[0]
      const g = rgb[1]
      let b = rgb[2]
      const h = convert.rgb.hsl(rgb)[0]
      const w = (1 / 255) * Math.min(r, Math.min(g, b))
      b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))
      return [h, w * 100, b * 100]
    }
    convert.rgb.cmyk = function (rgb) {
      const r = rgb[0] / 255
      const g = rgb[1] / 255
      const b = rgb[2] / 255
      const k = Math.min(1 - r, 1 - g, 1 - b)
      const c = (1 - r - k) / (1 - k) || 0
      const m = (1 - g - k) / (1 - k) || 0
      const y = (1 - b - k) / (1 - k) || 0
      return [c * 100, m * 100, y * 100, k * 100]
    }
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2
    }
    convert.rgb.keyword = function (rgb) {
      const reversed = reverseKeywords[rgb]
      if (reversed) {
        return reversed
      }
      let currentClosestDistance = Infinity
      let currentClosestKeyword
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword]
        const distance = comparativeDistance(rgb, value)
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance
          currentClosestKeyword = keyword
        }
      }
      return currentClosestKeyword
    }
    convert.keyword.rgb = function (keyword) {
      return cssKeywords[keyword]
    }
    convert.rgb.xyz = function (rgb) {
      let r = rgb[0] / 255
      let g = rgb[1] / 255
      let b = rgb[2] / 255
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505
      return [x * 100, y * 100, z * 100]
    }
    convert.rgb.lab = function (rgb) {
      const xyz = convert.rgb.xyz(rgb)
      let x = xyz[0]
      let y = xyz[1]
      let z = xyz[2]
      x /= 95.047
      y /= 100
      z /= 108.883
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116
      const l = 116 * y - 16
      const a = 500 * (x - y)
      const b = 200 * (y - z)
      return [l, a, b]
    }
    convert.hsl.rgb = function (hsl) {
      const h = hsl[0] / 360
      const s = hsl[1] / 100
      const l = hsl[2] / 100
      let t2
      let t3
      let val
      if (s === 0) {
        val = l * 255
        return [val, val, val]
      }
      if (l < 0.5) {
        t2 = l * (1 + s)
      } else {
        t2 = l + s - l * s
      }
      const t1 = 2 * l - t2
      const rgb = [0, 0, 0]
      for (let i = 0; i < 3; i++) {
        t3 = h + (1 / 3) * -(i - 1)
        if (t3 < 0) {
          t3++
        }
        if (t3 > 1) {
          t3--
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3
        } else if (2 * t3 < 1) {
          val = t2
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
        } else {
          val = t1
        }
        rgb[i] = val * 255
      }
      return rgb
    }
    convert.hsl.hsv = function (hsl) {
      const h = hsl[0]
      let s = hsl[1] / 100
      let l = hsl[2] / 100
      let smin = s
      const lmin = Math.max(l, 0.01)
      l *= 2
      s *= l <= 1 ? l : 2 - l
      smin *= lmin <= 1 ? lmin : 2 - lmin
      const v = (l + s) / 2
      const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)
      return [h, sv * 100, v * 100]
    }
    convert.hsv.rgb = function (hsv) {
      const h = hsv[0] / 60
      const s = hsv[1] / 100
      let v = hsv[2] / 100
      const hi = Math.floor(h) % 6
      const f = h - Math.floor(h)
      const p = 255 * v * (1 - s)
      const q = 255 * v * (1 - s * f)
      const t = 255 * v * (1 - s * (1 - f))
      v *= 255
      switch (hi) {
        case 0:
          return [v, t, p]
        case 1:
          return [q, v, p]
        case 2:
          return [p, v, t]
        case 3:
          return [p, q, v]
        case 4:
          return [t, p, v]
        case 5:
          return [v, p, q]
      }
    }
    convert.hsv.hsl = function (hsv) {
      const h = hsv[0]
      const s = hsv[1] / 100
      const v = hsv[2] / 100
      const vmin = Math.max(v, 0.01)
      let sl
      let l
      l = (2 - s) * v
      const lmin = (2 - s) * vmin
      sl = s * vmin
      sl /= lmin <= 1 ? lmin : 2 - lmin
      sl = sl || 0
      l /= 2
      return [h, sl * 100, l * 100]
    }
    convert.hwb.rgb = function (hwb) {
      const h = hwb[0] / 360
      let wh = hwb[1] / 100
      let bl = hwb[2] / 100
      const ratio = wh + bl
      let f
      if (ratio > 1) {
        wh /= ratio
        bl /= ratio
      }
      const i = Math.floor(6 * h)
      const v = 1 - bl
      f = 6 * h - i
      if ((i & 1) !== 0) {
        f = 1 - f
      }
      const n = wh + f * (v - wh)
      let r
      let g
      let b
      switch (i) {
        default:
        case 6:
        case 0:
          r = v
          g = n
          b = wh
          break
        case 1:
          r = n
          g = v
          b = wh
          break
        case 2:
          r = wh
          g = v
          b = n
          break
        case 3:
          r = wh
          g = n
          b = v
          break
        case 4:
          r = n
          g = wh
          b = v
          break
        case 5:
          r = v
          g = wh
          b = n
          break
      }
      return [r * 255, g * 255, b * 255]
    }
    convert.cmyk.rgb = function (cmyk) {
      const c = cmyk[0] / 100
      const m = cmyk[1] / 100
      const y = cmyk[2] / 100
      const k = cmyk[3] / 100
      const r = 1 - Math.min(1, c * (1 - k) + k)
      const g = 1 - Math.min(1, m * (1 - k) + k)
      const b = 1 - Math.min(1, y * (1 - k) + k)
      return [r * 255, g * 255, b * 255]
    }
    convert.xyz.rgb = function (xyz) {
      const x = xyz[0] / 100
      const y = xyz[1] / 100
      const z = xyz[2] / 100
      let r
      let g
      let b
      r = x * 3.2406 + y * -1.5372 + z * -0.4986
      g = x * -0.9689 + y * 1.8758 + z * 0.0415
      b = x * 0.0557 + y * -0.204 + z * 1.057
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92
      r = Math.min(Math.max(0, r), 1)
      g = Math.min(Math.max(0, g), 1)
      b = Math.min(Math.max(0, b), 1)
      return [r * 255, g * 255, b * 255]
    }
    convert.xyz.lab = function (xyz) {
      let x = xyz[0]
      let y = xyz[1]
      let z = xyz[2]
      x /= 95.047
      y /= 100
      z /= 108.883
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116
      const l = 116 * y - 16
      const a = 500 * (x - y)
      const b = 200 * (y - z)
      return [l, a, b]
    }
    convert.lab.xyz = function (lab) {
      const l = lab[0]
      const a = lab[1]
      const b = lab[2]
      let x
      let y
      let z
      y = (l + 16) / 116
      x = a / 500 + y
      z = y - b / 200
      const y2 = y ** 3
      const x2 = x ** 3
      const z2 = z ** 3
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787
      x *= 95.047
      y *= 100
      z *= 108.883
      return [x, y, z]
    }
    convert.lab.lch = function (lab) {
      const l = lab[0]
      const a = lab[1]
      const b = lab[2]
      let h
      const hr = Math.atan2(b, a)
      h = (hr * 360) / 2 / Math.PI
      if (h < 0) {
        h += 360
      }
      const c = Math.sqrt(a * a + b * b)
      return [l, c, h]
    }
    convert.lch.lab = function (lch) {
      const l = lch[0]
      const c = lch[1]
      const h = lch[2]
      const hr = (h / 360) * 2 * Math.PI
      const a = c * Math.cos(hr)
      const b = c * Math.sin(hr)
      return [l, a, b]
    }
    convert.rgb.ansi16 = function (args, saturation = null) {
      const [r, g, b] = args
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation
      value = Math.round(value / 50)
      if (value === 0) {
        return 30
      }
      let ansi =
        30 +
        ((Math.round(b / 255) << 2) |
          (Math.round(g / 255) << 1) |
          Math.round(r / 255))
      if (value === 2) {
        ansi += 60
      }
      return ansi
    }
    convert.hsv.ansi16 = function (args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2])
    }
    convert.rgb.ansi256 = function (args) {
      const r = args[0]
      const g = args[1]
      const b = args[2]
      if (r === g && g === b) {
        if (r < 8) {
          return 16
        }
        if (r > 248) {
          return 231
        }
        return Math.round(((r - 8) / 247) * 24) + 232
      }
      const ansi =
        16 +
        36 * Math.round((r / 255) * 5) +
        6 * Math.round((g / 255) * 5) +
        Math.round((b / 255) * 5)
      return ansi
    }
    convert.ansi16.rgb = function (args) {
      let color = args % 10
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5
        }
        color = (color / 10.5) * 255
        return [color, color, color]
      }
      const mult = (~~(args > 50) + 1) * 0.5
      const r = (color & 1) * mult * 255
      const g = ((color >> 1) & 1) * mult * 255
      const b = ((color >> 2) & 1) * mult * 255
      return [r, g, b]
    }
    convert.ansi256.rgb = function (args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8
        return [c, c, c]
      }
      args -= 16
      let rem
      const r = (Math.floor(args / 36) / 5) * 255
      const g = (Math.floor((rem = args % 36) / 6) / 5) * 255
      const b = ((rem % 6) / 5) * 255
      return [r, g, b]
    }
    convert.rgb.hex = function (args) {
      const integer =
        ((Math.round(args[0]) & 255) << 16) +
        ((Math.round(args[1]) & 255) << 8) +
        (Math.round(args[2]) & 255)
      const string = integer.toString(16).toUpperCase()
      return '000000'.substring(string.length) + string
    }
    convert.hex.rgb = function (args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
      if (!match) {
        return [0, 0, 0]
      }
      let colorString = match[0]
      if (match[0].length === 3) {
        colorString = colorString
          .split('')
          .map((char) => {
            return char + char
          })
          .join('')
      }
      const integer = parseInt(colorString, 16)
      const r = (integer >> 16) & 255
      const g = (integer >> 8) & 255
      const b = integer & 255
      return [r, g, b]
    }
    convert.rgb.hcg = function (rgb) {
      const r = rgb[0] / 255
      const g = rgb[1] / 255
      const b = rgb[2] / 255
      const max = Math.max(Math.max(r, g), b)
      const min = Math.min(Math.min(r, g), b)
      const chroma = max - min
      let grayscale
      let hue
      if (chroma < 1) {
        grayscale = min / (1 - chroma)
      } else {
        grayscale = 0
      }
      if (chroma <= 0) {
        hue = 0
      } else if (max === r) {
        hue = ((g - b) / chroma) % 6
      } else if (max === g) {
        hue = 2 + (b - r) / chroma
      } else {
        hue = 4 + (r - g) / chroma
      }
      hue /= 6
      hue %= 1
      return [hue * 360, chroma * 100, grayscale * 100]
    }
    convert.hsl.hcg = function (hsl) {
      const s = hsl[1] / 100
      const l = hsl[2] / 100
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l)
      let f = 0
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c)
      }
      return [hsl[0], c * 100, f * 100]
    }
    convert.hsv.hcg = function (hsv) {
      const s = hsv[1] / 100
      const v = hsv[2] / 100
      const c = s * v
      let f = 0
      if (c < 1) {
        f = (v - c) / (1 - c)
      }
      return [hsv[0], c * 100, f * 100]
    }
    convert.hcg.rgb = function (hcg) {
      const h = hcg[0] / 360
      const c = hcg[1] / 100
      const g = hcg[2] / 100
      if (c === 0) {
        return [g * 255, g * 255, g * 255]
      }
      const pure = [0, 0, 0]
      const hi = (h % 1) * 6
      const v = hi % 1
      const w = 1 - v
      let mg = 0
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1
          pure[1] = v
          pure[2] = 0
          break
        case 1:
          pure[0] = w
          pure[1] = 1
          pure[2] = 0
          break
        case 2:
          pure[0] = 0
          pure[1] = 1
          pure[2] = v
          break
        case 3:
          pure[0] = 0
          pure[1] = w
          pure[2] = 1
          break
        case 4:
          pure[0] = v
          pure[1] = 0
          pure[2] = 1
          break
        default:
          pure[0] = 1
          pure[1] = 0
          pure[2] = w
      }
      mg = (1 - c) * g
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255,
      ]
    }
    convert.hcg.hsv = function (hcg) {
      const c = hcg[1] / 100
      const g = hcg[2] / 100
      const v = c + g * (1 - c)
      let f = 0
      if (v > 0) {
        f = c / v
      }
      return [hcg[0], f * 100, v * 100]
    }
    convert.hcg.hsl = function (hcg) {
      const c = hcg[1] / 100
      const g = hcg[2] / 100
      const l = g * (1 - c) + 0.5 * c
      let s = 0
      if (l > 0 && l < 0.5) {
        s = c / (2 * l)
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l))
      }
      return [hcg[0], s * 100, l * 100]
    }
    convert.hcg.hwb = function (hcg) {
      const c = hcg[1] / 100
      const g = hcg[2] / 100
      const v = c + g * (1 - c)
      return [hcg[0], (v - c) * 100, (1 - v) * 100]
    }
    convert.hwb.hcg = function (hwb) {
      const w = hwb[1] / 100
      const b = hwb[2] / 100
      const v = 1 - b
      const c = v - w
      let g = 0
      if (c < 1) {
        g = (v - c) / (1 - c)
      }
      return [hwb[0], c * 100, g * 100]
    }
    convert.apple.rgb = function (apple) {
      return [
        (apple[0] / 65535) * 255,
        (apple[1] / 65535) * 255,
        (apple[2] / 65535) * 255,
      ]
    }
    convert.rgb.apple = function (rgb) {
      return [
        (rgb[0] / 255) * 65535,
        (rgb[1] / 255) * 65535,
        (rgb[2] / 255) * 65535,
      ]
    }
    convert.gray.rgb = function (args) {
      return [
        (args[0] / 100) * 255,
        (args[0] / 100) * 255,
        (args[0] / 100) * 255,
      ]
    }
    convert.gray.hsl = function (args) {
      return [0, 0, args[0]]
    }
    convert.gray.hsv = convert.gray.hsl
    convert.gray.hwb = function (gray) {
      return [0, 100, gray[0]]
    }
    convert.gray.cmyk = function (gray) {
      return [0, 0, 0, gray[0]]
    }
    convert.gray.lab = function (gray) {
      return [gray[0], 0, 0]
    }
    convert.gray.hex = function (gray) {
      const val = Math.round((gray[0] / 100) * 255) & 255
      const integer = (val << 16) + (val << 8) + val
      const string = integer.toString(16).toUpperCase()
      return '000000'.substring(string.length) + string
    }
    convert.rgb.gray = function (rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3
      return [(val / 255) * 100]
    }
  },
})

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
var require_route = __commonJS({
  'node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js'(
    exports,
    module2
  ) {
    var conversions = require_conversions()
    function buildGraph() {
      const graph = {}
      const models = Object.keys(conversions)
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null,
        }
      }
      return graph
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph()
      const queue = [fromModel]
      graph[fromModel].distance = 0
      while (queue.length) {
        const current = queue.pop()
        const adjacents = Object.keys(conversions[current])
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i]
          const node = graph[adjacent]
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1
            node.parent = current
            queue.unshift(adjacent)
          }
        }
      }
      return graph
    }
    function link(from, to) {
      return function (args) {
        return to(from(args))
      }
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel]
      let fn = conversions[graph[toModel].parent][toModel]
      let cur = graph[toModel].parent
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent)
        fn = link(conversions[graph[cur].parent][cur], fn)
        cur = graph[cur].parent
      }
      fn.conversion = path
      return fn
    }
    module2.exports = function (fromModel) {
      const graph = deriveBFS(fromModel)
      const conversion = {}
      const models = Object.keys(graph)
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i]
        const node = graph[toModel]
        if (node.parent === null) {
          continue
        }
        conversion[toModel] = wrapConversion(toModel, graph)
      }
      return conversion
    }
  },
})

// node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  'node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js'(
    exports,
    module2
  ) {
    var conversions = require_conversions()
    var route = require_route()
    var convert = {}
    var models = Object.keys(conversions)
    function wrapRaw(fn) {
      const wrappedFn = function (...args) {
        const arg0 = args[0]
        if (arg0 === void 0 || arg0 === null) {
          return arg0
        }
        if (arg0.length > 1) {
          args = arg0
        }
        return fn(args)
      }
      if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion
      }
      return wrappedFn
    }
    function wrapRounded(fn) {
      const wrappedFn = function (...args) {
        const arg0 = args[0]
        if (arg0 === void 0 || arg0 === null) {
          return arg0
        }
        if (arg0.length > 1) {
          args = arg0
        }
        const result = fn(args)
        if (typeof result === 'object') {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i])
          }
        }
        return result
      }
      if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion
      }
      return wrappedFn
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {}
      Object.defineProperty(convert[fromModel], 'channels', {
        value: conversions[fromModel].channels,
      })
      Object.defineProperty(convert[fromModel], 'labels', {
        value: conversions[fromModel].labels,
      })
      const routes = route(fromModel)
      const routeModels = Object.keys(routes)
      routeModels.forEach((toModel) => {
        const fn = routes[toModel]
        convert[fromModel][toModel] = wrapRounded(fn)
        convert[fromModel][toModel].raw = wrapRaw(fn)
      })
    })
    module2.exports = convert
  },
})

// node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  'node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var wrapAnsi16 =
      (fn, offset) =>
      (...args) => {
        const code = fn(...args)
        return `[${code + offset}m`
      }
    var wrapAnsi256 =
      (fn, offset) =>
      (...args) => {
        const code = fn(...args)
        return `[${38 + offset};5;${code}m`
      }
    var wrapAnsi16m =
      (fn, offset) =>
      (...args) => {
        const rgb = fn(...args)
        return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`
      }
    var ansi2ansi = (n) => n
    var rgb2rgb = (r, g, b) => [r, g, b]
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get()
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true,
          })
          return value
        },
        enumerable: true,
        configurable: true,
      })
    }
    var colorConvert
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert()
      }
      const offset = isBackground ? 10 : 0
      const styles = {}
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset)
        } else if (typeof suite === 'object') {
          styles[name] = wrap(suite[targetSpace], offset)
        }
      }
      return styles
    }
    function assembleStyles() {
      const codes = new Map()
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      }
      styles.color.gray = styles.color.blackBright
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright
      styles.color.grey = styles.color.blackBright
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `[${style[0]}m`,
            close: `[${style[1]}m`,
          }
          group[styleName] = styles[styleName]
          codes.set(style[0], style[1])
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false,
        })
      }
      Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false,
      })
      styles.color.close = '[39m'
      styles.bgColor.close = '[49m'
      setLazyProperty(styles.color, 'ansi', () =>
        makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false)
      )
      setLazyProperty(styles.color, 'ansi256', () =>
        makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false)
      )
      setLazyProperty(styles.color, 'ansi16m', () =>
        makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false)
      )
      setLazyProperty(styles.bgColor, 'ansi', () =>
        makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true)
      )
      setLazyProperty(styles.bgColor, 'ansi256', () =>
        makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true)
      )
      setLazyProperty(styles.bgColor, 'ansi16m', () =>
        makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true)
      )
      return styles
    }
    Object.defineProperty(module2, 'exports', {
      enumerable: true,
      get: assembleStyles,
    })
  },
})

// node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  'node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js'(
    exports,
    module2
  ) {
    'use strict'
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--'
      const position = argv.indexOf(prefix + flag)
      const terminatorPosition = argv.indexOf('--')
      return (
        position !== -1 &&
        (terminatorPosition === -1 || position < terminatorPosition)
      )
    }
  },
})

// node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  'node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var os = require('os')
    var tty = require('tty')
    var hasFlag = require_has_flag()
    var { env } = process
    var forceColor
    if (
      hasFlag('no-color') ||
      hasFlag('no-colors') ||
      hasFlag('color=false') ||
      hasFlag('color=never')
    ) {
      forceColor = 0
    } else if (
      hasFlag('color') ||
      hasFlag('colors') ||
      hasFlag('color=true') ||
      hasFlag('color=always')
    ) {
      forceColor = 1
    }
    if ('FORCE_COLOR' in env) {
      if (env.FORCE_COLOR === 'true') {
        forceColor = 1
      } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0
      } else {
        forceColor =
          env.FORCE_COLOR.length === 0
            ? 1
            : Math.min(parseInt(env.FORCE_COLOR, 10), 3)
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3,
      }
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0
      }
      if (
        hasFlag('color=16m') ||
        hasFlag('color=full') ||
        hasFlag('color=truecolor')
      ) {
        return 3
      }
      if (hasFlag('color=256')) {
        return 2
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0
      }
      const min = forceColor || 0
      if (env.TERM === 'dumb') {
        return min
      }
      if (process.platform === 'win32') {
        const osRelease = os.release().split('.')
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2
        }
        return 1
      }
      if ('CI' in env) {
        if (
          [
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE',
          ].some((sign) => sign in env) ||
          env.CI_NAME === 'codeship'
        ) {
          return 1
        }
        return min
      }
      if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION)
          ? 1
          : 0
      }
      if (env.COLORTERM === 'truecolor') {
        return 3
      }
      if ('TERM_PROGRAM' in env) {
        const version = parseInt(
          (env.TERM_PROGRAM_VERSION || '').split('.')[0],
          10
        )
        switch (env.TERM_PROGRAM) {
          case 'iTerm.app':
            return version >= 3 ? 3 : 2
          case 'Apple_Terminal':
            return 2
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2
      }
      if (
        /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          env.TERM
        )
      ) {
        return 1
      }
      if ('COLORTERM' in env) {
        return 1
      }
      return min
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY)
      return translateLevel(level)
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2))),
    }
  },
})

// node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/util.js
var require_util = __commonJS({
  'node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/util.js'(
    exports,
    module2
  ) {
    'use strict'
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring)
      if (index === -1) {
        return string
      }
      const substringLength = substring.length
      let endIndex = 0
      let returnValue = ''
      do {
        returnValue +=
          string.substr(endIndex, index - endIndex) + substring + replacer
        endIndex = index + substringLength
        index = string.indexOf(substring, endIndex)
      } while (index !== -1)
      returnValue += string.substr(endIndex)
      return returnValue
    }
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0
      let returnValue = ''
      do {
        const gotCR = string[index - 1] === '\r'
        returnValue +=
          string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) +
          prefix +
          (gotCR ? '\r\n' : '\n') +
          postfix
        endIndex = index + 1
        index = string.indexOf('\n', endIndex)
      } while (index !== -1)
      returnValue += string.substr(endIndex)
      return returnValue
    }
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex,
    }
  },
})

// node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  'node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/templates.js'(
    exports,
    module2
  ) {
    'use strict'
    var TEMPLATE_REGEX =
      /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/
    var ESCAPE_REGEX =
      /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi
    var ESCAPES = new Map([
      ['n', '\n'],
      ['r', '\r'],
      ['t', '	'],
      ['b', '\b'],
      ['f', '\f'],
      ['v', '\v'],
      ['0', '\0'],
      ['\\', '\\'],
      ['e', ''],
      ['a', '\x07'],
    ])
    function unescape(c) {
      const u = c[0] === 'u'
      const bracket = c[1] === '{'
      if (
        (u && !bracket && c.length === 5) ||
        (c[0] === 'x' && c.length === 3)
      ) {
        return String.fromCharCode(parseInt(c.slice(1), 16))
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16))
      }
      return ESCAPES.get(c) || c
    }
    function parseArguments(name, arguments_) {
      const results = []
      const chunks = arguments_.trim().split(/\s*,\s*/g)
      let matches
      for (const chunk of chunks) {
        const number = Number(chunk)
        if (!Number.isNaN(number)) {
          results.push(number)
        } else if ((matches = chunk.match(STRING_REGEX))) {
          results.push(
            matches[2].replace(ESCAPE_REGEX, (m, escape, character) =>
              escape ? unescape(escape) : character
            )
          )
        } else {
          throw new Error(
            `Invalid Chalk template style argument: ${chunk} (in style '${name}')`
          )
        }
      }
      return results
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0
      const results = []
      let matches
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1]
        if (matches[2]) {
          const args = parseArguments(name, matches[2])
          results.push([name].concat(args))
        } else {
          results.push([name])
        }
      }
      return results
    }
    function buildStyle(chalk3, styles) {
      const enabled = {}
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1)
        }
      }
      let current = chalk3
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`)
        }
        current =
          styles2.length > 0
            ? current[styleName](...styles2)
            : current[styleName]
      }
      return current
    }
    module2.exports = (chalk3, temporary) => {
      const styles = []
      const chunks = []
      let chunk = []
      temporary.replace(
        TEMPLATE_REGEX,
        (m, escapeCharacter, inverse, style, close, character) => {
          if (escapeCharacter) {
            chunk.push(unescape(escapeCharacter))
          } else if (style) {
            const string = chunk.join('')
            chunk = []
            chunks.push(
              styles.length === 0 ? string : buildStyle(chalk3, styles)(string)
            )
            styles.push({ inverse, styles: parseStyle(style) })
          } else if (close) {
            if (styles.length === 0) {
              throw new Error('Found extraneous } in Chalk template literal')
            }
            chunks.push(buildStyle(chalk3, styles)(chunk.join('')))
            chunk = []
            styles.pop()
          } else {
            chunk.push(character)
          }
        }
      )
      chunks.push(chunk.join(''))
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${
          styles.length
        } closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`
        throw new Error(errMessage)
      }
      return chunks.join('')
    }
  },
})

// node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js
var require_source = __commonJS({
  'node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var ansiStyles = require_ansi_styles()
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color()
    var { stringReplaceAll, stringEncaseCRLFWithFirstIndex } = require_util()
    var { isArray } = Array
    var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m']
    var styles = Object.create(null)
    var applyOptions = (object, options = {}) => {
      if (
        options.level &&
        !(
          Number.isInteger(options.level) &&
          options.level >= 0 &&
          options.level <= 3
        )
      ) {
        throw new Error('The `level` option should be an integer from 0 to 3')
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0
      object.level = options.level === void 0 ? colorLevel : options.level
    }
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options)
      }
    }
    var chalkFactory = (options) => {
      const chalk4 = {}
      applyOptions(chalk4, options)
      chalk4.template = (...arguments_) =>
        chalkTag(chalk4.template, ...arguments_)
      Object.setPrototypeOf(chalk4, Chalk.prototype)
      Object.setPrototypeOf(chalk4.template, chalk4)
      chalk4.template.constructor = () => {
        throw new Error(
          '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.'
        )
      }
      chalk4.template.Instance = ChalkClass
      return chalk4.template
    }
    function Chalk(options) {
      return chalkFactory(options)
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(
            this,
            createStyler(style.open, style.close, this._styler),
            this._isEmpty
          )
          Object.defineProperty(this, styleName, { value: builder })
          return builder
        },
      }
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true)
        Object.defineProperty(this, 'visible', { value: builder })
        return builder
      },
    }
    var usedModels = [
      'rgb',
      'hex',
      'keyword',
      'hsl',
      'hsv',
      'hwb',
      'ansi',
      'ansi256',
    ]
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this
          return function (...arguments_) {
            const styler = createStyler(
              ansiStyles.color[levelMapping[level]][model](...arguments_),
              ansiStyles.color.close,
              this._styler
            )
            return createBuilder(this, styler, this._isEmpty)
          }
        },
      }
    }
    for (const model of usedModels) {
      const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1)
      styles[bgModel] = {
        get() {
          const { level } = this
          return function (...arguments_) {
            const styler = createStyler(
              ansiStyles.bgColor[levelMapping[level]][model](...arguments_),
              ansiStyles.bgColor.close,
              this._styler
            )
            return createBuilder(this, styler, this._isEmpty)
          }
        },
      }
    }
    var proto = Object.defineProperties(() => {}, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level
        },
        set(level) {
          this._generator.level = level
        },
      },
    })
    var createStyler = (open, close, parent) => {
      let openAll
      let closeAll
      if (parent === void 0) {
        openAll = open
        closeAll = close
      } else {
        openAll = parent.openAll + open
        closeAll = close + parent.closeAll
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent,
      }
    }
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_))
        }
        return applyStyle(
          builder,
          arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' ')
        )
      }
      Object.setPrototypeOf(builder, proto)
      builder._generator = self
      builder._styler = _styler
      builder._isEmpty = _isEmpty
      return builder
    }
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? '' : string
      }
      let styler = self._styler
      if (styler === void 0) {
        return string
      }
      const { openAll, closeAll } = styler
      if (string.indexOf('') !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open)
          styler = styler.parent
        }
      }
      const lfIndex = string.indexOf('\n')
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(
          string,
          closeAll,
          openAll,
          lfIndex
        )
      }
      return openAll + string + closeAll
    }
    var template
    var chalkTag = (chalk4, ...strings) => {
      const [firstString] = strings
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(' ')
      }
      const arguments_ = strings.slice(1)
      const parts = [firstString.raw[0]]
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
          String(firstString.raw[i])
        )
      }
      if (template === void 0) {
        template = require_templates()
      }
      return template(chalk4, parts.join(''))
    }
    Object.defineProperties(Chalk.prototype, styles)
    var chalk3 = Chalk()
    chalk3.supportsColor = stdoutColor
    chalk3.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 })
    chalk3.stderr.supportsColor = stderrColor
    module2.exports = chalk3
  },
})

// node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  'node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var mimicFn = (to, from) => {
      for (const prop of Reflect.ownKeys(from)) {
        Object.defineProperty(
          to,
          prop,
          Object.getOwnPropertyDescriptor(from, prop)
        )
      }
      return to
    }
    module2.exports = mimicFn
    module2.exports.default = mimicFn
  },
})

// node_modules/.pnpm/onetime@5.1.2/node_modules/onetime/index.js
var require_onetime = __commonJS({
  'node_modules/.pnpm/onetime@5.1.2/node_modules/onetime/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var mimicFn = require_mimic_fn()
    var calledFunctions = new WeakMap()
    var onetime2 = (function_, options = {}) => {
      if (typeof function_ !== 'function') {
        throw new TypeError('Expected a function')
      }
      let returnValue
      let callCount = 0
      const functionName =
        function_.displayName || function_.name || '<anonymous>'
      const onetime3 = function (...arguments_) {
        calledFunctions.set(onetime3, ++callCount)
        if (callCount === 1) {
          returnValue = function_.apply(this, arguments_)
          function_ = null
        } else if (options.throw === true) {
          throw new Error(
            `Function \`${functionName}\` can only be called once`
          )
        }
        return returnValue
      }
      mimicFn(onetime3, function_)
      calledFunctions.set(onetime3, callCount)
      return onetime3
    }
    module2.exports = onetime2
    module2.exports.default = onetime2
    module2.exports.callCount = (function_) => {
      if (!calledFunctions.has(function_)) {
        throw new Error(
          `The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`
        )
      }
      return calledFunctions.get(function_)
    }
  },
})

// node_modules/.pnpm/signal-exit@3.0.5/node_modules/signal-exit/signals.js
var require_signals = __commonJS({
  'node_modules/.pnpm/signal-exit@3.0.5/node_modules/signal-exit/signals.js'(
    exports,
    module2
  ) {
    module2.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM']
    if (process.platform !== 'win32') {
      module2.exports.push(
        'SIGVTALRM',
        'SIGXCPU',
        'SIGXFSZ',
        'SIGUSR2',
        'SIGTRAP',
        'SIGSYS',
        'SIGQUIT',
        'SIGIOT'
      )
    }
    if (process.platform === 'linux') {
      module2.exports.push(
        'SIGIO',
        'SIGPOLL',
        'SIGPWR',
        'SIGSTKFLT',
        'SIGUNUSED'
      )
    }
  },
})

// node_modules/.pnpm/signal-exit@3.0.5/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  'node_modules/.pnpm/signal-exit@3.0.5/node_modules/signal-exit/index.js'(
    exports,
    module2
  ) {
    var process5 = global.process
    if (typeof process5 !== 'object' || !process5) {
      module2.exports = function () {}
    } else {
      assert = require('assert')
      signals = require_signals()
      isWin = /^win/i.test(process5.platform)
      EE = require('events')
      if (typeof EE !== 'function') {
        EE = EE.EventEmitter
      }
      if (process5.__signal_exit_emitter__) {
        emitter = process5.__signal_exit_emitter__
      } else {
        emitter = process5.__signal_exit_emitter__ = new EE()
        emitter.count = 0
        emitter.emitted = {}
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity)
        emitter.infinite = true
      }
      module2.exports = function (cb, opts) {
        if (global.process !== process5) {
          return
        }
        assert.equal(
          typeof cb,
          'function',
          'a callback must be provided for exit handler'
        )
        if (loaded === false) {
          load()
        }
        var ev = 'exit'
        if (opts && opts.alwaysLast) {
          ev = 'afterexit'
        }
        var remove = function () {
          emitter.removeListener(ev, cb)
          if (
            emitter.listeners('exit').length === 0 &&
            emitter.listeners('afterexit').length === 0
          ) {
            unload()
          }
        }
        emitter.on(ev, cb)
        return remove
      }
      unload = function unload2() {
        if (!loaded || global.process !== process5) {
          return
        }
        loaded = false
        signals.forEach(function (sig) {
          try {
            process5.removeListener(sig, sigListeners[sig])
          } catch (er) {}
        })
        process5.emit = originalProcessEmit
        process5.reallyExit = originalProcessReallyExit
        emitter.count -= 1
      }
      module2.exports.unload = unload
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return
        }
        emitter.emitted[event] = true
        emitter.emit(event, code, signal)
      }
      sigListeners = {}
      signals.forEach(function (sig) {
        sigListeners[sig] = function listener() {
          if (process5 !== global.process) {
            return
          }
          var listeners = process5.listeners(sig)
          if (listeners.length === emitter.count) {
            unload()
            emit('exit', null, sig)
            emit('afterexit', null, sig)
            if (isWin && sig === 'SIGHUP') {
              sig = 'SIGINT'
            }
            process5.kill(process5.pid, sig)
          }
        }
      })
      module2.exports.signals = function () {
        return signals
      }
      loaded = false
      load = function load2() {
        if (loaded || process5 !== global.process) {
          return
        }
        loaded = true
        emitter.count += 1
        signals = signals.filter(function (sig) {
          try {
            process5.on(sig, sigListeners[sig])
            return true
          } catch (er) {
            return false
          }
        })
        process5.emit = processEmit
        process5.reallyExit = processReallyExit
      }
      module2.exports.load = load
      originalProcessReallyExit = process5.reallyExit
      processReallyExit = function processReallyExit2(code) {
        if (process5 !== global.process) {
          return
        }
        process5.exitCode = code || 0
        emit('exit', process5.exitCode, null)
        emit('afterexit', process5.exitCode, null)
        originalProcessReallyExit.call(process5, process5.exitCode)
      }
      originalProcessEmit = process5.emit
      processEmit = function processEmit2(ev, arg) {
        if (ev === 'exit' && process5 === global.process) {
          if (arg !== void 0) {
            process5.exitCode = arg
          }
          var ret = originalProcessEmit.apply(this, arguments)
          emit('exit', process5.exitCode, null)
          emit('afterexit', process5.exitCode, null)
          return ret
        } else {
          return originalProcessEmit.apply(this, arguments)
        }
      }
    }
    var assert
    var signals
    var isWin
    var EE
    var emitter
    var unload
    var emit
    var sigListeners
    var loaded
    var load
    var originalProcessReallyExit
    var processReallyExit
    var originalProcessEmit
    var processEmit
  },
})

// node_modules/.pnpm/cli-spinners@2.6.1/node_modules/cli-spinners/spinners.json
var require_spinners = __commonJS({
  'node_modules/.pnpm/cli-spinners@2.6.1/node_modules/cli-spinners/spinners.json'(
    exports,
    module2
  ) {
    module2.exports = {
      dots: {
        interval: 80,
        frames: [
          '\u280B',
          '\u2819',
          '\u2839',
          '\u2838',
          '\u283C',
          '\u2834',
          '\u2826',
          '\u2827',
          '\u2807',
          '\u280F',
        ],
      },
      dots2: {
        interval: 80,
        frames: [
          '\u28FE',
          '\u28FD',
          '\u28FB',
          '\u28BF',
          '\u287F',
          '\u28DF',
          '\u28EF',
          '\u28F7',
        ],
      },
      dots3: {
        interval: 80,
        frames: [
          '\u280B',
          '\u2819',
          '\u281A',
          '\u281E',
          '\u2816',
          '\u2826',
          '\u2834',
          '\u2832',
          '\u2833',
          '\u2813',
        ],
      },
      dots4: {
        interval: 80,
        frames: [
          '\u2804',
          '\u2806',
          '\u2807',
          '\u280B',
          '\u2819',
          '\u2838',
          '\u2830',
          '\u2820',
          '\u2830',
          '\u2838',
          '\u2819',
          '\u280B',
          '\u2807',
          '\u2806',
        ],
      },
      dots5: {
        interval: 80,
        frames: [
          '\u280B',
          '\u2819',
          '\u281A',
          '\u2812',
          '\u2802',
          '\u2802',
          '\u2812',
          '\u2832',
          '\u2834',
          '\u2826',
          '\u2816',
          '\u2812',
          '\u2810',
          '\u2810',
          '\u2812',
          '\u2813',
          '\u280B',
        ],
      },
      dots6: {
        interval: 80,
        frames: [
          '\u2801',
          '\u2809',
          '\u2819',
          '\u281A',
          '\u2812',
          '\u2802',
          '\u2802',
          '\u2812',
          '\u2832',
          '\u2834',
          '\u2824',
          '\u2804',
          '\u2804',
          '\u2824',
          '\u2834',
          '\u2832',
          '\u2812',
          '\u2802',
          '\u2802',
          '\u2812',
          '\u281A',
          '\u2819',
          '\u2809',
          '\u2801',
        ],
      },
      dots7: {
        interval: 80,
        frames: [
          '\u2808',
          '\u2809',
          '\u280B',
          '\u2813',
          '\u2812',
          '\u2810',
          '\u2810',
          '\u2812',
          '\u2816',
          '\u2826',
          '\u2824',
          '\u2820',
          '\u2820',
          '\u2824',
          '\u2826',
          '\u2816',
          '\u2812',
          '\u2810',
          '\u2810',
          '\u2812',
          '\u2813',
          '\u280B',
          '\u2809',
          '\u2808',
        ],
      },
      dots8: {
        interval: 80,
        frames: [
          '\u2801',
          '\u2801',
          '\u2809',
          '\u2819',
          '\u281A',
          '\u2812',
          '\u2802',
          '\u2802',
          '\u2812',
          '\u2832',
          '\u2834',
          '\u2824',
          '\u2804',
          '\u2804',
          '\u2824',
          '\u2820',
          '\u2820',
          '\u2824',
          '\u2826',
          '\u2816',
          '\u2812',
          '\u2810',
          '\u2810',
          '\u2812',
          '\u2813',
          '\u280B',
          '\u2809',
          '\u2808',
          '\u2808',
        ],
      },
      dots9: {
        interval: 80,
        frames: [
          '\u28B9',
          '\u28BA',
          '\u28BC',
          '\u28F8',
          '\u28C7',
          '\u2867',
          '\u2857',
          '\u284F',
        ],
      },
      dots10: {
        interval: 80,
        frames: [
          '\u2884',
          '\u2882',
          '\u2881',
          '\u2841',
          '\u2848',
          '\u2850',
          '\u2860',
        ],
      },
      dots11: {
        interval: 100,
        frames: [
          '\u2801',
          '\u2802',
          '\u2804',
          '\u2840',
          '\u2880',
          '\u2820',
          '\u2810',
          '\u2808',
        ],
      },
      dots12: {
        interval: 80,
        frames: [
          '\u2880\u2800',
          '\u2840\u2800',
          '\u2804\u2800',
          '\u2882\u2800',
          '\u2842\u2800',
          '\u2805\u2800',
          '\u2883\u2800',
          '\u2843\u2800',
          '\u280D\u2800',
          '\u288B\u2800',
          '\u284B\u2800',
          '\u280D\u2801',
          '\u288B\u2801',
          '\u284B\u2801',
          '\u280D\u2809',
          '\u280B\u2809',
          '\u280B\u2809',
          '\u2809\u2819',
          '\u2809\u2819',
          '\u2809\u2829',
          '\u2808\u2899',
          '\u2808\u2859',
          '\u2888\u2829',
          '\u2840\u2899',
          '\u2804\u2859',
          '\u2882\u2829',
          '\u2842\u2898',
          '\u2805\u2858',
          '\u2883\u2828',
          '\u2843\u2890',
          '\u280D\u2850',
          '\u288B\u2820',
          '\u284B\u2880',
          '\u280D\u2841',
          '\u288B\u2801',
          '\u284B\u2801',
          '\u280D\u2809',
          '\u280B\u2809',
          '\u280B\u2809',
          '\u2809\u2819',
          '\u2809\u2819',
          '\u2809\u2829',
          '\u2808\u2899',
          '\u2808\u2859',
          '\u2808\u2829',
          '\u2800\u2899',
          '\u2800\u2859',
          '\u2800\u2829',
          '\u2800\u2898',
          '\u2800\u2858',
          '\u2800\u2828',
          '\u2800\u2890',
          '\u2800\u2850',
          '\u2800\u2820',
          '\u2800\u2880',
          '\u2800\u2840',
        ],
      },
      dots8Bit: {
        interval: 80,
        frames: [
          '\u2800',
          '\u2801',
          '\u2802',
          '\u2803',
          '\u2804',
          '\u2805',
          '\u2806',
          '\u2807',
          '\u2840',
          '\u2841',
          '\u2842',
          '\u2843',
          '\u2844',
          '\u2845',
          '\u2846',
          '\u2847',
          '\u2808',
          '\u2809',
          '\u280A',
          '\u280B',
          '\u280C',
          '\u280D',
          '\u280E',
          '\u280F',
          '\u2848',
          '\u2849',
          '\u284A',
          '\u284B',
          '\u284C',
          '\u284D',
          '\u284E',
          '\u284F',
          '\u2810',
          '\u2811',
          '\u2812',
          '\u2813',
          '\u2814',
          '\u2815',
          '\u2816',
          '\u2817',
          '\u2850',
          '\u2851',
          '\u2852',
          '\u2853',
          '\u2854',
          '\u2855',
          '\u2856',
          '\u2857',
          '\u2818',
          '\u2819',
          '\u281A',
          '\u281B',
          '\u281C',
          '\u281D',
          '\u281E',
          '\u281F',
          '\u2858',
          '\u2859',
          '\u285A',
          '\u285B',
          '\u285C',
          '\u285D',
          '\u285E',
          '\u285F',
          '\u2820',
          '\u2821',
          '\u2822',
          '\u2823',
          '\u2824',
          '\u2825',
          '\u2826',
          '\u2827',
          '\u2860',
          '\u2861',
          '\u2862',
          '\u2863',
          '\u2864',
          '\u2865',
          '\u2866',
          '\u2867',
          '\u2828',
          '\u2829',
          '\u282A',
          '\u282B',
          '\u282C',
          '\u282D',
          '\u282E',
          '\u282F',
          '\u2868',
          '\u2869',
          '\u286A',
          '\u286B',
          '\u286C',
          '\u286D',
          '\u286E',
          '\u286F',
          '\u2830',
          '\u2831',
          '\u2832',
          '\u2833',
          '\u2834',
          '\u2835',
          '\u2836',
          '\u2837',
          '\u2870',
          '\u2871',
          '\u2872',
          '\u2873',
          '\u2874',
          '\u2875',
          '\u2876',
          '\u2877',
          '\u2838',
          '\u2839',
          '\u283A',
          '\u283B',
          '\u283C',
          '\u283D',
          '\u283E',
          '\u283F',
          '\u2878',
          '\u2879',
          '\u287A',
          '\u287B',
          '\u287C',
          '\u287D',
          '\u287E',
          '\u287F',
          '\u2880',
          '\u2881',
          '\u2882',
          '\u2883',
          '\u2884',
          '\u2885',
          '\u2886',
          '\u2887',
          '\u28C0',
          '\u28C1',
          '\u28C2',
          '\u28C3',
          '\u28C4',
          '\u28C5',
          '\u28C6',
          '\u28C7',
          '\u2888',
          '\u2889',
          '\u288A',
          '\u288B',
          '\u288C',
          '\u288D',
          '\u288E',
          '\u288F',
          '\u28C8',
          '\u28C9',
          '\u28CA',
          '\u28CB',
          '\u28CC',
          '\u28CD',
          '\u28CE',
          '\u28CF',
          '\u2890',
          '\u2891',
          '\u2892',
          '\u2893',
          '\u2894',
          '\u2895',
          '\u2896',
          '\u2897',
          '\u28D0',
          '\u28D1',
          '\u28D2',
          '\u28D3',
          '\u28D4',
          '\u28D5',
          '\u28D6',
          '\u28D7',
          '\u2898',
          '\u2899',
          '\u289A',
          '\u289B',
          '\u289C',
          '\u289D',
          '\u289E',
          '\u289F',
          '\u28D8',
          '\u28D9',
          '\u28DA',
          '\u28DB',
          '\u28DC',
          '\u28DD',
          '\u28DE',
          '\u28DF',
          '\u28A0',
          '\u28A1',
          '\u28A2',
          '\u28A3',
          '\u28A4',
          '\u28A5',
          '\u28A6',
          '\u28A7',
          '\u28E0',
          '\u28E1',
          '\u28E2',
          '\u28E3',
          '\u28E4',
          '\u28E5',
          '\u28E6',
          '\u28E7',
          '\u28A8',
          '\u28A9',
          '\u28AA',
          '\u28AB',
          '\u28AC',
          '\u28AD',
          '\u28AE',
          '\u28AF',
          '\u28E8',
          '\u28E9',
          '\u28EA',
          '\u28EB',
          '\u28EC',
          '\u28ED',
          '\u28EE',
          '\u28EF',
          '\u28B0',
          '\u28B1',
          '\u28B2',
          '\u28B3',
          '\u28B4',
          '\u28B5',
          '\u28B6',
          '\u28B7',
          '\u28F0',
          '\u28F1',
          '\u28F2',
          '\u28F3',
          '\u28F4',
          '\u28F5',
          '\u28F6',
          '\u28F7',
          '\u28B8',
          '\u28B9',
          '\u28BA',
          '\u28BB',
          '\u28BC',
          '\u28BD',
          '\u28BE',
          '\u28BF',
          '\u28F8',
          '\u28F9',
          '\u28FA',
          '\u28FB',
          '\u28FC',
          '\u28FD',
          '\u28FE',
          '\u28FF',
        ],
      },
      line: {
        interval: 130,
        frames: ['-', '\\', '|', '/'],
      },
      line2: {
        interval: 100,
        frames: ['\u2802', '-', '\u2013', '\u2014', '\u2013', '-'],
      },
      pipe: {
        interval: 100,
        frames: [
          '\u2524',
          '\u2518',
          '\u2534',
          '\u2514',
          '\u251C',
          '\u250C',
          '\u252C',
          '\u2510',
        ],
      },
      simpleDots: {
        interval: 400,
        frames: ['.  ', '.. ', '...', '   '],
      },
      simpleDotsScrolling: {
        interval: 200,
        frames: ['.  ', '.. ', '...', ' ..', '  .', '   '],
      },
      star: {
        interval: 70,
        frames: ['\u2736', '\u2738', '\u2739', '\u273A', '\u2739', '\u2737'],
      },
      star2: {
        interval: 80,
        frames: ['+', 'x', '*'],
      },
      flip: {
        interval: 70,
        frames: ['_', '_', '_', '-', '`', '`', "'", '\xB4', '-', '_', '_', '_'],
      },
      hamburger: {
        interval: 100,
        frames: ['\u2631', '\u2632', '\u2634'],
      },
      growVertical: {
        interval: 120,
        frames: [
          '\u2581',
          '\u2583',
          '\u2584',
          '\u2585',
          '\u2586',
          '\u2587',
          '\u2586',
          '\u2585',
          '\u2584',
          '\u2583',
        ],
      },
      growHorizontal: {
        interval: 120,
        frames: [
          '\u258F',
          '\u258E',
          '\u258D',
          '\u258C',
          '\u258B',
          '\u258A',
          '\u2589',
          '\u258A',
          '\u258B',
          '\u258C',
          '\u258D',
          '\u258E',
        ],
      },
      balloon: {
        interval: 140,
        frames: [' ', '.', 'o', 'O', '@', '*', ' '],
      },
      balloon2: {
        interval: 120,
        frames: ['.', 'o', 'O', '\xB0', 'O', 'o', '.'],
      },
      noise: {
        interval: 100,
        frames: ['\u2593', '\u2592', '\u2591'],
      },
      bounce: {
        interval: 120,
        frames: ['\u2801', '\u2802', '\u2804', '\u2802'],
      },
      boxBounce: {
        interval: 120,
        frames: ['\u2596', '\u2598', '\u259D', '\u2597'],
      },
      boxBounce2: {
        interval: 100,
        frames: ['\u258C', '\u2580', '\u2590', '\u2584'],
      },
      triangle: {
        interval: 50,
        frames: ['\u25E2', '\u25E3', '\u25E4', '\u25E5'],
      },
      arc: {
        interval: 100,
        frames: ['\u25DC', '\u25E0', '\u25DD', '\u25DE', '\u25E1', '\u25DF'],
      },
      circle: {
        interval: 120,
        frames: ['\u25E1', '\u2299', '\u25E0'],
      },
      squareCorners: {
        interval: 180,
        frames: ['\u25F0', '\u25F3', '\u25F2', '\u25F1'],
      },
      circleQuarters: {
        interval: 120,
        frames: ['\u25F4', '\u25F7', '\u25F6', '\u25F5'],
      },
      circleHalves: {
        interval: 50,
        frames: ['\u25D0', '\u25D3', '\u25D1', '\u25D2'],
      },
      squish: {
        interval: 100,
        frames: ['\u256B', '\u256A'],
      },
      toggle: {
        interval: 250,
        frames: ['\u22B6', '\u22B7'],
      },
      toggle2: {
        interval: 80,
        frames: ['\u25AB', '\u25AA'],
      },
      toggle3: {
        interval: 120,
        frames: ['\u25A1', '\u25A0'],
      },
      toggle4: {
        interval: 100,
        frames: ['\u25A0', '\u25A1', '\u25AA', '\u25AB'],
      },
      toggle5: {
        interval: 100,
        frames: ['\u25AE', '\u25AF'],
      },
      toggle6: {
        interval: 300,
        frames: ['\u101D', '\u1040'],
      },
      toggle7: {
        interval: 80,
        frames: ['\u29BE', '\u29BF'],
      },
      toggle8: {
        interval: 100,
        frames: ['\u25CD', '\u25CC'],
      },
      toggle9: {
        interval: 100,
        frames: ['\u25C9', '\u25CE'],
      },
      toggle10: {
        interval: 100,
        frames: ['\u3282', '\u3280', '\u3281'],
      },
      toggle11: {
        interval: 50,
        frames: ['\u29C7', '\u29C6'],
      },
      toggle12: {
        interval: 120,
        frames: ['\u2617', '\u2616'],
      },
      toggle13: {
        interval: 80,
        frames: ['=', '*', '-'],
      },
      arrow: {
        interval: 100,
        frames: [
          '\u2190',
          '\u2196',
          '\u2191',
          '\u2197',
          '\u2192',
          '\u2198',
          '\u2193',
          '\u2199',
        ],
      },
      arrow2: {
        interval: 80,
        frames: [
          '\u2B06\uFE0F ',
          '\u2197\uFE0F ',
          '\u27A1\uFE0F ',
          '\u2198\uFE0F ',
          '\u2B07\uFE0F ',
          '\u2199\uFE0F ',
          '\u2B05\uFE0F ',
          '\u2196\uFE0F ',
        ],
      },
      arrow3: {
        interval: 120,
        frames: [
          '\u25B9\u25B9\u25B9\u25B9\u25B9',
          '\u25B8\u25B9\u25B9\u25B9\u25B9',
          '\u25B9\u25B8\u25B9\u25B9\u25B9',
          '\u25B9\u25B9\u25B8\u25B9\u25B9',
          '\u25B9\u25B9\u25B9\u25B8\u25B9',
          '\u25B9\u25B9\u25B9\u25B9\u25B8',
        ],
      },
      bouncingBar: {
        interval: 80,
        frames: [
          '[    ]',
          '[=   ]',
          '[==  ]',
          '[=== ]',
          '[ ===]',
          '[  ==]',
          '[   =]',
          '[    ]',
          '[   =]',
          '[  ==]',
          '[ ===]',
          '[====]',
          '[=== ]',
          '[==  ]',
          '[=   ]',
        ],
      },
      bouncingBall: {
        interval: 80,
        frames: [
          '( \u25CF    )',
          '(  \u25CF   )',
          '(   \u25CF  )',
          '(    \u25CF )',
          '(     \u25CF)',
          '(    \u25CF )',
          '(   \u25CF  )',
          '(  \u25CF   )',
          '( \u25CF    )',
          '(\u25CF     )',
        ],
      },
      smiley: {
        interval: 200,
        frames: ['\u{1F604} ', '\u{1F61D} '],
      },
      monkey: {
        interval: 300,
        frames: ['\u{1F648} ', '\u{1F648} ', '\u{1F649} ', '\u{1F64A} '],
      },
      hearts: {
        interval: 100,
        frames: [
          '\u{1F49B} ',
          '\u{1F499} ',
          '\u{1F49C} ',
          '\u{1F49A} ',
          '\u2764\uFE0F ',
        ],
      },
      clock: {
        interval: 100,
        frames: [
          '\u{1F55B} ',
          '\u{1F550} ',
          '\u{1F551} ',
          '\u{1F552} ',
          '\u{1F553} ',
          '\u{1F554} ',
          '\u{1F555} ',
          '\u{1F556} ',
          '\u{1F557} ',
          '\u{1F558} ',
          '\u{1F559} ',
          '\u{1F55A} ',
        ],
      },
      earth: {
        interval: 180,
        frames: ['\u{1F30D} ', '\u{1F30E} ', '\u{1F30F} '],
      },
      material: {
        interval: 17,
        frames: [
          '\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588',
          '\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588',
          '\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588',
          '\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588',
          '\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588',
          '\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588',
          '\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588',
          '\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
          '\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581',
        ],
      },
      moon: {
        interval: 80,
        frames: [
          '\u{1F311} ',
          '\u{1F312} ',
          '\u{1F313} ',
          '\u{1F314} ',
          '\u{1F315} ',
          '\u{1F316} ',
          '\u{1F317} ',
          '\u{1F318} ',
        ],
      },
      runner: {
        interval: 140,
        frames: ['\u{1F6B6} ', '\u{1F3C3} '],
      },
      pong: {
        interval: 80,
        frames: [
          '\u2590\u2802       \u258C',
          '\u2590\u2808       \u258C',
          '\u2590 \u2802      \u258C',
          '\u2590 \u2820      \u258C',
          '\u2590  \u2840     \u258C',
          '\u2590  \u2820     \u258C',
          '\u2590   \u2802    \u258C',
          '\u2590   \u2808    \u258C',
          '\u2590    \u2802   \u258C',
          '\u2590    \u2820   \u258C',
          '\u2590     \u2840  \u258C',
          '\u2590     \u2820  \u258C',
          '\u2590      \u2802 \u258C',
          '\u2590      \u2808 \u258C',
          '\u2590       \u2802\u258C',
          '\u2590       \u2820\u258C',
          '\u2590       \u2840\u258C',
          '\u2590      \u2820 \u258C',
          '\u2590      \u2802 \u258C',
          '\u2590     \u2808  \u258C',
          '\u2590     \u2802  \u258C',
          '\u2590    \u2820   \u258C',
          '\u2590    \u2840   \u258C',
          '\u2590   \u2820    \u258C',
          '\u2590   \u2802    \u258C',
          '\u2590  \u2808     \u258C',
          '\u2590  \u2802     \u258C',
          '\u2590 \u2820      \u258C',
          '\u2590 \u2840      \u258C',
          '\u2590\u2820       \u258C',
        ],
      },
      shark: {
        interval: 120,
        frames: [
          '\u2590|\\____________\u258C',
          '\u2590_|\\___________\u258C',
          '\u2590__|\\__________\u258C',
          '\u2590___|\\_________\u258C',
          '\u2590____|\\________\u258C',
          '\u2590_____|\\_______\u258C',
          '\u2590______|\\______\u258C',
          '\u2590_______|\\_____\u258C',
          '\u2590________|\\____\u258C',
          '\u2590_________|\\___\u258C',
          '\u2590__________|\\__\u258C',
          '\u2590___________|\\_\u258C',
          '\u2590____________|\\\u258C',
          '\u2590____________/|\u258C',
          '\u2590___________/|_\u258C',
          '\u2590__________/|__\u258C',
          '\u2590_________/|___\u258C',
          '\u2590________/|____\u258C',
          '\u2590_______/|_____\u258C',
          '\u2590______/|______\u258C',
          '\u2590_____/|_______\u258C',
          '\u2590____/|________\u258C',
          '\u2590___/|_________\u258C',
          '\u2590__/|__________\u258C',
          '\u2590_/|___________\u258C',
          '\u2590/|____________\u258C',
        ],
      },
      dqpb: {
        interval: 100,
        frames: ['d', 'q', 'p', 'b'],
      },
      weather: {
        interval: 100,
        frames: [
          '\u2600\uFE0F ',
          '\u2600\uFE0F ',
          '\u2600\uFE0F ',
          '\u{1F324} ',
          '\u26C5\uFE0F ',
          '\u{1F325} ',
          '\u2601\uFE0F ',
          '\u{1F327} ',
          '\u{1F328} ',
          '\u{1F327} ',
          '\u{1F328} ',
          '\u{1F327} ',
          '\u{1F328} ',
          '\u26C8 ',
          '\u{1F328} ',
          '\u{1F327} ',
          '\u{1F328} ',
          '\u2601\uFE0F ',
          '\u{1F325} ',
          '\u26C5\uFE0F ',
          '\u{1F324} ',
          '\u2600\uFE0F ',
          '\u2600\uFE0F ',
        ],
      },
      christmas: {
        interval: 400,
        frames: ['\u{1F332}', '\u{1F384}'],
      },
      grenade: {
        interval: 80,
        frames: [
          '\u060C  ',
          '\u2032  ',
          ' \xB4 ',
          ' \u203E ',
          '  \u2E0C',
          '  \u2E0A',
          '  |',
          '  \u204E',
          '  \u2055',
          ' \u0DF4 ',
          '  \u2053',
          '   ',
          '   ',
          '   ',
        ],
      },
      point: {
        interval: 125,
        frames: [
          '\u2219\u2219\u2219',
          '\u25CF\u2219\u2219',
          '\u2219\u25CF\u2219',
          '\u2219\u2219\u25CF',
          '\u2219\u2219\u2219',
        ],
      },
      layer: {
        interval: 150,
        frames: ['-', '=', '\u2261'],
      },
      betaWave: {
        interval: 80,
        frames: [
          '\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2',
          '\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2',
          '\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2',
          '\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2',
          '\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2',
          '\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2',
          '\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1',
        ],
      },
      fingerDance: {
        interval: 160,
        frames: [
          '\u{1F918} ',
          '\u{1F91F} ',
          '\u{1F596} ',
          '\u270B ',
          '\u{1F91A} ',
          '\u{1F446} ',
        ],
      },
      fistBump: {
        interval: 80,
        frames: [
          '\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ',
          '\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ',
          '\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ',
          '\u3000\u{1F91C}\u3000\u3000\u{1F91B}\u3000 ',
          '\u3000\u3000\u{1F91C}\u{1F91B}\u3000\u3000 ',
          '\u3000\u{1F91C}\u2728\u{1F91B}\u3000\u3000 ',
          '\u{1F91C}\u3000\u2728\u3000\u{1F91B}\u3000 ',
        ],
      },
      soccerHeader: {
        interval: 80,
        frames: [
          ' \u{1F9D1}\u26BD\uFE0F       \u{1F9D1} ',
          '\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} ',
          '\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ',
          '\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ',
          '\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ',
          '\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ',
          '\u{1F9D1}       \u26BD\uFE0F\u{1F9D1}  ',
          '\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ',
          '\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ',
          '\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ',
          '\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ',
          '\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} ',
        ],
      },
      mindblown: {
        interval: 160,
        frames: [
          '\u{1F610} ',
          '\u{1F610} ',
          '\u{1F62E} ',
          '\u{1F62E} ',
          '\u{1F626} ',
          '\u{1F626} ',
          '\u{1F627} ',
          '\u{1F627} ',
          '\u{1F92F} ',
          '\u{1F4A5} ',
          '\u2728 ',
          '\u3000 ',
          '\u3000 ',
          '\u3000 ',
        ],
      },
      speaker: {
        interval: 160,
        frames: ['\u{1F508} ', '\u{1F509} ', '\u{1F50A} ', '\u{1F509} '],
      },
      orangePulse: {
        interval: 100,
        frames: [
          '\u{1F538} ',
          '\u{1F536} ',
          '\u{1F7E0} ',
          '\u{1F7E0} ',
          '\u{1F536} ',
        ],
      },
      bluePulse: {
        interval: 100,
        frames: [
          '\u{1F539} ',
          '\u{1F537} ',
          '\u{1F535} ',
          '\u{1F535} ',
          '\u{1F537} ',
        ],
      },
      orangeBluePulse: {
        interval: 100,
        frames: [
          '\u{1F538} ',
          '\u{1F536} ',
          '\u{1F7E0} ',
          '\u{1F7E0} ',
          '\u{1F536} ',
          '\u{1F539} ',
          '\u{1F537} ',
          '\u{1F535} ',
          '\u{1F535} ',
          '\u{1F537} ',
        ],
      },
      timeTravel: {
        interval: 100,
        frames: [
          '\u{1F55B} ',
          '\u{1F55A} ',
          '\u{1F559} ',
          '\u{1F558} ',
          '\u{1F557} ',
          '\u{1F556} ',
          '\u{1F555} ',
          '\u{1F554} ',
          '\u{1F553} ',
          '\u{1F552} ',
          '\u{1F551} ',
          '\u{1F550} ',
        ],
      },
      aesthetic: {
        interval: 80,
        frames: [
          '\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1',
          '\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1',
          '\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1',
          '\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1',
          '\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1',
          '\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1',
          '\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0',
          '\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1',
        ],
      },
    }
  },
})

// node_modules/.pnpm/cli-spinners@2.6.1/node_modules/cli-spinners/index.js
var require_cli_spinners = __commonJS({
  'node_modules/.pnpm/cli-spinners@2.6.1/node_modules/cli-spinners/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var spinners = Object.assign({}, require_spinners())
    var spinnersList = Object.keys(spinners)
    Object.defineProperty(spinners, 'random', {
      get() {
        const randomIndex = Math.floor(Math.random() * spinnersList.length)
        const spinnerName = spinnersList[randomIndex]
        return spinners[spinnerName]
      },
    })
    module2.exports = spinners
  },
})

// node_modules/.pnpm/clone@1.0.4/node_modules/clone/clone.js
var require_clone = __commonJS({
  'node_modules/.pnpm/clone@1.0.4/node_modules/clone/clone.js'(
    exports,
    module2
  ) {
    var clone = (function () {
      'use strict'
      function clone2(parent, circular, depth, prototype) {
        var filter
        if (typeof circular === 'object') {
          depth = circular.depth
          prototype = circular.prototype
          filter = circular.filter
          circular = circular.circular
        }
        var allParents = []
        var allChildren = []
        var useBuffer = typeof Buffer != 'undefined'
        if (typeof circular == 'undefined') circular = true
        if (typeof depth == 'undefined') depth = Infinity
        function _clone(parent2, depth2) {
          if (parent2 === null) return null
          if (depth2 == 0) return parent2
          var child
          var proto
          if (typeof parent2 != 'object') {
            return parent2
          }
          if (clone2.__isArray(parent2)) {
            child = []
          } else if (clone2.__isRegExp(parent2)) {
            child = new RegExp(parent2.source, __getRegExpFlags(parent2))
            if (parent2.lastIndex) child.lastIndex = parent2.lastIndex
          } else if (clone2.__isDate(parent2)) {
            child = new Date(parent2.getTime())
          } else if (useBuffer && Buffer.isBuffer(parent2)) {
            if (Buffer.allocUnsafe) {
              child = Buffer.allocUnsafe(parent2.length)
            } else {
              child = new Buffer(parent2.length)
            }
            parent2.copy(child)
            return child
          } else {
            if (typeof prototype == 'undefined') {
              proto = Object.getPrototypeOf(parent2)
              child = Object.create(proto)
            } else {
              child = Object.create(prototype)
              proto = prototype
            }
          }
          if (circular) {
            var index = allParents.indexOf(parent2)
            if (index != -1) {
              return allChildren[index]
            }
            allParents.push(parent2)
            allChildren.push(child)
          }
          for (var i in parent2) {
            var attrs
            if (proto) {
              attrs = Object.getOwnPropertyDescriptor(proto, i)
            }
            if (attrs && attrs.set == null) {
              continue
            }
            child[i] = _clone(parent2[i], depth2 - 1)
          }
          return child
        }
        return _clone(parent, depth)
      }
      clone2.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null
        var c = function () {}
        c.prototype = parent
        return new c()
      }
      function __objToStr(o) {
        return Object.prototype.toString.call(o)
      }
      clone2.__objToStr = __objToStr
      function __isDate(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Date]'
      }
      clone2.__isDate = __isDate
      function __isArray(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Array]'
      }
      clone2.__isArray = __isArray
      function __isRegExp(o) {
        return typeof o === 'object' && __objToStr(o) === '[object RegExp]'
      }
      clone2.__isRegExp = __isRegExp
      function __getRegExpFlags(re) {
        var flags = ''
        if (re.global) flags += 'g'
        if (re.ignoreCase) flags += 'i'
        if (re.multiline) flags += 'm'
        return flags
      }
      clone2.__getRegExpFlags = __getRegExpFlags
      return clone2
    })()
    if (typeof module2 === 'object' && module2.exports) {
      module2.exports = clone
    }
  },
})

// node_modules/.pnpm/defaults@1.0.3/node_modules/defaults/index.js
var require_defaults = __commonJS({
  'node_modules/.pnpm/defaults@1.0.3/node_modules/defaults/index.js'(
    exports,
    module2
  ) {
    var clone = require_clone()
    module2.exports = function (options, defaults) {
      options = options || {}
      Object.keys(defaults).forEach(function (key) {
        if (typeof options[key] === 'undefined') {
          options[key] = clone(defaults[key])
        }
      })
      return options
    }
  },
})

// node_modules/.pnpm/wcwidth@1.0.1/node_modules/wcwidth/combining.js
var require_combining = __commonJS({
  'node_modules/.pnpm/wcwidth@1.0.1/node_modules/wcwidth/combining.js'(
    exports,
    module2
  ) {
    module2.exports = [
      [768, 879],
      [1155, 1158],
      [1160, 1161],
      [1425, 1469],
      [1471, 1471],
      [1473, 1474],
      [1476, 1477],
      [1479, 1479],
      [1536, 1539],
      [1552, 1557],
      [1611, 1630],
      [1648, 1648],
      [1750, 1764],
      [1767, 1768],
      [1770, 1773],
      [1807, 1807],
      [1809, 1809],
      [1840, 1866],
      [1958, 1968],
      [2027, 2035],
      [2305, 2306],
      [2364, 2364],
      [2369, 2376],
      [2381, 2381],
      [2385, 2388],
      [2402, 2403],
      [2433, 2433],
      [2492, 2492],
      [2497, 2500],
      [2509, 2509],
      [2530, 2531],
      [2561, 2562],
      [2620, 2620],
      [2625, 2626],
      [2631, 2632],
      [2635, 2637],
      [2672, 2673],
      [2689, 2690],
      [2748, 2748],
      [2753, 2757],
      [2759, 2760],
      [2765, 2765],
      [2786, 2787],
      [2817, 2817],
      [2876, 2876],
      [2879, 2879],
      [2881, 2883],
      [2893, 2893],
      [2902, 2902],
      [2946, 2946],
      [3008, 3008],
      [3021, 3021],
      [3134, 3136],
      [3142, 3144],
      [3146, 3149],
      [3157, 3158],
      [3260, 3260],
      [3263, 3263],
      [3270, 3270],
      [3276, 3277],
      [3298, 3299],
      [3393, 3395],
      [3405, 3405],
      [3530, 3530],
      [3538, 3540],
      [3542, 3542],
      [3633, 3633],
      [3636, 3642],
      [3655, 3662],
      [3761, 3761],
      [3764, 3769],
      [3771, 3772],
      [3784, 3789],
      [3864, 3865],
      [3893, 3893],
      [3895, 3895],
      [3897, 3897],
      [3953, 3966],
      [3968, 3972],
      [3974, 3975],
      [3984, 3991],
      [3993, 4028],
      [4038, 4038],
      [4141, 4144],
      [4146, 4146],
      [4150, 4151],
      [4153, 4153],
      [4184, 4185],
      [4448, 4607],
      [4959, 4959],
      [5906, 5908],
      [5938, 5940],
      [5970, 5971],
      [6002, 6003],
      [6068, 6069],
      [6071, 6077],
      [6086, 6086],
      [6089, 6099],
      [6109, 6109],
      [6155, 6157],
      [6313, 6313],
      [6432, 6434],
      [6439, 6440],
      [6450, 6450],
      [6457, 6459],
      [6679, 6680],
      [6912, 6915],
      [6964, 6964],
      [6966, 6970],
      [6972, 6972],
      [6978, 6978],
      [7019, 7027],
      [7616, 7626],
      [7678, 7679],
      [8203, 8207],
      [8234, 8238],
      [8288, 8291],
      [8298, 8303],
      [8400, 8431],
      [12330, 12335],
      [12441, 12442],
      [43014, 43014],
      [43019, 43019],
      [43045, 43046],
      [64286, 64286],
      [65024, 65039],
      [65056, 65059],
      [65279, 65279],
      [65529, 65531],
      [68097, 68099],
      [68101, 68102],
      [68108, 68111],
      [68152, 68154],
      [68159, 68159],
      [119143, 119145],
      [119155, 119170],
      [119173, 119179],
      [119210, 119213],
      [119362, 119364],
      [917505, 917505],
      [917536, 917631],
      [917760, 917999],
    ]
  },
})

// node_modules/.pnpm/wcwidth@1.0.1/node_modules/wcwidth/index.js
var require_wcwidth = __commonJS({
  'node_modules/.pnpm/wcwidth@1.0.1/node_modules/wcwidth/index.js'(
    exports,
    module2
  ) {
    'use strict'
    var defaults = require_defaults()
    var combining = require_combining()
    var DEFAULTS = {
      nul: 0,
      control: 0,
    }
    module2.exports = function wcwidth3(str) {
      return wcswidth(str, DEFAULTS)
    }
    module2.exports.config = function (opts) {
      opts = defaults(opts || {}, DEFAULTS)
      return function wcwidth3(str) {
        return wcswidth(str, opts)
      }
    }
    function wcswidth(str, opts) {
      if (typeof str !== 'string') return wcwidth2(str, opts)
      var s = 0
      for (var i = 0; i < str.length; i++) {
        var n = wcwidth2(str.charCodeAt(i), opts)
        if (n < 0) return -1
        s += n
      }
      return s
    }
    function wcwidth2(ucs, opts) {
      if (ucs === 0) return opts.nul
      if (ucs < 32 || (ucs >= 127 && ucs < 160)) return opts.control
      if (bisearch(ucs)) return 0
      return (
        1 +
        (ucs >= 4352 &&
          (ucs <= 4447 ||
            ucs == 9001 ||
            ucs == 9002 ||
            (ucs >= 11904 && ucs <= 42191 && ucs != 12351) ||
            (ucs >= 44032 && ucs <= 55203) ||
            (ucs >= 63744 && ucs <= 64255) ||
            (ucs >= 65040 && ucs <= 65049) ||
            (ucs >= 65072 && ucs <= 65135) ||
            (ucs >= 65280 && ucs <= 65376) ||
            (ucs >= 65504 && ucs <= 65510) ||
            (ucs >= 131072 && ucs <= 196605) ||
            (ucs >= 196608 && ucs <= 262141)))
      )
    }
    function bisearch(ucs) {
      var min = 0
      var max = combining.length - 1
      var mid
      if (ucs < combining[0][0] || ucs > combining[max][1]) return false
      while (max >= min) {
        mid = Math.floor((min + max) / 2)
        if (ucs > combining[mid][1]) min = mid + 1
        else if (ucs < combining[mid][0]) max = mid - 1
        else return true
      }
      return false
    }
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/stream.js'(
    exports,
    module2
  ) {
    module2.exports = require('stream')
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/buffer_list.js'(
    exports,
    module2
  ) {
    'use strict'
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        keys.push.apply(keys, symbols)
      }
      return keys
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
        }
      }
      return target
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps)
      if (staticProps) _defineProperties(Constructor, staticProps)
      return Constructor
    }
    var _require = require('buffer')
    var Buffer2 = _require.Buffer
    var _require2 = require('util')
    var inspect = _require2.inspect
    var custom = (inspect && inspect.custom) || 'inspect'
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset)
    }
    module2.exports = /* @__PURE__ */ (function () {
      function BufferList() {
        _classCallCheck(this, BufferList)
        this.head = null
        this.tail = null
        this.length = 0
      }
      _createClass(BufferList, [
        {
          key: 'push',
          value: function push(v) {
            var entry = {
              data: v,
              next: null,
            }
            if (this.length > 0) this.tail.next = entry
            else this.head = entry
            this.tail = entry
            ++this.length
          },
        },
        {
          key: 'unshift',
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head,
            }
            if (this.length === 0) this.tail = entry
            this.head = entry
            ++this.length
          },
        },
        {
          key: 'shift',
          value: function shift() {
            if (this.length === 0) return
            var ret = this.head.data
            if (this.length === 1) this.head = this.tail = null
            else this.head = this.head.next
            --this.length
            return ret
          },
        },
        {
          key: 'clear',
          value: function clear() {
            this.head = this.tail = null
            this.length = 0
          },
        },
        {
          key: 'join',
          value: function join(s) {
            if (this.length === 0) return ''
            var p = this.head
            var ret = '' + p.data
            while ((p = p.next)) {
              ret += s + p.data
            }
            return ret
          },
        },
        {
          key: 'concat',
          value: function concat(n) {
            if (this.length === 0) return Buffer2.alloc(0)
            var ret = Buffer2.allocUnsafe(n >>> 0)
            var p = this.head
            var i = 0
            while (p) {
              copyBuffer(p.data, ret, i)
              i += p.data.length
              p = p.next
            }
            return ret
          },
        },
        {
          key: 'consume',
          value: function consume(n, hasStrings) {
            var ret
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n)
              this.head.data = this.head.data.slice(n)
            } else if (n === this.head.data.length) {
              ret = this.shift()
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n)
            }
            return ret
          },
        },
        {
          key: 'first',
          value: function first() {
            return this.head.data
          },
        },
        {
          key: '_getString',
          value: function _getString(n) {
            var p = this.head
            var c = 1
            var ret = p.data
            n -= ret.length
            while ((p = p.next)) {
              var str = p.data
              var nb = n > str.length ? str.length : n
              if (nb === str.length) ret += str
              else ret += str.slice(0, n)
              n -= nb
              if (n === 0) {
                if (nb === str.length) {
                  ++c
                  if (p.next) this.head = p.next
                  else this.head = this.tail = null
                } else {
                  this.head = p
                  p.data = str.slice(nb)
                }
                break
              }
              ++c
            }
            this.length -= c
            return ret
          },
        },
        {
          key: '_getBuffer',
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n)
            var p = this.head
            var c = 1
            p.data.copy(ret)
            n -= p.data.length
            while ((p = p.next)) {
              var buf = p.data
              var nb = n > buf.length ? buf.length : n
              buf.copy(ret, ret.length - n, 0, nb)
              n -= nb
              if (n === 0) {
                if (nb === buf.length) {
                  ++c
                  if (p.next) this.head = p.next
                  else this.head = this.tail = null
                } else {
                  this.head = p
                  p.data = buf.slice(nb)
                }
                break
              }
              ++c
            }
            this.length -= c
            return ret
          },
        },
        {
          key: custom,
          value: function value(_, options) {
            return inspect(
              this,
              _objectSpread({}, options, {
                depth: 0,
                customInspect: false,
              })
            )
          },
        },
      ])
      return BufferList
    })()
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/destroy.js'(
    exports,
    module2
  ) {
    'use strict'
    function destroy(err, cb) {
      var _this = this
      var readableDestroyed =
        this._readableState && this._readableState.destroyed
      var writableDestroyed =
        this._writableState && this._writableState.destroyed
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err)
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err)
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true
            process.nextTick(emitErrorNT, this, err)
          }
        }
        return this
      }
      if (this._readableState) {
        this._readableState.destroyed = true
      }
      if (this._writableState) {
        this._writableState.destroyed = true
      }
      this._destroy(err || null, function (err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2)
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true
            process.nextTick(emitErrorAndCloseNT, _this, err2)
          } else {
            process.nextTick(emitCloseNT, _this)
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this)
          cb(err2)
        } else {
          process.nextTick(emitCloseNT, _this)
        }
      })
      return this
    }
    function emitErrorAndCloseNT(self, err) {
      emitErrorNT(self, err)
      emitCloseNT(self)
    }
    function emitCloseNT(self) {
      if (self._writableState && !self._writableState.emitClose) return
      if (self._readableState && !self._readableState.emitClose) return
      self.emit('close')
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false
        this._readableState.reading = false
        this._readableState.ended = false
        this._readableState.endEmitted = false
      }
      if (this._writableState) {
        this._writableState.destroyed = false
        this._writableState.ended = false
        this._writableState.ending = false
        this._writableState.finalCalled = false
        this._writableState.prefinished = false
        this._writableState.finished = false
        this._writableState.errorEmitted = false
      }
    }
    function emitErrorNT(self, err) {
      self.emit('error', err)
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState
      var wState = stream._writableState
      if ((rState && rState.autoDestroy) || (wState && wState.autoDestroy))
        stream.destroy(err)
      else stream.emit('error', err)
    }
    module2.exports = {
      destroy,
      undestroy,
      errorOrDestroy,
    }
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/errors.js
var require_errors = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/errors.js'(
    exports,
    module2
  ) {
    'use strict'
    var codes = {}
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') {
          return message
        } else {
          return message(arg1, arg2, arg3)
        }
      }
      class NodeError extends Base {
        constructor(arg1, arg2, arg3) {
          super(getMessage(arg1, arg2, arg3))
        }
      }
      NodeError.prototype.name = Base.name
      NodeError.prototype.code = code
      codes[code] = NodeError
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        const len = expected.length
        expected = expected.map((i) => String(i))
        if (len > 2) {
          return (
            `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` +
            expected[len - 1]
          )
        } else if (len === 2) {
          return `one of ${thing} ${expected[0]} or ${expected[1]}`
        } else {
          return `of ${thing} ${expected[0]}`
        }
      } else {
        return `of ${thing} ${String(expected)}`
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length
      }
      return str.substring(this_len - search.length, this_len) === search
    }
    function includes(str, search, start) {
      if (typeof start !== 'number') {
        start = 0
      }
      if (start + search.length > str.length) {
        return false
      } else {
        return str.indexOf(search, start) !== -1
      }
    }
    createErrorType(
      'ERR_INVALID_OPT_VALUE',
      function (name, value) {
        return 'The value "' + value + '" is invalid for option "' + name + '"'
      },
      TypeError
    )
    createErrorType(
      'ERR_INVALID_ARG_TYPE',
      function (name, expected, actual) {
        let determiner
        if (typeof expected === 'string' && startsWith(expected, 'not ')) {
          determiner = 'must not be'
          expected = expected.replace(/^not /, '')
        } else {
          determiner = 'must be'
        }
        let msg
        if (endsWith(name, ' argument')) {
          msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`
        } else {
          const type = includes(name, '.') ? 'property' : 'argument'
          msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`
        }
        msg += `. Received type ${typeof actual}`
        return msg
      },
      TypeError
    )
    createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF')
    createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
      return 'The ' + name + ' method is not implemented'
    })
    createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close')
    createErrorType('ERR_STREAM_DESTROYED', function (name) {
      return 'Cannot call ' + name + ' after a stream was destroyed'
    })
    createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times')
    createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable')
    createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end')
    createErrorType(
      'ERR_STREAM_NULL_VALUES',
      'May not write null values to stream',
      TypeError
    )
    createErrorType(
      'ERR_UNKNOWN_ENCODING',
      function (arg) {
        return 'Unknown encoding: ' + arg
      },
      TypeError
    )
    createErrorType(
      'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
      'stream.unshift() after end event'
    )
    module2.exports.codes = codes
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/state.js'(
    exports,
    module2
  ) {
    'use strict'
    var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null
        ? options.highWaterMark
        : isDuplex
        ? options[duplexKey]
        : null
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey)
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : 'highWaterMark'
          throw new ERR_INVALID_OPT_VALUE(name, hwm)
        }
        return Math.floor(hwm)
      }
      return state.objectMode ? 16 : 16 * 1024
    }
    module2.exports = {
      getHighWaterMark,
    }
  },
})

// node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  'node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js'(
    exports,
    module2
  ) {
    if (typeof Object.create === 'function') {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true,
            },
          })
        }
      }
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor
          var TempCtor = function () {}
          TempCtor.prototype = superCtor.prototype
          ctor.prototype = new TempCtor()
          ctor.prototype.constructor = ctor
        }
      }
    }
  },
})

// node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  'node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js'(
    exports,
    module2
  ) {
    try {
      util = require('util')
      if (typeof util.inherits !== 'function') throw ''
      module2.exports = util.inherits
    } catch (e) {
      module2.exports = require_inherits_browser()
    }
    var util
  },
})

// node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/node.js
var require_node = __commonJS({
  'node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/node.js'(
    exports,
    module2
  ) {
    module2.exports = require('util').deprecate
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_writable.js'(
    exports,
    module2
  ) {
    'use strict'
    module2.exports = Writable
    function CorkedRequest(state) {
      var _this = this
      this.next = null
      this.entry = null
      this.finish = function () {
        onCorkedFinish(_this, state)
      }
    }
    var Duplex
    Writable.WritableState = WritableState
    var internalUtil = {
      deprecate: require_node(),
    }
    var Stream = require_stream()
    var Buffer2 = require('buffer').Buffer
    var OurUint8Array = global.Uint8Array || function () {}
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk)
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array
    }
    var destroyImpl = require_destroy()
    var _require = require_state()
    var getHighWaterMark = _require.getHighWaterMark
    var _require$codes = require_errors().codes
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING
    var errorOrDestroy = destroyImpl.errorOrDestroy
    require_inherits()(Writable, Stream)
    function nop() {}
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex()
      options = options || {}
      if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex
      this.objectMode = !!options.objectMode
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode
      this.highWaterMark = getHighWaterMark(
        this,
        options,
        'writableHighWaterMark',
        isDuplex
      )
      this.finalCalled = false
      this.needDrain = false
      this.ending = false
      this.ended = false
      this.finished = false
      this.destroyed = false
      var noDecode = options.decodeStrings === false
      this.decodeStrings = !noDecode
      this.defaultEncoding = options.defaultEncoding || 'utf8'
      this.length = 0
      this.writing = false
      this.corked = 0
      this.sync = true
      this.bufferProcessing = false
      this.onwrite = function (er) {
        onwrite(stream, er)
      }
      this.writecb = null
      this.writelen = 0
      this.bufferedRequest = null
      this.lastBufferedRequest = null
      this.pendingcb = 0
      this.prefinished = false
      this.errorEmitted = false
      this.emitClose = options.emitClose !== false
      this.autoDestroy = !!options.autoDestroy
      this.bufferedRequestCount = 0
      this.corkedRequestsFree = new CorkedRequest(this)
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest
      var out = []
      while (current) {
        out.push(current)
        current = current.next
      }
      return out
    }
    ;(function () {
      try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
          get: internalUtil.deprecate(
            function writableStateBufferGetter() {
              return this.getBuffer()
            },
            '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
            'DEP0003'
          ),
        })
      } catch (_) {}
    })()
    var realHasInstance
    if (
      typeof Symbol === 'function' &&
      Symbol.hasInstance &&
      typeof Function.prototype[Symbol.hasInstance] === 'function'
    ) {
      realHasInstance = Function.prototype[Symbol.hasInstance]
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object)) return true
          if (this !== Writable) return false
          return object && object._writableState instanceof WritableState
        },
      })
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this
      }
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex()
      var isDuplex = this instanceof Duplex
      if (!isDuplex && !realHasInstance.call(Writable, this))
        return new Writable(options)
      this._writableState = new WritableState(options, this, isDuplex)
      this.writable = true
      if (options) {
        if (typeof options.write === 'function') this._write = options.write
        if (typeof options.writev === 'function') this._writev = options.writev
        if (typeof options.destroy === 'function')
          this._destroy = options.destroy
        if (typeof options.final === 'function') this._final = options.final
      }
      Stream.call(this)
    }
    Writable.prototype.pipe = function () {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE())
    }
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END()
      errorOrDestroy(stream, er)
      process.nextTick(cb, er)
    }
    function validChunk(stream, state, chunk, cb) {
      var er
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES()
      } else if (typeof chunk !== 'string' && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk)
      }
      if (er) {
        errorOrDestroy(stream, er)
        process.nextTick(cb, er)
        return false
      }
      return true
    }
    Writable.prototype.write = function (chunk, encoding, cb) {
      var state = this._writableState
      var ret = false
      var isBuf = !state.objectMode && _isUint8Array(chunk)
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk)
      }
      if (typeof encoding === 'function') {
        cb = encoding
        encoding = null
      }
      if (isBuf) encoding = 'buffer'
      else if (!encoding) encoding = state.defaultEncoding
      if (typeof cb !== 'function') cb = nop
      if (state.ending) writeAfterEnd(this, cb)
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb)
      }
      return ret
    }
    Writable.prototype.cork = function () {
      this._writableState.corked++
    }
    Writable.prototype.uncork = function () {
      var state = this._writableState
      if (state.corked) {
        state.corked--
        if (
          !state.writing &&
          !state.corked &&
          !state.bufferProcessing &&
          state.bufferedRequest
        )
          clearBuffer(this, state)
      }
    }
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(
      encoding
    ) {
      if (typeof encoding === 'string') encoding = encoding.toLowerCase()
      if (
        !(
          [
            'hex',
            'utf8',
            'utf-8',
            'ascii',
            'binary',
            'base64',
            'ucs2',
            'ucs-2',
            'utf16le',
            'utf-16le',
            'raw',
          ].indexOf((encoding + '').toLowerCase()) > -1
        )
      )
        throw new ERR_UNKNOWN_ENCODING(encoding)
      this._writableState.defaultEncoding = encoding
      return this
    }
    Object.defineProperty(Writable.prototype, 'writableBuffer', {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer()
      },
    })
    function decodeChunk(state, chunk, encoding) {
      if (
        !state.objectMode &&
        state.decodeStrings !== false &&
        typeof chunk === 'string'
      ) {
        chunk = Buffer2.from(chunk, encoding)
      }
      return chunk
    }
    Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark
      },
    })
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding)
        if (chunk !== newChunk) {
          isBuf = true
          encoding = 'buffer'
          chunk = newChunk
        }
      }
      var len = state.objectMode ? 1 : chunk.length
      state.length += len
      var ret = state.length < state.highWaterMark
      if (!ret) state.needDrain = true
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null,
        }
        if (last) {
          last.next = state.lastBufferedRequest
        } else {
          state.bufferedRequest = state.lastBufferedRequest
        }
        state.bufferedRequestCount += 1
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb)
      }
      return ret
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len
      state.writecb = cb
      state.writing = true
      state.sync = true
      if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'))
      else if (writev) stream._writev(chunk, state.onwrite)
      else stream._write(chunk, encoding, state.onwrite)
      state.sync = false
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb
      if (sync) {
        process.nextTick(cb, er)
        process.nextTick(finishMaybe, stream, state)
        stream._writableState.errorEmitted = true
        errorOrDestroy(stream, er)
      } else {
        cb(er)
        stream._writableState.errorEmitted = true
        errorOrDestroy(stream, er)
        finishMaybe(stream, state)
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false
      state.writecb = null
      state.length -= state.writelen
      state.writelen = 0
    }
    function onwrite(stream, er) {
      var state = stream._writableState
      var sync = state.sync
      var cb = state.writecb
      if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK()
      onwriteStateUpdate(state)
      if (er) onwriteError(stream, state, sync, er, cb)
      else {
        var finished = needFinish(state) || stream.destroyed
        if (
          !finished &&
          !state.corked &&
          !state.bufferProcessing &&
          state.bufferedRequest
        ) {
          clearBuffer(stream, state)
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb)
        } else {
          afterWrite(stream, state, finished, cb)
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state)
      state.pendingcb--
      cb()
      finishMaybe(stream, state)
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false
        stream.emit('drain')
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true
      var entry = state.bufferedRequest
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount
        var buffer = new Array(l)
        var holder = state.corkedRequestsFree
        holder.entry = entry
        var count = 0
        var allBuffers = true
        while (entry) {
          buffer[count] = entry
          if (!entry.isBuf) allBuffers = false
          entry = entry.next
          count += 1
        }
        buffer.allBuffers = allBuffers
        doWrite(stream, state, true, state.length, buffer, '', holder.finish)
        state.pendingcb++
        state.lastBufferedRequest = null
        if (holder.next) {
          state.corkedRequestsFree = holder.next
          holder.next = null
        } else {
          state.corkedRequestsFree = new CorkedRequest(state)
        }
        state.bufferedRequestCount = 0
      } else {
        while (entry) {
          var chunk = entry.chunk
          var encoding = entry.encoding
          var cb = entry.callback
          var len = state.objectMode ? 1 : chunk.length
          doWrite(stream, state, false, len, chunk, encoding, cb)
          entry = entry.next
          state.bufferedRequestCount--
          if (state.writing) {
            break
          }
        }
        if (entry === null) state.lastBufferedRequest = null
      }
      state.bufferedRequest = entry
      state.bufferProcessing = false
    }
    Writable.prototype._write = function (chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'))
    }
    Writable.prototype._writev = null
    Writable.prototype.end = function (chunk, encoding, cb) {
      var state = this._writableState
      if (typeof chunk === 'function') {
        cb = chunk
        chunk = null
        encoding = null
      } else if (typeof encoding === 'function') {
        cb = encoding
        encoding = null
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding)
      if (state.corked) {
        state.corked = 1
        this.uncork()
      }
      if (!state.ending) endWritable(this, state, cb)
      return this
    }
    Object.defineProperty(Writable.prototype, 'writableLength', {
      enumerable: false,
      get: function get() {
        return this._writableState.length
      },
    })
    function needFinish(state) {
      return (
        state.ending &&
        state.length === 0 &&
        state.bufferedRequest === null &&
        !state.finished &&
        !state.writing
      )
    }
    function callFinal(stream, state) {
      stream._final(function (err) {
        state.pendingcb--
        if (err) {
          errorOrDestroy(stream, err)
        }
        state.prefinished = true
        stream.emit('prefinish')
        finishMaybe(stream, state)
      })
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
          state.pendingcb++
          state.finalCalled = true
          process.nextTick(callFinal, stream, state)
        } else {
          state.prefinished = true
          stream.emit('prefinish')
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state)
      if (need) {
        prefinish(stream, state)
        if (state.pendingcb === 0) {
          state.finished = true
          stream.emit('finish')
          if (state.autoDestroy) {
            var rState = stream._readableState
            if (!rState || (rState.autoDestroy && rState.endEmitted)) {
              stream.destroy()
            }
          }
        }
      }
      return need
    }
    function endWritable(stream, state, cb) {
      state.ending = true
      finishMaybe(stream, state)
      if (cb) {
        if (state.finished) process.nextTick(cb)
        else stream.once('finish', cb)
      }
      state.ended = true
      stream.writable = false
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry
      corkReq.entry = null
      while (entry) {
        var cb = entry.callback
        state.pendingcb--
        cb(err)
        entry = entry.next
      }
      state.corkedRequestsFree.next = corkReq
    }
    Object.defineProperty(Writable.prototype, 'destroyed', {
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false
        }
        return this._writableState.destroyed
      },
      set: function set(value) {
        if (!this._writableState) {
          return
        }
        this._writableState.destroyed = value
      },
    })
    Writable.prototype.destroy = destroyImpl.destroy
    Writable.prototype._undestroy = destroyImpl.undestroy
    Writable.prototype._destroy = function (err, cb) {
      cb(err)
    }
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_duplex.js'(
    exports,
    module2
  ) {
    'use strict'
    var objectKeys =
      Object.keys ||
      function (obj) {
        var keys2 = []
        for (var key in obj) {
          keys2.push(key)
        }
        return keys2
      }
    module2.exports = Duplex
    var Readable = require_stream_readable()
    var Writable = require_stream_writable()
    require_inherits()(Duplex, Readable)
    {
      keys = objectKeys(Writable.prototype)
      for (v = 0; v < keys.length; v++) {
        method = keys[v]
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method]
      }
    }
    var keys
    var method
    var v
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options)
      Readable.call(this, options)
      Writable.call(this, options)
      this.allowHalfOpen = true
      if (options) {
        if (options.readable === false) this.readable = false
        if (options.writable === false) this.writable = false
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false
          this.once('end', onend)
        }
      }
    }
    Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark
      },
    })
    Object.defineProperty(Duplex.prototype, 'writableBuffer', {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer()
      },
    })
    Object.defineProperty(Duplex.prototype, 'writableLength', {
      enumerable: false,
      get: function get() {
        return this._writableState.length
      },
    })
    function onend() {
      if (this._writableState.ended) return
      process.nextTick(onEndNT, this)
    }
    function onEndNT(self) {
      self.end()
    }
    Object.defineProperty(Duplex.prototype, 'destroyed', {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false
        }
        return this._readableState.destroyed && this._writableState.destroyed
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return
        }
        this._readableState.destroyed = value
        this._writableState.destroyed = value
      },
    })
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/end-of-stream.js'(
    exports,
    module2
  ) {
    'use strict'
    var ERR_STREAM_PREMATURE_CLOSE =
      require_errors().codes.ERR_STREAM_PREMATURE_CLOSE
    function once(callback) {
      var called = false
      return function () {
        if (called) return
        called = true
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key]
        }
        callback.apply(this, args)
      }
    }
    function noop() {}
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === 'function'
    }
    function eos(stream, opts, callback) {
      if (typeof opts === 'function') return eos(stream, null, opts)
      if (!opts) opts = {}
      callback = once(callback || noop)
      var readable =
        opts.readable || (opts.readable !== false && stream.readable)
      var writable =
        opts.writable || (opts.writable !== false && stream.writable)
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable) onfinish()
      }
      var writableEnded =
        stream._writableState && stream._writableState.finished
      var onfinish = function onfinish2() {
        writable = false
        writableEnded = true
        if (!readable) callback.call(stream)
      }
      var readableEnded =
        stream._readableState && stream._readableState.endEmitted
      var onend = function onend2() {
        readable = false
        readableEnded = true
        if (!writable) callback.call(stream)
      }
      var onerror = function onerror2(err) {
        callback.call(stream, err)
      }
      var onclose = function onclose2() {
        var err
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE()
          return callback.call(stream, err)
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE()
          return callback.call(stream, err)
        }
      }
      var onrequest = function onrequest2() {
        stream.req.on('finish', onfinish)
      }
      if (isRequest(stream)) {
        stream.on('complete', onfinish)
        stream.on('abort', onclose)
        if (stream.req) onrequest()
        else stream.on('request', onrequest)
      } else if (writable && !stream._writableState) {
        stream.on('end', onlegacyfinish)
        stream.on('close', onlegacyfinish)
      }
      stream.on('end', onend)
      stream.on('finish', onfinish)
      if (opts.error !== false) stream.on('error', onerror)
      stream.on('close', onclose)
      return function () {
        stream.removeListener('complete', onfinish)
        stream.removeListener('abort', onclose)
        stream.removeListener('request', onrequest)
        if (stream.req) stream.req.removeListener('finish', onfinish)
        stream.removeListener('end', onlegacyfinish)
        stream.removeListener('close', onlegacyfinish)
        stream.removeListener('finish', onfinish)
        stream.removeListener('end', onend)
        stream.removeListener('error', onerror)
        stream.removeListener('close', onclose)
      }
    }
    module2.exports = eos
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/async_iterator.js'(
    exports,
    module2
  ) {
    'use strict'
    var _Object$setPrototypeO
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }
    var finished = require_end_of_stream()
    var kLastResolve = Symbol('lastResolve')
    var kLastReject = Symbol('lastReject')
    var kError = Symbol('error')
    var kEnded = Symbol('ended')
    var kLastPromise = Symbol('lastPromise')
    var kHandlePromise = Symbol('handlePromise')
    var kStream = Symbol('stream')
    function createIterResult(value, done) {
      return {
        value,
        done,
      }
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve]
      if (resolve !== null) {
        var data = iter[kStream].read()
        if (data !== null) {
          iter[kLastPromise] = null
          iter[kLastResolve] = null
          iter[kLastReject] = null
          resolve(createIterResult(data, false))
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter)
    }
    function wrapForNext(lastPromise, iter) {
      return function (resolve, reject) {
        lastPromise.then(function () {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true))
            return
          }
          iter[kHandlePromise](resolve, reject)
        }, reject)
      }
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function () {})
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(
      ((_Object$setPrototypeO = {
        get stream() {
          return this[kStream]
        },
        next: function next() {
          var _this = this
          var error = this[kError]
          if (error !== null) {
            return Promise.reject(error)
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult(void 0, true))
          }
          if (this[kStream].destroyed) {
            return new Promise(function (resolve, reject) {
              process.nextTick(function () {
                if (_this[kError]) {
                  reject(_this[kError])
                } else {
                  resolve(createIterResult(void 0, true))
                }
              })
            })
          }
          var lastPromise = this[kLastPromise]
          var promise
          if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this))
          } else {
            var data = this[kStream].read()
            if (data !== null) {
              return Promise.resolve(createIterResult(data, false))
            }
            promise = new Promise(this[kHandlePromise])
          }
          this[kLastPromise] = promise
          return promise
        },
      }),
      _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
        return this
      }),
      _defineProperty(_Object$setPrototypeO, 'return', function _return() {
        var _this2 = this
        return new Promise(function (resolve, reject) {
          _this2[kStream].destroy(null, function (err) {
            if (err) {
              reject(err)
              return
            }
            resolve(createIterResult(void 0, true))
          })
        })
      }),
      _Object$setPrototypeO),
      AsyncIteratorPrototype
    )
    var createReadableStreamAsyncIterator =
      function createReadableStreamAsyncIterator2(stream) {
        var _Object$create
        var iterator = Object.create(
          ReadableStreamAsyncIteratorPrototype,
          ((_Object$create = {}),
          _defineProperty(_Object$create, kStream, {
            value: stream,
            writable: true,
          }),
          _defineProperty(_Object$create, kLastResolve, {
            value: null,
            writable: true,
          }),
          _defineProperty(_Object$create, kLastReject, {
            value: null,
            writable: true,
          }),
          _defineProperty(_Object$create, kError, {
            value: null,
            writable: true,
          }),
          _defineProperty(_Object$create, kEnded, {
            value: stream._readableState.endEmitted,
            writable: true,
          }),
          _defineProperty(_Object$create, kHandlePromise, {
            value: function value(resolve, reject) {
              var data = iterator[kStream].read()
              if (data) {
                iterator[kLastPromise] = null
                iterator[kLastResolve] = null
                iterator[kLastReject] = null
                resolve(createIterResult(data, false))
              } else {
                iterator[kLastResolve] = resolve
                iterator[kLastReject] = reject
              }
            },
            writable: true,
          }),
          _Object$create)
        )
        iterator[kLastPromise] = null
        finished(stream, function (err) {
          if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[kLastReject]
            if (reject !== null) {
              iterator[kLastPromise] = null
              iterator[kLastResolve] = null
              iterator[kLastReject] = null
              reject(err)
            }
            iterator[kError] = err
            return
          }
          var resolve = iterator[kLastResolve]
          if (resolve !== null) {
            iterator[kLastPromise] = null
            iterator[kLastResolve] = null
            iterator[kLastReject] = null
            resolve(createIterResult(void 0, true))
          }
          iterator[kEnded] = true
        })
        stream.on('readable', onReadable.bind(null, iterator))
        return iterator
      }
    module2.exports = createReadableStreamAsyncIterator
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/from.js'(
    exports,
    module2
  ) {
    'use strict'
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg)
        var value = info.value
      } catch (error) {
        reject(error)
        return
      }
      if (info.done) {
        resolve(value)
      } else {
        Promise.resolve(value).then(_next, _throw)
      }
    }
    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
          args = arguments
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args)
          function _next(value) {
            asyncGeneratorStep(
              gen,
              resolve,
              reject,
              _next,
              _throw,
              'next',
              value
            )
          }
          function _throw(err) {
            asyncGeneratorStep(
              gen,
              resolve,
              reject,
              _next,
              _throw,
              'throw',
              err
            )
          }
          _next(void 0)
        })
      }
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        keys.push.apply(keys, symbols)
      }
      return keys
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
        }
      }
      return target
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      } else {
        obj[key] = value
      }
      return obj
    }
    var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE
    function from(Readable, iterable, opts) {
      var iterator
      if (iterable && typeof iterable.next === 'function') {
        iterator = iterable
      } else if (iterable && iterable[Symbol.asyncIterator])
        iterator = iterable[Symbol.asyncIterator]()
      else if (iterable && iterable[Symbol.iterator])
        iterator = iterable[Symbol.iterator]()
      else throw new ERR_INVALID_ARG_TYPE('iterable', ['Iterable'], iterable)
      var readable = new Readable(
        _objectSpread(
          {
            objectMode: true,
          },
          opts
        )
      )
      var reading = false
      readable._read = function () {
        if (!reading) {
          reading = true
          next()
        }
      }
      function next() {
        return _next2.apply(this, arguments)
      }
      function _next2() {
        _next2 = _asyncToGenerator(function* () {
          try {
            var _ref = yield iterator.next(),
              value = _ref.value,
              done = _ref.done
            if (done) {
              readable.push(null)
            } else if (readable.push(yield value)) {
              next()
            } else {
              reading = false
            }
          } catch (err) {
            readable.destroy(err)
          }
        })
        return _next2.apply(this, arguments)
      }
      return readable
    }
    module2.exports = from
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_readable.js'(
    exports,
    module2
  ) {
    'use strict'
    module2.exports = Readable
    var Duplex
    Readable.ReadableState = ReadableState
    var EE = require('events').EventEmitter
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length
    }
    var Stream = require_stream()
    var Buffer2 = require('buffer').Buffer
    var OurUint8Array = global.Uint8Array || function () {}
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk)
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array
    }
    var debugUtil = require('util')
    var debug
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog('stream')
    } else {
      debug = function debug2() {}
    }
    var BufferList = require_buffer_list()
    var destroyImpl = require_destroy()
    var _require = require_state()
    var getHighWaterMark = _require.getHighWaterMark
    var _require$codes = require_errors().codes
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT =
      _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
    var StringDecoder
    var createReadableStreamAsyncIterator
    var from
    require_inherits()(Readable, Stream)
    var errorOrDestroy = destroyImpl.errorOrDestroy
    var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume']
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === 'function')
        return emitter.prependListener(event, fn)
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn)
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn)
      else emitter._events[event] = [fn, emitter._events[event]]
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex()
      options = options || {}
      if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex
      this.objectMode = !!options.objectMode
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode
      this.highWaterMark = getHighWaterMark(
        this,
        options,
        'readableHighWaterMark',
        isDuplex
      )
      this.buffer = new BufferList()
      this.length = 0
      this.pipes = null
      this.pipesCount = 0
      this.flowing = null
      this.ended = false
      this.endEmitted = false
      this.reading = false
      this.sync = true
      this.needReadable = false
      this.emittedReadable = false
      this.readableListening = false
      this.resumeScheduled = false
      this.paused = true
      this.emitClose = options.emitClose !== false
      this.autoDestroy = !!options.autoDestroy
      this.destroyed = false
      this.defaultEncoding = options.defaultEncoding || 'utf8'
      this.awaitDrain = 0
      this.readingMore = false
      this.decoder = null
      this.encoding = null
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require('string_decoder/').StringDecoder
        this.decoder = new StringDecoder(options.encoding)
        this.encoding = options.encoding
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex()
      if (!(this instanceof Readable)) return new Readable(options)
      var isDuplex = this instanceof Duplex
      this._readableState = new ReadableState(options, this, isDuplex)
      this.readable = true
      if (options) {
        if (typeof options.read === 'function') this._read = options.read
        if (typeof options.destroy === 'function')
          this._destroy = options.destroy
      }
      Stream.call(this)
    }
    Object.defineProperty(Readable.prototype, 'destroyed', {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false
        }
        return this._readableState.destroyed
      },
      set: function set(value) {
        if (!this._readableState) {
          return
        }
        this._readableState.destroyed = value
      },
    })
    Readable.prototype.destroy = destroyImpl.destroy
    Readable.prototype._undestroy = destroyImpl.undestroy
    Readable.prototype._destroy = function (err, cb) {
      cb(err)
    }
    Readable.prototype.push = function (chunk, encoding) {
      var state = this._readableState
      var skipChunkCheck
      if (!state.objectMode) {
        if (typeof chunk === 'string') {
          encoding = encoding || state.defaultEncoding
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding)
            encoding = ''
          }
          skipChunkCheck = true
        }
      } else {
        skipChunkCheck = true
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck)
    }
    Readable.prototype.unshift = function (chunk) {
      return readableAddChunk(this, chunk, null, true, false)
    }
    function readableAddChunk(
      stream,
      chunk,
      encoding,
      addToFront,
      skipChunkCheck
    ) {
      debug('readableAddChunk', chunk)
      var state = stream._readableState
      if (chunk === null) {
        state.reading = false
        onEofChunk(stream, state)
      } else {
        var er
        if (!skipChunkCheck) er = chunkInvalid(state, chunk)
        if (er) {
          errorOrDestroy(stream, er)
        } else if (state.objectMode || (chunk && chunk.length > 0)) {
          if (
            typeof chunk !== 'string' &&
            !state.objectMode &&
            Object.getPrototypeOf(chunk) !== Buffer2.prototype
          ) {
            chunk = _uint8ArrayToBuffer(chunk)
          }
          if (addToFront) {
            if (state.endEmitted)
              errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT())
            else addChunk(stream, state, chunk, true)
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF())
          } else if (state.destroyed) {
            return false
          } else {
            state.reading = false
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk)
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false)
              else maybeReadMore(stream, state)
            } else {
              addChunk(stream, state, chunk, false)
            }
          }
        } else if (!addToFront) {
          state.reading = false
          maybeReadMore(stream, state)
        }
      }
      return (
        !state.ended &&
        (state.length < state.highWaterMark || state.length === 0)
      )
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0
        stream.emit('data', chunk)
      } else {
        state.length += state.objectMode ? 1 : chunk.length
        if (addToFront) state.buffer.unshift(chunk)
        else state.buffer.push(chunk)
        if (state.needReadable) emitReadable(stream)
      }
      maybeReadMore(stream, state)
    }
    function chunkInvalid(state, chunk) {
      var er
      if (
        !_isUint8Array(chunk) &&
        typeof chunk !== 'string' &&
        chunk !== void 0 &&
        !state.objectMode
      ) {
        er = new ERR_INVALID_ARG_TYPE(
          'chunk',
          ['string', 'Buffer', 'Uint8Array'],
          chunk
        )
      }
      return er
    }
    Readable.prototype.isPaused = function () {
      return this._readableState.flowing === false
    }
    Readable.prototype.setEncoding = function (enc) {
      if (!StringDecoder)
        StringDecoder = require('string_decoder/').StringDecoder
      var decoder = new StringDecoder(enc)
      this._readableState.decoder = decoder
      this._readableState.encoding = this._readableState.decoder.encoding
      var p = this._readableState.buffer.head
      var content = ''
      while (p !== null) {
        content += decoder.write(p.data)
        p = p.next
      }
      this._readableState.buffer.clear()
      if (content !== '') this._readableState.buffer.push(content)
      this._readableState.length = content.length
      return this
    }
    var MAX_HWM = 1073741824
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM
      } else {
        n--
        n |= n >>> 1
        n |= n >>> 2
        n |= n >>> 4
        n |= n >>> 8
        n |= n >>> 16
        n++
      }
      return n
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || (state.length === 0 && state.ended)) return 0
      if (state.objectMode) return 1
      if (n !== n) {
        if (state.flowing && state.length) return state.buffer.head.data.length
        else return state.length
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n)
      if (n <= state.length) return n
      if (!state.ended) {
        state.needReadable = true
        return 0
      }
      return state.length
    }
    Readable.prototype.read = function (n) {
      debug('read', n)
      n = parseInt(n, 10)
      var state = this._readableState
      var nOrig = n
      if (n !== 0) state.emittedReadable = false
      if (
        n === 0 &&
        state.needReadable &&
        ((state.highWaterMark !== 0
          ? state.length >= state.highWaterMark
          : state.length > 0) ||
          state.ended)
      ) {
        debug('read: emitReadable', state.length, state.ended)
        if (state.length === 0 && state.ended) endReadable(this)
        else emitReadable(this)
        return null
      }
      n = howMuchToRead(n, state)
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this)
        return null
      }
      var doRead = state.needReadable
      debug('need readable', doRead)
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true
        debug('length less than watermark', doRead)
      }
      if (state.ended || state.reading) {
        doRead = false
        debug('reading or ended', doRead)
      } else if (doRead) {
        debug('do read')
        state.reading = true
        state.sync = true
        if (state.length === 0) state.needReadable = true
        this._read(state.highWaterMark)
        state.sync = false
        if (!state.reading) n = howMuchToRead(nOrig, state)
      }
      var ret
      if (n > 0) ret = fromList(n, state)
      else ret = null
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark
        n = 0
      } else {
        state.length -= n
        state.awaitDrain = 0
      }
      if (state.length === 0) {
        if (!state.ended) state.needReadable = true
        if (nOrig !== n && state.ended) endReadable(this)
      }
      if (ret !== null) this.emit('data', ret)
      return ret
    }
    function onEofChunk(stream, state) {
      debug('onEofChunk')
      if (state.ended) return
      if (state.decoder) {
        var chunk = state.decoder.end()
        if (chunk && chunk.length) {
          state.buffer.push(chunk)
          state.length += state.objectMode ? 1 : chunk.length
        }
      }
      state.ended = true
      if (state.sync) {
        emitReadable(stream)
      } else {
        state.needReadable = false
        if (!state.emittedReadable) {
          state.emittedReadable = true
          emitReadable_(stream)
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState
      debug('emitReadable', state.needReadable, state.emittedReadable)
      state.needReadable = false
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing)
        state.emittedReadable = true
        process.nextTick(emitReadable_, stream)
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState
      debug('emitReadable_', state.destroyed, state.length, state.ended)
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable')
        state.emittedReadable = false
      }
      state.needReadable =
        !state.flowing && !state.ended && state.length <= state.highWaterMark
      flow(stream)
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true
        process.nextTick(maybeReadMore_, stream, state)
      }
    }
    function maybeReadMore_(stream, state) {
      while (
        !state.reading &&
        !state.ended &&
        (state.length < state.highWaterMark ||
          (state.flowing && state.length === 0))
      ) {
        var len = state.length
        debug('maybeReadMore read 0')
        stream.read(0)
        if (len === state.length) break
      }
      state.readingMore = false
    }
    Readable.prototype._read = function (n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'))
    }
    Readable.prototype.pipe = function (dest, pipeOpts) {
      var src = this
      var state = this._readableState
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest
          break
        case 1:
          state.pipes = [state.pipes, dest]
          break
        default:
          state.pipes.push(dest)
          break
      }
      state.pipesCount += 1
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts)
      var doEnd =
        (!pipeOpts || pipeOpts.end !== false) &&
        dest !== process.stdout &&
        dest !== process.stderr
      var endFn = doEnd ? onend : unpipe
      if (state.endEmitted) process.nextTick(endFn)
      else src.once('end', endFn)
      dest.on('unpipe', onunpipe)
      function onunpipe(readable, unpipeInfo) {
        debug('onunpipe')
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true
            cleanup()
          }
        }
      }
      function onend() {
        debug('onend')
        dest.end()
      }
      var ondrain = pipeOnDrain(src)
      dest.on('drain', ondrain)
      var cleanedUp = false
      function cleanup() {
        debug('cleanup')
        dest.removeListener('close', onclose)
        dest.removeListener('finish', onfinish)
        dest.removeListener('drain', ondrain)
        dest.removeListener('error', onerror)
        dest.removeListener('unpipe', onunpipe)
        src.removeListener('end', onend)
        src.removeListener('end', unpipe)
        src.removeListener('data', ondata)
        cleanedUp = true
        if (
          state.awaitDrain &&
          (!dest._writableState || dest._writableState.needDrain)
        )
          ondrain()
      }
      src.on('data', ondata)
      function ondata(chunk) {
        debug('ondata')
        var ret = dest.write(chunk)
        debug('dest.write', ret)
        if (ret === false) {
          if (
            ((state.pipesCount === 1 && state.pipes === dest) ||
              (state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1)) &&
            !cleanedUp
          ) {
            debug('false write response, pause', state.awaitDrain)
            state.awaitDrain++
          }
          src.pause()
        }
      }
      function onerror(er) {
        debug('onerror', er)
        unpipe()
        dest.removeListener('error', onerror)
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er)
      }
      prependListener(dest, 'error', onerror)
      function onclose() {
        dest.removeListener('finish', onfinish)
        unpipe()
      }
      dest.once('close', onclose)
      function onfinish() {
        debug('onfinish')
        dest.removeListener('close', onclose)
        unpipe()
      }
      dest.once('finish', onfinish)
      function unpipe() {
        debug('unpipe')
        src.unpipe(dest)
      }
      dest.emit('pipe', src)
      if (!state.flowing) {
        debug('pipe resume')
        src.resume()
      }
      return dest
    }
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState
        debug('pipeOnDrain', state.awaitDrain)
        if (state.awaitDrain) state.awaitDrain--
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
          state.flowing = true
          flow(src)
        }
      }
    }
    Readable.prototype.unpipe = function (dest) {
      var state = this._readableState
      var unpipeInfo = {
        hasUnpiped: false,
      }
      if (state.pipesCount === 0) return this
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes) return this
        if (!dest) dest = state.pipes
        state.pipes = null
        state.pipesCount = 0
        state.flowing = false
        if (dest) dest.emit('unpipe', this, unpipeInfo)
        return this
      }
      if (!dest) {
        var dests = state.pipes
        var len = state.pipesCount
        state.pipes = null
        state.pipesCount = 0
        state.flowing = false
        for (var i = 0; i < len; i++) {
          dests[i].emit('unpipe', this, {
            hasUnpiped: false,
          })
        }
        return this
      }
      var index = indexOf(state.pipes, dest)
      if (index === -1) return this
      state.pipes.splice(index, 1)
      state.pipesCount -= 1
      if (state.pipesCount === 1) state.pipes = state.pipes[0]
      dest.emit('unpipe', this, unpipeInfo)
      return this
    }
    Readable.prototype.on = function (ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn)
      var state = this._readableState
      if (ev === 'data') {
        state.readableListening = this.listenerCount('readable') > 0
        if (state.flowing !== false) this.resume()
      } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true
          state.flowing = false
          state.emittedReadable = false
          debug('on readable', state.length, state.reading)
          if (state.length) {
            emitReadable(this)
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this)
          }
        }
      }
      return res
    }
    Readable.prototype.addListener = Readable.prototype.on
    Readable.prototype.removeListener = function (ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn)
      if (ev === 'readable') {
        process.nextTick(updateReadableListening, this)
      }
      return res
    }
    Readable.prototype.removeAllListeners = function (ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments)
      if (ev === 'readable' || ev === void 0) {
        process.nextTick(updateReadableListening, this)
      }
      return res
    }
    function updateReadableListening(self) {
      var state = self._readableState
      state.readableListening = self.listenerCount('readable') > 0
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true
      } else if (self.listenerCount('data') > 0) {
        self.resume()
      }
    }
    function nReadingNextTick(self) {
      debug('readable nexttick read 0')
      self.read(0)
    }
    Readable.prototype.resume = function () {
      var state = this._readableState
      if (!state.flowing) {
        debug('resume')
        state.flowing = !state.readableListening
        resume(this, state)
      }
      state.paused = false
      return this
    }
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true
        process.nextTick(resume_, stream, state)
      }
    }
    function resume_(stream, state) {
      debug('resume', state.reading)
      if (!state.reading) {
        stream.read(0)
      }
      state.resumeScheduled = false
      stream.emit('resume')
      flow(stream)
      if (state.flowing && !state.reading) stream.read(0)
    }
    Readable.prototype.pause = function () {
      debug('call pause flowing=%j', this._readableState.flowing)
      if (this._readableState.flowing !== false) {
        debug('pause')
        this._readableState.flowing = false
        this.emit('pause')
      }
      this._readableState.paused = true
      return this
    }
    function flow(stream) {
      var state = stream._readableState
      debug('flow', state.flowing)
      while (state.flowing && stream.read() !== null) {}
    }
    Readable.prototype.wrap = function (stream) {
      var _this = this
      var state = this._readableState
      var paused = false
      stream.on('end', function () {
        debug('wrapped end')
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end()
          if (chunk && chunk.length) _this.push(chunk)
        }
        _this.push(null)
      })
      stream.on('data', function (chunk) {
        debug('wrapped data')
        if (state.decoder) chunk = state.decoder.write(chunk)
        if (state.objectMode && (chunk === null || chunk === void 0)) return
        else if (!state.objectMode && (!chunk || !chunk.length)) return
        var ret = _this.push(chunk)
        if (!ret) {
          paused = true
          stream.pause()
        }
      })
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === 'function') {
          this[i] = (function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments)
            }
          })(i)
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]))
      }
      this._read = function (n2) {
        debug('wrapped _read', n2)
        if (paused) {
          paused = false
          stream.resume()
        }
      }
      return this
    }
    if (typeof Symbol === 'function') {
      Readable.prototype[Symbol.asyncIterator] = function () {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator()
        }
        return createReadableStreamAsyncIterator(this)
      }
    }
    Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark
      },
    })
    Object.defineProperty(Readable.prototype, 'readableBuffer', {
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer
      },
    })
    Object.defineProperty(Readable.prototype, 'readableFlowing', {
      enumerable: false,
      get: function get() {
        return this._readableState.flowing
      },
      set: function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state
        }
      },
    })
    Readable._fromList = fromList
    Object.defineProperty(Readable.prototype, 'readableLength', {
      enumerable: false,
      get: function get() {
        return this._readableState.length
      },
    })
    function fromList(n, state) {
      if (state.length === 0) return null
      var ret
      if (state.objectMode) ret = state.buffer.shift()
      else if (!n || n >= state.length) {
        if (state.decoder) ret = state.buffer.join('')
        else if (state.buffer.length === 1) ret = state.buffer.first()
        else ret = state.buffer.concat(state.length)
        state.buffer.clear()
      } else {
        ret = state.buffer.consume(n, state.decoder)
      }
      return ret
    }
    function endReadable(stream) {
      var state = stream._readableState
      debug('endReadable', state.endEmitted)
      if (!state.endEmitted) {
        state.ended = true
        process.nextTick(endReadableNT, state, stream)
      }
    }
    function endReadableNT(state, stream) {
      debug('endReadableNT', state.endEmitted, state.length)
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true
        stream.readable = false
        stream.emit('end')
        if (state.autoDestroy) {
          var wState = stream._writableState
          if (!wState || (wState.autoDestroy && wState.finished)) {
            stream.destroy()
          }
        }
      }
    }
    if (typeof Symbol === 'function') {
      Readable.from = function (iterable, opts) {
        if (from === void 0) {
          from = require_from()
        }
        return from(Readable, iterable, opts)
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i
      }
      return -1
    }
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_transform.js'(
    exports,
    module2
  ) {
    'use strict'
    module2.exports = Transform
    var _require$codes = require_errors().codes
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK
    var ERR_TRANSFORM_ALREADY_TRANSFORMING =
      _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0
    var Duplex = require_stream_duplex()
    require_inherits()(Transform, Duplex)
    function afterTransform(er, data) {
      var ts = this._transformState
      ts.transforming = false
      var cb = ts.writecb
      if (cb === null) {
        return this.emit('error', new ERR_MULTIPLE_CALLBACK())
      }
      ts.writechunk = null
      ts.writecb = null
      if (data != null) this.push(data)
      cb(er)
      var rs = this._readableState
      rs.reading = false
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark)
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options)
      Duplex.call(this, options)
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null,
      }
      this._readableState.needReadable = true
      this._readableState.sync = false
      if (options) {
        if (typeof options.transform === 'function')
          this._transform = options.transform
        if (typeof options.flush === 'function') this._flush = options.flush
      }
      this.on('prefinish', prefinish)
    }
    function prefinish() {
      var _this = this
      if (typeof this._flush === 'function' && !this._readableState.destroyed) {
        this._flush(function (er, data) {
          done(_this, er, data)
        })
      } else {
        done(this, null, null)
      }
    }
    Transform.prototype.push = function (chunk, encoding) {
      this._transformState.needTransform = false
      return Duplex.prototype.push.call(this, chunk, encoding)
    }
    Transform.prototype._transform = function (chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'))
    }
    Transform.prototype._write = function (chunk, encoding, cb) {
      var ts = this._transformState
      ts.writecb = cb
      ts.writechunk = chunk
      ts.writeencoding = encoding
      if (!ts.transforming) {
        var rs = this._readableState
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark)
      }
    }
    Transform.prototype._read = function (n) {
      var ts = this._transformState
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform)
      } else {
        ts.needTransform = true
      }
    }
    Transform.prototype._destroy = function (err, cb) {
      Duplex.prototype._destroy.call(this, err, function (err2) {
        cb(err2)
      })
    }
    function done(stream, er, data) {
      if (er) return stream.emit('error', er)
      if (data != null) stream.push(data)
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0()
      if (stream._transformState.transforming)
        throw new ERR_TRANSFORM_ALREADY_TRANSFORMING()
      return stream.push(null)
    }
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/_stream_passthrough.js'(
    exports,
    module2
  ) {
    'use strict'
    module2.exports = PassThrough
    var Transform = require_stream_transform()
    require_inherits()(PassThrough, Transform)
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options)
      Transform.call(this, options)
    }
    PassThrough.prototype._transform = function (chunk, encoding, cb) {
      cb(null, chunk)
    }
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/lib/internal/streams/pipeline.js'(
    exports,
    module2
  ) {
    'use strict'
    var eos
    function once(callback) {
      var called = false
      return function () {
        if (called) return
        called = true
        callback.apply(void 0, arguments)
      }
    }
    var _require$codes = require_errors().codes
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED
    function noop(err) {
      if (err) throw err
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === 'function'
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback)
      var closed = false
      stream.on('close', function () {
        closed = true
      })
      if (eos === void 0) eos = require_end_of_stream()
      eos(
        stream,
        {
          readable: reading,
          writable: writing,
        },
        function (err) {
          if (err) return callback(err)
          closed = true
          callback()
        }
      )
      var destroyed = false
      return function (err) {
        if (closed) return
        if (destroyed) return
        destroyed = true
        if (isRequest(stream)) return stream.abort()
        if (typeof stream.destroy === 'function') return stream.destroy()
        callback(err || new ERR_STREAM_DESTROYED('pipe'))
      }
    }
    function call(fn) {
      fn()
    }
    function pipe(from, to) {
      return from.pipe(to)
    }
    function popCallback(streams) {
      if (!streams.length) return noop
      if (typeof streams[streams.length - 1] !== 'function') return noop
      return streams.pop()
    }
    function pipeline() {
      for (
        var _len = arguments.length, streams = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        streams[_key] = arguments[_key]
      }
      var callback = popCallback(streams)
      if (Array.isArray(streams[0])) streams = streams[0]
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS('streams')
      }
      var error
      var destroys = streams.map(function (stream, i) {
        var reading = i < streams.length - 1
        var writing = i > 0
        return destroyer(stream, reading, writing, function (err) {
          if (!error) error = err
          if (err) destroys.forEach(call)
          if (reading) return
          destroys.forEach(call)
          callback(error)
        })
      })
      return streams.reduce(pipe)
    }
    module2.exports = pipeline
  },
})

// node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  'node_modules/.pnpm/readable-stream@3.6.0/node_modules/readable-stream/readable.js'(
    exports,
    module2
  ) {
    var Stream = require('stream')
    if (process.env.READABLE_STREAM === 'disable' && Stream) {
      module2.exports = Stream.Readable
      Object.assign(module2.exports, Stream)
      module2.exports.Stream = Stream
    } else {
      exports = module2.exports = require_stream_readable()
      exports.Stream = Stream || exports
      exports.Readable = exports
      exports.Writable = require_stream_writable()
      exports.Duplex = require_stream_duplex()
      exports.Transform = require_stream_transform()
      exports.PassThrough = require_stream_passthrough()
      exports.finished = require_end_of_stream()
      exports.pipeline = require_pipeline()
    }
  },
})

// node_modules/.pnpm/bl@5.0.0/node_modules/bl/BufferList.js
var require_BufferList = __commonJS({
  'node_modules/.pnpm/bl@5.0.0/node_modules/bl/BufferList.js'(
    exports,
    module2
  ) {
    'use strict'
    var { Buffer: Buffer2 } = require('buffer')
    var symbol = Symbol.for('BufferList')
    function BufferList(buf) {
      if (!(this instanceof BufferList)) {
        return new BufferList(buf)
      }
      BufferList._init.call(this, buf)
    }
    BufferList._init = function _init(buf) {
      Object.defineProperty(this, symbol, { value: true })
      this._bufs = []
      this.length = 0
      if (buf) {
        this.append(buf)
      }
    }
    BufferList.prototype._new = function _new(buf) {
      return new BufferList(buf)
    }
    BufferList.prototype._offset = function _offset(offset) {
      if (offset === 0) {
        return [0, 0]
      }
      let tot = 0
      for (let i = 0; i < this._bufs.length; i++) {
        const _t = tot + this._bufs[i].length
        if (offset < _t || i === this._bufs.length - 1) {
          return [i, offset - tot]
        }
        tot = _t
      }
    }
    BufferList.prototype._reverseOffset = function (blOffset) {
      const bufferId = blOffset[0]
      let offset = blOffset[1]
      for (let i = 0; i < bufferId; i++) {
        offset += this._bufs[i].length
      }
      return offset
    }
    BufferList.prototype.get = function get(index) {
      if (index > this.length || index < 0) {
        return void 0
      }
      const offset = this._offset(index)
      return this._bufs[offset[0]][offset[1]]
    }
    BufferList.prototype.slice = function slice(start, end) {
      if (typeof start === 'number' && start < 0) {
        start += this.length
      }
      if (typeof end === 'number' && end < 0) {
        end += this.length
      }
      return this.copy(null, 0, start, end)
    }
    BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
      if (typeof srcStart !== 'number' || srcStart < 0) {
        srcStart = 0
      }
      if (typeof srcEnd !== 'number' || srcEnd > this.length) {
        srcEnd = this.length
      }
      if (srcStart >= this.length) {
        return dst || Buffer2.alloc(0)
      }
      if (srcEnd <= 0) {
        return dst || Buffer2.alloc(0)
      }
      const copy2 = !!dst
      const off = this._offset(srcStart)
      const len = srcEnd - srcStart
      let bytes = len
      let bufoff = (copy2 && dstStart) || 0
      let start = off[1]
      if (srcStart === 0 && srcEnd === this.length) {
        if (!copy2) {
          return this._bufs.length === 1
            ? this._bufs[0]
            : Buffer2.concat(this._bufs, this.length)
        }
        for (let i = 0; i < this._bufs.length; i++) {
          this._bufs[i].copy(dst, bufoff)
          bufoff += this._bufs[i].length
        }
        return dst
      }
      if (bytes <= this._bufs[off[0]].length - start) {
        return copy2
          ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
          : this._bufs[off[0]].slice(start, start + bytes)
      }
      if (!copy2) {
        dst = Buffer2.allocUnsafe(len)
      }
      for (let i = off[0]; i < this._bufs.length; i++) {
        const l = this._bufs[i].length - start
        if (bytes > l) {
          this._bufs[i].copy(dst, bufoff, start)
          bufoff += l
        } else {
          this._bufs[i].copy(dst, bufoff, start, start + bytes)
          bufoff += l
          break
        }
        bytes -= l
        if (start) {
          start = 0
        }
      }
      if (dst.length > bufoff) return dst.slice(0, bufoff)
      return dst
    }
    BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
      start = start || 0
      end = typeof end !== 'number' ? this.length : end
      if (start < 0) {
        start += this.length
      }
      if (end < 0) {
        end += this.length
      }
      if (start === end) {
        return this._new()
      }
      const startOffset = this._offset(start)
      const endOffset = this._offset(end)
      const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1)
      if (endOffset[1] === 0) {
        buffers.pop()
      } else {
        buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(
          0,
          endOffset[1]
        )
      }
      if (startOffset[1] !== 0) {
        buffers[0] = buffers[0].slice(startOffset[1])
      }
      return this._new(buffers)
    }
    BufferList.prototype.toString = function toString(encoding, start, end) {
      return this.slice(start, end).toString(encoding)
    }
    BufferList.prototype.consume = function consume(bytes) {
      bytes = Math.trunc(bytes)
      if (Number.isNaN(bytes) || bytes <= 0) return this
      while (this._bufs.length) {
        if (bytes >= this._bufs[0].length) {
          bytes -= this._bufs[0].length
          this.length -= this._bufs[0].length
          this._bufs.shift()
        } else {
          this._bufs[0] = this._bufs[0].slice(bytes)
          this.length -= bytes
          break
        }
      }
      return this
    }
    BufferList.prototype.duplicate = function duplicate() {
      const copy = this._new()
      for (let i = 0; i < this._bufs.length; i++) {
        copy.append(this._bufs[i])
      }
      return copy
    }
    BufferList.prototype.append = function append(buf) {
      if (buf == null) {
        return this
      }
      if (buf.buffer) {
        this._appendBuffer(
          Buffer2.from(buf.buffer, buf.byteOffset, buf.byteLength)
        )
      } else if (Array.isArray(buf)) {
        for (let i = 0; i < buf.length; i++) {
          this.append(buf[i])
        }
      } else if (this._isBufferList(buf)) {
        for (let i = 0; i < buf._bufs.length; i++) {
          this.append(buf._bufs[i])
        }
      } else {
        if (typeof buf === 'number') {
          buf = buf.toString()
        }
        this._appendBuffer(Buffer2.from(buf))
      }
      return this
    }
    BufferList.prototype._appendBuffer = function appendBuffer(buf) {
      this._bufs.push(buf)
      this.length += buf.length
    }
    BufferList.prototype.indexOf = function (search, offset, encoding) {
      if (encoding === void 0 && typeof offset === 'string') {
        encoding = offset
        offset = void 0
      }
      if (typeof search === 'function' || Array.isArray(search)) {
        throw new TypeError(
          'The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'
        )
      } else if (typeof search === 'number') {
        search = Buffer2.from([search])
      } else if (typeof search === 'string') {
        search = Buffer2.from(search, encoding)
      } else if (this._isBufferList(search)) {
        search = search.slice()
      } else if (Array.isArray(search.buffer)) {
        search = Buffer2.from(
          search.buffer,
          search.byteOffset,
          search.byteLength
        )
      } else if (!Buffer2.isBuffer(search)) {
        search = Buffer2.from(search)
      }
      offset = Number(offset || 0)
      if (isNaN(offset)) {
        offset = 0
      }
      if (offset < 0) {
        offset = this.length + offset
      }
      if (offset < 0) {
        offset = 0
      }
      if (search.length === 0) {
        return offset > this.length ? this.length : offset
      }
      const blOffset = this._offset(offset)
      let blIndex = blOffset[0]
      let buffOffset = blOffset[1]
      for (; blIndex < this._bufs.length; blIndex++) {
        const buff = this._bufs[blIndex]
        while (buffOffset < buff.length) {
          const availableWindow = buff.length - buffOffset
          if (availableWindow >= search.length) {
            const nativeSearchResult = buff.indexOf(search, buffOffset)
            if (nativeSearchResult !== -1) {
              return this._reverseOffset([blIndex, nativeSearchResult])
            }
            buffOffset = buff.length - search.length + 1
          } else {
            const revOffset = this._reverseOffset([blIndex, buffOffset])
            if (this._match(revOffset, search)) {
              return revOffset
            }
            buffOffset++
          }
        }
        buffOffset = 0
      }
      return -1
    }
    BufferList.prototype._match = function (offset, search) {
      if (this.length - offset < search.length) {
        return false
      }
      for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
        if (this.get(offset + searchOffset) !== search[searchOffset]) {
          return false
        }
      }
      return true
    }
    ;(function () {
      const methods = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null,
      }
      for (const m in methods) {
        ;(function (m2) {
          if (methods[m2] === null) {
            BufferList.prototype[m2] = function (offset, byteLength) {
              return this.slice(offset, offset + byteLength)[m2](0, byteLength)
            }
          } else {
            BufferList.prototype[m2] = function (offset = 0) {
              return this.slice(offset, offset + methods[m2])[m2](0)
            }
          }
        })(m)
      }
    })()
    BufferList.prototype._isBufferList = function _isBufferList(b) {
      return b instanceof BufferList || BufferList.isBufferList(b)
    }
    BufferList.isBufferList = function isBufferList(b) {
      return b != null && b[symbol]
    }
    module2.exports = BufferList
  },
})

// node_modules/.pnpm/bl@5.0.0/node_modules/bl/bl.js
var require_bl = __commonJS({
  'node_modules/.pnpm/bl@5.0.0/node_modules/bl/bl.js'(exports, module2) {
    'use strict'
    var DuplexStream = require_readable().Duplex
    var inherits = require_inherits()
    var BufferList = require_BufferList()
    function BufferListStream2(callback) {
      if (!(this instanceof BufferListStream2)) {
        return new BufferListStream2(callback)
      }
      if (typeof callback === 'function') {
        this._callback = callback
        const piper = function piper2(err) {
          if (this._callback) {
            this._callback(err)
            this._callback = null
          }
        }.bind(this)
        this.on('pipe', function onPipe(src) {
          src.on('error', piper)
        })
        this.on('unpipe', function onUnpipe(src) {
          src.removeListener('error', piper)
        })
        callback = null
      }
      BufferList._init.call(this, callback)
      DuplexStream.call(this)
    }
    inherits(BufferListStream2, DuplexStream)
    Object.assign(BufferListStream2.prototype, BufferList.prototype)
    BufferListStream2.prototype._new = function _new(callback) {
      return new BufferListStream2(callback)
    }
    BufferListStream2.prototype._write = function _write(
      buf,
      encoding,
      callback
    ) {
      this._appendBuffer(buf)
      if (typeof callback === 'function') {
        callback()
      }
    }
    BufferListStream2.prototype._read = function _read(size) {
      if (!this.length) {
        return this.push(null)
      }
      size = Math.min(size, this.length)
      this.push(this.slice(0, size))
      this.consume(size)
    }
    BufferListStream2.prototype.end = function end(chunk) {
      DuplexStream.prototype.end.call(this, chunk)
      if (this._callback) {
        this._callback(null, this.slice())
        this._callback = null
      }
    }
    BufferListStream2.prototype._destroy = function _destroy(err, cb) {
      this._bufs.length = 0
      this.length = 0
      cb(err)
    }
    BufferListStream2.prototype._isBufferList = function _isBufferList(b) {
      return (
        b instanceof BufferListStream2 ||
        b instanceof BufferList ||
        BufferListStream2.isBufferList(b)
      )
    }
    BufferListStream2.isBufferList = BufferList.isBufferList
    module2.exports = BufferListStream2
    module2.exports.BufferListStream = BufferListStream2
    module2.exports.BufferList = BufferList
  },
})

// index.js
__export(exports, {
  default: () => ora,
  oraPromise: () => oraPromise,
})
var import_node_process3 = __toModule(require('node:process'))
var import_node_readline = __toModule(require('node:readline'))
var import_chalk2 = __toModule(require_source())

// node_modules/.pnpm/cli-cursor@4.0.0/node_modules/cli-cursor/index.js
var import_node_process2 = __toModule(require('node:process'))

// node_modules/.pnpm/restore-cursor@4.0.0/node_modules/restore-cursor/index.js
var import_node_process = __toModule(require('node:process'))
var import_onetime = __toModule(require_onetime())
var import_signal_exit = __toModule(require_signal_exit())
var restoreCursor = (0, import_onetime.default)(() => {
  ;(0, import_signal_exit.default)(
    () => {
      import_node_process.default.stderr.write('[?25h')
    },
    { alwaysLast: true }
  )
})
var restore_cursor_default = restoreCursor

// node_modules/.pnpm/cli-cursor@4.0.0/node_modules/cli-cursor/index.js
var isHidden = false
var cliCursor = {}
cliCursor.show = (writableStream = import_node_process2.default.stderr) => {
  if (!writableStream.isTTY) {
    return
  }
  isHidden = false
  writableStream.write('[?25h')
}
cliCursor.hide = (writableStream = import_node_process2.default.stderr) => {
  if (!writableStream.isTTY) {
    return
  }
  restore_cursor_default()
  isHidden = true
  writableStream.write('[?25l')
}
cliCursor.toggle = (force, writableStream) => {
  if (force !== void 0) {
    isHidden = force
  }
  if (isHidden) {
    cliCursor.show(writableStream)
  } else {
    cliCursor.hide(writableStream)
  }
}
var cli_cursor_default = cliCursor

// index.js
var import_cli_spinners = __toModule(require_cli_spinners())

// node_modules/.pnpm/log-symbols@5.0.0/node_modules/log-symbols/index.js
var import_chalk = __toModule(require_source())

// node_modules/.pnpm/is-unicode-supported@1.1.0/node_modules/is-unicode-supported/index.js
function isUnicodeSupported() {
  if (process.platform !== 'win32') {
    return process.env.TERM !== 'linux'
  }
  return (
    Boolean(process.env.CI) ||
    Boolean(process.env.WT_SESSION) ||
    process.env.ConEmuTask === '{cmd::Cmder}' ||
    process.env.TERM_PROGRAM === 'vscode' ||
    process.env.TERM === 'xterm-256color' ||
    process.env.TERM === 'alacritty'
  )
}

// node_modules/.pnpm/log-symbols@5.0.0/node_modules/log-symbols/index.js
var main = {
  info: import_chalk.default.blue('\u2139'),
  success: import_chalk.default.green('\u2714'),
  warning: import_chalk.default.yellow('\u26A0'),
  error: import_chalk.default.red('\u2716'),
}
var fallback = {
  info: import_chalk.default.blue('i'),
  success: import_chalk.default.green('\u221A'),
  warning: import_chalk.default.yellow('\u203C'),
  error: import_chalk.default.red('\xD7'),
}
var logSymbols = isUnicodeSupported() ? main : fallback
var log_symbols_default = logSymbols

// node_modules/.pnpm/ansi-regex@6.0.1/node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
  ].join('|')
  return new RegExp(pattern, onlyFirst ? void 0 : 'g')
}

// node_modules/.pnpm/strip-ansi@7.0.1/node_modules/strip-ansi/index.js
function stripAnsi(string) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``)
  }
  return string.replace(ansiRegex(), '')
}

// index.js
var import_wcwidth = __toModule(require_wcwidth())

// node_modules/.pnpm/is-interactive@2.0.0/node_modules/is-interactive/index.js
function isInteractive({ stream = process.stdout } = {}) {
  return Boolean(
    stream &&
      stream.isTTY &&
      process.env.TERM !== 'dumb' &&
      !('CI' in process.env)
  )
}

// index.js
var import_bl = __toModule(require_bl())
var TEXT = Symbol('text')
var PREFIX_TEXT = Symbol('prefixText')
var ASCII_ETX_CODE = 3
var StdinDiscarder = class {
  constructor() {
    this.requests = 0
    this.mutedStream = new import_bl.BufferListStream()
    this.mutedStream.pipe(import_node_process3.default.stdout)
    const self = this
    this.ourEmit = function (event, data, ...args) {
      const { stdin } = import_node_process3.default
      if (self.requests > 0 || stdin.emit === self.ourEmit) {
        if (event === 'keypress') {
          return
        }
        if (event === 'data' && data.includes(ASCII_ETX_CODE)) {
          import_node_process3.default.emit('SIGINT')
        }
        Reflect.apply(self.oldEmit, this, [event, data, ...args])
      } else {
        Reflect.apply(import_node_process3.default.stdin.emit, this, [
          event,
          data,
          ...args,
        ])
      }
    }
  }
  start() {
    this.requests++
    if (this.requests === 1) {
      this.realStart()
    }
  }
  stop() {
    if (this.requests <= 0) {
      throw new Error('`stop` called more times than `start`')
    }
    this.requests--
    if (this.requests === 0) {
      this.realStop()
    }
  }
  realStart() {
    if (import_node_process3.default.platform === 'win32') {
      return
    }
    this.rl = import_node_readline.default.createInterface({
      input: import_node_process3.default.stdin,
      output: this.mutedStream,
    })
    this.rl.on('SIGINT', () => {
      if (import_node_process3.default.listenerCount('SIGINT') === 0) {
        import_node_process3.default.emit('SIGINT')
      } else {
        this.rl.close()
        import_node_process3.default.kill(
          import_node_process3.default.pid,
          'SIGINT'
        )
      }
    })
  }
  realStop() {
    if (import_node_process3.default.platform === 'win32') {
      return
    }
    this.rl.close()
    this.rl = void 0
  }
}
var stdinDiscarder
var Ora = class {
  constructor(options) {
    if (!stdinDiscarder) {
      stdinDiscarder = new StdinDiscarder()
    }
    if (typeof options === 'string') {
      options = {
        text: options,
      }
    }
    this.options = {
      text: '',
      color: 'cyan',
      stream: import_node_process3.default.stderr,
      discardStdin: true,
      ...options,
    }
    this.spinner = this.options.spinner
    this.color = this.options.color
    this.hideCursor = this.options.hideCursor !== false
    this.interval = this.options.interval || this.spinner.interval || 100
    this.stream = this.options.stream
    this.id = void 0
    this.isEnabled =
      typeof this.options.isEnabled === 'boolean'
        ? this.options.isEnabled
        : isInteractive({ stream: this.stream })
    this.isSilent =
      typeof this.options.isSilent === 'boolean' ? this.options.isSilent : false
    this.text = this.options.text
    this.prefixText = this.options.prefixText
    this.linesToClear = 0
    this.indent = this.options.indent
    this.discardStdin = this.options.discardStdin
    this.isDiscardingStdin = false
  }
  get indent() {
    return this._indent
  }
  set indent(indent = 0) {
    if (!(indent >= 0 && Number.isInteger(indent))) {
      throw new Error('The `indent` option must be an integer from 0 and up')
    }
    this._indent = indent
    this.updateLineCount()
  }
  _updateInterval(interval) {
    if (interval !== void 0) {
      this.interval = interval
    }
  }
  get spinner() {
    return this._spinner
  }
  set spinner(spinner) {
    this.frameIndex = 0
    if (typeof spinner === 'object') {
      if (spinner.frames === void 0) {
        throw new Error('The given spinner must have a `frames` property')
      }
      this._spinner = spinner
    } else if (!isUnicodeSupported()) {
      this._spinner = import_cli_spinners.default.line
    } else if (spinner === void 0) {
      this._spinner = import_cli_spinners.default.dots
    } else if (spinner !== 'default' && import_cli_spinners.default[spinner]) {
      this._spinner = import_cli_spinners.default[spinner]
    } else {
      throw new Error(
        `There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`
      )
    }
    this._updateInterval(this._spinner.interval)
  }
  get text() {
    return this[TEXT]
  }
  set text(value) {
    this[TEXT] = value
    this.updateLineCount()
  }
  get prefixText() {
    return this[PREFIX_TEXT]
  }
  set prefixText(value) {
    this[PREFIX_TEXT] = value
    this.updateLineCount()
  }
  get isSpinning() {
    return this.id !== void 0
  }
  getFullPrefixText(prefixText = this[PREFIX_TEXT], postfix = ' ') {
    if (typeof prefixText === 'string') {
      return prefixText + postfix
    }
    if (typeof prefixText === 'function') {
      return prefixText() + postfix
    }
    return ''
  }
  updateLineCount() {
    const columns = this.stream.columns || 80
    const fullPrefixText = this.getFullPrefixText(this.prefixText, '-')
    this.lineCount = 0
    for (const line of stripAnsi(
      ' '.repeat(this.indent) + fullPrefixText + '--' + this[TEXT]
    ).split('\n')) {
      this.lineCount += Math.max(
        1,
        Math.ceil((0, import_wcwidth.default)(line) / columns)
      )
    }
  }
  get isEnabled() {
    return this._isEnabled && !this.isSilent
  }
  set isEnabled(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError('The `isEnabled` option must be a boolean')
    }
    this._isEnabled = value
  }
  get isSilent() {
    return this._isSilent
  }
  set isSilent(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError('The `isSilent` option must be a boolean')
    }
    this._isSilent = value
  }
  frame() {
    const { frames } = this.spinner
    let frame = frames[this.frameIndex]
    if (this.color) {
      frame = import_chalk2.default[this.color](frame)
    }
    this.frameIndex = ++this.frameIndex % frames.length
    const fullPrefixText =
      typeof this.prefixText === 'string' && this.prefixText !== ''
        ? this.prefixText + ' '
        : ''
    const fullText = typeof this.text === 'string' ? ' ' + this.text : ''
    return fullPrefixText + frame + fullText
  }
  clear() {
    if (!this.isEnabled || !this.stream.isTTY) {
      return this
    }
    this.stream.cursorTo(0)
    for (let index = 0; index < this.linesToClear; index++) {
      if (index > 0) {
        this.stream.moveCursor(0, -1)
      }
      this.stream.clearLine(1)
    }
    if (this.indent || this.lastIndent !== this.indent) {
      this.stream.cursorTo(this.indent)
    }
    this.lastIndent = this.indent
    this.linesToClear = 0
    return this
  }
  render() {
    if (this.isSilent) {
      return this
    }
    this.clear()
    this.stream.write(this.frame())
    this.linesToClear = this.lineCount
    return this
  }
  start(text) {
    if (text) {
      this.text = text
    }
    if (this.isSilent) {
      return this
    }
    if (!this.isEnabled) {
      if (this.text) {
        this.stream.write(`- ${this.text}
`)
      }
      return this
    }
    if (this.isSpinning) {
      return this
    }
    if (this.hideCursor) {
      cli_cursor_default.hide(this.stream)
    }
    if (this.discardStdin && import_node_process3.default.stdin.isTTY) {
      this.isDiscardingStdin = true
      stdinDiscarder.start()
    }
    this.render()
    this.id = setInterval(this.render.bind(this), this.interval)
    return this
  }
  stop() {
    if (!this.isEnabled) {
      return this
    }
    clearInterval(this.id)
    this.id = void 0
    this.frameIndex = 0
    this.clear()
    if (this.hideCursor) {
      cli_cursor_default.show(this.stream)
    }
    if (
      this.discardStdin &&
      import_node_process3.default.stdin.isTTY &&
      this.isDiscardingStdin
    ) {
      stdinDiscarder.stop()
      this.isDiscardingStdin = false
    }
    return this
  }
  succeed(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.success, text })
  }
  fail(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.error, text })
  }
  warn(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.warning, text })
  }
  info(text) {
    return this.stopAndPersist({ symbol: log_symbols_default.info, text })
  }
  stopAndPersist(options = {}) {
    if (this.isSilent) {
      return this
    }
    const prefixText = options.prefixText || this.prefixText
    const text = options.text || this.text
    const fullText = typeof text === 'string' ? ' ' + text : ''
    this.stop()
    this.stream.write(`${this.getFullPrefixText(prefixText, ' ')}${
      options.symbol || ' '
    }${fullText}
`)
    return this
  }
}
function ora(options) {
  return new Ora(options)
}
async function oraPromise(action, options) {
  const actionIsFunction = typeof action === 'function'
  const actionIsPromise = typeof action.then === 'function'
  if (!actionIsFunction && !actionIsPromise) {
    throw new TypeError('Parameter `action` must be a Function or a Promise')
  }
  const { successText, failText } =
    typeof options === 'object'
      ? options
      : { successText: void 0, failText: void 0 }
  const spinner = ora(options).start()
  try {
    const promise = actionIsFunction ? action(spinner) : action
    const result = await promise
    spinner.succeed(
      successText === void 0
        ? void 0
        : typeof successText === 'string'
        ? successText
        : successText(result)
    )
    return result
  } catch (error) {
    spinner.fail(
      failText === void 0
        ? void 0
        : typeof failText === 'string'
        ? failText
        : failText(error)
    )
    throw error
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    oraPromise,
  })
