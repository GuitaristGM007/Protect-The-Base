//declare contants from matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declre variables for engine, world, objects, images, sounds, arrays, score, lives, gameStates, etc
var engine, world;
var soldier1, soldier2, soldier3;
var canvas, angle, base, heartLives;
var path1, path2, path3, path4, path5;
var path6, path7, path8, path9, path10;
var path1Image, path2Image, path3Image, path4Image, path5Image;
var path6Image, path7Image, path8Image, path9Image, path10Image;
var hole1, hole2, hole3, hole4, hole5, hole6;
var hole7, hole8, hole9, hole10, hole11, hole12;
var hole13, hole14, hole15, hole16, hole17, hole18;
var cannon1, cannon2, cannon3, cannon4, cannon5, cannon6;
var cannon7, cannon8, cannon9, cannon10, cannon11, cannon12;
var cannon13, cannon14, cannon15, cannon16, cannon17, cannon18;
var invisibleWall1, invisibleWall2, invisibleWall3, invisibleWall4, invisibleWall5;
var invisibleWall6, invisibleWall7, invisibleWall8, invisibleWall9, invisibleWall10;
var backgroundImage, baseImage;
var backgroundSound, destructionSound, firingSound, groaningSound;
var score = 0;
var totalLives = 10;
var resetButton, resetButtonImage;
var heartImage1, heartImage2;
var running1Image, running2Image;
var gameState = "play";
var soldier1_runningGroup, soldier2_runningGroup, soldier3_runningGroup;
var soldier4_runningGroup, soldier5_runningGroup, soldier6_runningGroup;
var soldier7_runningGroup, soldier8_runningGroup, soldier9_runningGroup;
var soldier10_runningGroup, soldier11_runningGroup, soldier12_runningGroup;
var soldier13_runningGroup, soldier14_runningGroup, soldier15_runningGroup;
var soldier16_runningGroup, soldier17_runningGroup, soldier18_runningGroup;
var soldier19_runningGroup, soldier20_runningGroup, soldier21_runningGroup;
var soldier22_runningGroup, soldier23_runningGroup, soldier24_runningGroup;
var soldier25_runningGroup, soldier26_runningGroup, soldier27_runningGroup;
var soldier28_runningGroup, soldier29_runningGroup, soldier30_runningGroup;
var soldier31_runningGroup, soldier32_runningGroup, soldier33_runningGroup;
var soldier34_runningGroup, soldier35_runningGroup, soldier36_runningGroup;
var soldier37_runningGroup, soldier38_runningGroup, soldier39_runningGroup;
var soldier40_runningGroup, soldier41_runningGroup, soldier42_runningGroup;
var soldier43_runningGroup, soldier44_runningGroup, soldier45_runningGroup;
var soldier46_runningGroup, soldier47_runningGroup, soldier48_runningGroup;
var soldier49_runningGroup, soldier50_runningGroup, soldier51_runningGroup;
var soldier52_runningGroup, soldier53_runningGroup, soldier54_runningGroup;
var soldier55_runningGroup, soldier56_runningGroup, soldier57_runningGroup;
var soldier58_runningGroup, soldier59runningGroup, soldier60_runningGroup;
var soldier61_runningGroup, soldier62_runningGroup, soldier63_runningGroup;
var soldier64_runningGroup, soldier65_runningGroup, soldier66_runningGroup;
var soldier67_runningGroup, soldier68_runningGroup, soldier69_runningGroup;
var soldier70_runningGroup, soldier71_runningGroup, soldier72_runningGroup;
var bB1, bB2, bB3, bB4, bB5, bB6, bB7, bB8, bB9;
var bB10, bB11, bB12, bB13, bB14, bB15, bB16, bB17, bB18;

//function to preload the image(s), gif(s)
function preload(){
//preload the image for background
backgroundImage = loadImage("./media/Grass.gif");

//preload path1Image
path1Image = loadImage("./media/Path1.png");
//preload path2Image
path2Image = loadImage("./media/Path2And3.png");
//preload path3Image
path3Image = loadImage("./media/Path2And3.png");
//preload path4Image
path4Image = loadImage("./media/Path4.png");
//preload path5Image
path5Image = loadImage("./media/Path5.png");
//preload path6Image
path6Image = loadImage("./media/Path6.png");
//preload path7Image
path7Image = loadImage("./media/Path7.png");
//preload path8Image
path8Image = loadImage("./media/Path8.png");
//preload path9Image
path9Image = loadImage("./media/Path9.png");
//preload path10Image
path10Image = loadImage("./media/Path10.png");

//preload runningImage1
running1Image = loadImage("./media/gif_running_soldiers.gif");
//preload runningImage2
running2Image = loadImage("./media/running2gif.gif");

//preload heartImage1
heartImage1 = loadImage("./media/blackHeart.png");
//preload heartImage2
heartImage2 = loadImage("./media/blackBrokenHeart.png");

//preload resetButtonImage
resetButtonImage = loadImage("./media/resetButtonImage.png");

//preload bullet1Image
bImage = loadImage("./media/Bullet.png");
//preload bullet2Image
b2Image = loadImage("./media/Bullet2.jpg");
//preload bullet3Image
b3Image = loadImage("./media/Bullet3.jpg");

//load the backgroundSound
backgroundSound = loadSound("./media/backgroundMusic.mp3");
//load the destructionSound
destructionSound = loadSound("./media/destructionSound.mp3");
//load the firingSound
firingSound = loadSound("./media/firingSound.mp3");
//load the groaningSound
groaningSound = loadSound("./media/groaningSound.mp3");
}

//function to setup the game
function setup(){
//create canvas of required size
canvas = createCanvas(windowWidth, windowHeight);

//create the engine
engine = Engine.create();
//add world into engine
world = engine.world;

//assign a value to angle
angle = -PI / 4;

//create base 
base = new Base(675, 325, 210, 175);

//create heartLives
heartLives = createSprite(400, 337.5, 75, 75);
//add 1st image to heartLives
heartLives.addImage("actual", heartImage1);
//add 2nd image to heartLives
heartLives.addImage("broken", heartImage2);
//scale heartLives
heartLives.scale = 0.2;

//create hole1
hole1 = new Hole(100, 200, 45);
//create hole2
hole2= new Hole(200, 50, 45);
//create hole3
hole3 = new Hole(165, 400, 45);
//create hole4
hole4 = new Hole(150, 575, 45);
//create hole5
hole5 = new Hole(425, 250, 45);
//create hole6
hole6 = new Hole(525, 150, 45);
//create hole7
hole7 = new Hole(400, 450, 45);
//create hole8
hole8 = new Hole(525, 450, 45);
//create hole9
hole9 = new Hole(825, 390, 45);
//creae hole10
hole10 = new Hole(950, 437.5, 45);
//create hole11
hole11 = new Hole(1075, 420, 45);
//create hole12
hole12 = new Hole(750, 200, 45);
//create hole13
hole13 = new Hole(925, 200, 45);
//create hole14
hole14 = new Hole(925, 50, 45);
//create hole15
hole15 = new Hole(1125, 200, 45);
//create hole16
hole16 = new Hole(1315, 150, 45);
//create hole17
hole17 = new Hole(1300, 300, 45);
//create hole18
hole18 = new Hole(1300, 475, 45);

//create path1
path1 = createSprite(150, 300, 300, 105);
path1.addImage("road1", path1Image);
//create path2
path2 = createSprite(300, 175, 105, height / 2);
path2.addImage("road2", path2Image);
//create path3
path3 = createSprite(300, 457, 105, height / 2);
path3.addImage("road3", path3Image);
//creare path4
path4 = createSprite(475, 50, 450, 105);
path4.addImage("road4", path4Image);
//create path5
path5 = createSprite(800, height - 85, 900, 105);
path5.addImage("road5", path5Image);
//create path6
path6 = createSprite(1200, 450, 105, 200);
path6.addImage("road6", path6Image);
//create path7
path7 = createSprite(665, 170, 105, 220);
path7.addImage("road7", path7Image);
//scale path7
path7.scale = 0.65
//create path8
path8 = createSprite(1010, 310, 550, 105);
path8.addImage("road8", path8Image);
//scale path8
path8.scale = 0.9
//create path9
path9 = createSprite(1210, 52.5, 300, 105);
path9.addImage("road9", path9Image);
//create path10
path10 = createSprite(1025, 130, 105, 260);
path10.addImage("road10", path10Image);

//create cannon1
cannon1 = new Cannon1(100, 200, 75, 40);
//create cannon2
cannon2 = new Cannon3(200, 50, 75, 40);
//create cannon3
cannon3 = new Cannon1(165, 400, 75, 40);
//create cannon4
cannon4 = new Cannon3(150, 575, 75, 40);
//create cannon5
cannon5 = new Cannon2(425, 250, 75, 40);
//create cannon6
cannon6 = new Cannon2(525, 150, 75, 40);
//create cannon7
cannon7 = new Cannon3(400, 450, 75, 40);
//create cannon8
cannon8 = new Cannon1(525, 450, 75, 40);
//create cannon9
cannon9 = new Cannon2(825, 390, 75, 40);
//create cannon10
cannon10 = new Cannon3(950, 437.5, 75, 40);
//create cannon11
cannon11 = new Cannon3(1075, 420, 75, 40);
//create cannon12
cannon12 = new Cannon2(750, 200, 75, 40);
//create cannon13
cannon13 = new Cannon1(925, 200, 75, 40)
//create cannon14
cannon14 = new Cannon3(925, 50, 75, 40);
//create cannon15
cannon15 = new Cannon1(1125, 200, 75, 40);
//create cannon16
cannon16 = new Cannon2(1315, 150, 75, 40);
//create cannon17
cannon17 = new Cannon1(1300, 300, 75, 40);
//create cannon18
cannon18 = new Cannon2(1300, 475, 75, 40);

//create resetButton
resetButton = createSprite(700, 575, 100, 50);
//add image to resetButton
resetButton.addImage("restart", resetButtonImage);
//scale the resetButton
resetButton.scale = 0.7;

//create invisibleWall1
invisibleWall1 = createSprite(350, 200, 50, 200);
//set the visibility of invisibleWall1
invisibleWall1.visible = false;
//create invisibleWall2
invisibleWall2 = createSprite(450, 0, 360, 50);
//set the visibility of invisibleWall2
invisibleWall2.visible = false;
//create invisibleWall3
invisibleWall3 = createSprite(725, 125, 60, 250);
//set the visibility of invisibleWall3
invisibleWall3.visible = false;
//create invisibleWall4
invisibleWall4 = createSprite(725, 400, 250, 60);
//set the visibility of invisibleWall4
invisibleWall4.visible = false;
//create invisibleWall5
invisibleWall5 = createSprite(450, 612.5, 360, 25)
//set the visibility of invisibleWall5
invisibleWall5.visible = false;
//create invisibleWall6
invisibleWall6 = createSprite(1250, 550, 12.5, 200);
//set the visibility of invisibleWall6
invisibleWall6.visible = false;
//create invisibleWall7
invisibleWall7 = createSprite(1212.5, 250, 75, 12.5)
//set the visibility of invisibleWall7
invisibleWall7.visible = false;
//create invisibleWall8
invisibleWall8 = createSprite(637.5, 325, 50, 75);
//set the visibility of invisibleWall8
invisibleWall8.visible = false;
//create invisibleWall9
invisibleWall9 = createSprite(975, 50, 20, 100);
//set tye visibility of invisibleWall9
invisibleWall9.visible = false;
//create invisibleWall10
invisibleWall10 = createSprite(1025, 350, 100, 20);
//set the visibility of invisibleWall10
invisibleWall10.visible = false;

//create a group for soldiers1
soldier1_runningGroup = createGroup();
//create a group for soldiers2
soldier2_runningGroup = createGroup();
//create a group for soldiers3
soldier3_runningGroup = createGroup();
//create a group for soldiers4
soldier4_runningGroup = createGroup();
//create a group for soldiers5
soldier5_runningGroup = createGroup();
//create a group for soldiers6
soldier6_runningGroup = createGroup();
//create a group for soldiers7
soldier7_runningGroup = createGroup();
//create a group for soldiers8
soldier8_runningGroup = createGroup();
//create a group for soldiers9
soldier9_runningGroup = createGroup();
//create a group for soldiers10
soldier10_runningGroup = createGroup();
//create a group for soldiers11
soldier11_runningGroup = createGroup();
//create a group for soldiers12
soldier12_runningGroup = createGroup();
//create a group for soldiers13
soldier13_runningGroup = createGroup();
//create a group for soldiers14
soldier14_runningGroup = createGroup();
//create a group for soldiers15
soldier15_runningGroup = createGroup();
//create a group for soldiers16
soldier16_runningGroup = createGroup();
//create a group for soldiers17
soldier17_runningGroup = createGroup();
//create a group for soldiers18
soldier18_runningGroup = createGroup();
//create a group for sodiers19
soldier19_runningGroup = createGroup();
//create a group for soldiers20
soldier20_runningGroup = createGroup();
//create a group for soldiers21
soldier21_runningGroup = createGroup();
//create a group for soldiers22
soldier22_runningGroup = createGroup();
//create a group for soldiers23
soldier23_runningGroup = createGroup();
//create a group for soldiers24
soldier24_runningGroup = createGroup();
//create a group for soldiers25
soldier25_runningGroup = createGroup();
//create a group for soldiers26
soldier26_runningGroup = createGroup();
//create a group for soldiers27
soldier27_runningGroup = createGroup();
//create a group for soldiers28
soldier28_runningGroup = createGroup();
//create a group for soldiers29
soldier29_runningGroup = createGroup();
//create a group for soldiers30
soldier30_runningGroup = createGroup();
//create a group for soldiers31
soldier31_runningGroup = createGroup();
//create a group for soldiers32
soldier32_runningGroup = createGroup();
//create a group for soldiers33
soldier33_runningGroup = createGroup();
//create a group for soldiers34
soldier34_runningGroup = createGroup();
//create a group for soldiers35
soldier35_runningGroup = createGroup();
//create a group for soldiers36
soldier36_runningGroup = createGroup();
//create a group for soldiers37
soldier37_runningGroup = createGroup();
//create a group for soldiers38
soldier38_runningGroup = createGroup();
//create a group for soldiers39
soldier39_runningGroup = createGroup();
//create a group for soldiers40
soldier40_runningGroup = createGroup();
//create a group for soldiers41
soldier41_runningGroup = createGroup();
//create a group for soldiers42
soldier42_runningGroup = createGroup();
//create a group for soldiers43
soldier43_runningGroup = createGroup();
//create a group for soldiers44
soldier44_runningGroup = createGroup();
//create a group for soldiers45
soldier45_runningGroup = createGroup();
//create a group for soldiers46
soldier46_runningGroup = createGroup();
//create a group for soldiers47
soldier47_runningGroup = createGroup();
//create a group for soldiers48
soldier48_runningGroup = createGroup();
//create a group for soldiers49
soldier49_runningGroup = createGroup();
//create a group for soldiers50
soldier50_runningGroup = createGroup();
//create a group for soldiers51
soldier51_runningGroup = createGroup();
//create a group for soldiers52
soldier52_runningGroup = createGroup();
//create a group for soldiers53
soldier53_runningGroup = createGroup();
//create a group for soldiers54
soldier54_runningGroup = createGroup();
//create a group for soldiers55
soldier55_runningGroup = createGroup();
//create a group for soldiers56
soldier56_runningGroup = createGroup();
//create a group for soldiers57
soldier57_runningGroup = createGroup();
//create a group for soldiers58
soldier58_runningGroup = createGroup();
//create a group for soldiers59
soldier59_runningGroup = createGroup();
//create a group for soldiers60
soldier60_runningGroup = createGroup();
//create a group for soldiers61
soldier61_runningGroup = createGroup();
//create a group for soldiers62
soldier62_runningGroup = createGroup();
//create a group for soldiers63
soldier63_runningGroup = createGroup();
//create a group for soldiers64
soldier64_runningGroup = createGroup();
//create a group for soldiers65
soldier65_runningGroup = createGroup();
//create a group for soldiers66
soldier66_runningGroup = createGroup();
//create a group for soldiers67
soldier67_runningGroup = createGroup();
//create a group for soldiers68
soldier68_runningGroup = createGroup();
//create a group for soldiers69
soldier69_runningGroup = createGroup();
//create a group for soldiers70
soldier70_runningGroup = createGroup();
//create a group for soldiers71
soldier71_runningGroup = createGroup();
//create a group for soldiers72
soldier72_runningGroup = createGroup();

//create group for bullet1
bB1 = createGroup();
//create group for bullet2
bB2 = createGroup();
//create group for bullet3
bB3 = createGroup();
//create group for bullet4
bB4 = createGroup();
//create group for bullet5
bB5 = createGroup();
//create group for bullet6
bB6 = createGroup();
//create group for bullet7
bB7 = createGroup();
//create group for bullet8
bB8 = createGroup();
//create group for bullet9
bB9 = createGroup();
//create group for bullet10
bB10 = createGroup();
//create group for bullet11
bB11 = createGroup();
//create group for bullet12
bB12 = createGroup();
//create group for bullet13
bB13 = createGroup();
//create group for bullet14
bB14 = createGroup();
//create group for bullet15
bB15 = createGroup();
//create group for bullet16
bB16 = createGroup();
//create group for bullet17
bB17 = createGroup();
//create group for bullet18
bB18 = createGroup();
}

