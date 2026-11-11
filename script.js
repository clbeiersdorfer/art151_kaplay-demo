
nn.on('load', () => {
  //scene 

  kaplay({
    focus: false,
    background:"#d46eb3",
    //background: [255,0,255]
   //// backgroundAudio: true
   
  })
  
   loadBean();
loadSprite("sparkle", "assets/sparkles.png")
  loadSprite("zom", "assets/zombiefile_cast.png", {
    // The image contains 9 frames layered out horizontally, slice it into individual frames
    sliceX: 6,
  sliceY: 4,
    // Define animations
    anims: {
        "idle": {
            // Starts from frame 0, ends at frame 6
            from: 0,
            to: 5,
            // Frame per second
            speed: 5,
            loop: true,
        },
        "run": {
            from: 6,
            to: 11,
            speed: 10,
            loop: true,
        },
      
    },
});
    //music
  loadMusic("bg", "assets/dance.wav");
  loadMusic("bgm", "assets/bgmusic.wav");
  loadSound("mark", "assets/mark_voice.wav");
  
  //sprites
  const player = add([
    rect(60, 32),
    pos(100, 100),
    area(),
    color(100, 200, 255),
    'player'
  ])
  
 
  const bean = add([
    sprite("bean"),
    pos(500,500),
    'bean'
]);
  
  const sparkle = add([
    sprite("sparkle"), // sprite() is a rendering component that draws a sprite on the screen.
    pos(120,80)
  ])
 

  
  const zom = add([
    sprite("zom"),
    pos(center()),
    anchor("center"),
    area(),
    body(),
  ])
  
  // Add a platform
add([
    rect(width(), 24),
    area(),
    outline(1),
    pos(0, height() - 24),
    body({ isStatic: true }),
]);
 //text
  add([
    text("oh [blue]hi[/blue]", {
        size: 48, // 48 pixels tall
        width: 300, // it'll wrap to next line when width exceeds this value
        font: "sans-serif", // specify any font you loaded or browser built-in
   styles: {
                "blue": {
                    color: rgb(0, 110, 255),
                }
   }
     }),
    color(0,255,0),
    pos(200,600), 
    
   
  ])
   
  
  zom.play("run");
  
 
  ///controls
  onKeyDown('right', () => {
    player.move(200, 0)
  })

  
  onKeyDown('left', () => {
    player.move(-200, 0)
  })
  
  onKeyDown('up', () => {
   bean.move(0, -200)
      
  })
  onKeyDown('down', () => {
    bean.move(0, 200)
  })
  
  //sound effects
  onKeyPress('right', () => {
    play("mark", {volume: 0.25});
  })
  
   onKeyPress('left', () => {
    play("mark", {volume: 0.25});
  })
  
  ///background music
   let bgPlaying = null; // checking to see if music is playing

onMousePress(() => {
  
    if (!bgPlaying) {
        bgPlaying = play("bg", {
            loop: true,
            volume: 0.5
        });
        return; 
    }
    
    if (bgPlaying.paused) {
        bgPlaying.play();
    } else {
        bgPlaying.paused = true;
    }
});
  
  onLoad(() => {
   play("bgm", {
        loop: true,
        volume: 0.5
    });
  })
 
})