//Thanks to W3 schools for the code

	function retrieveData(){
		$('td').remove();
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var arr = JSON.parse(this.responseText);
                var details = "";
                for(var i = 0; i < arr.length; i++){
                    details +=
                        "<tr>" +
                            "<td>"+ arr[i].id +"</td>"+
                            "<td>"+ arr[i].name +"</td>"+
                            "<td>"+ arr[i].url +"</td>"+
                            "<td>"+ arr[i].description +"</td>"+
                            "<td>"+ arr[i].theDate +"</td>"+
                        "</tr>";
                }
				$("#displayAllTable").append(details);
            }
        };
        xmlhttp.open("GET", "select.php", true);
        xmlhttp.send();
	}

	function createData(){
		
		var n = $('#name').val();
		var u = $('#url').val();
		var d = $('#description').val();
		var thisDate = new Date();
		var params = {
			name: n,
		 	url: u,
		 	description: d,
		 	theDate: thisDate
		}
		 param = JSON.stringify(params);
		 console.log(param);
		 var xhttp = new XMLHttpRequest();
		 
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                 console.log(this.responseText);
                 $('input[type="text"]').val('');
             }
         };
         xhttp.open("POST", "create.php?q=", true);
         xhttp.setRequestHeader("Content-type", "application/json");
         xhttp.send(param);
	}

	function updateData(){
		var uName = $('#updateName').val();
		var uURL = $('#updateURL').val();
		var uDescription = $('#updateDescription').val();
		var uID = $('#updateId').val();
		var updates = {
			name: uName,
			url: uURL,
			description: uDescription,
			id: uID
		}
		update = JSON.stringify(updates);
		var xhttp = new XMLHttpRequest();
		 
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	 $('input[type="text"]').val('')
                 console.log(this.responseText);
                 retrieveData();
             }
         };
         xhttp.open("POST", "update.php?q=", true);
         xhttp.setRequestHeader("Content-type", "application/json");
         xhttp.send(update);
	}

	function retrieveOne(){
		var getID = $('#IDToRetrieve').val();
		var param = {
			id: getID
		}
		var p = JSON.stringify(param);
		console.log(getID);
		var xhttp = new XMLHttpRequest();
		 
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	 var arr = JSON.parse(this.responseText);
                var details = "";
                for(var i = 0; i < arr.length; i++){
                    details +=
                        "<tr>" +
                            "<td>"+ arr[i].id +"</td>"+
                            "<td>"+ arr[i].name +"</td>"+
                            "<td>"+ arr[i].url +"</td>"+
                            "<td>"+ arr[i].description +"</td>"+
                            "<td>"+ arr[i].theDate +"</td>"+
                        "</tr>";
                }
				$("#displayTable").append(details);
            	 $('input[type="text"]').val('');
                 console.log(this.responseText);
             }
         };
         xhttp.open("POST", "selectOne.php?q=", true);
         xhttp.setRequestHeader("Content-type", "application/json");
         xhttp.send(p);

	}
	function retrieveByName(){
		var getName = $('#nameToRetrieve').val();
		var names  = {
			name: getName
		}
		var nam = JSON.stringify(names);
		var xhttp = new XMLHttpRequest();
		 
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	  var arr = JSON.parse(this.responseText);
                var details = "";
                for(var i = 0; i < arr.length; i++){
                    details +=
                        "<tr>" +
                            "<td>"+ arr[i].id +"</td>"+
                            "<td>"+ arr[i].name +"</td>"+
                            "<td>"+ arr[i].url +"</td>"+
                            "<td>"+ arr[i].description +"</td>"+
                            "<td>"+ arr[i].theDate +"</td>"+
                        "</tr>";
                }
				$("#displayTable").append(details);
            	 $('input[type="text"]').val('');
                 console.log(this.responseText);
             }
         };
         xhttp.open("POST", "selectName.php?q=", true);
         xhttp.setRequestHeader("Content-type", "application/json");
         //xhttp.setRequestHeader("Content-length", param.length);
         xhttp.send(nam);
	}


	function deleteData(){
		var id = $('#id').val();
		var theID = {
			id: id
		}
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                $('input[type="text"]').val('');
                retrieveData();
            }
        };
        xmlhttp.open("POST", "delete.php?q", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(JSON.stringify(theID));
	}
