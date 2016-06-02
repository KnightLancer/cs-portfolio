// JavaScript File
//All these vars connect its respective elements from the HTML it's connected to into this Javascript.
var firstimage = document.getElementById("firstimage");
var firsttext = document.getElementById("firsttext");
var firstinfo = document.getElementById("firstinfo");

//Images
var BaseElsword = document.getElementById("BaseElsword");
var BaseAisha = document.getElementById("BaseAisha");
var BaseRena = document.getElementById("BaseRena");
var BaseRaven = document.getElementById("BaseRaven");
var BaseEve = document.getElementById("BaseEve");
var BaseChung = document.getElementById("BaseChung");
var BaseAra = document.getElementById("BaseAra");
var BaseElesis = document.getElementById("BaseElesis");
var BaseAdd = document.getElementById("BaseAdd");
var BaseLuciel = document.getElementById("BaseLuciel");

//The quotes within the images.
var BaseElswordQuote = document.getElementById("BaseElswordQuote");
var BaseAishaQuote = document.getElementById("BaseAishaQuote");
var BaseRenaQuote = document.getElementById("BaseRenaQuote");
var BaseRavenQuote = document.getElementById("BaseRavenQuote");
var BaseEveQuote = document.getElementById("BaseEveQuote");
var BaseChungQuote = document.getElementById("BaseChungQuote");
var BaseAraQuote = document.getElementById("BaseAraQuote");
var BaseElesisQuote = document.getElementById("BaseElesisQuote");
var BaseAddQuote = document.getElementById("BaseAddQuote");
var BaseLucielQuote1 = document.getElementById("BaseLucielQuote1");
var BaseLucielQuote2 = document.getElementById("BaseLucielQuote2");

//The info inside these images.
var BaseElswordInfo = document.getElementById("BaseElswordInfo");
var BaseAishaInfo = document.getElementById("BaseAishaInfo");
var BaseRenaInfo = document.getElementById("BaseRenaInfo");
var BaseRavenInfo = document.getElementById("BaseRavenInfo");
var BaseEveInfo = document.getElementById("BaseEveInfo");
var BaseChungInfo = document.getElementById("BaseChungInfo");
var BaseAraInfo = document.getElementById("BaseAraInfo");
var BaseElesisInfo = document.getElementById("BaseElesisInfo");
var BaseAddInfo = document.getElementById("BaseAddInfo");
var BaseLucielInfo = document.getElementById("BaseLucielInfo");

//The rest of these codes tell the system that when an image on the main page is clicked, every other image will delete and new text and a new background will spawn. You can tell when one character's code stops when the variable for the addEventListener changes, such as BaseElsword.addEventListener and BaseAisha.addEventListener.

BaseElsword.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseElswordQuote.innerHTML = "'Hey, I'm Elsword! I battle with my trusty sword!'";
    
    BaseElswordInfo.innerHTML = "Elsword is that one hotheaded swordsman with confidence that outweighs his brains. Strong enough to hold a greatsword with one hand, Elsword chops down any foe, big or small, as he and his allies search for his village's precious gem, the El Shard, and retrieve it from the clutches of evil. All the while, Elsword searches for his sister, who went on to the Velder Kingdom to combat and even larger threat. Elsword forms the 'El Search Party', but even as he finds the El, many more adventures beckon to his friends. As players, you can take control of this powerhouse, dishing out an array of heavy attacks, magical projectiles, and quick double-sword blows, depending on which path of the Knight you choose to follow.";
});

BaseAisha.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseElsword.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseAishaQuote.innerHTML = "'Prepare to be blown away by magic!'";
    
    BaseAishaInfo.innerHTML = "'This knowledgeable yet brash magician had her abilities stolen by an evil ring. Her mentor believes it may be linked to the El Shard, and so her adventure to regain her magic and recover the El begins. . . with her running into a certain hot-blooded knight. With her arsenal of magic attacks and supports, she can spam fire and summon ice, and when her enemies are close, a good smack of her staff is enough to put out their lights. Her magic capabilities allow her to perform several helpful actions, such as recharge power, float, and teleport. This mystical superpower will surely make enemies regret they ever crossed paths this this magician.'";
    
});

BaseRena.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseElsword.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseRenaQuote.innerHTML = "'Can you hear the spirit of the winds?'";
    
    BaseRenaInfo.innerHTML = "'An elven warrior who sets out to quell the disasters of the world. At the call of the stolen El Shard, Rena embarks with a swordsman and magician to chase after the El, sniping enemies one by one with her magic arrows. And when enemies get too close, she lashes out with devastating kicks. Calling upon the wind spirits, she can cast wind magic to blow opponents away and, with the help of the spirit of fire, can shoot a beautiful but deadly phoenix attack. By utilizing long and short ranged attacks, she is a force to be reckoned with. If looks could kill, she'd cause a calamity.";
});

