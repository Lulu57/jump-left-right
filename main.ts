controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`ee-er-4`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`HOI`,
    1000,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`ee-er-two`, SpriteKind.Player)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`ee-er-3`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`AAAAAAAAAAAAAAAAAAAAAAA`,
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`ee-er`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Asset Name`,
    500,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(7)