//function to draw the objects
function draw(){
//set a suitable color of the background
background(189);
//set a suitable image of the background
image(backgroundImage, 0, 0, windowWidth, windowHeight);

//update the engine
Engine.update(engine);

//set a suitable size of the outline of the text
strokeWeight(textSize / 2);
//set a suitable color of the outline of the text
stroke("white");
//set a suitable color to fill the text
fill("black");
//set a suitable size of the text
textSize(40);
//actual text for score
text(`Score : ${score}`, 600, 450);
//actual text for lives
text(" = "+totalLives, 450, 350);

//game controls for playState
if (gameState === "play"){
//set the visibility of resetButton
resetButton.visible = false;
//condition to play the backgroundSound
if (!backgroundSound.isPlaying()){
//command to play the backgroundSound
backgroundSound.play();
//command to increase/decrease the volume of backgroundSound
backgroundSound.setVolume(0.5);
}
heartLives.changeImage("actual");

//function to display soldiers1
spawn();
//function to display soldiers2
spawn2();
//function to display soldiers3
spawn3();
//function to display soldiers4
spawn4();
//function to display soldiers5
spawn5();
//function to display soldiers6
spawn6();
//function to display soldiers7
spawn7();
//function to display soldiers8
spawn8();
//function to display soldiers9
spawn9();
//function to display soldiers10
spawn10();
//function to display soldiers11
spawn11();
//function to display soldiers12
spawn12();
//function to display soldiers13
spawn13();
//function to display soldiers14
spawn14();
//function to display soldiers15
spawn15();
//function to display soldiers16
spawn16();
//function to display soldiers17
spawn17();
//function to display soldiers18
spawn18();
//function to display soldiers19
spawn19();
//function to display soldiers20
spawn20();
//function to display soldiers21
spawn21();
//function to display soldiers22
spawn22();
//function to display soldiers23
spawn23();
//function to display soldiers24
spawn24();
//function to display soldiers25
spawn25();
//function to display soldiers26
spawn26();
//function to display soldiers27
spawn27();
//function to display soldiers28
spawn28();
//function to display soldiers29
spawn29();
//function to display soldiers30
spawn30();
//function to display soldiers31
spawn31();
//function to display soldiers32
spawn32();
//function to display soldiers33
spawn33();
//function to display soldiers34
spawn34();
//function to display soldiers35
spawn35();
//function to display soldiers36
spawn36();
//function to display soldiers37
spawn37();
//function to display soldiers38
spawn38();
//function to display soldiers39
spawn39();
//function to display soldiers40
spawn40();
//function to display soldiers41
spawn41();
//function to display soldiers42
spawn42();
//function to display soldiers43
spawn43();
//function to display soldiers44
spawn44();
//function to display soldiers45
spawn45();
//function to display soldiers46
spawn46();
//function to display soldiers47
spawn47();
//function to display soldiers48
spawn48();
//function to display soldiers49
spawn49();
//function to display soldiers50
spawn50();
//function to display soldiers51
spawn51();
//function to display soldiers52
spawn52();
//function to display soldiers53
spawn53();
//function to display soldiers54
spawn54();
//function to display soldiers55
spawn55();
//function to display soldiers56
spawn56();
//function to display soldiers57
spawn57();
//function to display soldiers58
spawn58();
//function to display soldiers59
spawn59();
//function to display soldiers60
spawn60();
//function to display soldiers61
spawn61();
//function to display soldiers62
spawn62();
//function to display soldiers63
spawn63();
//function to display soldiers64
spawn64();
//function to display soldiers65
spawn65();
//function to display soldiers66
spawn66();
//function to display soldiers67
spawn67();
//function to display soldiers68
spawn68();
//function to display soldiers69
spawn69();
//function to display soldiers70
spawn70();
//function to display soldiers71
spawn71();
//function to display soldiers72
spawn72();

//function to shootBullet1
shootBullet1();
//function to shootBullet2
shootBullet2();
//function to shootBullet3
shootBullet3();
//function to shootBullet4
shootBullet4();
//function to shootBullet5
shootBullet5();
//function to shootBullet6
shootBullet6();
//function to shootBullet7
shootBullet7();
//function to shootBullet8
shootBullet8();
//function to shootBullet9
shootBullet9();
//function to shootBullet10
shootBullet10();
//function to shootBullet11
shootBullet11();
//function to shootBullet12
shootBullet12();
//function to shootBullet13
shootBullet13();
//function to shootBullet14
shootBullet14();
//function to shootBullet15
shootBullet15();
//function to shootBullet16
shootBullet16();
//function to shootBullet17
shootBullet17();
//function to shootBullet18
shootBullet18();

if (soldier1_runningGroup.collide(invisibleWall1)){
soldier1_runningGroup.setVelocityXEach(0);
soldier1_runningGroup.setVelocityYEach(-3);
}
if (soldier1_runningGroup.collide(invisibleWall2)){
soldier1_runningGroup.setVelocityXEach(3);
soldier1_runningGroup.setVelocityYEach(0);
}
if (soldier1_runningGroup.collide(invisibleWall3)){
soldier1_runningGroup.setVelocityXEach(0);
soldier1_runningGroup.setVelocityYEach(3);
}

if (soldier2_runningGroup.collide(invisibleWall1)){
soldier2_runningGroup.setVelocityXEach(0);
soldier2_runningGroup.setVelocityYEach(-3);
}
if (soldier2_runningGroup.collide(invisibleWall2)){
soldier2_runningGroup.setVelocityXEach(3);
soldier2_runningGroup.setVelocityYEach(0);
}
if (soldier2_runningGroup.collide(invisibleWall3)){
soldier2_runningGroup.setVelocityXEach(0);
soldier2_runningGroup.setVelocityYEach(3);
}

if (soldier3_runningGroup.collide(invisibleWall1)){
soldier3_runningGroup.setVelocityXEach(0);
soldier3_runningGroup.setVelocityYEach(-3);
}
if (soldier3_runningGroup.collide(invisibleWall2)){
soldier3_runningGroup.setVelocityXEach(3);
soldier3_runningGroup.setVelocityYEach(0);
}
if (soldier3_runningGroup.collide(invisibleWall3)){
soldier3_runningGroup.setVelocityXEach(0);
soldier3_runningGroup.setVelocityYEach(3);
}

if (soldier4_runningGroup.collide(invisibleWall1)){
soldier4_runningGroup.setVelocityXEach(0);
soldier4_runningGroup.setVelocityYEach(-3);
}
if (soldier4_runningGroup.collide(invisibleWall2)){
soldier4_runningGroup.setVelocityXEach(3);
soldier4_runningGroup.setVelocityYEach(0);
}
if (soldier4_runningGroup.collide(invisibleWall3)){
soldier4_runningGroup.setVelocityXEach(0);
soldier4_runningGroup.setVelocityYEach(3);
}

if (soldier5_runningGroup.collide(invisibleWall1)){
 soldier5_runningGroup.setVelocityXEach(0);
soldier5_runningGroup.setVelocityYEach(-3);
}
if (soldier5_runningGroup.collide(invisibleWall2)){
soldier5_runningGroup.setVelocityXEach(3);
soldier5_runningGroup.setVelocityYEach(0);
}
if (soldier5_runningGroup.collide(invisibleWall3)){
soldier5_runningGroup.setVelocityXEach(0);
soldier5_runningGroup.setVelocityYEach(3);
}

if (soldier6_runningGroup.collide(invisibleWall1)){
soldier6_runningGroup.setVelocityXEach(0);
soldier6_runningGroup.setVelocityYEach(-3);
}
if (soldier6_runningGroup.collide(invisibleWall2)){
soldier6_runningGroup.setVelocityXEach(3);
soldier6_runningGroup.setVelocityYEach(0);
}
if (soldier6_runningGroup.collide(invisibleWall3)){
soldier6_runningGroup.setVelocityXEach(0);
soldier6_runningGroup.setVelocityYEach(3);
}

if (soldier7_runningGroup.collide(invisibleWall1)){
soldier7_runningGroup.setVelocityXEach(0);
soldier7_runningGroup.setVelocityYEach(-3);
}
if (soldier7_runningGroup.collide(invisibleWall2)){
soldier7_runningGroup.setVelocityXEach(3);
soldier7_runningGroup.setVelocityYEach(0);
}
if (soldier7_runningGroup.collide(invisibleWall3)){
soldier7_runningGroup.setVelocityXEach(0);
soldier7_runningGroup.setVelocityYEach(3);
}

if (soldier8_runningGroup.collide(invisibleWall1)){
soldier8_runningGroup.setVelocityXEach(0);
soldier8_runningGroup.setVelocityYEach(-3);
}
if (soldier8_runningGroup.collide(invisibleWall2)){
soldier8_runningGroup.setVelocityXEach(3);
soldier8_runningGroup.setVelocityYEach(0);
}
if (soldier8_runningGroup.collide(invisibleWall3)){
soldier8_runningGroup.setVelocityXEach(0);
soldier8_runningGroup.setVelocityYEach(3);
}

if (soldier9_runningGroup.collide(invisibleWall1)){
soldier9_runningGroup.setVelocityXEach(0);
soldier9_runningGroup.setVelocityYEach(-3);
}
if (soldier9_runningGroup.collide(invisibleWall2)){
soldier9_runningGroup.setVelocityXEach(3);
soldier9_runningGroup.setVelocityYEach(0);
}
if (soldier9_runningGroup.collide(invisibleWall3)){
soldier9_runningGroup.setVelocityXEach(0);
soldier9_runningGroup.setVelocityYEach(3);
}

if (soldier10_runningGroup.collide(invisibleWall1)){
soldier10_runningGroup.setVelocityXEach(0);
soldier10_runningGroup.setVelocityYEach(-3);
}
if (soldier10_runningGroup.collide(invisibleWall2)){
soldier10_runningGroup.setVelocityXEach(3);
soldier10_runningGroup.setVelocityYEach(0);
}
if (soldier10_runningGroup.collide(invisibleWall3)){
soldier10_runningGroup.setVelocityXEach(0);
soldier10_runningGroup.setVelocityYEach(3);
}

if (soldier11_runningGroup.collide(invisibleWall1)){
soldier11_runningGroup.setVelocityXEach(0);
soldier11_runningGroup.setVelocityYEach(-3);
}
if (soldier11_runningGroup.collide(invisibleWall2)){
soldier11_runningGroup.setVelocityXEach(3);
soldier11_runningGroup.setVelocityYEach(0);
}
if (soldier11_runningGroup.collide(invisibleWall3)){
soldier11_runningGroup.setVelocityXEach(0);
soldier11_runningGroup.setVelocityYEach(3);
}

if (soldier12_runningGroup.collide(invisibleWall1)){
soldier12_runningGroup.setVelocityXEach(0);
soldier12_runningGroup.setVelocityYEach(-3);
}
if (soldier12_runningGroup.collide(invisibleWall2)){
soldier12_runningGroup.setVelocityXEach(3);
soldier12_runningGroup.setVelocityYEach(0);
}
if (soldier12_runningGroup.collide(invisibleWall3)){
soldier12_runningGroup.setVelocityXEach(0);
soldier12_runningGroup.setVelocityYEach(3);
}

if (soldier13_runningGroup.collide(invisibleWall1)){
soldier13_runningGroup.setVelocityXEach(0);
soldier13_runningGroup.setVelocityYEach(-3);
}
if (soldier13_runningGroup.collide(invisibleWall2)){
soldier13_runningGroup.setVelocityXEach(3);
soldier13_runningGroup.setVelocityYEach(0);
}
if (soldier13_runningGroup.collide(invisibleWall3)){
soldier13_runningGroup.setVelocityXEach(0);
soldier13_runningGroup.setVelocityYEach(3);
}

if (soldier14_runningGroup.collide(invisibleWall1)){
soldier14_runningGroup.setVelocityXEach(0);
soldier14_runningGroup.setVelocityYEach(-3);
}
if (soldier14_runningGroup.collide(invisibleWall2)){
soldier14_runningGroup.setVelocityXEach(3);
soldier14_runningGroup.setVelocityYEach(0);
}
if (soldier14_runningGroup.collide(invisibleWall3)){
soldier14_runningGroup.setVelocityXEach(0);
soldier14_runningGroup.setVelocityYEach(3);
}

if (soldier15_runningGroup.collide(invisibleWall1)){
soldier15_runningGroup.setVelocityXEach(0);
soldier15_runningGroup.setVelocityYEach(-3);
}
if (soldier15_runningGroup.collide(invisibleWall2)){
soldier15_runningGroup.setVelocityXEach(3);
soldier15_runningGroup.setVelocityYEach(0);
}
if (soldier15_runningGroup.collide(invisibleWall3)){
soldier15_runningGroup.setVelocityXEach(0);
soldier15_runningGroup.setVelocityYEach(3);
}

if (soldier16_runningGroup.collide(invisibleWall1)){
soldier16_runningGroup.setVelocityXEach(0);
soldier16_runningGroup.setVelocityYEach(-3);
}
if (soldier16_runningGroup.collide(invisibleWall2)){
soldier16_runningGroup.setVelocityXEach(3);
soldier16_runningGroup.setVelocityYEach(0);
}
if (soldier16_runningGroup.collide(invisibleWall3)){
soldier16_runningGroup.setVelocityXEach(0);
soldier16_runningGroup.setVelocityYEach(3);
}

if (soldier17_runningGroup.collide(invisibleWall1)){
soldier17_runningGroup.setVelocityXEach(0);
soldier17_runningGroup.setVelocityYEach(-3);
}
if (soldier17_runningGroup.collide(invisibleWall2)){
soldier17_runningGroup.setVelocityXEach(3);
soldier17_runningGroup.setVelocityYEach(0);
}
if (soldier17_runningGroup.collide(invisibleWall3)){
soldier17_runningGroup.setVelocityXEach(0);
soldier17_runningGroup.setVelocityYEach(3);
}

if (soldier18_runningGroup.collide(invisibleWall1)){
soldier18_runningGroup.setVelocityXEach(0);
soldier18_runningGroup.setVelocityYEach(-3);
}
if (soldier18_runningGroup.collide(invisibleWall2)){
soldier18_runningGroup.setVelocityXEach(3);
soldier18_runningGroup.setVelocityYEach(0);
}
if (soldier18_runningGroup.collide(invisibleWall3)){
soldier18_runningGroup.setVelocityXEach(0);
soldier18_runningGroup.setVelocityYEach(3);
}

if (soldier19_runningGroup.collide(invisibleWall1)){
soldier19_runningGroup.setVelocityXEach(0);
soldier19_runningGroup.setVelocityYEach(-3);
}
if (soldier19_runningGroup.collide(invisibleWall2)){
soldier19_runningGroup.setVelocityXEach(3);
soldier19_runningGroup.setVelocityYEach(0);
}
if (soldier19_runningGroup.collide(invisibleWall3)){
soldier19_runningGroup.setVelocityXEach(0);
soldier19_runningGroup.setVelocityYEach(3);
}

if (soldier20_runningGroup.collide(invisibleWall1)){
soldier20_runningGroup.setVelocityXEach(0);
soldier20_runningGroup.setVelocityYEach(-3);
}
if (soldier20_runningGroup.collide(invisibleWall2)){
soldier20_runningGroup.setVelocityXEach(3);
soldier20_runningGroup.setVelocityYEach(0);
}
if (soldier20_runningGroup.collide(invisibleWall3)){
soldier20_runningGroup.setVelocityXEach(0);
soldier20_runningGroup.setVelocityYEach(3);
}

if (soldier21_runningGroup.collide(invisibleWall1)){
soldier21_runningGroup.setVelocityXEach(0);
soldier21_runningGroup.setVelocityYEach(-3);
}
if (soldier21_runningGroup.collide(invisibleWall2)){
soldier21_runningGroup.setVelocityXEach(3);
soldier21_runningGroup.setVelocityYEach(0);
}
if (soldier21_runningGroup.collide(invisibleWall3)){
soldier21_runningGroup.setVelocityXEach(0);
soldier21_runningGroup.setVelocityYEach(3);
}

if (soldier22_runningGroup.collide(invisibleWall1)){
soldier22_runningGroup.setVelocityXEach(0);
soldier22_runningGroup.setVelocityYEach(-3);
}
if (soldier22_runningGroup.collide(invisibleWall2)){
soldier22_runningGroup.setVelocityXEach(3);
soldier22_runningGroup.setVelocityYEach(0);
}
if (soldier22_runningGroup.collide(invisibleWall3)){
soldier22_runningGroup.setVelocityXEach(0);
soldier22_runningGroup.setVelocityYEach(3);
}

if (soldier23_runningGroup.collide(invisibleWall1)){
soldier23_runningGroup.setVelocityXEach(0);
soldier23_runningGroup.setVelocityYEach(-3);
}
if (soldier23_runningGroup.collide(invisibleWall2)){
soldier23_runningGroup.setVelocityXEach(3);
soldier23_runningGroup.setVelocityYEach(0);
}
if (soldier23_runningGroup.collide(invisibleWall3)){
soldier23_runningGroup.setVelocityXEach(0);
soldier23_runningGroup.setVelocityYEach(3);
}

if (soldier24_runningGroup.collide(invisibleWall1)){
soldier24_runningGroup.setVelocityXEach(0);
soldier24_runningGroup.setVelocityYEach(-3);
}
if (soldier24_runningGroup.collide(invisibleWall2)){
soldier24_runningGroup.setVelocityXEach(3);
soldier24_runningGroup.setVelocityYEach(0);
}
if (soldier24_runningGroup.collide(invisibleWall3)){
soldier24_runningGroup.setVelocityXEach(0);
soldier24_runningGroup.setVelocityYEach(3);
}

if (soldier25_runningGroup.collide(invisibleWall1)){
soldier25_runningGroup.setVelocityXEach(0);
soldier25_runningGroup.setVelocityYEach(3);
}
if (soldier25_runningGroup.collide(invisibleWall5)){
soldier25_runningGroup.setVelocityXEach(3);
soldier25_runningGroup.setVelocityYEach(0);
}
if (soldier25_runningGroup.collide(invisibleWall6)){
soldier25_runningGroup.setVelocityXEach(0);
soldier25_runningGroup.setVelocityYEach(-3);
//soldier25_runningGroup.changeImage(running2Image);
}
if (soldier25_runningGroup.collide(invisibleWall7)){
soldier25_runningGroup.setVelocityXEach(-3);
soldier25_runningGroup.setVelocityYEach(0);
}

if (soldier26_runningGroup.collide(invisibleWall1)){
soldier26_runningGroup.setVelocityXEach(0);
soldier26_runningGroup.setVelocityYEach(3);
}
if (soldier26_runningGroup.collide(invisibleWall5)){
soldier26_runningGroup.setVelocityXEach(3);
soldier26_runningGroup.setVelocityYEach(0);
}
if (soldier26_runningGroup.collide(invisibleWall6)){
soldier26_runningGroup.setVelocityXEach(0);
soldier26_runningGroup.setVelocityYEach(-3);
}
if (soldier26_runningGroup.collide(invisibleWall7)){
soldier26_runningGroup.setVelocityXEach(-3);
soldier26_runningGroup.setVelocityYEach(0);
}

if (soldier26_runningGroup.collide(invisibleWall1)){
soldier26_runningGroup.setVelocityXEach(0);
soldier26_runningGroup.setVelocityYEach(3);
}
if (soldier26_runningGroup.collide(invisibleWall5)){
soldier26_runningGroup.setVelocityXEach(3);
soldier26_runningGroup.setVelocityYEach(0);
}
if (soldier26_runningGroup.collide(invisibleWall6)){
soldier26_runningGroup.setVelocityXEach(0);
soldier26_runningGroup.setVelocityYEach(-3);
}
if (soldier26_runningGroup.collide(invisibleWall7)){
soldier26_runningGroup.setVelocityXEach(-3);
soldier26_runningGroup.setVelocityYEach(0);
}

if (soldier27_runningGroup.collide(invisibleWall1)){
soldier27_runningGroup.setVelocityXEach(0);
soldier27_runningGroup.setVelocityYEach(3);
}
if (soldier27_runningGroup.collide(invisibleWall5)){
soldier27_runningGroup.setVelocityXEach(3);
soldier27_runningGroup.setVelocityYEach(0);
}
if (soldier27_runningGroup.collide(invisibleWall6)){
soldier27_runningGroup.setVelocityXEach(0);
soldier27_runningGroup.setVelocityYEach(-3);
}
if (soldier27_runningGroup.collide(invisibleWall7)){
soldier27_runningGroup.setVelocityXEach(-3);
soldier27_runningGroup.setVelocityYEach(0);
}

if (soldier28_runningGroup.collide(invisibleWall1)){
soldier28_runningGroup.setVelocityXEach(0);
soldier28_runningGroup.setVelocityYEach(3);
}
if (soldier28_runningGroup.collide(invisibleWall5)){
soldier28_runningGroup.setVelocityXEach(3);
soldier28_runningGroup.setVelocityYEach(0);
}
if (soldier28_runningGroup.collide(invisibleWall6)){
soldier28_runningGroup.setVelocityXEach(0);
soldier28_runningGroup.setVelocityYEach(-3);
}
if (soldier28_runningGroup.collide(invisibleWall7)){
soldier28_runningGroup.setVelocityXEach(-3);
soldier28_runningGroup.setVelocityYEach(0);
}

if (soldier29_runningGroup.collide(invisibleWall1)){
soldier29_runningGroup.setVelocityXEach(0);
soldier29_runningGroup.setVelocityYEach(3);
}
if (soldier29_runningGroup.collide(invisibleWall5)){
soldier29_runningGroup.setVelocityXEach(3);
soldier29_runningGroup.setVelocityYEach(0);
}
if (soldier29_runningGroup.collide(invisibleWall6)){
soldier29_runningGroup.setVelocityXEach(0);
soldier29_runningGroup.setVelocityYEach(-3);
}
if (soldier29_runningGroup.collide(invisibleWall7)){
soldier29_runningGroup.setVelocityXEach(-3);
soldier29_runningGroup.setVelocityYEach(0);
}

if (soldier30_runningGroup.collide(invisibleWall1)){
soldier30_runningGroup.setVelocityXEach(0);
soldier30_runningGroup.setVelocityYEach(3);
}
if (soldier30_runningGroup.collide(invisibleWall5)){
soldier30_runningGroup.setVelocityXEach(3);
soldier30_runningGroup.setVelocityYEach(0);
}
if (soldier30_runningGroup.collide(invisibleWall6)){
soldier30_runningGroup.setVelocityXEach(0);
soldier30_runningGroup.setVelocityYEach(-3);
}
if (soldier30_runningGroup.collide(invisibleWall7)){
soldier30_runningGroup.setVelocityXEach(-3);
soldier30_runningGroup.setVelocityYEach(0);
}

if (soldier31_runningGroup.collide(invisibleWall1)){
soldier31_runningGroup.setVelocityXEach(0);
soldier31_runningGroup.setVelocityYEach(3);
}
if (soldier31_runningGroup.collide(invisibleWall5)){
soldier31_runningGroup.setVelocityXEach(3);
soldier31_runningGroup.setVelocityYEach(0);
}
if (soldier31_runningGroup.collide(invisibleWall6)){
soldier31_runningGroup.setVelocityXEach(0);
soldier31_runningGroup.setVelocityYEach(-3);
}
if (soldier31_runningGroup.collide(invisibleWall7)){
soldier31_runningGroup.setVelocityXEach(-3);
soldier31_runningGroup.setVelocityYEach(0);
}

if (soldier32_runningGroup.collide(invisibleWall1)){
soldier32_runningGroup.setVelocityXEach(0);
soldier32_runningGroup.setVelocityYEach(3);
}
if (soldier32_runningGroup.collide(invisibleWall5)){
soldier32_runningGroup.setVelocityXEach(3);
soldier32_runningGroup.setVelocityYEach(0);
}
if (soldier32_runningGroup.collide(invisibleWall6)){
soldier32_runningGroup.setVelocityXEach(0);
soldier32_runningGroup.setVelocityYEach(-3);
}
if (soldier32_runningGroup.collide(invisibleWall7)){
soldier32_runningGroup.setVelocityXEach(-3);
soldier32_runningGroup.setVelocityYEach(0);
}

if (soldier33_runningGroup.collide(invisibleWall1)){
soldier33_runningGroup.setVelocityXEach(0);
soldier33_runningGroup.setVelocityYEach(3);
}
if (soldier33_runningGroup.collide(invisibleWall5)){
soldier33_runningGroup.setVelocityXEach(3);
soldier33_runningGroup.setVelocityYEach(0);
}
if (soldier33_runningGroup.collide(invisibleWall6)){
soldier33_runningGroup.setVelocityXEach(0);
soldier33_runningGroup.setVelocityYEach(-3);
}
if (soldier33_runningGroup.collide(invisibleWall7)){
soldier33_runningGroup.setVelocityXEach(-3);
soldier33_runningGroup.setVelocityYEach(0);
}

if (soldier34_runningGroup.collide(invisibleWall1)){
soldier34_runningGroup.setVelocityXEach(0);
soldier34_runningGroup.setVelocityYEach(3);
}
if (soldier34_runningGroup.collide(invisibleWall5)){
soldier34_runningGroup.setVelocityXEach(3);
soldier34_runningGroup.setVelocityYEach(0);
}
if (soldier34_runningGroup.collide(invisibleWall6)){
soldier34_runningGroup.setVelocityXEach(0);
soldier34_runningGroup.setVelocityYEach(-3);
}
if (soldier34_runningGroup.collide(invisibleWall7)){
soldier34_runningGroup.setVelocityXEach(-3);
soldier34_runningGroup.setVelocityYEach(0);
}

if (soldier35_runningGroup.collide(invisibleWall1)){
soldier35_runningGroup.setVelocityXEach(0);
soldier35_runningGroup.setVelocityYEach(3);
}
if (soldier35_runningGroup.collide(invisibleWall5)){
soldier35_runningGroup.setVelocityXEach(3);
soldier35_runningGroup.setVelocityYEach(0);
}
if (soldier35_runningGroup.collide(invisibleWall6)){
soldier35_runningGroup.setVelocityXEach(0);
soldier35_runningGroup.setVelocityYEach(-3);
}
if (soldier35_runningGroup.collide(invisibleWall7)){
soldier35_runningGroup.setVelocityXEach(-3);
soldier35_runningGroup.setVelocityYEach(0);
}

if (soldier36_runningGroup.collide(invisibleWall1)){
soldier36_runningGroup.setVelocityXEach(0);
soldier34_runningGroup.setVelocityYEach(3);
}
if (soldier36_runningGroup.collide(invisibleWall5)){
soldier36_runningGroup.setVelocityXEach(3);
soldier36_runningGroup.setVelocityYEach(0);
}
if (soldier36_runningGroup.collide(invisibleWall6)){
soldier36_runningGroup.setVelocityXEach(0);
soldier36_runningGroup.setVelocityYEach(-3);
}
if (soldier36_runningGroup.collide(invisibleWall7)){
soldier36_runningGroup.setVelocityXEach(-3);
soldier36_runningGroup.setVelocityYEach(0);
}

if (soldier37_runningGroup.collide(invisibleWall1)){
soldier37_runningGroup.setVelocityXEach(0);
soldier37_runningGroup.setVelocityYEach(3);
}
if (soldier37_runningGroup.collide(invisibleWall5)){
soldier37_runningGroup.setVelocityXEach(3);
soldier37_runningGroup.setVelocityYEach(0);
}
if (soldier37_runningGroup.collide(invisibleWall6)){
soldier37_runningGroup.setVelocityXEach(0);
soldier37_runningGroup.setVelocityYEach(-3);
}
if (soldier37_runningGroup.collide(invisibleWall7)){
soldier37_runningGroup.setVelocityXEach(-3);
soldier37_runningGroup.setVelocityYEach(0);
}

if (soldier38_runningGroup.collide(invisibleWall1)){
soldier38_runningGroup.setVelocityXEach(0);
soldier38_runningGroup.setVelocityYEach(3);
}
if (soldier38_runningGroup.collide(invisibleWall5)){
soldier38_runningGroup.setVelocityXEach(3);
soldier38_runningGroup.setVelocityYEach(0);
}
if (soldier38_runningGroup.collide(invisibleWall6)){
soldier38_runningGroup.setVelocityXEach(0);
soldier38_runningGroup.setVelocityYEach(-3);
}
if (soldier38_runningGroup.collide(invisibleWall7)){
soldier38_runningGroup.setVelocityXEach(-3);
soldier38_runningGroup.setVelocityYEach(0);
}

if (soldier39_runningGroup.collide(invisibleWall1)){
soldier39_runningGroup.setVelocityXEach(0);
soldier39_runningGroup.setVelocityYEach(3);
}
if (soldier39_runningGroup.collide(invisibleWall5)){
soldier39_runningGroup.setVelocityXEach(3);
soldier39_runningGroup.setVelocityYEach(0);
}
if (soldier39_runningGroup.collide(invisibleWall6)){
soldier39_runningGroup.setVelocityXEach(0);
soldier39_runningGroup.setVelocityYEach(-3);
}
if (soldier39_runningGroup.collide(invisibleWall7)){
soldier39_runningGroup.setVelocityXEach(-3);
soldier39_runningGroup.setVelocityYEach(0);
}

if (soldier40_runningGroup.collide(invisibleWall1)){
soldier40_runningGroup.setVelocityXEach(0);
soldier40_runningGroup.setVelocityYEach(3);
}
if (soldier40_runningGroup.collide(invisibleWall5)){
soldier40_runningGroup.setVelocityXEach(3);
soldier40_runningGroup.setVelocityYEach(0);
}
if (soldier40_runningGroup.collide(invisibleWall6)){
soldier40_runningGroup.setVelocityXEach(0);
soldier40_runningGroup.setVelocityYEach(-3);
}
if (soldier40_runningGroup.collide(invisibleWall7)){
soldier40_runningGroup.setVelocityXEach(-3);
soldier40_runningGroup.setVelocityYEach(0);
}

if (soldier41_runningGroup.collide(invisibleWall1)){
soldier41_runningGroup.setVelocityXEach(0);
soldier41_runningGroup.setVelocityYEach(3);
}
if (soldier41_runningGroup.collide(invisibleWall5)){
soldier41_runningGroup.setVelocityXEach(3);
soldier41_runningGroup.setVelocityYEach(0);
}
if (soldier41_runningGroup.collide(invisibleWall6)){
soldier41_runningGroup.setVelocityXEach(0);
soldier41_runningGroup.setVelocityYEach(-3);
}
if (soldier41_runningGroup.collide(invisibleWall7)){
soldier41_runningGroup.setVelocityXEach(-3);
soldier41_runningGroup.setVelocityYEach(0);
}

if (soldier42_runningGroup.collide(invisibleWall1)){
soldier42_runningGroup.setVelocityXEach(0);
soldier42_runningGroup.setVelocityYEach(3);
}
if (soldier42_runningGroup.collide(invisibleWall5)){
soldier42_runningGroup.setVelocityXEach(3);
soldier42_runningGroup.setVelocityYEach(0);
}
if (soldier42_runningGroup.collide(invisibleWall6)){
soldier42_runningGroup.setVelocityXEach(0);
soldier42_runningGroup.setVelocityYEach(-3);
}
if (soldier42_runningGroup.collide(invisibleWall7)){
soldier42_runningGroup.setVelocityXEach(-3);
soldier42_runningGroup.setVelocityYEach(0);
}

if (soldier43_runningGroup.collide(invisibleWall1)){
soldier43_runningGroup.setVelocityXEach(0);
soldier43_runningGroup.setVelocityYEach(3);
}
if (soldier43_runningGroup.collide(invisibleWall5)){
soldier43_runningGroup.setVelocityXEach(3);
soldier43_runningGroup.setVelocityYEach(0);
}
if (soldier43_runningGroup.collide(invisibleWall6)){
soldier43_runningGroup.setVelocityXEach(0);
soldier43_runningGroup.setVelocityYEach(-3);
}
if (soldier43_runningGroup.collide(invisibleWall7)){
soldier43_runningGroup.setVelocityXEach(-3);
soldier43_runningGroup.setVelocityYEach(0);
}

if (soldier44_runningGroup.collide(invisibleWall1)){
soldier44_runningGroup.setVelocityXEach(0);
soldier44_runningGroup.setVelocityYEach(3);
}
if (soldier44_runningGroup.collide(invisibleWall5)){
soldier44_runningGroup.setVelocityXEach(3);
soldier44_runningGroup.setVelocityYEach(0);
}
if (soldier44_runningGroup.collide(invisibleWall6)){
soldier44_runningGroup.setVelocityXEach(0);
soldier44_runningGroup.setVelocityYEach(-3);
}
if (soldier44_runningGroup.collide(invisibleWall7)){
soldier44_runningGroup.setVelocityXEach(-3);
soldier44_runningGroup.setVelocityYEach(0);
}

if (soldier45_runningGroup.collide(invisibleWall1)){
soldier45_runningGroup.setVelocityXEach(0);
soldier45_runningGroup.setVelocityYEach(3);
}
if (soldier45_runningGroup.collide(invisibleWall5)){
soldier45_runningGroup.setVelocityXEach(3);
soldier45_runningGroup.setVelocityYEach(0);
}
if (soldier45_runningGroup.collide(invisibleWall6)){
soldier45_runningGroup.setVelocityXEach(0);
soldier45_runningGroup.setVelocityYEach(-3);
}
if (soldier45_runningGroup.collide(invisibleWall7)){
soldier45_runningGroup.setVelocityXEach(-3);
soldier45_runningGroup.setVelocityYEach(0);
}

if (soldier46_runningGroup.collide(invisibleWall1)){
soldier46_runningGroup.setVelocityXEach(0);
soldier46_runningGroup.setVelocityYEach(3);
}
if (soldier46_runningGroup.collide(invisibleWall5)){
soldier46_runningGroup.setVelocityXEach(3);
soldier46_runningGroup.setVelocityYEach(0);
}
if (soldier46_runningGroup.collide(invisibleWall6)){
soldier46_runningGroup.setVelocityXEach(0);
soldier46_runningGroup.setVelocityYEach(-3);
}
if (soldier46_runningGroup.collide(invisibleWall7)){
soldier46_runningGroup.setVelocityXEach(-3);
soldier46_runningGroup.setVelocityYEach(0);
}

if (soldier47_runningGroup.collide(invisibleWall1)){
soldier47_runningGroup.setVelocityXEach(0);
soldier47_runningGroup.setVelocityYEach(3);
}
if (soldier47_runningGroup.collide(invisibleWall5)){
soldier47_runningGroup.setVelocityXEach(3);
soldier47_runningGroup.setVelocityYEach(0);
}
if (soldier47_runningGroup.collide(invisibleWall6)){
soldier47_runningGroup.setVelocityXEach(0);
soldier47_runningGroup.setVelocityYEach(-3);
}
if (soldier47_runningGroup.collide(invisibleWall7)){
soldier47_runningGroup.setVelocityXEach(-3);
soldier47_runningGroup.setVelocityYEach(0);
}

if (soldier48_runningGroup.collide(invisibleWall1)){
soldier48_runningGroup.setVelocityXEach(0);
soldier48_runningGroup.setVelocityYEach(3);
}
if (soldier48_runningGroup.collide(invisibleWall5)){
soldier48_runningGroup.setVelocityXEach(3);
soldier48_runningGroup.setVelocityYEach(0);
}
if (soldier48_runningGroup.collide(invisibleWall6)){
soldier48_runningGroup.setVelocityXEach(0);
soldier48_runningGroup.setVelocityYEach(-3);
}
if (soldier48_runningGroup.collide(invisibleWall7)){
soldier48_runningGroup.setVelocityXEach(-3);
soldier48_runningGroup.setVelocityYEach(0);
}
if (soldier49_runningGroup.collide(invisibleWall9)){
soldier49_runningGroup.setVelocityXEach(0);
soldier49_runningGroup.setVelocityYEach(3);
}
if (soldier49_runningGroup.collide(invisibleWall10)){
soldier49_runningGroup.setVelocityXEach(-3);
soldier49_runningGroup.setVelocityYEach(0);
}
if (soldier50_runningGroup.collide(invisibleWall9)){
soldier50_runningGroup.setVelocityXEach(0);
soldier50_runningGroup.setVelocityYEach(3);
}
if (soldier50_runningGroup.collide(invisibleWall10)){
soldier50_runningGroup.setVelocityXEach(-3);
soldier50_runningGroup.setVelocityYEach(0);
}
if (soldier51_runningGroup.collide(invisibleWall9)){
soldier51_runningGroup.setVelocityXEach(0);
soldier51_runningGroup.setVelocityYEach(3);
}
if (soldier51_runningGroup.collide(invisibleWall10)){
soldier51_runningGroup.setVelocityXEach(-3);
soldier51_runningGroup.setVelocityYEach(0);
}
if (soldier52_runningGroup.collide(invisibleWall9)){
soldier52_runningGroup.setVelocityXEach(0);
soldier52_runningGroup.setVelocityYEach(3);
}
if (soldier52_runningGroup.collide(invisibleWall10)){
soldier52_runningGroup.setVelocityXEach(-3);
soldier52_runningGroup.setVelocityYEach(0);
}
if (soldier53_runningGroup.collide(invisibleWall9)){
soldier53_runningGroup.setVelocityXEach(0);
soldier53_runningGroup.setVelocityYEach(3);
}
if (soldier53_runningGroup.collide(invisibleWall10)){
soldier53_runningGroup.setVelocityXEach(-3);
soldier53_runningGroup.setVelocityYEach(0);
}
if (soldier54_runningGroup.collide(invisibleWall9)){
soldier54_runningGroup.setVelocityXEach(0);
soldier54_runningGroup.setVelocityYEach(3);
}
if (soldier54_runningGroup.collide(invisibleWall10)){
soldier54_runningGroup.setVelocityXEach(-3);
soldier54_runningGroup.setVelocityYEach(0);
}
if (soldier55_runningGroup.collide(invisibleWall9)){
soldier55_runningGroup.setVelocityXEach(0);
soldier55_runningGroup.setVelocityYEach(3);
}
if (soldier55_runningGroup.collide(invisibleWall10)){
soldier55_runningGroup.setVelocityXEach(-3);
soldier55_runningGroup.setVelocityYEach(0);
}
if (soldier56_runningGroup.collide(invisibleWall9)){
soldier56_runningGroup.setVelocityXEach(0);
soldier56_runningGroup.setVelocityYEach(3);
}
if (soldier56_runningGroup.collide(invisibleWall10)){
soldier56_runningGroup.setVelocityXEach(-3);
soldier56_runningGroup.setVelocityYEach(0);
}
if (soldier57_runningGroup.collide(invisibleWall9)){
soldier57_runningGroup.setVelocityXEach(0);
soldier57_runningGroup.setVelocityYEach(3);
}
if (soldier57_runningGroup.collide(invisibleWall10)){
soldier57_runningGroup.setVelocityXEach(-3);
soldier57_runningGroup.setVelocityYEach(0);
}
if (soldier58_runningGroup.collide(invisibleWall9)){
soldier58_runningGroup.setVelocityXEach(0);
soldier58_runningGroup.setVelocityYEach(3);
}
if (soldier58_runningGroup.collide(invisibleWall10)){
soldier58_runningGroup.setVelocityXEach(-3);
soldier58_runningGroup.setVelocityYEach(0);
}
if (soldier59_runningGroup.collide(invisibleWall9)){
soldier59_runningGroup.setVelocityXEach(0);
soldier59_runningGroup.setVelocityYEach(3);
}
if (soldier59_runningGroup.collide(invisibleWall10)){
soldier59_runningGroup.setVelocityXEach(-3);
soldier59_runningGroup.setVelocityYEach(0);
}
if (soldier60_runningGroup.collide(invisibleWall9)){
soldier60_runningGroup.setVelocityXEach(0);
soldier60_runningGroup.setVelocityYEach(3);
}
if (soldier60_runningGroup.collide(invisibleWall10)){
soldier60_runningGroup.setVelocityXEach(-3);
soldier60_runningGroup.setVelocityYEach(0);
}
if (soldier61_runningGroup.collide(invisibleWall9)){
soldier61_runningGroup.setVelocityXEach(0);
soldier61_runningGroup.setVelocityYEach(3);
}
if (soldier61_runningGroup.collide(invisibleWall10)){
soldier61_runningGroup.setVelocityXEach(-3);
soldier61_runningGroup.setVelocityYEach(0);
}
if (soldier62_runningGroup.collide(invisibleWall9)){
soldier62_runningGroup.setVelocityXEach(0);
soldier62_runningGroup.setVelocityYEach(3);
}
if (soldier62_runningGroup.collide(invisibleWall10)){
soldier62_runningGroup.setVelocityXEach(-3);
soldier62_runningGroup.setVelocityYEach(0);
}
if (soldier63_runningGroup.collide(invisibleWall9)){
soldier63_runningGroup.setVelocityXEach(0);
soldier63_runningGroup.setVelocityYEach(3);
}
if (soldier63_runningGroup.collide(invisibleWall10)){
soldier63_runningGroup.setVelocityXEach(-3);
soldier63_runningGroup.setVelocityYEach(0);
}
if (soldier64_runningGroup.collide(invisibleWall9)){
soldier64_runningGroup.setVelocityXEach(0);
soldier64_runningGroup.setVelocityYEach(3);
}
if (soldier64_runningGroup.collide(invisibleWall10)){
soldier64_runningGroup.setVelocityXEach(-3);
soldier64_runningGroup.setVelocityYEach(0);
}
if (soldier65_runningGroup.collide(invisibleWall9)){
soldier65_runningGroup.setVelocityXEach(0);
soldier65_runningGroup.setVelocityYEach(3);
}
if (soldier65_runningGroup.collide(invisibleWall10)){
soldier65_runningGroup.setVelocityXEach(-3);
soldier65_runningGroup.setVelocityYEach(0);
}
if (soldier66_runningGroup.collide(invisibleWall9)){
soldier66_runningGroup.setVelocityXEach(0);
soldier66_runningGroup.setVelocityYEach(3);
}
if (soldier66_runningGroup.collide(invisibleWall10)){
soldier66_runningGroup.setVelocityXEach(-3);
soldier66_runningGroup.setVelocityYEach(0);
}
if (soldier67_runningGroup.collide(invisibleWall9)){
soldier67_runningGroup.setVelocityXEach(0);
soldier67_runningGroup.setVelocityYEach(3);
}
if (soldier67_runningGroup.collide(invisibleWall10)){
soldier67_runningGroup.setVelocityXEach(-3);
soldier67_runningGroup.setVelocityYEach(0);
}
if (soldier68_runningGroup.collide(invisibleWall9)){
soldier68_runningGroup.setVelocityXEach(0);
soldier68_runningGroup.setVelocityYEach(3);
}
if (soldier68_runningGroup.collide(invisibleWall10)){
soldier68_runningGroup.setVelocityXEach(-3);
soldier68_runningGroup.setVelocityYEach(0);
}
if (soldier69_runningGroup.collide(invisibleWall9)){
soldier69_runningGroup.setVelocityXEach(0);
soldier69_runningGroup.setVelocityYEach(3);
}
if (soldier69_runningGroup.collide(invisibleWall10)){
soldier69_runningGroup.setVelocityXEach(-3);
soldier69_runningGroup.setVelocityYEach(0);
}
if (soldier70_runningGroup.collide(invisibleWall9)){
soldier70_runningGroup.setVelocityXEach(0);
soldier70_runningGroup.setVelocityYEach(3);
}
if (soldier70_runningGroup.collide(invisibleWall10)){
soldier70_runningGroup.setVelocityXEach(-3);
soldier70_runningGroup.setVelocityYEach(0);
}
if (soldier71_runningGroup.collide(invisibleWall9)){
soldier71_runningGroup.setVelocityXEach(0);
soldier71_runningGroup.setVelocityYEach(3);
}
if (soldier71_runningGroup.collide(invisibleWall10)){
soldier71_runningGroup.setVelocityXEach(-3);
soldier71_runningGroup.setVelocityYEach(0);
}
if (soldier72_runningGroup.collide(invisibleWall9)){
soldier72_runningGroup.setVelocityXEach(0);
soldier72_runningGroup.setVelocityYEach(3);
}
if (soldier72_runningGroup.collide(invisibleWall10)){
soldier72_runningGroup.setVelocityXEach(-3);
soldier72_runningGroup.setVelocityYEach(0);
}

if (soldier1_runningGroup.collide(invisibleWall4)){
soldier1_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier2_runningGroup.collide(invisibleWall4)){
soldier2_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier3_runningGroup.collide(invisibleWall4)){
soldier3_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier4_runningGroup.collide(invisibleWall4)){
soldier4_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier5_runningGroup.collide(invisibleWall4)){
soldier5_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier6_runningGroup.collide(invisibleWall4)){
soldier6_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier7_runningGroup.collide(invisibleWall4)){
soldier7_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier8_runningGroup.collide(invisibleWall4)){
soldier8_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier9_runningGroup.collide(invisibleWall4)){
soldier9_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier10_runningGroup.collide(invisibleWall4)){
soldier10_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier11_runningGroup.collide(invisibleWall4)){
soldier11_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier12_runningGroup.collide(invisibleWall4)){
soldier12_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier13_runningGroup.collide(invisibleWall4)){
soldier13_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier14_runningGroup.collide(invisibleWall4)){
soldier14_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier15_runningGroup.collide(invisibleWall4)){
soldier15_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier16_runningGroup.collide(invisibleWall4)){
soldier16_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier17_runningGroup.collide(invisibleWall4)){
soldier17_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier18_runningGroup.collide(invisibleWall4)){
soldier18_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier19_runningGroup.collide(invisibleWall4)){
soldier19_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier20_runningGroup.collide(invisibleWall4)){
soldier20_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier21_runningGroup.collide(invisibleWall4)){
soldier21_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier22_runningGroup.collide(invisibleWall4)){
soldier22_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier23_runningGroup.collide(invisibleWall4)){
soldier23_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier24_runningGroup.collide(invisibleWall4)){
soldier24_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier25_runningGroup.collide(invisibleWall8)){
soldier25_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier26_runningGroup.collide(invisibleWall8)){
soldier26_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier27_runningGroup.collide(invisibleWall8)){
soldier27_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier28_runningGroup.collide(invisibleWall8)){
soldier28_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier29_runningGroup.collide(invisibleWall8)){
soldier29_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier30_runningGroup.collide(invisibleWall8)){
soldier30_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier31_runningGroup.collide(invisibleWall8)){
soldier31_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier32_runningGroup.collide(invisibleWall8)){
soldier32_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier33_runningGroup.collide(invisibleWall8)){
soldier30_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier34_runningGroup.collide(invisibleWall8)){
soldier34_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier35_runningGroup.collide(invisibleWall8)){
soldier35_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier36_runningGroup.collide(invisibleWall8)){
soldier36_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier37_runningGroup.collide(invisibleWall8)){
soldier30_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier38_runningGroup.collide(invisibleWall8)){
soldier38_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier39_runningGroup.collide(invisibleWall8)){
soldier39_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier40_runningGroup.collide(invisibleWall8)){
soldier40_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier41_runningGroup.collide(invisibleWall8)){
soldier41_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier42_runningGroup.collide(invisibleWall8)){
soldier42_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier43_runningGroup.collide(invisibleWall8)){
soldier43_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier44_runningGroup.collide(invisibleWall8)){
soldier44_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier45_runningGroup.collide(invisibleWall8)){
soldier45_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier46_runningGroup.collide(invisibleWall8)){
soldier46_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier47_runningGroup.collide(invisibleWall8)){
soldier47_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier48_runningGroup.collide(invisibleWall8)){
soldier48_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier49_runningGroup.collide(invisibleWall8)){
soldier49_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier50_runningGroup.collide(invisibleWall8)){
soldier50_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier51_runningGroup.collide(invisibleWall8)){
soldier51_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier52_runningGroup.collide(invisibleWall8)){
soldier52_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier53_runningGroup.collide(invisibleWall8)){
soldier53_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier54_runningGroup.collide(invisibleWall8)){
soldier54_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier55_runningGroup.collide(invisibleWall8)){
soldier55_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier56_runningGroup.collide(invisibleWall8)){
soldier56_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier57_runningGroup.collide(invisibleWall8)){
soldier57_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier58_runningGroup.collide(invisibleWall8)){
soldier58_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier59_runningGroup.collide(invisibleWall8)){
soldier59_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier60_runningGroup.collide(invisibleWall8)){
soldier60_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier61_runningGroup.collide(invisibleWall8)){
soldier61_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier62_runningGroup.collide(invisibleWall8)){
soldier62_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier63_runningGroup.collide(invisibleWall8)){
soldier63_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier64_runningGroup.collide(invisibleWall8)){
soldier64_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier65_runningGroup.collide(invisibleWall8)){
soldier65_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier66_runningGroup.collide(invisibleWall8)){
soldier66_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier67_runningGroup.collide(invisibleWall8)){
soldier67_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier68_runningGroup.collide(invisibleWall8)){
soldier68_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier69_runningGroup.collide(invisibleWall8)){
soldier69_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier70_runningGroup.collide(invisibleWall8)){
soldier70_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier71_runningGroup.collide(invisibleWall8)){
soldier71_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (soldier72_runningGroup.collide(invisibleWall8)){
soldier72_runningGroup.destroyEach();
totalLives = totalLives - 1;
}
if (bB1.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB1.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB2.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}   
if (bB3.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB3.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB4.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
 }
if (bB5.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB5.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}    
if (bB6.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB6.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB7.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}  
if (bB8.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2
}
if (bB8.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB8.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2
}
if (bB9.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB9.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach()
score = score + 2;
}
if (bB10.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}              
if (bB10.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB10.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB11.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;score = score + 2;
}
if (bB12.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
 if (bB12.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB12.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB13.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB14.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB15.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB16.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier23_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier36_runningGroup)){
soldier36_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB17.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier1_runningGroup)){
soldier1_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier2_runningGroup)){
soldier2_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier3_runningGroup)){
soldier3_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier4_runningGroup)){
soldier4_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier5_runningGroup)){
soldier5_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier6_runningGroup)){
soldier6_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier7_runningGroup)){
soldier7_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier8_runningGroup)){
soldier8_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier9_runningGroup)){
soldier9_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier10_runningGroup)){
soldier10_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier11_runningGroup)){
soldier11_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier12_runningGroup)){
soldier12_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier13_runningGroup)){
soldier13_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier14_runningGroup)){
soldier14_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier15_runningGroup)){
soldier15_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier16_runningGroup)){
soldier16_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier17_runningGroup)){
soldier17_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier18_runningGroup)){
soldier18_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier19_runningGroup)){
soldier19_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier20_runningGroup)){
soldier20_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier21_runningGroup)){
soldier21_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier22_runningGroup)){
soldier22_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier23_runningGroup)){
soldier23_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier24_runningGroup)){
soldier24_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier25_runningGroup)){
soldier25_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier26_runningGroup)){
soldier26_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier27_runningGroup)){
soldier27_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier28_runningGroup)){
soldier28_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier29_runningGroup)){
soldier29_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier30_runningGroup)){
soldier30_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier31_runningGroup)){
soldier31_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier32_runningGroup)){
soldier32_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier33_runningGroup)){
soldier33_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier34_runningGroup)){
soldier34_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier35_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier36_runningGroup)){
soldier35_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier37_runningGroup)){
soldier37_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier38_runningGroup)){
soldier38_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier39_runningGroup)){
soldier39_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier40_runningGroup)){
soldier40_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier41_runningGroup)){
soldier41_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier42_runningGroup)){
soldier42_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier43_runningGroup)){
soldier43_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier44_runningGroup)){
soldier44_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier45_runningGroup)){
soldier45_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier46_runningGroup)){
soldier46_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier47_runningGroup)){
soldier47_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier48_runningGroup)){
soldier48_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier49_runningGroup)){
soldier49_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier50_runningGroup)){
soldier50_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier51_runningGroup)){
soldier51_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier52_runningGroup)){
soldier52_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier53_runningGroup)){
soldier53_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier54_runningGroup)){
soldier54_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier55_runningGroup)){
soldier55_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier56_runningGroup)){
soldier56_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier57_runningGroup)){
soldier57_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier58_runningGroup)){
soldier58_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier59_runningGroup)){
soldier59_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier60_runningGroup)){
soldier60_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier61_runningGroup)){
soldier61_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier62_runningGroup)){
soldier62_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier63_runningGroup)){
soldier63_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier64_runningGroup)){
soldier64_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier65_runningGroup)){
soldier65_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier66_runningGroup)){
soldier66_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier67_runningGroup)){
soldier67_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier68_runningGroup)){
soldier68_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier69_runningGroup)){
soldier69_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier70_runningGroup)){
soldier70_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier71_runningGroup)){
soldier71_runningGroup.destroyEach();
score = score + 2;
}
if (bB18.isTouching(soldier72_runningGroup)){
soldier72_runningGroup.destroyEach();
score = score + 2;
}
}

