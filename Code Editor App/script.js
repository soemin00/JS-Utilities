function run(){
	const htmlCode = document.getElementById("html-code").value;
	const cssCode = document.getElementById("css-code").value;
	const jsCode = document.getElementById("js-code").value;
	const outputCode = document.getElementById("output");
	outputCode.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
	outputCode.contentWindow.eval(jsCode);
}
