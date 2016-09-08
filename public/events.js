//pass username back to server
socket.emit('name', name);
//

//
socket.on('readyView', function () {
  //redirect to "everyone ready?" button view
});
//
//tell the server someone has pushed the everyone's ready button
socket.emit('ready');
//

//
socket.on('countdown',function (animalName) {
  //redirect to countdown view
});
//

//
socket.on('draw', function () {
  //redirect to draw view
});
//

//
socket.on('end', function () {
  //send image to server
  socket.emit('image', image);  
});
//

//
socket.on('vote', function (images) {
  //redirect to voting view
});
//

//send user vote to server
socket.emit('vote', imageId);
//

//
socket.on('results', function (winner) {
  //redirect to results view
});
//

//tell the server you want another game
socket.emit('again');
//