const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

const data = [20, 50, 30, 70, 40, 90, 60];

canvas.width = 600;
canvas.height = 250;

ctx.strokeStyle = "#fff";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(0, 250 - data[0]);

data.forEach((val, i) => {
  ctx.lineTo(i * 90, 250 - val);
});

ctx.stroke();
