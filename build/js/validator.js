window.addEventListener('load', function(){

    console.log("Hola");

    var newUserForm = document.querySelector('form.user-register-form');
    var userLoginForm = document.querySelector('form.user-login-form'); 
      

        newUserForm.addEventListener('submit', function(e){
           
            var errors = [];
    
       
            var firstNameInput = document.querySelector('.name');
            var lastNameInput = document.querySelector('.lastname');
            var emailInput = document.querySelector('.email');
            var passwordInput = document.querySelector('.password');
            var passwordConfirmInput = document.querySelector('.passwordConfirm');
      
            var emailCheck = function(email) {
                const symbols = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var result = symbols.test(String(email).toLowerCase());
                if (result == false){
                    errors.push('Ingresá un e-mail válido.');
                }
            }

            
            if(firstNameInput.value.length < 2){                       
                errors.push('El campo nombre debe tener 2 caracteres como mínimo');
            };
    
           if(lastNameInput.value.length < 3 ){
                errors.push('Tu apellido debe tener más de 3 caracteres.');
            };
    
          if(emailInput.value == ''){
                errors.push('ingresá tu e-mail');
            }else{ 
                
                emailCheck(emailInput.value);
            }
    
            if(passwordInput.value.length < 8){
                 errors.push('Tu contraseña debe tener más de 8 caracteres.');
            }

            if(passwordConfirmInput.value.length < 8){
                  errors.push('Tu contraseña debe tener más de 8 caracteres.');
            }
                
         

            if(errors.length > 0){
               
                e.preventDefault();
    
                document.querySelector('div.errors-feedback').style.display = 'flex';
                document.querySelector('div.errors-feedback').innerHTML = '<ul></ul>'
    
                var listErrors = document.querySelector('div.errors-feedback ul');
    
                for(var i = 0; i < errors.length; i++){
                    listErrors.innerHTML += "<li>" + " &raquo; " + errors[i] + '</li>';
                }
            
        };
        
        
        



        })

   
});