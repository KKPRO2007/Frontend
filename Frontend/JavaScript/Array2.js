const a = [1, 2, 3, 4, 5];
 const lastvalue=a.pop();
 console.log(lastvalue);
 console.log(a);
 const ui=a.push(65);
    console.log(a);
    const shiftvalue=a.shift();
    console.log(a);
    const unshiftvalue=a.unshift(99);
    console.log(a);
    const a2=a.concat([7,8,9]);
    console.log(a2);
    console.log(a);

    const  k= function(){
        return "i";
    };

    const printer = function(fu){
        console.log(fu());
}
printer(k);