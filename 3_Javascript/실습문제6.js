

function count() {
// 지금 현재 날짜와 비교해야 할 날짜
const now = new Date();

const second = Math.floor((last - now) / 1000); // 1초 = 밀리세컨드/1000
const minute = Math.floor(second/ 60); // 60초 = 1분
const hour = Math.floor(minute/ 60); 
const day = Math.floor(hour/ 24);

clock.innerHTML = `${day}일 ${hour % 24}시간 ${minute % 60}분 ${
    String(second % 60).padStart(2, "0")}초`
}

count();

setInterval(count, 1000); 





console.log(last - now); //밀리세컨드
 60초 = 1분 , 60분=1시간, 24시간=1일

function btn1() {
  const now = new Date("2024-05-13 10:13:");
  console.log(now);

  console.log("2024년 :", now.getFullYear());
  console.log("6월 :", now.getMonth() + 1);
  console.log("13일 :", now.getDate());
  console.log("10시 :", now.getHours());
}

function btn2() {
  const now = new Date("2025-01-01 00:00:00");
  console.log(last);

  console.log("2025년 :", now.getFullYear());
  console.log("1월 :", now.getMonth());
  console.log("1일 :", now.getDate());
  console.log("00시 :", now.getHours());
  console.log("00분 :", now.getMinutes);
  console.log("00초 :", now.getSeconds());
}
