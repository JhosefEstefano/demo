import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { ImageI } from '../Interfaces/ImageI';
import { Producto } from '../Interfaces/IProducto';
import { PageService } from '../Services/page.service';

declare const $: any;

import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-luna',
  templateUrl: './media-luna.component.html',
  styleUrls: ['./media-luna.component.scss']
})
export class MediaLunaComponent implements OnInit {

  @ViewChild('camion') camion!: ElementRef<HTMLObjectElement>
  @ViewChild('progress') progress!: ElementRef<HTMLObjectElement>


  productos: Producto[] = [];
  img: ImageI[] = [];
  i: number = 0;

  llemo: number = 0;

  maximo: number = 50;


  constructor(private service: PageService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.productos = this.service.getProductos();
    this.img = this.service.getImg();
    for (let prod = 0; prod < this.productos.length; prod++) {

      this.productos[prod].IMG = this.img[prod].IMG;

      if (prod === 0) {
        let position = "background-image: url(" + this.productos[prod].IMG + "); left: 0px";
        this.productos[prod].Pos = position;
      } else {
        let temp: number = 12 / prod;
        let tempStr = temp.toFixed(2);
        let position = "background-image: url(" + this.productos[prod].IMG + ");left: calc((100% - 10px)/" + tempStr;

        this.productos[prod].Pos = position;
      }
    }

    console.log(this.productos)
  }


  entrada() {
    console.log('Entrada!!!', this.camion.nativeElement.className)
    this.camion.nativeElement.className = ""
    this.camion.nativeElement.className = "animate__animated animate__bounceInLeft"
  }

  ingreso() {
    console.log('Entrada!!!', this.camion.nativeElement.className)
    this.camion.nativeElement.className = ""
    this.camion.nativeElement.className = "animate__animated animate__bounce"
  }

  salida() {
    console.log('Salida!!!', this.camion.nativeElement.className)
    this.camion.nativeElement.className = ""
    this.camion.nativeElement.className = "animate__animated animate__bounceOutRight"
  }

  confirmarCamion() {
    Swal.fire({
      title: '¿Está seguro que quiere confirmar el camión?',
      showDenyButton: true,
      confirmButtonText: 'Si, confirmar camión',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.salida();
        setTimeout(() => {
          this.router.navigateByUrl('check-out');
        }, 600);

      }
    })
  }

  alert(prod: Producto) {
    Swal.fire({
      title: "Confirmación de producto",
      text: "Por favor ingrese el numero de cajas que necesite.",
      imageUrl: prod.IMG,
      imageHeight: 200,
      imageWidth: 150,
      input: 'number',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      inputAttributes: {
        min: '1',
      }
    }).then((result) => {
      if (!result.value) {
      }
      if (result.value) {

   

        if(result.value <= this.maximo){

          let op1 = result.value * 100
          let res = op1 / this.maximo
          this.llemo = res

          console.log(res);

          // const card = document.getElementById(`${prod.Codigo}`)! as HTMLDivElement;

          this.camion.nativeElement.setAttribute('text',this.llemo.toString())

          this.progress.nativeElement.style.height = `${this.llemo}%`
      
          console.log(this.progress.nativeElement)

          // console.log(card);
          
          // card.hidden = true;
  
          this.spinner.show();
  
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
            this.ingreso();
          }, 5000);
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'No se puede agregar más de 50 cajas a este camión.',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        }

    
      }
    });
  }


  Cargar() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

  public saveFile(event: any): void {
    // ... save file
    console.log(event)
  }

  public handleDenial(): void {
    // ... don't save file and quit
  }

  public handleDismiss(event: any): void {
    console.log(event)
  }

}


