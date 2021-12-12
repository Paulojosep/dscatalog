import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from '../../../../util/request';

const findCategoriesResponse = {
  content: [
    {
      id: 1,
      name: 'Livros',
    },
    {
      id: 2,
      name: 'Eletrônicos',
    },
    {
      id: 3,
      name: 'Computadores',
    },
  ],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    pageNumber: 0,
    pageSize: 20,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 3,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  first: true,
  size: 20,
  number: 0,
  numberOfElements: 3,
  empty: false,
};

const saveProductResponse = {
    "id": 15,
    "name": "PC Gamer Weed",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 2200.0,
    "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/15-big.jpg",
    "date": "2020-07-14T10:00:00Z",
    "categories": [
        {
            "id": 3,
            "name": "Computadores"
        }
    ]
}

export const server = setupServer(
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) => {
    return res(
        ctx.status(200), 
        ctx.json(findCategoriesResponse)
    );
  }),
  rest.post(`${BASE_URL}/products`, (req, res, ctx) => {
    return res(
        ctx.status(201), 
        ctx.json(saveProductResponse)
    );
  })
);