// Додано const та знак дорівнює
const students = [
  {name: "Іван", age: 17, grade: 85},
  {name: "Вова", age: 19, grade: 90},
  {name: "Кіріл", age: 16, grade: 78}
];

console.log("Всі студенти:");
students.forEach(student => {
  console.log(`Ім'я: ${student.name}, Вік: ${student.age}, Оцінка: ${student.grade}`);
}); // Додано закриваючу дужку )

const topStudent = students.reduce((prev, current) => {
  // Прибрано зайву дужку після return та зайву крапку з комою
  return prev.grade > current.grade ? prev : current;
});

console.log("\n Студент з кращою оцінкою:"); // Виправлено /n на \n
console.log({name: topStudent.name, grade: topStudent.grade});

const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageGrade = totalGrade / students.length;

console.log("\n Статистика групи:");
console.log("Середній бал: " + averageGrade.toFixed(1));