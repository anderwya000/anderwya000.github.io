class GameObject {
    constructor(config) {

        //setup image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //config anim and init state
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = null;
    }

    draw() {
        
    }
}