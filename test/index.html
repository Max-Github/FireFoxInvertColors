<!doctype html>
<html lang="en">
 <head>
  <meta charset="utf-8">
  <title>Invert Colours Test Page</title>
  <meta name="description" content="Firefox web extension tests">
  <meta name="author" content="Tj">
  <link rel="stylesheet" href="styles_test.css"/>
 </head>
 <body>
   <h1>Invert Colours Image Test</h1>
   <section>
     <div id="grid">
       <div id="tests">
         <div class="test"><p>img SVG</p><img src="test-radial.svg"/></div>
         <div class="test"><p>img PNG</p><img src="test-radial.png"/></div>
         <div class="test"><p>img JPEG</p><img src="test-radial.jpg"/></div>
         <div class="test"><p>img GIF</p><img src="test-radial.gif"/></div>

         <div class="test" style="background-image: url('test-radial.svg');"><p>background-image SVG</p></div>
         <div class="test" style="background-image: url('test-radial.png');"><p>background-image PNG</p></div>
         <div class="test" style="background-image: url('test-radial.jpg');"><p>background-image JPEG</p></div>
         <div class="test" style="background-image: url('test-radial.gif');"><p>background-image GIF</p></div>

         <div class="test"><p>svg</p>
           <svg id="svgRadial" viewBox="0 0 100 100">
             <defs id="defs4">
               <linearGradient id="linearGradient4192">
                 <stop id="stop4194" offset="0" style="stop-color:#000000;stop-opacity:0" />
                 <stop id="stop4196" offset="1" style="stop-color:#0000ff;stop-opacity:1" />
               </linearGradient>
               <radialGradient id="radialGradient4198" gradientUnits="userSpaceOnUse" r="50" fy="50" fx="50" cy="50" cx="50" xlink:href="#linearGradient4192" />
             </defs>
             <circle r="48" cy="50" cx="50" id="svgRadial"
                    style="opacity:1;fill:url(#radialGradient4198);fill-opacity:1;stroke:#ff0000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:0.91066284" />
           </svg>
         </div>
         <div class="test" id="canvasParent"><p>canvas</p><canvas id="canvas1"/></div>
         <div class="test"><p>img PNG animated</p><img src="test-radial-animated.apng"/></div>
         <div class="test"><p>video MP4</p><video src="test-radial-animated.mp4" autoplay loop/></div>

         <div class="test"><p>iframe SVG</p><iframe src="iframeSVG.html"></iframe></div>
         <div class="test"><p>iframe PNG</p><iframe src="iframePNG.html"></iframe></div>
         <div class="test"><p>iframe canvas</p><iframe src="iframeCanvas.html"></iframe></div>
         <div class="test"><p>iframe video</p><iframe src="iframeVideo.html"></iframe></div>
       </div>
     </div>
   </section>
   <section>
     <pre id="vt"></pre>
   </section>
 </body>
 <script>
    var vt = document.getElementById('vt');
    vt.textContent = "Starting...\n";

    function onResize() {
      var p = document.getElementById('canvasParent');
      if (p) {
        var pw = p.clientWidth;
        var ph = p.clientHeight;
        vt.textContent += `canvasParent: w ${pw} h ${ph}\n`;
      }
      var canvas1 = document.getElementById('canvas1');
      vt.textContent += "Getting canvas1\n";
      if (canvas1 && canvas1.getContext) {
        vt.textContent += "Got canvas1\n";
        var width = canvas1.width;
        var height = canvas1.height;
        vt.textContent += `canvas: w ${width} h ${height}\n`;
        vt.textContent += 'Setting canvas width/height to parent div\n';
        canvas1.width = pw;
        canvas1.height = ph;
        width = canvas1.width;
        height = canvas1.height;
        var center_x = Math.round(width / 2);
        var center_y = Math.round(height / 2);
        var radius = Math.round(width / 2) - 5;
        vt.textContent += `w ${width}, h ${height}, canvas(cx ${center_x}, cy ${center_y}, r ${radius})\n`;
        context = canvas1.getContext('2d');
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 4.0;
        context.arc(center_x, center_y, radius, 0, Math.PI * 2);
        var gradient = context.createRadialGradient(center_x, center_y, radius, center_x, center_y, 0);
        gradient.addColorStop(0, 'blue');
        gradient.addColorStop(1, 'transparent');
        context.fillStyle = gradient;
        context.fill();
        context.stroke();
        context.closePath();

        var iframes = document.getElementsByTagName("iframe");
        for ( f=0; f < iframes.length; f++) {
          vt.textContent += `iframe ${f}: ` + iframes[f].src + "\n";
          var w = iframes[f].contentWindow;
          w.document.onload = function() {
            document.body.style.width = document.clientWidth;
            document.body.style.height = document.clientHeight;
          };
        }
      }
    }

    onResize();
    window.onresize = onResize;
  </script>
</html>
