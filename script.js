let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');
let dell = document.getElementsByClassName('del');

let str = "";
let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // console.log(dell);
        if (e.target.innerHTML == '=') {
            try {
                str = str.replace(/x/g, '*');
                str = eval(str);
                input.value = str;
                console.log("hi1");
            } catch {
                input.value = "Error";
                str = "";
                console.log("hi2");
            }
        }
        else if (e.target.innerHTML == 'AC') {
            str = "";
            input.value = str;
            console.log("hi3");
        }
        else if (e.target.classList.contains('del') || e.target.closest('.del')) {
            str = str.substring(0, str.length-1);
            input.value = str;
            console.log("hi4");
        }
        else {
            str += e.target.innerHTML;
            input.value = str; 
            console.log("hi5");
        }
    })
})