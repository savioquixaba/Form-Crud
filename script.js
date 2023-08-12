document.addEventListener("DOMContentLoaded",function(){

    const continueButton = document.querySelector(".continue-button button");

    continueButton.addEventListener("click",function(event){

        event.preventDefault();

        // Pega os valores digitados pelo usuário nos campos do formulário
        const firstName = document.getElementById("firstname").value;
        const lastName= document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("number").value;
        const password= document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;
    
        // Encontra o botão de gênero selecionado
        const selectedGenderOption = document.querySelector('input[name="gender"]:checked')

         // Obtém o rótulo (label) associado ao botão de gênero selecionado
         let selectedGender ="";
         if (selectedGenderOption){
            selectedGender = selectedGenderOption.nextElementSibling.textContent;
         }

         // Exibe os valores no console
         console.log("Primeiro Nome:", firstName);
         console.log("sobrenome:", lastName);
         console.log("email:", email);
         console.log("celular:", phoneNumber);
         console.log("Senha:", password);

    
    })  
})

