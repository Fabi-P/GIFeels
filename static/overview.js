document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days');
    const monthYearDisplay = document.getElementById('monthYear');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Get the first day of the month and the total number of days in the month
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Set the month and year in the header
        monthYearDisplay.textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        // Clear the previous days
        daysContainer.innerHTML = '';

        // Fill in the days of the month
        // Add empty divs for the days of the week before the start of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            daysContainer.appendChild(emptyDiv);
        }

        // Add the actual days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            const link = document.createElement('a');
            link.textContent = day;
            link.href = `/archive/${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            dayDiv.appendChild(link);
            daysContainer.appendChild(dayDiv);
        }
    }

    function renderGraph(date) {
        $(document).ready(function(){
        $.ajax({
          data : {
            month : date,
          },
          type : 'POST',
          url : '/'})
        .done (function(data){
        theChart.data.datasets[0].data = data.output;
        theChart.options.title.text = data.label;
        theChart.update();
            });
        e.preventDefault();
        });
    };

    function changeMonth(delta) {
        currentDate.setMonth(currentDate.getMonth() + delta);
        renderCalendar();
        renderGraph(currentDate);
    }

    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));

    // Function to make AJAX request for data based on selected month
    function fetchDataForMonthYear(month, year) {
        $.ajax({
            type: 'POST',
            url: '/overview',
            contentType: 'application/json',
            data: JSON.stringify({
                month: month,
                year: year
            }),
            success: function(data) {
                // Update the calendar and stats based on the fetched data
                console.log(data); // Just for testing, replace with actual logic
                
                // Update currentDate to the selected month and year
                currentDate = new Date(year, month - 1); // month - 1 because months are 0-indexed in JS

                // Re-render the calendar
                renderCalendar();
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }

    renderCalendar();

    renderGraph();

    // Initial AJAX request for the current month
    fetchDataForMonthYear(currentDate.getMonth() + 1, currentDate.getFullYear());

    // Bind form submission to fetch data
    $('#form').on('submit', function(e) {
        e.preventDefault();
        const selectedMonth = new Date($('#month').val());
        fetchDataForMonthYear(selectedMonth.getMonth() + 1, selectedMonth.getFullYear());
    });
});