//condition to make the gameState end
if (totalLives === 0){
gameState = "end";
heartLives.changeImage("broken");
}

if (gameState === "end"){
//set the visibility of resetButton
resetButton.visible = true;
//set the velocityX and velocityY of each of the soldiersGroup
soldier1_runningGroup.setVelocityXEach(0);
soldier1_runningGroup.setVelocityYEach(0);
soldier2_runningGroup.setVelocityXEach(0);
soldier2_runningGroup.setVelocityYEach(0);
soldier3_runningGroup.setVelocityXEach(0);
soldier3_runningGroup.setVelocityYEach(0);
soldier4_runningGroup.setVelocityXEach(0);
soldier4_runningGroup.setVelocityYEach(0);
soldier5_runningGroup.setVelocityXEach(0);
soldier5_runningGroup.setVelocityYEach(0);
soldier6_runningGroup.setVelocityXEach(0);
soldier6_runningGroup.setVelocityYEach(0);
soldier7_runningGroup.setVelocityXEach(0);
soldier7_runningGroup.setVelocityYEach(0);
soldier8_runningGroup.setVelocityXEach(0);
soldier8_runningGroup.setVelocityYEach(0);
soldier9_runningGroup.setVelocityXEach(0);
soldier9_runningGroup.setVelocityYEach(0);
soldier10_runningGroup.setVelocityXEach(0);
soldier10_runningGroup.setVelocityYEach(0);
soldier11_runningGroup.setVelocityXEach(0);
soldier11_runningGroup.setVelocityYEach(0);
soldier12_runningGroup.setVelocityXEach(0);
soldier12_runningGroup.setVelocityYEach(0);
soldier13_runningGroup.setVelocityXEach(0);
soldier13_runningGroup.setVelocityYEach(0);
soldier14_runningGroup.setVelocityXEach(0);
soldier14_runningGroup.setVelocityYEach(0);
soldier15_runningGroup.setVelocityXEach(0);
soldier15_runningGroup.setVelocityYEach(0);
soldier16_runningGroup.setVelocityXEach(0);
soldier16_runningGroup.setVelocityYEach(0);
soldier17_runningGroup.setVelocityXEach(0);
soldier17_runningGroup.setVelocityYEach(0);
soldier18_runningGroup.setVelocityXEach(0);
soldier18_runningGroup.setVelocityYEach(0);
soldier19_runningGroup.setVelocityXEach(0);
soldier19_runningGroup.setVelocityYEach(0);
soldier20_runningGroup.setVelocityXEach(0);
soldier20_runningGroup.setVelocityYEach(0);
soldier21_runningGroup.setVelocityXEach(0);
soldier21_runningGroup.setVelocityYEach(0);
soldier22_runningGroup.setVelocityXEach(0);
soldier22_runningGroup.setVelocityYEach(0);
soldier23_runningGroup.setVelocityXEach(0);
soldier23_runningGroup.setVelocityYEach(0);
soldier24_runningGroup.setVelocityXEach(0);
soldier24_runningGroup.setVelocityYEach(0);
soldier25_runningGroup.setVelocityXEach(0);
soldier25_runningGroup.setVelocityYEach(0);
soldier26_runningGroup.setVelocityXEach(0);
soldier26_runningGroup.setVelocityYEach(0);
soldier27_runningGroup.setVelocityXEach(0);
soldier27_runningGroup.setVelocityYEach(0);
soldier28_runningGroup.setVelocityXEach(0);
soldier28_runningGroup.setVelocityYEach(0);
soldier29_runningGroup.setVelocityXEach(0);
soldier29_runningGroup.setVelocityYEach(0);
soldier30_runningGroup.setVelocityXEach(0);
soldier30_runningGroup.setVelocityYEach(0);
soldier31_runningGroup.setVelocityXEach(0);
soldier31_runningGroup.setVelocityYEach(0);
soldier32_runningGroup.setVelocityXEach(0);
soldier32_runningGroup.setVelocityYEach(0);
soldier33_runningGroup.setVelocityXEach(0);
soldier33_runningGroup.setVelocityYEach(0);
soldier34_runningGroup.setVelocityXEach(0);
soldier34_runningGroup.setVelocityYEach(0);
soldier35_runningGroup.setVelocityXEach(0);
soldier35_runningGroup.setVelocityYEach(0);
soldier36_runningGroup.setVelocityXEach(0);
soldier36_runningGroup.setVelocityYEach(0);
soldier37_runningGroup.setVelocityXEach(0);
soldier37_runningGroup.setVelocityYEach(0);
soldier38_runningGroup.setVelocityXEach(0);
soldier38_runningGroup.setVelocityYEach(0);
soldier39_runningGroup.setVelocityXEach(0);
soldier39_runningGroup.setVelocityYEach(0);
soldier40_runningGroup.setVelocityXEach(0);
soldier40_runningGroup.setVelocityYEach(0);
soldier41_runningGroup.setVelocityXEach(0);
soldier41_runningGroup.setVelocityYEach(0);
soldier42_runningGroup.setVelocityXEach(0);
soldier42_runningGroup.setVelocityYEach(0);
soldier43_runningGroup.setVelocityXEach(0);
soldier43_runningGroup.setVelocityYEach(0);
soldier44_runningGroup.setVelocityXEach(0);
soldier44_runningGroup.setVelocityYEach(0);
soldier45_runningGroup.setVelocityXEach(0);
soldier45_runningGroup.setVelocityYEach(0);
soldier46_runningGroup.setVelocityXEach(0);
soldier46_runningGroup.setVelocityYEach(0);
soldier47_runningGroup.setVelocityXEach(0);
soldier47_runningGroup.setVelocityYEach(0);
soldier48_runningGroup.setVelocityXEach(0);
soldier48_runningGroup.setVelocityYEach(0);
soldier49_runningGroup.setVelocityXEach(0);
soldier49_runningGroup.setVelocityYEach(0);
soldier50_runningGroup.setVelocityXEach(0);
soldier50_runningGroup.setVelocityYEach(0);
soldier51_runningGroup.setVelocityXEach(0);
soldier51_runningGroup.setVelocityYEach(0);
soldier52_runningGroup.setVelocityXEach(0);
soldier52_runningGroup.setVelocityYEach(0);
soldier53_runningGroup.setVelocityXEach(0);
soldier53_runningGroup.setVelocityYEach(0);
soldier54_runningGroup.setVelocityXEach(0);
soldier54_runningGroup.setVelocityYEach(0);
soldier55_runningGroup.setVelocityXEach(0);
soldier55_runningGroup.setVelocityYEach(0);
soldier56_runningGroup.setVelocityXEach(0);
soldier56_runningGroup.setVelocityYEach(0);
soldier57_runningGroup.setVelocityXEach(0);
soldier57_runningGroup.setVelocityYEach(0);
soldier58_runningGroup.setVelocityXEach(0);
soldier58_runningGroup.setVelocityYEach(0);
soldier59_runningGroup.setVelocityXEach(0);
soldier59_runningGroup.setVelocityYEach(0);
soldier60_runningGroup.setVelocityXEach(0);
soldier60_runningGroup.setVelocityYEach(0);
soldier61_runningGroup.setVelocityXEach(0);
soldier61_runningGroup.setVelocityYEach(0);
soldier62_runningGroup.setVelocityXEach(0);
soldier62_runningGroup.setVelocityYEach(0);
soldier63_runningGroup.setVelocityXEach(0);
soldier63_runningGroup.setVelocityYEach(0);
soldier64_runningGroup.setVelocityXEach(0);
soldier64_runningGroup.setVelocityYEach(0);
soldier65_runningGroup.setVelocityXEach(0);
soldier65_runningGroup.setVelocityYEach(0);
soldier66_runningGroup.setVelocityXEach(0);
soldier66_runningGroup.setVelocityYEach(0);
soldier67_runningGroup.setVelocityXEach(0);
soldier67_runningGroup.setVelocityYEach(0);
soldier68_runningGroup.setVelocityXEach(0);
soldier68_runningGroup.setVelocityYEach(0);
soldier69_runningGroup.setVelocityXEach(0);
soldier69_runningGroup.setVelocityYEach(0);
soldier70_runningGroup.setVelocityXEach(0);
soldier70_runningGroup.setVelocityYEach(0);
soldier71_runningGroup.setVelocityXEach(0);
soldier71_runningGroup.setVelocityYEach(0);
soldier72_runningGroup.setVelocityXEach(0);
soldier72_runningGroup.setVelocityYEach(0);
//destroy all the objects in all the soldiersGroup
soldier1_runningGroup.destroyEach();
soldier2_runningGroup.destroyEach();
soldier3_runningGroup.destroyEach();
soldier4_runningGroup.destroyEach();
soldier5_runningGroup.destroyEach();
soldier6_runningGroup.destroyEach();
soldier7_runningGroup.destroyEach();
soldier8_runningGroup.destroyEach();
soldier9_runningGroup.destroyEach();
soldier10_runningGroup.destroyEach();
soldier11_runningGroup.destroyEach();
soldier12_runningGroup.destroyEach();
soldier13_runningGroup.destroyEach();
soldier14_runningGroup.destroyEach();
soldier15_runningGroup.destroyEach();
soldier16_runningGroup.destroyEach();
soldier17_runningGroup.destroyEach();
soldier18_runningGroup.destroyEach();
soldier19_runningGroup.destroyEach();
soldier20_runningGroup.destroyEach();
soldier21_runningGroup.destroyEach();
soldier22_runningGroup.destroyEach();
soldier23_runningGroup.destroyEach();
soldier24_runningGroup.destroyEach();
soldier25_runningGroup.destroyEach();
soldier26_runningGroup.destroyEach();
soldier27_runningGroup.destroyEach();
soldier28_runningGroup.destroyEach();
soldier29_runningGroup.destroyEach();
soldier30_runningGroup.destroyEach();
soldier31_runningGroup.destroyEach();
soldier32_runningGroup.destroyEach();
soldier33_runningGroup.destroyEach();
soldier34_runningGroup.destroyEach();
soldier35_runningGroup.destroyEach();
soldier36_runningGroup.destroyEach();
soldier37_runningGroup.destroyEach();
soldier38_runningGroup.destroyEach();
soldier39_runningGroup.destroyEach();
soldier40_runningGroup.destroyEach();
soldier41_runningGroup.destroyEach();
soldier42_runningGroup.destroyEach();
soldier43_runningGroup.destroyEach();
soldier44_runningGroup.destroyEach();
soldier45_runningGroup.destroyEach();
soldier46_runningGroup.destroyEach();
soldier47_runningGroup.destroyEach();
soldier48_runningGroup.destroyEach();
soldier49_runningGroup.destroyEach();
soldier50_runningGroup.destroyEach();
soldier51_runningGroup.destroyEach();
soldier52_runningGroup.destroyEach();
soldier53_runningGroup.destroyEach();
soldier54_runningGroup.destroyEach();
soldier55_runningGroup.destroyEach();
soldier56_runningGroup.destroyEach();
soldier57_runningGroup.destroyEach();
soldier58_runningGroup.destroyEach();
soldier59_runningGroup.destroyEach();
soldier60_runningGroup.destroyEach();
soldier61_runningGroup.destroyEach();
soldier62_runningGroup.destroyEach();
soldier63_runningGroup.destroyEach();
soldier64_runningGroup.destroyEach();
soldier65_runningGroup.destroyEach();
soldier66_runningGroup.destroyEach();
soldier67_runningGroup.destroyEach();
soldier68_runningGroup.destroyEach();
soldier69_runningGroup.destroyEach();
soldier70_runningGroup.destroyEach();
soldier71_runningGroup.destroyEach();
soldier72_runningGroup.destroyEach();
//set a specific lifetime of all the soldiers in the soldiersGroup
soldier1_runningGroup.setLifetimeEach(-1);
soldier2_runningGroup.setLifetimeEach(-1)
soldier3_runningGroup.setLifetimeEach(-1);
soldier4_runningGroup.setLifetimeEach(-1);
soldier5_runningGroup.setLifetimeEach(-1);
soldier6_runningGroup.setLifetimeEach(-1);
soldier7_runningGroup.setLifetimeEach(-1);
soldier8_runningGroup.setLifetimeEach(-1);
soldier9_runningGroup.setLifetimeEach(-1);
soldier10_runningGroup.setLifetimeEach(-1);
soldier11_runningGroup.setLifetimeEach(-1);
soldier12_runningGroup.setLifetimeEach(-1);
soldier13_runningGroup.setLifetimeEach(-1);
soldier14_runningGroup.setLifetimeEach(-1);
soldier15_runningGroup.setLifetimeEach(-1);
soldier16_runningGroup.setLifetimeEach(-1);
soldier17_runningGroup.setLifetimeEach(-1);
soldier18_runningGroup.setLifetimeEach(-1);
soldier19_runningGroup.setLifetimeEach(-1);
soldier20_runningGroup.setLifetimeEach(-1);
soldier21_runningGroup.setLifetimeEach(-1);
soldier22_runningGroup.setLifetimeEach(-1);
soldier23_runningGroup.setLifetimeEach(-1);
soldier24_runningGroup.setLifetimeEach(-1);
soldier25_runningGroup.setLifetimeEach(-1);
soldier26_runningGroup.setLifetimeEach(-1);
soldier27_runningGroup.setLifetimeEach(-1);
soldier28_runningGroup.setLifetimeEach(-1);
soldier29_runningGroup.setLifetimeEach(-1);
soldier30_runningGroup.setLifetimeEach(-1);
soldier31_runningGroup.setLifetimeEach(-1);
soldier32_runningGroup.setLifetimeEach(-1);
soldier33_runningGroup.setLifetimeEach(-1);
soldier34_runningGroup.setLifetimeEach(-1);
soldier35_runningGroup.setLifetimeEach(-1);
soldier36_runningGroup.setLifetimeEach(-1);
soldier37_runningGroup.setLifetimeEach(-1);
soldier38_runningGroup.setLifetimeEach(-1);
soldier39_runningGroup.setLifetimeEach(-1);
soldier40_runningGroup.setLifetimeEach(-1);
soldier41_runningGroup.setLifetimeEach(-1);
soldier42_runningGroup.setLifetimeEach(-1);
soldier43_runningGroup.setLifetimeEach(-1);
soldier44_runningGroup.setLifetimeEach(-1);
soldier45_runningGroup.setLifetimeEach(-1);
soldier46_runningGroup.setLifetimeEach(-1);
soldier47_runningGroup.setLifetimeEach(-1);
soldier48_runningGroup.setLifetimeEach(-1);
soldier49_runningGroup.setLifetimeEach(-1);
soldier50_runningGroup.setLifetimeEach(-1);
soldier51_runningGroup.setLifetimeEach(-1);
soldier52_runningGroup.setLifetimeEach(-1);
soldier53_runningGroup.setLifetimeEach(-1);
soldier54_runningGroup.setLifetimeEach(-1);
soldier55_runningGroup.setLifetimeEach(-1);
soldier56_runningGroup.setLifetimeEach(-1);
soldier57_runningGroup.setLifetimeEach(-1);
soldier58_runningGroup.setLifetimeEach(-1);
soldier59_runningGroup.setLifetimeEach(-1);
soldier60_runningGroup.setLifetimeEach(-1);
soldier61_runningGroup.setLifetimeEach(-1);
soldier62_runningGroup.setLifetimeEach(-1);
soldier63_runningGroup.setLifetimeEach(-1);
soldier64_runningGroup.setLifetimeEach(-1);
soldier65_runningGroup.setLifetimeEach(-1);
soldier66_runningGroup.setLifetimeEach(-1);
soldier67_runningGroup.setLifetimeEach(-1);
soldier68_runningGroup.setLifetimeEach(-1);
soldier69_runningGroup.setLifetimeEach(-1);
soldier70_runningGroup.setLifetimeEach(-1);
soldier71_runningGroup.setLifetimeEach(-1);
soldier72_runningGroup.setLifetimeEach(-1);
//condition to restart the game
if (mousePressedOver(resetButton)){
startOver();
}
}

