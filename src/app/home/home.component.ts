import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private apiServ:ApiCallService){}
  updatePost={ 
  id:'',
   title:'',
  body:'',
}

posts={
  id:'',
  title:'',
  body:'',
}

deletePost={
  id:''
}
  postData(){
        this.apiServ.postData(this.posts)
  }
  putData(){
    this.apiServ.putData(this.updatePost,this.updatePost.id)

  }
  patchData(){
    this.apiServ.patchData(this.updatePost,this.updatePost.id)

  }
  deleteData(){
    this.apiServ.deleteData(this.deletePost.id)

  }
}
