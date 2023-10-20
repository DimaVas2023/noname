 function validation(form) {
    let result = true;

    return result
 }
 
 document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()
    
    if(validation(this)===true){
        alert('Успешно!')
    }
 })