class CustomMath{
    constructor(digit){
      this.digit=digit;
    }
    add=(num)=>{
      this.digit+=num;
      return this;
    }
    multiply=(num)=>{
      this.digit*=num;
      return this;
    }
    subtract=(num)=>{
      this.digit-=num;
      return this;
    }
    division=(num)=>{
      this.digit/=num;
      return this;
    }
  }
  
  const customMath=new CustomMath(66);
  let result=customMath.add(66).multiply(66).subtract(501).division(501);
  console.log(result);
  
  
  Array.prototype.customFilter=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
     if(cb(this[i])){
       temp.push(this[i])
     }
    }
    return temp;
  };
  let resultt=[1,2,3,4,5,6,-6].customFilter(value=>value>=0);
  console.log(resultt);
  
  Array.prototype.customMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
     temp.push(cb(this[i])) ;  
    }
    return temp;
  }
  let result2=[1,2,3,4,5,6].customMap(val=>val*10);
  console.log(result2);
  
  Array.prototype.customIndexOf=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
      if(cb(this[i])){
      console.log(i);
      break;
      }
    }
  }
  let result3=[1,66,3,4,5,6,66,66,66].customIndexOf(val=>val==66);
  /////////////////////////////////////////////////////////////////
  
  let digit=501;
  
  Number.prototype.customAdd=function(cb,digit){
   return cb(this);
  };
  
  let resultCalc=(501).customAdd(val=>val+ digit);
  console.log(resultCalc);