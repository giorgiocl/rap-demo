import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TopBarComponent } from "./top-bar.component";

let topBarComponent: TopBarComponent;
let fixture: ComponentFixture<TopBarComponent>;

let h1: HTMLElement;

beforeEach(() => {
  fixture = TestBed.createComponent(TopBarComponent);
  topBarComponent = fixture.componentInstance; 
  h1 = fixture.nativeElement.querySelector('h1');
});

describe('Top Bar component tests', () => {    
 it('Component initialization', () => {    
   expect(topBarComponent).not.toBeNull();
  });

  it('Should have a title', () => {
    expect(h1.textContent).not.toBeNull();
  });
});
