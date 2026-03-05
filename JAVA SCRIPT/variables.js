// var/let/const
// let and const ES6
var table_name="employees";
var sal = 5000; 
var sql_query = `select * from ${table_name} where esal >${sal}`;
console.log(sql_query);
var fromt_end='angilar13';
var bcknd="nodejs";
var database= "mongodb";
var meantime_stack=`
                    MEAN STACK
                    *********

                    mean stack development mwans collabration 
                    Frontend--->${fromt_end}

                    bcknd------>${bcknd}
                    database--->${database}

`;
console.log(mean_stack);
//hexadecimal prefix with "0x"
//octal.......... with "0o"
// binaary........ with '0b'
var decimal_num= 100;
var frac_num= 100.1234;
var hexdecimal=0x123ABC;
var binary_num=0b1010;
console.log(decimal_num,frac_num,hexdecimal,binary_num);
//array
//colletion of indexed elements called as  array
var arr1=[10,20,30,40];
for (var i=0; i<5;i++){
    console.log(arr1[i]);
}



//typeoff
console.log(typeof "hello");
console.log(typeof 100);
console.log(typeof undefined);  
console.log(typeof null);
console.log(typeof []);
console.log(typeof function(){});


//evalution happens from left to right (jsqvascript)
console.log(10>9>8);


//biginit
var large =1281752186128175218612817521861281752186128175218612817521861281752186128175218612817521861281752186128175218612817521861281752186n;
console.log(large);

//symbol
//to probvode security to data then we need to go for this fata type
var secured = symbol("Hello");
console.log(secured);