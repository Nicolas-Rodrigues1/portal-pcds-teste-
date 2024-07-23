import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";

@NgModule({
    declarations:[
        CadastroComponent,
        LoginComponent
  ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule,
        AutenticacaoRoutingModule
    ],
    exports:[
        CadastroComponent,
        LoginComponent
    ]
})

export class AutenticacaoModule{}