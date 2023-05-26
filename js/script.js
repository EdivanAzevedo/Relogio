const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let day = dateToday.getDate();
    let month = dateToday.getMonth();
    let year = dateToday.getFullYear();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (s < 10) s = "0" + s;
    if (day < 10) day = "0" + day;

    document.title = " Relógio Digital - " + hr + ":" + min + ":" + s;

    mes.textContent = getMonthString(month);
    ano.textContent = year;
    dia.textContent = day;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000);

function getMonthString(month) {
    let monthString;
    switch (month) {
        case 0:
            monthString = "Janeiro";
            break;
        case 1:
            monthString = "Fevereiro";
            break;
        case 2:
            monthString = "Março";
            break;
        case 3:
            monthString = "Abril";
            break;
        case 4:
            monthString = "Maio";
            break;
        case 5:
            monthString = "Junho";
            break;
        case 6:
            monthString = "Julho";
            break;
        case 7:
            monthString = "Agosto";
            break;
        case 8:
            monthString = "Setembro";
            break;
        case 9:
            monthString = "Outubro";
            break;
        case 10:
            monthString = "Novembro";
            break;
        case 11:
            monthString = "Dezembro";
            break;
        default:
            monthString = "";
            break;
    }
    return monthString;
}
