/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2], 
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(aOa){
    return aOa.map(function(array){
        return createEmployeeRecord(array)
    })
}


function createTimeInEvent(string){
    let [date, time] = string.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date 
    })
    return this
}

function createTimeOutEvent(string){
    let [date, time] = string.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: date 
    })
    return this
}

function hoursWorkedOnDate(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hoursWorked
}



function calculatePayroll(arrayOfEmployees){
    return arrayOfEmployees.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }