function tempConvert(){
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    if (unit == 'Fahrenheit') {
    var result = (temperature-32)*(5/9);
    result = result.toFixed(2);
    result = result + "℃";
    }
    else{
        var result =  ( temperature * 9/5 ) + 32;
        result = result.toFixed(2);
        result = result + "℉";
    }
    document.getElementById("result").innerHTML=result;
} 