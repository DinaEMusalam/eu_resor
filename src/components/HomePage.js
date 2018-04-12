import React from 'react';
import Header from './Header';
import ApiService from "../service/ApiService";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirect: false
    };
  }

  render() {

    return (
      <div className="body">
        <div>
          <Header />
        </div>

        <div className="row">
          <div className="well">
            <h1 className="text-center">TT</h1>
            <div className="list-group">

              <a href="#" className="list-group-item active">
                <div className="media col-md-3">
                  <figure className="pull-left">
                    <img className="media-object img-rounded img-responsive" src="#" alt="#" /></figure>
                </div>
                <div className="col-md-6">
                  <h4 className="list-group-item-heading"> List group heading </h4>
                  <p className="list-group-item-text"> Qui diam libris ei, vidisse incorrupte at mel. His euismod salutandi dissentiunt eu. Habeo offendit ea mea. Nostro blandit sea ea, viris timeam molestiae an has. At nisl platonem eum.
                        Vel et nonumy gubergren, ad has tota facilis probatus. Ea legere legimus tibique cum, sale tantas vim ea, eu vivendo expetendis vim. Voluptua vituperatoribus et mel, ius no elitr deserunt mediocrem. Mea facilisi torquatos ad.
                    </p>
                </div>
                <div className="col-md-3 text-center">
                  <h2> 14240 <small> votes </small></h2>
                  <button type="button" className="btn btn-default btn-lg btn-block"> Vote Now! </button>
                  <div className="stars">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </div>
                  <p> Average 4.5 <small> / </small> 5 </p>
                </div>
              </a>

              <a href="#" className="list-group-item">
                <div className="media col-md-3">
                  <figure className="pull-left">
                    <img className="media-object img-rounded img-responsive" src="http://placehold.it/350x250" alt="placehold.it/350x250" />
                  </figure>
                </div>
                <div className="col-md-6">
                  <h4 className="list-group-item-heading"> List group heading </h4>
                  <p className="list-group-item-text"> Eu eum corpora torquatos, ne postea constituto mea, quo tale lorem facer no. Ut sed odio appetere partiendo, quo meliore salutandi ex. Vix an sanctus vivendo, sed vocibus accumsan petentium ea.
                        Sed integre saperet at, no nec debet erant, quo dico incorrupte comprehensam ut. Et minimum consulatu ius, an dolores iracundia est, oportere vituperata interpretaris sea an. Sed id error quando indoctum, mel suas saperet at.
                    </p>
                </div>
                <div className="col-md-3 text-center">
                  <h2> 12424 <small> votes </small></h2>
                  <button type="button" className="btn btn-primary btn-lg btn-block">Vote Now!</button>
                  <div className="stars">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </div>
                  <p> Average 3.9 <small> / </small> 5 </p>
                </div>
              </a>

              <a href="#" className="list-group-item">
                <div className="media col-md-3">
                  <figure className="pull-left">
                    <img className="media-object img-rounded img-responsive" src="http://placehold.it/350x250" alt="placehold.it/350x250" />
                  </figure>
                </div>
                <div className="col-md-6">
                  <h4 className="list-group-item-heading"> List group heading </h4>
                  <p className="list-group-item-text"> Ut mea viris eripuit theophrastus, cu ponderum accusata consequuntur cum. Suas quaestio cotidieque pro ea. Nam nihil persecuti philosophia id, nam quot populo ea.
                        Falli urbanitas ei pri, eu est enim volumus, mei no volutpat periculis. Est errem iudicabit cu. At usu vocibus officiis, ad ius eros tibique appellantur.
                    </p>
                </div>
                <div className="col-md-3 text-center">
                  <h2> 13540 <small> votes </small></h2>
                  <button type="button" className="btn btn-primary btn-lg btn-block">Vote Now!</button>
                  <div className="stars">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </div>
                  <p> Average 4.1 <small> / </small> 5 </p>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>


    );
  }
}
export default HomePage;
