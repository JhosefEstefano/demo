import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageI } from '../Interfaces/ImageI';
import { Producto } from '../Interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }


  getProductos(): Producto[]{
    let productos: Producto[] = [{
      "Id": 1,
      "Nombre": "Pineapple - Golden",
      "Codigo": "488678320-1",
      "Precio": "$90.34",
      "Pos": "Bergnaum-Moore",
      "IMG": "http://dummyimage.com/227x100.png/5fa2dd/ffffff"
    }, {
      "Id": 2,
      "Nombre": "Cheese - Mozzarella, Buffalo",
      "Codigo": "608980852-0",
      "Precio": "$64.45",
      "Pos": "Effertz-Fisher",
      "IMG": "http://dummyimage.com/206x100.png/5fa2dd/ffffff"
    }, {
      "Id": 3,
      "Nombre": "Mushroom - Porcini, Dry",
      "Codigo": "586293719-6",
      "Precio": "$8.86",
      "Pos": "Pagac, HeIdenreich and Hand",
      "IMG": "http://dummyimage.com/122x100.png/dddddd/000000"
    }, {
      "Id": 4,
      "Nombre": "Venison - Liver",
      "Codigo": "192992747-9",
      "Precio": "$16.03",
      "Pos": "Connelly, Kshlerin and Ankunding",
      "IMG": "http://dummyimage.com/119x100.png/dddddd/000000"
    }, {
      "Id": 5,
      "Nombre": "Pastrami",
      "Codigo": "626955488-8",
      "Precio": "$7.37",
      "Pos": "Brown, Waters and Schumm",
      "IMG": "http://dummyimage.com/228x100.png/5fa2dd/ffffff"
    }, {
      "Id": 6,
      "Nombre": "Pork - KIdney",
      "Codigo": "307530094-2",
      "Precio": "$19.86",
      "Pos": "Kshlerin Group",
      "IMG": "http://dummyimage.com/240x100.png/ff4444/ffffff"
    }, {
      "Id": 7,
      "Nombre": "Cheese - Mix",
      "Codigo": "285697456-2",
      "Precio": "$22.83",
      "Pos": "Klein-Adams",
      "IMG": "http://dummyimage.com/200x100.png/5fa2dd/ffffff"
    }, {
      "Id": 8,
      "Nombre": "Ostrich - Prime Cut",
      "Codigo": "990741334-8",
      "Precio": "$62.62",
      "Pos": "Bayer, Moore and Halvorson",
      "IMG": "http://dummyimage.com/128x100.png/5fa2dd/ffffff"
    }, {
      "Id": 9,
      "Nombre": "Bread - Roll, Soft White Round",
      "Codigo": "233981323-9",
      "Precio": "$18.12",
      "Pos": "Walsh LLC",
      "IMG": "http://dummyimage.com/147x100.png/5fa2dd/ffffff"
    }, {
      "Id": 10,
      "Nombre": "Soup - Campbells, Minestrone",
      "Codigo": "029683442-4",
      "Precio": "$30.17",
      "Pos": "Heaney-Schultz",
      "IMG": "http://dummyimage.com/151x100.png/5fa2dd/ffffff"
    }, {
      "Id": 11,
      "Nombre": "Mint - Fresh",
      "Codigo": "160700841-6",
      "Precio": "$95.51",
      "Pos": "Bosco-Goyette",
      "IMG": "http://dummyimage.com/195x100.png/cc0000/ffffff"
    }, {
      "Id": 12,
      "Nombre": "Bagel - Everything Presliced",
      "Codigo": "577507693-1",
      "Precio": "$93.54",
      "Pos": "Zieme Group",
      "IMG": "http://dummyimage.com/222x100.png/dddddd/000000"
    }, {
      "Id": 13,
      "Nombre": "Bread - White, Unsliced",
      "Codigo": "017689524-8",
      "Precio": "$83.49",
      "Pos": "Beier LLC",
      "IMG": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }, {
      "Id": 14,
      "Nombre": "Wine - White, Ej",
      "Codigo": "900115023-3",
      "Precio": "$87.39",
      "Pos": "Huels Inc",
      "IMG": "http://dummyimage.com/201x100.png/ff4444/ffffff"
    }, {
      "Id": 15,
      "Nombre": "Vodka - Lemon, Absolut",
      "Codigo": "813566067-7",
      "Precio": "$47.55",
      "Pos": "Smitham, Graham and Pfannerstill",
      "IMG": "http://dummyimage.com/223x100.png/dddddd/000000"
    }, {
      "Id": 16,
      "Nombre": "Cheese - Asiago",
      "Codigo": "174029404-1",
      "Precio": "$26.41",
      "Pos": "Kohler and Sons",
      "IMG": "http://dummyimage.com/247x100.png/cc0000/ffffff"
    }, {
      "Id": 17,
      "Nombre": "Pasta - Tortellini, Fresh",
      "Codigo": "034508335-0",
      "Precio": "$60.76",
      "Pos": "Klocko, Mann and Hyatt",
      "IMG": "http://dummyimage.com/162x100.png/ff4444/ffffff"
    }, {
      "Id": 18,
      "Nombre": "Asparagus - Green, Fresh",
      "Codigo": "510268791-3",
      "Precio": "$36.50",
      "Pos": "Dooley, Boyle and Mante",
      "IMG": "http://dummyimage.com/248x100.png/ff4444/ffffff"
    }, {
      "Id": 19,
      "Nombre": "Sprouts - Bean",
      "Codigo": "400413216-9",
      "Precio": "$74.59",
      "Pos": "Jerde and Sons",
      "IMG": "http://dummyimage.com/234x100.png/cc0000/ffffff"
    }, {
      "Id": 20,
      "Nombre": "Cake Slab",
      "Codigo": "246685249-7",
      "Precio": "$96.80",
      "Pos": "Lakin-Spencer",
      "IMG": "http://dummyimage.com/212x100.png/ff4444/ffffff"
    }, {
      "Id": 21,
      "Nombre": "Foam Espresso Cup Plain White",
      "Codigo": "066511548-2",
      "Precio": "$60.83",
      "Pos": "Farrell, Bernier and Leannon",
      "IMG": "http://dummyimage.com/192x100.png/cc0000/ffffff"
    }, {
      "Id": 22,
      "Nombre": "Appetizer - Seafood Assortment",
      "Codigo": "791496266-X",
      "Precio": "$66.41",
      "Pos": "Barton-Torp",
      "IMG": "http://dummyimage.com/220x100.png/ff4444/ffffff"
    }, {
      "Id": 23,
      "Nombre": "Plate - Foam, Bread And Butter",
      "Codigo": "712146402-0",
      "Precio": "$20.38",
      "Pos": "Kihn-ConsIdine",
      "IMG": "http://dummyimage.com/155x100.png/5fa2dd/ffffff"
    }, {
      "Id": 24,
      "Nombre": "Shrimp - 31/40",
      "Codigo": "044365343-7",
      "Precio": "$48.15",
      "Pos": "Schuster LLC",
      "IMG": "http://dummyimage.com/197x100.png/cc0000/ffffff"
    }, {
      "Id": 25,
      "Nombre": "Extract Vanilla Pure",
      "Codigo": "082339072-1",
      "Precio": "$31.59",
      "Pos": "Ryan LLC",
      "IMG": "http://dummyimage.com/244x100.png/cc0000/ffffff"
    }, {
      "Id": 26,
      "Nombre": "Cheese - Havarti, Salsa",
      "Codigo": "414657399-8",
      "Precio": "$44.72",
      "Pos": "Hirthe-Stracke",
      "IMG": "http://dummyimage.com/152x100.png/ff4444/ffffff"
    }, {
      "Id": 27,
      "Nombre": "Beer - Original Organic Lager",
      "Codigo": "940487423-X",
      "Precio": "$23.71",
      "Pos": "Olson and Sons",
      "IMG": "http://dummyimage.com/140x100.png/cc0000/ffffff"
    }, {
      "Id": 28,
      "Nombre": "Soup - Verve - Chipotle Chicken",
      "Codigo": "359340160-6",
      "Precio": "$84.93",
      "Pos": "Wisozk, Nolan and Thiel",
      "IMG": "http://dummyimage.com/149x100.png/5fa2dd/ffffff"
    }, {
      "Id": 29,
      "Nombre": "Cheese - Oka",
      "Codigo": "411178277-9",
      "Precio": "$70.21",
      "Pos": "Cormier LLC",
      "IMG": "http://dummyimage.com/119x100.png/cc0000/ffffff"
    }, {
      "Id": 30,
      "Nombre": "Crush - Cream Soda",
      "Codigo": "700813109-7",
      "Precio": "$65.15",
      "Pos": "Conn Inc",
      "IMG": "http://dummyimage.com/230x100.png/cc0000/ffffff"
    }];

    return productos;
  }

  getImg(): ImageI[]{
    let imgages: ImageI[] = 
      [
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1511556820780-d912e42b4980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxfHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyfHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwzfHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1567721913486-6585f069b332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHw0fHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1611930022073-b7a4ba5fcccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHw1fHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1571781926291-c477ebfd024b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHw2fHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1627384113743-6bd5a479fffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHw3fHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHw4fHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHw5fHxwcm9kdWN0c3xlbnwwfHx8fDE2NTAzOTA2MDE&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1625772452859-1c03d5bf1137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxMHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1629198688000-71f23e745b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxMXx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1568386453619-84c3ff4b43c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxMnx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxM3x8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1525904097878-94fb15835963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxNHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxNXx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1598662957563-ee4965d4d72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxNnx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1479064555552-3ef4979f8908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxN3x8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1491933382434-500287f9b54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxOHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1585155770447-2f66e2a397b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwxOXx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1587303876752-91efb6315dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyMHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyMXx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyMnx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1610824352934-c10d87b700cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyM3x8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyNHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1525966222134-fcfa99b8ae77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyNXx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1519735777090-ec97162dc266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyNnx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1598460880248-71ec6d2d582b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyN3x8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1631125915902-d8abe9225ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyOHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1585386959984-a4155224a1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwyOXx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        },
        {
         "IMG": "https:\/\/images.unsplash.com\/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjA5NDR8MHwxfHNlYXJjaHwzMHx8cHJvZHVjdHN8ZW58MHx8fHwxNjUwMzkwNjAx&ixlib=rb-1.2.1&q=80&w=200"
        }
  ]
  return imgages;
  }

  

}
