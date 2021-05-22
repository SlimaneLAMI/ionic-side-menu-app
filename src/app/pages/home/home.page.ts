import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  
  data: any;
  constructor() { 
    this.data = [
      {
        title: 'Plannifier sa semaine',
        description: 'Visibilité sur les 7 prochains jours',
        icon: './assets/img/1.png'
      },
      {
        title: 'Atteindre ses objectifs',
        description: 'Priorisation des tâches',
        icon: './assets/img/2.png'
      },
      {
        title: 'Analyser sa productivité',
        description: 'Visualiser le travail accompli',
        icon: './assets/img/3.png'
      }
    ];
  }

  ngOnInit() {
  }
  // onClick(event){
  //   let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  //   systemDark.addListener(this.colorTest);
  //   if(event.detail.checked){
  //     document.body.setAttribute('data-theme', 'dark');
  //   }
  //   else{
  //     document.body.setAttribute('data-theme', 'light');
  //   }
  // }

  //  colorTest(systemInitiatedDark) {
  //   if (systemInitiatedDark.matches) {
  //     document.body.setAttribute('data-theme', 'dark');		
  //   } else {
  //     document.body.setAttribute('data-theme', 'light');
  //   }
  // }

}
