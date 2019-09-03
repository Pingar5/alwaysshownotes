SceneControls.prototype._alwaysshownotes_original_configure = SceneControls.prototype.configure;
SceneControls.prototype.configure = function() {
  const controls = {},
    isGM = game.user.isGM,
    isTrusted = game.user.isTrusted;

  // Token Controls
  controls["token"] = {
    name: "CONTROLS.GroupBasic",
    layer: "TokenLayer",
    icon: "fas fa-user-alt",
    tools: {
      select: {
        name: "CONTROLS.BasicSelect",
        icon: "fas fa-expand"
      },
      ruler: {
        name: "CONTROLS.BasicMeasure",
        icon: "fas fa-ruler"
      }
    },
    activeTool: "select"
  };

  // Measurement Layer Tools
  controls["measure"] = {
    name: "CONTROLS.GroupMeasure",
    layer: "TemplateLayer",
    icon: "fas fa-ruler-combined",
    visible: isTrusted,
    tools: {
      circle: {
        name: "CONTROLS.MeasureCircle",
        icon: "far fa-circle"
      },
      cone: {
        name: "CONTROLS.MeasureCone",
        icon: "fas fa-angle-left"
      },
      rect: {
        name: "CONTROLS.MeasureRect",
        icon: "far fa-square"
      },
      ray: {
        name: "CONTROLS.MeasureRay",
        icon: "fas fa-arrows-alt-v"
      },
      clear: {
        name: "CONTROLS.MeasureClear",
        icon: "fas fa-trash",
        onClick: () => canvas.templates.deleteAll(),
        button: true
      }
    },
    activeTool: "circle"
  };

  // Tiles Layer
  controls['tiles'] = {
    name: "CONTROLS.GroupTile",
    layer: "TilesLayer",
    icon: "fas fa-cubes",
    visible: isGM,
    tools: {
      select: {
        name: "CONTROLS.TileSelect",
        icon: "fas fa-expand"
      },
      tile: {
        name: "CONTROLS.TilePlace",
        icon: "fas fa-cube"
      }
    },
    activeTool: "select"
  };

  // Drawing Tools
  controls['drawings'] = {
    name: "CONTROLS.GroupDrawing",
    layer: "DrawingsLayer",
    icon: "fas fa-pencil-alt",
    visible: isTrusted,
    tools: {
      select: {
        name: "CONTROLS.DrawingSelect",
        icon: "fas fa-expand"
      },
      rect: {
        name: "CONTROLS.DrawingRect",
        icon: "fas fa-square"
      },
      ellipse: {
        name: "CONTROLS.DrawingEllipse",
        icon: "fas fa-circle"
      },
      polygon: {
        name: "CONTROLS.DrawingPoly",
        icon: "fas fa-draw-polygon"
      },
      freehand: {
        name: "CONTROLS.DrawingFree",
        icon: "fas fa-signature"
      },
      configure: {
        name: "CONTROLS.DrawingConfig",
        icon: "fas fa-cog",
        onClick: () => canvas.drawings.configureDefault(),
        button: true
      },
      clear: {
        name: "CONTROLS.DrawingClear",
        icon: "fas fa-trash",
        visible: isGM,
        onClick: () => canvas.drawings.deleteAll(),
        button: true
      }
    },
    activeTool: "select"
  };

  // Walls Layer Tools
  controls['walls'] = {
    name: "CONTROLS.GroupWall",
    layer: "WallsLayer",
    icon: "fas fa-university",
    visible: isGM,
    tools: {
      walls: {
        name: "CONTROLS.WallDraw",
        icon: "fas fa-bars"
      },
      invisible: {
        name: "CONTROLS.WallInvisible",
        icon: "fas fa-eye-slash"
      },
      terrain: {
        name: "CONTROLS.WallTerrain",
        icon: "fas fa-mountain"
      },
      ethereal: {
        name: "CONTROLS.WallEthereal",
        icon: "fas fa-mask"
      },
      doors: {
        name: "CONTROLS.WallDoors",
        icon: "fas fa-door-open"
      },
      secret: {
        name: "CONTROLS.WallSecret",
        icon: "fas fa-user-secret"
      },
      clone: {
        name: "CONTROLS.WallClone",
        icon: "far fa-clone"
      },
      clear: {
        name: "CONTROLS.WallClear",
        icon: "fas fa-trash",
        onClick: () => canvas.walls.deleteAll(),
        button: true
      }
    },
    activeTool: "walls"
  };

  // Lighting Layer Tools
  controls['lighting'] = {
    name: "CONTROLS.GroupLighting",
    layer: "LightingLayer",
    icon: "far fa-lightbulb",
    visible: isGM,
    tools: {
      light: {
        name: "CONTROLS.LightDraw",
        icon: "fas fa-lightbulb"
      },
      clear: {
        name: "CONTROLS.LightClear",
        icon: "fas fa-trash",
        onClick: () => canvas.lighting.deleteAll(),
        button: true
      },
      reset: {
        name: "CONTROLS.LightReset",
        icon: "fas fa-cloud",
        onClick: () => {
          new Dialog({
            title: game.i18n.localize("CONTROLS.FOWResetTitle"),
            content: `<p>${game.i18n.localize("CONTROLS.FOWResetDesc")}</p>`,
            buttons: {
              yes: {
                icon: '<i class="fas fa-check"></i>',
                label: "Yes",
                callback: () => canvas.sight.resetFog()
              },
              no: {
                icon: '<i class="fas fa-times"></i>',
                label: "No"
              }
            }
          }).render(true);
        },
        button: true
      }
    },
    activeTool: "light"
  };

  // Sounds Layer Tools
  controls['sounds'] = {
    name: "CONTROLS.GroupSound",
    layer: "SoundsLayer",
    icon: "fas fa-music",
    visible: isGM,
    tools: {
      sound: {
        name: "CONTROLS.SoundDraw",
        icon: "fas fa-volume-up"
      },
      clear: {
        name: "CONTROLS.SoundClear",
        icon: "fas fa-trash",
        onClick: () => canvas.sounds.deleteAll(),
        button: true
      }
    },
    activeTool: "sound"
  };

  // Notes Layer Tools
  controls['notes'] = {
    name: "CONTROLS.GroupNotes",
    layer: "NotesLayer",
    icon: "fas fa-bookmark",
    tools: {
      select: {
        name: "CONTROLS.NoteSelect",
        icon: "fas fa-expand"
      },
      toggle: {
        name: "CONTROLS.NoteToggle",
        icon: "fas fa-map-pin",
        toggle: true,
        active: true
      },
      clear: {
        name: "CONTROLS.NoteClear",
        icon: "fas fa-trash",
        visible: isGM,
        onClick: () => canvas.notes.deleteAll(),
        button: true
      }
    },
    activeTool: 'select'
  };
  return controls;
}
