const canvas = document.querySelector('#graph'),
  context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const circle = {
  centerX: 70,
  centerY: 70,
  radius: 50,
  angle: 0,
  angleSpeed: -Math.PI * 0.5,
  direction: false,
  start: 20,
  end: 70,
};

const triangle = {
  centerX: 60,
  centerY: 530,
  radius: 50,
  angle: 0,
  angleSpeed: Math.PI * 0.5,
};

const square = {
  lineDashOffset: 0,
};

const rectangle = {
  width: 200,
};

animation({
  update({ secondPart, timestamp }) {
    // circle
    circle.angle += circle.angleSpeed * secondPart;
    circle.radius = 30 + 20 * Math.cos(timestamp * 0.001);

    // triangle
    triangle.angle += triangle.angleSpeed * secondPart;

    // square
    square.lineDashOffset += secondPart * 50;

    // rectangle
    rectangle.width = 170 + 20 * Math.cos(timestamp * 0.001);
  },

  clear() {
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'gray';
    context.fill();
  },

  render() {
    // circle
    context.beginPath();
    context.arc(
      circle.centerX + 40 * Math.cos(circle.angle),
      circle.centerY + 40 * Math.sin(circle.angle),
      circle.radius,
      0,
      2 * Math.PI
    );
    context.closePath();
    context.fillStyle = 'green';
    context.fill();

    // triangle
    const dAngle = (Math.PI / 3) * 4;

    context.beginPath();
    context.moveTo(
      triangle.centerX + triangle.radius * Math.cos(triangle.angle),
      triangle.centerY + triangle.radius * Math.sin(triangle.angle)
    );
    context.lineTo(
      triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
      triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle)
    );
    context.lineTo(
      triangle.centerX +
        triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
      triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle)
    );
    context.closePath();
    context.fillStyle = 'red';
    context.fill();

    // square
    context.beginPath();
    context.setLineDash([10, 10]);
    context.lineDashOffset = square.lineDashOffset;
    context.rect(690, 10, 100, 100);
    context.stroke();
    context.fillStyle = '#013220';
    context.fill();

    // rectangle

    context.beginPath();
    context.rect(590, 490, rectangle.width, 100);
    context.stroke();
    context.fillStyle = 'blue';
    context.fill();
  },
});
