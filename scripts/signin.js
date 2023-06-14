function addSigninSubmitClick() {
  $('#submit').click(function () {
    const email = $('#email').val();
    const password = $('#password').val();
    if (!email || !password) {
      alert('Email and password are required!');
    } else {
      $('#successModal').modal('show');
    }
  });
}

$(function () {
  addSigninSubmitClick();
});
