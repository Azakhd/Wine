let indexPrev = 0;
let Prev = document.querySelector('.Prev');
const Merlot1 = document.querySelector('.Merlot1');
const Merlot2 = document.querySelector('.Merlot2');
const Merlot3 = document.querySelector('.Merlot3');
function PR() {
   indexNext = 0
   indexPrev = ++indexPrev
   console.log(indexPrev)
   if (indexPrev == 1) {
      Merlot1.style.opacity = "1"
      Merlot1.style.transform = "translate(274px, 0px)"
      Merlot2.style.opacity = "0"
      Merlot2.style.transform = "translate(117px, 0px)"
      Merlot3.style.transform = "translate(-405px, 0px)"
      indexNext = 2
   }
   if (indexPrev == 2) {
      Merlot3.style.opacity = "1"
      Merlot3.style.transform = "translate(-286px, 0px)"
      Merlot1.style.opacity = "0"
      Merlot1.style.transform = "translate(389px, 0px)"
      Merlot2.style.transform = "translate(-228px, 0px)"
      indexNext = 1
   }
   if (indexPrev == 3) {
      indexPrev = 0
      Merlot3.style.opacity = "0"
      Merlot3.style.transform = "translate(-133px, 0px)"
      Merlot2.style.transform = "translate(0px, 0px)"
      Merlot1.style.transform = "translate(146px, 0px)"
      Merlot2.style.opacity = "1"
   }
}
let Next = document.querySelector('.Next');
let indexNext = 0;
function NT() {
   indexPrev = 0
   ++indexNext
   console.log(indexNext)
   if (indexNext == 1) {
      Merlot3.style.opacity = "1"
      Merlot3.style.transform = "translate(-273px, 0px)"
      Merlot2.style.transform = "translate(-138px, 0px)"
      Merlot2.style.opacity = "0"
      Merlot1.style.transform = "translate(459px, 0px)"
      indexPrev = 2
   }
   if (indexNext == 2) {
      Merlot2.style.transform = "translate(200px, 0px)"
      Merlot1.style.transform = "translate(274px, 0px)"
      Merlot3.style.transform = "translate(-405px, 0px)"
      Merlot1.style.opacity = "1"
      Merlot3.style.opacity = "0"
      indexPrev = 1

   }
   if (indexNext == 3) {
      indexNext = 0
      Merlot2.style.opacity = "1"
      Merlot1.style.opacity = "0"
      Merlot3.style.transform = "translate(-104px, 0px)"
      Merlot2.style.transform = "translate(0px, 0px)"
      Merlot1.style.transform = "translate(146px, 0px)"
   }
}


