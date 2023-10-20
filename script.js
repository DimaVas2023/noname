 function validation(form) {
    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
         
      if (input.value==""){
         console.log('Ошибка поля')
      }
    }

    return result
 }
 
 document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(validation(this)==true){
        alert('Успешно!');
    }
 })