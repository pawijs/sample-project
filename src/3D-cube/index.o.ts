export const branch = `{
  "type": "pawi",
  "id": "1",
  "version": "KybTjm",
  "entry": "main",
  "blocks": {
    "nowX": {
      "id": "nowX",
      "name": "now.x",
      "children": [],
      "content": {
        "file": "./nowX.js"
      }
    },
    "nowY": {
      "id": "nowY",
      "name": "now.y",
      "children": [],
      "content": {
        "file": "./nowY.js"
      }
    },
    "nowZ": {
      "id": "nowZ",
      "name": "now.z",
      "children": [],
      "content": {
        "file": "./nowZ.js"
      }
    },
    "now": {
      "id": "now",
      "name": "now",
      "content": {
        "file": "@pawi/three/dist/three.Rotation.o.js"
      },
      "children": [
        "nowX",
        "nowY",
        "nowZ"
      ]
    },
    "sliderX": {
      "id": "sliderX",
      "name": "slider.x",
      "children": [],
      "content": {
        "file": "./sliderX.js"
      }
    },
    "sliderY": {
      "id": "sliderY",
      "name": "slider.y",
      "children": [],
      "content": {
        "file": "./sliderY.js"
      }
    },
    "sliderZ": {
      "id": "sliderZ",
      "name": "slider.z",
      "children": [],
      "content": {
        "file": "./sliderZ.js"
      }
    },
    "sliders": {
      "id": "sliders",
      "name": "sliders",
      "content": {
        "file": "@pawi/three/dist/three.Rotation.o.js"
      },
      "children": [
        "sliderX",
        "sliderY",
        "sliderZ"
      ]
    },
    "route": {
      "id": "route",
      "name": "route",
      "content": {
        "file": "./route.js"
      },
      "children": [
        "now",
        "sliders"
      ]
    },
    "mesh": {
      "id": "mesh",
      "name": "three.Mesh",
      "content": {
        "file": "@pawi/three/dist/three.Mesh.o.js"
      },
      "children": [
        "route"
      ]
    },
    "scene": {
      "id": "scene",
      "name": "three.Scene",
      "content": {
        "file": "@pawi/three/dist/three.Scene.o.js"
      },
      "children": [
        "mesh",
        "MgAjCg"
      ]
    },
    "renderer": {
      "id": "renderer",
      "name": "three.Renderer",
      "content": {
        "file": "@pawi/three/dist/three.WebGLRenderer.o.js"
      },
      "children": [
        "scene"
      ]
    },
    "anim": {
      "id": "anim",
      "name": "anim.Loop",
      "content": {
        "file": "@pawi/base/dist/anim.Loop.o.js"
      },
      "children": [
        "renderer"
      ]
    },
    "main": {
      "id": "main",
      "name": "main",
      "content": {
        "file": "./main.js"
      },
      "children": [
        "anim"
      ]
    },
    "MgAjCg": {
      "id": "MgAjCg",
      "children": [],
      "name": "three.Lights",
      "content": {
        "file": "@pawi/three/dist/three.Lights.o.js"
      }
    }
  }
}`
