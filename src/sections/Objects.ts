import { Objects as EightBittrObjects } from "eightbittr";
import { ClassInheritance, ClassProperties } from "objectmakr";

import { ChooseYourFramework } from "../ChooseYourFramework";

/**
 * Raw ObjectMakr factory settings.
 */
export class Objects<Game extends ChooseYourFramework> extends EightBittrObjects<Game> {
    /**
     * How properties can be mapped from an Array to indices.
     */
    public readonly indexMap = ["width", "height"];

    /**
     * A tree representing class inheritances, where keys are class names.
     */
    public readonly inheritance: ClassInheritance = {
        Quadrant: {},
        Map: {},
        Area: {},
        Location: {},
        Actor: {
            Character: {
                Lady: {},
                Oak: {},
                Player: {},
                Pokeball: {
                    AngularLibrary: {},
                    PreactLibrary: {},
                    ReactLibrary: {},
                    SolidLibrary: {},
                    SvelteLibrary: {},
                    VueLibrary: {},
                },
                Scientist: {},
            },
            Solid: {
                Book: {},
                Bookshelf: {},
                CollisionDetector: {
                    CutsceneTriggerer: {},
                    MenuTriggerer: {},
                },
                InvisibleWall: {},
                LabComputer: {},
                Stump: {},
                Table: {
                    Table2x2: {},
                    Table2x3: {},
                    Table3x1: {},
                },
                WallScroll: {},
            },
            Scenery: {
                Doormat: {},
            },
            Terrain: {
                TerrainSmall: {
                    TerrainSmallRepeating: {
                        WallIndoorLightWithDarkBottom: {},
                    },
                },
                FloorLinedHorizontal: {},
            },
            Text: {
                Exclamation: {},
                HalfArrowHorizontal: {},
                Square: {
                    BlackSquare: {},
                    DarkGraySquare: {},
                    LightGraySquare: {},
                    WhiteSquare: {},
                },
                CharacterUpperCase: {
                    CharA: {},
                    CharB: {},
                    CharC: {},
                    CharD: {},
                    CharE: {},
                    CharF: {},
                    CharG: {},
                    CharH: {},
                    CharI: {},
                    CharJ: {},
                    CharK: {},
                    CharL: {},
                    CharM: {},
                    CharN: {},
                    CharO: {},
                    CharP: {},
                    CharQ: {},
                    CharR: {},
                    CharS: {},
                    CharT: {},
                    CharU: {},
                    CharV: {},
                    CharW: {},
                    CharX: {},
                    CharY: {},
                    CharZ: {},
                },
                CharacterLowerCase: {
                    Chara: {},
                    Charb: {},
                    Charc: {},
                    Chard: {},
                    Chare: {},
                    Charf: {},
                    Charh: {},
                    Chari: {},
                    Chark: {},
                    Charl: {},
                    Charm: {},
                    Charn: {},
                    Charo: {},
                    Charr: {},
                    Chars: {},
                    Chart: {},
                    Charu: {},
                    Charv: {},
                    Charw: {},
                    Charx: {},
                    Charz: {},
                    CharacterDropped: {
                        Charg: {},
                        Charj: {},
                        Charp: {},
                        Charq: {},
                        Chary: {},
                    },
                },
                CharacterShadow: {
                    Char0Shadow: {},
                    Char1Shadow: {},
                    Char2Shadow: {},
                    Char3Shadow: {},
                    Char4Shadow: {},
                    Char5Shadow: {},
                    Char6Shadow: {},
                    Char7Shadow: {},
                    Char8Shadow: {},
                    Char9Shadow: {},
                },
                Number: {
                    Char0: {},
                    Char1: {},
                    Char2: {},
                    Char3: {},
                    Char4: {},
                    Char5: {},
                    Char6: {},
                    Char7: {},
                    Char8: {},
                    Char9: {},
                },
                Symbol: {
                    CharSpace: {},
                    CharTimes: {},
                    CharLeftParenthesis: {},
                    CharRightParenthesis: {},
                    CharColon: {},
                    CharSemicolon: {},
                    CharLeftSquareBracket: {},
                    CharRightSquareBracket: {},
                    CharPoke: {},
                    CharMon: {},
                    CharNo: {},
                    CharID: {},
                    CharHyphen: {},
                    CharMDash: {},
                    CharUnderscore: {},
                    CharQuestionMark: {},
                    CharExclamationMark: {},
                    CharMaleSymbol: {},
                    CharFemaleSymbol: {},
                    CharSlash: {},
                    CharPeriod: {},
                    CharComma: {},
                    CharED: {},
                    CharApostrophe: {},
                    CharFeet: {},
                    CharInches: {},
                    ChareFancy: {},
                    CharBall: {},
                    CharBallEmpty: {},
                    CharBallFaint: {},
                    CharBallStatus: {},
                    CharCircle: {},
                    CharHP: {},
                    CharPP: {},
                    CharTo: {},
                    CharLevel: {},
                    Char$: {},
                },
                CharArrow: {
                    CharArrowUp: {},
                    CharArrowRight: {},
                    CharArrowDown: {},
                    CharArrowLeft: {},
                },
                HalfArrow: {
                    HalfArrowLeft: {},
                    HalfArrowRight: {},
                },
                Line: {
                    LineDecoratorHorizontal: {
                        LineDecoratorHorizontalLeft: {},
                        LineDecoratorHorizontalRight: {},
                    },
                    LineDecoratorVertical: {},
                    LineSeparatorHorizontal: {},
                },
            },
            Menu: {},
        },
    };

