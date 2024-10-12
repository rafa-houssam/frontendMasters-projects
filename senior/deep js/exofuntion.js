const deepJS= {
     currentEnrollment : [],
     studentRecords : [],
     remindUnpaidStudent(){
        this.remindUnpaid(this.currentEnrollment);
    },
     addStudent(id, name, paid) {
        this.studentRecords.push({ id, name, paid });
    },
     enrollStudent(id) {
        if (!this.currentEnrollment.includes(id)) {
            this.currentEnrollment.push(id);
        }
    },
     printCurrentEnrollment() {
        this.printRecords(this.currentEnrollment);
    },
     enrollPaidStudents() {
        this.currentEnrollment = this.paidStudentsToEnroll();
       this.printCurrentEnrollment();

    },


     getStudentById(studentId) {
        return this.studentRecords.find(getstudent);

          function getstudent(record) {
            return studentId == record.id;
        }
    },
         printRecords(recordIds) {
            var array = recordIds.map(this.getStudentById.bind(this));
            array.sort(sort1);
            array.forEach(getinfo);
            //declaration of the functions 

            var sort1 = (a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            }
            function getinfo(student) {
                console.log(`${student.name} (${student.id}):${student.paid === true ? "paid" : "Not paid"} `);
            }




        },

         paidStudentsToEnroll() {
            let toEnroll;
            toEnroll = this.studentRecords.filter(knw.bind(this));
            idsToEnroll = toEnroll.map(knw2.bind(this));
            function knw(a) { return !this.currentEnrollment.includes(a.id) && a.paid };
            function knw2(a) { return a.id };


            return [...this.currentEnrollment, ...idsToEnroll];
            // TODO
        },

         remindUnpaid(recordIds) {
            let unpaid;
            unpaid = recordIds.filter(filter.bind(this));
           this.printRecords(unpaid);

            function filter(id) {
                let student =this.getStudentById(id);
                return student.paid === false;

            }  
            // TODO
        }
       
    

    }
 deepJS.addStudent(311,"Frank",/*paid=*/true);
deepJS.addStudent(410,"Suzy",/*paid=*/true);
deepJS.addStudent(709,"Brian",/*paid=*/false);
deepJS.addStudent(105,"Henry",/*paid=*/false);
deepJS.addStudent(502,"Mary",/*paid=*/true);
deepJS.addStudent(664,"Bob",/*paid=*/false);
deepJS.addStudent(250,"Peter",/*paid=*/true);
deepJS.addStudent(375,"Sarah",/*paid=*/true);
deepJS.addStudent(867,"Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);




deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudent();






