BaseRaven.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseElsword.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseRavenQuote.innerHTML = "'Have I helped a little for the peace of this world...?'";
    
    BaseRavenInfo.innerHTML = "Raven is a man of honor and repentence who, in his days as the Captan of the Crow Merceneries of the Velder Kingdom, earned a high rank within society despite being a commoner. This caused jealously and anomosity among his fellow citizens, and was soon framed for treason. His comrades and fiancee rescued Raven and escaped to the forest, but were soon caught and killed, Raven being the last to suffer. As he was left for dead, a robot race called the Nasod approached him and offered revanged. The mercenery was later equipped with a Nasod arm and fought to destroy his kingdom, until he met a party of 3: a red-haired swordsman, a grape-haired magician, and an elven markswoman who highly resembled his dead fiancee. The group helped him realize his duty to protect his people. Thus, he joins the party to search for the El and atone for all the destruction he has caused. Players are able to experience a warrior who is not only quick with a blade, but he is adept in using his prototype Nasod arm to deliver menacing flame attacks and powerful blows. As he makes the trek to repentance, players can elimante the real evil that taints the lands.";
    
    document.body.style.backgroundImage = "url('http://elwiki.net/wiki/images/thumb/4/4f/4-5new.jpg/800px-4-5new.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

BaseEve.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseElsword.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseEveQuote.innerHTML = "'You will now face the queen of Nasods.'";
    
    BaseEveInfo.innerHTML = "As the 'Little Queen of the Nasods', a profound race of intelligent robots, Eve held the responsibility of every bot's well being underneath her upper class rank in ancient times. That is, until the ancient humans and Nasods flew into a war with each other in response to a weakening El. The Nasods were denied help from the humans, and Eve was sent to her preservation capsule to avoid the fight. Thousands of years passed, and Eve was awoken by a stray El fragment. She awoke to discover her whole race had diminished. She aimed to revive the Nasods by first bringing back the King of Nasods, which forced her into another slumber. However, the King wished to continue the war between man and machine, and, using a certain stolen El, started mass-producing Nasods. It wasn't until a band of heroes led a red-haired swordsboy that the King was once again defeated, and Eve, who had awoken to find herself along again, decided to folow the party with her goal set to revive her race once more. Besides, this was the first time a boy asked to be her friend.";
    
    document.body.style.backgroundImage = "url('http://electronasod.weebly.com/uploads/2/6/9/5/26957661/2537015_orig.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

BaseChung.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseElsword.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseChungQuote.innerHTML = "'I will ensure no one will get hurt!'"
    
    BaseChungInfo.innerHTML = "This little trap is not someone to be taken lightly. Chung, or formally 'Prince Seiker', the White Wolf of Hamel, is a prince of the royal Hamel City within the Senace Kingdom, which is most known for its majestic aquatic structures and features. All was peaceful in this bright blue city until it came under attack by demons. His father, the White Colassus Helputt, devoted his heart and soul to protecting his city, but was soon possessed by the demons and led them into his very own city. Chung's efforts to halt his father were futile, and he was gravely injured. Fortunately, a red swordsman and his group intervened and aided in his retreat. Chung vowed to one day return to his home and defend it like a true Guardian. Despite his seemingly small physique, he can wield a double-edged cannon with ease and comes fully equipped a special panoply he calls the Freiturnier. With this, he becomes a defensive player who can deliver devastating damage to any foe in his path."
    
    document.body.style.backgroundImage = "url('http://corporate.gameforge.com/wp-content/uploads/2013/01/city_of_hamel.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

BaseAra.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseElsword.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseAraQuote.innerHTML = "'Until I face my brother again... I cannot give up!'";
    
    BaseAraInfo.innerHTML = "Ara Haan was born in the town of Fahrmann, a place in the Northern Empire of the Fluone Continent, just across the seas from Elrios. She was a part of the proud 'Haan' family which practiced martial arts, and her family rose to become the most highly regarded family in the continent. A demon invasion and the corruption of her brother was what it took to spur Ara into action, fighting foes with her spearmanship along with the fox goddess, Eun. Dishing out quickly executed stabs and acrobatics, she can pierce enemies from afar and dance around the battlefield. Utilizing spirit energy, she can enhance her skills and unlcok new abilities, and player never have to worry about spirit consumption when they enter Eun mode, when fox and Ara become one, significantly enhancing her parameters. Encountering a certain band of heroes along the way, Ara fights to dispel the demons around the world."
    
    document.body.style.backgroundImage = "url('http://www.mmogames.com/wp-content/uploads/2013/12/Elsword_Sander_2.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

