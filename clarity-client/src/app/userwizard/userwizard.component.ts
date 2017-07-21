import {Component, OnInit, ViewChild} from '@angular/core';
import {Wizard} from "clarity-angular";


@Component({
    selector: 'app-userwizard',
    templateUrl: './userwizard.component.html',
    styleUrls: ['./userwizard.component.scss']
})
export class UserwizardComponent implements OnInit {

    @ViewChild("wizardmd") wizardMedium: Wizard;
    @ViewChild("wizardlg") wizardLarge: Wizard;
    @ViewChild("wizardxl") wizardExtraLarge: Wizard;
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("number") numberFi: any;

    mdOpen: boolean = false;
    lgOpen: boolean = true;
    xlOpen: boolean = false;


    model = {
        name: "",
        age: "",
        gender: "",
        country: "",
        expertise: "",
        languages: "",
        areasofinterest: ""
    };


    constructor() {
    }

    ngOnInit() {
    }
}



