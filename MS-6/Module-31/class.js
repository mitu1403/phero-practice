class Teacher{
  institute = "uiu";
  constructor(name, subject){
    this.name = name
    this.subject = subject
  }
  speak(lang = "English"){
    console.log(`only ${lang} language available`)
  }
}

const topon = new Teacher("Topon Das","Physics");
console.log(topon)
topon.speak()
console.log(topon.institute)
console.log(topon.name)

const timothy = new Teacher("Jones Timothy", "machine Learning")
console.log(timothy)