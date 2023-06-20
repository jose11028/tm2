import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Tmer } from './tmer.model';

@Injectable()
export class TmerService {

  private tmers: Tmer[] = [
    {
      id:"1",
      title:"StellarVibes",
      city: "New York",
      street:"Time Square",
      category: "Fashion",
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.soy502.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_node%2Fpublic%2F2019%2FSep%2F17%2Fdiane_bathen_modelo_guatemalteca_soy502_guatemala.jpg&tbnid=X2rOGVgi8iw6fM&vet=12ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fwww.soy502.com%2Farticulo%2Fmodelos-mas-famosas-guatemala-153&docid=0CDOnn7XUA8xZM&w=940&h=627&q=picture%20modelos%20de%20guatemala&ved=2ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ/350x250",
      bedrooms: 2,
      description: "International Model",
      dailyRate: 30,
      shared: false,
      createdAt: "24/12/2022"

    },

    {
      id:"2",
      title:"TrendMaven",
      city: "Sao Paulo",
      street:"Time Square",
      category: "Lifestyle and Personal Development",
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.soy502.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_node%2Fpublic%2F2019%2FSep%2F17%2Fdiane_bathen_modelo_guatemalteca_soy502_guatemala.jpg&tbnid=X2rOGVgi8iw6fM&vet=12ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fwww.soy502.com%2Farticulo%2Fmodelos-mas-famosas-guatemala-153&docid=0CDOnn7XUA8xZM&w=940&h=627&q=picture%20modelos%20de%20guatemala&ved=2ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ/350x250",
      bedrooms: 2,
      description: "International Model",
      dailyRate: 30,
      shared: false,
      createdAt: "24/12/2022"

    },

    {
      id:"3",
      title:"TheInfluenceHub",
      city: "Caracas",
      street:"Time Square",
      category: "Fitness",
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.soy502.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_node%2Fpublic%2F2019%2FSep%2F17%2Fdiane_bathen_modelo_guatemalteca_soy502_guatemala.jpg&tbnid=X2rOGVgi8iw6fM&vet=12ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fwww.soy502.com%2Farticulo%2Fmodelos-mas-famosas-guatemala-153&docid=0CDOnn7XUA8xZM&w=940&h=627&q=picture%20modelos%20de%20guatemala&ved=2ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ/350x250",
      bedrooms: 2,
      description: "International Model",
      dailyRate: 40,
      shared: false,
      createdAt: "24/12/2022"

    },
    {
      id:"4",
      title:"CaptivateLife",
      city: "Montreal",
      street:"Time Square",
      category: "Travel and Adventure",
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.soy502.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_node%2Fpublic%2F2019%2FSep%2F17%2Fdiane_bathen_modelo_guatemalteca_soy502_guatemala.jpg&tbnid=X2rOGVgi8iw6fM&vet=12ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fwww.soy502.com%2Farticulo%2Fmodelos-mas-famosas-guatemala-153&docid=0CDOnn7XUA8xZM&w=940&h=627&q=picture%20modelos%20de%20guatemala&ved=2ahUKEwjDqvmMu8n_AhXxAVkFHdcLAVIQMygBegUIARCvAQ/350x250",
      bedrooms: 2,
      description: "International Model",
      dailyRate: 50,
      shared: false,
      createdAt: "24/12/2022"

    }

  ];

  public getTmerById(tmerId:string): Observable<Tmer> {
    return new Observable<Tmer>((observer) => {
      setTimeout(() =>{
        const foundTmer = this.tmers.find((rental) => {
          return rental.id == tmerId;
        });
        observer.next(foundTmer);
      },500);
    });
  }



  public getTmers(): Observable<Tmer[]> {

    return  new Observable<Tmer[]>((observer) => {
      setTimeout(() => {

        observer.next(this.tmers);
      },1000);
   
    });


  }



}
