document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const summaryTable = document.getElementById('summary-table');
    const monthYearDisplay = document.getElementById('month-year');
    const prevButton = document.getElementById('prev-month');
    const nextButton = document.getElementById('next-month');

    let currentDate = new Date();

    // Get the workout history from local storage
    const videoHistory = JSON.parse(localStorage.getItem('videoHistory')) || {};

    // Ensure videoHistory is an object
    if (typeof videoHistory !== 'object' || videoHistory === null) {
        console.error('Video history is not an object');
    }

    // Get today's date
    const today = new Date().toISOString().split('T')[0];

    // Function to render the calendar
    function renderCalendar(date) {
        calendar.innerHTML = `
            <div class="calendar-header">Sun</div>
            <div class="calendar-header">Mon</div>
            <div class="calendar-header">Tue</div>
            <div class="calendar-header">Wed</div>
            <div class="calendar-header">Thu</div>
            <div class="calendar-header">Fri</div>
            <div class="calendar-header">Sat</div>
        `;

        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Update month and year display
        monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Render previous month's days if needed
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            calendar.appendChild(emptyCell);
        }

        // Render current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

            const dateElement = document.createElement('div');
            dateElement.className = 'calendar-day';
            dateElement.textContent = day;
            dateElement.dataset.date = dateString; // Add data-date attribute for identifying the date

            if (dateString === today) {
                dateElement.classList.add('highlight');
            }

            // Check if there is any workout data for this date
            if (videoHistory[dateString]) {
                dateElement.classList.add('workout-day');
            }

            calendar.appendChild(dateElement);
        }
    }

    // Function to format the duration as MM:SS
    function formatDuration(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    // Populate the workout summary table
    function populateSummaryTable(date) {
        summaryTable.innerHTML = ''; // Clear existing summary table

        if (videoHistory[date]) {
            const videoArray = Array.isArray(videoHistory[date]) ? videoHistory[date] : [];

            videoArray.forEach(video => {
                if (video && typeof video.name === 'string' && typeof video.duration === 'number') {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${date}</td>
                        <td>${video.name}</td>
                        <td>${formatDuration(video.duration)}</td>
                    `;
                    summaryTable.appendChild(row);
                } else {
                    console.error(`Invalid video data for ${date}:`, video);
                }
            });
        } else {
            // Optionally, show a message if no data for the selected date
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="3">No workout data for ${date}</td>`;
            summaryTable.appendChild(row);
        }
    }

    // Event listeners for month navigation
    prevButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Event listener for calendar day clicks
    calendar.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('calendar-day') && target.dataset.date) {
            const selectedDate = target.dataset.date;
            populateSummaryTable(selectedDate);
        }
    });

    // Initial render
    renderCalendar(currentDate);
    populateSummaryTable(today); // Show today's data initially
});
