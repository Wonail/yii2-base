var particles = document.createElement('div');
particles.id = "particles";
document.body.appendChild(particles);
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
//    dotColor: '#5cbdaa',
//    lineColor: '#5cbdaa',
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#eee',
        lineColor: '#eee',
        particleRadius: 7, // Dot size
        proximity: 100, // How close two dots need to be before they join
    });
}, false);