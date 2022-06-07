class CollectableItem {
    x;
    y = 760;
    height = 140;
    width = 120;
    img;

    
   /**
   * 
   * this function is used to load the first image
   * @param {string} path 
   */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * 
     * draw the image
     * @param {context} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * 
     * drawing blue border around objects for orientation
     * @param {context} ctx 
     */
         drawBorder(ctx) {
            ctx.lineWidth = '5';
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
}