var bumbo = document.getElementById('bumbo'),
chimbal = document.getElementById('chimbal'),
caixa = document.getElementById('caixa'),
tom1 = document.getElementById('tom1'),//Buscar os sons de cada parte da bateria;
tom2 = document.getElementById('tom2'),
surdo = document.getElementById('surdo'),
conducao = document.getElementById('conducao');


document.querySelector('body').addEventListener('keypress',(e)=>{//conforme o numero teclado pelo usuario o som é emitido;
    switch (e.key) {
        case '1':
            bumbo.play();
            bumbo.currentTime = 0;
            break;
        case '2':
            chimbal.play();
            chimbal.currentTime = 0;
        case '3':
            caixa.play();
            caixa.currentTime = 0;
        case '4':
            tom1.play();
            tom1.currentTime = 0;
            break;
        case '5':
            tom2.play();
            tom2.currentTime = 0;
            break;
        case'6':
            surdo.play();
            surdo.currentTime = 0;
            break;
        case '7':
            conducao.play();
            conducao.currentTime = 0;
            break;
        default:
            break;
    }
});

function tocar(value){// abilita a mesma função anterior para os textos mostrados na tela que agora tem função onClick()/
    let values = value.innerHTML;//passando como parametro o texto nos spans
    switch (values) {
        case 'Bumbo':
            bumbo.play();
            bumbo.currentTime = 0;
            break;
        case 'Chimbal':
            chimbal.play();
            chimbal.currentTime = 0;
        case 'Caixa':
            caixa.play();
            caixa.currentTime = 0;
        case 'Tom1':
            tom1.play();
            tom1.currentTime = 0;
            break;
        case 'Tom2':
            tom2.play();
            tom2.currentTime = 0;
            break;
        case'Surdo':
            surdo.play();
            surdo.currentTime = 0;
            break;
        case 'Condução':
            conducao.play();
            conducao.currentTime = 0;
            break;
        default:
            break;
    }
}