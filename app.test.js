const supertest=require('supertest')
const app=require('../app')
const {expect}=require('mocha')


describe('GET /apps', ()=>{

    it('should return an array of apps', ()=>{
        return supertest(app)
            .get('/apps')
            .expect(200)
            .expect('Content-Type', /json/)
    })

    it('should be 400 if sort is incorrect', () => {
        return supertest(app)
          .get('/apps')
          .query({ sort: 'MISTAKE' })
          .expect(400, 'Sort must be of Rating or App');
      });

      it('should be 400 if genre is incorrect', () => {
        return supertest(app)
          .get('/apps')
          .query({ genre: 'animals' })
          .expect(400, 'Genres must be either Action, Puzzle, Arcade, Strategy, Casual, or Card');
      });

});