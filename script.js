const horas = document.getElementById('horas'); /*Está variavel serve para pegar o ID do Span de horas */
const minutos = document.getElementById('minutos');/*Está variavel serve para pegar o ID do Span de Minutos */
const segundos = document.getElementById('segundos');/*Está variavel serve para pegar o ID do Span de Segundos */

const relogio = setInterval(function time() {
    let dateToday = new Date(); /*está variavel vai ser o objeto usado para  definir o dia de hoje e apartir da data de hoje, pegar as horas, minutos e segundos, como foi feito nas variaveis a baixo*/
    let hr = dateToday.getHours(); /* está variavel pega a hora de hoje a partir da CONST: dateToday usando o getHours*/
    let min = dateToday.getMinutes();/* está variavel pega os minutos de hoje a partir da CONST: dateToday usando o getMinutes*/
    let s = dateToday.getSeconds();/* está variavel pega os segundos de hoje a partir da CONST: dateToday usando o getSeconds*/

    if (hr < 10) hr = '0' + hr; /* se a Hora For menor que 10 adiciona um 0 usando o operador aritimetico '+' */

    if (min < 10) min = '0' + min; /* se os Minutos Forem menor que 10 adiciona um 0 usando o operador aritimetico '+' */

    if (s < 10) s = '0' + s; /* se os segundos Forem menor que 10 adiciona um 0 usando o operador aritimetico '+' */

    horas.textContent = hr;  /*Pega o ID Horas do HTML e muda o Texto atraves da propriedade: textContent, atribundo o valor da variavel 'hr' (Em tempo Real) */
    minutos.textContent = min;/*Pega o ID Minutos do HTML e muda o Texto atraves da propriedade: textContent, atribundo o valor da variavel 'min' (Em tempo Real) */
    segundos.textContent = s;/*Pega o ID Horas do HTML e muda o Texto atraves da propriedade: textContent, atribundo o valor da variavel 's' (Em tempo Real) */

})