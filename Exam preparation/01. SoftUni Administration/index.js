function solve() {
    let buttonElement = document.querySelector('.admin-view .action button');
    let lectures = {};
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value == 'select module') {
            return;
        }

        if (!lectures[lectureModuleElement.value]) {
            lectures[lectureModuleElement.value] = [];
        }

        let currentLEcture = {name: lectureNameElement , date: formatDate(lectureDateElement.value)};
        lectures[lectureModuleElement.value].push(currentLEcture);

       let lectureElement = createLecture(lectureNameElement.value, lectureDateElement.value );

       let moduleElement = createModule(lectureModuleElement.value, lectureElement);
       let modulesElement = document.querySelector('.modules');
       modulesElement.appendChild(moduleElement);
    });
    function createModule (name, lectureElement) {
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        let lectureList = document.createElement('ul');
        lectureList.appendChild(lectureElement);

        divElement.appendChild(headingElement);
        divElement.appendChild(lectureList);

        return divElement;
    }
    function createLecture (name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = 
            `${name} - ${date}`;

            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('red');
            deleteButtonElement.textContent = 'del';

            liElement.appendChild(courseHeadingElement);
            liElement.appendChild(deleteButtonElement);

            return liElement;
    }
    function formatDate (dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.repalce(/-/g, '/');

        return `${date} - ${time}`;
    }
};