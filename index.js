let chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "(", ")", "{", "}", "[", "]", "|", ":", ";", "'"]


let passwordBtn = document.getElementById("password-btn")
let password1 = document.getElementById("ps1")
let password2 = document.getElementById("ps2")
let password3 = document.getElementById("ps3")
let password4 = document.getElementById("ps4")
let passwordLength = document.getElementById("password-length")
let showLength = document.getElementById("show-length")

let passwords = []

let copyPs = document.querySelectorAll(".ps-box")

// Showing Password Length

passwordLength.oninput = function(){getLength()}

function getLength() {
    showLength.textContent = passwordLength.value
}

// Generate Password 

passwordBtn.addEventListener("click", () => {
    
    totalPasswords = []
    
    for( let i = 0; i < 4; i++ ){
    generate()
    }
    
    password1.value = totalPasswords[0]
    password2.value = totalPasswords[1]
    password3.value = totalPasswords[2]
    password4.value = totalPasswords[3]


function generate(){
    
    let password = []
    
    for( let i = 0; i < passwordLength.value; i++){
        
        let randomPassword = chars[Math.floor(Math.random() * chars.length)]
        password += randomPassword   
    }
    
    totalPasswords.push(password)
    
}


// Copy Passwords

for (let i = 0 ; i < copyPs.length; i++){
        
        let savedPassword = copyPs[i].value
        
        copyPs[i].addEventListener("click", ()=> {
    
        let savedPassword = copyPs[i].value
        
        
        if (savedPassword === ""){
        }
        
        else if (savedPassword === "Copied!"){
        }
         
        else {
            copyPs[i].select()
            navigator.clipboard.writeText(copyPs[i].value)
            copyPs[i].value = "Copied!"
        }
    })
    
      copyPs[i].onmouseleave = function() {showPs()}
          
            function showPs(){
              copyPs[i].value = savedPassword
            }
}

}
)