class Snow {
        constructor(x,y,r)
        {
            var options={
                isStatic: false,
                restitution: 0,
                friction: 1,
                }

            this.r=10;
            this.image = loadImage("snow4.webp")
            this.body = Bodies.circle(x, y, this.r, options)
            World.add(world, this.body);
        }
    
        display()
        {
            var snowPos = this.body.position;
            var angle = this.body.angle

            push()
            translate(snowPos.x, snowPos.y);
            rotate(angle)
            imageMode(CENTER);
            ellipseMode(RADIUS);
            image(this.image, 0,0,this.r*2, this.r*2)
            pop()
     }
    }
    