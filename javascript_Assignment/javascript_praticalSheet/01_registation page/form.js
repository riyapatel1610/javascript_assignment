// click event
function click_form(){
    let f_name = document.getElementById("f_name").value;
    let m_name = document.getElementById("m_name").value;
    let l_name = document.getElementById("l_name").value;
    let add = document.getElementById("add").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if(f_name == "" || f_name == null){
        document.getElementById("msg_1").innerText = "Enter First Name";
        return false;
    }else if(m_name == "" || m_name == null){
        document.getElementById("msg_2").innerText = "Enter Middle Name";
        return false;
    }else if(l_name == "" || l_name == null){
        document.getElementById("msg_3").innerText = "Enter Last Name";
        return false;
    }else if(add == "" || add == null){
        document.getElementById("msg_4").innerText = "Enter Address";
        return false;
    }else if(dob == "" || dob == null){
        document.getElementById("msg_5").innerText = "Select Date";
        return false;
    }else  if(male == false && female == false){
        document.getElementById("msg_6").innerText = "Select Gender";
        return false;
    }
    else{
        document.getElementById("msg_1").innerText = "";
        document.getElementById("msg_2").innerText = "";
        document.getElementById("msg_3").innerText = "";
        document.getElementById("msg_4").innerText = "";
        document.getElementById("msg_5").innerText = "";
        document.getElementById("msg_6").innerText = "";
    }

    // select click event
    let exp = document.getElementById("exp").value;
    if(exp == "-1"){
        document.getElementById("msg_7").innerText = "Select Experiance";
        return false;
    }else{
        document.getElementById("msg_7").innerText = "";
    }

    // mobile click event
    let mno = document.getElementById("mno").value;
    if(mno == "" || mno == null){
        document.getElementById("msg_8").innerText = "Enter Mobile No";
        return false;
    }else{
        document.getElementById("msg_8").innerText = "";
    }

    // email click event
    let mail = document.getElementById("mail").value;
    if(mail == "" || mail == null){
        document.getElementById("msg_9").innerText = "Enter Mail";
        return false;
    }else{
        document.getElementById("msg_9").innerText = "";
    }

    // password click event
    let pass = document.getElementById("pass").value;
    if(pass == "" || pass == null){
        document.getElementById("msg_10").innerText = "Enter Password";
        return false;
    }else{
        document.getElementById("msg_10").innerText = "";
    }

    // confirm password click event
    let c_pass = document.getElementById("c_pass").value;
    if(c_pass == "" || c_pass == null){
        document.getElementById("msg_11").innerText = "Enter Confirm Password";
        return false;
    }else{
        document.getElementById("c_pass").innerText = "";
    }
}

// blure event
function check_blank(blnk, span_id){
    if(blnk.value == "" || blnk.value == null || blnk.value == -1){
        document.getElementById(span_id).innerText = "Please, Fill This Fields !!!";
        return false;
    }else{
        document.getElementById(span_id).innerText = ""
        return false
    }
}

// select radio
function select_radio(blnk, span_id){
    if(blnk.checked == false && blnk.checked == false){
        document.getElementById(span_id).innerText = "Please, Fill This Fields !!!";
        return false;
    }else{
        document.getElementById(span_id).innerText = "";
        return false;
    }
}

// =============keybord event==============
// name validation
function regex_name(inputex, span_id){
    let regex = /^[a-zA-Z]+$/;
    if(!(regex.test(inputex.value)) || (inputex.value.length < 2)){
        document.getElementById(span_id).innerText = "Only Alphabets Allowed";
        return false;
    }else{
        document.getElementById(span_id).innerText = "";
        return false;
    }
}

// address validation
function add_fn(){
    let add = document.getElementById("add").value;
    if(add.length <= 50){
        document.getElementById("msg_4").innerText = "Address Must be More Than 50 Character";
        return false;
    }else{
        document.getElementById("msg_4").innerText = ""
        return false;
    }
}

// mobile Validation
function mobile_reg(mobileex, span_id){
    let regx = /^[0-9]*$/;
    let start = /^[6-9]/;
    if(!(regx.test(mobileex.value) && start.test(mobileex.value))){
        document.getElementById(span_id).innerText = "Enter Proper Number";
        return false;
    }else if(mobileex.value.length < 10){
        document.getElementById(span_id).innerText = "Enter 10 Digits";
        return false;
    }else{
        document.getElementById("msg_8").innerText = "";
        return false;
    }
}

// email validation
function email_reg(){
    let mail = document.getElementById("mail").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if(regex.test(mail)){
        document.getElementById("msg_9").innerText = "";
        return false;
    }else{
        document.getElementById("msg_9").innerText = "Enter Valid Mail";
        return false;
    }
}

// password validation
function pass_check(){
    let pass = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(regex.test(pass)){
        document.getElementById("msg_10").innerText = "";
        return false;
    }else{
        document.getElementById("msg_10").innerText = "Password Must be 8 to 15 Character";
    }
}

// compare password validation
function pass_compare() {
    let pass = document.getElementById("pass").value;
    let c_pass = document.getElementById("c_pass").value;
    if (c_pass != pass) {
        document.getElementById("msg_11").innerText = "Password and Confirm Password does not match";
        return false;
    } else {
        document.getElementById("msg_11").innerText = "";
        return false;
    }
}

// show password validation
function show_pass() {
    let pass = document.getElementById("pass");
    let c_pass = document.getElementById("c_pass");
    if ((pass.type == "password") && (c_pass.type == "password")) {
        pass.type = "text";
        c_pass.type = "text";
    } else {
        pass.type = "password";
        c_pass.type = "password";
    }
}