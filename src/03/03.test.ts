import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(()=> {
    student = {
        id: 1,
        "name" : "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countyTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "html"
            },

            {
                id: 2,
                title: "css"
            },

            {
                id: 3,
                title: "js"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    makeStudentActive(student);

    expect(student.isActive).toBe(true)
})

test("Does srudent live in city?", () => {
    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})