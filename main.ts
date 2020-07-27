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
        game.over(true)
    } else {
    	
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
    Bruce.setPosition(152, 20)
    Bruce.setVelocity(0, 75)
    bruceprevcol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Bruce))
    bruceprevrow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Bruce))
    isBrucealive = 1
})
function bruceVelocity (dir: number) {
    if (dir == 0) {
        Bruce.setVelocity(0, -75)
    } else if (dir == 90) {
        Bruce.setVelocity(75, 0)
    } else if (dir == 180) {
        Bruce.setVelocity(0, 75)
    } else if (dir == 270) {
        Bruce.setVelocity(-75, 0)
    }
}
function Start_Screen () {
    game.showLongText("This is my game. - By a Clemson First-Year Student", DialogLayout.Bottom)
}
let bruceprevrow = 0
let bruceprevcol = 0
let Bruce: Sprite = null
let bruceposdir: number[] = []
let isBrucealive = 0
let keyHave = 0
let Marlin: Sprite = null
Start_Screen()
tiles.setTilemap(tiles.createTilemap(hex`0b000b0001010101010101010101010300000000000000010001010101010101010001000101000000000001000100010100010001010100010001010001020100000001000101000101010001010100010100010000000100000001010001000101010001000101000000000000000100010101010101010101010101`, img`
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
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
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
info.startCountdown(10)
keyHave = 0
isBrucealive = 0
