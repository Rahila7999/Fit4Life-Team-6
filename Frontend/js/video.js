function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const videoType = getQueryParam('type');
    const videoTitle = getQueryParam('title');

     const defaultVideos = {
    'abs-beginner': {
        name: "Jumping Jacks",
        animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", 
        musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", 
        howToDoSrc: "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",
        instructions: "Jumping Jacks are a great cardio exercise. Start with feet together and jump while spreading your legs and raising your arms."
    },
    'chest-beginner': {name: "Pushups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4", musclesSrc: "https://example.com/chest-beginner/pushups-muscles.mp4", howToDoSrc: "https://example.com/chest-beginner/pushups-howtodo.mp4"},
    'arm-beginner': {name: "Bicep Curls", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4", musclesSrc: "https://example.com/arm-beginner/bicepcurls-muscles.mp4", howToDoSrc: "https://example.com/arm-beginner/bicepcurls-howtodo.mp4"}
};

    const selectedVideo = defaultVideos[videoType] || {};
    const animationSrc = getQueryParam('animation') || selectedVideo.animationSrc;
    const musclesSrc = getQueryParam('muscles') || selectedVideo.musclesSrc;
    const howToDoSrc = getQueryParam('howToDo') || selectedVideo.howToDoSrc;
    const instructions = getQueryParam('instructions') || selectedVideo.instructions;

    // Set video title and sources
    document.getElementById('video-title').textContent = videoTitle || selectedVideo.name;
    document.getElementById('animation-video').src = animationSrc;
    document.getElementById('muscles-video').src = musclesSrc;
    document.getElementById('how-to-do-video').src = howToDoSrc;
    document.getElementById('instructions').textContent = instructions;

    // Display tabs
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

    // Populate sidebar with video list based on the selected type
    const videoList = document.getElementById('video-list');
    const workouts = [
        //Abs Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/jumpingjacks.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", instructions: "Jumping Jacks are a great cardio exercise. Start with feet together and jump while spreading your legs and raising your arms.", type: 'abs-beginner'},
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4",  howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA",instructions: "Jumping Jacks are", type: 'abs-beginner' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277264/Sadhana/Beginner%20Workout/Abs%20Beginner/abdonimalcrunches.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277272/Sadhana/Beginner%20Workout/Abs%20Beginner/russiantwist.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4",  howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277269/Sadhana/Beginner%20Workout/Abs%20Beginner/mountainclimber.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Heel Touch",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277270/Sadhana/Beginner%20Workout/Abs%20Beginner/heeltouch.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Leg Raises",animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277262/Sadhana/Beginner%20Workout/Abs%20Beginner/legraises.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277266/Sadhana/Beginner%20Workout/Abs%20Beginner/plank.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277258/Sadhana/Beginner%20Workout/Abs%20Beginner/cobrastretch.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},
        { name: "Spine Lumbar Twist Stretch Left", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721277268/Sadhana/Beginner%20Workout/Abs%20Beginner/stretchleft.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},         
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/deup6t83x/video/upload/v1721712772/spinestretchright.mp4", musclesSrc: "https://example.com/abs-beginner/jumpingjacks-muscles.mp4", howToDoSrc : "https://www.youtube.com/embed/2W4ZNSwoW_4?si=I6Jaz4Zp4IBb0sqA", type: 'abs-beginner'},                     
       
        //Chest Beginner Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4", type: 'chest-beginner' },
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Chest%20Beginner/benchpress.mp4", type: 'chest-beginner' },
        { name: "Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Chest%20Beginner/chestfly.mp4", type: 'chest-beginner' },
        { name: "Wide Arm Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4", type: 'chest-beginner' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Chest%20Beginner/benchpress.mp4", type: 'chest-beginner' },
        { name: "Wide Arm Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Chest%20Beginner/chestfly.mp4", type: 'chest-beginner' },
        { name: "Triceps Dips", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4", type: 'chest-beginner' },
        { name: "Incline Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Chest%20Beginner/benchpress.mp4", type: 'chest-beginner' },
        { name: "Knee Push-Ups", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Chest%20Beginner/chestfly.mp4", type: 'chest-beginner' },
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Chest%20Beginner/pushups.mp4", type: 'chest-beginner' },
        { name: "Chest Stretch", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Chest%20Beginner/benchpress.mp4", type: 'chest-beginner' },

        //Arm Beginner Url's
        { name: "Bicep Curls", src: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Arm%20Beginner/bicepcurls.mp4", type: 'arm-beginner' },
        { name: "Tricep Dips", src: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Arm%20Beginner/tricepdips.mp4", type: 'arm-beginner' },
        { name: "Hammer Curls", src: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Arm%20Beginner/hammercurls.mp4", type: 'arm-beginner' },

        //Abs Intermediate Url's
        { name: "Jumping Jacks", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665808/Abs%20Beginner/jumpingjacks.mp4", type: 'abs-intermediate' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665806/Abs%20Beginner/abdominalcrunches.mp4", type: 'abs-intermediate' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Heel Touch", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Leg Raises", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Abdominal Crunches", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Russian Twist", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Mountain Climber", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Heel Touch", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Leg Raises", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Plank", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Cobra Stretch", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Spine Lumber Twist Stretch Left", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
        { name: "Spine Lumbar Twist Stretch Right", animationSrc: "https://res.cloudinary.com/divvbxdlu/video/upload/v1717665809/Abs%20Beginner/russiantwist.mp4", type: 'abs-intermediate' },
       
    ];

    // Filter workouts based on the selected type
    const filteredWorkouts = workouts.filter(workout => workout.type === videoType);

    // Populate sidebar with filtered video list
    videoList.innerHTML = ''; // Clear previous content
    filteredWorkouts.forEach(workout => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `video.html?title=${encodeURIComponent(workout.name)}&type=${encodeURIComponent(workout.type)}&animation=${encodeURIComponent(workout.animationSrc)}&muscles=${encodeURIComponent(workout.musclesSrc)}&howToDo=${encodeURIComponent(workout.howToDoSrc)}&instructions=${encodeURIComponent(workout.instructions)}`;
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
});

function readMore(title, type) {
    // Redirect to video.html with the appropriate query parameters
    window.location.href = `video.html?title=${encodeURIComponent(title)}&type=${encodeURIComponent(type)}`;
}