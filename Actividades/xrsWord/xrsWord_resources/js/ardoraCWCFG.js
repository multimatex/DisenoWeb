//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="eHJzV29yZA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","Sg","","","","","","","",""],["","QQ","Uw","SQ","RA","RQ","","","",""],["","Vg","","","","TA","","","",""],["","QQ","","","","Qw","","","",""],["","Uw","RQ","Qw","VA","SQ","Tw","Tg","",""],["","Qw","Uw","Uw","","VA","","","",""],["","Ug","","","","Ug","","","",""],["","SQ","TQ","Rw","","QQ","","","",""],["","UA","","","","","","","",""],["SA","VA","TQ","TA","","","","","",""]];
var x1=[2,3,4,2,2,2,2,1,6];
var y1=[1,5,5,2,5,6,8,10,2];
var x2=[2,3,4,6,8,4,4,4,6];
var y2=[10,6,6,2,5,6,8,10,8];
var imaCW=["","","","","","","","",""];
var audioCW=["","","","","","","","",""];
var defCW=["Lenguaje de programacon e interactividad web sus siglas son JS","","","Etiqueta que se usa para indicar seccion que esta al lado de un article o section","etiqueta que se usa para definir una seccion de la pagina web","abreviatura del lenguaje de estilos en cascada","etiqueta html que se usa para insertar una imagen","siglas de lenguaje de marcado de hyper texto","Etiqueta de html que se usa para indicar un articulo"];
var colNum=10;
var rowNum=10;
