var request=require("request"),PF=require("./pathsolver.js"),axios=require("axios")
request("http://mazeretreat.azurewebsites.net/mazes/09a655dd-6cbd-4793-89cf-604d2b0a8330",function(e,t,a){var r=JSON.parse(a).split("\r\n"),n=[],o=[],s=r.map(function(e,t){return e.split("").map(function(e,a){return"#"===e?1:("S"===e&&(n=[a,t]),"F"===e&&(o=[a,t]),0)})})
console.log(s)
var i=new PF.Grid(s),u=new PF.AStarFinder,d=u.findPath(n[0],n[1],o[0],o[1],i),c=d.map(function(e){return e.join(",")}).join(";"),l={TeamName:"Robin en Yassine",MazeId:"09a655dd-6cbd-4793-89cf-604d2b0a8330",Solution:c}
axios["default"].post("http://mazeretreat.azurewebsites.net/solutions/09a655dd-6cbd-4793-89cf-604d2b0a8330",l).then(console.log,console.log)})
