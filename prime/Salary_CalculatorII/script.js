
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
    var newEmployee = new Employee()
    
    employees.push( this )
salaryTotals += Number(newEmployee.annualsalary);
monthlyTotals = Math.round(salaryTotals / 12);
 $( '#firstnameIn' ).val(),
 $( '#lastnameIn' ).val(), 
 $( '#idnumberIn' ).val(), 
 $( '#jobtitleIn' ).val(), 
 $( '#annualsalaryIn' ).val() 

//append
    //$('#employeeCostsSection').html(monthlyTotals);
    $('#employeeCostsSection').append(
        '<p>Name: ' + $('#firstnameIn').val() + ' ' + $('#lastnameIn').val() + 
        '<br>ID Number: '  + $('#idnumberIn').val() + 
        '<br>Job Title: ' + $('#jobtitleIn').val() +
        '<br>Annual Salary: ' + $('#annualsalaryIn').val() +
        '<br>Monthly Cost: ' + $('#monthlyTotals').val() + '</p>'
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

  

   //console.log(employees[0].annualsalary);
} //end Emoloyee constructor and employees.push



$( '#invisibleSpan' ).html(monthlyTotals);


