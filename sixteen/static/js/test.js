var questionNo = 0;
var score = 0;
title = document.getElementById("modal-title");
qbody = document.getElementById("qbody");
ans1 = document.getElementById("ans1");
ans2 = document.getElementById("ans2");

function StartPretest() {
	if (questionNo < 4){
		SetQuestion();
		jQuery('.modal').modal('show');
	}else{
		jQuery('.modal').modal('show');
	}
}

function NextQuestion(ans) {
	CheckAnswer(ans);
	if (questionNo < 4){
		questionNo++;
		SetQuestion();
	}else{
		DisplayScore();
	}
}

function SetQuestion(){
    title.innerHTML = "Question" + (questionNo + 1);
	qbody.innerHTML = qa[questionNo][0];
	ans1.innerHTML = qa[questionNo][1];
	ans2.innerHTML = qa[questionNo][2];
}

function CheckAnswer(ans){
	if (qa[questionNo][3] == ans)
		score += 20;
}

function DisplayScore(){
	title.innerHTML = "Result  of  Test";
	qbody.innerHTML = "あなたの得点は" + score + "点でした！";
	qbody.style.fontSize = "180%";
	document.getElementById("ans").style.display = "none";
	document.getElementById("start_link").style.display = "";
}
