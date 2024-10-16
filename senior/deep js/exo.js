if(!Object.is||true){
    Object.is=function ObjectIs(a,b){
        var a1=isnegative0(a);
        var b1=isnegative0(b);
        if(a1||b1){
            return a1&&b1;
        }
        else if(isNAn(a)&&isNAn(b)){
            return true;
        }else{
            return a===b;
        }
        function isnegative0(v){
            return v==0 && (1/v)==-Infinity;
        }
        function isNAn(v){
            return v!==v;
        }

    }
}
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
console.log(NaN==NaN);