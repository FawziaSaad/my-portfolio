/* 
    Filename: app.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Sunday, May 28, 2023
*/

// IIFE -- Immediately Invoked Function Expression
// IIFE

(function(){
    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for ( button of deleteButtons)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are your sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contacts-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();