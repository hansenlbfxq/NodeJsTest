var http = require("http"); 
var URL = require("url");

http.createServer(function(request, response) { 

var p = URL.parse(request.url); 
var path=p.pathname;
console.log("path:"+path);

switch (path) {
      case '/load':
		  console.log("load");
          response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"}); 
		  response.write("<html>"); 
		  response.write("<body>test</body>");
		  response.write("</html>"); 
		  response.end(); 
          break; 
      default:
		  console.log("other");
		  response.writeHead(200, {"Content-Type": "text/json"}); 
	      response.write('{"resulet":"false"}');
		  response.end(); 
          break; 
 }


}).listen(8899); 
console.log("nodejs start listen 8899 port!");