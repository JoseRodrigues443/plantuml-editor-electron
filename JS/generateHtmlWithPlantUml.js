function writetoFile(var plantUmlText, var filePath){
	var fs = require('fs');
	try { fs.writeFileSync(filePath, plantUmlText, 'utf-8'); }
	catch(e) { alert('Failed to save the file !'); }
}

function alterHtml(var plantUmlText, var filePath){
	
	
	
}
