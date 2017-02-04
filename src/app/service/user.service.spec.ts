/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import {BaseRequestOptions, Http, Response, ResponseOptions, RequestMethod} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {User} from "../model/user";

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ]
    });
  });

  it('should be injected in DI', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should be successful when getting all users', inject([UserService, MockBackend],
    (service: UserService, backend: MockBackend) => {
      let body: any = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        }
      ];
      let baseResponse = new Response(new ResponseOptions({ body: body}));
      backend.connections.subscribe((c: MockConnection) => {
        c.mockRespond(baseResponse);
        expect(c.request.method).toBe(RequestMethod.Get);
        expect(c.request.url).toBe(UserService.USERS_ENDPOINT);
      });

      service.users.subscribe((users: Array<User>) => {
        expect(users).toBeTruthy();
        expect(users.length).toEqual(2);
        expect(users).toEqual(body as Array<User>);
      });
    }));

  it('should be successful when getting all users', inject([UserService, MockBackend],
      (service: UserService, backend: MockBackend) => {
        let body: any = {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        };
        let baseResponse = new Response(new ResponseOptions({ body: body}));
        backend.connections.subscribe((c: MockConnection) => {
          c.mockRespond(baseResponse);
          expect(c.request.method).toBe(RequestMethod.Get);
          expect(c.request.url).toBe(UserService.USERS_ENDPOINT  + "/" + body.id);
        });

        service.getUserById(body.id).subscribe((user: User) => {
          expect(user).toBeTruthy();
          expect(user).toEqual(body as User);
        });
      }));
});
