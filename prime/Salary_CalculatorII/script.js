
//record employee salaries
$(document).ready( readyNow );
//adds salaries up 
function readyNow() {
    $( '#submitInfoButton' ).on( 'click', enterEmployee);
} //end readyNow function

//global variables
var employees = [];
var salaryTotals = 0;
var monthlyTotals = 0;

//get user input

function enterEmployee () {
    var newEmployee = new Employee($('#firstnameIn').val(),
        $('#lastnameIn').val(),
        $('#idnumberIn').val(),
        $('#jobtitleIn').val(),
        $('#annualsalaryIn').val() )

   
    
salaryTotals += Number(newEmployee.annualsalary);
monthlyTotals = Math.round(salaryTotals / 12);

//append
    //$('#employeeCostsSection').html(monthlyTotals);
    $('#employeeCostsSection').append(
        '<p>Name: ' + $('#firstnameIn').val() + ' ' + $('#lastnameIn').val() + 
        '<br>ID Number: '  + $('#idnumberIn').val() + 
        '<br>Job Title: ' + $('#jobtitleIn').val() +
        '<br>Annual Salary: ' + $('#annualsalaryIn').val() +
        '<br>Monthly Cost: ' + (monthlyTotals) + '</p>'
    );
        //reset inpus
    $('#firstnameIn').val('');
    $('#lastnameIn').val('');
    $('#jobtitleIn').val('');
    $('#idnumberIn').val('');
    $('#annualsalaryIn').val('');
   
  
    


} //end enterEmployee function

//employee constructor
function Employee (firstnameIn, lastnameIn, idnumberIn, jobtitleIn, annualsalaryIn) {
    this.firstname = firstnameIn;
    this.lastname = lastnameIn;
    this.idnumber = idnumberIn;
    this.jobtitle = jobtitleIn;
    this.annualsalary = annualsalaryIn;
    this.monthlyTotals = (annualsalaryIn / 12);
  
    employees.push(this)
   //console.log(employees[0].annualsalary);
} //end Emoloyee constructor and employees.push



$( '#invisibleSpan' ).html(monthlyTotals);


