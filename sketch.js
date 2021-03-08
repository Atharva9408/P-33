var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 //object array
var particles = [];
var plinkos = [];
var divisions=[];
var particle=[];
var divisionHeight=300;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score =0;
function setup() {
  createCanvas(800, 740);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 80) {
     //divisions=
     divisions.push( new Divisions(k, height-divisionHeight/2, 10, divisionHeight));//inseting value 
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,60));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,260));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,360));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(30)
  fill("blue")
  stroke("white")
 text("Score : "+score,width/40,height/25);
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
   //  particles.push(new Particle(random(50,750), 0,10));
   //  score=score+(Math.round(random(1,10)));
   }
 
 /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
}

function mousePressed(){
  if(gameState!=="END"){
    particle=new Particle(mouseX,10,10,10)
    particle.display();
    score=score+(Math.round(random(1,10)));
    console.log(particle)
  }

 /* for (var i = 0; i < particle.length; i++) {
   
    particle[i].display();
  }*/
}