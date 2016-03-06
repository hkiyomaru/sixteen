var failure = 0;
var mic = new Wit.Microphone(document.getElementById("microphone"));
var info = function (msg) {
  document.getElementById("info").innerHTML = msg;
};
var error = function (msg) {
  document.getElementById("error").innerHTML = msg;
};
mic.onready = function () {
  info("");
  //info("Click microphone and answer the question!");
};
mic.onaudiostart = function () {
  info("Recording started...");
  document.getElementById("result").innerHTML = "";
  error("");
};
mic.onaudioend = function () {
  info("Recording stopped, processing started...");
};
  mic.onerror = function (err) {
      error("現在マイクによる音声認識ができません");
      var btn = document.getElementById("answer-btn");
      btn.style.visibility = "";
  };
  mic.onconnecting = function () {
      info("Microphone is connecting");
  };
  mic.ondisconnected = function () {
      info("");
	  error("現在マイクによる音声認識ができません");
      var btn = document.getElementById("answer-btn");
      btn.style.visibility = "";
  };
  mic.connect("UYJEYSAXFYXBDGFLX7YJ3ZOWQ4AUQJLP");  //CLIENT_TOKEN
  // mic.start();
  // mic.stop();
  function kv (k, v) {
      if (toString.call(v) !== "[object String]") {
           v = JSON.stringify(v);
       }
      return k + v + "\n";
   }
