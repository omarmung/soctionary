'use strict';

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
socket.on('countdown', function (animalName) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2V2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsT0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixJQUFwQjtBQUNBOztBQUVBO0FBQ0EsT0FBTyxFQUFQLENBQVUsV0FBVixFQUF1QixZQUFZO0FBQ2pDO0FBQ0QsQ0FGRDtBQUdBO0FBQ0E7QUFDQSxPQUFPLElBQVAsQ0FBWSxPQUFaO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUMxQztBQUNELENBRkQ7QUFHQTs7QUFFQTtBQUNBLE9BQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTtBQUM1QjtBQUNELENBRkQ7QUFHQTs7QUFFQTtBQUNBLE9BQU8sRUFBUCxDQUFVLEtBQVYsRUFBaUIsWUFBWTtBQUMzQjtBQUNBLFNBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsS0FBckI7QUFDRCxDQUhEO0FBSUE7O0FBRUE7QUFDQSxPQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFVBQVUsTUFBVixFQUFrQjtBQUNsQztBQUNELENBRkQ7QUFHQTs7QUFFQTtBQUNBLE9BQU8sSUFBUCxDQUFZLE1BQVosRUFBb0IsT0FBcEI7QUFDQTs7QUFFQTtBQUNBLE9BQU8sRUFBUCxDQUFVLFNBQVYsRUFBcUIsVUFBVSxNQUFWLEVBQWtCO0FBQ3JDO0FBQ0QsQ0FGRDtBQUdBOztBQUVBO0FBQ0EsT0FBTyxJQUFQLENBQVksT0FBWjtBQUNBIiwiZmlsZSI6ImV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcGFzcyB1c2VybmFtZSBiYWNrIHRvIHNlcnZlclxuc29ja2V0LmVtaXQoJ25hbWUnLCBuYW1lKTtcbi8vXG5cbi8vXG5zb2NrZXQub24oJ3JlYWR5VmlldycsIGZ1bmN0aW9uICgpIHtcbiAgLy9yZWRpcmVjdCB0byBcImV2ZXJ5b25lIHJlYWR5P1wiIGJ1dHRvbiB2aWV3XG59KTtcbi8vXG4vL3RlbGwgdGhlIHNlcnZlciBzb21lb25lIGhhcyBwdXNoZWQgdGhlIGV2ZXJ5b25lJ3MgcmVhZHkgYnV0dG9uXG5zb2NrZXQuZW1pdCgncmVhZHknKTtcbi8vXG5cbi8vXG5zb2NrZXQub24oJ2NvdW50ZG93bicsZnVuY3Rpb24gKGFuaW1hbE5hbWUpIHtcbiAgLy9yZWRpcmVjdCB0byBjb3VudGRvd24gdmlld1xufSk7XG4vL1xuXG4vL1xuc29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuICAvL3JlZGlyZWN0IHRvIGRyYXcgdmlld1xufSk7XG4vL1xuXG4vL1xuc29ja2V0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vc2VuZCBpbWFnZSB0byBzZXJ2ZXJcbiAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyAgXG59KTtcbi8vXG5cbi8vXG5zb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoaW1hZ2VzKSB7XG4gIC8vcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcbn0pO1xuLy9cblxuLy9zZW5kIHVzZXIgdm90ZSB0byBzZXJ2ZXJcbnNvY2tldC5lbWl0KCd2b3RlJywgaW1hZ2VJZCk7XG4vL1xuXG4vL1xuc29ja2V0Lm9uKCdyZXN1bHRzJywgZnVuY3Rpb24gKHdpbm5lcikge1xuICAvL3JlZGlyZWN0IHRvIHJlc3VsdHMgdmlld1xufSk7XG4vL1xuXG4vL3RlbGwgdGhlIHNlcnZlciB5b3Ugd2FudCBhbm90aGVyIGdhbWVcbnNvY2tldC5lbWl0KCdhZ2FpbicpO1xuLy8iXX0=