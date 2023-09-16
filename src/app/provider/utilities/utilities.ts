import { Injectable } from "@angular/core";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

@Injectable({
    providedIn: 'root'
})

export class UtilitiesProvider{
    constructor(){}

    createPane(selector: string | HTMLElement, options?: Partial<CupertinoSettings>) {
		const config: CupertinoSettings = {
			parentElement: "ion-app",
			backdrop: true,
			backdropOpacity: 0.8,
			initialBreak: "top",
			fitHeight: true,
			handleKeyboard: false,
			breaks: {
				top: { enabled: true, height: 400 },
				middle: { enabled: true, height: 300 },
				bottom: { enabled: false },
			},
			...options,
		};
		return new CupertinoPane(selector, config);
	}


}