//display hole1
hole1.display();
//display hole2
hole2.display();
//display hole3
hole3.display();
//display hole4
hole4.display();
//display hole5
hole5.display();
//display hole6
hole6.display();
//display hole7
hole7.display();
//display hole8
hole8.display();
//display hole9
hole9.display();
//display hole10
hole10.display();
//display hole11
hole11.display();
//display hole12
hole12.display();
//display hole13
hole13.display();
//display hole14
hole14.display();
//display hole15
hole15.display();
//display hole16
hole16.display();
//display hole17
hole17.display();
//display hole18
hole18.display();

//display cannon1
cannon1.display();
//display cannon2
cannon2.display();
//display cannon3
cannon3.display();
//display cannon4
cannon4.display();
//display cannon5
cannon5.display();
//display cannon6
cannon6.display();
//display cannon7
cannon7.display();
//display cannon8
cannon8.display();
//display cannon9
cannon9.display();
//display cannon10
cannon10.display();
//display cannon11
cannon11.display();
//display cannon12
cannon12.display();
//display cannon13
cannon13.display();
//display cannon14
cannon14.display();
//display cannon15
cannon15.display();
//display cannon16
cannon16.display();
//display cannon17
cannon17.display();
//display cannon18
cannon18.display();

//display base
base.display();

