const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
        
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
        
        
    }
    const kelToCel =(kel) =>{
        let celsius=(kel-273.15).toFixed(1);
        return celsius;
       
    }
    function reset(){
        var element = document.getElementById(" reset ");
         element.reset()
         const ele=document.getElementById("result");
         ele.reset()
         
      }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        
    }

   
     if(valueTemp=='fah'){
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
    else if(valueTemp=='kel'){
     document.getElementById("result").innerHTML =kelToCel(inputTemp)+"&#176; Celsius";
    }

}

