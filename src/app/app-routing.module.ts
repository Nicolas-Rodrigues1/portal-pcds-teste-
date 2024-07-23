import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./autenticacao/cadastro/cadastro.component";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: '',
        component: CadastroComponent
    },
    {
        path: '**',
        redirectTo: '/pagina-nao-encontrada',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}