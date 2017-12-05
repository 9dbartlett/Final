function Device(t,ma,c){
    this.state="off";
    this.type=t;
    this.milliamps=ma;
    this.capacity=c;
    this.juice=1;
    this.rate=[0.015,0.0235,0.25]
}
this.on=function(){
    if(this.state=="off"&&this.juice>0){
        this.state="idle";
    }
}
this.wake=function(){
    if(this.state == "idle"){
        this.state = "active";
    }
}
this.off=function(){
    if(this.state == "active"){
        this.state = "off";
    }
    if(this.state == "idle";){
        this.state = "off";
    }
}
this.sleep=function(){
    if(this.state == "active"){
        this.state = "idle";
    }
}
