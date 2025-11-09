// ===================================
// Article Data with Tags
// ===================================

const articles = [
    {
        url: "https://www.scratchcards.online/blog/biggest-wins-online-gambling/",
        title: "The Biggest Wins in Online Gambling",
        domain: "scratchcards.online",
        tags: ["gaming"]
    },
    {
        url: "https://bigjarnews.com/festival-outfits-for-men-this-summer/",
        title: "Festival Outfits for Men This Summer",
        domain: "bigjarnews.com",
        tags: ["fashion"]
    },
    {
        url: "https://voiceofaction.org/people-dress-more-daringly",
        title: "Why People Dress More Daringly",
        domain: "voiceofaction.org",
        tags: ["fashion"]
    },
    {
        url: "https://beststartup.eu/technology-being-used-to-analyse-statistics-within-the-nba-and-the-finals/",
        title: "Technology Being Used to Analyse Statistics Within the NBA",
        domain: "beststartup.eu",
        tags: ["sports", "technology"]
    },
    {
        url: "https://beststartup.ca/start-up-technology-that-could-change-the-future-of-the-nba/",
        title: "Start-Up Technology That Could Change the Future of the NBA",
        domain: "beststartup.ca",
        tags: ["sports", "technology"]
    },
    {
        url: "https://www.coachesdatabase.com/currently-best-coaches-in-nba/",
        title: "Currently Best Coaches in NBA",
        domain: "coachesdatabase.com",
        tags: ["sports"]
    },
    {
        url: "https://bramclassauto.com/the-1964-pontiac-gto-the-ultimate-classic-car",
        title: "The 1964 Pontiac GTO: The Ultimate Classic Car",
        domain: "bramclassauto.com",
        tags: ["automotive"]
    },
    {
        url: "https://small-screen.co.uk/film-stars-who-love-the-casino/",
        title: "Film Stars Who Love the Casino",
        domain: "small-screen.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://thetecheducation.com/the-best-poker-players-of-all-time/",
        title: "The Best Poker Players of All Time",
        domain: "thetecheducation.com",
        tags: ["gaming"]
    },
    {
        url: "https://justwebworld.com/what-damage-is-the-summer-heat-likely-to-cause-to-your-vehicle/",
        title: "What Damage is Summer Heat Likely to Cause to Your Vehicle",
        domain: "justwebworld.com",
        tags: ["automotive"]
    },
    {
        url: "https://bestsellingcarsblog.com/2023/05/media-post-review-of-the-2023-citroen-c5-aircross/",
        title: "Review of the 2023 Citroen C5 Aircross",
        domain: "bestsellingcarsblog.com",
        tags: ["automotive"]
    },
    {
        url: "https://www.grandprix247.com/2023/05/24/why-did-albon-crash-at-the-2023-australian-grand-prix-f1/",
        title: "Why Did Albon Crash at the 2023 Australian Grand Prix",
        domain: "grandprix247.com",
        tags: ["sports", "automotive"]
    },
    {
        url: "https://footballtripper.com/blog/vegas-30th-mls-franchise/",
        title: "Vegas as the 30th MLS Franchise",
        domain: "footballtripper.com",
        tags: ["sports"]
    },
    {
        url: "https://qnnit.com/the-biggest-esports-teams-in-the-world/",
        title: "The Biggest Esports Teams in the World",
        domain: "qnnit.com",
        tags: ["gaming", "sports"]
    },
    {
        url: "https://vlaurie.com/difference-millennial-and-gen-z-fashion/",
        title: "Difference Between Millennial and Gen Z Fashion",
        domain: "vlaurie.com",
        tags: ["fashion"]
    },
    {
        url: "https://thegameofnerds.com/2023/09/04/the-rise-of-online-entertainment/",
        title: "The Rise of Online Entertainment",
        domain: "thegameofnerds.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://www.nerdly.co.uk/2023/08/17/top-5-gambling-podcasts/",
        title: "Top 5 Gambling Podcasts",
        domain: "nerdly.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://itsportshub.com/when-athletes-are-in-love-with-gaming-world/",
        title: "When Athletes Are in Love with Gaming World",
        domain: "itsportshub.com",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://www.romaniajournal.ro/business/gaming-in-romania/",
        title: "Gaming in Romania",
        domain: "romaniajournal.ro",
        tags: ["gaming", "business"]
    },
    {
        url: "https://techpanga.com/the-technology-powering-online-games-2023/",
        title: "The Technology Powering Online Games",
        domain: "techpanga.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://bullocksbuzz.com/6-of-the-best-girls-night-in-activities/",
        title: "6 of the Best Girls Night In Activities",
        domain: "bullocksbuzz.com",
        tags: ["fashion"]
    },
    {
        url: "https://ultras-tifo.net/news/7471-the-most-popular-games-with-football-fans.html",
        title: "The Most Popular Games with Football Fans",
        domain: "ultras-tifo.net",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://techstory.in/the-best-tech-to-use-while-you-game/",
        title: "The Best Tech to Use While You Game",
        domain: "techstory.in",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://lookwhatmomfound.com/2023/12/the-perfect-weekend-trips-for-mom-and-dad.html",
        title: "The Perfect Weekend Trips for Mom and Dad",
        domain: "lookwhatmomfound.com",
        tags: ["fashion"]
    },
    {
        url: "https://portugoal.net/portuguese-abroad/3584-premier-leagues-best-portuguese-talent",
        title: "Premier League's Best Portuguese Talent",
        domain: "portugoal.net",
        tags: ["sports"]
    },
    {
        url: "https://chimpreports.com/top-5-strategies-for-megaways-slots/",
        title: "Top 5 Strategies for Megaways Slots",
        domain: "chimpreports.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.tekedia.com/the-skills-you-can-develop-while-casino-slot-gaming/",
        title: "The Skills You Can Develop While Casino Slot Gaming",
        domain: "tekedia.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.tmcnet.com/topics/articles/2024/09/11/460664-best-mobile-apps-gaming.htm",
        title: "Best Mobile Apps for Gaming",
        domain: "tmcnet.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://pasoroblesdailynews.com/the-best-tips-for-improving-your-casino-gaming/197034/",
        title: "The Best Tips for Improving Your Casino Gaming",
        domain: "pasoroblesdailynews.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.theamericanreporter.com/strategies-that-are-helping-businesses-flourish/",
        title: "Strategies That Are Helping Businesses Flourish",
        domain: "theamericanreporter.com",
        tags: ["business"]
    },
    {
        url: "https://www.netnewsledger.com/2024/04/18/business-basics-to-remember-when-starting-up/",
        title: "Business Basics to Remember When Starting Up",
        domain: "netnewsledger.com",
        tags: ["business"]
    },
    {
        url: "https://www.highstuff.com/jean-styles/",
        title: "Top 5 Different Jean Styles in 2024",
        domain: "highstuff.com",
        tags: ["fashion"]
    },
    {
        url: "https://techstory.in/the-cyber-security-landscape-in-2024/",
        title: "The Cyber Security Landscape in 2024",
        domain: "techstory.in",
        tags: ["cybersecurity", "technology"]
    },
    {
        url: "https://techjournal.org/rise-of-ransomware-attacks",
        title: "Rise of Ransomware Attacks",
        domain: "techjournal.org",
        tags: ["cybersecurity"]
    },
    {
        url: "https://spacecoastdaily.com/2024/05/the-role-of-ai-in-cyber-security/",
        title: "The Role of AI in Cyber Security",
        domain: "spacecoastdaily.com",
        tags: ["cybersecurity", "technology"]
    },
    {
        url: "https://insightssuccess.com/cyber-security-in-the-healthcare-industry/",
        title: "Cyber Security in the Healthcare Industry",
        domain: "insightssuccess.com",
        tags: ["cybersecurity", "business"]
    },
    {
        url: "https://roboticsandautomationnews.com/2024/06/28/the-advantages-of-a-metal-buildings-in-construction/83934/",
        title: "The Advantages of Metal Buildings in Construction",
        domain: "roboticsandautomationnews.com",
        tags: ["business"]
    },
    {
        url: "https://homebusinessmag.com/businesses/real-estate/look-for-new-property-2024/",
        title: "How to Look for New Property in 2024",
        domain: "homebusinessmag.com",
        tags: ["business"]
    },
    {
        url: "https://www.europeanfinancialreview.com/6-ways-to-earn-extra-money-using-your-car/",
        title: "6 Ways to Earn Extra Money Using Your Car",
        domain: "europeanfinancialreview.com",
        tags: ["business", "automotive"]
    },
    {
        url: "https://www.grandprix247.com/2024/06/18/car-enhancements-all-racer-fans-can-afford/",
        title: "Car Enhancements All Racer Fans Can Afford",
        domain: "grandprix247.com",
        tags: ["automotive", "sports"]
    },
    {
        url: "https://www.autoserviceworld.com/budgeting-how-to-afford-your-dream-car/",
        title: "Budgeting: How to Afford Your Dream Car",
        domain: "autoserviceworld.com",
        tags: ["automotive"]
    },
    {
        url: "https://moneymade.io/learn/article/the-ultimate-learning-site-that-is-making-people-money",
        title: "The Ultimate Learning Site That is Making People Money",
        domain: "moneymade.io",
        tags: ["business"]
    },
    {
        url: "http://okmagazine.com/p/the-weird-wonderful-ways-heavy-metal-stars-are-celebrated/",
        title: "The Weird Wonderful Ways Heavy Metal Stars Are Celebrated",
        domain: "okmagazine.com",
        tags: ["fashion"]
    },
    {
        url: "https://autogpt.net/generative-ai-and-game-design-is-this-the-future-for-developers/",
        title: "Generative AI and Game Design: Is This the Future for Developers?",
        domain: "autogpt.net",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://nordvpn.com/blog/safest-way-to-pay-online/",
        title: "What are the Safest Ways to Pay Online?",
        domain: "nordvpn.com",
        tags: ["cybersecurity", "technology"]
    },
    {
        url: "https://speedwaydigest.com/index.php/news/racing-news/83068-the-best-games-for-f1-fans-during-the-off-season/",
        title: "The Best Games for F1 Fans During the Off Season",
        domain: "speedwaydigest.com",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://brulosophy.com/blogs/how-to-host-a-thrilling-casino-night-top-tips-for-an-unforgettable-event/",
        title: "How to Host a Thrilling Casino Night",
        domain: "brulosophy.com",
        tags: ["gaming"]
    },
    {
        url: "https://vacay.ca/2025/02/how-to-spend-an-evening-in-toronto/",
        title: "How to Spend an Evening in Toronto",
        domain: "vacay.ca",
        tags: ["fashion"]
    },
    {
        url: "https://theyucatantimes.com/2025/02/features-of-a-good-casino-site/",
        title: "Features of a Good Casino Site",
        domain: "theyucatantimes.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://www.netnewsledger.com/2024/07/18/technological-innovations-in-the-canadian-gambling-industry/",
        title: "Technological Innovations in the Canadian Gambling Industry",
        domain: "netnewsledger.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://iemlabs.com/blogs/top-10-worlds-best-game-in-mobile-you-must-play-in-2023/",
        title: "Top 10 World's Best Mobile Games You Must Play",
        domain: "iemlabs.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://drinkinggamezone.com/advanced/the-experience-from-live-roulette/",
        title: "The Experience from Live Roulette",
        domain: "drinkinggamezone.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.thespread.com/betting-articles/guide-to-picking-the-right-casino-game-for-you/",
        title: "Guide to Picking the Right Casino Game for You",
        domain: "thespread.com",
        tags: ["gaming"]
    },
    {
        url: "https://indiepulsemusic.com/2024/10/05/artists-who-are-headlining-in-las-vegas/",
        title: "Artists Who Are Headlining in Las Vegas",
        domain: "indiepulsemusic.com",
        tags: ["gaming"]
    },
    {
        url: "https://machash.com/special/378203/apps-2024-utilise-iphone-to-fullest-potential/",
        title: "Apps 2024: Utilise iPhone to Fullest Potential",
        domain: "machash.com",
        tags: ["technology"]
    },
    {
        url: "https://johnnyafrica.com/best-gambling-experiences-across-the-world/",
        title: "Best Gambling Experiences Across the World",
        domain: "johnnyafrica.com",
        tags: ["gaming"]
    },
    {
        url: "https://goombastomp.com/discover-the-joys-of-seasonal-themed-mobile-games/",
        title: "Discover the Joys of Seasonal Themed Mobile Games",
        domain: "goombastomp.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://gilaherald.com/10-gaming-tips-and-tricks/",
        title: "10 Gaming Tips and Tricks",
        domain: "gilaherald.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.supanet.com/the-latest-gaming-technology-that-people-can-look-forward-to-a28566.html",
        title: "The Latest Gaming Technology That People Can Look Forward To",
        domain: "supanet.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://www.mansionbet.com/blog/sports/horse-racing/cheltenham-festival/cheltenhams-most-famous-gold-cup-winners/",
        title: "Cheltenham's Most Famous Gold Cup Winners",
        domain: "mansionbet.com",
        tags: ["sports"]
    },
    {
        url: "https://playnodeposit.com/no-deposit-bonus/free-chips-no-deposit/",
        title: "Free Chips No Deposit Guide",
        domain: "playnodeposit.com",
        tags: ["gaming"]
    },
    {
        url: "https://musconv.com/the-role-of-music-at-casinos/",
        title: "The Role of Music at Casinos",
        domain: "musconv.com",
        tags: ["gaming"]
    },
    {
        url: "https://houseofcoco.net/the-best-gaming-setups-in-2024/",
        title: "The Best Gaming Setups in 2024",
        domain: "houseofcoco.net",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://celebmix.com/why-gaming-is-so-popular-with-celebs/",
        title: "Why Gaming is So Popular with Celebs",
        domain: "celebmix.com",
        tags: ["gaming"]
    },
    {
        url: "https://newsdipper.co.uk/managing-poker-and-life-balance",
        title: "Managing Poker and Life Balance",
        domain: "newsdipper.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://autogpt.net/artificial-intelligence-and-big-data/",
        title: "Artificial Intelligence and Big Data",
        domain: "autogpt.net",
        tags: ["technology"]
    },
    {
        url: "https://www.scousenotenglish.com/poker-in-liverpool-your-favourite-options/",
        title: "Poker in Liverpool: Your Favourite Options",
        domain: "scousenotenglish.com",
        tags: ["gaming"]
    },
    {
        url: "https://midlandsbusinessnews.co.uk/running-an-online-business-what-you-can-learn-from-bigger-companies/",
        title: "Running an Online Business: What You Can Learn from Bigger Companies",
        domain: "midlandsbusinessnews.co.uk",
        tags: ["business"]
    },
    {
        url: "https://www.goal.com/en-gb/betting/each-way-betting-sites/blt844bedbb33b3c298",
        title: "Each Way Betting Sites Guide",
        domain: "goal.com",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://www.heyuguys.com/bingo-in-tv-shows-and-movies/",
        title: "Bingo in TV Shows and Movies",
        domain: "heyuguys.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.theupcoming.co.uk/2025/07/16/the-games-influenced-by-films-and-tv/",
        title: "The Games Influenced by Films and TV",
        domain: "theupcoming.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.flavourmag.co.uk/the-evolution-of-online-bingo-gaming/",
        title: "The Evolution of Online Bingo Gaming",
        domain: "flavourmag.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://gadgetlite.com/2025/07/how-to-be-an-efficient-roulette-player/",
        title: "How to Be an Efficient Roulette Player",
        domain: "gadgetlite.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.shemightbeloved.com/fashion-for-nightlife-events-with-friends/",
        title: "Fashion for Nightlife Events with Friends",
        domain: "shemightbeloved.com",
        tags: ["fashion"]
    },
    {
        url: "https://syracusenewtimes.com/casino-bonuses-and-how-to-implement-them/",
        title: "Casino Bonuses and How to Implement Them",
        domain: "syracusenewtimes.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.moviemaker.com/the-greatest-films-located-in-las-vegas/",
        title: "The Greatest Films Located in Las Vegas",
        domain: "moviemaker.com",
        tags: ["gaming"]
    },
    {
        url: "https://pierreblake.com/how-to-play-online-slots-when-travelling/",
        title: "How to Play Online Slots When Travelling",
        domain: "pierreblake.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.rugby-addict.com/en/article/home/best-rugby-video-gaming-titles-of-all-time/68af80bb9c7e1e335a055122",
        title: "Best Rugby Video Gaming Titles of All Time",
        domain: "rugby-addict.com",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://www.speakrj.com/top-tips-for-better-games-play/",
        title: "Top Tips for Better Games Play",
        domain: "speakrj.com",
        tags: ["gaming"]
    },
    {
        url: "http://e-architect.com/articles/the-architectural-influence-on-gaming-environments",
        title: "The Architectural Influence on Gaming Environments",
        domain: "e-architect.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.planetsport.com/horse-racing/feature/the-top-horse-trainers-in-uk-and-ireland",
        title: "The Top Horse Trainers in UK and Ireland",
        domain: "planetsport.com",
        tags: ["sports"]
    },
    {
        url: "https://businesscloud.co.uk/news/getting-to-terms-with-the-benefits-of-modern-online-gaming/",
        title: "Getting to Terms with the Benefits of Modern Online Gaming",
        domain: "businesscloud.co.uk",
        tags: ["gaming", "business"]
    },
    {
        url: "https://www.zimbabwesituation.com/news/online-casinos-how-to-pick-the-perfect-themed-slots-2/",
        title: "Online Casinos: How to Pick the Perfect Themed Slots",
        domain: "zimbabwesituation.com",
        tags: ["gaming"]
    },
    {
        url: "https://heckhome.com/transform-your-spare-bedroom-top-10-tips-for-creating-a-gaming-space/",
        title: "Transform Your Spare Bedroom: Top 10 Tips for Creating a Gaming Space",
        domain: "heckhome.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.spin.com/2023/11/famous-music-artists-and-songs-themed-slot-games/",
        title: "Famous Music Artists and Songs Themed Slot Games",
        domain: "spin.com",
        tags: ["gaming"]
    },
    {
        url: "https://yolted.com/news/what-makes-a-good-slot-game",
        title: "What Makes a Good Slot Game",
        domain: "yolted.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.topplanetinfo.com/best-experience-while-playing-live-casino-online/",
        title: "Best Experience While Playing Live Casino Online",
        domain: "topplanetinfo.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.marshmallowchallenge.com/blog/gaming-in-india-emerging-trends-and-future-prospects/",
        title: "Gaming in India: Emerging Trends and Future Prospects",
        domain: "marshmallowchallenge.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.gamebyte.com/fitness-gaming-a-new-era-in-interactive-exercise/",
        title: "Fitness Gaming: A New Era in Interactive Exercise",
        domain: "gamebyte.com",
        tags: ["gaming"]
    },
    {
        url: "https://nordlayer.com/blog/cybersecurity-in-gaming-industry/",
        title: "Cybersecurity in Gaming Industry",
        domain: "nordlayer.com",
        tags: ["gaming", "cybersecurity"]
    },
    {
        url: "https://norsecorp.net/cybersecurity-in-the-gaming-industry/",
        title: "Cybersecurity in the Gaming Industry",
        domain: "norsecorp.net",
        tags: ["gaming", "cybersecurity"]
    },
    {
        url: "https://www.igamingtoday.com/spain-igaming-market-research-report/",
        title: "Spain iGaming Market Research Report",
        domain: "igamingtoday.com",
        tags: ["gaming", "business"]
    },
    {
        url: "https://www.therugbypaper.co.uk/guest-blogs/383838/exploring-the-world-of-online-slots-with-netent/",
        title: "Exploring the World of Online Slots with NetEnt",
        domain: "therugbypaper.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.romaniajournal.ro/sports/how-to-get-started-with-casino-slots/",
        title: "How to Get Started with Casino Slots",
        domain: "romaniajournal.ro",
        tags: ["gaming"]
    },
    {
        url: "https://www.advanced-television.com/2025/06/18/the-relationship-between-tv-and-casinos/",
        title: "The Relationship Between TV and Casinos",
        domain: "advanced-television.com",
        tags: ["gaming"]
    },
    {
        url: "https://highstakesdb.com/news/popular/the-top-slot-games-to-try-out-in-2024",
        title: "The Top Slot Games to Try Out in 2024",
        domain: "highstakesdb.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.starburstmagazine.com/features/the-poker-face-how-movies-can-teach-you-to-read-your-opponents/",
        title: "The Poker Face: How Movies Can Teach You to Read Your Opponents",
        domain: "starburstmagazine.com",
        tags: ["gaming"]
    },
    {
        url: "https://havokjournal.com/entertainment/online-gaming/advanced-online-poker-strategies-for-taking-your-game-to-the-next-level/",
        title: "Advanced Online Poker Strategies for Taking Your Game to the Next Level",
        domain: "havokjournal.com",
        tags: ["gaming"]
    },
    {
        url: "https://golfnews.co.uk/other-news/the-must-watch-golf-tournaments-this-summer/",
        title: "The Must-Watch Golf Tournaments This Summer",
        domain: "golfnews.co.uk",
        tags: ["sports"]
    },
    {
        url: "https://www.advanced-television.com/2025/03/11/common-myths-about-casinos-and-gambling/",
        title: "Common Myths About Casinos and Gambling",
        domain: "advanced-television.com",
        tags: ["gaming"]
    },
    {
        url: "https://theenterpriseworld.com/game-of-online-slots/",
        title: "Game of Online Slots",
        domain: "theenterpriseworld.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.mklibrary.com/the-casino-games-to-try-out-in-2025/",
        title: "The Casino Games to Try Out in 2025",
        domain: "mklibrary.com",
        tags: ["gaming"]
    },
    {
        url: "https://homebusinessmag.com/management/legalese/navigating-legal-aspects-running-small-business/",
        title: "Navigating Legal Aspects of Running a Small Business",
        domain: "homebusinessmag.com",
        tags: ["business"]
    },
    {
        url: "https://metapress-com.bibliotheek.ehb.be/how-technology-is-driving-the-gaming-market/",
        title: "How Technology is Driving the Gaming Market",
        domain: "metapress.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://www.wikitechy.com/technology/the-best-slot-games-of-2023/",
        title: "The Best Slot Games of 2023",
        domain: "wikitechy.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://filmthreat.com/features/what-makes-a-great-slot-scene-in-movies/",
        title: "What Makes a Great Slot Scene in Movies",
        domain: "filmthreat.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.totallydublin.ie/more/the-most-popular-themed-games-in-ireland/",
        title: "The Most Popular Themed Games in Ireland",
        domain: "totallydublin.ie",
        tags: ["gaming"]
    },
    {
        url: "https://savedelete.com/article/the-experience-that-players-can-expect-while-playing-mobile-slots/",
        title: "The Experience That Players Can Expect While Playing Mobile Slots",
        domain: "savedelete.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://vegas777game.com/best-roulette-to-play/",
        title: "Best Roulette to Play",
        domain: "vegas777game.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.insidermonkey.com/blog/the-best-bingo-halls-to-visit-around-the-world-1346369/",
        title: "The Best Bingo Halls to Visit Around the World",
        domain: "insidermonkey.com",
        tags: ["gaming"]
    },
    {
        url: "https://uk.pinterest.com/pin/the-top-everyday-skills-that-people-can-develop-while-gaming--250231323041732247/",
        title: "The Top Everyday Skills That People Can Develop While Gaming",
        domain: "pinterest.com",
        tags: ["gaming"]
    },
    {
        url: "https://radiotoday.co.uk/2024/06/the-best-gaming-radio-shows-people-should-listen-too/",
        title: "The Best Gaming Radio Shows People Should Listen To",
        domain: "radiotoday.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://drifttravel.com/the-best-gaming-cities-around-the-world/",
        title: "The Best Gaming Cities Around the World",
        domain: "drifttravel.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.hellomonaco.com/news/latest-news/the-must-visit-spots-in-monte-carlo/",
        title: "The Must-Visit Spots in Monte Carlo",
        domain: "hellomonaco.com",
        tags: ["gaming"]
    },
    {
        url: "https://metapress.com/the-top-console-games-of-2024-and-a-look-to-2025/",
        title: "The Top Console Games of 2024 and a Look to 2025",
        domain: "metapress.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://www.casinosistersite.co.uk/news/a-beginners-guide-to-gambling-in-the-uk-and-ireland/",
        title: "A Beginner's Guide to Gambling in the UK and Ireland",
        domain: "casinosistersite.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.ps3blog.net/2023/09/26/the-best-open-world-games-for-playstation/",
        title: "The Best Open World Games for PlayStation",
        domain: "ps3blog.net",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://www.zimbabwesituation.com/news/the-future-of-gaming-within-zimbabwe/",
        title: "The Future of Gaming Within Zimbabwe",
        domain: "zimbabwesituation.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.themovieblog.com/2025/10/lessons-indie-filmmakers-can-learn-from-iconic-casino-films/",
        title: "Lessons Indie Filmmakers Can Learn from Iconic Casino Films",
        domain: "themovieblog.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.gearfuse.com/the-ultimate-guide-for-people-picking-their-slot-game/",
        title: "The Ultimate Guide for People Picking Their Slot Game",
        domain: "gearfuse.com",
        tags: ["gaming"]
    },
    {
        url: "https://blog.grosvenorcasinos.com/amazing-poker-facts-you-never-knew",
        title: "Amazing Poker Facts You Never Knew",
        domain: "grosvenorcasinos.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.totallydublin.ie/more/the-best-hotspots-in-dublin/",
        title: "The Best Hotspots in Dublin",
        domain: "totallydublin.ie",
        tags: ["gaming"]
    },
    {
        url: "https://betterthisworld.com/latest-trends/how-to-find-new-slot-games-to-play/",
        title: "How to Find New Slot Games to Play",
        domain: "betterthisworld.com",
        tags: ["gaming"]
    },
    {
        url: "https://inplaysoft.com/knowledgebase/online-slot-machines-history-evolution-and-trends-for-the-future",
        title: "Online Slot Machines: History, Evolution and Trends for the Future",
        domain: "inplaysoft.com",
        tags: ["gaming"]
    },
    {
        url: "https://nfldraftdiamonds.com/2023/11/nfl-themed-games/",
        title: "NFL Themed Games",
        domain: "nfldraftdiamonds.com",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://www.ava360.com/the-ways-new-players-can-pick-the-casino-game-for-them/",
        title: "The Ways New Players Can Pick the Casino Game for Them",
        domain: "ava360.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.goodluckinfo.com/elevating-your-signature-style-must-need-items/",
        title: "Elevating Your Signature Style: Must-Need Items",
        domain: "goodluckinfo.com",
        tags: ["fashion"]
    },
    {
        url: "https://bestleather.org/leather-in-fashion-how-does-faux-leather-compare-to-real-leather/",
        title: "Leather in Fashion: How Does Faux Leather Compare to Real Leather",
        domain: "bestleather.org",
        tags: ["fashion"]
    },
    {
        url: "https://inglishe.com/trends-set-to-dominate-2025s-fashion-industry/",
        title: "Trends Set to Dominate 2025's Fashion Industry",
        domain: "inglishe.com",
        tags: ["fashion"]
    },
    {
        url: "https://fizzymag.com/articles/y2k-fashion-revival-vs-original-trend-evolution",
        title: "Y2K Fashion Revival vs Original Trend Evolution",
        domain: "fizzymag.com",
        tags: ["fashion"]
    },
    {
        url: "https://ecommercefastlane.com/smart-shipping-containers-integrating-technology-for-convenience/",
        title: "Smart Shipping Containers: Integrating Technology for Convenience",
        domain: "ecommercefastlane.com",
        tags: ["technology", "business"]
    },
    {
        url: "https://realtytimes.com/consumeradvice/ask-the-expert/item/1048120-how-to-choose-your-perfect-shed",
        title: "How to Choose Your Perfect Shed",
        domain: "realtytimes.com",
        tags: ["business"]
    },
    {
        url: "https://designbump.com/the-challenges-and-rewards-of-diy-container-conversions/",
        title: "The Challenges and Rewards of DIY Container Conversions",
        domain: "designbump.com",
        tags: ["business"]
    },
    {
        url: "https://guanabee.com/designing-the-ultimate-garage-hangout/",
        title: "Designing the Ultimate Garage Hangout",
        domain: "guanabee.com",
        tags: ["business"]
    },
    {
        url: "https://holrmagazine.com/7-mistakes-to-avoid-while-starting-to-play-bingo-online/",
        title: "7 Mistakes to Avoid While Starting to Play Bingo Online",
        domain: "holrmagazine.com",
        tags: ["gaming"]
    },
    {
        url: "https://payspacemagazine.com/articles/making-the-most-of-bingo-free-games/",
        title: "Making the Most of Bingo Free Games",
        domain: "payspacemagazine.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.nannytomommy.com/2025/01/nostalgic-denim-trends-to-watch-this.html",
        title: "Nostalgic Denim Trends to Watch",
        domain: "nannytomommy.com",
        tags: ["fashion"]
    },
    {
        url: "https://www.onlineclothingstudy.com/2025/01/sports-fashion-overview-its-rise-in.html",
        title: "Sports Fashion Overview: Its Rise in Popularity",
        domain: "onlineclothingstudy.com",
        tags: ["fashion", "sports"]
    },
    {
        url: "https://www.spiritedpuddlejumper.com/the-fluctuation-of-trends-in-the-fashion-industry/",
        title: "The Fluctuation of Trends in the Fashion Industry",
        domain: "spiritedpuddlejumper.com",
        tags: ["fashion"]
    },
    {
        url: "https://sosugary.com/the-hottest-trends-in-fashion-to-start-your-new-year-in-style/",
        title: "The Hottest Trends in Fashion to Start Your New Year in Style",
        domain: "sosugary.com",
        tags: ["fashion"]
    },
    {
        url: "https://yonkerstimes.com/how-does-gambling-affect-the-economy/",
        title: "How Does Gambling Affect the Economy",
        domain: "yonkerstimes.com",
        tags: ["gaming", "business"]
    },
    {
        url: "https://www.highonfilms.com/the-movies-that-take-place-in-casinos/",
        title: "The Movies That Take Place in Casinos",
        domain: "highonfilms.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.primedope.com/different-types-of-casino-bonuses/",
        title: "Different Types of Casino Bonuses",
        domain: "primedope.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.globalbrandsmagazine.com/why-do-players-prefer-to-play-games-on-mobile-apps/",
        title: "Why Do Players Prefer to Play Games on Mobile Apps",
        domain: "globalbrandsmagazine.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://gentwenty.com/protecting-your-finances-online/",
        title: "Protecting Your Finances Online",
        domain: "gentwenty.com",
        tags: ["cybersecurity"]
    },
    {
        url: "https://seat42f.com/a-guide-to-staying-safe-while-gambling-online/",
        title: "A Guide to Staying Safe While Gambling Online",
        domain: "seat42f.com",
        tags: ["gaming", "cybersecurity"]
    },
    {
        url: "https://dailynewshungary.com/profiling-hungarys-best-casinos/",
        title: "Profiling Hungary's Best Casinos",
        domain: "dailynewshungary.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.freshdesignblog.com/2023/09/what-to-do-if-you-need-large-equipment-storage-on-your-property/",
        title: "What to Do If You Need Large Equipment Storage on Your Property",
        domain: "freshdesignblog.com",
        tags: ["business"]
    },
    {
        url: "https://mydecorative.com/6-reasons-for-choosing-a-metal-garage/",
        title: "6 Reasons for Choosing a Metal Garage",
        domain: "mydecorative.com",
        tags: ["business"]
    },
    {
        url: "https://www.britishicehockey.co.uk/post/the-best-ice-hockey-video-games-fans-can-enjoy/",
        title: "The Best Ice Hockey Video Games Fans Can Enjoy",
        domain: "britishicehockey.co.uk",
        tags: ["sports", "gaming"]
    },
    {
        url: "https://www.maltatoday.com.mt/announcements/announcements/134233/what_other_countries_can_learn_from_maltas_gaming_regulations",
        title: "What Other Countries Can Learn from Malta's Gaming Regulations",
        domain: "maltatoday.com.mt",
        tags: ["gaming", "business"]
    },
    {
        url: "https://www.swaggermagazine.com/bingo/the-best-tips-for-playing-online-bingo/",
        title: "The Best Tips for Playing Online Bingo",
        domain: "swaggermagazine.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.bingosites.net/bingo-games-guide/",
        title: "Bingo Games Guide",
        domain: "bingosites.net",
        tags: ["gaming"]
    },
    {
        url: "https://www.cryptowisser.com/best-online-games-to-play/",
        title: "Best Online Games to Play",
        domain: "cryptowisser.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://azbigmedia.com/blogs/how-the-us-leads-the-global-gaming-market/",
        title: "How the US Leads the Global Gaming Market",
        domain: "azbigmedia.com",
        tags: ["gaming", "business"]
    },
    {
        url: "https://www.charlottestories.com/the-best-places-to-play-roulette-in-north-carolina/",
        title: "The Best Places to Play Roulette in North Carolina",
        domain: "charlottestories.com",
        tags: ["gaming"]
    },
    {
        url: "https://s3.us-west-2.amazonaws.com/ee88betorg/news/tips/the-future-of-gambling-online-casinos-and-more-at-ee88.html",
        title: "The Future of Gambling: Online Casinos and More",
        domain: "ee88.com",
        tags: ["gaming", "technology"]
    },
    {
        url: "https://australiaunwrapped.com/classics-to-modern-day-favourites-the-evolution-of-casino-games/",
        title: "Classics to Modern Day Favourites: The Evolution of Casino Games",
        domain: "australiaunwrapped.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.theroanokestar.com/2024/09/25/fast-track-to-a-successful-business-acquiring-the-knowledge-to-excel-as-a-business-owner/",
        title: "Fast Track to a Successful Business: Acquiring the Knowledge to Excel as a Business Owner",
        domain: "theroanokestar.com",
        tags: ["business"]
    },
    {
        url: "https://englishoverview.com/employee-management-a-comprehensive-guide-to-excelling-as-a-business-owner/",
        title: "Employee Management: A Comprehensive Guide to Excelling as a Business Owner",
        domain: "englishoverview.com",
        tags: ["business"]
    },
    {
        url: "https://www.escapistmagazine.com/the-best-horror-games-of-2024/",
        title: "The Best Horror Games of 2024",
        domain: "escapistmagazine.com",
        tags: ["gaming"]
    },
    {
        url: "https://auralcrave.com/en/2024/04/03/the-best-games-to-play-with-mates-in-2024/",
        title: "The Best Games to Play with Mates in 2024",
        domain: "auralcrave.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.onlinegooner.com/articles/view/how-arteta-has-changed-arsenal-s-mentality",
        title: "How Arteta Has Changed Arsenal's Mentality",
        domain: "onlinegooner.com",
        tags: ["sports"]
    },
    {
        url: "https://www.otsnews.co.uk/why-gamers-will-enjoy-online-bingo/",
        title: "Why Gamers Will Enjoy Online Bingo",
        domain: "otsnews.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.flavourmag.co.uk/5-tips-for-picking-the-casino-game-for-you/",
        title: "5 Tips for Picking the Casino Game for You",
        domain: "flavourmag.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.mayfair-london.co.uk/top-london-hotspots-for-adults/",
        title: "Top London Hotspots for Adults",
        domain: "mayfair-london.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.grandprix247.com/2024/04/15/the-beginners-guide-to-online-slots/",
        title: "The Beginner's Guide to Online Slots",
        domain: "grandprix247.com",
        tags: ["gaming"]
    },
    {
        url: "https://www.vanguardngr.com/2025/03/the-new-world-of-live-casino-gaming/",
        title: "The New World of Live Casino Gaming",
        domain: "vanguardngr.com",
        tags: ["gaming"]
    },
    {
        url: "https://nfldraftdiamonds.com/2024/02/super-bowl-32/",
        title: "Super Bowl 32 Retrospective",
        domain: "nfldraftdiamonds.com",
        tags: ["sports"]
    },
    {
        url: "https://londonbreak.co.uk/guide-to-the-types-of-slots/",
        title: "Guide to the Types of Slots",
        domain: "londonbreak.co.uk",
        tags: ["gaming"]
    },
    {
        url: "https://www.insidermonkey.com/blog/the-most-popular-bingo-variations-1346372/",
        title: "The Most Popular Bingo Variations",
        domain: "insidermonkey.com",
        tags: ["gaming"]
    }
];

