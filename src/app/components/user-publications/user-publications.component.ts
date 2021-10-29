import { Component, OnInit,  DoCheck} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';
@Component({
  selector: 'app-user-publications',
  templateUrl: './user-publications.component.html',
  styleUrls: ['./user-publications.component.css'],
  providers: [UserService, PublicationService]
})
export class UserPublicationsComponent implements OnInit {
  public identity: any;
  public url;
  public token;
  public publication: Publication
  public status;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userservice: UserService,
    private _publicationService: PublicationService
    ) { 
      this.url = Global.URL;
      this.publication = new Publication("", "", "", "", "")
      this.token = this._userservice.getToken();
      this.status = 'string'
    }

  ngOnInit() {
    this.identity = this._userservice.getIdentity();
    console.log(this.identity)
  }



  logout(){
    localStorage.clear();
    this.identity= null;
    this._router.navigate(['/login']);
  }

  onSubmit( form:any){

    this._publicationService.addPublication(this.token, this.publication).subscribe(
      response =>{
if(response.publication){
  //this.publication = response.publication;
  this.status = 'success';
  form.reset();
}else{
  this.status = 'error';
}
      }, error =>{
        var errorMessage= <any>error;
        console.log(errorMessage);
        if(!errorMessage !=null){
          this.status = 'error'
        }
      }
    )
  }

}
