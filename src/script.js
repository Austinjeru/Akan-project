function generateName() {
    const day = document.getElementById('day').value;
    const gender = document.getElementById('gender').value;

    const names = {
        1: { male: "Kwasi", female: "Akosua" }, // Sunday
        2: { male: "Kwadwo", female: "Adwoa" }, // Monday
        3: { male: "Kwabena", female: "Abena" }, // Tuesday
        4: { male: "Kwaku", female: "Akua" }, // Wednesday
        5: { male: "Yaw", female: "Yaa" },  // Thursday
        6: { male: "Kofi", female: "Afia" },  // Friday
        7: { male: "Kwame", female: "Ama" } // Saturday
    };

    const name = names[day][gender];
    document.getElementById('result').innerText = `Your Akan name is: ${name}`;
}