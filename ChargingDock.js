//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]; //finish from instr
    this.leds = ["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
        for(let p=0;p<=8;p++){
          if (this.ports[p] == "red"){
          }
        }
        if (this.juice > .99){
          this.leds[p] = "green";
        }
        if (this.juice < .99){
          this.leds[p] = "yellow";
        }
    };

    this.unplug = function(dvcIdx){
        for(d=0; d<=this.leds.length; d++){
          if(this.ports[d] == "yellow" || "green"){

          }
        }
    };

    this.chargeAll = function(min){
        for(let c=0;c<=8;c++){
          if(this.leds[c] == "yellow" || "green")
        }
    };


}

//defines the testing code
function main(){}

//runs the main code
main();
