import { Notify } from "notiflix";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);



function onSubmitForm(e) {
  e.preventDefault();
  
  let intCount = Number(e.target.elements.amount.value);
  let intStep = Number(e.target.elements.step.value);
  let intDelay = Number(e.target.elements.delay.value);

  for (let i = 0; i <= intCount; i += 1) {
    createPromise(i, intDelay).then(onSuccess).catch(onError)
    intDelay += intStep
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay })
      } else {
        return reject({ position, delay })
      }
    }, delay);
  }
  )
  
};


function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
};


function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
}


