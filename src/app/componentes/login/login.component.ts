import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  conta: any;
  erro: boolean = false;

  onSubmit(form){
    this.conta = form.value
    if(this.conta.usuario == "Evert" && this.conta.senha == "123"){
      this.router.navigate(['/home'])
    }else {
      this.erro = true;
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
