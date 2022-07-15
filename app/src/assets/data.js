const movies = [
  {
    _id: 1,
    name: "Horror of Dracula",
    release: 1958,
    cast: [
      {
        name: "Christopher Lee",
      },
      {
        name: "Peter Cushing",
      },
      {
        name: "Carol Marsh",
      },
      {
        name: "Janina Faye",
      },
    ],
    director: "Terence Fisher",
    synopsis:
      "On a search for his missing friend Jonathan Harker (John Van Eyssen), vampire hunter Dr. Van Helsing (Peter Cushing) is led to Count Dracula's (Christopher Lee) castle. Upon arriving, Van Helsing finds an undead Harker in Dracula's crypt and discovers that the count's next target is Harker's ailing fiancée, Lucy Holmwood (Carol Marsh). With the help of her brother, Arthur (Michael Gough), Van Helsing struggles to protect Lucy and put an end to Count Dracula's parasitic reign of terror.",
    why_you_should_watch:
      "It's got all the classic vibes of old school Dracula, but with a more hardcore twist!",
    where_to_watch: {
      can_stream: true,
      where: "HBOMax",
      link: "https://hbomax.com",
    },
    trailer: "https://youtu.be/ZTbY0BgIRMk",
    poster:
      "https://i.etsystatic.com/13669063/r/il/7052b6/2433973307/il_fullxfull.2433973307_glgh.jpg",
    background:
      "https://c4.wallpaperflare.com/wallpaper/353/957/131/count-dracula-wallpaper-preview.jpg",
  },
  {
    _id: 2,
    name: "The Curse of Frankenstein",
    release: 1957,
    cast: [
      {
        name: "Peter Cushing",
      },
      {
        name: "Christopher Lee",
      },
      {
        name: "Hazel Court",
      },
      {
        name: "Valerie Gaunt",
      },
    ],
    director: "Terence Fisher",
    synopsis:
      "Victor Frankenstein (Peter Cushing) is a brilliant scientist willing to stop at nothing in his quest to reanimate a deceased body. After alienating his longtime friend and partner, Paul Krempe (Robert Urquhart), with his extreme methods, Frankenstein assembles a hideous creature (Christopher Lee) out of dead body parts and succeeds in bringing it to life. But the monster is not as obedient or docile as Frankenstein expected, and it runs amok, resulting in murder and mayhem.",
    why_you_should_watch:
      "Similar to Horror of Dracula, only this time it's with Frankenstein and it's also balls to the wall badass lol",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/QxNVNGydx5U",
    poster: "https://m.media-amazon.com/images/I/51WwLJE-d+L._AC_.jpg",
    background:
      "https://quadcinema.com/wp-content/uploads/2018/05/Curse-of-Frankenstein-1400x783.png",
  },
  {
    _id: 3,
    name: "The Return of the Living Dead",
    release: 1985,
    cast: [
      {
        name: "Tom Mathews",
      },
      {
        name: "James Karen",
      },
      {
        name: "Don Calfa",
      },
      {
        name: "Brian Peck",
      },
    ],
    director: "Dan O'Bannon",
    synopsis:
      "When foreman Frank (James Karen) shows new employee Freddy (Thom Mathews) a secret military experiment in a supply warehouse, the two klutzes accidentally release a gas that reanimates corpses into flesh-eating zombies. As the epidemic spreads throughout Louisville, Ky., and the creatures satisfy their hunger in gory and outlandish ways, Frank and Freddy fight to survive with the help of their boss (Clu Gulager) and a mysterious mortician (Don Calfa).",
    why_you_should_watch:
      "If you ever wondered where the idea of zombies 'eating brains' came from, watch this. The zombies look so cool in this, they speak and have some hilarious kills, and the plot gets fucking insane",
    where_to_watch: {
      can_stream: true,
      where: "PlutoTV",
      link: "https://www.peacocktv.com/",
    },
    trailer: "https://youtu.be/KeSAFGWzft8",
    poster: "https://m.media-amazon.com/images/I/71M8qVpeeML._AC_SY679_.jpg",
    background: "https://images7.alphacoders.com/524/524707.jpg",
  },
  {
    _id: 4,
    name: "Cube",
    release: 1997,
    cast: [
      {
        name: "Nicole de Boer",
      },
      {
        name: "David Hewlett",
      },
      {
        name: "Maurice Dean Wint",
      },
      {
        name: "Nicky Guadagni",
      },
    ],
    director: "Vincenzo Natali",
    synopsis:
      "When foreman Frank (James Karen) shows new employee Freddy (Thom Mathews) a secret military experiment in a supply warehouse, the two klutzes accidentally release a gas that reanimates corpses into flesh-eating zombies. As the epidemic spreads throughout Louisville, Ky., and the creatures satisfy their hunger in gory and outlandish ways, Frank and Freddy fight to survive with the help of their boss (Clu Gulager) and a mysterious mortician (Don Calfa).",
    why_you_should_watch:
      "This is allot different from what I've recommended, it's truly a psychological horror, where even the setting itself is terrifying, the real danger comes from the cast of characters you follow. I don't wanna spoil anymore you just gotta see it!",
    where_to_watch: {
      can_stream: true,
      where: "YouTube",
      link: "https://www.youtube.com/",
    },
    trailer: "https://youtu.be/Esjc0rPj3K4",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTIyZGM3NDItMTNmNS00Yzc4LTg2MzItOWY4MTE1NDlmZDIyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_FMjpg_UX1000_.jpg",
    background:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/02/cube-4-1.png?q=50&fit=crop&w=1280&dpr=1.5",
  },
  {
    _id: 5,
    name: "The Fly (1958)",
    release: 1958,
    cast: [
      {
        name: "Vincent Price",
      },
      {
        name: "David Hedison",
      },
      {
        name: "Patricia Owens",
      },
      {
        name: "Herbert Marshall",
      },
    ],
    director: "Kurt Neumann",
    synopsis:
      "When scientist Andre Delambre (Al Hedison) tests his matter transporter on himself, an errant housefly makes its way into the transportation chamber, and things go horribly wrong. As a result, Delambre's head and arm are now that of the insect. Slowly losing himself to the fly, Delambre turns to his wife, Helene (Patricia Owens), for help. But when tragedy strikes, Delambre's brother (Vincent Price) and Inspector Charas (Herbert Marshall) are forced to pick up the investigation.",
    why_you_should_watch:
      "Even tho it gives off the impression that it's a silly monster flick, there's actually allot of great in taking the premiss seriously, plus it's SciFi Horror :D",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/mgDypzKO5co",
    poster:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRfFWrdgxw9DtFy1Z7Rs258mKG5-SWHLBmRp1qna2G8VJexI2Q",
    background: "http://www.skjam.com/wp-content/uploads/2019/09/Fly.png",
  },
  {
    _id: 6,
    name: "The Fly (1986)",
    release: 1986,
    cast: [
      {
        name: "Jeff Goldblum",
      },
      {
        name: "David Cronenberg",
      },
      {
        name: "Geena Davis",
      },
      {
        name: "Vincent Price",
      },
    ],
    director: "David Cronenberg",
    synopsis:
      "When scientist Seth Brundle (Jeff Goldblum) completes his teleportation device, he decides to test its abilities on himself. Unbeknownst to him, a housefly slips in during the process, leading to a merger of man and insect. Initially, Brundle appears to have undergone a successful teleportation, but the fly's cells begin to take over his body. As he becomes increasingly fly-like, Brundle's girlfriend (Geena Davis) is horrified as the person she once loved deteriorates into a monster.",
    why_you_should_watch:
      "You may be suprised that I'd put the remake in this list along with the original, but it's for sure one of the best remakes of any horror flick. Be prepared for some real nasty body horror and gore lol",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/bdB02IufaW0",
    poster:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQghUc1FQu2yWYV8gY3qSLM6w63azBc7UYjB2sr53N0_ZyiA57v",
    background: "https://media.timeout.com/images/101630201/750/422/image.jpg",
  },
  {
    _id: 7,
    name: "An American Werewolf in London",
    release: 1981,
    cast: [
      {
        name: "David Naughton",
      },
      {
        name: "Griffin Dunne",
      },
      {
        name: "Jenny Agutter",
      },
      {
        name: "John Woodvine",
      },
    ],
    director: "John Landis",
    synopsis:
      "David (David Naughton) and Jack (Griffin Dunne), two American college students, are backpacking through Britain when a large wolf attacks them. David survives with a bite, but Jack is brutally killed. As David heals in the hospital, he's plagued by violent nightmares of his mutilated friend, who warns David that he is becoming a werewolf. When David discovers the horrible truth, he contemplates committing suicide before the next full moon causes him to transform from man to murderous beast.",
    why_you_should_watch:
      "This is hands down the best werewolf movie you can watch, next to The Wolf Man with Lon Chaney Jr.",
    where_to_watch: {
      can_stream: true,
      where: "Peacock",
      link: "https://www.peacocktv.com/",
    },
    trailer: "https://youtu.be/Tfz9AhPnM8c",
    poster:
      "https://m.media-amazon.com/images/I/619De5qUXjL._AC_SY741_.jpg",
    background: "https://cdn.flickeringmyth.com/wp-content/uploads/2021/08/an-american-werewolf-in-london.jpg",
  },
  {
    _id: 8,
    name: "Re-Animator",
    release: 1985,
    cast: [
      {
        name: "Jeffery Combs",
      },
      {
        name: "Bruce Abbott",
      },
      {
        name: "Barbara Crampton",
      },
      {
        name: "David Gale",
      },
    ],
    director: "Stuart Gordon",
    synopsis:
      "Loosely based on H P Lovecraft's classic horror tale, Herbert West is a young scientist who has a good head on his shoulders and another on the lab table in front of him.",
    why_you_should_watch:
      "It's Frankenstein, but in the 80's, and with a FUCKTON of gore!",
    where_to_watch: {
      can_stream: true,
      where: "Tubi",
      link: "https://www.tubitv.com/",
    },
    trailer: "https://youtu.be/zf-5_Je_D80",
    poster:
      "https://m.media-amazon.com/images/I/51baky4PQpL._AC_.jpg",
    background: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fa825aa080f5b7e57070fcfa09166a7cde95a3b588ae4edfc237e951f5076f78._RI_V_TTW_.jpg",
  },
  {
    _id: 9,
    name: "Frankenstein Meets the Wolf Man",
    release: 1943,
    cast: [
      {
        name: "Bela Lugosi",
      },
      {
        name: "Lon Chaney Jr.",
      },
      {
        name: "Maria Ouspenskaya",
      },
      {
        name: "Ilona Massey",
      },
    ],
    director: "Roy William Neill",
    synopsis:
      "Lawrence Stewart Talbot (Lon Chaney Jr.) is plagued by a physical oddity that turns him into a crazed werewolf after sundown. His desire to rid himself of this ailment leads him to the castle owned by mad scientist Dr. Frankenstein. Frankenstein, it turns out, is now dead, yet Talbot believes that the scientist's daughter, Baroness Elsa Frankenstein (Ilona Massey), can help him. However, his quest to right himself puts him on a collision course with Frankenstein's monster (Bela Lugosi).",
    why_you_should_watch:
      "This would be the first, and in my opinion BEST, Versus movie you can watch of the classic Universal monsters",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/_Kaa88LIwJo",
    poster:
      "https://m.media-amazon.com/images/I/51y7q6vSmRL._AC_.jpg",
    background: "https://images.bauerhosting.com/legacy/empire-tmdb/films/3076/images/xJMIt13PPYmNt212GeGHJq03p9i.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
  },
  {
    _id: 10,
    name: "Evil Dead II",
    release: 1987,
    cast: [
      {
        name: "Bruce Campbell",
      },
      {
        name: "Ted Raimi",
      },
      {
        name: "Robert Tapert",
      },
      {
        name: "Dan Hicks",
      },
    ],
    director: "Sam Raimi",
    synopsis:
      "The second of three films in the Evil Dead series is part horror, part comedy, with Ash Williams (Bruce Campbell) once again battling horrifying demons at a secluded cabin in the woods. After discovering an audiotape left by a college professor that contains voices reading from the Book of the Dead, Ash's girlfriend Linda (Denise Bixler) becomes possessed by evil spirits that are awakened by the voices on the tape. Ash soon discovers there is no escaping the woods.",
    why_you_should_watch:
      "I'm telling you dude, this movie, not the first one, is so fucking right up your ally",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/6lM3NPeEG24",
    poster:
      "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/525f9d18c4096628fd4109a134791313_a61abff6-57a9-4700-aa27-3fc52da55e34_500x.jpg?v=1573618825",
    background: "https://m.media-amazon.com/images/M/MV5BZjNhN2JiNTYtOTFhOS00YjlhLThlOWYtNWM1NjEwMTZiNDMwXkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg",
  },
  {
    _id: 11,
    name: "Dead Alive",
    release: 1992,
    cast: [
      {
        name: "Tim Balme",
      },
      {
        name: "Peter Jackson",
      },
      {
        name: "Diana Penalver",
      },
      {
        name: "Elizabeth Moody",
      },
    ],
    director: "Peter Jackson",
    synopsis:
      "Overprotective mother Vera Cosgrove (Elizabeth Moody), spying on her grown son, Lionel (Timothy Balme), as he visits the zoo with the lovely Paquita (Diana Peñalver), is accidentally bitten by the fearsome Sumatran rat-monkey. When the bite turns his beloved mother into a zombie, Lionel tries to keep her locked safely in the basement, but her repeated escapes turn most of the neighbors into the walking dead, who then crash a high-society party thrown by Lionel's boorish Uncle Les (Ian Watkin).",
    why_you_should_watch:
      "You have never seen anything as gory as this, trust me...",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/O8LIug1cP04",
    poster:
      "https://cdn10.bigcommerce.com/s-yhxhf/products/22865/images/88384/HMOV095_4X5_PREVIEW__51020.1570945608.1080.1080.jpg?c=2",
    background: "https://www.themoviedb.org/t/p/w780/te7PK3CrO7SWeNaiGfswWqpM4eH.jpg",
  },
  {
    _id: 12,
    name: "CREEPSHOW",
    release: 1982,
    cast: [
      {
        name: "Adrienne Barbeau",
      },
      {
        name: "Stephen King",
      },
      {
        name: "Tom Savini",
      },
      {
        name: "Leslie Nielsen",
      },
    ],
    director: "George A. Romero",
    synopsis:
      "A compendium of five short but terrifying tales contained within a single full-length feature, this film conjures scares from traditional bogeymen and portents of doom. In one story, a monster escapes from its holding cell. Another focuses on a husband (Leslie Nielsen) with a creative way of getting back at his cheating wife. Other stories concern a rural man (Stephen King) and a visitor from outer space, and a homeowner (E.G. Marshall) with huge bug problems and a boozing corpse.",
    why_you_should_watch:
      "This anthology series is peak horror, it's directed by George Romero, written by Stephen King, what more could you ask for!",
    where_to_watch: {
      can_stream: false,
      where: null,
      link: null,
    },
    trailer: "https://youtu.be/owdnnaNs2RI",
    poster:
      "https://m.media-amazon.com/images/I/A1mwzleRP5L._AC_SY741_.jpg",
    background: "https://bloody-disgusting.com/wp-content/uploads/2020/09/creepshow-animated.png",
  },
];

export default movies;
