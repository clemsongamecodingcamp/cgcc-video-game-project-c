scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    music.baDing.play()
    keyHave += 1
})
function bruceResponse () {
    bruceposdir = []
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Bruce)))) {
        bruceposdir.push(Math.mod(sprites.heading(Bruce) + 90, 360))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Bruce)))) {
        bruceposdir.push(Math.mod(sprites.heading(Bruce) - 90, 360))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Bruce)))) {
        bruceposdir.push(sprites.heading(Bruce))
    }
    bruceVelocity(arrays.choose(bruceposdir))
}
function bruceMovement () {
    if (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Bruce)) != bruceprevcol || scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Bruce)) != bruceprevrow) {
        bruceResponse()
        bruceprevrow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Bruce))
        bruceprevcol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Bruce))
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (keyHave == 1) {
        levelNumber = 2
        tiles.setTilemap(tiles.createTilemap(hex`0d000d0001010101010101010101010101010000000100000000000000010100010000000101010101000101000100010001000000010001010001010101010101000000010300010201000000010101000101010100010001000100000001010000000101010000000101010100010101000100010101000401000100000001000000010001010001000100010101000100010100000001000000000000000101010101010101010101010101`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . 2 . . . . . . . 2 
            2 . 2 . . . 2 2 2 2 2 . 2 
            2 . 2 . 2 . 2 . . . 2 . 2 
            2 . 2 2 2 2 2 2 2 . . . 2 
            . . 2 . 2 . . . 2 2 2 . 2 
            2 2 2 . 2 . 2 . 2 . . . 2 
            2 . . . 2 2 2 . . . 2 2 2 
            2 . 2 2 2 . 2 . 2 2 2 . 2 
            2 . 2 . . . 2 . . . 2 . 2 
            2 . 2 . 2 . 2 2 2 . 2 . 2 
            2 . . . 2 . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen))
        Bruce.destroy()
        Marlin.setPosition(184, 135)
        info.startCountdown(25)
    } else if (keyHave == 2) {
        levelNumber = 3
        tiles.setTilemap(tiles.createTilemap(hex`0f000f00010101010101010101010101010101010000000000000000000000010201010001010100010100010101010001010001000000010000000000000001030001000100010101010001010001010001000100000000000000010001010001000100010101000101010101010000000100000001000000000001010001010101010101010101010001010000000000000000000001000001010101010001010101010001000101010000010000010000000001000004010001010100010101010101000101010000000000000000000000000001010101010101010101010101010101`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . 2 . 2 
            2 . 2 2 2 . 2 2 . 2 2 2 2 . 2 
            2 . 2 . . . 2 . . . . . . . 2 
            . . 2 . 2 . 2 2 2 2 . 2 2 . 2 
            2 . 2 . 2 . . . . . . . 2 . 2 
            2 . 2 . 2 . 2 2 2 . 2 2 2 2 2 
            2 . . . 2 . . . 2 . . . . . 2 
            2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 
            2 . . . . . . . . . . 2 . . 2 
            2 2 2 2 . 2 2 2 2 2 . 2 . 2 2 
            2 . . 2 . . 2 . . . . 2 . . 2 
            2 . 2 2 2 . 2 2 2 2 2 2 . 2 2 
            2 . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen))
        Bruce.destroy()
        Marlin.setPosition(216, 184)
        info.startCountdown(30)
    } else if (keyHave == 3) {
        game.over(true)
    }
})
game.onGameUpdateWithHeading(function () {
    controller.moveSprite(Marlin, 50, 50)
    scene.cameraFollowSprite(Marlin)
    if (isBrucealive == 1) {
        if (scene.spriteContainedWithinTile(Bruce)) {
            bruceMovement()
        }
        if (Bruce.vx == 0 && Bruce.vy == 0) {
            bruceVelocity(randint(0, 3) * 90)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart == 0) {
        gameStart = 1
    }
    tiles.setTilemap(tiles.createTilemap(hex`0b000b0001010101010101010104010300000000000000010001010101010101010001000101000000000001000100010100010001010100010001010001020100000001000101000101010001010100010100010000000100000001010001000101010001000101000000000000000100010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . 2 . 2 
        2 2 2 2 2 2 2 . 2 . 2 
        2 . . . . . 2 . 2 . 2 
        2 . 2 . 2 2 2 . 2 . 2 
        2 . 2 . 2 . . . 2 . 2 
        2 . 2 2 2 . 2 2 2 . 2 
        2 . 2 . . . 2 . . . 2 
        2 . 2 . 2 2 2 . 2 . 2 
        2 . . . . . . . 2 . 2 
        2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen))
    Marlin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Player)
    Marlin.setPosition(152, 20)
    animateMarlin()
    info.startCountdown(20)
    keyHave = 0
    isBrucealive = 0
    levelNumber = 1
})
info.onCountdownEnd(function () {
    Bruce = sprites.create(img`
        . . . . . . . . . . . . . c c f 
        . . . . . . . . . . . . c d d b 
        . . . . . . . . . . . c d d b b 
        . . . . . . . . . . f c c b b c 
        . . . . f f f f f f c c c c c c 
        . . f f b b b b b b b b b b b b 
        f f b b b b b b b b b c b c b b 
        f b c b b b b b f f b b c b c b 
        f b b b 1 1 1 1 f f 1 b c b c b 
        . f b 1 1 1 1 1 1 1 1 b b b b b 
        . . f c c c 3 3 c c 1 1 b b b b 
        . . . f c 1 3 1 c 1 1 1 b b b c 
        . . . . f 3 3 c 1 1 1 c b b b f 
        . . . . . f f 1 1 1 1 f b d b b 
        . . . . . . . c c c c c f b d b 
        . . . . . . . . . . . . . f f f 
        `, SpriteKind.Enemy)
    Bruce.setVelocity(0, 100)
    animateBruce()
    bruceprevcol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Bruce))
    bruceprevrow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Bruce))
    isBrucealive = 1
    if (levelNumber == 1) {
        Bruce.setPosition(152, 20)
    } else if (levelNumber == 2) {
        Bruce.setPosition(184, 135)
    }
})
function bruceVelocity (dir: number) {
    if (dir == 0) {
        Bruce.setVelocity(0, -100)
    } else if (dir == 90) {
        Bruce.setVelocity(100, 0)
    } else if (dir == 180) {
        Bruce.setVelocity(0, 100)
    } else if (dir == 270) {
        Bruce.setVelocity(-100, 0)
    }
}
function Start_Screen () {
    gameStart = 0
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010203040501010101010101010101010101`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen))
}
function animateBruce () {
    animation.runImageAnimation(
    Bruce,
    [img`
        . . . . . . . . . . . . . c c f 
        . . . . . . . . . . . c c d d b 
        . . . . . . . . . . c c d d b b 
        . . . . . . . . . . f c c b b c 
        . . . . . f f f f f c c c c c c 
        . . . f f b b b b b b b c b b b 
        . . f b b b b b b b b c b c b b 
        f f b b b b b b f f b b c b c b 
        f b c b b b 1 1 f f 1 b c b b b 
        f b b b 1 1 1 1 1 1 1 1 b b b b 
        . f b 1 1 1 3 3 c c 1 1 b b b b 
        . . f c c c 3 1 c 1 1 1 b b b c 
        . . . f c 1 3 c 1 1 1 c b b b f 
        . . . . f c c c 1 1 1 f b d b b 
        . . . . . . . . c c c c f c d b 
        . . . . . . . . . . . . . f f f 
        `,img`
        . . . . . . . . . . . . . c c f 
        . . . . . . . . . . . . c d d b 
        . . . . . . . . . . . c d d b b 
        . . . . . . . . . . f c c b b c 
        . . . . f f f f f f c c c c c c 
        . . f f b b b b b b b b b b b b 
        f f b b b b b b b b b c b c b b 
        f b c b b b b b f f b b c b c b 
        f b b b 1 1 1 1 f f 1 b c b c b 
        . f b 1 1 1 1 1 1 1 1 b b b b b 
        . . f c c c 3 3 c c 1 1 b b b b 
        . . . f c 1 3 1 c 1 1 1 b b b c 
        . . . . f 3 3 c 1 1 1 c b b b f 
        . . . . . f f 1 1 1 1 f b d b b 
        . . . . . . . c c c c c f b d b 
        . . . . . . . . . . . . . f f f 
        `,img`
        . . . . . . . . . . . . . . c f 
        . . . . . . . . . . . . c c d d 
        . . . . . . . . . . . c b d d b 
        . . . . . . . . . . f c c b b c 
        . . . f f f f f f f c c c c c c 
        . f f c b b b b b b b b b b b b 
        f c b b b b b b b b b c b b b b 
        f b c b b b b f f b b b c b c b 
        f b b 1 1 1 1 f f b b b c b c b 
        . f b 1 1 1 1 1 1 1 1 b b c b b 
        . . f c c c 3 3 c b 1 1 b b b b 
        . . . f c 1 3 1 c 1 1 1 b b b c 
        . . . . f 3 3 c 1 1 1 c b b c c 
        . . . . . f f 1 1 1 1 f d b b c 
        . . . . . . . c c c c c f d b b 
        . . . . . . . . . . . . . f f f 
        `,img`
        . . . . . . . . . . . . . c c f 
        . . . . . . . . . . . . c d d b 
        . . . . . . . . . . . c d d b b 
        . . . . . . . . . . f c c b b c 
        . . . . f f f f f f c c c c c c 
        . . f f b b b b b b b b b b b b 
        f f b b b b b b b b b c b c b b 
        f b c b b b b b f f b b c b c b 
        f b b b 1 1 1 1 f f 1 b c b c b 
        . f b 1 1 1 1 1 1 1 1 b b b b b 
        . . f c c c 3 3 c c 1 1 b b b b 
        . . . f c 1 3 1 c 1 1 1 b b b c 
        . . . . f 3 3 c 1 1 1 c b b b f 
        . . . . . f f 1 1 1 1 f b d b b 
        . . . . . . . c c c c c f b d b 
        . . . . . . . . . . . . . f f f 
        `],
    200,
    true
    )
}
function animateMarlin () {
    animation.runImageAnimation(
    Marlin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `],
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let gameStart = 0
let isBrucealive = 0
let Marlin: Sprite = null
let levelNumber = 0
let bruceprevrow = 0
let bruceprevcol = 0
let bruceposdir: number[] = []
let keyHave = 0
Start_Screen()
let Bruce: Sprite = null
