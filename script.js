
nn.on('load', () => {
  //scene 

  kaplay({
    focus: false,
    background:"#d46eb3"
    //background: [255,0,255]
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
    text("oh hi", {
        size: 48, // 48 pixels tall
        width: 300, // it'll wrap to next line when width exceeds this value
        font: "sans-serif", // specify any font you loaded or browser built-in
     }),
    color(0,255,0),
    pos(200,600)
   
  ])
  
   

  
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



