import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variable boolean qui indique si la calculatrice et on ou bien off
  eteindre=false;
  //ce qui est entrain de cliquer exemple(2+5=)
  value="";
  //détermine l'opératuer (+,-,/,*,%)
  op;
  //resultat de l'opération
  result;
  //tableau qui contien les valeurs (nombre1,nombre2)
  res;
  title = 'exercice6';
  
  //on cliquant sur l'opérateur 
  operateur(op)
  {
   this.op=op;
   this.value=this.value+op;

  }

  //gérer des cas particuliers comme c,racine,effacer,1/x
  change(lettre)
    {switch (lettre) {
      case 'C':
        //initialiser tous les variables
          this.value="";
          this.result="";
          this.op="";
          this.res=[];
      break;
        
      case '←':
        //effacer la derniére lettre afficher sur l'écran
          this.value=this.value.substring(0,this.value.length-1);
      break;

      case '√': 
        //faire la racine carré 
          console.log(this.result);
          this.value=lettre+this.value;
          this.result=Math.sqrt(this.result);
          console.log(this.result);
      break;

      case '1/x':
        //faire 1/nombre
        this.value=lettre+this.value;
        this.result=1/(this.result);
        console.log(this.result);
      break;
      
    
    }

    }
    //on cliquant sur le nombre
    cliquer(nombre)
    {
    /* if(this.value=='0')
    {
      this.value=nombre;
    }
    else{*/
      console.log(this.res);
      //faire concaténation pour l'affichage sur écran
      this.value=this.value+nombre;
      //si value est un nombre unique par exemple pour faire (racine de 3)on le convertie
      // en int dans la variable result
      this.result=parseInt(this.value);
      console.log('hi'+this.result);
      console.log('hi'+this.value);
      //convertir la chaine de caractére en tableau en faisant la séparation par this.op
      this.res=this.value.split(this.op);
      console.log(this.res);
    
    //selon l'opérateur on fait
    switch (this.op) {
        case '+':
        this.result=parseInt(this.res['0'])+parseInt(this.res['1'] );
        console.log(this.result);
        //this.value=this.result.toString();
          break;
          case '-':
            this.result=parseInt(this.res['0'])-parseInt(this.res['1'] );
            console.log(this.result);
            console.log(this.res['0'],this.res['1']);
            //this.value=this.result.toString();
            break;
            case '*':
            this.result=parseInt(this.res['0'])*parseInt(this.res['1'] );
            console.log(parseInt(this.res['0']));
            this.value=this.result.toString();
            break;
            case '/':
            this.result=parseInt(this.res['0'])/parseInt(this.res['1'] );
            console.log(this.result);
            break;
            case '%':
            this.result=parseInt(this.res['0'])%parseInt(this.res['1'] );
            console.log(this.result);
            break;
            
        default:
          break;
      }}
  /*   var somme=0;
  if( !isNaN(nombre))
  {
    var nombre1=nombre;
    console.log(nombre1);
  
  }
  else{
    var op=nombre;
    
  }*/


   
  
}
