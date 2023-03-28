import request from 'supertest'
import {app} from '../../../app'
import mongoose from 'mongoose'

it('can only be access if the user is signed in', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()

    await request(app)
            .get(`/api/courses/${id}`)
            .send()
            .expect(401)
})

it('returns a 404 if the course is not found', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()

    await request(app)
            .get(`/api/courses/${id}`)
            .set('Cookie', signin())
            .send()
            .expect(404)
})

it('returns the couse if the course is found', async () => {
    
    const course = {
        name: "Javascript 101",
        description: "Javascript bootcamp for 2 month",
        category: "Programming",
        price: 100
    }
    
    const response = await request(app)
                            .post('/api/courses')
                            .set('Cookie', signin())
                            .send(course)
                            .expect(201)

    const courseResponse = await request(app)
                                    .get(`/api/courses/${response.body.id}`)
                                    .set('Cookie', signin())
                                    .send()
                                    .expect(200)
    expect(courseResponse.body.name).toEqual(course.name)
    expect(courseResponse.body.description).toEqual(course.description)
    expect(courseResponse.body.category).toEqual(course.category)
    expect(courseResponse.body.price).toEqual(course.price)

})