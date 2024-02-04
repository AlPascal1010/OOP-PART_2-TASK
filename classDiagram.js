let web3Students = []
let frontEndStudents = []
let backEndStudents = []
let students = []

class User {
    constructor(){
        if (new.target === User){
            throw new Error ("Cannot instantiate abstract class directly")
        }
    }
    subscribed = true

    login(){
        return ("You have successfully logged in " + "Subscription status = " + this.subscribed)
        
    }
}

class people extends User {
    
    constructor(name, age, email){
        super()
        this.name = name
        this.age = age
        this.email = email
    }
    
    
    subscribe(){
        this.subscribed = true
        return "You have successfully subscribed"
    }

    enroll(trackName){
        this.trackName = trackName
        switch (trackName) {
            case "front-end":
                frontEndStudents.push(this.name)
                students.push(this.name)
                return "You selected front-end"
            break;

            case "back-end":
                backEndStudents.push(this.name)
                students.push(this.name)
                return "You selected back-end"
            break;

            case "web-3":
                web3Students.push(this.name)
                students.push(this.name)
                return "You selected web-3"
            break;

            default:
                return "Track not available"
                break;
        }
    }
}

class Student extends User {
 verifyLogin(){
    if (login) {
        return "You have successfully logged in"
    } else {
        return "wrong login details"
    }
 }

 watchVideos(){
    return "you hve watched this weeks videos"
 }

 doTasks(){
    return "successfully done tasks"
 }

 submitTask(){
    return "Tasked submitted"
 }

}

class tutor extends User {
    uploadVideos(){
        return "Videos for the week uploaded"
    }

    provideReferenceLinks(){
        return "references included for further studies"
    }

    provideMaterials(){
        return "Provide relevant materials"
    }

    setTasks(){
        return "Task for the week uploaded"
    }

    updateLeaderBoard(){
        return "leader board successfully updated"
    }
}

class frontEndTutors extends tutor{
    provideAssistance(userName){
        this.userName = userName
        if (frontEndStudents.indexOf(userName) !== -1){
            return ("Helped Student " + userName)
        } else {
            return "You are not my student, go and look for your mentor"
        }
    }
}

class backEndTutors extends tutor{
    provideAssistance(userName){
        this.userName = userName
        if (backEndStudents.indexOf(userName) !== -1){
            return (" i have Helped Student " + userName)
        } else {
            return "You are not my student, go and look for your mentor"
        }
    }
}

class Web3Tutors extends tutor{
    provideAssistance(userName){
        this.userName = userName
        if (web3Students.indexOf(userName) !== -1){
            return ("I have Helped Student " + userName)
        } else {
            return "You are not my student, go and look for your mentor"
        }
    }
}


class WEB3Studs extends Student{
    #needHelp = true

    setName(userName){
        this.userName = userName
        return ("Successfully changed name " + userName + "(W)")
    }
    
    seekMentorAssistance(needHelp){
        this.needHelp = needHelp
        if (needHelp){
            return ("Mentor offered assistance");
        }
    }
}

class FrontEndStuds extends Student{
    #needHelp = true
    
    setName(userName){
        this.userName = userName
        return ("Successfully changed name to " + userName + "(F)")
    }

    
    seekMentorAssistance(needHelp){
        this.needHelp = needHelp
        if (needHelp){
            return ("Mentor offered assistance");
        }
    }
}

class BackEndStuds extends Student{
    #needHelp = true
    
    setName(userName){
        this.userName = userName
        return ("Successfully changed name to " + userName + "(B)")
    }

    
    seekMentorAssistance(needHelp){
        this.needHelp = needHelp
        if (needHelp){
            return ("Mentor offered assistance");
        }
    }
}

class task {
    constructor(taskType){
        this.taskType = taskType
    }

    submit(taskType){
        switch (taskType) {
            case "gitHub":
                return "Submit github repository link"
            break;
            
            case "article":
                return "Submit 'medium' or 'word' link"
            break;

            case "UML":
                return "Submit 'LucidChart' link"
            break;
        
            default:
                return "not recognized"
                break;
        }
    }
}

let jane = new User()// this will throw an error

let eze = new people("eze", 15, "Mail.com")
console.log(eze.login());