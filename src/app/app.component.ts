import { Component } from "@angular/core";
import {
	RouteConfigLoadStart,
	RouteConfigLoadEnd,
	Router,
} from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title: string = "interview-anteraja";
	isLoading: boolean = false;
	isNavbarOpen: boolean = false;

	constructor(router: Router) {
		router.events.subscribe((ev) => {
			if (ev instanceof RouteConfigLoadStart) {
				this.isLoading = true;
			} else if (ev instanceof RouteConfigLoadEnd) {
				this.isLoading = false;
			}
		});
	}

	public toggleNavbar() {
		this.isNavbarOpen = !this.isNavbarOpen
	}
}
