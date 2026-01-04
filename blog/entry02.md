# Entry 2
##### 12/18/25
### Content 
After my last blog entry, I started to continued improving my game by adding several important features. I implemented a bomb spawning system which using a timer called BadItemSpawnTimer. Every 2 seconds, a bomb is spawned in at a random position in the scene which helped me better to understand how timers and random positioning work on in GDevelop. I use this video [Timers And Delay](https://www.youtube.com/watch?v=mHiEnvE9iqE) and [Adding New Enemies](https://www.youtube.com/watch?v=MAz-D-BeFtY) to help me make this. I also added a score and lives system. When the player collides with a bomb, the bomb get deleted, then score decreases by 10, and the player loses one life. Both the score and lives are being updated automatically by using variables and text objects. To make the game more interactive, I decide to added a shooting mechanic when pressing the space key will fires a bullet in the direction the player is facing. If a bullet collides with a bomb, both objects are deleted and the score increases by 10. I use this video called [Shooting Mechanic Tutorial](https://www.youtube.com/watch?v=xQFvASrtWpU) to in order to make player shoot. Finally, I add a game over condition. When the player’s lives drop below -1, the scene will switches to a Game Over screen and the Game Over object fades in. If you want more detail of how I add these feature to my game, you can just check my blog for more details.[Learning Log](https://github.com/derrickc1170/sep11-freedom-project/blob/main/tool/learning-log.md)For the winter break, I start watching lot video on gdevelop and test some thing.

### EDP (Engineering Design Process):
* I am at the testing stage of the engineering design process. In GDevelop, I started to add more thing such thing ase nemy spawning, scoring, and shooting. The next stage in the engineering design process will be to fixing the error in my code like score for some reason went negative when there is player didn't even touch anything.

### Skill:
#### Problem Solving
* One problem I encountered was getting the death screen to work correctly. At first, the screen would either appear at the start or not appear at all.To fix this, I try different conditions for the lives variable and try adjusted when the scene should change, and experimented with opacity and fade effects. I also tested the game multiple times to make sure the Game Over screen only appeared when the player’s lives reached to the negative.

#### Creativity
* I used creativity in a technical way by developing the interactions between various systems using variables and events. To adjust the difficulty, I tried out with bomb spawn timers, bullet speed values, and collision conditions. In order to balance risk and reward and ensure that the shooting mechanic was both challenging and responsive, I also adjusted the score and life variables. 


[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
