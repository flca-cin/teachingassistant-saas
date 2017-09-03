import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teaching assistant';
  aluno: Aluno = { nome: '', cpf: '', email: '' };
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
}