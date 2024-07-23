import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homeForm: FormGroup | null = null;

  getHomeForm(): FormGroup | null {
    return this.homeForm;
  }
  
  setHomeForm(form: FormGroup){
    this.homeForm = form;
  }
  
}
