import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital-add',
  templateUrl: './hospital-add.component.html',
  styleUrls: ['./hospital-add.component.css']
})
export class HospitalAddComponent implements OnInit {

  adicionarHospitalForm: FormGroup;

  constructor(private formBuider: FormBuilder) { 
    this.createForm();
  }

  /**
   * Método responsável por tratar as validações do Form que criará uma novo Hospital.
   */
  createForm() {
    this.adicionarHospitalForm = this.formBuider.group({
      nomeHospital: ['', Validators.required],
      horarioHospital: ['', Validators.required],
      enderecoHospital: ['', Validators.required],
      telefoneHospital: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
