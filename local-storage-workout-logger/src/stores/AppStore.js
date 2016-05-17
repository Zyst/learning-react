import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import AppAPI from '../utils/AppAPI';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let workouts = [];
let showForm = false;

class AppStoreClass extends EventEmitter {
  showForm() {
    showForm = true;
  }

  hideForm() {
    showForm = false;
  }

  getShowForm() {
    return showForm;
  }

  addWorkout(workout) {
    workouts.push(workout);

    // We hide the form after we add our workout
    this.hideForm();
  }

  getWorkouts() {
    return workouts;
  }

  deleteWorkout(workoutId) {
    workouts = workouts.filter(w => w.id !== workoutId);
  }

  receiveWorkouts(receiveWorkouts) {
    workouts = receiveWorkouts;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const AppStore = new AppStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  if (action.actionType === AppConstants.SHOW_FORM) {
    AppStore.showForm();

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.ADD_WORKOUT) {
    AppStore.addWorkout(action.workout);

    AppAPI.addWorkout(action.workout);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.RECEIVE_WORKOUTS) {
    AppStore.receiveWorkouts(action.workouts);

    AppStore.emit(CHANGE_EVENT);
  } else if (action.actionType === AppConstants.DELETE_WORKOUT) {
    AppStore.deleteWorkout(action.workoutId);

    AppAPI.deleteWorkout(action.workoutId);

    AppStore.emit(CHANGE_EVENT);
  }

  return true;
});

export default AppStore;
