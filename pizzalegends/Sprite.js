class Sprite {
    constructor(config) {
        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //ref game obj
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isloaded && ctx.drawImage(this.image,
            0, 0,
            32, 32,
            x, y,
            32, 32
            )
    }
}