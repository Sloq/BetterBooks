# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
Author.destroy_all
User.destroy_all
Book.destroy_all
Bookshelf.destroy_all
Shelving.destroy_all

author1 = Author.create!(name: "Chuck Palahniuk")

author2 = Author.create!(name: "Kurt Vonnegut")

author3 = Author.create!(name: "Jack Kerouac")

author4 = Author.create!(name: "David Foster Wallace")

author5 = Author.create!(name: "William Shakespeare")

reasonflowersAuth = Author.create!(name: "Stephen Buchmann")

louReed = Author.create!(name: "Lou Reed")

naomChomsky = Author.create!(name: "Naom Chomsky")

homer = Author.create!(name: "Homer")

brettEastonEllis = Author.create!(name: "Brett Easton Ellis")

anthonyBurgess = Author.create!(name: "Anthony Burgess")

jamesFrey = Author.create!(name: "James Frey")

georgeOrwell = Author.create!(name: "George Orwell")

elizabethGilbert = Author.create!(name: "Elizabeth Gilbert")

aldousHuxley = Author.create!(name: "Aldous Huxley")

susannaClarke = Author.create!(name: "Sussana Clarke")

kazuoIshiguro = Author.create!(name: "Kazuo Ishiguro")

shirleyJackson = Author.create!(name: "Shirley Jackson")

ernestHemingway = Author.create!(name: "Ernest Hemingway")

marcoPolo = Author.create!(name: "Marco Polo")

charlesBukowski = Author.create!(name: "Charles Bukowski")

