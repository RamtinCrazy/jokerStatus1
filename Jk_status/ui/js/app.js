var visible = false;
window.ResourceName = 'statushud'

function setHUDDisplay(opacity){
	$('#hud').css('opacity', opacity);
	$('.info-hud.source').css('opacity', opacity);
};
// Designed BY Milad >>> Discord:MiLaD#0125
function setHUDName(name){
	$('#hud #player-fullname span').text(name);
};
function setHUDID(source){
	$('#hud #source').text(source);
};


function setHUDJob(job){
	if(job.job.name == 'nojob'){
		$('#hud #player-job').fadeOut(2000);
	}else{
		$('#hud #player-job').fadeIn(2000);
	};

	if(job.job.ext){
		if(job.job.grade < 0){
			$('#hud #job-name span').text(((job.job.ext).replace('_', ' ')).toUpperCase());
			$('#hud #job-img img').attr('src', './img/logo/jobs/'+job.job.ext+'.png');
			$('#hud #job-grade span').text('Off-Duty');
		}else{
			$('#hud #job-name span').text(((job.job.ext).replace('_', ' ')).toUpperCase());
			$('#hud #job-img img').attr('src', './img/logo/jobs/'+job.job.ext+'.png');
			$('#hud #job-grade span').text(job.job.grade_label);
		};
	}else{
		if(job.job.grade < 0){
			$('#hud #job-name span').text(job.job.label);
			$('#hud #job-img img').attr('src', './img/logo/jobs/'+job.job.name+'.png');
			$('#hud #job-grade span').text('Off-Duty');
		}else{
			$('#hud #job-name span').text(job.job.label);
			$('#hud #job-img img').attr('src', './img/logo/jobs/'+job.job.name+'.png');
			$('#hud #job-grade span').text(job.job.grade_label);
		};
	};
};
// Designed BY Milad >>> Discord:MiLaD#0125
function setHUDGang(gang){
	if(gang.gang.name == 'nogang'){
		$('#hud #player-gang').fadeOut(2000);
	}else{
		$('#hud #player-gang').fadeIn(2000);
	};
	// Designed BY Milad >>> Discord:MiLaD#0125
	$('#hud #gang-name span').text((gang.gang.name).replace('_', ' '));

	if(gang.gang.name == 'Mafia'){
		$('#hud #gang-img img').attr('src', './img/logo/gangs/'+gang.gang.name+'.png');
	}else{
		$('#hud #gang-img img').attr('src', './img/logo/gangs/gang.png');
	};
	if(gang.gang.name == 'Army'){
		$('#hud #gang-img img').attr('src', './img/logo/gangs/'+gang.gang.name+'.jpg');
	}else{
		$('#hud #gang-img img').attr('src', './img/logo/gangs/gang.png');
	};

	$('#hud #gang-grade span').text(gang.gang.grade_label);
};

function updatePing(data){
		var s = data.value;
    $("[name='ping']").html(s)
	var x = document.getElementById("ping");

	
		if (s > 1 && s < 70) {
				$('#player-ping img').attr('src', './img/logo/wifi_g.png');
		x.style.color = "#13e94a";  
			} else if (s > 71 && s < 300) {
				$('#player-ping img').attr('src', './img/logo/wifi_y.png');
			x.style.color = "#e8f016"; }
			else {
		$('#player-ping img').attr('src', './img/logo/wifi_r.png');
		x.style.color = "#f01616"; 
	};

  }


function setHUDCash(money){
	$('#hud #player-cash-text').text('$'+money);
};

function setHUDData(data){
	if(data.health <= 10.0){
		$('#hud #health-img').addClass('ticktok');
	}else{
		$('#hud #health-img').removeClass('ticktok');
	};
	$('#hud #health').css('width', data.health+'%');
	$('#hud #armor').css('width', data.armor+'%');
};

