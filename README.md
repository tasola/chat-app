# chat-app


## :rocket: Get it running

1. Navigate your way to the client
2. Install dependencies through `npm install`
3. Start the client through `npm run start`

4. Navigate your way to the server
5. Install dependencies through `npm install`
6. Start the client through `npm run dev`

After these steps the client is up and running on `localhost:3000`, and the server on `localhost:8000`!


## How to use it
In order to simulate two different clients, open up two tabs of the client (localhost:3000).

### :busts_in_silhouette: The Join Page
You are first prompted to set a user name and room of the chat room you want to join. When this information is submitted, you are redirected to the chat page.

### :speech_balloon: The Chat Page
Here you are able to send chat messages. The messages show up both on your client, and on every other connected client. The chat announces when a user connects or disconnects.

## :memo: Future improvements
I created this app in around 4 hrs (+1.5 hrs styling), so there are obviously a lot of improvements to be made. I thought that it was fun primarily to explore WebSocket communication, and I'm keen to further develop this app. Here are some things I will add: 

### :nail_care: Styling
This was the first time I tried [styled-components](https://styled-components.com/), and wow, did I enjoy it! It sure enables a super sleek and seamless styling process. I will use it more in future projects for sure.

### Room functionality
Socket.io supports room functionality, so that you can emit messages to certain rooms (https://socket.io/docs/rooms/). I started off with this, and it seemed very straight forward (Right now it doesn't matter which room name you enter, you'll always end up in the same room).
In addition, it would be fairly simple to have a section of the chat which listed the users currently online in the chat room.

### Other improvements
At a later stage this solution would of course be deployed. I had this in mind when defining ports, hosts etc, but I didn't have time to actually deploy it. For this kind of simple, small scale application, I would use Heroku to get it up and spinning in a heartbeat.
Furthermore, you should add tests and a CI/CD pipeline, which was not prioritized. For these matters I would use Jest and Circle CI, which has some really smooth integrations with Github and Heroku.
When extending the app a bit more, it would be valuable to add some kind of type checks. This could be done by using PropTypes, but personally I prefer to secure the app a bit more by using TypeScript.


