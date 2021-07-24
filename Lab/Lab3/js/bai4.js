var chon;

function htNgay(chon){
	var dropdown = document.getElementById("ngay");
	for(var i=1;i<=31;i++){
		var opt = document.createElement("option");
		opt.text = i.toString();
		opt.value = i;
		if(opt.value == chon){
			opt.selected = true;
		}
		dropdown.options.add(opt);
	}
}

function htThang(chon) {
	var dropdown = document.getElementById("thang");
	for (var i=1;i<=12;i++) {
		var opt = document.createElement("option");
		opt.text = i.toString();
		opt.value = i;
		if(opt.value == chon){
			opt.selected = true;
		}
		dropdown.options.add(opt);
	}
}

function htNam(chon) {
	var dropdown = document.getElementById("nam");
	var today = new Date();
	for (var i=1970;i<=today.getFullYear();i++) {
		var opt = document.createElement("option");
		opt.text = i.toString();
		opt.value = i;
		if(opt.value == chon){
			opt.selected = true;
		}
		dropdown.options.add(opt);
	}
}