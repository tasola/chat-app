# chat-app


## Get it running

1. Navigate your way to the client
2. Install dependencies through `npm install`
3. Start the client through `npm run start`

4. Navigate your way to the server
5. Install dependencies through `npm install`
6. Start the client through `npm run dev`

After these steps the client is up and running on `localhost:3000`, and the server on `localhost:8000`!


## How to use it
In order to simulate two different clients, open up two tabs of the client (localhost:3000).

### The Join Page
You are first prompted to set a user name and room of the chat room you want to join. When this information is submitted, you are redirected to the chat page.

### The Chat Page
Here you are able to send chat messages. The messages show up both on your client, and on every other connected client. The chat announces when a user connects or disconnects.

## Future improvements
I am fully aware that this app is far (FAR) from extraordinary. However, I was told to only put a couple of hours on this project, and this is what I managed to create in less than 4h (excluding breaks).

I recommend checking the commit history out to get an idea of how I worked and in what order I developed functionality. Basically, I started off reading up a bit on web sockets and socket.io, then I started to create the Chat Page with some basic socket functionality. After this I got a bit overexcited and bit off more than I could chew. I wanted to implement logic for handling different rooms and users. When I realized that time was running out and that I wouldn't be able to implement this functionality in time, I prioritized to clean up the code a bit instead.

Even though I felt it was a bit of a heavy task to implement a chat application in a couple of hours, I thought it was super fun, and I enjoyed exploring socket.io. I'm keen to extend this project later on for fun. Here is some things I will add: 

### Styling
The most obvious flaw when testing the app out is that it doesn't have any styling whatsoever. I do enjoy design and styling quite a lot, but I love actual code "logic" more, so I went ahead and tried to maximize the functionality instead. In my everyday development work I usually implement the logic first and then apply styles. I would use styledComponents for this, as I've liked the CSS-in-JS approach through using Material-UI, but styledComponents seems to be even more useful from what I've read.

### User functionality
As you can see in e.g ChatRoom.jsx, row 27, I started using user and room in the socket communication. As mentioned above, I didn't have the time to implement this fully though, so I rolled back. I would like to add functionality so that you not only send a message to the server, but an object with a sender and a message. This way you could add support for putting your own messages on one side, and the other's messages on the other. Furthermore, you could announce specifically what user has entered/left, and tell the other users apart by rendering their user name next to their message.

### Room functionality
Socket.io supports room functionality, so that you can emit messages to certain rooms (https://socket.io/docs/rooms/). I started off with this on the same time as users (described above), and it seemed very straight forward.
In addition, with the User Functionality (mentioned above) in place, it would be fairly simple to have a section of the chat which listed the users currently online in the chat room.

### Other improvements
At a later stage this solution would of course be deployed. I had this in mind when defining ports, hosts etc, but I didn't have time to actually deploy it. For this kind of simple, small scale application, I would use Heroku to get it up and spinning in a heartbeat.
Furthermore, you should add tests and a CI/CD pipeline, which was not prioritized. For these matters I would use Jest and Circle CI, which has some really smooth integrations with Github and Heroku.


