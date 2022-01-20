console.log(getDayOfWeek(1));
console.log(getDayOfWeek(2));
console.log(getDayOfWeek(8));
console.log(getDayOfWeek('err'));

function getDayOfWeek(num) {
    const weekMap = {
        1: 'Воскресенье',
        2: 'Понедельник',
        3: 'Вторник',
        4: 'Среда',
        5: 'Четверг',
        6: 'Пятница',
        7: 'Суббота'
    };

    if (num === 0 || num > 7) throw new Error('parameter chloud be in range of 1 to 7'); 
    if (typeof num !== 'number') throw new Error('parameter type is not Number'); 

    return weekMap[num];
}