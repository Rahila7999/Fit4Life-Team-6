function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function handleTabSwitching() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.getAttribute('data-target'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            target.classList.add('active');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Set initial tab to active
    if (tabs.length > 0) {
        tabs[0].click(); // Ensure at least one tab exists
    }
}

// Populate sidebar with video list based on the selected type
function populateSidebar(videoType) {
    const videoList = document.getElementById('video-list');
    const workouts = [
       
        //Abs Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'abs-beginner' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'abs-beginner' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'abs-beginner' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303389/cobra%20stretch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Spine Lumbar Twist Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277268/Sadhana/Beginner%20Workout/Abs%20Beginner/stretchleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303423/spineleft.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},         
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721712772/spinestretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303403/spineright.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},                     
         
        //Chest Beginner Url's
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Chest%20Beginner/benchpress.mp4", type: 'chest-beginner' },
        { name: "Bicep Curls", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4", type: 'arm-beginner' },
   
    ];

    // Filter workouts based on the selected type
    const filteredWorkouts = workouts.filter(workout => workout.type === videoType);

    // Populate sidebar with filtered video list
    videoList.innerHTML = ''; // Clear previous content
    filteredWorkouts.forEach(workout => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `video?title=${encodeURIComponent(workout.name)}&type=${encodeURIComponent(workout.type)}&animation=${encodeURIComponent(workout.animationSrc)}&muscles=${encodeURIComponent(workout.musclesSrc || '')}&howToDo=${encodeURIComponent(workout.howToDoSrc || '')}&instructions=${encodeURIComponent(workout.instructions ? workout.instructions.join('|') : '')}`;
        link.textContent = workout.name;
        listItem.appendChild(link);
        videoList.appendChild(listItem);
    });

    // Highlight current video in sidebar
    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

