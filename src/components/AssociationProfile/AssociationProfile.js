import React from 'react';
import { connect } from 'react-redux';
import Map from '../Map/Map';
import * as actions from '../../actions';


class AssociationProfile extends React.Component {
  componentWillMount() {
    const associationId = this.props.match.params.id;
    this.props.dispatch(actions.fetchAssociationById(associationId));
  }

  render() {
    const association = this.props.association;

    if (association.id) {
      return (
        <div className="container animal-detail">
          <h2 className="assoName">{association.name} - {association.address.city}</h2>
          <div className="row">
            <section className="col-xs-12 col-sm-6">
              <div className="profiler">
                <div>
                  <img className="imgAsso" src={`http://127.0.0.1:8001${association.photo}`} alt="First slide" />
                </div>
                <div>
                  <p className="paragraph">
                    {association.description}
                  </p>
                </div>
                <h3 className="title3">Partagez le profil de l'association</h3>
                <div className="row share">
                  <a className="resp-sharing-button__link" href="#" target="_blank" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z" /></svg>
                                                                                                                  </div>
                    </div>
                  </a>
                  <a className="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Decouvrez cet animal et adoptez-le.&amp;url=#" target="_blank" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z" /></svg>
                                                                                                                 </div>
                    </div>
                  </a>
                  <a className="resp-sharing-button__link" href="whatsapp://send?text=Decouvrez cet animal et adoptez-le !" target="_blank" aria-label="">
                    <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z" /></svg>
                                                                                                                  </div>
                    </div>
                  </a>
                </div>
                <div>
                  <h3 className="title3">Postez un avis sur cette association</h3>
                  <form>
                    <textarea id="story" name="story" rows="5" cols="50" placeholder="Votre message" />
                    <button className="col-xs-12 btn btn-primary" type="submit">Postez votre avis</button>
                  </form>
                </div>
                <div>
                  <h3 className="title3">Les derniers avis</h3>
                </div>
                <article>
                  <span className="user">Teddy Riley</span>
                  <p className="paragraph">
                  Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est.
                  Ipsam vero urbem Byzantiorum fuisse refertissimam atque ornatissimam signis quis ignorat? Quae illi, exhausti sumptibus bellisque maximis, cum omnis Mithridaticos impetus totumque Pontum armatum affervescentem in Asiam atque erumpentem, ore repulsum et cervicibus interclusum suis sustinerent, tum, inquam, Byzantii et postea signa illa et reliqua urbis ornanemta sanctissime custodita tenuerunt.
                  </p>
                </article>
              </div>
            </section>
            <section className="profile col-xs-12 col-sm-6">
              <div className="map">
                <Map location={`${association.address.city}, ${association.address.line1}`} />
              </div>
              <div>
                <h3 className="title3 contact">Contactez l'association</h3>
                <p>Numéro de téléphone: <a href="tel:+33101010101">{association.phone}</a></p>
                <p>Adresse email: <a href="mailto:association@association.com">{association.email}</a></p>
              </div>
              <div className="lastAnimal">
                <h3 className="title3">Nos derniers animaux à adopter</h3>

                <div className="link">
                  <a href={`/recherche?asso-list="${association.name}"`} className="card-link">Découvrez tous nos Buddy !</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
    return (
      <div className="container animal-detail">
        <h2> Chargement....</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    association: state.association.data,
    animals: state.animals.data,
  };
}

export default connect(mapStateToProps)(AssociationProfile);
