if (typeof(JEELIZFACEFILTER)==='undefined'){
  throw new Error('Cannot found JEELIZFACEFILTER. Was jeelizFaceFilter.js included before this script ?');
} 

if (typeof(HeadControls)==='undefined'){
  throw new Error('Cannot found HeadControls. helpers/HeadControls.js included before this script ?');
}

if (typeof(THREE)==='undefined'){
  throw new Error('Cannot found THREE.JS');
}

THREE.HeadControls = function ( threeCamera, canvasId, NNCPath ) {
  this.enableZoom = true;
  this.sensibilityZ = 1;
  this.sensibilityRotateX = 0.001;
  this.sensibilityRotateY = 0.001;
  
  threeCamera.rotation.order = 'YXZ';
  
  this.lastposx=0;
  this.lastposy=0;

  this.moment=0;
  this.avgx=0;
  this.avgy=0;

  const that = this;
  function callbackMove(mv){

    var leftright=0;
    var updown=0;

    if (that.enableZoom && mv.dZ!==0) { // move head forward/backward
      // threeCamera.translateZ(-mv.dZ*that.sensibilityZ);
    }
    if (mv.dRx!==0) { // turn head up-down
      // threeCamera.rotation.x+=-mv.dRx*that.sensibilityRotateX;

      updown=mv.dRx*that.sensibilityRotateX;

    }
    if (mv.dRy!==0) { // turn head left-right
      // threeCamera.rotation.y+=mv.dRy*that.sensibilityRotateY;

      leftright=mv.dRy*that.sensibilityRotateY;
    }

    
    posx = window.innerWidth/2 - leftright * 10000;
    posy = window.innerHeight/2 + updown * 10000/2;

    that.avgx = posx*0.99 + that.avgx*0.01;
    that.avgy = posy*0.99 + that.avgy*0.01;

    document.getElementById("pointer").innerHTML = ""+leftright+"<br/>"+updown;


    // to prevent a glitchy experience when a head rotation is right between two values,
    // set the moment when pointer goes to new grid location and wait 0.1 seconds
    // until the pointer is allowed to move to new position

    // const d = new Date();
    // let seconds = d.getSeconds();

    // if (that.moment <  seconds-0.1) {
    
    //   if (that.avgx != that.lastposx || that.avgy != that.lastposy) {
    //     that.moment=  seconds;

    //     gridSize = window.innerWidth/14;

    //     posx = Math.floor(that.avgx/gridSize)*gridSize;
    //     posy = Math.floor(that.avgy/gridSize)*gridSize;

    //     // document.getElementById("pointer").style.top=""+posy+"px";
    //     // document.getElementById("pointer").style.left=""+posx+"px";
    //   } 
    // }

  } 

  HeadControls.init({
    canvasId: canvasId,
    callbackMove: callbackMove,
    callbackReady: function(errCode){
      if (errCode){
      console.log('ERROR: THREE.HeadControls NOT READY. errCode =', errCode);
      } else {
      console.log('INFO: THREE.HeadControls ARE READY :)');
      HeadControls.toggle(true);
      }
    },
    NNCPath: NNCPath,
    animateDelay: 2 //avoid DOM lags
  }); //end HeadControls.init params
}