INHERITANCE

inheritance.js is the code representation of the UML class diagram of the assignment, and it captures the concept of inheritance, and relationships between several classes,

first of all theres a base class "User", and in the  you get the user's details, such as name, age and email, it also has a property name subscribed, and users can also login, other classes inherit from this class such as the

"people class" (which represent, those that are not students yet), and they should have names, age, and email, since they inherit attributes frm the base class, and being a class on its own it has some attributes unique to it which are the "subscribe()" and the "enroll(trackName)", so those in this class can subscribe and enroll to the system, but you need to create an instance first to use this, since they are not static attributes

theres also the "Student class" which also inherit from the base class user , and it also has unique attributes uch as "verifyLogin(), watchVideos(), doTasks(), submitTask()"

the "tutor class" also inherits from the" User class "and its a representation of the tutor at the academy and theres roles

there are also subclasses of the Student and The tutors Classes too, they are:

1, "frontEndTutors" which is a representation of the "Front-End Tutors" inherit attributes from the tutor class and it has unique attributes that allows it attend to the students that are allocated to it

2, "backEndTutors" which is a representation of the "Back-End Tutors" inherit attributes from the tutor class and it has unique attributes that allows it attend to the students that are allocated to it

3, "Web3Tutors" which is a representation of the "WEB-3 Tutors" inherit attributes from the tutor class and it has unique attributes that allows it attend to the students that are allocated to it

4, "WEB3Studs" which is a representation of the "WEB-3 Students" inherit attributes from the Student class and it has unique attributes that allows it perform tasks allocated to it

5, "FrontEndStuds" which is a representation of the "Front-End Students" inherit attributes from the Student class and it has unique attributes that allows it perform tasks allocated to it

6, "BackEndStuds" which is a representation of the "Back-End Students" inherit attributes from the Student class and it has unique attributes that allows it perform tasks allocated to it

theres also a separate class called "task" this represent the kind of task given by the tutors and it doesnt inherit from the others but it can be called with them


ABSTRACTION

here abstraction is applied to the class User, so as to prevent it from being instantiated directly, the test is below, since the people class inherits from the User, class it can access its attributes and give them to its instances, using the

let eze = new people("eze", 15, "Mail.com")
console.log(eze.login());

here login(), was inherited from the user class.


ENCAPSULATION

what is Encapsulation
Encapsulation is a process o f restricting access to object component
a mechanism o bundling data with methods that operate on that data
useful for:
Security-controlled access
hide implementation and expose behavior
loose coupling-modify the implementation anytime

one major way to implement encapsulation is with private properties and methods, in the code, another way is via setters and getters, since we are trying to restrict direct access to  property, but im using the private modifier (#), in the class people, theres on the "#subscribed" which cant be accessed using after crating an instance of the class, but in that same class lies a method called login(), and login returns a string with the value of subscribe attached to it, thus giving us access to the encapsulated data

theres also the "#needHelp" property  in all the subclasses of students. though it cant be accessed directly we see it can be used to perform some logical operations

polymorphism is applied in all the subclasses of "tutor" and "Student", being that there are 3 tracks or students and 3 for tutors too, so each method changes for each kind of student and tutors