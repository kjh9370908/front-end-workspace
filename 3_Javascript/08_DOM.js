function btn1() {
  console.log(document.head);
  console.log(document.baby);

  //동일한 태그가 여려개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]); // <div>Hello, world!</div>
  console.log(div[1]); // <div>Hello, JavaScript!</div>
}

function btn2() {
  const div = document.getElementById("testId");
  console.log(div);
}

function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여려개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByClassName("testClass");
  console.log(div);
}

function btn4() {
  // 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div);
}

function btn5() {
  let div = document.querySelector("#testId2");
  console.log(div);
  div = document.querySelectorAll("div");
  console.log(div);
  console.log(div[0]);
}

function btn6() {
  const div = document.querySelectorAll("testClass");
  div[0].textContent = "안녕하세요";
  div[1].innerHTML = "<span>안녕하세요</span>";
}

function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribure("data-test", "테스트");
  div.setAttribure("data-test", "테스트2");
  console.log(div.getAttribute("data=test"));
}

function btn8() {
  const div = document.querySelector("#testid");
  div.style.color = "orenge";
  div.style.color = "yellow";
}

const div = document.querySelector("#testid2");

function btn9() {
  div.classList.add("black");
  console.log(div);
}
function btn10() {
  div.classList.remove("black");
}
function btn11() {
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}
function btn12() {
  div.classList.toggle("black");
}

function btn13() {
  const div = document.querySelector("#testId3");
  // <p>Lorem Ipsum</p>
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";

  //div에 만든 p태그 추가
  div.appendChild(p);
}

function btn14() {
  const div = document.querySelector("#testId3");
  const p = document.querySelector("p");
  // div.removeChild(p);
  p.parentNode.removeChild(p);
}
