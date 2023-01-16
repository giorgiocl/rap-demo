import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductListComponent } from "./product-list.component";

let productListComponent: ProductListComponent;
let fixture: ComponentFixture<ProductListComponent>;

let h2: HTMLElement;

beforeEach(() => {
  productListComponent = new ProductListComponent();

  TestBed.configureTestingModule({
    declarations: [ ProductListComponent ],
  });
  fixture = TestBed.createComponent(ProductListComponent);
  productListComponent = fixture.componentInstance; 
  h2 = fixture.nativeElement.querySelector('h2');
});

describe('Product list component tests', () => {    
 it('Component initialization', () => {    
   expect(productListComponent).not.toBeNull();
  });

  it('Should have a title', () => {
    expect(h2.textContent).not.toBeNull();
  });
});
