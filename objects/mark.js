let student = {
    name: "krish",
    marks: 85,
    getresult: function() {
        if (this.marks >= 40) {
            return `${this.name} has passed with marks: ${this.marks}`;
        } else {
            return `${this.name} has failed with marks: ${this.marks}`;
        }
    }   
}

console.log(student.getresult());