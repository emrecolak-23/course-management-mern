import request from 'supertest'
import {app} from '../../../app'
import mongoose from 'mongoose'

it('can only be access if the user is signed in', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()
    await request(app)
            .put(`/api/courses/${id}`)
            .send({
                name: "Javascript 101",
                description: "Javascript bootcamp for 2 month",
                category: "Programming",
                price: 100
            }).expect(401)
})

it('returns a 404 if the provided id doest not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()
    await request(app)
            .put(`/api/courses/${id}`)
            .set('Cookie', signin())
            .send({
                name: "Javascript 101",
                description: "Javascript bootcamp for 2 month",
                category: "Programming",
                price: 100
            }).expect(404)
})

it('returns a 400 if the user provides an invalid input', async () => {
    const cookie = signin()
    const response = await request(app)
                            .post('/api/courses')
                            .set('Cookie', cookie)
                            .send({
                                name: "Javascript 101",
                                description: "Javascript bootcamp for 2 month",
                                category: "Programming",
                                price: 100
                            })
    
    await request(app)
            .put(`/api/courses/${response.body.id}`)
            .set('Cookie', cookie)
            .send({
                description: "Javascript bootcamp for 2 month",
                category: "Programming",
                price: 100
            }).expect(400)
    
    await request(app)
            .put(`/api/courses/${response.body.id}`)
            .set('Cookie', cookie)
            .send({
                name: "Javascript 101",
                category: "Programming",
                price: 100
            }).expect(400)
    
    await request(app)
            .put(`/api/courses/${response.body.id}`)
            .set('Cookie', cookie)
            .send({
                name: "Javascript 101",
                description: "Javascript bootcamp for 2 month",
                price: 100
            }).expect(400)
    
    await request(app)
            .put(`/api/courses/${response.body.id}`)
            .set('Cookie', cookie)
            .send({
                name: "Javascript 101",
                description: "Javascript bootcamp for 2 month",
                category: "Programming",
            }).expect(400)

})

it('update the course provided valid inputs', async () => {
    const cookie = signin()

    const response = await request(app)
                            .post('/api/courses')
                            .set('Cookie', cookie)
                            .send({
                                name: "Javascript 101",
                                description: "Javascript bootcamp for 2 month",
                                category: "Programming",
                                price: 100
                            }).expect(201)
    
                        await request(app)
                                .put(`/api/courses/${response.body.id}`)
                                .set('Cookie', cookie)
                                .send({
                                    name: "Javascript 102",
                                    description: "Javascript bootcamp for 4 month",
                                    category: "Programming",
                                    price: 150
                                }).expect(200)
    
    const courseResponse = await request(app)
                                    .get(`/api/courses/${response.body.id}`)
                                    .set('Cookie', cookie)
                                    .send()
    expect(courseResponse.body.name).toEqual('Javascript 102')
    expect(courseResponse.body.price).toEqual(150)
})