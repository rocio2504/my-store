import { Component } from '@angular/core'

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
  }
}
