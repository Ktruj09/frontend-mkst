import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService, UploadService]
})
export class EditUserComponent implements OnInit {
  public title: string;
	public user: any;
	public identity:any;
	public token: any;
	public status: string;
 public url: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userservice: UserService,
    private _uploadService: UploadService,
    
    
  ) {
    this.title= 'Actualizar Datos'
		this.user= this._userservice.getIdentity();
		this.identity = this.user;
	  this.token = this._userservice.getToken();
		this.status = 'string';
    this.filesToUpload= <any> [];
    this.url = Global.URL;
    
   }

  ngOnInit() {
   console.log(this.user);
   console.log('Componente cargado correctamente!')
  }

  onSubmit(){
console.log(this.user);
this._userservice.updateUser(this.user).subscribe(
  response =>{

    if(!response.user){
      this.status= 'error'
    }else{
      this.status= 'success'
      localStorage.setItem('identity', JSON.stringify(this.user))
      this.identity = this.user;

      //subida de archivos
      this._uploadService.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
                          .then((result: any)=>{
                            console.log(result);
                            this.user.image = result.user.image;
                            localStorage.setItem('identity', JSON.stringify(this.user))
                          })
    }

  }, error =>{
    var errorMessage= <any>error;
    console.log(errorMessage);

    if(errorMessage != null){
      this.status = 'error'
    }
  }
)
  }//end Onsubmit()

  //método para subir imagén
  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
this.filesToUpload =<Array<File>>fileInput.target.files;
console.log(this.filesToUpload)
  }
}
