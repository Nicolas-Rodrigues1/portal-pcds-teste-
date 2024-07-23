import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:[
        HomeComponent
    ]
})

export class HomeModule{}