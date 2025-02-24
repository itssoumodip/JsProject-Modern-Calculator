let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');
let dell = document.getElementsByClassName('del');

console.log("History OF YOU : ");
let str = "";
let arr = Array.from(btn);


function scrollToEnd() {
    input.scrollLeft = input.scrollWidth;
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML.trim();
        
        if (value === '=') {
            try {
                str = str.replace(/x/g, '*');
                if (str === "" || /[+\-*%/]$/.test(str)) {
                    str = str.slice(0, -1);
                    input.value = "Error";
                }
                else {
                    console.log(str);
                    str = eval(str);
                    console.log('=',str);
                    input.value = str;
                    str = "";
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
            str = str.slice(0, -1);
            input.value = str;
        }
        else {
            if (/[x\-+%/]$/.test(str) && /[x\-+%/]/.test(value)) {
                return;
            }
            else {
                str += value;
                input.value = str;
            }
        }
     
        scrollToEnd();
    })
})


input.addEventListener('input', scrollToEnd);