//display heartLives
heartLives.display();

//command to draw the sprites
drawSprites();
if (gameState === "play"){
//set a suitable size of the outline of the text
strokeWeight(textSize / 2);
//set a suitable color of the outline of the text
stroke("black");
//set a suitable color to fill the text
fill("white");
//set a suitable size of the text
textSize(40);
//actual text for game's title
text("Protect The Base", 550, 515);
}
if (gameState === "end"){
//set a suitable size of the outline of the text
strokeWeight(textSize / 2);
//set a suitable color of the outline of the text
stroke("black");
//set a suitable color to fill the text
fill("white");
//set a suitable size of the text
textSize(32.5);
//actual text
text("Game Over Press To Restart", 500, 515);
}
}

function shootBullet1(){
if (keyWentUp("space")){
var b11 = createSprite(cannon1.x, Math.round(random(cannon1.y + 50, cannon1.y - 20)), 40, 12.5);
b11.angle = cannon1.angle;
b11.velocityX = Math.round(random(7, 12));
b11.velocityY = Math.round(random(4.5, 9));
b11.addImage("shooting1", bImage);
b11.rotation = 90;
b11.scale = 0.05;
b11.lifetime = 95;
bB1.add(b11);
}
}

function shootBullet2(){
if (keyWentUp("space")){
var b12 = createSprite(cannon3.x, Math.round(random(cannon3.y + 50, cannon3.y - 20)), 40, 12.5);
b12.velocityX = Math.round(random(7, 12));
b12.velocityY = Math.round(random(4.5, 9));
b12.addImage("shooting2", bImage);
b12.scale = 0.05;
b12.rotation = 90;
b12.lifetime = 95;
bB2.add(b12);
}
}

