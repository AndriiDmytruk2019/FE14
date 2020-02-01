/*Для хардкода масива*/
// let blogList = [
//     {
//         number: 0,
//         userPublicated: 'Andrii Dmytruk',
//         topic: 'Sport',
// 		image: '../img/coby.jpg',
//         title: 'America mourns Kobe Bryant after death in helicopter crash.',
//         time: '2019-02-6 00:20:18',
//         like: 0,
//         coments: [{
//             id: 0,
//             user: 'Albert',
//			   'timePublic': '2020-11-1 11:24:41',
//             page: 'Very sorry!'
//         }],
//         page: `Bryant, 41, was one of the most famous athletes in America. 
// 		        When his death was confirmed on Sunday, television broadcasts were interrupted for breaking news bulletins.
// 		        Seven others died in the crash, including a well-known California college baseball coach, John Altobelli, and his wife and daughter, Keri and Alyssa.
// 				California authorities did not immediately confirm the identities of the victims but friends and family members said Gianna’s basketball coach, Christina Mauser, and Ara Zobayan, the aircraft’s pilot, also died.
// 		 		The other two victims were identified as Sarah Chester and her daughter Peyton, a team-mate of Gianna.
// 				The National Transportation Safety Board was investigating the crash, which occurred in foggy conditions on Sunday morning, 30 miles north-west of downtown Los Angeles. The medical examiner said it could take days to recover the remains of the victims due to the rugged terrain at the crash site.
// 				`
//     },
//     {   
//         number: 1,
//         userPublicated: 'Oleg',
//         topic: 'Sport',
//         image: '../img/barty.jpg',
//         title: 'Ashleigh Barty on course for Australian Open summit with Simona Halep',
//         time: '2019-12-21 00:20:18',
//         like: 0,
//         coments: [],
//         page: `If Ashleigh Barty is to become the first Australian to win the women’s title since Christine O’Neill 42 years ago, she more than likely will have to beat Simona Halep, the only player in either draw yet to lose a set this fortnight.
// 				Barty’s first challenge is in the second semi-final on Thursday, when she plays the vibrant American world No 14, Sofia Kenin, who was too strong for the Tunisian, Ons Jabeur, in her quarter-final on Tuesday, winning in straight sets in an hour-and-a-half.
// 				But Halep has hit an altogether more frightening level of excellence from day one. 
// 				Twice in her life she has flirted with what passes for perfection in tennis.
// 				The first time was last summer in the final at Wimbledon when she embarrassed the greatest player of all time, Serena Williams, in 56 minutes.
// 				She allowed the owner of 23 majors just four games that afternoon.
// 				`
//     },
//     {
//         number: 2,
//         userPublicated: 'Isaak',
//         topic: 'Travelling',
//         image: '../img/passport.jpg',
//         title: `A Woman Flew From London to Berlin Using Her Baby's Passport and No One Noticed'`,
//         time: '2019-11-28 01:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		You never know how important your passport is until you need it the most.
// 				According to the Daily Star, a London woman flew all the way from London Luton Airport to Berlin on an Easyjet flight before realizing she was traveling on her baby son’s passport. She even had it scanned at security before her flight, but no one caught it.
// 				Masters student Lenesha Riley was heading to Berlin with her mother and friend for a short weekend getaway, according to the Daily Mail. The passport she was traveling with was scanned at her departure gate, and Riley was allowed through without any problems.
// 				It wasn’t until she arrived at security in the Berlin airport that she noticed she actually had her son, Josiah’s, passport in her hands.
// 				“When it was time to board the plane, the passport was scanned and the lady just gave it back to me,” Riley told the Daily Mail. “I got to Berlin and had the passport out for security, and that's when I realized. It felt like my heart sank to my toes and I thought, 'Oh my god.”
// 			`
//     },
//     {
//         number: 3,
//         userPublicated: 'Leonid',
//         topic: 'Travelling',
//         image: '../img/corona.jpg',
//         title: 'This Map Shows Where the Coronavirus Is Spreading in Real Time',
//         time: '2018-10-14 01:20:18',
//         like: 0,
//         coments: [],
//         page: `
// 		        The coronavirus, which causes flu-like symptoms as well as pneumonia, is spreading fast.
// 		        So fast, in fact, that scientists at Johns Hopkins University felt that it was important to track just where the virus exists with a real-time map that’s now available to the public.
// 				"We built this dashboard because we think it is important for the public to have an understanding of the outbreak situation as it unfolds with transparent data sources," Lauren Gardner, a civil engineering professor and co-director for Center for Systems Science and Engineering, said of the map in a statement. "For the research community, this data will become more valuable as we continue to collect it over time."
// 			`
//     },
//     {
//         number: 4,
//         userPublicated: 'Albert Petrov',
//         topic: 'Kitchen',
//         image: '../img/radar.jpg',
//         title: 'RADAR at Maison&Objet',
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		The coffee table and wall lamps in the Solco line, which are characterised by a highly original use of Carrara marble, will be exhibited in the What’s new section in Hall 4.
//         		The exhibition is curated by Elizabeth Leriche, François Bernarde and François Delclaux and collects the most interesting new products of the recent past, all selected according to criteria of aesthetical innovation and know-how in the workmanship of the materials.
//         		The Solco collection, with its thin stone surfaces carved with a wave pattern that was hand-drawn by RADAR’s designers with sinuous lines in relief, acquires a dynamic, light, and poetic overall appearance as it is transformed into a tactile surface, which is classic and contemporary at once.
//         	`
//     },
//         {
//         number: 5,
//         userPublicated: 'Leonid',
//         topic: 'Kitchen',
//         image: '../img/nature.jpg',
//         title: 'Nature’s Bounty',
//         time: '2018-10-14 01:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		A walk through the woods, a stroll by the sea or a hike in the mountains each trigger a spiritual calm. That disconnect from daily stress is achieved through a connection with nature, the deep breathing of fresh air and the visual play of an abundance of color.
// 				More than ever, homeowners are seeking to bring the colors of the outdoors home with them, carefully choosing earth-inspired hues for cabinets, walls, countertops and more to help them retain the feeling of well-being that goes with being in nature.
// 				Whether opting for neutral tones or bright pops, color choices for 2020 and beyond are all about what’s real.
// 			`
//     },
//     {
//         number: 6,
//         userPublicated: 'Petrov',
//         topic: 'IT news',
//         image: '../img/amda.jpg',
//         title: 'SAVE MONEY ON YOUR ELECTRIC BILL & SUPPORT CLEAN ENERGY WITH ARCADIA',
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		Sustainable energy farms generate far more power than ever before, and yet, most homeowners have no idea how to switch to renewable sources. If you’re interested in powering your home with clean energy, you don’t have to buy expensive solar panels or switch utility companies. In fact, if you can even save money by switching to renewable energy with Arcadia. 
// 				Arcadia is a platform that makes it easy for renters and homeowners to support green energy. All you need to do is create an account with Arcadia and connect your utility bill. Arcadia will power your home by locating clean energy farms near you. Additionally, if the energy farm in your area produces clean energy at a cheaper rate, you’ll save money on your monthly power bill. 
// 				Anyone who pays a utility bill can sign up today for Arcadia. Find out how Arcadia can save you money by switching to renewable energy, and earn a $20 Amazon gift card just by signing up. 
// 				This story, "Save money on your electric bill & support clean energy with Arcadia " was originally published by Macworld.
// 			`
//     },
//     {
//         number: 7,
//         userPublicated: 'Damir',
//         topic: 'IT news',
//         image: '../img/it.jpg',
//         title: 'BEST TRUE WIRELESS EARBUDS: FREE YOURSELF FROM THE TYRANNY OF CORDS',
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		Earbud makers have been busy doing away with wires—a good thing whether or not your phone still has a headset jack. You no longer have to deal with cords if you don’t want to. True wireless earbuds connect to one another and your audio source via Bluetooth.
// 		        No wires mean no inline microphones or controls, but truly wireless earbuds sound just as good as traditional Bluetooth counterparts (for better or worse). They also boast all of the features we’ve come to expect from earbuds designed to work with your smartphone, tablet, or PC.
// 				Since Apple’s AirPods became a runaway hit, an endless stream of companies have rolled out their own true wireless earbuds and earphones. As you might expect, not all of them are worth your time or money—so we’ve got your back with buying suggestions to meet a wide variety of needs.
// 			`
//     },
//     {
//         number: 8,
//         userPublicated: 'Albert Petrov',
//         topic: 'Music',
//         image: '../img/awards.jpg',
//         title: 'New Hair, Who Dis? 9 Times Latin Urban Artists Surprised Fans With a Mane Makeover',
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
// 		        Maluma poses in the press room during the 19th annual Latin Grammy Awards at MGM Grand Garden Arena on Nov. 15, 2018 in Las Vegas.
// 				Earlier this week, Anuel AA revealed his new haircut, chopping off his signature bangs and opting for a fresh buzz cut.
// 				Though the new look is fitting, many of his fans were in total disbelief.
// 				But the Puerto Rican trap star is not the only urban act to surprise fans with a mane makeover. From J Balvin to Jon Z, check out nine transformations below.
// 				ANUEL AA
// 				With his eyes shut and utensils in hand ahead of dinner, the “China” singer repeatedly prayed to God to please make his hair grow.
// 			`
//     },
//     {
//         number: 9,
//         userPublicated: 'Albert Petrov',
//         topic: 'Music',
//         image: '../img/bieber.jpg',
//         title: `'Bieber Is Back': Watch Episode 2 of Justin Bieber's 'Seasons' Docuseries Now`,
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		Kendall Jenner makes a brief cameo in the latest ep.
// 				Drumroll, please! Justin Bieber is back with episode 2 of Seasons, his 10-part YouTube docuseries, released Wednesday (Jan. 29) for non-YouTube Premium subscribers to watch.
// 				The global superstar taps on the drums and taps into the months-long recording process of Changes, his fifth studio album due Valentine's Day. 
// 				Josh Gudwin, Bieber's longtime producer/mixer/engineer, is an integral part of the process, and in this episode, he explains their fastidious routine.
// 				"Josh is kind of the recording sherpa," Allison Kaye, part of the "Yummy" singer's management team, says during the clip. "Josh is really the only one in the room, cutting him and vocal producing him and helping him pick the songs. Josh is a very integral part of Justin making music and has been since the beginning. There isn't an album Justin has worked on that Josh hasn't been a part of with him."
// 			`
//     },
//     {
//         number: 10,
//         userPublicated: 'Albert Petrov',
//         topic: 'News',
//         image: '../img/britons.jpg',
//         title: 'The Britons getting out before Brexit ‘drawbridge’ goes up',
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
//         		Sue Wilson, the founder of campaign group Bremain in Spain, says now that Brexit is “concrete and is happening” they are seeing evidence of Britons “expediting their plans” for retirement or a career move to Spain.
// 				Under the withdrawal agreement British nationals can settle in another EU member state right up to 31 December and claim lifetime rights as EU citizens.
// 				“We have people inquiring what the rules are and we are saying to people that as long as they move before 31 December they will have the same rights as those of us who are already here.
// 				It is in the withdrawal agreement,” says Wilson.
// 				“Even if you haven’t reached pension age and you have paid in for enough years to make you eligible you will have the right to an uprated pension for life under the withdrawal agreement.”
// 				Not all rights are guaranteed and the campaign group British in Europe has urged Brussels and London to secure those that have yet to be negotiated, which include freedom of movement and the right to return to the UK with an EU family member after Brexit. 
// 				But the rights to study, work and retire remain for those moving before 2021.
// 			`
//     },
//     {
//         number: 11,
//         userPublicated: 'Albert Petrov',
//         topic: 'News',
//         image: '../img/colbert.jpg',
//         title: `Emotional Stephen Colbert tells of family plane tragedy after Kobe Bryant's death`,
//         time: '2019-03-31 02:20:18',
//         like: 0,
//         coments: [],
//         page: `
// 	        	Stephen Colbert
// 				After taking Monday off, Stephen Colbert reflected on the death of Kobe Bryant on Tuesday night’s Late Show. The NBA legend died at 41 in a helicopter crash with his 13-year-old daughter and seven friends on Sunday, and though Colbert never met him, he said he felt “a strange connection” to this particular type of tragedy: when he was 10, Colbert’s father and two older brothers died in a plane crash that was also in heavy fog. “One of the terrible things about that shock, and the heartbreaking … unreality … nightmare quality of someone huge in your life who just disappears is not knowing what happened,” he said.
// 				Unlike a plane, Colbert continued, helicopters don’t have on-board flight recorders – so-called “black boxes” – which can aid investigations. The plane carrying his father and brothers had a flight recorder, “and because investigators knew what happened in that cockpit, new rules were created to save other people’s lives”.
// 			`
//     },
// ];
// localStorage.clear();
// localStorage.setItem('LogOn', JSON.stringify('Admin'));
// localStorage.setItem('blogList', JSON.stringify(blogList));

let blogList = JSON.parse(localStorage.getItem('blogList'));