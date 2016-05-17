import AppActions from '../actions/AppActions';

const AppAPI = {
  addWorkout(workout) {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  },

  getWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    AppActions.receiveWorkouts(workouts);
  },

  deleteWorkout(workoutId) {
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    workouts = workouts.filter(w => w.id !== workoutId);

    localStorage.setItem('workouts', JSON.stringify(workouts));
  },
};

export default AppAPI;
