// Write a JavaScript function that takes an array of objects representing students, filters out the students whose age is less than 18, and returns an array with the names of the remaining students.


const Array1 = students.filter(item => {
    if(item.age < 18) {
        return item.name
    }
})

console.log(Array1)


const student = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 },
    { name: "Eve", age: 21 }
  ];
  
  const newarr=student.filter((ele)=> ele.age<18).map((x)=> x.name);
  console.log(newarr)



  const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 },
    { name: "Eve", age: 21 }
  ];
  
  const filterStu = (students) => {
    const filteredStu = students.filter((student) => student.age <= 18);
    
    const names = filteredStu.map((student) => student.name);
    return names;
  };
  const filteredNames = filterStu(students);
  console.log(filteredNames);