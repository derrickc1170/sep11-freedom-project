# Entry 2
##### 2/2/26
### Content
During my last blog entry, I have my break where my teacher tell us to doing something with our tool.I start to watched some videos about AI pathfinding in games since I need to learn how I can apply this in my horror game. The videos explained how enemies can track or follow the player instead of just moving left and right.
First, I created a new game and chose a platformer style so the player could jump and move across the level.
Next, I added enemies and gave them a variable that makes them move left and right, creating danger for the player.

<img src="../image/Movement.png" alt="Enemy movement" />

Then, I set up the player so that when they touch an enemy or fall into the void, they get teleported back to the respawn point instead of staying in the void forever. This helps keep the gameplay flowing.

<img src="../image/void.png" alt="Collision with void" />

Full Code:

<img src="../image/before.png" alt="Original code" />

### Challenge

One challenge I faced was that the player passed through the void instead of teleporting back. This happened because the collision for the enemy and the void were combined, so it wouldn't work.
To fix this, We need to separate the collision events, so the player responds differently when touching an enemy versus falling into the void.
It now looks like this:

<img src="../image/star.png" alt="Fixed code" />

### Source
* [Learning Log](https://github.com/derrickc1170/sep11-freedom-project/blob/main/tool/learning-log.md)
* [Ai PathFinding](https://www.youtube.com/watch?v=0aGBYsrGwm0)
* [Pathfinding Behaviour in GDevelop 5](https://www.youtube.com/watch?v=GZDm--dIP5I)
* [Game That I make](https://gd.games/games/7927f020-2bf2-4425-9e48-bb4854fcfad1)

### EDP
Currently, I am at the testing and prototyping stage of the engineering design process. In GDevelop, I've created a small test game where the player had to get coin and respawns in the same position. The next stage in the engineering design process will be trying make a 3D game.

### Skill
#### Problem Solving

Making the player respawn in the same place each time they went out of bounds was challenging. To fix this, I tested different scenarios and watched some GDevelop tutorials.I experimented with events and conditions until the respawn system worked consistently.

#### Creativity

I used creativity to figure out how the player could interact with walls and avoid passing through them. I experimented collision events to ensure the player expereince is good.


[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