function shootBullet3(){
if (keyWentUp("space")){
var b13 = createSprite(cannon8.x, Math.round(random(cannon8.y + 50, cannon8.y - 20)), 40, 12.5);
b13.velocityX = Math.round(random(7, 12));
b13.velocityY = Math.round(random(4.5, 9));
b13.addImage("shooting3", bImage);
b13.scale = 0.05;
b13.rotation = 90;
b13.lifetime = 95;
bB3.add(b13);
}
}

function shootBullet4(){
if (keyWentUp("space")){
var b14 = createSprite(cannon13.x, Math.round(random(cannon13.y + 50, cannon13.y - 20)), 40, 12.5);
b14.velocityX = Math.round(random(7, 12));
b14.velocityY = Math.round(random(4.5, 9));
b14.addImage("shooting4", bImage);
b14.scale = 0.05;
b14.rotation = 90;
b14.lifetime = 95;
bB4.add(b14);
}
}

function shootBullet5(){
if (keyWentUp("space")){
var b15 = createSprite(cannon15.x, Math.round(random(cannon15.y + 50, cannon15.y - 20)), 40, 12.5);
b15.velocityX = Math.round(random(7, 12));
b15.velocityY = Math.round(random(4.5, 9));
b15.addImage("shooting5", bImage);
b15.scale = 0.05;
b15.rotation = 90;
b15.lifetime = 95;
bB5.add(b15);
}
}