user = User.create!(username: "Odin", password: "123456", profile_pic: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hehehe@yahoo.com")

user2 = User.create!(username: "Thor", password: "123456", profile_pic: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hohoho@yahoo.com")

user3 = User.create!(username: "AsheKetchum", password: "123456", profile_pic: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hihihi@yahoo.com")

user4 = User.create!(username: "Bailey", password: "batman", profile_pic: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hidfhihi@yahoo.com")

guest = User.create!(username: "Guest", password: "guest123456", profile_pic: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "guest@guestlogin.com")

book1 = Book.create!(title: "Slaughterhouse-Five", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/slaughter-house-five.jpg", blurb: "Kurt Vonnegut's absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time after he is abducted by aliens from the planet Tralfamadore. In a plot-scrambling display of virtuosity, we follow Pilgrim simultaneously through all phases of his life, concentrating on his (and Vonnegut's) shattering experience as an American prisoner of war who witnesses the firebombing of Dresden.", author_id: author2.id)

book2 = Book.create!(title: "Survivor", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609658/BetterBooks/covers/survivor.jpg", blurb: "Tender Branson—last surviving member of the Creedish Death Cult—is dictating his life story into Flight 2039’s recorder. He is all alone in the airplane, which will crash shortly into the vast Australian outback. But before it does, he will unfold the tale of his journey.", author_id: author1.id)

book3 = Book.create!(title: "Dharma Bums", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609658/BetterBooks/covers/the_dharma_bums.jpg", blurb: "Two ebullient young men search for Truth the Zen way: from marathon wine-drinking bouts, poetry jam sessions, and 'yabyum' in San Francisco's Bohemia to solitude in the high Sierras and a vigil atop Desolation Peak in Washington State. Published just a year after On the Road put the Beat Generation on the map, The Dharma Bums is sparked by Kerouac's expansiveness, humor, and a contagious zest for life.", author_id: author3.id)

book4 = Book.create!(title: "The Pale King", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609659/BetterBooks/covers/the-pale-king.jpg", blurb: "The agents at the IRS Regional Examination Center in Peoria, Illinois, appear ordinary enough to newly arrived trainee David Foster Wallace. But as he immerses himself in a routine so tedious and repetitive that new employees receive boredom-survival training, he learns of the extraordinary variety of personalities drawn to this strange calling.", author_id: author4.id)

book5 = Book.create!(title: "Romeo and Juliet", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/Romeo_and_Juliet.jpg", blurb: "In Romeo and Juliet, Shakespeare creates a world of violence and generational conflict in which two young people fall in love and die because of that love. The story is rather extraordinary in that the normal problems faced by young lovers are here so very large. It is not simply that the families of Romeo and Juliet disapprove of the lover's affection for each other; rather, the Montagues and the Capulets are on opposite sides in a blood feud and are trying to kill each other on the streets of Verona.", author_id: author5.id)

reasonForFlowers = Book.create!(title: "Reason For Flowers, The", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/Reason-for-Flowers.jpg", blurb: "Flowers, and the fruits that follow, feed, clothe, sustain, and inspire all humanity. They have done so since before recorded history. Flowers are used to celebrate all-important occasions, to express love, and are also the basis of global industries. Americans buy ten million flowers a day and perfumes are a worldwide industry worth $30 billion dollars annually. Yet, we know little about flowers, their origins, bizarre sex lives, or how humans relate and depend upon them.", author_id: reasonflowersAuth.id)

passThruFire = Book.create!(title: "Pass Thru Fire", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/pass_thru_fire.jpg", blurb: "Containing a body of work that spans more than three decades, Pass Thru Fire is a stunning collection of the lyrics of an American original. Through his many incarnations-from proto punk to glam rocker to elder statesman of the avant garde-Lou Reed's work has maintained an undeniable vividness and raw beauty, fueled by precise character studies and rendered with an admirable shot of moral ambiguity. Beginning with his formative days in the Velvet Underground and continuing through his remarkable solo career-albums like Transformer, Berlin, New York, Magic and Loss, and Ecstasy-Pass Thru Fire is crucial to an appreciation of Lou Reed, not only as a consummate underground musician, but as one of the truly significant poets of our time.", author_id: louReed.id)

americanPsycho = Book.create!(title: "American Psycho", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258379/BetterBooks/covers/american_psycho.jpg", blurb: "In American Psycho, Bret Easton Ellis imaginatively explores the incomprehensible depths of madness and captures the insanity of violence in our time or any other. Patrick Bateman moves among the young and trendy in 1980s Manhattan. Young, handsome, and well educated, Bateman earns his fortune on Wall Street by day while spending his nights in ways we cannot begin to fathom.", author_id: brettEastonEllis.id)

onPower = Book.create!(title: "On Power and Ideology", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/on-power-and-ideology.jpg", blurb: "In the late 1980s, in the midst of Reagan's interventions in Central America, Chomsky travelled to Nicaragua and gave the lectures that became On Power & Ideology.The lectures provide a master class in foreign policy analysis from an intellectual at the height of his powers, covering everything from the US domestic basis of its overseas actions, to the pernicious concept of 'National Security' and its destabilising effect, to the broad framework of global imperial order which the United States seeks to maintain. A defining moment in the Cold War meets a defining moment in the career of one of its most important critics.", author_id: naomChomsky.id)

iliad = Book.create!(title: "Iliad", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/iliad.jpg", blurb: "Set during the Trojan War, the ten-year siege of the city of Troy (Ilium) by a coalition of Greek states, it tells of the battles and events during the weeks of a quarrel between King Agamemnon and the warrior Achilles.", author_id: homer.id)

clockworkOrange = Book.create!(title: "Clockwork Orange, A", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258391/BetterBooks/covers/a_clockwork_orange.jpg", blurb: "A Clockwork Orange is a dystopian novel by Anthony Burgess published in 1962. Set in a near future English society featuring a subculture of extreme youth violence, the teenage protagonist, Alex, narrates his violent exploits and his experiences with state authorities intent on reforming him.", author_id: anthonyBurgess.id)

millionLittle = Book.create!(title: "Million Little Pieces, A", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258381/BetterBooks/covers/a_million_little_pieces.jpg", blurb: "A Million Little Pieces is a book by James Frey, originally sold as a memoir and later marketed as a semi-fictional novel following accusations of literary forgery.  It tells the story of a 23-year-old alcoholic and drug abuser and how he copes with rehabilitation in a twelve steps-oriented treatment center.", author_id: jamesFrey.id)

nineteeneightyfour = Book.create!(title: "1984", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258392/BetterBooks/covers/1984.jpg", blurb: "Nineteen Eighty-Four, often published as 1984, is a dystopian novel published in 1949 by English author George Orwell. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.", author_id: georgeOrwell.id)

eatPrayLove = Book.create!(title: "Eat, Pray, Love", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258393/BetterBooks/covers/eat_pray_love.jpg", blurb: "Eat, Pray, Love: One Woman's Search for Everything Across Italy, India and Indonesia is a 2006 memoir by American author Elizabeth Gilbert. The memoir chronicles the author's trip around the world after her divorce and what she discovered during her travels. ", author_id: elizabethGilbert.id)

braveNewWorld = Book.create!(title: "Brave New World", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258393/BetterBooks/covers/brave_new_world.jpg", blurb: "Brave New World is a novel written in 1931 by Aldous Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F.—'After Ford'—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to profoundly change society.", author_id: aldousHuxley.id)

animalFarm = Book.create!(title: "Animal Farm", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258389/BetterBooks/covers/animal_farm.jpg", blurb: "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945. According to Orwell, the book reflects events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union.", author_id: georgeOrwell.id)

jonathanStrange = Book.create!(title: "Jonathan Strange & Mr. Norrell", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258380/BetterBooks/covers/jonathan_strange__mr_norrell_a_novel.jpg", blurb: "Jonathan Strange & Mr Norrell is the 2004 debut novel of British writer Susanna Clarke. An alternative history set in 19th-century England around the time of the Napoleonic Wars, it is based on the premise that magic once existed in England and has returned with two men: Gilbert Norrell and Jonathan Strange. Centred on the relationship between these two men, the novel investigates the nature of 'Englishness' and the boundaries between reason and unreason", author_id: susannaClarke.id)

kublaiKhan = Book.create!(title: "Travels in the Land of Kublai Khan", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258405/BetterBooks/covers/travels_in_the_land_of_kubilai_khan.jpg", blurb: "Throughout history, some books have changed the world. They have transformed the way we see ourselves and each other. They have inspired debate, dissent, war and revolution.
A profound influence on medieval Europe s view of the wider world, this thirteenth-century account of a Venetian merchant s amazing experiences in the court of the great Mongol leader, Kubilai Khan, remains one of the most fascinating tales of exploration ever written.", author_id: marcoPolo.id)

sunAlsoRises = Book.create!(title: "The Sun Also Rises", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258406/BetterBooks/covers/the_sun_also_rises.jpg", blurb: "The Sun Also Rises is a 1926 novel written by American author Ernest Hemingway about a group of American and British expatriates who travel from Paris to the Festival of San Fermín in Pamplona to watch the running of the bulls and the bullfights.", author_id: ernestHemingway.id)

neverLetMeGo = Book.create!(title: "Never Let Me Go", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258385/BetterBooks/covers/never_let_me_go.jpg", blurb: "As children, Kathy, Ruth, and Tommy were students at Hailsham, an exclusive boarding school secluded in the English countryside. It was a place of mercurial cliques and mysterious rules where teachers were constantly reminding their charges of how special they were. Now, years later, Kathy is a young woman. Ruth and Tommy have reentered her life, and for the first time she is beginning to look back at their shared past and understand just what it is that makes them special—and how that gift will shape the rest of their time together.", author_id: kazuoIshiguro.id)

alwaysLivedInCastle = Book.create!(title: "We Have Always Lived in the Castle", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258407/BetterBooks/covers/we_have_always_lived_in_the_castle.jpg", blurb: "Merricat Blackwood lives on the family estate with her sister Constance and her Uncle Julian. Not long ago there were seven Blackwoods—until a fatal dose of arsenic found its way into the sugar bowl one terrible night. Acquitted of the murders, Constance has returned home, where Merricat protects her from the curiosity and hostility of the villagers. Their days pass in happy isolation until cousin Charles appears. Only Merricat can see the danger, and she must act swiftly to keep Constance from his grasp.", author_id: shirleyJackson.id)

postOffice = Book.create!(title: "Post Office", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1501258398/BetterBooks/covers/post_office.jpg", blurb: "By middle age, Henry Chinaski has lost more than twelve years of his life to the U.S. Postal Service. In a world where his three true, bitter pleasures are women, booze, and racetrack betting, he somehow drags his hangover out of bed every dawn to lug waterlogged mailbags up mud-soaked mountains, outsmart vicious guard dogs, and pray to survive the day-to-day trials of sadistic bosses and certifiable coworkers.", author_id: charlesBukowski.id)

bookshelf1 = Bookshelf.create!(user_id: guest.id, shelf_name: "favorites")

bookshelf2 = Bookshelf.create!(user_id: guest.id, shelf_name: "great novels")

bookshelf3 = Bookshelf.create!(user_id: guest.id, shelf_name: "fun")

bookshelf4 = Bookshelf.create!(user_id: guest.id, shelf_name: "boring")

bookshelf5 = Bookshelf.create!(user_id: user.id, shelf_name: "favorites")

bookshelf5 = Bookshelf.create!(user_id: guest.id, shelf_name: "Default")

bookshelf6 = Bookshelf.create!(user_id: user2.id, shelf_name: "funny")

bookshelf7 = Bookshelf.create!(user_id: user3.id, shelf_name: "dramatic")

bookshelf8 = Bookshelf.create!(user_id: user3.id, shelf_name: "favorites")

bookshelf9 = Bookshelf.create!(user_id: user2.id, shelf_name: "not good")

shelvingGuest1 = Shelving.create!(
  bookshelf_id: bookshelf1.id, book_id: book1.id, read_status: "Read"
)
shelvingGuest2 = Shelving.create!(
  bookshelf_id: bookshelf2.id, book_id: book2.id, read_status: "Want To Read"
)
shelvingGuest3 = Shelving.create!(
  bookshelf_id: bookshelf3.id, book_id: book3.id, read_status: "Currently Reading"
)
shelvingGuest4 = Shelving.create!(
  bookshelf_id: bookshelf1.id, book_id: book4.id, read_status: "Read"
)
shelvingUser_1 = Shelving.create!(
  bookshelf_id: bookshelf5.id, book_id: book1.id, read_status: "Read"
)
shelvingUser_2 = Shelving.create!(
  bookshelf_id: bookshelf6.id, book_id: book2.id, read_status: "Want to Read"
)
shelvingUser_3 = Shelving.create!(
  bookshelf_id: bookshelf7.id, book_id: book3.id, read_status: "Read"
)
shelvingUser2_1 = Shelving.create!(
  bookshelf_id: bookshelf8.id, book_id: book1.id, read_status: "Read"
)
shelvingUser2_2 = Shelving.create!(
  bookshelf_id: bookshelf9.id, book_id: book2.id, read_status: "Read"
)
shelvingUser3_1 = Shelving.create!(
  bookshelf_id: bookshelf1.id, book_id: book3.id, read_status: "Currently Reading"
)
shelvingUser4_1 = Shelving.create!(bookshelf_id: bookshelf5.id, book_id: book5.id, read_status: "Read"
)
