branch=[
{
	id: 1,
	name:'Centro Coyoacan',
	header: 'C',
	address:'Avenida Coyoácan no. 2000, Col. Del valle. Delegación Benito Juárez C.p. 03100 México, D.F',
	telephone:'5605-7050',
	mail: "",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.360132,
	longitude:-99.170451,
	image:'/images/coyoacan.jpg',
	thumbnail:'../images/coyoacan.jpg',
},{
	id: 2,
	name:'Grand San Francisco',
	header: 'G',
	address:'Centro comercial Grand San Francisco, Av. Desierto de los Leones no. 5525. Col. Alcantarilla Del. Alvaro Obregón ',
	telephone:'533776655',
	mail: "",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.338922,
	longitude:-99.24301,
	image:'/images/sanfrancisco.jpg',
	thumbnail:'../images/sanfrancisco.jpg',
},{
	id: 3,
	name:'Lomas Verdes',
	header: 'L',
	address:'Centro comercial Gran Terraza Lomas Verdes, Calle Colina de la Paz no. 25. Fracc. Boulevares Naucalpan de Juárez, Edo. de México C.p. 53120',
	telephone:'16630280',
	mail: "lomasverdes@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.495758,
	longitude:-99.247248,
	image:'/images/lomasverdes.jpg',
	thumbnail:'../images/lomasverdes.jpg',
},{
	id: 4,
	name:'Mundo E',
	header: 'M',
	address:'Blvd. Manuel Avila Camacho No. 1007 San Lucas Tepetlacalco Tlalnepantla Edo. De Mexico C. P. 54025',
	telephone:'5366-9476',
	mail: "",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.525626,
	longitude:-99.227926,
	image:'/images/MUNDO-E.jpg',
	thumbnail:'../images/MUNDO-E.jpg',
},{
	id: 5,
	name:'Pabellon del Valle',
	header: 'P',
	address:'Av. Universidad no. 740 a-9 p.a., Col. Sta. Cruz atoyac. Benito juárez, d.f. C.p. 03100',
	telephone:'5688-5615',
	mail: "pabellondelvalle@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.3733,
	longitude:-99.162447,
	image:'/images/pabellon.jpg',
	thumbnail:'../images/pabellon.jpg',
},{
	id: 6,
	name:'Parque Delta',
	address:'Cuauhtémoc no. 462, Loc. L-221 esq. Viaducto. Miguel alemen del. Benito juárez, Col. Narvarte.',
	telephone:'5440-0297',
	mail: "delta@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.402771,
	longitude:-99.153972,
	image:'/images/delta.jpg',
	thumbnail:'../images/delta.jpg',
},{
	id: 7,
	name:'Parque Duraznos',
	address:'Bosque de duraznos no. 39 Esq. Bosques de ciruelos  Loc. C-1 col. Bosques de las lomas Del. Miguel hidalgo     C. P. 11700',
	telephone:'5596-3893',
	mail: "duraznos@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.403196,
	longitude:-99.242474,
	image:'/images/duraznos.jpg',
	thumbnail:'../images/duraznos.jpg',
},{
	id: 8,
	name:'Parque Tezontle',
	address:'Av. Canal de Tezontle no. 1512 , Col. Alfonso Ortiz Tirado. Del. Iztapalapa, D.F. C.p. 09040',
	telephone:'9129-0260',
	mail: "tezontle@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.384565,
	longitude:-99.082046,
	image:'/images/tezontle.jpg',
	thumbnail:'../images/tezontle.jpg',
},{
	id: 9,
	name:'Plaza Universidad',
	address:'Av. Universidad no. 1000, Col. Del valle. Delg. Benito juárez. C.p. 03300 México D.F.',
	telephone:'5604-6694',
	mail: "universidad@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.366782,
	longitude:-99.16573,
	image:'/images/universidad.jpg',
	thumbnail:'../images/universidad.jpg',
},{
	id: 10,
	name:'Prado Norte',
	address:'Calle Prado Norte No. 372 Col. Lomas De Chapultepec Del. Miguel Hidalgo C.P. 11000',
	telephone:'',
	mail: "",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.427531,
	longitude:-99.209965,
	image:'/images/PRADO-NORTE.jpg',
	thumbnail:'../images/PRADO-NORTE.jpg',
},{
	id: 11,
	name:'Reforma 243',
	header: 'R',
	address:'Av. Paseo de la reforma no. 234, Col. Juárez. C.p. 06600 Del. Cuauhtémoc',
	telephone:'5533-9905',
	mail: "reforma234@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.428371,
	longitude:-99.162962,
	image:'/images/reforma.jpg',
	thumbnail:'../images/reforma.jpg',
},{
	id: 12,
	name:'Santa Fe',
	header: 'S',
	address:'Av. Vasco de Quiroga no. 3800, Centro comercial Santa Fe. Delegación Cuajimalpa C.p. 05109',
	telephone:'5259-7985',
	mail: "santafe@cielitoquerido.com.mx",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.361923,
	longitude:-99.272203,	
	image:'/images/santafe.jpg',
	thumbnail:'../images/santafe.jpg',
},{
	id: 13,
	name:'WTC',
	header: 'W',
	address:'Montecito # 38 Col. Nápoles C.P. 03810 Del. Benito Juárez',
	telephone:'9000-0888',
	mail: "",
	schedule: {mon_fri: "", sat: "", sund:""},
	latitude:19.39427,
	longitude:-99.173648,
	image:'/images/WTC.jpg',
	thumbnail:'../images/WTC.jpg',
},]

var searchById = function(id){
	for(var i=0; i < branch.length; i++){
		if(branch[i].id === id){
			return branch[i];
		}
	}
	return null;
}


var getDistance = function(point, branchID){
	var R = 6371; // km
	var currentBranch = searchById(branchID);
	var lat2 = currentBranch.latitude;
	var lat1 = point.latitude;
	var lon1 = point.longitude;
	var lon2 = currentBranch.longitude;
	var dLat = toRad(lat2-lat1)//.toRad();
	var dLon = toRad(lon2-lon1)//.toRad();
	var lat1 = toRad(lat1)//.toRad();
	var lat2 = toRad(lat2)//.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return d > 1.0 ? d.toFixed(1) : d.toFixed(3);
}

var searchNearBy = function(point,delta) {
	liNear = [];
	var pushing = "";
	var R = 6371; // km
	for (var i=0; i < branch.length; i++) {

		var lat2 = branch[i].latitude;
		var lat1 =  point.latitude;
		var lon1 = point.longitude;
		var lon2 = branch[i].longitude;
		var dLat = toRad(lat2-lat1)//.toRad();
		var dLon = toRad(lon2-lon1)//.toRad();
		var lat1 = toRad(lat1)//.toRad();
		var lat2 = toRad(lat2)//.toRad();


		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;

		Ti.API.info("\n\n ********************currLatitude = " + point.latitude +", currLong = " + point.longitude  + " , d = " + d);
		Ti.API.info("\n\n ********************pointLatitude = " +branch[i].latitude +", currLong = " + branch[i].longitude + " , d = " + d);
		if(  d <= delta ) {
			pushing = pushing +" puching widh d = " + d;
			liNear.push({
				hotel:branch[i],
				distance:d.toFixed(2)
			});
		}
	}
	Ti.API.info("pushing = " + pushing);
	return liNear;
};

var toRad = function(d){
	return (d * (Math.PI/180));
}