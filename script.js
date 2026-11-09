
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
 
 //text
  add([
    text("oh [p]hi[/p]", {
        size: 48, // 48 pixels tall
        width: 300, // it'll wrap to next line when width exceeds this value
        font: "sans-serif", // specify any font you loaded or browser built-in
     //styles: p<color:(255,255,255)>
     }),
    color(0,255,0),
    pos(200,600), 
    
   
  ])
  
  
   //music
  loadMusic("bg", "/assets/bgmusic.wav");
  loadSound("mark", "/assets/mark_voice.wav");
  
  
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

onKeyPress("space", () => music.paused = !music.paused); 

