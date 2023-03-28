import request from 'supertest'
import {app} from '../../../app'
import mongoose from 'mongoose'


it('can only be access if the user is signed in', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()
    const response = await request(app)
                             .delete(`/api/courses/${id}`)
                             .send({})
    expect(response.status).toEqual(401)
})

it('returns a 404 if the course is not found', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()

    await request(app)
            .delete(`/api/courses/${id}`)
            .set('Cookie', signin())
            .send({})
            .expect(404)

}) 

it('delete the course provided by valid id', async () => {
    const response = await request(app)
                            .post('/api/courses')
                            .set('Cookie', signin())
                            .send({
                                name: "Javascript 101",
                                description: "Javascript bootcamp for 2 month",
                                category: "Programming",
                                price: 100
                           }).expect(201)
    await request(app)
            .delete(`/api/courses/${response.body.id}`)
            .set('Cookie', signin())
            .send()
            .expect(204)
})