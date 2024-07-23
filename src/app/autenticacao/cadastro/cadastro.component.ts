import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    private formularioService: FormularioService,
    private router: Router
  ){}

  cadastrar(){
    const formCadastro = this.formularioService.getCadastro();
    console.log(formCadastro?.value)
    this.router.navigate(['/auth/login'])
  }

}
