// Write your solution in this file!
const employee = {
    name: "Stephen Onyango",
    street: "Kasarani",
  }
  console.log(employee)

    //New non-destructively created employee 

  function updateEmployeeWithKeyAndValue(obj, key, value,) {
    let newObject = { ...obj };
    newObject[key] = value;
    return newObject;
  }

  const employee2 = updateEmloyeeWithKeyAndValue(employee, "name", "Sam",);
  console.log(employee2);

  //New Desructively created employee
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value,) {
        obj[key] = value;
        return obj;
  }
  const destructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam",);
  console.log(destructiveEmployee);
  console.log(destructiveEmployee)

  // Write your solution in this file!


function deleteFromEmployeeByKey(obj,key){
    let newObject = { ...obj };
    delete newObject[key];
    return newObject;
}

deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object[key];
    return object
}