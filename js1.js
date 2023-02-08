var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_in,option_out;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_in = inputType.value;
option_out   = resultType.value;


function myResult(){

	option_in = inputType.value;
	option_out = resultType.value;

	if(option_in === "meter" && option_out==="kilometer"){
		result.value = Number(input.value) * 0.001;
	}else if(option_in === "meter" && option_out==="Centimeter"){
		result.value = Number(input.value) * 100;
	}else if(option_in === "meter" && option_out==="foot"){
		result.value = Number(input.value) * 3.281;
	}else if(option_in === "meter" && option_out==="inch"){
		result.value = Number(input.value) * 39.37;
	}else if(option_in === "meter" && option_out==="yard"){
		result.value = Number(input.value) * 1.094;
	}else if(option_in === "meter" && option_out==="meter"){
		result.value = input.value
	}

	if(option_in === "kilometer" && option_out==="meter"){
		result.value = Number(input.value) * 1000;
	}else if(option_in === "kilometer" && option_out==="Centimeter"){
		result.value = Number(input.value) * 100000;
	}else if(option_in === "kilometer" && option_out==="foot"){
		result.value = Number(input.value) * 3281;
	} else if(option_in === "kilometer" && option_out==="inch"){
		result.value = Number(input.value) * 39370;
	}else if(option_in === "kilometer" && option_out==="yard"){
		result.value = Number(input.value) * 1094;
	}else if(option_in === "kilometer" && option_out==="kilometer"){
        		result.value = input.value
	}

	if(option_in === "Centimeter" && option_out==="kilometer"){
		result.value = Number(input.value) * 0.00001;
	}else if(option_in === "Centimeter" && option_out==="meter"){
		result.value = Number(input.value) * 0.01;
	}else if(option_in === "Centimeter" && option_out==="foot"){
		result.value = Number(input.value) /30.48;
	}else if(option_in === "Centimeter" && option_out==="inch"){
		result.value = Number(input.value) /2.54;
	}else if(option_in === "Centimeter" && option_out==="yard"){
		result.value = Number(input.value) /91.44;
	}else if(option_in === "Centimeter" && option_out==="Centimeter"){
		result.value = input.value
	}

    if(option_in === "foot" && option_out==="kilometer"){
		result.value = Number(input.value) /3281;
	}else if(option_in === "foot" && option_out==="meter"){
		result.value = Number(input.value) /3.281;
	}else if(option_in === "foot" && option_out==="Centimeter"){
		result.value = Number(input.value) * 30.48;
	}else if(option_in === "foot" && option_out==="inch"){
		result.value = Number(input.value) *12;
	}else if(option_in === "foot" && option_out==="yard"){
		result.value = Number(input.value) /3;
	}else if(option_in === "foot" && option_out==="foot"){
		result.value = input.value
	}

    if(option_in === "inch" && option_out==="kilometer"){
		result.value = Number(input.value) /39370;
	}else if(option_in === "inch" && option_out==="meter"){
		result.value = Number(input.value) /39.37;
	}else if(option_in === "inch" && option_out==="Centimeter"){
		result.value = Number(input.value) * 2.54;
	}else if(option_in === "inch" && option_out==="foot"){
		result.value = Number(input.value) /12;
	}else if(option_in === "inch" && option_out==="yard"){
		result.value = Number(input.value) /36;
	}else if(option_in === "inch" && option_out==="inch"){
		result.value = input.value
	}

    if(option_in === "yard" && option_out==="kilometer"){
		result.value = Number(input.value) /1094;
	}else if(option_in === "yard" && option_out==="meter"){
		result.value = Number(input.value) /1.094;
	}else if(option_in === "yard" && option_out==="Centimeter"){
		result.value = Number(input.value)  /91.44;
	}else if(option_in === "yard" && option_out==="foot"){
		result.value = Number(input.value) *3;
	}else if(option_in === "yard" && option_out==="inch"){
		result.value = Number(input.value) *36;
	}else if(option_in === "yard" && option_out==="yard"){
		result.value = input.value
	}

	
}
