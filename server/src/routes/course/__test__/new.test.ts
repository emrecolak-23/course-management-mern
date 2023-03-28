import request from 'supertest'
import { app } from "../../../app";
import { Course } from "../../../models/course";

it('can only be access if the user is signed in', async () => {
    const response = await request(app)
                             .post('/api/courses')
                             .send({})
    expect(response.status).toEqual(401)
})

it('returns an error if an invalid name provided', async () => {
    await request(app)
            .post('/api/courses')
            .set('Cookie', signin())
            .send({
                name: "",
                description: "Javascript bootcamp for 2 month",
                category: "Programming",
                price: 100
           })
           .expect(400)
    
    await request(app)
           .post('/api/courses')
           .set('Cookie', signin())
           .send({
               description: "Javascript bootcamp for 2 month",
               category: "Programming",
               price: 100
          })
          .expect(400)
})

it('returns an error if an invalid description provided', async () => {
    await request(app)
        .post('/api/courses')
        .set('Cookie', signin())
        .send({
            name: "Javascript 101",
            description: "",
            category: "Programming",
            price: 100
         })
        .expect(400)

    await request(app)
        .post('/api/courses')
        .set('Cookie', signin())
        .send({
            name: "Javascript 101",
            category: "Programming",
            price: 100
        })
        .expect(400)
})

it('returns an error if an invalid category provided', async () => {
    await request(app)
        .post('/api/courses')
        .set('Cookie', signin())
        .send({
            name: "Javascript 101",
            description: "Javascript bootcamp for 2 month",
            category: "",
            price: 100
         })
        .expect(400)

    await request(app)
        .post('/api/courses')
        .set('Cookie', signin())
        .send({
            name: "Javascript 101",
            description: "Javascript bootcamp for 2 month",
            price: 100
        })
        .expect(400)
})

it('returns an error if an invalid price provided', async () => {
    await request(app)
        .post('/api/courses')
        .set('Cookie', signin())
        .send({
            name: "Javascript 101",
            description: "Javascript bootcamp for 2 month",
            category: "Programming",
            price: -10
         })
        .expect(400)

    await request(app)
        .post('/api/courses')
        .set('Cookie', signin())
        .send({
            name: "Javascript 101",
            description: "Javascript bootcamp for 2 month",
            category: "Programming",
        })
        .expect(400)
})

it('creates a course with valid inputs', async () => {
    let courses = await Course.find({})
    expect(courses.length).toEqual(0)

    await request(app)
            .post('/api/courses')
            .set('Cookie', signin())
            .send({
                name: "Javascript 101",
                description: "Javascript bootcamp for 2 month",
                category: "Programming",
                price: 100
            })
            .expect(201)
    
    courses = await Course.find({})
    expect(courses.length).toEqual(1)
    expect(courses[0].name).toEqual('Javascript 101')
    expect(courses[0].price).toEqual(100)

})