function setHUDStatus(data){
	let hunger = data[0].percent;
    let thirst = data[1].percent;
	if(hunger <= 10.0){
		$('#hud #hunger-img').addClass('ticktok');
	}else{
		$('#hud #hunger-img').removeClass('ticktok');
	};

	if(thirst <= 10.0){
		$('#hud #thirst-img').addClass('ticktok');
	}else{
		$('#hud #thirst-img').removeClass('ticktok');
	};

	$('#hud #hunger').css('width', hunger+'%');
	$('#hud #thirst').css('width', thirst+'%');
};
window.addEventListener('message', (event) => {
	let data = event.data;
	switch(data.action) {
		
		case 'toggle':
				if(visible){
				
					 this.setTimeout(() => {
					$('#hud #player-name ,#hud #player-cash').addClass('d-block');
					$('#hud #player-name ,#hud #player-cash').removeClass('d-none');
					$('#hud .player-hour, #hud .player-id').removeClass('d-block');
					$('#hud #player-job, #hud #player-gang').removeClass('d-none');
					$('#hud .player-hour, #hud .player-id').fadeOut(0);
					$('#designer').fadeIn(500);
					$('.left-status1, .left-status2, .right-status1, .right-status2').addClass('cp-none');
					$('.left-status1, .left-status2, .right-status1, .right-status2').removeClass('l-cp');
					$('.left-status1, .left-status2, .right-status1, .right-status2').removeClass('r-cp');
					$('#hud .player-hour, #hud .player-id').removeClass('cp-none');
					$('#hud #player-header').css('height', '1.7vw');
					$('#hud #player-ping').css('left', '0.0vw');
					$('#hud #server-name').css('width', '13.0vw');
					$('.left-square1').css('width', '9vw');
					$('.left-square1').css('left', '0.0vw');
					$('.left-square2').css('left', '0.0vw');
					$('.right-square1').css('right', '0.0vw');
					$('.right-square2').css('right', '0.0vw');
					$('.left-square2').css('width', '9vw');
					$('.right-square1').css('width', '9vw');
					$('.right-square2').css('width', '9vw');
					$('.left-status1').css('height', '0.9vw');
					$('.left-status1').css('margin-top', '0.5vw');
					$('.left-status1').css('left', '2.0vw');
					$('.left-status1').css('border', '0.01vw solid #ff0000');
					$('#hud #health').css('height', '0.8vw');
					$('.left-status2').css('height', '0.9vw');
					$('.left-status2').css('margin-top', '0.5vw');
					$('.left-status2').css('left', '2.0vw');
					$('.left-status2').css('border', '0.01vw solid #ff8c20');
					$('#hud #hunger').css('height', '0.8vw');
					$('.right-status1').css('height', '0.9vw');
					$('.right-status1').css('right', '2.0vw');
					$('.right-status1').css('margin-top', '1.0vw');
					$('.right-status1').css('border', '0.01vw solid #fff');
					$('#hud #armor').css('height', '0.8vw');
					$('.right-status2').css('height', '0.9vw');
					$('.right-status2').css('margin-top', '0.5vw');
					$('.right-status2').css('right', '2.0vw');
					$('.right-status2').css('border', '0.01vw solid #2196F3');
					$('#hud #thirst').css('height', '0.8vw');
					}, 300)
				}else{
					$('#hud').fadeIn();
					this.setTimeout(() => {

					$('#hud #player-header').css('height', '0vw');
					$('#hud #player-name ,#hud #player-cash').addClass('d-none');
					$('#hud #player-name ,#hud #player-cash').removeClass('d-block');
					$('#hud .player-hour, #hud .player-id').fadeIn(0);
					$('#hud #player-job, #hud #player-gang').addClass('d-none');
					$('.left-status1, .left-status2, .right-status1, .right-status2').removeClass('cp-none');
					$('.right-status1, .right-status2').addClass('r-cp');
					$('.left-status1, .left-status2').addClass('l-cp');
					$('#designer').fadeOut(500);
					$('#hud #player-ping').css('left', '0.5vw');
					$('#hud #server-name').css('width', '12.5vw');
					$('.left-square1').css('width', '2vw');
					$('.left-square1').css('left', '0.5vw');
					$('.left-square2').css('left', '0.5vw');
					$('.left-square2').css('width', '2vw');
					$('.right-square1').css('width', '2vw');
					$('.right-square1').css('right', '0.5vw');
					$('.right-square2').css('right', '0.5vw');
					$('.right-square2').css('width', '2vw');
					$('.left-status1').css('height', '1.7vw');
					$('.left-status1').css('margin-top', '0vw');
					$('.left-status1').css('left', '2.5vw');
					$('.left-status1').css('border', 'none');
					$('#hud #health').css('height', '1.7vw');
					$('.left-status2').css('height', '1.7vw');
					$('.left-status2').css('left', '2.5vw');
					$('.left-status2').css('margin-top', '0vw');
					$('.left-status2').css('border', 'none');
					$('#hud #hunger').css('height', '1.7vw');
					$('.right-status1').css('height', '1.7vw');
					$('.right-status1').css('margin-top', '0.5vw');
					$('.right-status1').css('right', '2.5vw');
					$('.right-status1').css('border', 'none');
					$('#hud #armor').css('height', '1.7vw');
					$('.right-status2').css('height', '1.7vw');
					$('.right-status2').css('margin-top', '0.0vw');
					$('.right-status2').css('right', '2.5vw');
					$('.right-status2').css('border', 'none');
					$('#hud #thirst').css('height', '1.7vw');
					
					}, 300)
				};
				visible = !visible;
				break;	
		
		case 'setHUDDisplay': {
			setHUDDisplay(data.opacity);
			break;
		};

		case 'setHUDName': {
			setHUDName(data.name);
			break;
		};

		case 'setHUDID': {
			setHUDID(data.source);
			break;
		};

		case 'setHUDJob': {
			setHUDJob(data.data);
			break;
		};
		
		case 'setHUDGang': {
			setHUDGang(data.data);
			break;
		};

		case 'setHUDPing': {
			setHUDPing(data.ping);
			break;
		};

		case 'setHUDData': {
			setHUDData(data.data);
			break;
		};

		case 'setHUDCash': {
			setHUDCash(data.money);
			break;
		};

		case 'setHUDStatus': {
			setHUDStatus(data.data);
			break;
		};

		  // Clock based on user's local hour

// Designed BY Milad >>> Discord:MiLaD#0125
	};
	if (event.data.action == "ping"){
			updatePing(event.data);
		}
	  function updateClock() {
    var now = new Date(),
        time = (now.getHours()<10?'0':'') + now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes();

   document.getElementById('hour').innerHTML = [time];
   setTimeout(updateClock, 1000);
  }
    updateClock();
	
});