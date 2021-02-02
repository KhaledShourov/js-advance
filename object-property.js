const students = [
    {id:21, Name: "Korim"},
    {id:15, Name: "Rorim"},
    {id:71, Name: "Kolim"},
    {id:81, Name: "Balam"}
];
const names = students.map (s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 20);
const bigger1 = students.find(s => s.id>20);
console.log(bigger1);