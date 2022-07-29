const CAPSULE_COUNT = 100;
const capNumInput = document.querySelector("#bookingCapsule");
const guestNameInput = document.querySelector("#guest");
const bookForm = document.querySelector("#bookForm");
const checkoutForm = document.querySelector("#checkoutForm");
const messages = document.querySelector("#messages");

//checkoutCapsule ID (from html)

const book = (evt) => {
  evt.preventDefault();
  const capNum = capNumInput.value;
  const guestName = guestNameInput.value;

  const capsule = document.querySelector(`"#capsuleLabel${capNum}`);
  const guest = document.querySelector(`#guest${capNum}`);

  //check to make sure the form fileds are filled out
  //check to make sure the capsule exists
  //check to make sure the capsule is available
  //if either of these is false messages.innerText = errorMessage
  //messages.classList.add('alert-danger;) and remove alert-info from HTML

  capsule.classList.remove("badge-success");
  capsule.classList.add("badge-danger");

  guest.innerText = guestName;
  evt.target;

  handleMsgs("Success", "success");

  bookForm.addEventListener("submit", book);

  const checkout = (evt) => {
    evt.preventDefault();
    //get the checkout room number from the input(select the input a the top of this page)
    //make sure the room input is filled out
    //make sure the room is occupied
    //if the roomn is blank or unoccupied show an error in message
    //change the label and name back to the original state including classes
  };
  checkoutForm.addEventListener("submit", checkout);

  //get checkout room number from the input (select the input at the top of this page)
  //make sure room input is filled out.
  // make sure the room is occupied
  //if the room is blank or unoccupied show an error in messages
  //change the label and name back to the original state including classes
};

const capNum = capNumInput.value;
const guestName = guestNameInput.value;

const capsule = document.querySelector(`#capsuleLabel${capNum}`);
const guest = document.querySelector(`#guest${capNum}`);

const newLocal = "badge-success";
//check to make sure the form fields are filled out. (validate and that they are required and exist).  If you cant then use alert danger and you can't check in.  Alert Info change back.
//check to make sure the capsule exists
//check to make sure the capsule is available
//if either of these is false messages.innerText = error
//need to change alert info to "alert danger"
//messages.classList.add('alert-danger') and remove (alert-info)

capsule.classList.remove("badge-success");
capsule.classList.add("badge-danger");

guest.innerHTML = guestName;
bookForm.addEventListener("submit", book);

function init() {
  const capsuleContainer = document.getElementById("capsules");
  let html = "";
  for (let i = 0; i < CAPSULE_COUNT; i++) {
    html += `<div>
            <span id="capsuleLabel${
              i + 1
            }" class="badge badge-pill badge-success">Capsule #${i + 1}</span>
            &nbsp;<span id="guest${i + 1}">Unoccupied</span>
        </div>`;
  }
  capsuleContainer.innerHTML = html;
}
