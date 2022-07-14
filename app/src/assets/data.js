const movies = [
  {
    _id: "1",
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
    _id: "2",
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
    _id: "3",
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
    _id: "4",
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
    _id: "5",
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
    _id: "6",
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
    _id: "7",
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
];

export default movies;
