game.onGameUpdateWithHeading(function () {
    scene.cameraFollowSprite(Marlin)
})
function Start_Screen () {
    game.showLongText("This is my game. - By a Clemson First-Year Student", DialogLayout.Bottom)
}
let Marlin: Sprite = null
Start_Screen()
tiles.setTilemap(tiles.createTilemap(hex`0b000b0001010101010101010101010100000000000000010001010101010101010001000101000000000001000100010100010001010100010001010001000100000001000101000101010001010100010100010000000100000001010001000101010001000101000000000000000100010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . 2 . 2 
    2 2 2 2 2 2 2 . 2 . 2 
    2 . . . . . 2 . 2 . 2 
    2 . 2 . 2 2 2 . 2 . 2 
    2 . 2 . 2 . . . 2 . 2 
    2 . 2 2 2 . 2 2 2 . 2 
    2 . 2 . . . 2 . . . 2 
    2 . 2 . 2 2 2 . 2 . 2 
    2 . . . . . . . 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
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
let Bruce = sprites.create(img`
    . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
    . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
    . . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
    . . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
    . . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
    f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
    f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
    f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
    . f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
    . . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
    . . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
    . . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
    . . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
    . . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Marlin.setPosition(152, 20)
