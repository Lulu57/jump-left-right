namespace SpriteKind {
    export const item = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile5, function (sprite, location) {
    game.over(false)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    music.play(music.createSong(assets.song`AYYYY YA WON THE GAME SON`), music.PlaybackMode.UntilDone)
    music.setVolume(104)
    game.setGameOverMessage(true, "You Won!")
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile4, function (sprite, location) {
    game.setGameOverMessage(false, "You Died")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.setVolume(98)
    info.changeLifeBy(-1)
    pause(5000)
    music.play(music.createSong(assets.song`YOU MACH_JESUSED MY EARS`), music.PlaybackMode.UntilDone)
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
mySprite3 = sprites.create(assets.image`Knock-off Flowey fr`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite3)
controller.moveSprite(mySprite3, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(0, 14))
mySprite3.ay = 200
info.setLife(1)
let sprite4 = sprites.create(assets.image`chest`, SpriteKind.item)
tiles.placeOnTile(sprite4, tiles.getTileLocation(15, 4))
game.showLongText("Welcome to the land of Fluoria. The Emberlings are guarding the Queen's chest. Get to the chest to retrieve it.", DialogLayout.Full)
music.setVolume(159)
music.play(music.createSong(hex`006e000408040403001c0001dc00690000045e0100040000000000000000000005640001040003840000000400011e0400080001200c001000012210001400012014001c00011e1c002000011920002400011b28002c00011d2c003000011b30003800011938003c00011b3c004000011d40004400011d48005000012250005400012054005c00011e5c006000011d60006400011e64006800012068006c00011e6c007400011d74008000011b06001c00010a006400f4016400000400000000000000000000000000000000027e000000040001240400080001250c001000012510001400012414001c00012220002400012028002c0001222c003000012030003400011938003c00011d3c004000012040004400012248005000012c50005400012a54005c0001295c006000012760006400012964006800012a68006c0001296c007400012774008000012507001c00020a006400f4016400000400000000000000000000000000000000037f0000000400011904000800011b0c001000011e10001400011d14001c00021b2a20002400012928002c00012a2c003000012930003400011938003c00011b3c004000011d40004400011e48005000012550005400012454005c0001225c006000012060006400012264006800012468006c0001226c007400012074008000011e08001c000e050046006603320000040a002d0000006400140001320002010002660014001c00012720002400012528002c0001272c003000012530003400011938003c00011b3c004000011e40004400012048005000012950005400012754005c0001255c006000012460006400012564006800012768006c0001256c0074000124740080000122`), music.PlaybackMode.UntilDone)
forever(function () {
    mySprite2 = sprites.create(assets.image`flameboi`, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 4))
    animation.runImageAnimation(
    mySprite2,
    assets.animation`flame boi walk left lol`,
    200,
    true
    )
})
