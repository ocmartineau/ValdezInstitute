$( document ).ready(function() {
    console.log( "ready!" );
    console.log();
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particle-div', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
});