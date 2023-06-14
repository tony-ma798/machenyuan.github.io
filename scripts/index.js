function addTimeItemClick() {
  $('#timeModel .list-group-item').click(function () {
    const dom = $(this);
    $('#timeModel .list-group-item').removeClass('active');
    dom.addClass('active');
  });
}

function addTimeSubmitBtnClick() {
  $('#time-btn').click(function () {
    const dom = $('#timeModel .active');
    if (dom) {
      const value = dom.text();
      $('#time').val(value);
    } else {
      $('#time').val('');
    }

    $('#timeModel').modal('hide');
  });
}

function addBookingClick() {
  $('#submit').click(function () {
    const name = $('#name').val();
    const service = $('#service').val();
    const expert = $('#expert').val();
    const date = $('#date').val();
    const time = $('#time').val();

    if (!name || !service || !expert || !date || !time) {
      alert('Name / Service / Expert / Date / Time are required!');
      $('#failedModal').modal('show');
    } else {
      $('#successModal').modal('show');
    }
  });
}

function addDateClick() {
  $('#date-btn').click(function () {
    const dom = $('.calendar .selected');
    if (dom.length > 0) {
      const title = $('.calendar_header h2').text();
      const start = dom.first().text();
      const end = dom.last().text();
      $('#date').val(`${start} ${title} -- ${end} ${title}`);
    } else {
      $('#date').val('');
    }
    $('#dateModal').modal('hide');
  });
}

$(function () {
  addDateClick();
  addTimeItemClick();
  addTimeSubmitBtnClick();

  addBookingClick();
});
