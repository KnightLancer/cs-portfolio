var BraveFrontier = document.getElementById("BraveFrontier");
var Deemo = document.getElementById("Deemo");
var Colopl = document.getElementById("Colopl");
var Osu = document.getElementById("Osu");
var Danmaku = document.getElementById("Danmaku");
// connecting HTML elements to JS

var BraveInfo = document.getElementById("BraveInfo");
var DeemoInfo = document.getElementById("DeemoInfo");
var ColoplInfo = document.getElementById("ColoplInfo");
var OsuInfo = document.getElementById("OsuInfo");
var DanmakuInfo = document.getElementById("DanmakuInfo");
// connecting HTML elements to JS. Separated from top ones for neatness.

BraveFrontier.addEventListener("click", function(){
    // when clicking item1 (item1 defined from the var above and gotten from the html), there will be a function that causes the action below
    BraveInfo.innerHTML = "<h3>Brave Frontier is, by far, the most addicting game app on my iPhone. It is a mobile Japanese role playing, turn-based RPG that has its own English copy in the US. It utilizes touch controls and the raising and battling of summoned characters called units. These units are used throughout the game by a summoner, with a name given by the player, as you travel the world of Grand Gaia and protect the lands from threats such as the Four Fallen Gods. The combat system is very basic yet challenging, which is the main reason why I enjoy this game. Harnessing the different types of units and their special attacks, or Brave Bursts - be it attacking, supporting, or healing -, the summoner, as well as other allies, quest on. Aside from the main story, there are event dungeons and trials which, other than being awarded goodies, bring about a sense of completion. The most annoying part of the game is having that taunting Rare Summon door always in front of you, tempting to deplete your Gems, your most valuable currency, to summon powerful units, most likely a copy of one you already have or one you don't need/want. I'm so glad it's free on the App Store.</h3> <img src='http://i51.photobucket.com/albums/f359/Bautista_Ice/Brave%20Frontier/Screenshot_2015-08-02-14-39-21_zpss92kfzhh.png' height=650px widht=667px/><br> A boss trial against the evil Temptress Xie'Jing; in trials, you face copies of bosses and can capture them to use in battle. That is, if you defeat them.";
    // the text and image in this innerHTML will spawn upon the "click"
});
                       
Deemo.addEventListener("click", function(){
    // clicking item2 will cause the action below, in this case spawning a text and image
    DeemoInfo.innerHTML = "<h3>Deemo is on my list because it falls under one my favorite game genres: music. Deemo is a score-based, music and rhythm video game which uses many newer piano songs to progress in the plot or to have fun. Notes fall from the top of the screen according to the beat of the song - melody or harmony - and you tap them once they reach the bottom bolded line, which align themselves with the song, so you don't need to care about visual timing, but you need a good ear for music. I enjoy this game not only for its short but sweet story, but for its no-internet, smooth gameplay. Although I admit some songs aren't to everyone's taste, while other songs don't sound like it has a piano in it, the majority of the songs it has are worth the $2. </h3> <img src='http://a5.mzstatic.com/us/r30/Purple7/v4/81/f2/d0/81f2d0c7-14b7-640f-fd58-57c1eb3feb1b/screen800x800.jpeg' height=400px width=667px/><br>Mirror Night by V.K. on Hard Difficulty";
    // the text and image that spawn upon the "click"
});

Colopl.addEventListener("click", function(){
    // system listens for "click" in item3
   ColoplInfo.innerHTML = "<h3>Rune Story is a game I recently found and initially rejected, but came to be entertained by it. It's not your average action RPG on the App Store. I like this game because of its gameplay, whereas you can summon units using jewels like Brave Frontier, but when you go into battle, you are able to freely roam the map, defeating enemies with combos and skills. Everything is touched based and the battle depends on you, so every moment in battle needs your attention, lest you wish to be food for the monsters. This game is free, making it more enjoyable.</h3> <img src='http://operationrainfall.com/wp-content/uploads/2015/10/Colopl_RuneStory_ScreenShot3.png' height=550px width=400px/><br> A Warrior and Sniper class teaming up to advance in a castle stage.";
   // the text and image that spawn upon the "click"
});

Osu.addEventListener("click", function(){
    // system listens for "click" in item4
    OsuInfo.innerHTML = "<h3>Osu is another rhythm game, minus the piano, plus the action. Unlike Deemo, which has notes falling from the top, osu has beat circles which appear on screen with another circle which closes in on the beat circle in tune with the music. These beat circles, along with beat sliders, beat holds, and spinners are mapped out for each song, making up a beatmap. It gets hectic when faced with faster songs and wilder beatmaps, but stays true to its rhythm gaming. Plus, it's free!</h3> <br> <img src='http://a4.mzstatic.com/us/r30/Purple/v4/d5/27/b0/d527b062-1a5f-933d-fb20-302ca83963aa/screen568x568.jpeg' height=350px width=600px/><br> Liquid Future beatmap by Nekodex";
    // the text and image that spawn upon the "click"
});

Danmaku.addEventListener("click", function(){
    // system listens for "click" in item5
    DanmakuInfo.innerHTML = "<h3>By this time it was hard to choose a 5th game, since my choices were diminished, but from what I had left over, the 5th spot went to Danmaku Unlimited 2, a paid game with a very hellish playstyle. It falls under the genre of the Japanese word danmaku, or barrage in English, and it's a fitting name. This game is what you would call a bullet-hell, as the game is more focused on weaving through intricate enemy bullet patterns and outnumbered enemy forces rather then shooting them down. The fast paced, never-ending danger gameplay brings that adrenaline rush when knowing that one false finger drag could take you down. I thought it was worth it for $4.99, because I never beat the last level, even on the easiest difficulty.</h3> <br> <img src='https://lh3.ggpht.com/mEREuAKuClq1rCky3ydtZlWxI3ziHicMpWtucJlbZLgaXzvi7X3eh1rpeNEQm5HYDOY=h900' height=550px width=400px/><br>Beautiful yet deadly bullet pattern, taken from the game itself (your plane is down below)";
    // the text and image that spawn upon the "click"
});