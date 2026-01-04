const startButton = document.getElementById('startButton');
const createButton = document.getElementById('createButton');
const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', function() {
    window.location.href = 'main.html';
});

startButton.addEventListener('click', function() {
    window.location.href = 'start.html';
});

createButton.addEventListener('click', function() {
    window.location.href = 'create.html';
});

// START PAGE
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// ARMS EXERCISES
document.addEventListener("DOMContentLoaded", function() {
    const armsStartStopButton = document.getElementById("armsStartStopButton");
    const armsRestartButton = document.getElementById("armsRestartButton");
    const armsTimerText = document.getElementById("armsTimerText");
    const armsExercises = document.querySelectorAll(".armsExercise");

    let currentIndex = 0;
    let armsTimer;
    let timeInSeconds = 60; 
    let paused = true;
    let elapsedTime = 0;

    hideAllExercises();
    showCurrentExercise();

    armsStartStopButton.addEventListener("click", function() {
        if (paused) {
            armsStartStopButton.textContent = "Stop";
            paused = false;
            armsStartTimer();
        } else {
            armsStartStopButton.textContent = "Start";
            paused = true;
            clearInterval(armsTimer);
        }
    });
   
    armsRestartButton.addEventListener("click", function() {
        clearInterval(armsTimer);
        currentIndex = 0;
        hideAllExercises();
        showCurrentExercise();
        armsStartStopButton.textContent = "Start";
        armsTimerText.textContent = formatTime(timeInSeconds);
        elapsedTime = 0;
        paused = true;
    }); 
    
    function armsStartTimer() {
        armsTimer = setInterval(function() {
            elapsedTime++;
            let remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                clearInterval(armsTimer);
                showNextExercise();
            }
            armsTimerText.textContent = formatTime(remainingTime);
        }, 1000);
    }

    function showNextExercise() {
        armsExercises[currentIndex].style.fontSize = "20px";
        hideAllExercises();
        if (currentIndex < armsExercises.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCurrentExercise();
        armsExercises[currentIndex].style.fontSize = "30px";
        armsExercises[currentIndex].scrollIntoView({ behavior: "smooth" });
        elapsedTime = 0;
        armsStartTimer();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function hideAllExercises() {
        armsExercises.forEach(exercise => {
            exercise.style.display = "none";
        });
    }

    function showCurrentExercise() {
        armsExercises[currentIndex].style.display = "block";
    }
});
// LEGS EXERCISES
document.addEventListener("DOMContentLoaded", function() {
    const legsStartStopButton = document.getElementById("legsStartStopButton");
    const legsRestartButton = document.getElementById("legsRestartButton");
    const legsTimerText = document.getElementById("legsTimerText");
    const legsExercises = document.querySelectorAll(".legsExercise"); 
    
    let currentIndex = 0;
    let legsTimer;
    let timeInSeconds = 60; 
    let paused = true;
    let elapsedTime = 0;

    hideAllExercises();
    showCurrentExercise();

    legsStartStopButton.addEventListener("click", function() {
        if (paused) {
            legsStartStopButton.textContent = "Stop";
            paused = false;
            legsStartTimer();
        } else {
            legsStartStopButton.textContent = "Start";
            paused = true;
            clearInterval(legsTimer);
        }
    });
   
    legsRestartButton.addEventListener("click", function() {
        clearInterval(legsTimer);
        currentIndex = 0;
        hideAllExercises();
        showCurrentExercise();
        legsStartStopButton.textContent = "Start";
        legsTimerText.textContent = formatTime(timeInSeconds);
        elapsedTime = 0;
        paused = true;
    }); 

    function legsStartTimer() {
        legsTimer = setInterval(function() {
            elapsedTime++;
            let remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                clearInterval(legsTimer);
                showNextExercise();
            }
            legsTimerText.textContent = formatTime(remainingTime);
        }, 1000);
    }

    function showNextExercise() {
        legsExercises[currentIndex].style.fontSize = "20px";
        hideAllExercises();
        if (currentIndex < legsExercises.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCurrentExercise();
        legsExercises[currentIndex].style.fontSize = "30px";
        legsExercises[currentIndex].scrollIntoView({ behavior: "smooth" });
        elapsedTime = 0;
        legsStartTimer();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function hideAllExercises() {
        legsExercises.forEach(exercise => {
            exercise.style.display = "none";
        });
    }

    function showCurrentExercise() {
        legsExercises[currentIndex].style.display = "block";
    }
});
// CHEST EXERCISES
document.addEventListener("DOMContentLoaded", function() {
    const chestStartStopButton = document.getElementById("chestStartStopButton");
    const chestRestartButton = document.getElementById("chestRestartButton");
    const chestTimerText = document.getElementById("chestTimerText");
    const chestExercises = document.querySelectorAll(".chestExercise");

    let currentIndex = 0;
    let chestTimer;
    let timeInSeconds = 60; 
    let paused = true;
    let elapsedTime = 0;

    hideAllExercises();
    showCurrentExercise();

    chestStartStopButton.addEventListener("click", function() {
        if (paused) {
            chestStartStopButton.textContent = "Stop";
            paused = false;
            chestStartTimer();
        } else {
            chestStartStopButton.textContent = "Start";
            paused = true;
            clearInterval(chestTimer);
        }
    });
   
    chestRestartButton.addEventListener("click", function() {
        clearInterval(chestTimer);
        currentIndex = 0;
        hideAllExercises();
        showCurrentExercise();
        chestStartStopButton.textContent = "Start";
        chestTimerText.textContent = formatTime(timeInSeconds);
        elapsedTime = 0;
        paused = true;
    }); 
   
    function chestStartTimer() {
        chestTimer = setInterval(function() {
            elapsedTime++;
            let remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                clearInterval(chestTimer);
                showNextExercise();
            }
            chestTimerText.textContent = formatTime(remainingTime);
        }, 1000);
    }

    function showNextExercise() {
        chestExercises[currentIndex].style.fontSize = "20px";
        hideAllExercises();
        if (currentIndex < chestExercises.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCurrentExercise();
        chestExercises[currentIndex].style.fontSize = "30px";
        chestExercises[currentIndex].scrollIntoView({ behavior: "smooth" });
        elapsedTime = 0;
        chestStartTimer();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function hideAllExercises() {
        chestExercises.forEach(exercise => {
            exercise.style.display = "none";
        });
    }

    function showCurrentExercise() {
        chestExercises[currentIndex].style.display = "block";
    }
});
// CORE EXERCISES
document.addEventListener("DOMContentLoaded", function() {
    const coreStartStopButton = document.getElementById("coreStartStopButton");
    const coreRestartButton = document.getElementById("coreRestartButton");
    const coreTimerText = document.getElementById("coreTimerText");
    const coreExercises = document.querySelectorAll(".coreExercise");

    let currentIndex = 0;
    let coreTimer;
    let timeInSeconds = 60; 
    let paused = true;
    let elapsedTime = 0;

    hideAllExercises();
    showCurrentExercise();

    coreStartStopButton.addEventListener("click", function() {
        if (paused) {
            coreStartStopButton.textContent = "Stop";
            paused = false;
            coreStartTimer();
        } else {
            coreStartStopButton.textContent = "Start";
            paused = true;
            clearInterval(coreTimer);
        }
    });
   
    coreRestartButton.addEventListener("click", function() {
        clearInterval(coreTimer);
        currentIndex = 0;
        hideAllExercises();
        showCurrentExercise();
        coreStartStopButton.textContent = "Start";
        coreTimerText.textContent = formatTime(timeInSeconds);
        elapsedTime = 0;
        paused = true;
    }); 
    
    function coreStartTimer() {
        coreTimer = setInterval(function() {
            elapsedTime++;
            let remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                clearInterval(coreTimer);
                showNextExercise();
            }
            coreTimerText.textContent = formatTime(remainingTime);
        }, 1000);
    }

    function showNextExercise() {
        coreExercises[currentIndex].style.fontSize = "20px";
        hideAllExercises();
        if (currentIndex < coreExercises.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCurrentExercise();
        coreExercises[currentIndex].style.fontSize = "30px";
        coreExercises[currentIndex].scrollIntoView({ behavior: "smooth" });
        elapsedTime = 0;
        coreStartTimer();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function hideAllExercises() {
        coreExercises.forEach(exercise => {
            exercise.style.display = "none";
        });
    }

    function showCurrentExercise() {
        coreExercises[currentIndex].style.display = "block";
    }
});
// BUTT EXERCISES
document.addEventListener("DOMContentLoaded", function() {
    const buttStartStopButton = document.getElementById("buttStartStopButton");
    const buttRestartButton = document.getElementById("buttRestartButton");
    const buttTimerText = document.getElementById("buttTimerText");
    const buttExercises = document.querySelectorAll(".buttExercise");

    let currentIndex = 0;
    let buttTimer;
    let timeInSeconds = 60; 
    let paused = true;
    let elapsedTime = 0;

    hideAllExercises();
    showCurrentExercise();

    buttStartStopButton.addEventListener("click", function() {
        if (paused) {
            buttStartStopButton.textContent = "Stop";
            paused = false;
            buttStartTimer();
        } else {
            buttStartStopButton.textContent = "Start";
            paused = true;
            clearInterval(buttTimer);
        }
    });
   
    buttRestartButton.addEventListener("click", function() {
        clearInterval(buttTimer);
        currentIndex = 0;
        hideAllExercises();
        showCurrentExercise();
        buttStartStopButton.textContent = "Start";
        buttTimerText.textContent = formatTime(timeInSeconds);
        elapsedTime = 0;
        paused = true;
    });

    function buttStartTimer() {
        buttTimer = setInterval(function() {
            elapsedTime++;
            let remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                clearInterval(buttTimer);
                showNextExercise();
            }
            buttTimerText.textContent = formatTime(remainingTime);
        }, 1000);
    }

    function showNextExercise() {
        buttExercises[currentIndex].style.fontSize = "20px";
        hideAllExercises();
        if (currentIndex < buttExercises.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCurrentExercise();
        buttExercises[currentIndex].style.fontSize = "30px";
        buttExercises[currentIndex].scrollIntoView({ behavior: "smooth" });
        elapsedTime = 0;
        buttStartTimer();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function hideAllExercises() {
        buttExercises.forEach(exercise => {
            exercise.style.display = "none";
        });
    }

    function showCurrentExercise() {
        buttExercises[currentIndex].style.display = "block";
    }
});
// BACK EXERCISES
document.addEventListener("DOMContentLoaded", function() {
    const backStartStopButton = document.getElementById("backStartStopButton");
    const backRestartButton = document.getElementById("backRestartButton");
    const backTimerText = document.getElementById("backTimerText");
    const backExercises = document.querySelectorAll(".backExercise");

    let currentIndex = 0;
    let backTimer;
    let timeInSeconds = 60; 
    let paused = true;
    let elapsedTime = 0;

    hideAllExercises();
    showCurrentExercise();

    backStartStopButton.addEventListener("click", function() {
        if (paused) {
            backStartStopButton.textContent = "Stop";
            paused = false;
            backStartTimer();
        } else {
            backStartStopButton.textContent = "Start";
            paused = true;
            clearInterval(backTimer);
        }
    });
   
    backRestartButton.addEventListener("click", function() {
        clearInterval(backTimer);
        currentIndex = 0;
        hideAllExercises();
        showCurrentExercise();
        backStartStopButton.textContent = "Start";
        backTimerText.textContent = formatTime(timeInSeconds);
        elapsedTime = 0;
        paused = true;
    }); 
    
    function backStartTimer() {
        backTimer = setInterval(function() {
            elapsedTime++;
            let remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                clearInterval(backTimer);
                showNextExercise();
            }
            backTimerText.textContent = formatTime(remainingTime);
        }, 1000);
    }

    function showNextExercise() {
        backExercises[currentIndex].style.fontSize = "20px";
        hideAllExercises();
        if (currentIndex < backExercises.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showCurrentExercise();
        backExercises[currentIndex].style.fontSize = "30px";
        backExercises[currentIndex].scrollIntoView({ behavior: "smooth" });
        elapsedTime = 0;
        backStartTimer();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function hideAllExercises() {
        backExercises.forEach(exercise => {
            exercise.style.display = "none";
        });
    }

    function showCurrentExercise() {
        backExercises[currentIndex].style.display = "block";
    }
});

// CREATE PAGE
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('workoutModal');
    var btn = document.getElementById('createWorkOut');
    var span = document.querySelector('.close');
    var input = document.getElementById('searchInput');
    var resultsDiv = document.getElementById('searchResults');
    var workoutList = document.getElementById('workoutList');
    var startExButton = document.getElementById('startExButton');
    var deleteAllButton = document.getElementById('deleteAllButton');
    var startStopButton = document.getElementById('yourExStartStopButton');
    var restartButton = document.getElementById('yourExRestartButton');
    var closeBtn = document.querySelector('.close-btn');
    var paused = true; 

    var timerText = document.getElementById('yourExTimerText');
    var timer;
    var timeInSeconds = 60;
    var elapsedTime = 0;

    var workouts = ["Holds", "Circle Forward", "Circle Reverse", "Plates In & Out",
    "Flight Attendant(one arm)", "Bodyweight Squats", "Walking Lunges", "High Knees",
    "Jump Squats", "Calf Raises", "Skaters", "Push Ups", "Wide Arm Push ups", 
    "Diamond Push ups", "Wall Push ups", "Plank", "Russian Twist", "Flutter Kicks",
    "Bicycle Crunches", "Superman", "Squats", "Lunges", "Donkey Kicks", "Squat Pulses",
    "Wall Sits", "Fire Hydrants", "Reverse Snow Angels", "Bird Dogs", "Cat-Cow Stretch",
    "Back Plank"];

    deleteAllButton.addEventListener('click', function() {
        var workoutItems = document.querySelectorAll('.workout-item');
        workoutItems.forEach(function(item) {
            item.remove();
        });
        checkExercises();
    }); 
    btn.onclick = function() {
        modal.style.display = "block";
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    input.onkeyup = function() {
        var searchQuery = input.value.toLowerCase();
        resultsDiv.innerHTML = ''; 
        if (searchQuery) {
            resultsDiv.style.display = 'block';
            var filteredWorkouts = workouts.filter(function(workout) {
                return workout.toLowerCase().includes(searchQuery);
            });

            if (filteredWorkouts.length) {
                filteredWorkouts.forEach(function(workout) {
                    var p = document.createElement('p');
                    p.textContent = workout;
                    p.onclick = function() { 
                        addToWorkoutList(workout); 
                        resultsDiv.style.display = 'none'; 
                    };
                    resultsDiv.appendChild(p);
                });
            } else {
                resultsDiv.innerHTML = '<p>No matches found.</p>'; 
            }
        } else {
            resultsDiv.style.display = 'none';  
        }
    };

    function addToWorkoutList(workout) {
        var listItem = document.createElement('div');
        listItem.classList.add('workout-item');
        
        var workoutName = document.createElement('span');
        workoutName.textContent = workout;
        
        var deleteOneButton = document.createElement('button'); 
        deleteOneButton.textContent = 'X';
        deleteOneButton.classList.add('delete-one-btn');
        deleteOneButton.style.marginRight = '20px';
        deleteOneButton.onclick = function() {
            listItem.remove();
            checkExercises();  
        };
    
        listItem.appendChild(workoutName);
        listItem.appendChild(deleteOneButton);
        
        workoutList.appendChild(listItem);
    
        checkExercises();
    }
   
    function checkExercises() {
        var exercises = document.querySelectorAll('.workout-item span');
        var numExercises = exercises.length;
    
        if (numExercises > 0) {
            chooseExMessage.style.display = 'none'; 
        } else {
            chooseExMessage.style.display = 'block'; 
        }
    }
    
    startExButton.onclick = function() {
        var exercises = document.querySelectorAll('.workout-item span'); 
        var workoutContainer = document.querySelector('.container'); 
        var exerciseList = []; 

        exercises.forEach(function(exercise) {
            exerciseList.push(exercise.textContent);
        });

        var yourExercisesContainer = document.createElement('div');
        yourExercisesContainer.style.marginBottom = '20px'; 
        var card = document.createElement('div');
        
        var exercisesText = document.createElement('p');
        exercisesText.textContent = exerciseList.join(', '); 
       
        workoutContainer.appendChild(yourExercisesContainer);
        
        openYourExPopup();
    };

    function openYourExPopup() {
        document.getElementById("yourEx-popup").style.display = "block";
        displaySelectedExercises();
    }

    function closeYourExPopup() {
        document.getElementById("yourEx-popup").style.display = "none";
    }

    function displaySelectedExercises() {
        const selectedExercisesContainer = document.getElementById("selectedExercisesContainer");
        selectedExercisesContainer.innerHTML = ""; 
    

        const selectedExercises = document.querySelectorAll('.workout-item span');
        selectedExercises.forEach(function(exercise) {
            const li = document.createElement('li');
            li.textContent = exercise.textContent;
            li.style.marginTop = '3px';
            li.style.paddingTop = '10px';
            selectedExercisesContainer.appendChild(li);
        });
    }

    startStopButton.addEventListener("click", function() {
        if (paused) {
            startStopButton.textContent = "Stop";
            paused = false;
            startTimer();
        } else {
            startStopButton.textContent = "Start";
            paused = true;
            clearInterval(timer);
        }
    });
    
    restartButton.onclick = function() {
        clearInterval(timer);
        elapsedTime = 0;
        updateTimerDisplay(timeInSeconds);
        startStopButton.textContent = 'Start';
    };

    function startTimer() {
        timer = setInterval(function() {
            elapsedTime++;
            var remainingTime = timeInSeconds - elapsedTime;
            if (remainingTime <= 0) {
                elapsedTime = 0;
                clearInterval(timer);
                startStopButton.textContent = 'Start';
            }
            updateTimerDisplay(remainingTime);
        }, 1000);
    }

    function updateTimerDisplay(time) {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        var formattedTime = padNumber(minutes) + ':' + padNumber(seconds);
        timerText.textContent = formattedTime;
    }

    function padNumber(num) {
        return num < 10 ? '0' + num : num;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeYourExPopup();
        }
    };

    closeBtn.onclick = function() {
        closeYourExPopup();
    };

    var startButton = document.getElementById('startExButton');
    var chooseExMessage = document.getElementById('chooseExMessage');

    startButton.onclick = function() {
        var exercises = document.querySelectorAll('.workout-item span');
        var numExercises = exercises.length;

        if (numExercises === 0) {
            chooseExMessage.style.display = 'block'; 
            return; 
        }
        openYourExPopup();
    };
});
