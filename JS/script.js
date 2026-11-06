
document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault();
  var d = new FormData(this);
  var t = 'नमस्कार, अजय क्लासेस प्रवेश चौकशी.\n' +
          'विद्यार्थी: ' + d.get('n') + '\n' +
          'इयत्ता: ' + d.get('c') + '\n' +
          'मोबाईल: ' + d.get('m') + '\n' +
          'संदेश: ' + (d.get('s') || '-');
  window.open('https://wa.me/918625982787?text=' + encodeURIComponent(t), '_blank');
});