    /**
     * Properties for each class.
     */
    public readonly properties: ClassProperties = {
        Quadrant: {
            tolx: 0,
            toly: 0,
        },
        Map: {
            initialized: false,
        },
        Area: {
            background: "black",
            onMake: this.game.maps.areaProcess,
            attributes: {
                invisibleWallBorders: {
                    afters: [
                        { actor: "InvisibleWall", noBoundaryStretch: true },
                        { actor: "InvisibleWall", noBoundaryStretch: true },
                        { actor: "InvisibleWall", noBoundaryStretch: true },
                        { actor: "InvisibleWall", noBoundaryStretch: true },
                    ],
                },
            },
        },
        Location: {
            entry: "Normal",
        },
        Actor: {
            // Sizing
            width: 32,
            height: 32,
            // Placement
            alive: true,
            placed: false,
            maxquads: 16,
            // Sprites
            sprite: "",
            spriteType: "neither",
            scale: 1,
            offsetX: 0,
            offsetY: 0,
            // Movements
            movement: undefined,
            // Collisions
            tolTop: 0,
            tolRight: 0,
            tolBottom: 0,
            tolLeft: 0,
            // Triggered Functions
            onMake: this.game.actors.process.bind(this.game.actors),
        },
        Character: {
            groupType: "Character",
            speed: 2,
            walking: false,
            shouldWalk: false,
            switchDirectionOnDialog: true,
            direction: 2,
            offsetY: -8,
            roamingDirections: [0, 1, 2, 3],
            onActorAdded: this.game.actions.spawnCharacter,
            activate: this.game.collisions.detectors.collideCharacterDialog,
        },
        Buzzer: {
            width: 14,
            height: 12,
            nocollide: true,
        },
        CoolTrainerM: {
            attributes: {
                sitting: {},
            },
        },
        Elder: {
            attributes: {
                resting: {},
            },
        },
        Player: {
            id: "player",
            player: true,
            canKeyWalking: true,
            direction: 2,
            getKeys: () => ({
                0: false,
                1: false,
                2: false,
                3: false,
                a: false,
                b: false,
            }),
        },
        Pokeball: {
            action: "item",
            activate: this.game.actions.activatePokeball,
            borderPrimary: true,
            width: 64,
            height: 64,
        },
        Solid: {
            repeat: true,
            groupType: "Solid",
            activate: this.game.collisions.detectors.collideCharacterDialog,
        },
        BedSingle: [32, 64],
        Bookshelf: {
            width: 32,
            height: 64,
            dialogDirections: true,
            dialog: ["", "", "Crammed full of %%%%%%%POKEMON%%%%%%% books!", ""],
        },
        BuildingBase: [16, 16],
        BuildingTopBase: {
            height: 64,
            spriteHeight: 16,
        },
        BuildingMiddleBase: {
            height: 32,
            spriteHeight: 16,
        },
        BuildingBottom: {
            height: 16,
        },
        Cabinet: [32, 64],
        CollisionDetector: {
            collide: this.game.collisions.detectors.collideCollisionDetector,
            active: false,
            hidden: true,
        },
        CutsceneTriggerer: {
            activate: this.game.actions.activateCutsceneTriggerer,
            requireOverlap: true,
        },
        MenuTriggerer: {
            activate: this.game.actions.activateMenuTriggerer,
        },
        Computer: {
            width: 32,
            height: 48,
            tolBottom: 16,
        },
        ComputerDesk: [32, 64],
        ConsoleController: [32, 20],
        DialogResponder: {
            hidden: true,
        },
        CutsceneResponder: {
            activate: this.game.actions.activateCutsceneResponder,
        },
        FenceVertical: [16, 32],
        FloorDiamondsDark: {
            width: 16,
            height: 32,
            spriteWidth: 32,
            spriteHeight: 32,
            nocollide: true,
        },
        InvisibleWall: {
            hidden: true,
        },
        LabComputer: [64, 32],
        Label: {
            position: "end",
        },
        PlantLarge: [64, 64],
        PottedPalmTree: [32, 64],
        Sign: {
            attributes: {
                forest: {},
            },
        },
        SquareWallTop: {
            spriteHeight: 2,
        },
        SquareWallFront: {
            spriteHeight: 6,
        },
        Table: {
            tolBottom: 16,
        },
        Table1x2: [32, 64],
        Table2x2: [64, 64],
        Table2x3: [64, 64],
        Table3x1: [96, 48],
        Tree: {},
        Door: {
            width: 32,
            height: 32,
            requireDirection: 0,
            attributes: {
                indoor: {},
            },
        },
        FloorLinedHorizontal: {
            spriteWidth: 2,
            spriteHeight: 8,
        },
        Scenery: {
            groupType: "Scenery",
            repeat: true,
        },
        Doormat: {
            spriteWidth: 2,
            spriteHeight: 32,
        },
        DoormatDotted: {
            spriteWidth: 14,
            spriteHeight: 30,
        },
        DoormatDashed: {
            spriteWidth: 16,
            spriteHeight: 32,
        },
        PlayerPortrait: [52, 92],
        PlayerSilhouetteSmall: [28, 46],
        PlayerSilhouetteLarge: [44, 80],
        Terrain: {
            groupType: "Terrain",
            repeat: true,
        },
        TerrainSmall: { height: 8, width: 8 },
        TerrainSmallRepeating: {
            width: 32,
            height: 32,
            spriteWidth: 8,
            spriteHeight: 8,
        },
        WallIndoorLightWithDarkBottom: {
            spriteWidth: 2,
            spriteHeight: 32,
        },
        WallIndoorFancyWithDarkBottom: [16, 32],
        WallIndoorHorizontalBandsDark: {
            width: 32,
            height: 32,
            spriteWidth: 2,
            spriteHeight: 8,
        },
        Text: {
            groupType: "Text",
            width: 16,
            height: 16,
            paddingX: 0,
            paddingY: 32,
            noshiftx: true,
            noshifty: true,
        },
        Exclamation: {
            width: 28,
            height: 28,
            offsetY: -8,
        },
        HalfArrowHorizontal: [16, 8],
        Square: {
            width: 4,
            height: 4,
            repeat: true,
        },
        CharacterDropped: {
            offsetY: 3,
        },
        CharacterShadow: [14, 14],
        CharMDash: {
            attributes: {
                blinking: {
                    onActorAdded: (): void => console.log("HA"),
                },
            },
        },
        CharPoke: {
            offsetx: 2,
        },
        CharMon: {
            offsetx: 2,
        },
        CharNo: {
            width: 16,
            height: 12,
            offsetx: 2,
        },
        CharID: {
            width: 16,
            height: 12,
            offsetx: 2,
        },
        CharSlash: {
            offsetx: 2,
        },
        CharPeriod: {
            offsetx: 2,
        },
        CharComma: {
            offsetx: 2,
        },
        CharApostrophe: [4, 8],
        CharFeet: [8, 6],
        CharInches: [14, 8],
        CharBall: [14, 14],
        CharBallEmpty: [14, 14],
        CharBallFaint: [14, 14],
        CharBallStatus: [14, 14],
        CharCircle: [10, 10],
        CharHP: [22, 8],
        CharPP: [30, 14],
        CharTo: [14, 12],
        CharLevel: [12, 10],
        Char$: {
            width: 16,
            spriteWidth: 10,
            height: 16,
            offsetX: 8,
            offsetx: 2,
        },
        CharArrowUp: [14, 10],
        CharArrowRight: [10, 14],
        CharArrowDown: [14, 10],
        CharArrowLeft: [10, 14],
        HalfArrow: [16, 8],
        Line: {
            width: 4,
            height: 4,
            repeat: true,
        },
        LineDecoratorHorizontal: [32, 12],
        LineDecoratorVertical: [12, 32],
        LineSeparatorHorizontal: [16, 16],
        Menu: {
            groupType: "Text",
            spriteWidth: 16,
            spriteHeight: 16,
            width: 32,
            height: 32,
            repeat: true,
            noshiftx: true,
            noshifty: true,
            arrowXOffset: 5,
            arrowYOffset: 4,
            textXOffset: 16,
            textYOffset: 30,
            textSpeed: 1,
            attributes: {
                plain: {},
            },
        },
    };

    /**
     * Member name for a function on Actor instances to be called upon creation.
     */
    public readonly onMake = "onMake";
}
