import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component'

describe("App Component",()=>{
    it("Should have as title RAP Project",() =>{
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('RAP Project')
    })
});