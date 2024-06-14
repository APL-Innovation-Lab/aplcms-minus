console.log('Meeting Rooms page')
document.querySelector('#loc').addEventListener('change',
    function(event) {
      const queryString3 = window.location.search;
      const urlParams3 = new URLSearchParams(queryString3);
      var go_to2 = '/meeting-rooms/calendar?loc=' + event.target.value;
      window.location.href = go_to2;
});