import TimerApp from "../components/TimerApp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TimerActions from "../actions/timer.actions";
console.log("TimerActions", TimerActions);

// Données du store à envoyer au composant sous forme de props
let propsMapping = (state) => ({
  timers: state.timerKey.timers, // Pointer par défaut vers la valeur 0
});

// Fonctions que l'on souhaite mettre à disposition pour notre composant
let dispatchMapping = (dispatch) => ({
  actions: bindActionCreators(TimerActions, dispatch),
});

let MainContainer = connect(propsMapping, dispatchMapping)(TimerApp);

export default MainContainer;
