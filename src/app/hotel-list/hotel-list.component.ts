import { Component } from "@angular/core";

@Component({
    selector: 'app-hotel-list',
    templateUrl: 'hotel-list.component.html'
})
export class HotelListComponent {
   
    public title = 'Liste Hotel'
    //ici on plac e la listes des hotels aui sont disponibles

    /**
     * hotels:any[] =[]    */
    public hotels:any[] =[
    {
        hotelId: 1,
        hotelName:'lagon',
        description: 'voici la description',
        Price:5000,
        imageUrl:'assets/img/hotel-room.jpg'
    },
    {
        hotelId: 2,
        hotelName:'Radison',
        description: 'voici la description',
        Price:5000,
        imageUrl:'assets/img/indoors.jpg'
    },
    {
        hotelId: 3,
        hotelName:'hotel de police',
        description: 'voici la description',
        Price:5000,
        imageUrl:'assets/img/the-interior.jpg'
    },
    {
        hotelId: 4,
        hotelName:'Radissan',
        description: 'voici la description',
        Price:5000,
        imageUrl:'assets/img/window.jpg'
    },
    ] ;
}