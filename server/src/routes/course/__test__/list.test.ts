import request from 'supertest'
import {app} from '../../../app'

const createCourse = (name: string, description: string, category: string, price:number) => {
    return request(app)
            .post('/api/courses')
            .set('Cookie', signin())
            .send({
                name,
                description,
                category,
                price
            })
}

it('can fetch a list of courses', async () => {
    await createCourse('Javascript 101', 'Javascript bootcamp for 2 month', 'Programming', 1200)
    await createCourse('Javascript 102', 'Javascript bootcamp for 2 month', 'Programming', 1200)
    await createCourse('Javascript 103', 'Javascript bootcamp for 2 month', 'Programming', 1200)
    
    const response = await request(app)
                            .get('/api/courses')
                            .set('Cookie', signin())
                            .send()
                            .expect(200)

    expect(response.body.length).toEqual(3)
})