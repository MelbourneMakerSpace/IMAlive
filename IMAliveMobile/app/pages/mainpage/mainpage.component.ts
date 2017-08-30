import { Component, OnInit } from '@angular/core';
import { getCurrentLocation, isEnabled, enableLocationRequest, Location } from "nativescript-geolocation"
import { Accuracy } from "ui/enums"
import { PropertyChangeData } from "data/observable";
import * as switchModule from "tns-core-modules/ui/switch";

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

	getLocation() {
		console.log("get location called...")
		let location: Location;
		getCurrentLocation({
			desiredAccuracy: Accuracy.high, timeout: 20000
		}).then(x => console.log("Lat:", x.latitude, " Lon:", x.longitude)).catch(err => console.log(err));

	}

	switchLatLong(event: PropertyChangeData) {
		let myswitch: switchModule.Switch = <switchModule.Switch>event.object;
		this.useLatLong = !myswitch.checked;
		//console.log("latlong ok? ", this.useLatLong);
		if (!isEnabled()) {
			console.log("asking permission...")
			enableLocationRequest().then(x => this.getLocation());
		} else {
			console.log("we have permission already");
			this.getLocation();
		}





	}

	chatNow(event) {
		//console.dir(event);
		this.status = "Connecting to a volunteer...";
	}
}