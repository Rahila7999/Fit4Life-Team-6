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
//---------------------------------------------BEGINNER URL--------------------------------------------------------------------------------------------------------------------------------------- 
        //Abs Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position, then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Legs, arms, and cardiovascular endurance.", "Not fully extending arms or legs, not maintaining a consistent rhythm.", "Inhale when your feet come together; exhale as you jump and spread your legs."], type: 'abs-beginner' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Lie on your back with your knees bent and hands behind your head. Lift your shoulders off the ground and curl your upper body towards your knees. Return to the starting position and repeat.", "Abdominal muscles.", "Pulling on your neck, using momentum instead of engaging your core.", "Exhale as you crunch up; inhale as you lower back down."], type: 'abs-beginner' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'abs-beginner' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303389/cobra%20stretch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Spine Lumbar Twist Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277268/Sadhana/Beginner%20Workout/Abs%20Beginner/stretchleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303423/spineleft.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},         
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721712772/spinestretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303403/spineright.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},                     
         
        //Chest Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-beginner' },
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/inclinepushups.mp4", type: 'arm-beginner' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/pushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-beginner' },
        { name: "Wide Arm Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277434/Sadhana/BeginnerWorkout/ChestBeginner/widearmpushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'chest-beginner' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/tricepdips.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'chest-beginner' },
        { name: "Knee Push-Ups",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-beginner' },
        { name: "Cobra Stretch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-beginner' },
        { name: "Chest Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277426/Sadhana/Beginner%20Workout/Chest%20Beginner/cheststretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-beginner'},
       
        //Arm Beginner Url's
        { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4", type: 'arm-beginner' },
        { name: "Side Arm Raise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277466/Sadhana/Beginner%20Workout/Arm%20Beginner/sidearmraise.mp4", type: 'arm-beginner' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277471/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsdips.mp4", type: 'arm-beginner' },
        { name: "Arm Circles Clockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/armclockwise.mp4", type: 'arm-beginner' },
        { name: "Arm Circles Counterclockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armcounterclockwise.mp4", type: 'arm-beginner' },
        { name: "Diamond Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/diamondpushups.mp4", type: 'arm-beginner' },
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277463/Sadhana/Beginner%20Workout/Arm%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],type: 'arm-beginner' },
        { name: "Chest Press Pulse", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/chestpresspulse.mp4", type: 'arm-beginner' },
        { name: "Leg Barbell Curl Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlleft.mp4", type: 'arm-beginner' },
        { name: "Leg Barbell Curl Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277460/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlright.mp4", type: 'arm-beginner' },
        { name: "Diagonal Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277456/Sadhana/Beginner%20Workout/Arm%20Beginner/diagonalplank.mp4", type: 'arm-beginner' },
        { name: "Punches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/punches.mp4", type: 'arm-beginner' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/pushups.mp4", type: 'arm-beginner' },
        { name: "Inchworms", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/inchworms.mp4", type: 'arm-beginner' },
        { name: "Wall Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277470/Sadhana/Beginner%20Workout/Arm%20Beginner/wallpushups.mp4", type: 'arm-beginner' },
        { name: "Triceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277468/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsstretchleft.mp4", type: 'arm-beginner' },
        { name: "Triceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277473/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsright.mp4", type: 'arm-beginner' },
        { name: "Standing Biceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/stndingstretchleft.mp4", type: 'arm-beginner' },
        { name: "Standing Biceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277467/Sadhana/Beginner%20Workout/Arm%20Beginner/standingbicepsright.mp4", type: 'arm-beginner' },

        //Leg Beginner Url's
        { name: "Side Hop", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/sidehop.mp4", type: 'leg-beginner' },
        { name: "Squats", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277382/Sadhana/Beginner%20Workout/Leg%20Beginner/squats.mp4", type: 'leg-beginner' },
        { name: "Side Lying Leg Lift Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277379/Sadhana/Beginner%20Workout/Leg%20Beginner/sideleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'leg-beginner' },
        { name: "Side Lying Leg Lift Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277380/Sadhana/Beginner%20Workout/Leg%20Beginner/sideright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'leg-beginner' },
        { name: "Backward Lunge", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277373/Sadhana/Beginner%20Workout/Leg%20Beginner/backwardlungee.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'leg-beginner' },
        { name: "Donkey Kicks Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277374/Sadhana/Beginner%20Workout/Leg%20Beginner/donkeykickleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner' },
        { name: "Donkey Kicks Right",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277374/Sadhana/Beginner%20Workout/Leg%20Beginner/donkeykickright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner' },
        { name: "Left Quad Stretch With Wall",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277376/Sadhana/Beginner%20Workout/Leg%20Beginner/leftquad.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner' },
        { name: "Right Quad Stretch With Wall", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277377/Sadhana/Beginner%20Workout/Leg%20Beginner/rightquad.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
        { name: "Knee to Chest Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277373/Sadhana/Beginner%20Workout/Leg%20Beginner/kneeleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
        { name: "Knee to Chest Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277375/Sadhana/Beginner%20Workout/Leg%20Beginner/kneeright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
        { name: "Wall Calf Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/wallcalfraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
        { name: "Sumo Squat Calf Raises With Wall", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277382/Sadhana/Beginner%20Workout/Leg%20Beginner/sumosquat.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
        { name: "Calf Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277372/Sadhana/Beginner%20Workout/Leg%20Beginner/calfleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
        { name: "Calf Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277372/Sadhana/Beginner%20Workout/Leg%20Beginner/calfright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-beginner'},
 
         //Shoulder & Back Beginner Url's
         { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612774/junpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],type: 'back-beginner' },
         { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612643/armraises.mp4", type: 'back-beginner' },
         { name: "Rhomboid Pulls", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612923/rhomboidpulls.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'back-beginner' },
         { name: "Knee Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612834/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'back-beginner' },
         { name: "Side-Lying Floor Strecth Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612757/floorstretcleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner' },
         { name: "Side-Lying Floor Stretch Right",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612717/floorstretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner' },
         { name: "Arm Scissors",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612680/armscissors.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner' },
         { name: "Cat Cow Pose", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612692/catcowpose.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner'},
         { name: "Prone Triceps Push Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612848/pronepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner'},
         { name: "Reclined Rhomboid Squeezes", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612875/reclined.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner'},
         { name: "Child's Pose", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612704/childpose.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-beginner'},

//------------------------------------------------------------------INTERMEDIATE URL--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          //Abs Intermediate Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'abs-intermediate' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'abs-intermediate' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'abs-intermediate' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate'},
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303389/cobra%20stretch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate'},
        { name: "Spine Lumbar Twist Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277268/Sadhana/Beginner%20Workout/Abs%20Beginner/stretchleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303423/spineleft.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate'},         
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721712772/spinestretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303403/spineright.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-intermediate'},                     
         
        //Chest Intermediate Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-intermediate' },
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/inclinepushups.mp4", type: 'chest-intermediate' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/pushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-intermediate' },
        { name: "Wide Arm Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277434/Sadhana/BeginnerWorkout/ChestBeginner/widearmpushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'chest-intermediate' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/tricepdips.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'chest-intermediate' },
        { name: "Knee Push-Ups",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-intermediate' },
        { name: "Cobra Stretch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-intermediate' },
        { name: "Chest Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277426/Sadhana/Beginner%20Workout/Chest%20Beginner/cheststretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-intermediate'},
       
        //Arm Intermediate Url's
        { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4", type: 'arm-intermediate' },
        { name: "Side Arm Raise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277466/Sadhana/Beginner%20Workout/Arm%20Beginner/sidearmraise.mp4", type: 'arm-intermediate' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277471/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsdips.mp4", type: 'arm-intermediate' },
        { name: "Arm Circles Clockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/armclockwise.mp4", type: 'arm-intermediate' },
        { name: "Arm Circles Counterclockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armcounterclockwise.mp4", type: 'arm-intermediate' },
        { name: "Diamond Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/diamondpushups.mp4", type: 'arm-intermediate' },
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277463/Sadhana/Beginner%20Workout/Arm%20Beginner/jumpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'arm-intermediate' },
        { name: "Chest Press Pulse", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/chestpresspulse.mp4", type: 'arm-intermediate' },
        { name: "Leg Barbell Curl Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlleft.mp4", type: 'arm-intermediate' },
        { name: "Leg Barbell Curl Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277460/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlright.mp4", type: 'arm-intermediate' },
        { name: "Diagonal Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277456/Sadhana/Beginner%20Workout/Arm%20Beginner/diagonalplank.mp4", type: 'arm-intermediate' },
        { name: "Punches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/punches.mp4", type: 'arm-intermediate' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/pushups.mp4", type: 'arm-intermediate' },
        { name: "Inchworms", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/inchworms.mp4", type: 'arm-intermediate' },
        { name: "Wall Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277470/Sadhana/Beginner%20Workout/Arm%20Beginner/wallpushups.mp4", type: 'arm-intermediate' },
        { name: "Triceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277468/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsstretchleft.mp4", type: 'arm-intermediate' },
        { name: "Triceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277473/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsright.mp4", type: 'arm-intermediate' },
        { name: "Standing Biceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/stndingstretchleft.mp4", type: 'arm-intermediate' },
        { name: "Standing Biceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277467/Sadhana/Beginner%20Workout/Arm%20Beginner/standingbicepsright.mp4", type: 'arm-intermediate' },

        //Leg Intermediate Url's
        { name: "Side Hop", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/sidehop.mp4", type: 'leg-intermediate' },
        { name: "Squats", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277382/Sadhana/Beginner%20Workout/Leg%20Beginner/squats.mp4", type: 'leg-intermediate' },
        { name: "Side Lying Leg Lift Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277379/Sadhana/Beginner%20Workout/Leg%20Beginner/sideleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'leg-intermediate' },
        { name: "Side Lying Leg Lift Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277380/Sadhana/Beginner%20Workout/Leg%20Beginner/sideright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'leg-intermediate' },
        { name: "Backward Lunge", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277373/Sadhana/Beginner%20Workout/Leg%20Beginner/backwardlungee.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'leg-intermediate' },
        { name: "Donkey Kicks Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277374/Sadhana/Beginner%20Workout/Leg%20Beginner/donkeykickleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate' },
        { name: "Donkey Kicks Right",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277374/Sadhana/Beginner%20Workout/Leg%20Beginner/donkeykickright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate' },
        { name: "Left Quad Stretch With Wall",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277376/Sadhana/Beginner%20Workout/Leg%20Beginner/leftquad.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate' },
        { name: "Right Quad Stretch With Wall", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277377/Sadhana/Beginner%20Workout/Leg%20Beginner/rightquad.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
        { name: "Knee to Chest Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277373/Sadhana/Beginner%20Workout/Leg%20Beginner/kneeleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
        { name: "Knee to Chest Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277375/Sadhana/Beginner%20Workout/Leg%20Beginner/kneeright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
        { name: "Wall Calf Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/wallcalfraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
        { name: "Sumo Squat Calf Raises With Wall", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277382/Sadhana/Beginner%20Workout/Leg%20Beginner/sumosquat.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
        { name: "Calf Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277372/Sadhana/Beginner%20Workout/Leg%20Beginner/calfleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
        { name: "Calf Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277372/Sadhana/Beginner%20Workout/Leg%20Beginner/calfright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-intermediate'},
 
         //Shoulder & Back Intermediate Url's
         { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612774/junpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'back-intermediate' },
         { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612643/armraises.mp4", type: 'back-intermediate' },
         { name: "Rhomboid Pulls", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612923/rhomboidpulls.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'back-intermediate' },
         { name: "Knee Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612834/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'back-intermediate' },
         { name: "Side-Lying Floor Strecth Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612757/floorstretcleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate' },
         { name: "Side-Lying Floor Stretch Right",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612717/floorstretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate' },
         { name: "Arm Scissors",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612680/armscissors.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate' },
         { name: "Cat Cow Pose", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612692/catcowpose.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate'},
         { name: "Prone Triceps Push Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612848/pronepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate'},
         { name: "Reclined Rhomboid Squeezes", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612875/reclined.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate'},
         { name: "Child's Pose", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612704/childpose.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-intermediate'},
  
//-------------------------------------------------------------ADVANCED URL--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //Abs Advanced Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'abs-advanced' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'abs-advanced' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'abs-advanced' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced'},
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303389/cobra%20stretch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced'},
        { name: "Spine Lumbar Twist Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277268/Sadhana/Beginner%20Workout/Abs%20Beginner/stretchleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303423/spineleft.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced'},         
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721712772/spinestretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303403/spineright.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-advanced'},                     
         
        //Chest Intermediate Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-intermediate' },
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/inclinepushups.mp4", type: 'chest-intermediate' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277431/Sadhana/Beginner%20Workout/Chest%20Beginner/pushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'chest-advanced' },
        { name: "Wide Arm Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277434/Sadhana/BeginnerWorkout/ChestBeginner/widearmpushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'chest-advanced' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/tricepdips.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'chest-advanced' },
        { name: "Knee Push-Ups",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277430/Sadhana/Beginner%20Workout/Chest%20Beginner/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-advanced' },
        { name: "Cobra Stretch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-advanced' },
        { name: "Chest Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277426/Sadhana/Beginner%20Workout/Chest%20Beginner/cheststretch.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'chest-advanced'},
       
        //Arm Intermediate Url's
        { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4", type: 'arm-advanced' },
        { name: "Side Arm Raise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277466/Sadhana/Beginner%20Workout/Arm%20Beginner/sidearmraise.mp4", type: 'arm-advanced' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277471/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsdips.mp4", type: 'arm-advanced' },
        { name: "Arm Circles Clockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/armclockwise.mp4", type: 'arm-advanced' },
        { name: "Arm Circles Counterclockwise", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armcounterclockwise.mp4", type: 'arm-advanced' },
        { name: "Diamond Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/diamondpushups.mp4", type: 'arm-advanced' },
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277463/Sadhana/Beginner%20Workout/Arm%20Beginner/jumpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'arm-advanced' },
        { name: "Chest Press Pulse", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277454/Sadhana/Beginner%20Workout/Arm%20Beginner/chestpresspulse.mp4", type: 'arm-advanced' },
        { name: "Leg Barbell Curl Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277459/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlleft.mp4", type: 'arm-advanced' },
        { name: "Leg Barbell Curl Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277460/Sadhana/Beginner%20Workout/Arm%20Beginner/legcurlright.mp4", type: 'arm-advanced' },
        { name: "Diagonal Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277456/Sadhana/Beginner%20Workout/Arm%20Beginner/diagonalplank.mp4", type: 'arm-advanced' },
        { name: "Punches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/punches.mp4", type: 'arm-advanced' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/pushups.mp4", type: 'arm-advanced' },
        { name: "Inchworms", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/inchworms.mp4", type: 'arm-advanced' },
        { name: "Wall Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277470/Sadhana/Beginner%20Workout/Arm%20Beginner/wallpushups.mp4", type: 'arm-advanced' },
        { name: "Triceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277468/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsstretchleft.mp4", type: 'arm-advanced' },
        { name: "Triceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277473/Sadhana/Beginner%20Workout/Arm%20Beginner/tricepsright.mp4", type: 'arm-advanced' },
        { name: "Standing Biceps Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277464/Sadhana/Beginner%20Workout/Arm%20Beginner/stndingstretchleft.mp4", type: 'arm-advanced' },
        { name: "Standing Biceps Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277467/Sadhana/Beginner%20Workout/Arm%20Beginner/standingbicepsright.mp4", type: 'arm-advanced' },

        //Leg Intermediate Url's
        { name: "Side Hop", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/sidehop.mp4", type: 'leg-advanced' },
        { name: "Squats", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277382/Sadhana/Beginner%20Workout/Leg%20Beginner/squats.mp4", type: 'leg-advanced' },
        { name: "Side Lying Leg Lift Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277379/Sadhana/Beginner%20Workout/Leg%20Beginner/sideleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'leg-advanced' },
        { name: "Side Lying Leg Lift Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277380/Sadhana/Beginner%20Workout/Leg%20Beginner/sideright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303278/russiantwist.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Russian Twist helps in strengthening your core. Sit with your knees bent and twist your torso side to side.", "Instruction for heading 2 of Russian Twist.", "Instruction for heading 3 of Russian Twist.", "Instruction for heading 4 of Russian Twist."], type: 'leg-advanced' },
        { name: "Backward Lunge", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277373/Sadhana/Beginner%20Workout/Leg%20Beginner/backwardlungee.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'leg-advanced' },
        { name: "Donkey Kicks Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277374/Sadhana/Beginner%20Workout/Leg%20Beginner/donkeykickleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced' },
        { name: "Donkey Kicks Right",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277374/Sadhana/Beginner%20Workout/Leg%20Beginner/donkeykickright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced' },
        { name: "Left Quad Stretch With Wall",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277376/Sadhana/Beginner%20Workout/Leg%20Beginner/leftquad.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced' },
        { name: "Right Quad Stretch With Wall", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277377/Sadhana/Beginner%20Workout/Leg%20Beginner/rightquad.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
        { name: "Knee to Chest Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277373/Sadhana/Beginner%20Workout/Leg%20Beginner/kneeleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
        { name: "Knee to Chest Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277375/Sadhana/Beginner%20Workout/Leg%20Beginner/kneeright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
        { name: "Wall Calf Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/wallcalfraises.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
        { name: "Sumo Squat Calf Raises With Wall", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277382/Sadhana/Beginner%20Workout/Leg%20Beginner/sumosquat.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
        { name: "Calf Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277372/Sadhana/Beginner%20Workout/Leg%20Beginner/calfleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
        { name: "Calf Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277372/Sadhana/Beginner%20Workout/Leg%20Beginner/calfright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'leg-advanced'},
 
         //Shoulder & Back Intermediate Url's
         { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612774/junpingjacks.mp4",musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'back-advanced' },
         { name: "Arm Raises", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612643/armraises.mp4", type: 'back-advanced' },
         { name: "Rhomboid Pulls", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612923/rhomboidpulls.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."], type: 'back-advanced' },
         { name: "Knee Push-Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612834/kneepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303128/abdominalcrunches.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",  instructions: ["Abdominal.", "Instruction for heading 2 .", "Instruction for heading 3 .", "Instruction for heading 4."], type: 'back-advanced' },
         { name: "Side-Lying Floor Strecth Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612757/floorstretcleft.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303298/mountainclimber.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced' },
         { name: "Side-Lying Floor Stretch Right",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612717/floorstretchright.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303324/heeltouch.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced' },
         { name: "Arm Scissors",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612680/armscissors.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303350/legraises.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced' },
         { name: "Cat Cow Pose", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612692/catcowpose.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced'},
         { name: "Prone Triceps Push Ups", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612848/pronepushups.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced'},
         { name: "Reclined Rhomboid Squeezes", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612875/reclined.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced'},
         { name: "Child's Pose", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612704/childpose.mp4", musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303371/plank.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'back-advanced'},
  
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
            name: "Jumping Jacks", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",
            musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", 
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],
        },
        'arm-beginner': {
            name: "Arm Raises", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4",

        },
        'leg-beginner': {
            name: "Side Hop", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/sidehop.mp4",

        },
        'back-beginner': {
            name: "Jumping Jacks", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612774/junpingjacks.mp4",
            musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", 
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", 
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],

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
            name: "Jumping Jacks", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",
            musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", 
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],
        },
        'arm-intermediate': {
            name: "Arm Raises", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4",

        },
        'leg-intermediate': {
            name: "Side Hop", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/sidehop.mp4",

        },
        'back-intermediate': {
            name: "Jumping Jacks", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612774/junpingjacks.mp4",
            musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", 
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", 
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],

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
            name: "Jumping Jacks", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4",
            musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", 
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],
        },
        'arm-advanced': {
            name: "Arm Raises", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277452/Sadhana/Beginner%20Workout/Arm%20Beginner/armraises.mp4",

        },
        'leg-advanced': {
            name: "Side Hop", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277383/Sadhana/Beginner%20Workout/Leg%20Beginner/sidehop.mp4",

        },
        'back-advanced': {
            name: "Jumping Jacks", 
            animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1723612774/junpingjacks.mp4",
            musclesSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1724303095/jumpingjacks.mp4", 
            howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", 
            instructions: ["Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead. Return to the start position then do the next rep. This exercise provides a full-body workout and works all your large muscle groups.", "Instruction for heading 2 of Jumping Jacks.", "Instruction for heading 3 of Jumping Jacks.", "Instruction for heading 4 of Jumping Jacks."],

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
