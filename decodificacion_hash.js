const string = "dxeedxebdwemdwesdxdtdweqdxefdxefdxdudueqduerdvdtdvdu"

function reverse1(string){
	let NumbersArray = [];
	for(let i=0;i<string.length;i++){
		let unicode = string.charCodeAt(i);
		let unicode_original = unicode - 97;
		NumbersArray.push(unicode_original);
		}
	return NumbersArray;
	}
function reverse2(int_array){
	let txt = '';
	for(let i=0;i<int_array.length;i=i+2){
		let unicode = int_array[i]*26+int_array[i+1];
		txt += String.fromCharCode(unicode);
		}
	return txt;
	}

const Contraseña = reverse2(reverse1(reverse2(reverse1(string))));
console.log("La contraseña de Connor: "+Contraseña);
