
nn.on('load', () => {
  //scene 

  kaplay({
    focus: false,
    background:"#d46eb3",
    //background: [255,0,255]
    backgroundAudio: true
   
  })
  
  

  //sprites
  const player = add([
    rect(60, 32),
    pos(100, 100),
    area(),
    color(100, 200, 255),
    'player'
  ])
  
  loadBean();
  const bean = add([
    sprite("bean"),
    pos(500,500),
    'bean'
]);
  loadSprite("sparkle", "assets/sparkles.png")
  const sparkle = add([
    sprite("sparkle"), // sprite() is a rendering component that draws a sprite on the screen.
    pos(120,80)
  ])
 
loadSprite("zom", "assets/zombiefile_cast.png", {
    // The image contains 9 frames layered out horizontally, slice it into individual frames
    sliceX: 6,
  sliceY: 4,
    // Define animations
    anims: {
        "idle": {
            // Starts from frame 0, ends at frame 6
            from: 0,
            to: 6,
            // Frame per second
            speed: 5,
            loop: true,
        },
        "run": {
            from: 7,
            to: 12,
            speed: 10,
            loop: true,
        },
      
    },
});
  
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
  
  
   //music
  loadMusic("bg", "assets/bgmusic.wav");
  loadSound("mark", "assets/mark_voice.wav");
  
  
  const music = play("bg", {
    loop: true,
    paused: true,
});
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
})

onKeyPress("enter", () => {
    play("mark", {
        volume: 1,
        speed: 1,
    })
});
const playerPlayIdle = () => {
    // Only reset to "idle" if player is not holding any of these keys
    if (zom.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
       zom.play("idle");
    }
}; 

zom.onGround(() => {
    if (!isKeyDown("left") && !isKeyDown("right")) {
        player.play("idle");
    }
    else {
        player.play("run");
    }
});

onKeyPress("space", () => music.paused = !music.paused); 


// info
// #region UI
const getInfo = () =>
    `
Anim: ${zom.getCurAnim()?.name}
Frame: ${zom.frame}
`.trim();

// Add some text to show the current animation
const label = add([
    text(getInfo(), { size: 12 }),
    color(0, 0, 0),
    pos(40,40),
]);

label.onUpdate(() => {
    label.text = getInfo();
});
// #endregion
