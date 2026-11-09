
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
 
  bean.play("jump")

  
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



