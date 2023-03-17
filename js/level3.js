
const inputValue = (value)=>{
    const inputText = document.getElementById(value);
    const convert = inputText.value
    return convert;
}




const sentName =()=>{

    const inputName = inputValue('input-name')
    const inputEmail = inputValue('input-email')
    const inputMessage = inputValue('input-message')

    localStorage.setItem('Name',inputName)
    localStorage.setItem('Email',inputEmail)
    localStorage.setItem('Message',inputMessage)

}



const DeleteName = () =>{

    localStorage.removeItem('Name')

}

const DeleteEmail = () =>{

    localStorage.removeItem('Email')
   
}


const DeleteMessage = () =>{

    localStorage.removeItem('Message')
}


const reset = () =>{
    localStorage.clear()
}