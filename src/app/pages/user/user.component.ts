import { PaginationService } from './../../core/services/pagination/pagination.service';
import { ProductsService } from './../../core/services/product/products.service';
import { switchMap, Observable, forkJoin } from 'rxjs';
import { IProduct } from 'src/app/core/services/product/model/product.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from './../../core/services/user/user.service';
import { IUser } from './../../core/services/user/models/user.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userInfo?: IUser;
  public editUserView: boolean = false;
  public userInfoForm?: FormGroup;
  public products: IProduct[] = [];
  public currentPage: number = 1;
  public maxPage: number = 1;
  public imageUrl?: SafeResourceUrl;

  fileToUpload: File | null = null;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private productService: ProductsService,
    private pagination: PaginationService,
    private sanitazer: DomSanitizer
  ) {
    this.userInfoForm = this.fb.group({
      name: new FormControl('', [Validators.pattern('[A-Za-z]*')]),
      surname: new FormControl('', [Validators.pattern('[A-Za-z]*')]),
      age: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      img: new FormControl(''),
    });
  }

  /**
   * Get the user profile data and join in an array all the id products that the user have bought
   * With the ids call the api again and get the info detail of the products
   */
  ngOnInit(): void {
    const userId = this.userService.userId();
    this.userService
      .getUserProfile(userId)
      .pipe(
        switchMap((res) => {
          this.userInfo = res.data;

          this.imageUrl = res.data.img
            ? this.sanitazer.bypassSecurityTrustResourceUrl(res.data.img)
            : '';

          let arrayProductsId: number[] = [];
          res.data.userBuys?.forEach((product) => {
            arrayProductsId.push(product.productId);
          });

          let uniqueList: number[] = [...new Set(arrayProductsId.reverse())];
          let observableArray: Observable<IProduct>[] = [];

          uniqueList.forEach((id) =>
            observableArray.push(this.productService.getProductById(id))
          );

          return forkJoin(observableArray);
        })
      )
      .subscribe((res) => (this.products = res));

    this.userService.userInfo$.subscribe((res) => (this.userInfo = res));
    this.pagination.maxPage$.subscribe((page) => (this.maxPage = page));
  }

  public showForm() {
    this.editUserView = !this.editUserView;
  }

  public submitForm() {
    const userId = this.userService.userId();
    const formValue = this.userInfoForm?.value;

    const formData: FormData = new FormData();

    let image = this.fileToUpload ? this.fileToUpload : '';

    formData.append('name', formValue.name);
    formData.append('surname', formValue.surname);
    formData.append('age', formValue.age);
    formData.append('img', image);

    this.userService.editUser(userId, formData).subscribe((res) => {
      this.userInfo = res;
      this.imageUrl = res.img
        ? this.sanitazer.bypassSecurityTrustResourceUrl(res.img)
        : '';
    });

    this.editUserView = !this.editUserView;
  }

  public previousPage() {
    this.currentPage -= 1;
  }

  public nextPage() {
    this.currentPage += 1;
  }

  handleFileInput(event: any) {
    const files = event.target.files[0];
    this.fileToUpload = files;
  }

  getUserProductList() {}
}
