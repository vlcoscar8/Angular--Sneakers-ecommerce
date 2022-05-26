import { PaginationService } from './../../core/services/pagination/pagination.service';
import { ProductsService } from './../../core/services/product/products.service';
import { ProductCartService } from './../../core/services/product-cart/productcart.service';
import {
  combineLatest,
  concatMap,
  forkJoin,
  map,
  switchMap,
  tap,
  Observable,
} from 'rxjs';
import { IProduct } from 'src/app/core/services/product/model/product.model';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from './../../core/services/user/user.service';
import {
  IUser,
  IUserBuys,
  IUserResponseApi,
} from './../../core/services/user/models/user.model';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnChanges {
  public userInfo?: IUser;
  public editUserView: boolean = false;
  public userInfoForm?: FormGroup;
  public products: IProduct[] = [];
  public currentPage: number = 1;
  public maxPage: number = 1;
  public imageUrl?: SafeResourceUrl;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
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

  ngOnInit(): void {
    const userId = this.userService.userId();

    this.userService
      .getUserProfile(userId)
      .pipe(
        switchMap((res) => {
          this.userInfo = res.data;

          let arrayProductsId: number[] = [];
          res.data.userBuys?.forEach((product) => {
            arrayProductsId.push(product.productId);
          });

          return [...new Set(arrayProductsId.reverse())];
        })
      )
      .subscribe((res) => {
        this.productService
          .getProductById(res)
          .subscribe((res) => this.products.push(res));
      });

    this.userService.userInfo$.subscribe((res) => (this.userInfo = res));
    this.pagination.maxPage$.subscribe((page) => (this.maxPage = page));
  }

  ngOnChanges(): void {
    this.router.navigate(['user-account']);
  }

  public showForm() {
    this.editUserView = !this.editUserView;
  }

  public submitForm() {
    const userId = this.userService.userId();
    const formValue = this.userInfoForm?.value;

    this.userService.editUser(userId, formValue).subscribe((res) => {
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
}
