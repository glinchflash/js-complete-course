(function () {
    const btnRun = document.getElementById('run');
    let date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const targetday = 13;
    let input = document.getElementById('year');
    btnRun.addEventListener('click', calc);



    function calc() {


        let input2 = input.value;


        let monthsWithf13 = [];

        date.setFullYear(input2);

        date.setDate(targetday);
        for (month = 0; month < months.length; month++) {

            date.setMonth(month)

            if (date.getDay() === 5) {
                monthsWithf13.push(months[month])
            }
        }

        let result = "In " + input2 + ": " ;

        for (i = 0; i < monthsWithf13.length; i++) {

            result += monthsWithf13[i] + ",";
        }
        if (monthsWithf13.length > 1) {
            result += " have a friday the 13th";
        }else{
            result += " has a friday the 13th";
        }
        alert(result);
    }
})();