// Function to update the video content based on the selected workout
function updateVideoContent(workout) {
    document.getElementById('video-title').textContent = workout.name;
    document.getElementById('animation-video').src = workout.animationSrc;
    document.getElementById('muscles-video').src = workout.musclesSrc || '';
    document.getElementById('how-to-do-video').src = workout.howToDoSrc || '';

    // Set instruction paragraphs
    if (Array.isArray(workout.instructions)) {
        document.getElementById('instruction1').textContent = workout.instructions[0] || '';
        document.getElementById('instruction2').textContent = workout.instructions[1] || '';
        document.getElementById('instruction3').textContent = workout.instructions[2] || '';
        document.getElementById('instruction4').textContent = workout.instructions[3] || '';
    } else {
        // Clear instructions if they are not an array
        document.getElementById('instruction1').textContent = '';
        document.getElementById('instruction2').textContent = '';
        document.getElementById('instruction3').textContent = '';
        document.getElementById('instruction4').textContent = '';
    }
}

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    const videoType = getQueryParam('type');
    const videoTitle = getQueryParam('title');

    // Default video data
    const defaultVideos = {
        //Beginner Workout Default videos Fields------------
        'abs-beginner': {
            name: "Jumping Jacks",
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",
            musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4",
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead.<br> Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."]
        },
        'chest-beginner': {
            name: "Pushups",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4",
            musclesSrc: "https://example.com/chest-beginner/pushups-muscles.mp4",
            howToDoSrc: "https://example.com/chest-beginner/pushups-howtodo.mp4",
            instructions: "Push-Ups strengthen your chest and arms. Lower your body until your chest nearly touches the floor, then push back up."
        },
        'arm-beginner': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        'leg-beginner': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        'back-beginner': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        //Intermediate Workout Default videos Fields------------
        'abs-intermediate': {
            name: "Jumping Jacks",
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",
            musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4",
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead.<br> Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."]
        },
        'chest-intermediate': {
            name: "Pushups",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4",
            musclesSrc: "https://example.com/chest-beginner/pushups-muscles.mp4",
            howToDoSrc: "https://example.com/chest-beginner/pushups-howtodo.mp4",
            instructions: "Push-Ups strengthen your chest and arms. Lower your body until your chest nearly touches the floor, then push back up."
        },
        'arm-intermediate': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        'leg-intermediate': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        'back-intermediate': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        //Advanced Workout Default videos Fields------------
        'abs-advanced': {
            name: "Jumping Jacks",
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",
            musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4",
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead.<br> Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."]
        },
        'chest-advanced': {
            name: "Pushups",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4",
            musclesSrc: "https://example.com/chest-beginner/pushups-muscles.mp4",
            howToDoSrc: "https://example.com/chest-beginner/pushups-howtodo.mp4",
            instructions: "Push-Ups strengthen your chest and arms. Lower your body until your chest nearly touches the floor, then push back up."
        },
        'arm-advanced': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        'leg-advanced': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        },
        'back-advanced': {
            name: "Bicep Curls",
            animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4",
            musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4",
            howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4",
            instructions: "Bicep Curls target your biceps. Hold weights in your hands and curl them towards your shoulders."
        }
    };

    const selectedVideo = defaultVideos[videoType] || {};
    const animationSrc = getQueryParam('animation') || selectedVideo.animationSrc;
    const musclesSrc = getQueryParam('muscles') || selectedVideo.musclesSrc;
    const howToDoSrc = getQueryParam('howToDo') || selectedVideo.howToDoSrc;
    const instructions = getQueryParam('instructions') ? decodeURIComponent(getQueryParam('instructions')).split('|') : selectedVideo.instructions || [];

    // Set video title and sources
    document.getElementById('video-title').textContent = videoTitle || selectedVideo.name;
    document.getElementById('animation-video').src = animationSrc;
    document.getElementById('muscles-video').src = musclesSrc;
    document.getElementById('how-to-do-video').src = howToDoSrc;

    // Set instruction paragraphs
    document.getElementById('instruction1').textContent = instructions[0] || '';
    document.getElementById('instruction2').textContent = instructions[1] || '';
    document.getElementById('instruction3').textContent = instructions[2] || '';
    document.getElementById('instruction4').textContent = instructions[3] || '';

    // Populate sidebar
    populateSidebar(videoType);
    handleTabSwitching();
});
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const animationVideo = document.getElementById('animation-video');
    const musclesVideo = document.getElementById('muscles-video');
    const timerElement = document.getElementById('timer');
    
    let videoStartTime = null;
    let isPlaying = false;
    let countdownInterval;
    let timeElapsed = 0; // Start time at 0

    startButton.addEventListener('click', function () {
        let currentVideo = getCurrentVideo();

        if (isPlaying) {
            // Stop the video, timer, and tracking
            if (currentVideo) {
                currentVideo.pause();
                const endTime = new Date();
                const duration = (endTime - videoStartTime) / 1000; // duration in seconds
                saveWorkoutHistory(document.getElementById('video-title').textContent, duration);
                startButton.textContent = 'Start';
                isPlaying = false;
                currentVideo.classList.remove('hide-controls');
                clearInterval(countdownInterval); // Stop the timer
            }
        } else {
            // Start the video, timer, and tracking
            if (currentVideo) {
                currentVideo.style.display = 'block'; // Ensure the video is visible
                currentVideo.play().catch(error => {
                    console.error('Error playing video:', error);
                });
                videoStartTime = new Date();
                startButton.textContent = 'Stop';
                isPlaying = true;
                currentVideo.classList.add('hide-controls');
                startTimer(); // Start the timer
            }
        }
    });

    function getCurrentVideo() {
        return animationVideo.style.display === 'block' ? animationVideo : musclesVideo;
    }

    function saveWorkoutHistory(videoTitle, duration) {
        let videoHistory = JSON.parse(localStorage.getItem('videoHistory')) || {};
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        if (!videoHistory[today]) {
            videoHistory[today] = [];
        }

        const existingEntry = videoHistory[today].find(video => video.name === videoTitle);

        if (existingEntry) {
            existingEntry.duration += duration;
        } else {
            videoHistory[today].push({ name: videoTitle, duration });
        }

        localStorage.setItem('videoHistory', JSON.stringify(videoHistory));
    }

    function startTimer() {
        clearInterval(countdownInterval); // Clear any previous interval

        countdownInterval = setInterval(function () {
            timeElapsed++;
            updateTimerDisplay(timeElapsed);
        }, 1000);
    }

    function updateTimerDisplay(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
});
