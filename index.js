const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 
            🥗 Today is ${today}`;
};
welcomeMessage();   

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️

const addNewGoal = () => {
    // Get the input value and trim any extra whitespace
    const goalInput = document.querySelector('#goalInput').value.trim();
    
    // Check if the input is empty
    if (goalInput === '') {
        alert('Please enter a goal!');
        return; // Exit function if input is empty
    }
    
    // Check for duplicates
    const goalList = document.querySelector('#goalList');
    const existingGoals = goalList.querySelectorAll('li');
    
    for (let i = 0; i < existingGoals.length; i++) {
        if (existingGoals[i].textContent.trim() === goalInput) {
            alert('Goal already exists!');
            return; // Exit function if duplicate is found
        }
    }
    
    // If no duplicate is found, proceed to add the new goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