// ===================================
// Navigation Functions
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===================================
    // Animated Stats Counter
    // ===================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateStats = () => {
        if (hasAnimated) return;
        
        const statsSection = document.querySelector('.hero-stats');
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (statsSectionTop < windowHeight * 0.75) {
            hasAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target + '+';
                    }
                };

                updateCount();
            });
        }
    };

    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load

    // ===================================
    // Article Filtering System
    // ===================================

    const filterButtons = document.querySelectorAll('.filter-btn');
    const articlesGrid = document.getElementById('articlesGrid');
    const articleCount = document.getElementById('articleCount');

    // Render articles
    function renderArticles(filteredArticles) {
        articlesGrid.innerHTML = '';
        
        filteredArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            articleCard.setAttribute('data-tags', article.tags.join(','));
            
            articleCard.innerHTML = `
                <div class="article-content">
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-domain">${article.domain}</p>
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <a href="${article.url}" target="_blank" class="article-link">
                    Read Article <i class="fas fa-external-link-alt"></i>
                </a>
            `;
            
            articlesGrid.appendChild(articleCard);
        });

        articleCount.textContent = filteredArticles.length;
    }

    // Filter articles
    function filterArticles(category) {
        if (category === 'all') {
            return articles;
        }
        return articles.filter(article => article.tags.includes(category));
    }

    // Filter button handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter and render
            const filter = button.getAttribute('data-filter');
            const filtered = filterArticles(filter);
            renderArticles(filtered);
        });
    });

    // Initial render - show all articles
    renderArticles(articles);

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===================================
    // Intersection Observer for Fade In Animations
    // ===================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // ===================================
    // Download PDF Placeholder Handler
    // ===================================

    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Please add your PDF files to enable downloads. Update the href attribute with your PDF file paths.');
        });
    });
});

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll reveal animation
const scrollReveal = debounce(() => {
    const reveals = document.querySelectorAll('.skill-category, .publication-card, .article-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

window.addEventListener('scroll', scrollReveal);

// Initialize styles for scroll reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.skill-category, .publication-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
});