const {Shape, Circle, Square, Triangle} = require('./shapes.js')
test('set text in circle constructor', () => {
    let logo = new Circle()
    console.log(logo)
    logo.settext('bob')
    logo.settextcolor('blue')
    logo.setshapecolor('red')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
  });
test('set text in triangle constructor', () => {
    let logo = new Triangle()
    console.log(logo)
    logo.settext('bob')
    logo.settextcolor('blue')
    logo.setshapecolor('red')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
  });
test('set text in square constructor', () => {
    let logo = new Square()
    console.log(logo)
    logo.settext('bob')
    logo.settextcolor('blue')
    logo.setshapecolor('red')
    console.log(logo)
    console.log(logo.render())
    expect(logo.text).toBe('bob');
  });
test('set text in shape constructor', () => {
    let logo = new Shape()
    console.log(logo)
    logo.settext('bob')
    logo.settextcolor('blue')
    logo.setshapecolor('red')
    console.log(logo)
    expect(logo.text).toBe('bob');
  });
