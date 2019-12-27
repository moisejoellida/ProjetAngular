import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';


import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 
      this.items = this.cartService.getItems();

      this.checkoutForm = this.formBuilder.group({
        name:'',
        adresse:'',
        prenom:'',
        coordonneesbancaire:'',
        numerocryptage:''
      });
    }

    onSubmit(customerData){
      //processus de récupération des données du client
      console.warn('Votre commande a été soumise !', customerData);

      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();

    }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
