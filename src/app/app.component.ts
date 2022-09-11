import { r3JitTypeSourceSpan } from '@angular/compiler'
import { Component } from '@angular/core'
import { Product } from './product.model'
import { toArray } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Rocío'
  city = 'Callao'
  img =
    'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg'
  btnDisabled = true
  age = 18

  person = {
    name: 'Rocío',
    city: 'Callao',
    avatar: 'https://conectajuarez.com/wp-content/uploads/2020/06/n7-1.jpg',
    progress: 70,
    age: 18,
  }

  //names: string[] | number [] = ['Nico', 'Juli', 'Santi']
  names: string[] = ['Nico', 'Juli', 'Santi']
  newName = ''
  addName() {
    this.names.push(this.newName)
    this.newName = ''
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }

  products: Product[] = [
    { name: 'El mejor juguete', price: 10, image: './assets/images/toy.jpg' },
    {
      name: 'Bicicleta casi nueva',
      price: 234,
      image: './assets/images/bicicleta.jpg',
      category: 'All',
    },
    {
      name: 'Colección de albumes',
      price: 890,
      image: './assets/images/album.jpg',
    },
    { name: 'Mis libros', price: 120, image: './assets/images/libros.jpg' },
    { name: 'Cartera', price: 100, image: './assets/images/cartera.jpg' },
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }
  increaseAge() {
    this.person.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement
    this.person.name = element.value
  }
}
