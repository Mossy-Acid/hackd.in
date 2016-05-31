'use strict';

var getEngineers = function getEngineers(cb) {
  $.get('/engineers/data', function () {
    console.log('GET request made to Engineers');
  }).done(function (data) {
    console.log(data);
    cb(data);
  }).fail(function (err) {
    console.log(err);
  });
};

var postEngineer = function postEngineer(data) {
  $.post('/engineers/data', data, function () {
    console.log('POST request made to Engineers');
  }).done(function (data) {
    console.log(data);
  }).fail(function (err) {
    console.log(err);
  });
};

window.getEngineers = getEngineers;
window.postEngineer = postEngineer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvdXRpbHMvZW5naW5lZXJIZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxlQUFlLFNBQWYsWUFBZSxLQUFNO0FBQ3pCLElBQUUsR0FBRixDQUFNLGlCQUFOLEVBQXlCLFlBQU07QUFDN0IsWUFBUSxHQUFSLENBQVksK0JBQVo7QUFDRCxHQUZELEVBR0MsSUFIRCxDQUdPLGdCQUFRO0FBQ2IsWUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLE9BQUcsSUFBSDtBQUNELEdBTkQsRUFPQyxJQVBELENBT08sZUFBTztBQUNaLFlBQVEsR0FBUixDQUFZLEdBQVo7QUFDRCxHQVREO0FBVUQsQ0FYRDs7QUFhQSxJQUFNLGVBQWUsU0FBZixZQUFlLE9BQVE7QUFDM0IsSUFBRSxJQUFGLENBQU8saUJBQVAsRUFBMEIsSUFBMUIsRUFBZ0MsWUFBTTtBQUNwQyxZQUFRLEdBQVIsQ0FBWSxnQ0FBWjtBQUNELEdBRkQsRUFHQyxJQUhELENBR08sZ0JBQVE7QUFDYixZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0QsR0FMRCxFQU1DLElBTkQsQ0FNTyxlQUFPO0FBQ1osWUFBUSxHQUFSLENBQVksR0FBWjtBQUNELEdBUkQ7QUFTRCxDQVZEOztBQVlBLE9BQU8sWUFBUCxHQUFzQixZQUF0QjtBQUNBLE9BQU8sWUFBUCxHQUFzQixZQUF0QiIsImZpbGUiOiJlbmdpbmVlckhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRFbmdpbmVlcnMgPSBjYiA9PiB7XG4gICQuZ2V0KCcvZW5naW5lZXJzL2RhdGEnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0dFVCByZXF1ZXN0IG1hZGUgdG8gRW5naW5lZXJzJyk7XG4gIH0pXG4gIC5kb25lKCBkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjYihkYXRhKTtcbiAgfSlcbiAgLmZhaWwoIGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb3N0RW5naW5lZXIgPSBkYXRhID0+IHtcbiAgJC5wb3N0KCcvZW5naW5lZXJzL2RhdGEnLCBkYXRhLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1BPU1QgcmVxdWVzdCBtYWRlIHRvIEVuZ2luZWVycycpO1xuICB9KVxuICAuZG9uZSggZGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfSlcbiAgLmZhaWwoIGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG59O1xuXG53aW5kb3cuZ2V0RW5naW5lZXJzID0gZ2V0RW5naW5lZXJzO1xud2luZG93LnBvc3RFbmdpbmVlciA9IHBvc3RFbmdpbmVlcjtcbiJdfQ==