function buttonclick(ans) {
  document.getElementById("screen").value =
    document.getElementById("screen").value + ans;
}
function buttonClear() {
  document.getElementById("screen").value = "";
}
function operation(y) {
  a = document.getElementById("screen").value;
  document.getElementById("screen").value = "";
  op = y;
}
function equalClick() {
  b = document.getElementById("screen").value;
  if (op == "+") {
    e = eval(a) + eval(b);
  } else if (op == "-") {
    e = eval(a) - eval(b);
  } else if (op == "*") {
    e = eval(a) * eval(b);
  } else if (op == "/") {
    e = eval(a) / eval(b);
  } else {
    e = (eval(a) * eval(b)) / 100;
  }
  document.getElementById("screen").value = e;
}
