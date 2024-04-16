var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3808166350173483,
          "pitch": -0.04923346360395087,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-2",
      "name": "View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.16204189975451655,
        "pitch": 0.009369988019356512,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.299045767446831,
          "pitch": -0.00599508593248288,
          "rotation": 0,
          "target": "3-view-4"
        },
        {
          "yaw": 0.7198060469960694,
          "pitch": -0.07359581815628502,
          "rotation": 0,
          "target": "2-view-3"
        },
        {
          "yaw": -2.170307399756293,
          "pitch": -0.07102063476416909,
          "rotation": 0,
          "target": "0-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-3",
      "name": "View 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3567707643149483,
          "pitch": -0.007286548460555764,
          "rotation": 0,
          "target": "1-view-2"
        },
        {
          "yaw": 2.445619790682242,
          "pitch": 0.014184565663496684,
          "rotation": 0,
          "target": "4-view-5"
        },
        {
          "yaw": -2.9779509227921253,
          "pitch": 0.00872420571900534,
          "rotation": 0,
          "target": "5-view-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-view-4",
      "name": "View 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1011217416993375,
          "pitch": 0.06950827476177324,
          "rotation": 0,
          "target": "1-view-2"
        },
        {
          "yaw": 0.15119077646654588,
          "pitch": -0.0008875801691079488,
          "rotation": 0,
          "target": "4-view-5"
        },
        {
          "yaw": -0.551717877959133,
          "pitch": 0.00034277409477034837,
          "rotation": 0,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-view-5",
      "name": "View 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8585821358744781,
          "pitch": 0.007240985831622027,
          "rotation": 0,
          "target": "6-view-7"
        },
        {
          "yaw": 2.061743706010522,
          "pitch": 0.07746079932445404,
          "rotation": 0,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-view-6",
      "name": "View 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5208583253785228,
          "pitch": 0.0049804559514345925,
          "rotation": 0,
          "target": "2-view-3"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-view-8"
        },
        {
          "yaw": 1.5757868686246486,
          "pitch": -0.0075960728492106,
          "rotation": 0,
          "target": "6-view-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-view-7",
      "name": "View 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1306243493724999,
          "pitch": -0.01936206039677657,
          "rotation": 0,
          "target": "5-view-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-view-8",
      "name": "View 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1109049191395766,
          "pitch": 0.03242774088024092,
          "rotation": 0,
          "target": "4-view-5"
        },
        {
          "yaw": 1.204491738212706,
          "pitch": -0.011693728465763442,
          "rotation": 0,
          "target": "5-view-6"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360 CGIs",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
