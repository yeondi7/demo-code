const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Page routing', () => {
  it('should render the home page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should render the about page', (done) => {
    chai.request(app)
      .get('/about')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should render the todo page', (done) => {
    chai.request(app)
      .get('/todo')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

describe('Todo tracker', () => {
  it('should add a new todo', (done) => {
    chai.request(app)
      .post('/todo')
      .send({ newTodo: 'Test todo' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should delete a todo', (done) => {
    chai.request(app)
      .post('/delete')
      .send({ delete: 'Test todo' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});