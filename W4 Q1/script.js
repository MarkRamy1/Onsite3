function validateForm(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    if (name.value ===""||email.value ==="" ||subject.value ==="" ||message.value ===""){
        alert("All fields must be filled out");

        return false;
    };
    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1){
        alert("Please enter a valid email");
        return false;
    };
    alert("Thank you for filling out our form");
    return true;
};