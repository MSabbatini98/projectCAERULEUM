#extra resources to implement later

## draw geometric shapes 
```
 <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }

    input[type="range"] {
      width: 300px;
      margin: 20px 0;
    }

    #shape-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    #shape {
      --sides: 3;
      width: 200px;
      height: 200px;
      background-color: #3498db;
      clip-path: polygon(
        calc(50% + 50% * cos(0deg)) calc(50% + 50% * sin(0deg)),
        calc(50% + 50% * cos(360deg / var(--sides) * 1)) calc(50% + 50% * sin(360deg / var(--sides) * 1)),
        calc(50% + 50% * cos(360deg / var(--sides) * 2)) calc(50% + 50% * sin(360deg / var(--sides) * 2)),
        calc(50% + 50% * cos(360deg / var(--sides) * 3)) calc(50% + 50% * sin(360deg / var(--sides) * 3)),
        calc(50% + 50% * cos(360deg / var(--sides) * 4)) calc(50% + 50% * sin(360deg / var(--sides) * 4)),
        calc(50% + 50% * cos(360deg / var(--sides) * 5)) calc(50% + 50% * sin(360deg / var(--sides) * 5)),
        calc(50% + 50% * cos(360deg / var(--sides) * 6)) calc(50% + 50% * sin(360deg / var(--sides) * 6)),
        calc(50% + 50% * cos(360deg / var(--sides) * 7)) calc(50% + 50% * sin(360deg / var(--sides) * 7)),
        calc(50% + 50% * cos(360deg / var(--sides) * 8)) calc(50% + 50% * sin(360deg / var(--sides) * 8)),
        calc(50% + 50% * cos(360deg / var(--sides) * 9)) calc(50% + 50% * sin(360deg / var(--sides) * 9)),
        calc(50% + 50% * cos(360deg / var(--sides) * 10)) calc(50% + 50% * sin(360deg / var(--sides) * 10))
      );
      transition: clip-path 0.5s ease;
    }
  </style>
<body>
  <h1>CSS Regular Shape Drawer</h1>
  <p>Adjust the slider to change the number of sides (3 to 10):</p>
  <input type="range" id="sidesSlider" min="3" max="10" value="3" oninput="document.getElementById('shape').style.setProperty('--sides', this.value)">

  <div id="shape-container">
    <div id="shape"></div>
  </div>
</body>
```

## "Pulse" animation
```
HTLM
div.pulse
    span.style = --i:0
    span.style = --i:1
    span.style = --i:2
    span.style = --i:3

CSS
.pulse {
    //shape to pulse
}
.pulse span {
    position: absolute; 
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    opacity: .8;
    animation: pulseAnimate 4s ease-out infinite; animation-delay: calc(1s * var(--i));
} 
 @keyframes pulseAnimate {
    100% {
        opacity: 0;
        transform: scale(2);
    }
}
```

## Kenk.js
Scelto in quanto standard nell'ecosistema Node.js 