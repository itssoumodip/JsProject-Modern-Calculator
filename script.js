let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');
let dell = document.getElementsByClassName('del');

let str = "";
let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        // console.log(dell);
        if (value == '=') {
            try {
                if (str === "" || /[+\-*/]$/.test(str))
                {
                    input.value = "Error";
                    str = "";
                }
                else 
                {
                    str = str.replace(/x/g, '*');
                    str = eval(str);
                    input.value = str;
                }
            } catch {
                input.value = "Error";
                str = "";
            }
        }
        else if (value == 'AC') {
            str = "";
            input.value = str;
        }
        else if (e.target.classList.contains('del') || e.target.closest('.del')) {
            str = str.substring(0, str.length-1); //remove the last char
            input.value = str;
        }
        else {
            if (/[+\-*/]$/.test(str) && /[+\-*/]/.test(value))
                return;
            str += value;
            input.value = str;
        }
    })
})