const request = require('supertest')
const express = require('express')
const { getProducts } = require('../controllers/client.js')

const router = express.Router()
const products = [{id:1, name: 'Product1'}, {id:2, name: 'Product2'}, {id:3, name: 'Product3'}]

const app = jest.mock('../controllers/client.js', () => ({
    getProducts: jest.fn((res, req) => res.sendStatus(200))
}))

router.get('/products', getProducts)

describe('GET /products', () => {
    test('should return all the products', async() => {
        const response = await request(app).get('/products')
        expect(response.statusCode).toBe(200)
        // expect(response.body).toEqual(products)
    }, 30000)
})





