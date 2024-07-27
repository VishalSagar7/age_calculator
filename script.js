document.addEventListener('DOMContentLoaded', function () {

    let inputDiv = document.querySelector('.date-input');
    let calbtn = document.querySelector('button');
    let yearsDiv = document.querySelector('.years-div h1');
    let monthsDiv = document.querySelector('.months-div h1');
    let daysDiv = document.querySelector('.days-div h1');

    calbtn.addEventListener('click', function () {
   
        let selectedDate = new Date(inputDiv.value);
        
        if (isNaN(selectedDate.getTime())) {
            alert('Please select a valid date.');
            return;
        }

        let today = new Date();
        let birthDate = new Date(selectedDate);
        
        let yearsDiff = today.getFullYear() - birthDate.getFullYear();
        let monthsDiff = today.getMonth() - birthDate.getMonth();
        let daysDiff = today.getDate() - birthDate.getDate();

        if (daysDiff < 0) {
            monthsDiff--;
            daysDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (monthsDiff < 0) {
            yearsDiff--;
            monthsDiff += 12;
        }
        yearsDiv.textContent = yearsDiff;
        monthsDiv.textContent = monthsDiff;
        daysDiv.textContent = daysDiff;
    });
});
