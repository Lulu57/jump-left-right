controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite3.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite3,
        assets.animation`HOI`,
        200,
        false
        )
        mySprite3.vy = -125
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "You Died")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "You Won!")
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(5000)
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
mySprite3 = sprites.create(assets.image`Knock-off Flowey fr`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite3)
controller.moveSprite(mySprite3, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite3.ay = 200
info.setLife(10)
let sprite4 = sprites.create(assets.image`coin`, SpriteKind.Projectile)
forever(function () {
    mySprite2 = sprites.create(assets.image`flameboi`, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`flame boi walk left lol`,
    200,
    true
    )
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(19, 6))
})
forever(function () {
    tiles.placeOnTile(sprite4, tiles.getTileLocation(18, 6))
})
forever(function () {
    mySprite2.vx = -50
    pause(5000)
})