BaseElesis.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElsword.style.display = "none";
    BaseAdd.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseElesisQuote.innerHTML = "'People call me.... The 'Red Haired Knight'.'";
    
    BaseElesisInfo.innerHTML = "Elesis was a well revered knight, and also the older sister of Elsword. One day, while the siblings were out on the field in their hometown of Ruben, demons attack her. This made something click in Elesis, as she nearly died in the attack had it not been for her brother. Therefore, she journeyed to become captain of the Red Knights at the kingdom of Velder. Wielding a greatsword as well, she can pummel enemies with a swing of her sword and send out blazing attacks to anyone in her way. Using her agility and strength to her advantage, she can knock out any foe who dares to bring injustice to her domain. Her leave from Ruben prompted Elsword to follow in her footsteps to become a fearsome knight himself, and when they reunited in Velder, they set off yet again to alleviate the suffering of others around the world."
    
    document.body.style.backgroundImage = "url('http://elwiki.net/wiki/images/thumb/2/2b/VelderPlace.jpg/800px-VelderPlace.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

BaseAdd.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseElsword.style.display = "none";
    BaseLuciel.style.display = "none";
    
    BaseAddQuote.innerHTML = "'Heheh.... the laws of this world... I shall decide them!'";
    
    BaseAddInfo.innerHTML = "The son of a profound family of scientists. His family specialized in researching the mystical race of Nasod robots. One day, his family was imprisoned for conducting forbidden research, and when Add escaped, he was shot and fell into a crack in time and space, in a special area called the Infinite Library. Driven to insanity by revenge and a natural lust for knowledge, he escapes to the future (present in this case) to decimate anyone in the way of his path to perfection. An insane but clean guy, Add uses Dynamos to do his bidding, floating devices in which he can reroute electricity to in order to initiate attacks. Enemies don't stand a chance as Add shocks them to doom and destroys literally anyone out of insanity. Players will understand why he's commonly regarded as a 'mand scientists' once they taste his power. Whilst his time in the library, he discovers a human-Nasod, Eve, and set about to finding her outside. He indeed pinpoint her, but she was with a special party of heroes, so he followed them on their brave journey around the globe."
    
    document.body.style.backgroundImage = "url('http://orig05.deviantart.net/aa10/f/2014/196/5/7/so_i_kept_pausing_the_video_in_add_s_anime_trailer_by_moonstar34-d7qsena.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

BaseLuciel.addEventListener("click", function() {
    firstimage.style.display = "none";
    firsttext.style.display = "none";
    firstinfo.style.display = "none";
    
    BaseAisha.style.display = "none";
    BaseRena.style.display = "none";
    BaseRaven.style.display = "none";
    BaseEve.style.display = "none";
    BaseChung.style.display = "none";
    BaseAra.style.display = "none";
    BaseElesis.style.display = "none";
    BaseAdd.style.display = "none";
    BaseElsword.style.display = "none";
    
    BaseLucielQuote1.innerHTML = "'Status, honor, power. I've lost everything. Before the embers of my life go out... will you ... become my royal strength ... ?' - Lu";
    
    BaseLucielQuote2.innerHTML = "'I'll retake the throne ... I'll give my soul for you ... The contract is complete.' - Ciel";
    
    BaseLucielInfo.innerHTML = "A high ranking demon lord betrayed by those of her kind and forced to flee to another world. A famous assassin of the criminal underworld, grown up lonely and with his will steeled to survive, who's thrusted into the conflict with demons. That is who Luciela 'Lu' R. Sourcream and Ciel are. Bound together by a fateful encounter and demonic contract, this duo sets of with the rest of the El Search Party, eradicating demons and saving people all over the world. As a dual character, Lu and Ciel are able to switch out during attacks and skills, dealing quick and devastating damage to anyone in their way. With Lu, players can unleash her menacing magic and demonic claws. With Ciel, they can fire magical bullets and hack at enemies with his infamous gunblades. By utilizing not just one of the chracters but both, players can execute demonic magic and swift punches alongside the many players of Elsword.";
    
    document.body.style.backgroundImage = "url('https://secure.static.tumblr.com/543163caf2492801ced5400cc416a4f9/niofgx9/oOxnfbr7h/tumblr_static_d2xnjv4bdm0o888owww80sk00_640_v2.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});