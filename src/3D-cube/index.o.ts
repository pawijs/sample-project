export const branch = `{
  "type": "pawi",
  "id": "1",
  "version": "NVEpBW",
  "entry": "main",
  "blocks": {
    "CPw5DI": {
      "id": "CPw5DI",
      "children": [],
      "name": "nowX",
      "content": {
        "name": "./nowX",
        "file": "./nowX.o.js"
      }
    },
    "_BWAKQ": {
      "id": "_BWAKQ",
      "children": [],
      "name": "nowY",
      "content": {
        "name": "./nowY",
        "file": "./nowY.o.js"
      }
    },
    "B-kIUD": {
      "id": "B-kIUD",
      "children": [],
      "name": "nowZ",
      "content": {
        "name": "./nowZ",
        "file": "./nowZ.o.js"
      }
    },
    "FVBmYT": {
      "id": "FVBmYT",
      "children": [
        "CPw5DI",
        "_BWAKQ",
        "B-kIUD"
      ],
      "name": "three.Rotation",
      "content": {
        "name": "three.Rotation",
        "file": "@pawi/three/dist/three.Rotation.o.js"
      }
    },
    "ptPTfn": {
      "id": "ptPTfn",
      "children": [
        "FVBmYT"
      ],
      "name": "now",
      "content": {
        "file": "./now.o.js"
      }
    },
    "FbHXKg": {
      "id": "FbHXKg",
      "children": [],
      "name": "sliderX",
      "content": {
        "name": "./sliderX",
        "file": "./sliderX.o.js"
      }
    },
    "V6Dfgl": {
      "id": "V6Dfgl",
      "children": [],
      "name": "sliderY",
      "content": {
        "name": "./sliderY",
        "file": "./sliderY.o.js"
      }
    },
    "Y-9L_W": {
      "id": "Y-9L_W",
      "children": [],
      "name": "sliderZ",
      "content": {
        "name": "./sliderZ",
        "file": "./sliderZ.o.js"
      }
    },
    "Wh7Z2T": {
      "id": "Wh7Z2T",
      "children": [
        "FbHXKg",
        "V6Dfgl",
        "Y-9L_W"
      ],
      "name": "three.Rotation",
      "content": {
        "name": "three.Rotation",
        "file": "@pawi/three/dist/three.Rotation.o.js"
      }
    },
    "hh7RSZ": {
      "id": "hh7RSZ",
      "children": [
        "Wh7Z2T"
      ],
      "name": "sliders",
      "content": {
        "file": "./sliders.o.js"
      }
    },
    "rdkYgT": {
      "id": "rdkYgT",
      "children": [
        "ptPTfn",
        "hh7RSZ"
      ],
      "name": "route",
      "content": {
        "name": "./route",
        "file": "./route.o.js"
      }
    },
    "2LMhtn": {
      "id": "2LMhtn",
      "children": [
        "rdkYgT"
      ],
      "name": "three.Mesh",
      "content": {
        "name": "three.Mesh",
        "file": "@pawi/three/dist/three.Mesh.o.js"
      }
    },
    "0HBeXL": {
      "id": "0HBeXL",
      "children": [
        "2LMhtn",
        "7RjjfO"
      ],
      "name": "three.Scene",
      "content": {
        "name": "three.Scene",
        "file": "@pawi/three/dist/three.Scene.o.js"
      }
    },
    "x4L97R": {
      "id": "x4L97R",
      "children": [
        "0HBeXL"
      ],
      "name": "three.WebGLRenderer",
      "content": {
        "name": "three.WebGLRenderer",
        "file": "@pawi/three/dist/three.WebGLRenderer.o.js"
      }
    },
    "MyA8Qk": {
      "id": "MyA8Qk",
      "children": [
        "x4L97R"
      ],
      "name": "anim.Loop",
      "content": {
        "name": "anim.Loop",
        "file": "@pawi/base/dist/anim.Loop.o.js"
      }
    },
    "main": {
      "id": "main",
      "name": "main",
      "content": {
        "file": "./main.js"
      },
      "children": [
        "MyA8Qk"
      ]
    },
    "7RjjfO": {
      "id": "7RjjfO",
      "children": [],
      "name": "three.Lights",
      "content": {
        "name": "three.Lights",
        "file": "@pawi/three/dist/three.Lights.o.js"
      }
    }
  }
}`
