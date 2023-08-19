let ageyour = prompt(`Який у Вас рік народження?`, `Введіть свій рік народження`);
let cityyour = prompt(`У якому місті ви живете?`, `Введіть своє місто`);
let sportsyour = prompt(`Який Ваш улюблений вид спорту?`, `Введіть вид спорту`);

currentDate = new Date();
currentYear = currentDate.getFullYear();

if (ageyour === null) {
    ageyour = `Шкода що ви не захотіли вводити свій рік народження`;
}
else {
    ageyour = currentYear - ageyour;
    ageyour = `Тобі ${ageyour} років`;
}
ageyour = ageyour;

if (cityyour === null) {
    cityyour = `Шкода що ви не захотіли вводити своє місто`;
}
else if (cityyour == `Київ`) {
    cityyour = `Ти живеш у столиці України`;
}
else if (cityyour == `Вашингтон`) {
    cityyour = `Ти живеш у столиці США`;
}
else if (cityyour == `Лондон`) {
    cityyour = `Ти живеш у столиці Англії`;
}
else {
    cityyour = `Ти живеш у місті ${cityyour}`;
}
cityyour = cityyour;

switch (sportsyour) {
    case `Бокс`:
        sportsyour = `Класс, хочеш стати як Тайсон`;
        break;
    case `Футбол`:
        sportsyour = `Класс, хочеш стати як Мессі`;
        break;
    case `Баскетбол`:
        sportsyour = `Класс, хочеш стати як Майкл Джордан`;
        break;
    case null:
        sportsyour = `Шкода що ви не захотіли ввести назву свого улюбленого виду спорту`;
        break;
    default:
        sportsyour = `Твій улюблений вид спорту ${sportsyour}`;
        break;
}
alert(`${ageyour}\n${cityyour}\n${sportsyour}`);