/// <reference path="../../typings/phaser.d.ts" />
// @ts-check

import Phaser from 'phaser';

class Game extends Phaser.Scene {
create(){
 this.hero=this.physics.add.sprite(400,300,'mage');
.body.setCollideWorldBounds
}
}
export default Game;