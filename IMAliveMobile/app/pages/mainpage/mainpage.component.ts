import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mainpage',
	templateUrl: 'pages/mainpage/mainpage.component.html',
	styleUrls: ['pages/mainpage/mainpage.component.css']
})

export class MainpageComponent implements OnInit {
	status: string;
	usePhoneNumber: boolean = false;
	useLatLong: boolean = false;

	constructor() { }

	ngOnInit() { }

	chatNow(event) {
		//console.dir(event);
		this.status = "Connecting to a volunteer...";
	}
}