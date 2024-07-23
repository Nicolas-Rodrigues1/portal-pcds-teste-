import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './services/home.service';
import { UserService } from '../autenticacao/services/user.service';
import { Router } from '@angular/router';
import { MensagemService } from '../core/services/mensagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    homeForm!: FormGroup;

  @Input() title = 'Monte seu pedido de venda'
  @Input() textoBotao = 'Realizar pedido'

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private userService: UserService,
    private router: Router,
    private mensagemService: MensagemService
  ){}

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      placaMae: [null, [Validators.required]],
      processador: [null, [Validators.required]],
      memoriaRam: [null, [Validators.required]],
      armazenamento: [null, [Validators.required]],
      monitor: [null, [Validators.required]],
      teclado: [null, [Validators.required]],
      mouse: [null, [Validators.required]],
      
    })

    this.homeForm.get('placaMae')?.valueChanges.subscribe(value => {
      this.desabilitaProcessador(value);
    });

    this.homeForm.valueChanges.subscribe(() => {
      this.opcaoSelecionada();
    });

    this.homeService.setHomeForm(this.homeForm);

  }

  realizarPedido() {
    const formValues = this.homeForm.value;
    const mensagemPedido = `Pedido realizado com sucesso: 
      Placa Mãe: ${formValues.placaMae || 'N/A'}, 
      Processador: ${formValues.processador || 'N/A'}, 
      Memória RAM: ${formValues.memoriaRam || 'N/A'}, 
      Armazenamento: ${formValues.armazenamento || 'N/A'}, 
      Monitor: ${formValues.monitor || 'N/A'}, 
      Teclado: ${formValues.teclado || 'N/A'}, 
      Mouse: ${formValues.mouse || 'N/A'}`;
    
    this.mensagemService.openSnackBar(mensagemPedido, 10000)
    this.homeForm.reset()
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  opcaoSelecionada() {
    const controls = this.homeForm.controls;
    return Object.keys(controls).some(key => controls[key].value !== null);
  }

  desabilitaProcessador(value: string) {
    const processadorControl = this.homeForm.get('processador');
  
    if (value === 'asus') {
      processadorControl?.setValue(null);
      processadorControl?.get('amd')?.disable({ emitEvent: false });
      processadorControl?.get('intel')?.enable({ emitEvent: false });
    } else if (value === 'gigabyte') {
      processadorControl?.setValue(null);
      processadorControl?.get('intel')?.disable({ emitEvent: false });
      processadorControl?.get('amd')?.enable({ emitEvent: false });
    } else {
      processadorControl?.enable({ emitEvent: false });
    }
  }


}
