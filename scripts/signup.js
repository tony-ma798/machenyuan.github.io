function addSigninSubmitClick() {
  $('#submit').click(function () {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    const password = $('#password').val();
    if (!firstName || !lastName || !email || !password) {
      alert('First Name / LastName / Email and password are required!');
    } else {
      $('#successModal').modal('show');
    }
  });
}

$(function () {
  addSigninSubmitClick();
});
