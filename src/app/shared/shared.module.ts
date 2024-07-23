import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { MaterialModule } from "../core/material/material.module";
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        HeaderComponent,
        FormBaseComponent,
        BannerComponent,
        ContainerComponent,
        FormBaseComponent,
        CardComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports:[
        FooterComponent,
        HeaderComponent,
        FormBaseComponent,
        BannerComponent,
        ContainerComponent,
        FormBaseComponent,
        CardComponent
    ]
})

export class SharedModule{}