class Wave{
    constructor(shift) {
        this.angle = 0;
        this.shift = shift;
        this.movement = 0;
        this.period = 3;
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
    }

    display() {
        
        for (let i=0; i <=360; i+=1.5) {
            let x = map(i, 0, 360, -rad, rad);
            //print(x);
            let amplitude = rad * sqrt(1 - pow((x/rad), 2));
            let y = amplitude*sin((i + this.angle + this.shift*this.movement)*this.period);

            stroke(this.r,this.g,this.b);
            fill(this.r,this.g,this.b);

            //remove first and last ellipse
            if (i != 0 && i != 360){
                ellipse(x, y, 8, 8);
            }
            
          }
        
    }

    move() {
        this.angle += 1;
        this.movement = 1 + cos(this.angle);
        //print(this.movement);
    }
}