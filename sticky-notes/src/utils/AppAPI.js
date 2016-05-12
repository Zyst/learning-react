import request from 'superagent';
import Secrets from './AppSecrets';
import AppActions from '../actions/AppActions';

const URL = 'https://api.mongolab.com/api/1/databases/sticky/collections/notes';

const AppAPI = {
  addNote(note) {
    request
      .post(`${URL}?apiKey=${Secrets.mongo}`)
      .send(note)
      .set('Accept', 'application/json')
      .end(() => ('Complete'));
  },

  getNotes() {
    request
      .get(`${URL}?apiKey=${Secrets.mongo}`)
      .end((err, res) => {
        if (err === null) {
          AppActions.receiveNotes(res.body);
        }
      });
  },

  deleteNote(noteId) {
    request
      .del(`${URL}${noteId}?apiKey=${Secrets.mongo}`)
      .set('Accept', '*')
      .end((err, res) => {
        if (err === null) {
          console.log(res);
        }
      });
  },
};

export default AppAPI;
