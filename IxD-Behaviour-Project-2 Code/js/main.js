
let result =document.getElementById("result");
let your =document.getElementById("your"); 
let heads =document.getElementById("heads");  
let tails =document.getElementById("tails");  


 document.getElementById("heads").onclick = function () {
  
   let heads = result;
    setTimeout(function() {
   your.innerHTML = ("You Chose Heads");
      }, 100);

  setTimeout(function() {
   result.innerHTML = ("The Emperor Chose Tails");
   }, 1000);
   

  let coin1 = true;
  let coin2 = false;
   let ans = [coin1, coin2];
  let n = Math.floor(Math.random() * 2);
  
   if (ans[n]) {

     setTimeout(function() {
     con.innerHTML = ("you won");
       }, 2000);
       
     let coinholder =document.getElementById("coinholder");

     setTimeout(function() {
     coinholder.innerHTML = "<img src=../img/coin2.png>";
       }, 2000);
     
     
    let chat =document.getElementById("chat");
     let emp =document.getElementById("emp");
     

      let npic = Math.floor(Math.random() * 4);
     
          let los = ["<img src=../img/frust.png>",
                     "<img src=../img/angry.png>",
                    "<img src=../img/gasp.png>",
                      "<img src=../img/quest.png>"];
     
     setTimeout(function() {
     emp.innerHTML = (los[npic]);
       }, 3000);
     
   let n2 = Math.floor(Math.random() * 5);
     let cry = [("Noo!!! Why Gods!"),
                ("You just got Lucky!"),
                ("Ughhh! I will throw you in the colosseum                                 for this!"),
                ("Tell me young one, What sorcery did you                                  use?"),
               ("This was definitely rigged like elections in                             ancient Rome.")];

      setTimeout(function() {
       chat.innerHTML = (cry[n2]);
        }, 3000);
   }

     
   else {
     setTimeout(function() {
    con.innerHTML = ("you lost");
       }, 2000);
     
     let coinholder =document.getElementById("coinholder");

     setTimeout(function() {
     coinholder.innerHTML = "<img src=../img/coin.png>";
       }, 2000);
     
     let chat =document.getElementById("chat");
     let emp =document.getElementById("emp");

      let npic = Math.floor(Math.random() * 4);
     
          let los = ["<img src=../img/glad.png>",
                     "<img src=../img/wink.png>",
                    "<img src=../img/prev.png>",
                    "<img src=../img/closed.png>"];
     
     setTimeout(function() {
     emp.innerHTML = (los[npic]);
       }, 3000);
     
   let n3 = Math.floor(Math.random() * 5);
     let boast = [("I’m too good at this!"),
                  ("Aa Ha! Luck is on my side"), 
                  ("I guess the Gods favour me more"),
                  ("Tough luck"), 
                  ("No surprise I won. I was filthy rich ")];

     setTimeout(function() {
       chat.innerHTML = (boast[n3]);
       }, 3000);
   }
 
 }

 document.getElementById("tails").onclick = function () {
   
      let tails = result;
   
   setTimeout(function() {
   your.innerHTML = ("You Chose Tails");
     }, 100);

   setTimeout(function() {
   result.innerHTML = ("The Emperor Chose Heads");
     }, 1000);

  
  let coin1 = false;
  let coin2 = true;
   let ans = [coin1, coin2];
  let n = Math.floor(Math.random() * 2);
  
  
   
   if (ans[n]) {
     
     setTimeout(function() {
     con.innerHTML = ("you won");
       }, 2000);
     
       let coinholder =document.getElementById("coinholder");

      setTimeout(function() {
     coinholder.innerHTML = "<img src=../img/coin.png>";
     }, 2000);
     

    let chat =document.getElementById("chat");
   let n3 = Math.floor(Math.random() * 5);
     let cry = [("Noo!!! Why Gods!"),
                ("You just got Lucky!"),
                ("Ughhh! I will throw you in the colosseum                                   for this!"),
                ("You won because I have no hands"),
               ("Impossible I never lose!")];
     
     let emp =document.getElementById("emp");
      let npic = Math.floor(Math.random() * 4);
     
          let los = ["<img src=../img/frust.png>",
                     "<img src=../img/angry.png>",
                    "<img src=../img/gasp.png>",
                      "<img src=../img/quest.png>"];

      setTimeout(function() {
     emp.innerHTML = (los[npic]);
         }, 3000);

     setTimeout(function() {
       chat.innerHTML = (cry[n3]);
       }, 3000);
       
   }
   else {

     setTimeout(function() {
    con.innerHTML = ("you Lost");
       }, 2000);
       
       let coinholder =document.getElementById("coinholder");

      setTimeout(function() {
     coinholder.innerHTML = "<img src=../img/coin2.png>";
        }, 2000);
     

      let chat =document.getElementById("chat");
   let n4 = Math.floor(Math.random() * 5);
     let cry = [("I’m too good at this!"),
                  ("Aa Ha! Luck is on my side"), 
                  ("I guess the Gods favour me more"),
                  ("Wow, I was handsome when I was alive"), 
                  ("Good Heavens, you’re worse than my                                       friend Julius Cesar ")];

let emp =document.getElementById("emp");

      let npic = Math.floor(Math.random() * 4);
     
          let los = ["<img src=../img/glad.png>",
                     "<img src=../img/wink.png>",
                    "<img src=../img/prev.png>",
                    "<img src=../img/closed.png>"];

      setTimeout(function() {
     emp.innerHTML = (los[npic]);
        }, 3000);

         setTimeout(function() {
       chat.innerHTML = (cry[n4]);
           }, 3000);
   }
   
   
  
 }



















