import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'prueba-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  form: FormGroup = new FormGroup({})
  isCheck: any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
    'nombre': ['',[Validators.required || Validators.pattern('[a-zA-Z]')]],
    'telefono': ['',[Validators.required || Validators.pattern('[0-9]'), Validators.maxLength(9)]],
    'localidad': ['',[Validators.required || Validators.pattern('[a-zA-Z]')]],
    'genero': ['',Validators.required],
    'email': ['',[Validators.required, Validators.email]]
  })
  }

  sendLogin(): void{
    this.isCheck = { user: 1}
  }

  get nombre(){
    return this.form.get('nombre') as FormControl;
  }

  get telefono(){
    return this.form.get('telefono') as FormControl;
  }

  get localidad(){
    return this.form.get('localidad') as FormControl;
  }

  get genero(){
    return this.form.get('genero') as FormControl;
  }

  get email(){
    return this.form.get('email') as FormControl;
  }


}
