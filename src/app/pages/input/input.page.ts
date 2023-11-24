import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre: string = '';
  usuario = {
    email: '',
    telephone: '',
    birthdate: new Date(),  }
  constructor() { }
  
  ngOnInit() {
  }
  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario.birthdate);
    console.log(this.calcularedad() + 'años')
    console.log(formulario);
  }

  calcularedad() {
    const fechaNacimiento = new Date(this.usuario.birthdate);
    const hoy = new Date();
  
    const anioNacimiento = fechaNacimiento.getFullYear();
    const mesNacimiento = fechaNacimiento.getMonth() + 1;
    const diaNacimiento = fechaNacimiento.getDate();
  
    const anioActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();
  
    let edad = anioActual - anioNacimiento;
  
    // Verificamos si el cumpleaños ya ha pasado o no en el año actual
    const cumplePasado = mesActual > mesNacimiento || (mesActual === mesNacimiento && diaActual >= diaNacimiento);
  
    // Restamos un año si el cumpleaños no ha pasado aún en el año actual
    if (!cumplePasado) {
      edad--;
    }
  
    return edad;
  }
}