function shootBullet6(){
if (keyWentUp("space")){
var b16 = createSprite(cannon17.x, Math.round(random(cannon17.y + 50, cannon17.y - 20)), 40, 12.5);
b16.velocityX = Math.round(random(7, 12));
b16.velocityY = Math.round(random(4.5, 9));
b16.addImage("shooting6", bImage);
b16.scale = 0.05;
b16.rotation = 90;
b16.lifetime = 95;
bB6.add(b16);
}
}

function shootBullet7(){
if (keyWentUp("space")){
var b17 = createSprite(cannon5.x, Math.round(random(cannon5.y + 50, cannon5.y - 20)), 40, 12.5);
b17.velocityX = Math.round(random(7, 12));
b17.velocityY = Math.round(random(4.5, 9));
b17.addImage("shooting7", b2Image);
b17.rotation = 90;
b17.scale = 0.1;
b17.lifetime = 95;
bB7.add(b17);
}
}

function shootBullet8(){
if (keyWentUp("space")){
var b18 = createSprite(cannon6.x, Math.round(random(cannon6.y + 50, cannon6.y - 20)), 40, 12.5);
b18.velocityX = Math.round(random(7, 12));
b18.velocityY = Math.round(random(4.5, 9));
b18.addImage("shooting8", b2Image);
b18.scale = 0.1;
b18.rotation = 90;
b18.lifetime = 95;
bB8.add(b18);
}
}

function shootBullet9(){
if (keyWentUp("space")){
var b19 = createSprite(cannon9.x, Math.round(random(cannon9.y + 50, cannon9.y - 20)), 40, 12.5);
b19.velocityX = Math.round(random(7, 12));
b19.velocityY = Math.round(random(4.5, 9));
b19.addImage("shooting9", b2Image);
b19.scale = 0.1;
b19.rotation = 90;
b19.lifetime = 95;
bB9.add(b19);
}
}

function shootBullet10(){
if (keyWentUp("space")){
var b20 = createSprite(cannon12.x, Math.round(random(cannon12.y + 50, cannon12.y - 20)), 40, 12.5);
b20.velocityX = Math.round(random(7, 12));
b20.velocityY = Math.round(random(4.5, 9));
b20.addImage("shooting10", b2Image);
b20.scale = 0.1;
b20.rotation = 90;
b20.lifetime = 95;
bB10.add(b20);
}
}

function shootBullet11(){
if (keyWentUp("space")){
var b21 = createSprite(cannon16.x, Math.round(random(cannon16.y + 50, cannon16.y - 20)), 40, 12.5);
b21.velocityX = Math.round(random(7, 12));
b21.velocityY = Math.round(random(4.5, 9));
b21.addImage("shooting11", b2Image);
b21.scale = 0.1;
b21.rotation = 90;
b21.lifetime = 95;
bB11.add(b21);
}
}

function shootBullet12(){
if (keyWentUp("space")){
var b22 = createSprite(cannon3.x, Math.round(random(cannon18.y + 50, cannon18.y - 20)), 40, 12.5);
b22.velocityX = Math.round(random(7, 12));
b22.velocityY = Math.round(random(4.5, 9));
b22.addImage("shooting12", b2Image);
b22.scale = 0.1;
b22.rotation = 90;
b22.lifetime = 95;
bB12.add(b22);
}
}

function shootBullet13(){
if (keyWentUp("space")){
var b23 = createSprite(cannon2.x, Math.round(random(cannon2.y + 50, cannon2.y - 20)), 40, 12.5);
b23.velocityX = Math.round(random(7, 12));
b23.velocityY = Math.round(random(4.5, 9));
b23.addImage("shooting13", b3Image);
b23.scale = 0.1;
b23.rotation = 90;
b23.lifetime = 95;
bB13.add(b23);
}
}

function shootBullet14(){
if (keyWentUp("space")){
var b24 = createSprite(cannon4.x, Math.round(random(cannon4.y + 50, cannon4.y - 20)), 40, 12.5);
b24.velocityX = Math.round(random(7, 12));
b24.velocityY = Math.round(random(4.5, 9));
b24.addImage("shooting14", b3Image);
b24.scale = 0.1;
b24.rotation = 90;
b24.lifetime = 95;
bB14.add(b24);
}
}

function shootBullet15(){
if (keyWentUp("space")){
var b25 = createSprite(cannon7.x, Math.round(random(cannon7.y + 50, cannon7.y - 20)), 40, 12.5);
b25.velocityX = Math.round(random(7, 12));
b25.velocityY = Math.round(random(4.5, 9));
b25.addImage("shooting15", b3Image);
b25.scale = 0.1;
b25.rotation = 90;
b25.lifetime = 95;
bB15.add(b25);
}
}

function shootBullet16(){
if (keyWentUp("space")){
var b26 = createSprite(cannon10.x, Math.round(random(cannon10.y + 50, cannon10.y - 20)), 40, 12.5);
b26.velocityX = Math.round(random(7, 12));
b26.velocityY = Math.round(random(4.5, 9));
b26.addImage("shooting16", b3Image);
b26.scale = 0.1;
b26.rotation = 90;
b26.lifetime = 95;
bB16.add(b26);
}
}

function shootBullet17(){
if (keyWentUp("space")){
var b27 = createSprite(cannon11.x, Math.round(random(cannon11.y + 50, cannon11.y - 20)), 40, 12.5);
b27.velocityX = Math.round(random(7, 12));
b27.velocityY = Math.round(random(4.5, 9));
b27.addImage("shooting17", b3Image);
b27.scale = 0.1;
b27.rotation = 90;
b27.lifetime = 95;
bB17.add(b27);
}
}

function shootBullet18(){
if (keyWentUp("space")){
var b28 = createSprite(cannon14.x, Math.round(random(cannon14.y + 50, cannon14.y - 20)), 40, 12.5);
b28.velocityX = Math.round(random(7, 12));
b28.velocityY = Math.round(random(4.5, 9));
b28.addImage("shooting18", b3Image);
b28.scale = 0.15;
b28.rotation = 90;
b28.lifetime = 95;
bB18.add(b28);
}
}

function spawn(){
if (frameCount % 400 === 0){
var s1 = createSprite(0, 300, 50, 100);
s1.addImage("running", running1Image);
s1.velocityX = 3;
s1.scale = 0.175;
soldier1_runningGroup.add(s1);
}
}

function spawn2(){
if (frameCount % 400 === 0){
var s2 = createSprite(-100, 300, 50, 100);
s2.addImage(running1Image);
s2.velocityX = 3;
s2.scale = 0.175;
soldier2_runningGroup.add(s2);
}
}

function spawn3(){
if (frameCount % 400 === 0){
var s3 = createSprite(-200, 300, 50, 100);
s3.addImage(running1Image);
s3.velocityX = 3;
s3.scale = 0.175;
soldier3_runningGroup.add(s3);
}
}

function spawn4(){
if (frameCount % 400 === 0){
var s4 = createSprite(-300, 300, 50, 100);
s4.addImage(running1Image);
s4.velocityX = 3;
s4.scale = 0.175;
soldier4_runningGroup.add(s4);
}
}

function spawn5(){
if (frameCount % 400 === 0){
var s5 = createSprite(-400, 300, 50, 100);
s5.addImage(running1Image);
s5.velocityX = 3;
s5.scale = 0.175;
soldier5_runningGroup.add(s5);
}
}

function spawn6(){
if (frameCount % 400 === 0){
var s6 = createSprite(-500, 300, 50, 100);
s6.addImage(running1Image);
s6.velocityX = 3;
s6.scale = 0.175;
soldier6_runningGroup.add(s6);
}
}

function spawn7(){
if (frameCount % 400 === 0){
var s7 = createSprite(-600, 300, 50, 100);
s7.addImage(running1Image);
s7.velocityX = 3;
s7.scale = 0.175;
soldier7_runningGroup.add(s7);
}
}

function spawn8(){
if (frameCount % 400 === 0){
var s8 = createSprite(-700, 300, 50, 100);
s8.addImage(running1Image);
s8.velocityX = 3;
s8.scale = 0.175;
soldier8_runningGroup.add(s8);
}
}

function spawn9(){
if (frameCount % 400 === 0){
var s9 = createSprite(-800, 300, 50, 100);
s9.addImage(running1Image);
s9.velocityX = 3;
s9.scale = 0.175;
soldier9_runningGroup.add(s9);
}
}

function spawn10(){
if (frameCount % 400 === 0){
var s10 = createSprite(-900, 300, 50, 100);
s10.addImage(running1Image);
s10.velocityX = 3;
s10.scale = 0.175;
soldier10_runningGroup.add(s10);
}
}

function spawn11(){
if (frameCount % 400 === 0){
var s11 = createSprite(-1000, 300, 50, 100);
s11.addImage(running1Image);
s11.velocityX = 3;
s11.scale = 0.175;
soldier11_runningGroup.add(s11);
}
}

function spawn12(){
if (frameCount % 400 === 0){
var s12 = createSprite(-1100, 300, 50, 100);
s12.addImage(running1Image);
s12.velocityX = 3;
s12.scale = 0.175;
soldier12_runningGroup.add(s12);
}
}

function spawn13(){
if (frameCount % 400 === 0){
var s13 = createSprite(-1200, 300, 50, 100);
s13.addImage(running1Image);
s13.velocityX = 3;
s13.scale = 0.175;
soldier13_runningGroup.add(s13);
}
}

function spawn14(){
if (frameCount % 400 === 0){
var s14 = createSprite(-1300, 300, 50, 100);
s14.addImage(running1Image);
s14.velocityX = 3;
s14.scale = 0.175;
soldier14_runningGroup.add(s14);
}
}

function spawn15(){
if (frameCount % 400 === 0){
var s15 = createSprite(-1400, 300, 50, 100);
s15.addImage(running1Image);
s15.velocityX = 3;
s15.scale = 0.175;
soldier15_runningGroup.add(s15);
}
}

function spawn16(){
if (frameCount % 400 === 0){
var s16 = createSprite(-1500, 300, 50, 100);
s16.addImage(running1Image);
s16.velocityX = 3;
s16.scale = 0.175;
soldier16_runningGroup.add(s16);
}
}

function spawn17(){
if (frameCount % 400 === 0){
var s17 = createSprite(-1600, 300, 50, 100);
s17.addImage(running1Image);
s17.velocityX = 3;
s17.scale = 0.175;
soldier17_runningGroup.add(s17);
}
}

