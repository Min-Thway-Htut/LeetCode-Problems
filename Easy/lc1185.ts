function dayOfTheWeek(day: number, month: number, year: number): string {
    if (month < 3) {
        month += 12;
        year -= 1;
    }

    // Extract century and year parts
    const K = year % 100;  // Year within century
    const J = Math.floor(year / 100);  // Century part

    // Zeller's Congruence formula
    const f = day + Math.floor((13 * (month + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + (5 * J);
    const dayIndex = f % 7;

    // List of days starting from Saturday as 0
    const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return daysOfWeek[dayIndex];
};