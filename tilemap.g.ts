// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070b0b0b0b0b0b0b00000007080000000000000000000000000000000000000000000000000000000000000000070800000000000000000000000000000000000708000000000000000000000000000000000000000000000000000000000000000007080000000000000000000000000000000000000708000000000000000000000000000600000000010000010000000000030609010002020202020202020c0d0202050a0402`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 
. . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 . . . . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 2 . . 
2 2 2 2 2 2 2 2 . . 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.builtin.forestTiles2,sprites.swamp.swampTile4,sprites.swamp.swampTile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101000000000000000000000100000101010000000000000000000100010101000000000000000000000001000000000000000001000000000000010000000000000000010000000000000100000000000000010000000000000000010101000000010100000000000000000000010101010100000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "chest1":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