function spawn18(){
if (frameCount % 400 === 0){
var s18 = createSprite(-1700, 300, 50, 100);
s18.addImage(running1Image);
s18.velocityX = 3;
s18.scale = 0.175;
soldier18_runningGroup.add(s18);
}
}

function spawn19(){
if (frameCount % 400 === 0){
var s19 = createSprite(-1800, 300, 50, 100);
s19.addImage(running1Image);
s19.velocityX = 3;
s19.scale = 0.175;
soldier19_runningGroup.add(s19);
}
}

function spawn20(){
if (frameCount % 400 === 0){
var s20 = createSprite(-1900, 300, 50, 100);
s20.addImage(running1Image);
s20.velocityX = 3;
s20.scale = 0.175;
soldier20_runningGroup.add(s20);
}
}

function spawn21(){
if (frameCount % 400 === 0){
var s21 = createSprite(-2000, 300, 50, 100);
s21.addImage(running1Image);
s21.velocityX = 3;
s21.scale = 0.175;
soldier21_runningGroup.add(s21);
}
}

function spawn22(){
if (frameCount % 400 === 0){
var s22 = createSprite(-2100, 300, 50, 100);
s22.addImage(running1Image);
s22.velocityX = 3;
s22.scale = 0.175;
soldier22_runningGroup.add(s22);
}
}

function spawn23(){
if (frameCount % 400 === 0){
var s23 = createSprite(-2200, 300, 50, 100);
s23.addImage(running1Image);
s23.velocityX = 3;
s23.scale = 0.175;
soldier23_runningGroup.add(s23);
}
}

function spawn24(){
if (frameCount % 400 === 0){
var s24 = createSprite(-2300, 300, 50, 100);
s24.addAnimation(running1Image);
s24.velocityX = 3;
s24.scale = 0.175;
soldier24_runningGroup.add(s24);
}
}

function spawn25(){
if (frameCount % 775 === 0){
var s25 = createSprite(-2400, 300, 50, 100);
s25.addImage(running1Image);
s25.velocityX = 3;
s25.scale = 0.175;
soldier25_runningGroup.add(s25);
}
}

function spawn26(){
if (frameCount % 775 === 0){
var s26 = createSprite(-2500, 300, 50, 100);
s26.addImage(running1Image);
s26.velocityX = 3;
s26.scale = 0.175;
soldier26_runningGroup.add(s26);
}
}

function spawn27(){
if (frameCount % 775 === 0){
var s27 = createSprite(-2600, 300, 50, 100);
s27.addImage(running1Image);
s27.velocityX = 3;
s27.scale = 0.175;
soldier27_runningGroup.add(s27);
}   
}

function spawn28(){
if (frameCount % 775 === 0){
var s28 = createSprite(-2700, 300, 50, 100);
s28.addImage(running1Image);
s28.velocityX = 3;
s28.scale = 0.175;
soldier28_runningGroup.add(s28);
}  
}

function spawn29(){
if (frameCount % 775 === 0){
var s29 = createSprite(-2800, 300, 50, 100);
s29.addImage(running1Image);
s29.velocityX = 3;
s29.scale = 0.175;
soldier29_runningGroup.add(s29);
}   
}

function spawn30(){
if (frameCount % 775 === 0){
var s30 = createSprite(-2900, 300, 50, 100);
s30.addImage(running1Image);
s30.velocityX = 3;
s30.scale = 0.175;
soldier30_runningGroup.add(s30);
}
}

function spawn31(){
if (frameCount % 775 === 0){
var s31 = createSprite(-3000, 300, 50, 100);
s31.addImage(running1Image);
s31.velocityX = 3;
s31.scale = 0.175;
soldier31_runningGroup.add(s31);
}   
}

function spawn32(){
if (frameCount % 775 === 0){
var s32 = createSprite(-3100, 300, 50, 100);
s32.addImage(running1Image);
s32.velocityX = 3;
s32.scale = 0.175;
soldier32_runningGroup.add(s32);
}
}

function spawn33(){
if (frameCount % 775 === 0){
var s33 = createSprite(-3200, 300, 50, 100);
s33.addImage(running1Image);
s33.velocityX = 3;
s33.scale = 0.175;
soldier33_runningGroup.add(s33);
}
}

function spawn34(){
if (frameCount % 775 === 0){
var s34 = createSprite(-3300, 300, 50, 100);
s34.addImage(running1Image);
s34.velocityX = 3;
s34.scale = 0.175;
soldier34_runningGroup.add(s34);
}   
}

function spawn35(){
if (frameCount % 775 === 0){
var s35 = createSprite(-3400, 300, 50, 100);
s35.addImage(running1Image);
s35.velocityX = 3;
s35.scale = 0.175;
soldier35_runningGroup.add(s35);
}
}

function spawn36(){
if (frameCount % 775 === 0){
var s36 = createSprite(-3500, 300, 50, 100);
s36.addImage(running1Image);
s36.velocityX = 3;
s36.scale = 0.175;
soldier36_runningGroup.add(s36);
} 
}

function spawn37(){
if (frameCount % 775 === 0){
var s37 = createSprite(-3600, 300, 50, 100);
s37.addImage(running1Image);
s37.velocityX = 3;
s37.scale = 0.175;
soldier37_runningGroup.add(s37);
}
}

function spawn38(){
if (frameCount % 775 === 0){
var s38 = createSprite(-3700, 300, 50, 100);
s38.addImage(running1Image);
s38.velocityX = 3;
s38.scale = 0.175;
soldier38_runningGroup.add(s38);
}  
}

function spawn39(){
if (frameCount % 775 === 0){
var s39 = createSprite(-3800, 300, 50, 100);
s39.addImage(running1Image);
s39.velocityX = 3;
s39.scale = 0.175;
soldier39_runningGroup.add(s39);
}
}

function spawn40(){
if (frameCount % 775 === 0){
var s40 = createSprite(-3900, 300, 50, 100);
s40.addImage(running1Image);
s40.velocityX = 3;
s40.scale = 0.175;
soldier40_runningGroup.add(s40);
}
}

function spawn41(){
if (frameCount % 775 === 0){
var s41 = createSprite(-4000, 300, 50, 100);
s41.addImage(running1Image);
s41.velocityX = 3;
s41.scale = 0.175;
soldier41_runningGroup.add(s41);
}  
}

function spawn42(){
if (frameCount % 775 === 0){
var s42 = createSprite(-4100, 300, 50, 100);
s42.addImage(running1Image);
s42.velocityX = 3;
s42.scale = 0.175;
soldier24_runningGroup.add(s42);
}
}

function spawn43(){
if (frameCount % 775 === 0){
var s43 = createSprite(-4200, 300, 50, 100);
s43.addImage(running1Image);
s43.velocityX = 3;
s43.scale = 0.175;
soldier43_runningGroup.add(s43);
}
}

function spawn44(){
if (frameCount % 775 === 0){
var s44 = createSprite(-4300, 300, 50, 100);
s44.addImage(running1Image);
s44.velocityX = 3;
s44.scale = 0.175;
soldier44_runningGroup.add(s44);
}  
}

function spawn45(){
if (frameCount % 775 === 0){
var s45 = createSprite(-4400, 300, 50, 100);
s45.addImage(running1Image);
s45.velocityX = 3;
s45.scale = 0.175;
soldier45_runningGroup.add(s45);
} 
}

function spawn46(){
if (frameCount % 775 === 0){
var s46 = createSprite(-4500, 300, 50, 100);
s46.addImage(running1Image);
s46.velocityX = 3;
s46.scale = 0.175;
soldier4_runningGroup.add(s46);
}
}

function spawn47(){
if (frameCount % 775 === 0){
var s47 = createSprite(-4600, 300, 50, 100);
s47.addImage(running1Image);
s47.velocityX = 3;
s47.scale = 0.175;
soldier47_runningGroup.add(s47);
}
}

function spawn48(){
if (frameCount % 775 === 0){
var s48 = createSprite(-4700, 300, 50, 100);
s48.addImage(running1Image);
s48.velocityX = 3;
s48.scale = 0.175;
soldier48_runningGroup.add(s48);
}   
}

function spawn49(){//1210, 52.5, 300, 105
if (frameCount % 300 === 0){
var s49 = createSprite(1500, 52.5, 50, 100);
s49.addImage(running2Image);
s49.velocityX = -3;
s49.scale = 0.175;
soldier49_runningGroup.add(s49);
}
}

function spawn50(){
if (frameCount % 300 === 0){
var s50 = createSprite(1600, 52.5, 50, 100);
s50.addImage(running2Image);
s50.velocityX = -3;
s50.scale = 0.175;
soldier50_runningGroup.add(s50);
}
}

function spawn51(){
if (frameCount % 300 === 0){
var s51 = createSprite(1700, 52.5, 50, 100);
s51.addImage(running2Image);
s51.velocityX = -3;
s51.scale = 0.175;
soldier51_runningGroup.add(s51);
}
}

function spawn52(){
if (frameCount % 300 === 0){
var s52 = createSprite(1800, 52.5, 50, 100);
s52.addImage(running2Image);
s52.velocityX = -3;
s52.scale = 0.175;
soldier52_runningGroup.add(s52);
}
}

function spawn53(){
if (frameCount % 300 === 0){
var s53 = createSprite(1900, 52.5, 50, 100);
s53.addImage(running2Image);
s53.velocityX = -3;
s53.scale = 0.175;
soldier53_runningGroup.add(s53);
}
}

function spawn54(){
if (frameCount % 300 === 0){
var s54 = createSprite(2000, 52.5, 50, 100);
s54.addImage(running2Image);
s54.velocityX = -3;
s54.scale = 0.175;
soldier54_runningGroup.add(s54);
}
}

function spawn55(){
if (frameCount % 300 === 0){
var s55 = createSprite(2100, 52.5, 50, 100);
s55.addImage(running2Image);
s55.velocityX = -3;
s55.scale = 0.175;
soldier55_runningGroup.add(s55);
}
}

function spawn56(){
if (frameCount % 300 === 0){
 var s56 = createSprite(2200, 52.5, 50, 100);
s56.addImage(running2Image);
s56.velocityX = -3;
s56.scale = 0.175;
soldier56_runningGroup.add(s56);
}
}

function spawn57(){
if (frameCount % 300 === 0){
var s57 = createSprite(2300, 52.5, 50, 100);
s57.addImage(running2Image);
s57.velocityX = -3;
 s57.scale = 0.175;
soldier57_runningGroup.add(s57);
}
}

function spawn58(){
if (frameCount % 300 === 0){
var s58 = createSprite(2400, 52.5, 50, 100);
s58.addImage(running2Image);
s58.velocityX = -3;
s58.scale = 0.175;
soldier58_runningGroup.add(s58);
}
}

function spawn59(){
if (frameCount % 300 === 0){
var s59 = createSprite(2500, 52.5, 50, 100);
s59.addImage(running2Image);
s59.velocityX = -3;
s59.scale = 0.175;
soldier59_runningGroup.add(s59);
}
}

function spawn60(){
if (frameCount % 300 === 0){
var s60 = createSprite(2600, 52.5, 50, 100);
s60.addImage(running2Image);
s60.velocityX = -3;
s60.scale = 0.175;
soldier60_runningGroup.add(s60);
}
}

function spawn61(){
if (frameCount % 300 === 0){
var s61 = createSprite(2700, 52.5, 50, 100);
s61.addImage(running2Image);
s61.velocityX = -3;
s61.scale = 0.175;
soldier61_runningGroup.add(s61);
}
}

function spawn62(){
if (frameCount % 300 === 0){
var s62 = createSprite(2800, 52.5, 50, 100);
s62.addImage(running2Image);
s62.velocityX = -3;
s62.scale = 0.175;
soldier62_runningGroup.add(s62);
}
}

function spawn63(){
if (frameCount % 300 === 0){
var s63 = createSprite(2900, 52.5, 50, 100);
s63.addImage(running2Image);
s63.velocityX = -3;
s63.scale = 0.175;
soldier63_runningGroup.add(s63);
}
}

function spawn64(){
if (frameCount % 300 === 0){
var s64 = createSprite(3000, 52.5, 50, 100);
s64.addImage(running2Image);
s64.velocityX = -3;
s64.scale = 0.175;
soldier64_runningGroup.add(s64);
}
}

function spawn65(){
if (frameCount % 300 === 0){
var s65 = createSprite(3100, 52.5, 50, 100);
s65.addImage(running2Image);
s65.velocityX = -3;
s65.scale = 0.175;
soldier65_runningGroup.add(s65);
}
}

function spawn66(){
if (frameCount % 300 === 0){
var s66 = createSprite(3200, 52.5, 50, 100);
s66.addImage(running2Image);
s66.velocityX = -3;
s66.scale = 0.175;
soldier66_runningGroup.add(s66);
}
}

function spawn67(){
if (frameCount % 300 === 0){
var s67 = createSprite(3300, 52.5, 50, 100);
s67.addImage(running2Image);
s67.velocityX = -3;
s67.scale = 0.175;
soldier67_runningGroup.add(s67);
}
}

function spawn68(){
if (frameCount % 300 === 0){
var s68 = createSprite(3400, 52.5, 50, 100);
s68.addImage(running2Image);
s68.velocityX = -3;
s68.scale = 0.175;
soldier68_runningGroup.add(s68);
}
}

function spawn69(){
if (frameCount % 300 === 0){
var s69 = createSprite(3500, 52.5, 50, 100);
s69.addImage(running2Image);
s69.velocityX = -3;
s69.scale = 0.175;
soldier69_runningGroup.add(s69);
 }
}

function spawn70(){
if (frameCount % 300 === 0){
var s70 = createSprite(3600, 52.5, 50, 100);
s70.addImage(running2Image);
s70.velocityX = -3;
s70.scale = 0.175;
soldier70_runningGroup.add(s70);
}
}

function spawn71(){
if (frameCount % 300 === 0){
var s71 = createSprite(3700, 52.5, 50, 100);
s71.addImage(running2Image);
s71.velocityX = -3;
s71.scale = 0.175;
soldier71_runningGroup.add(s71);
}
}

function spawn72(){
if (frameCount % 300 === 0){
var s72 = createSprite(3800, 52.5, 50, 100);
s72.addImage(running2Image);
s72.velocityX = -3;
s72.scale = 0.175;
soldier72_runningGroup.add(s72);
}
}

//function to start over the game
function startOver(){
//change gameState
gameState = "play";
//reset score
score = 0;
//reset totalLives
totalLives = 10;
//set the visibility of resetButton
resetButton.visible = false;
}