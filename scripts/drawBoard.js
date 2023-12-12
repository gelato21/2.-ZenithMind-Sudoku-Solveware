export function drawBoard(){

    const sudokuBoard=document.querySelector("#puzzle")

    for(let i=0;i<81;i++){
        const inputElement= document.createElement('input')

        inputElement.setAttribute('type', 'number')
        inputElement.setAttribute('min', '1')
        inputElement.setAttribute('max', '9')
        if(    (i>=0&&i<=2) || (i>=9 && i<=11) || (i>=18 && i<=20)
            || (i>=6 && i<=8) || (i>=15 && i<=18) || (i>=24 && i<=26) 
            || (i>=30 && i<=32)  || (i>=39 && i<=41) || (i>=48 && i<=50)
            || (i>=54 && i<=56) || (i>=63 && i<=65) || (i>=72 && i<=74)
            || (i>=60 && i<=62) || (i>=69 && i<=71) || (i>=78 && i<=80) ){
                inputElement.style.backgroundColor='gray'
        }
        sudokuBoard.appendChild(inputElement)
        
    }
}

