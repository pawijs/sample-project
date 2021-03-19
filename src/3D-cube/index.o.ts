export const branch = `{
  "type": "pawi",
  "id": "1",
  "version": "Wr2YNW",
  "entry": "main",
  "blocks": {
    "YVECfV": {
      "id": "YVECfV",
      "children": [],
      "name": "nowX",
      "content": {
        "file": "./nowX.o.js"
      }
    },
    "_BWAKQ": {
      "id": "_BWAKQ",
      "children": [],
      "name": "nowY",
      "content": {
        "file": "./nowY.o.js"
      }
    },
    "B-kIUD": {
      "id": "B-kIUD",
      "children": [],
      "name": "nowZ",
      "content": {
        "file": "./nowZ.o.js"
      }
    },
    "FVBmYT": {
      "id": "FVBmYT",
      "children": [
        "YVECfV",
        "_BWAKQ",
        "B-kIUD"
      ],
      "name": "three.Rotation",
      "content": {
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
        "file": "./sliderX.o.js"
      }
    },
    "V6Dfgl": {
      "id": "V6Dfgl",
      "children": [],
      "name": "sliderY",
      "content": {
        "file": "./sliderY.o.js"
      }
    },
    "Y-9L_W": {
      "id": "Y-9L_W",
      "children": [],
      "name": "sliderZ",
      "content": {
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
        "file": "@pawi/three/dist/three.Mesh.o.js"
      },
      "closed": true
    },
    "0HBeXL": {
      "id": "0HBeXL",
      "children": [
        "2LMhtn",
        "veiAPE"
      ],
      "name": "three.Scene",
      "content": {
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
        "file": "@pawi/three/dist/three.WebGLRenderer.o.js"
      },
      "closed": false
    },
    "MyA8Qk": {
      "id": "MyA8Qk",
      "children": [
        "x4L97R"
      ],
      "name": "anim.Loop",
      "content": {
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
    "veiAPE": {
      "id": "veiAPE",
      "children": [],
      "name": "three.Lights",
      "content": {
        "file": "@pawi/three/dist/three.Lights.o.js"
      }
    }
  }
}`
