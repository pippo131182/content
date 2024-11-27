const holidays = {
    "2024-12-31": "Tahun Baru Masehi",
    "2025-01-26": "Isra Mi'raj",
    "2025-01-28": "Hari Raya Imlek",
    "2025-03-28": "Hari Raya Nyepi",
    "2025-03-31": "Hari Raya Idul Fitri 1446 H",
    "2025-04-17": "Wafat Isa Almasih",
    "2025-04-30": "Hari Buruh",
    "2025-05-11": "Hari Raya Waisak 2569",
    "2025-05-28": "Kenaikan Isa Almasih",
    "2025-05-31": "Hari Lahir Pancasila",
    "2025-06-05": "Hari Raya Idul Adha",
    "2025-06-26": "Tahun Baru Islam",
    "2025-08-16": "Hari Kemerdekaan Indonesia",
    "2025-09-04": "Maulid Nabi",
    "2025-12-24": "Hari Raya Natal",
};

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

function generateCalendar(year) {
    const container = document.getElementById("calendar-container");

    months.forEach((month, monthIndex) => {
        const monthDiv = document.createElement("div");
        monthDiv.classList.add("calendar-month");

        const title = document.createElement("h2");
        title.textContent = `${month} ${year}`;
        monthDiv.appendChild(title);

        const grid = document.createElement("div");
        grid.classList.add("calendar-grid");

        // Add day headers
        days.forEach(day => {
            const dayHeader = document.createElement("div");
            dayHeader.textContent = day;
            dayHeader.classList.add("day-header");
            grid.appendChild(dayHeader);
        });

        // Add days
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const totalDays = new Date(year, monthIndex + 1, 0).getDate();

        // Fill empty cells for first week
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            grid.appendChild(emptyCell);
        }

        // Fill days
        const holidayDescriptions = [];
        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(year, monthIndex, day);
            const dateString = date.toISOString().split("T")[0];

            const dayCell = document.createElement("div");
            dayCell.textContent = day;

            if (holidays[dateString]) {
                dayCell.classList.add("holiday");
                holidayDescriptions.push(`${day} ${month}: ${holidays[dateString]}`);
                dayCell.title = holidays[dateString];
            }

            grid.appendChild(dayCell);
        }

        monthDiv.appendChild(grid);

        // Add holiday descriptions
        if (holidayDescriptions.length > 0) {
            const holidayDescDiv = document.createElement("div");
            holidayDescDiv.classList.add("holiday-desc");
            holidayDescDiv.innerHTML = holidayDescriptions.join("<br>");
            monthDiv.appendChild(holidayDescDiv);
        }

        container.appendChild(monthDiv);
    });
}

// Generate calendar for 2025
generateCalendar(2025);
