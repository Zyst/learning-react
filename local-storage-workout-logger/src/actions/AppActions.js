import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  showForm() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_FORM,
    });
  },

  addWorkout(workout) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_WORKOUT,
      workout,
    });
  },

  receiveWorkouts(workouts) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_WORKOUTS,
      workouts,
    });
  },

  deleteWorkout(workoutId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_WORKOUT,
      workoutId,
    });
  },
};

export default AppActions;
