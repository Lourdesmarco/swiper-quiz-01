

let position = Array.from(document.querySelectorAll('.widget_draggable')).map(e => { return { x: 0, y: 0 } });
let attempts = 0;

// Init dragging
interact('.widget_draggable').draggable({
    listeners: {
        move(event) {
            let index = Array.from(document.querySelectorAll('.widget_draggable')).indexOf(event.target);
            position[index].x += event.dx
            position[index].y += event.dy
            event.target.style.transform =
                `translate(${position[index].x}px, ${position[index].y}px)`
        }
    }
});


// Init dropping recognision
interact('.widget_droppable').dropzone({
    listeners: {
        dragenter(event) {
            event.target.classList.add('drag_enter');
        },
        dragleave(event) {
            event.target.classList.remove('drag_enter');
        },
        drop(event) {
            event.target.classList.remove('drag_enter');
            let box = event.relatedTarget;
            let dropzone = event.target;

            if (box.getAttribute("drag-color") == dropzone.getAttribute("drop-color")) {
                success();
            } else {
                error();
            }
        }
    }
});

const init = () => {
    position = Array.from(document.querySelectorAll('.widget_draggable')).map(e => { return { x: 0, y: 0 } });
    Array.from(document.querySelectorAll('.widget_draggable')).forEach(e => {
        e.style.transform = "";
    });
};
const success = () => {
    let msg = document.querySelector('.question_response_success');
    msg.classList.add('visible');

    window.setTimeout(() => {
        msg.classList.remove('visible');
        init();
    }, 1200);
};
const error = () => {
    if (attempts < 2) {
        let msg = document.querySelector('.question_response_error');
        msg.classList.add('visible');

        window.setTimeout(() => {
            attempts++;
            msg.classList.remove('visible');
            init();
        }, 1200);
    } else {
        let msg = document.querySelector('.question_response_warning');
        msg.classList.add('visible');
        window.setTimeout(() => {
            msg.classList.remove('visible');
            init();
            attempts = 0;
        }, 1200);
    }
};


// Init swiper

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',


    // pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    // navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     // Enable keyboard
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
   // a11y
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    simulateTouch:false   
});
    

//To disable touch control:

mySwiper.disableTouchControl();

