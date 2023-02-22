import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private http:HttpClient) { }
  postData(userData:any){
    this.http.post('https://jsonplaceholder.typicode.com/posts',userData).subscribe((res)=>{
      console.log('Post : ',res);
      
    })
      }
      putData(userData:any,id:any){
    this.http.put('https://jsonplaceholder.typicode.com/posts/'+id,userData).subscribe((res)=>
    {
      console.log('Put : ',res);
      
    })

      }
      patchData(userData:any,id:any){
    this.http.patch('https://jsonplaceholder.typicode.com/posts/'+id,userData).subscribe((res)=>{
      console.log('Patch : ',res);
      
    })

      }
      deleteData(id:any){
    this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id).subscribe((res)=>{
      console.log( 'Delete : ',res);
      
    })

      }
  
}
