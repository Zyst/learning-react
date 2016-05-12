import AppActions from '../actions/AppActions';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

const URL = 'http://api.duckduckgo.com/?q=';

const AppAPI = {
  searchText(search) {
    request
      .get(`${URL}${search.text}&format=json&pretty=1`)
      .use(jsonp)
      .end((err, res) => {
        AppActions.receiveResults(res.body.RelatedTopics);
      });
  },
};

export default AppAPI;
