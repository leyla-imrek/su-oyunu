namespace SpriteKind {
    export const qwerty = SpriteKind.create()
    export const wert = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(pac_man, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    controller.moveSprite(pac_man, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    Current_Level += 1
    Change_Level(Current_Level)
})
function Change_Level (Level_Number: number) {
    if (Level_Number == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(pac_man, sprites.dungeon.stairWest)
    } else if (Level_Number == 2) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(pac_man, sprites.dungeon.doorOpenNorth)
    } else if (Level_Number == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(pac_man, sprites.dungeon.darkGroundSouthEast1)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (info.score() > 3) {
        game.gameOver(true)
        game.setGameOverMessage(true, "GAME OVER!")
    } else {
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pac_man,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 f 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 f f . . 
        . f 5 5 5 5 5 5 5 f f f . . . . 
        . f 5 5 5 5 5 f f . . . . . . . 
        . f 5 5 5 5 5 5 5 f f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 f 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    controller.moveSprite(pac_man, 150, 150)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(trash)
    info.changeScoreBy(1)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wert, function (sprite, otherSprite) {
    sprites.destroy(trash_4)
    info.changeScoreBy(1)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.qwerty, function (sprite, otherSprite) {
    sprites.destroy(trash_2)
    info.changeScoreBy(1)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    Current_Level += 1
    Change_Level(Current_Level)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(trash_3)
    info.changeScoreBy(1)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
let Current_Level = 0
let trash_4: Sprite = null
let trash_3: Sprite = null
let trash_2: Sprite = null
let trash: Sprite = null
let pac_man: Sprite = null
pac_man = sprites.create(img`
    . . . . . . . f f f . . . . . . 
    . . . . . f f 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . f 5 5 5 5 5 5 5 5 5 f . . 
    . . f 5 5 5 5 5 5 f 5 5 5 5 f . 
    . . f 5 5 5 5 5 5 5 5 5 f f . . 
    . f 5 5 5 5 5 5 5 f f f . . . . 
    . f 5 5 5 5 5 f f . . . . . . . 
    . f 5 5 5 5 5 5 5 f f f . . . . 
    . . f 5 5 5 5 5 5 5 5 5 f f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
    . . . f 5 5 5 5 5 5 5 5 5 f . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . . f f 5 5 5 f f . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
trash = sprites.create(img`
    . . . . . . 7 7 7 f . . . . . . 
    . . . . . . 7 f f f . . . . . . 
    . . . . . . 7 f 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 
    7 7 f f 7 7 7 7 f 7 7 7 f f f f 
    7 f f 7 7 7 7 f f 7 7 f f 7 7 7 
    7 f 7 7 7 7 7 f 7 7 7 7 7 7 7 7 
    . . . . . . 7 f 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 f f . . . . . . 
    . . . . . . 7 f f 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    `, SpriteKind.Food)
trash_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . 7 7 7 7 7 7 7 7 1 7 7 . . . . 
    . 7 7 7 7 7 7 1 7 7 7 7 7 . . . 
    . 7 7 1 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 1 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . 7 7 7 7 7 7 7 7 7 . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.qwerty)
trash_3 = sprites.create(img`
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 f 7 7 7 7 7 f 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 f f f 7 7 7 7 7 . 
    . . 7 7 7 7 7 f . f 7 7 7 7 7 . 
    . . 7 7 7 7 7 f f f 7 7 7 7 7 . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
trash_4 = sprites.create(img`
    7 7 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 f 7 7 . . . . . 7 7 7 
    7 f f 7 7 f 7 7 . . . . . 7 d 7 
    7 f f 7 7 7 7 7 . . . . . 7 d 7 
    7 7 7 7 7 7 7 7 . . . . . 7 d 7 
    7 7 7 7 7 7 7 7 . . . . . 7 d 7 
    7 7 7 f f f 7 7 7 7 7 7 7 7 d 7 
    7 7 7 f f f 7 7 7 7 7 7 7 7 d 7 
    7 7 7 f f f 7 7 7 f f 7 7 7 d 7 
    7 7 7 7 7 7 7 7 7 f f 7 7 7 d 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 d 7 
    7 7 7 7 f 7 7 7 7 7 7 7 7 7 d 7 
    7 7 7 7 7 7 7 f f 7 . . . 7 d 7 
    7 7 7 7 7 7 7 f f 7 . . . 7 7 7 
    7 7 7 7 7 7 7 7 7 7 . . . . . . 
    `, SpriteKind.wert)
trash.setPosition(77, 47)
trash_2.setPosition(76, 200)
trash_3.setPosition(161, 210)
trash_4.setPosition(200, 47)
controller.moveSprite(pac_man, 100, 100)
scene.cameraFollowSprite(pac_man)
Current_Level = 1
Change_Level(1)
