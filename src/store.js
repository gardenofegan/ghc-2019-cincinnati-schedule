import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startSchedule: [
      {
        id: 1,
        day: 'Thursday, April 25th',
        courseTimes: [
          {
            time: '1 PM',
            courses: [
              {
                selectable: false,
                location: 'Registration Desk Opens'
              }
            ]
          },
          {
            time: '2:30 - 3:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Janice Campbell (Everyday Education)',
              name: 'How to Plan (and Record) Your Homeschool Life'
            }, {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Kathy Koch, Ph.D. (Celebrate Kids)',
              name: 'Motivation Matters: Start With the Heart'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Massey Campos (Self-Evident Ministry)',
              name: 'Religion and Politics: Learn How to TALK ABOUT IT!'
            }, {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Andrew Pudewa (Institute for Excellence in Writing (IEW))',
              name: 'Mastery Learning, Ability Development, and Individualized Education'
            }, {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Gretchen Roe (Demme Learning / Math-U-See)',
              name: 'Reading & Spelling - When One Doesn\'t Lead to the Other'
            }, {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Tom Kemnitz, Ph.D. (Royal Fireworks Press) ',
              name: 'An Introduction to the Royal Fireworks Language Arts Curriculum by Michael Clay Thompson'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Deborah Burns (The Medical Transcription Service) ',
              name: 'Work From Home as a Medical Transcriptionist'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Bryan Davis (Bryan Davis, Author) ',
              name: 'How to Hook Readers With Your Story - Part 1'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Janet Newberry (Janet Newberry Educational Consulting, LLC)',
              name: 'What If We Give Our Kids an Honest Childhood? Offering Homeschool That\'s More Than Simply "School" at Home'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Maggie Hamilton w/ Amanda Warden (Classical Conversations)',
              name: 'The Grammar Years: Thriving, Not Just Surviving'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Alice Reinhardt (Rhino Technologies) ',
              name: 'The Evidence is In - Keep Playing in Homeschooling'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Aniema Umana (Sqooasha)',
              name: 'Helping Children Embrace Math as a Tool to Pursue Their Dreams'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Sean Allen (Character Badges) ',
              name: 'Raising Truly Obedient Children: Steps to Ensure Your Children Obey the Right Way and For the Right Reasons'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Andrew Phipps (Andrew Phipps Ministries) ',
              name: 'Faith '
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Thomas Toney (KUEST Student Leadership) ',
              name: 'The Window is Closing: Why Character is Disappearing and What You Can Do About It, It\'s Not What You Think'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Rita Cevasco (Rooted in Language)',
              name: 'Dyslexia & Dysgraphia: Reading and Writing Challenges'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Veldora J. Rice (Write from the Heart) ',
              name: 'Evaluating Sources '
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Nicole Thomas (Nicole the Math Lady)',
              name: 'Yes, Yes...You Can Teach Math!'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Thomas J. Griffin (Apologetics for Tweens) ',
              name: 'Apologetics for Tweens: How to Save Your Children From Doubts and Unanswered Questions About Christianity '
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Joan Moon, EdD, CNM, RN (Women\'s Health Dynamics: A Midwife\'s Approach',
              name: 'A Midwife\'s Approach: How to Teach Women\'s Health Using Storytelling and Technology in the Home or Home School Environment'
            }]
          },
          {
            time: '4 - 5 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Pam Barnhill (Homeschool Solutions with Pam Barnhill)',
              name: 'If I\'m Passing out the Snacks, Who\'s in the Cockpit? Ten Steps to a Homeschool Plan to Put Your Homeschool Year on Autopilot'
            }, {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Steve Demme (Building Faith Families/Demme Learning)',
              name: 'Deepening Family Relationships'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Henderson Riley (Mr D Math)',
              name: 'Making Your Test Scores Soar!'
            }, {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'David Kern (CiRCE Institute)',
              name: 'Parenting in the Trenches: Raising Children Who Will Stand Beside You'
            }, {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Lesli Richards (Homegrown Preschooler)',
              name: 'Foundations in Wonder - Best Practices for Your Preschooler'
            }, {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Julie Ross (A Gentle Feast)',
              name: 'The F.E.A.S.T. of the Charlotte Mason Methods'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Gary Bates (Creation Ministries)',
              name: 'Dinosaurs & Fossils: Amazing Evidence for Creation!'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Nicholeen Peck (Teaching Self-Government)',
              name: 'The Not-So-Known Secret for Homeschool Success'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Jean Burk (College Prep Genius)',
              name: 'Free College At Your Fingertips'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Tom Clark (Video Text Interactive Math)',
              name: 'Homeschooling Math Without a Plan? You\'ve Got to be Kidding!'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 232',
              speaker: 'Daniel Huerta (Focus on the Family)',
              name: 'Rolling Credits: Who Has Been a Part of Building You and Why Does This Matter? '
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Amy Barr (The Lukeion Project)',
              name: 'Latin Mastery: How, When & Why'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Brian Wasko (WriteAtHome.com)',
              name: 'Getting Beyond the Five-Paragraph Essay'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Dale Gamache (La Clase Divertida (The FUN Class!))',
              name: 'Is Your Child\'s Smartphone Making Them Dumb as Dirt?'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Becky Shultz (FamiliesAlive)',
              name: 'History on the Road'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Jamie Geneva (Shurley Instructional Institute)',
              name: 'Grammar Study: What\'s the Point? (…and How to Teach it Effectively?)'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Ann Karako (Annie and Everything)',
              name: 'How to Prepare for Homeschooling High School (While Your Kids Are Still in Elementary and Middle School'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Brandy Gleason (Gordon\'s Discount) ',
              name: 'A Woman of Remarkable Endurance'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Michael Clay Thompson (Royal Fireworks Press) ',
              name: 'Rigorous Grammar That Children Can Enjoy'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Dr. Jon Wood (Cedarville University)',
              name: 'Equipping Students to Become the Next Generation of Leaders'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Zara Fagen, Ph.D. (Minimalist Homeschooling with Zara, Ph.D.) ',
              name: 'Baby Steps to Begin Minimalist Homeschooling'
            }, {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Marlin Detweiler (Veritas Press) ',
              name: 'Preparing for the Long Haul: We are not Educating Them to be Good 14 year-olds, but to be Good Adults'
            }]
          },
          {
            time: '5 PM',
            courses: [
              {
                selectable: false,
                location: 'Exhibit Hall Opens'
              }
            ]
          },
          {
            time: '5:30 - 6:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Colleen Kessler (Raising Lifelong Learners)',
              name: 'Clever, Cluttered, and Capable of More: How Helping Your Child Strengthen Executive Function Skills Can Wire Them for Success'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Douglas McKelvey w/ A.S. Peterson (Rabbit Room on the Road)',
              name: 'The Work of the People: Redemptive Rhythms in Our Shared Lives'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Jean Burk (College Prep Genius)',
              name: 'Hypergraphia Genius, Good Notes-Good Grades!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Adam Andrews (CenterForLit.com)',
              name: 'Literary Keys - Unlocking the Meaning of Classic Books'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Kathi Lipp (Kathi Lipp\'s Clutter Free Academy)',
              name: 'Creating a Clutter Free Life'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Kristen Eckenwiler (The Struggling Reader)',
              name: 'Multi-sensory Teaching: A Game Changer Everyone Should Understand'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Trish Corlew w/  Wendy Hilton (Hip Homeschool Moms) ',
              name: 'An Open Discussion...Are They Really Socialized? '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Jeffrey Mays (Novare Science and Math)',
              name: 'Reconciling Two Traditional Enemies: How Integrating Art Can Make Students Better at Science and Better Humans'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Monica Irvine (The Etiquette Factory) ',
              name: 'Discipline With Love so We Don\'t Break Our Children\'s Spirit'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Joshua Brahm (Equal Rights Institute)',
              name: '6 Practical Dialogue Tips: What We\'ve Learned From Talking With 5,000 Pro-Choice People'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Jean Thomason (Miss PattyCake)',
              name: 'Sharing God\'s BIG LOVE with Little Lives'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Jim Woychuk (Scripture Memory Fellowship)',
              name: 'After Your Epic Fail in Parenting'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Jeremy Moritz (Code for Teens)',
              name: 'Your Kids Should Learn Programming: It\'s Easier Than You Think '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Misti Lacy (WriteShop) ',
              name: '\'Write\' for the Future/College-Prep Writing for Grades 9 - 12'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Karen A. Farmer Wanamaker (Comprehension Kids) ',
              name: 'If You Intend for Them to Comprehend'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Lisa Dettinger (PowerHouse Educational Resources)',
              name: 'Cultivating a Healthy \'Imago Dei\' in Ourselves and Our Children'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Rachelle Ferguson (Kittywham Productions - Plays With a Punch)',
              name: 'The Three Things You Need for Putting on a Play'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'James Burd Brewster (J2B Publishing)',
              name: 'Writing and Publishing Your First Book'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Dr. Jeremy Kimble (Cedarville University)',
              name: 'Worldview Matters: Equipping Our Children to Know God and Engage Culture'
            }]
          },
          {
            time: '7 - 8 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Sarah Mackenzie (Read-Aloud Revival)',
              name: 'How to Talk With Your Kids About Books (Even if You Haven\'t Read Them Yourself)' },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Melanie Wilson, Ph.D. (Melanie Wilson, Ph.D. - Grammar Galaxy Books) ',
              name: 'The Anger Antidote for Homeschooling Parents' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Dr. Jay Wile (Berean Builders Science)',
              name: 'Ask Dr. Wile Any Question You Want - Q & A Session' },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Carol Reynolds, Ph.D. (Professor Carol)',
              name: 'Strategies for Teaching Art History' },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Beth Ellen Nash (Wings to Soar Online Academy)',
              name: 'Learning Challenges That Often Show Up Together' },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Cheryl Swope (Cheryl Swope, M.Ed., Simply Classical) ',
              name: 'Classical Christian Education: Beautifully Defined' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Julia Nalle (BiblioPlan)',
              name: 'What\'s All the Fuss About Teaching History Classically?'
            }]
          }, {
            time: '8 PM',
            courses: [
              {
                selectable: false,
                location: 'Ballroom B: Special Event Andrew Peterson Concert'
              }
            ]
          }, {
            time: '9 PM',
            courses: [
              {
                selectable: false,
                location: 'Exhibit Hall Closes / Registration Desk Closes'
              }
            ]
          }
        ]
      }, {
        id: 2,
        day: 'Friday, April 26th',
        courseTimes: [
          {
            time: '8:30 AM',
            courses: [
              {
                selectable: false,
                location: 'Registration Desk Opens'
              }
            ]
          },
          {
            time: '8:30 - 9:30 AM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Nicholeen Peck (Teaching Self-Government) ',
              name: 'Cultural Parenting Revolution: To Improve a Parent\'s Bond and Influence at Home' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Massey Campos (Self-Evident Ministry) ',
              name: 'Twist Not Scripture! Commonly Misused Scriptures' },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Martin Cothran (Memoria Press)',
              name: 'How to Get the Education You Never Had: A Crash Course on Classical Education' },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Adam Andrews (CenterForLit.com) ',
              name: 'It\'s Onomatopoeia, Mom! - Using Children\'s Stories to teach Literary Devices' },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Ashley Wiggers (GeoMatters)',
              name: 'Moving From Checklist to Meaningful Learning' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Brian Wasko (WriteAtHome.com)',
              name: 'The Most Fascinating Discussion of Grammar in the History of the World (or Your Money Back)' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Tim Shoemaker (Tim Shoemaker, Author, Speaker) ',
              name: 'The Very Best, Hands-On, Kinda Dangerous Family Devotions' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Jamie Gaddy, Ph.D. (Homeschool.com)',
              name: 'Practical Ways to Homeschool & Love It! (With Q & A) ' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Tom Kemnitz, Ph.D.(Royal Fireworks Press)',
              name: 'Educating Twice Exceptional Children at Home' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Alice Reinhardt (Rhino Technologies)',
              name: 'Seven Life Breathing Phrases to Speak to Your Kids' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Ann Karako (Annie and Everything)',
              name: 'Nuts and Bolts of Homeschooling High School (Hint: It\'s Not That Hard)' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Rachel Anderson (RightStart Mathematics by Activities for Learning, Inc.)',
              name: 'You CAN Be a Great Math Teacher' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Mark Pruitt (Making the Grade - Study Skills Course)',
              name: 'Study Skills: How to Dominate Your College Classes' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Gina Burmeier (Rainbow Resources) ',
              name: 'Get Your Game On! The Power of Games for Learning' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Janet Newberry (Janet Newberry Educational Consulting, LLC)',
              name: 'Where Do We Start With Young Children?' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Ian Andrews (CenterForLit.com)',
              name: 'Why Your Kids Love Fantasy Literature - and What to Do About It' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Karen Holinga, Ph.D. (Demme Learning) ',
              name: 'How Can I Teach My Child to Spell? ' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Dr. Sandi Queen, ND (Queen Homeschool Supplies, Inc. ',
              name: 'Making the Charlotte Mason Approach Fit YOUR Family' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Mandy Majors (nextTalk.org) ',
              name: 'Keeping Kids Safe in a Digital World - (for mature kids and parents)' },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Dr. Jon Wood (Cedarville University)',
              name: 'Equipping Students to Become the Next Generation of Leaders'
            }]
          },
          {
            time: '9:30 AM',
            courses: [{
              selectable: false,
              location: 'Exhibit Hall Opens'
            }]
          }, {
            time: '10 - 11 AM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Andrew Peterson w/ Jonathan Rogers (Rabbit Room on the Road)',
              name: 'Community Calling & the Mystery of Making'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Daniel Huerta (Focus on the Family) ',
              name: 'Building a Basic Framework Toward Biblical Sexual Intelligence and Navigating Personality Differences in the Home'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Kathy Koch, Ph.D. (Celebrate Kids)',
              name: 'The Power of Technology Has Over Me and My Peers'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Christopher Perrin, Ph.D. (Classical Academic Press)',
              name: 'For Children and Church: How the Renewal of Classical Education is Fostering a Healthy New Ecumenism'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Rachel Jankovic (Canon Press)',
              name: 'Road Weary Mothering: A Mother\'s Guide to Endurance and Joy'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Steve Demme (Building Faith Families / Demme Learning) ',
              name: 'You Can\'t Raise Your Child With Challenges Alone'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Julie Ross (A Gentle Feast)',
              name: 'Living Ideas: The Food That Nourishes a Life'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Janice Campbell (Everyday Education) ',
              name: 'How to Choose Curriculum That Fits: Three Questions You Must Ask'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Dr. Jay Wile (Berean Builders Science) ',
              name: '\'Teaching\' High School at Home'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Leigh Ann Wayne (Burton Reading) ',
              name: 'Beginning Reading: The Power of Praise'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 232',
              speaker: 'Brandy Gleason (Gordon\'s Discount) ',
              name: 'Help, I Don\'t Know What I am Doing'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Carol Reynolds, Ph.D. (Professor Carol) ',
              name: 'The Story of Music in our Christian Worship'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Jan Bloom (BooksBloom)',
              name: 'Sailing on Living Light: Voyaging With Great Books'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'John De Gree (Classical Historian)',
              name: 'How to Teach the Socratic Discussion in History in a Co-op Setting or In a Big Family'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Henderson Riley (Mr D Math) ',
              name: 'How to Think and Talk Math!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Elizabeth Elliott (ABC Foundations)',
              name: 'Unleashing Your Child\'s Potential '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Beth Ellen Nash (Wings to Soar Online Academy)',
              name: 'Foundations in Phonological and Phonemic Awareness'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Dale Gamache (La Clase Divertida (The FUN Class!))',
              name: 'Teaching Foreign Language is Definitely Achievable'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Peter Miller (Applied Inspirations) ',
              name: 'How to Teach Science...The Correct Way'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Daniel Schwabauer (Clear Water Press, Inc.) ',
              name: 'The Write Questions: Inspiring Kids to Write Through the Art of Storytelling'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Amy C. Blake, Burton W. Cole, Carol Kinsey (Creative Writing Through Literature / The Writing Family',
              name: 'I Quit! My Faith Journey to Authorship'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Regan Barr (The Lukeion Project) ',
              name: 'Greek Might Make You a Genius'
            }]
          }, {
            time: '11:30 AM - 12:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Andrew Peterson, A.S. \'Pete\' Peterson, Douglas McKelvey, Helena Sorensen, Jennifer Trafton, Jonathan Rogers, Randall Goodgame',
              name: 'Panel: In Search of a Truer Story: Nurturing A Redeemed Imagination'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Colleen Kessler (Raising Lifelong Learners)',
              name: 'Embracing Rabbit Trails: How to Build on Your Child\'s Interests and Passions to Ignite a Self-Driven, Lifelong Love of Learning'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Dr. Jeff Myers (Summit Ministries)',
              name: 'How to Speak Truth...and Be Nice at the Same Time'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Andrew Pudewa (Institute for Excellence in Writing (IEW))',
              name: 'Cultivating Language Skills: Preschool Through High School'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Nicholeen Peck (Teaching Self-Government) ',
              name: 'Calm, Predictable Parenting For Families Who Need Less Anxiety and Stress'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Cheryl Swope (Cheryl Swope, M.Ed., Simply Classical) ',
              name: 'What Good Are Labels? Understanding Your Child\'s Learning Problems'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Gary Bates (Creation Ministries) ',
              name: 'Myth-Busting the Icons of Evolution'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Jean Burk (College Prep Genius)',
              name: 'How to Ace the SAT (Discover How This is a Learnable Test and Every Question Can be Answered in 30 Seconds or Less)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Kristen Eckenwiler (The Struggling Reader) ',
              name: 'Exhaustion and Fear be Gone! Homeschooling Truths to Save Your SANITY'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Kathi Lipp (Kathi Lipp\'s Clutter Free Academy) ',
              name: 'The Organized Homeschooler '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Dr. Larry Schweikart (Wild World of History) ',
              name: 'Creating Great Citizens by Studying History: How the Study of History is a Life Habit'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Trish Corlew w/ Wendy Hilton (Hip Homeschool Moms) ',
              name: 'Incorporating Educational Travel Into Your Homeschool'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Julia Nalle (BiblioPlan) ',
              name: 'In the Trenches: Adoption and Homeschooling - Help for the Weary!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Gretchen Roe (Demme Learning / Math-U-See) ',
              name: 'Math Manipulatives - More Than Just Moving Stuff Around'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Cassandra Deleon (BJU Press / HomeWorks by Precept)',
              name: 'Is Jesus on Your Lesson Plan'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Bryan Davis (Bryan Davis, Author) ',
              name: 'How to Hook Readers With Your Story - Part 2'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Amanda Murray (14 Rooms / Shakespeare Lady)',
              name: 'How to Understand Shakespeare (For Those Not Born in the 16th Century)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Ed Zaccaro (Hickory Grove Press) ',
              name: 'The Eight Components of Quality Math Education That Many Homeschool Parents Miss'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Marlin Detweiler (Veritas Press) ',
              name: 'Preparing for the Long Haul: We are not Educating Them to be Good 14 Year-Olds, but to be Good Adults (Veritas Press) '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Lisa Woodruff (Organize 365) ',
              name: 'Organizing Your Homeschool Ideas, Weekly Lessons & Kids Weekly Work'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Edwin M. Fava, Jr. (Numbers Revolution Math for Early Childhood Education)',
              name: 'The Languages of Mathematics Through Numbers - For Early Learners'
            }]
          }, {
            time: '1 - 2 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Sarah Mackenzie (Read-Aloud Revival) ',
              name: 'Teaching from Rest in the Early Years: Homeschool Kids Under 8'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Kathy Koch, Ph.D. (Celebrate Kids) ',
              name: 'Identity: Who Do Your Children Think They Are and Why Does it Matter?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Massey Campos (Self-Evident Ministry)',
              name: 'Abortion Isn\'t Legal! Does the Pro-Life Industry Know This?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Martin Cothran (Memoria Press) ',
              name: 'The Siren Song of Education Technology'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'N.D. Wilson (Canon Press) ',
              name: 'Fantastical Wordcraft: How to Raise (or Become) a Young Writer'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Melanie Wilson (Melanie Wilson, Ph.D. - Grammar Galaxy Books)',
              name: 'Motivational Secrets That Work With Any Students'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'David Kern (CiRCE Institute) ',
              name: 'A Close Reads Colloquy: Discussing Flannery O\'Connor\'s \'Good Country People\''
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Tom Clark (Video Text Interactive Math) ',
              name: 'Ten Myths About Homeschooling Math'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Ashley Wiggers (GeoMatters) ',
              name: 'Homeschooling\'s Greatest Enemy'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Kristen Eckenwiler (The Struggling Reader) ',
              name: 'Does My Child Have Dyslexia? What Does That Even Mean? '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 232',
              speaker: 'Misti Lacy (WriteShop)',
              name: 'How to Teach Writing to the Tech-Savvy Tweens and Teens | Grades 4-8'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Connie Albers (Tyndale House Publishers / NavPress) ',
              name: 'How to Keep God the Center of Your Homeschool Journey'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Monica Irvine (The Etiquette Factory) ',
              name: 'How Are Imperfect and Flawed Parents, Supposed to Raise Valiant Children?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Daniel Schwabauer (Clear Water Press) ',
              name: 'The Write Questions: Inspiring Kids to Write Through the Art of Storytelling'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Brian Wasko (WriteAtHome.com) ',
              name: 'Avoiding the Grade Game'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Andrew Phipps (Andrew Phipps Ministries)',
              name: 'Family'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Kathie Morrissey (Character Corner) ',
              name: 'Training Character Into Your Children'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Aaron Marks (Liberty University) ',
              name: 'Why Aren\'t You Earning College Credit in High School?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Mandy Majors (nextTalk.com) ',
              name: 'Keeping Kids Safe in a Digital World - (for mature kids and parents)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Michael Clay Thompson (Royal Fireworks Press)',
              name: 'MCT Vocabulary Direct Study Through Powerful Latin and Greek Stems'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Dr. Elizabeth Mulhern (Academic Advantage Speed Reading) ',
              name: 'How an Increased Reading Speed Can Change Your Teen\'s Future'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Dale Cox (Beakers & Bricks, LLC) ',
              name: 'Food Science Defined'
            }]
          }, {
            time: '2:30 - 3:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Pam Barnhill (Homeschool Solutions with Pam Barnhill) ',
              name: 'Roosters, Wonder Women, and the Rest of Us: A Realistic Approach to Mornings for the Weary Homeschool Mom'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Dr. Jeff Myers (Summit Ministries) ',
              name: 'Rescuing Children From the Culture of Irresponsibility'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Jean Burk (College Prep Genius) ',
              name: 'Good-Bye High School - Hello Free College'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Christopher Perrin, Ph.D. (Classical Academic Press)',
              name: 'The Happy and Hopeful Student'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Dr. Jay Wile (Berean Builders) ',
              name: 'The Earth: Is It Young or Is It Old?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Julia Nalle (BiblioPlan) ',
              name: 'Help! How Can I Teach Charlotte Mason Style When My Child Has Difficulty Reading?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Wendy Hilton (Hip Homeschool Moms) ',
              name: 'Homeschooling a Child on the Autism Spectrum'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Hank Reynolds, J.D. w/ Carol Reynolds, Ph.D. (Professor Carol) ',
              name: 'Copyright Law for Parents and Teachers'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Laura House (Institute for Excellence in Writing (IEW))',
              name: 'Experience Excellence in Writing'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Sam Black (Covenant Eyes Internet Accountability) ',
              name: 'Raising Courageous Kids to Confront a Sexualized Culture'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Candice Kelly (BookShark) ',
              name: 'Homeschooling Without Busy Work: Maximizing Your Homeschool Hours'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Donnie Rosie (Miracle Mountain Ranch) ',
              name: 'The Art of Photography - Principles That Will Help You Take an Awesome Picture'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Kathie Morrissey (Character Corner) ',
              name: 'Dealing With a Difficult Child'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Christy Jones, Ph.D. (Logic of English) ',
              name: 'Teaching Handwriting with Success'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Antoinette LaGrossa (ShillerLearning: Montessori at Home)',
              name: 'Overcoming Middle School Blues: Why Your Children Are Failing at Math and How to Turn Them Around'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Janet Sedano (Time4Learning.com)',
              name: 'The Accidental, Homeschooler - Tips to Making the Transition Smoother'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Lesli Richards (Homegrown Preschooler) ',
              name: 'How to Build A Cathedral (The Role of Beauty in Homeschooling)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Laura Macfarlan (A Reason For) ',
              name: '3 Simple - But Significant - Steps to Transform Your Homeschooling Journey'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Chris Burkett, Ph.D. (Ashbrook Center) ',
              name: '50 Core American Documents: A Primary Document Education in American History and Government'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Lisa Dettinger (PowerHouse Educational Resources)',
              name: 'Essays for the Middle-Schooler: Easy as 1-2-3! '
            }]
          }, {
            time: '4 - 5 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Slugs & Bugs with Randall Goodgame ',
              name: 'SPECIAL EVENT: Musical Concert - Faith. Family. Funny!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Kathy Koch, Ph. D. (Celebrate Kids) ',
              name: 'Technology\'s Influence Over Kid\'s Beliefs and Behaviors'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Gary Bates (Creation Ministries) ',
              name: 'Aliens, UFOs and the Evolution Connection'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Andrew Pudewa (Institute for Excellence in Writing (IEW))',
              name: 'Fairy Tales and the Moral Imagination'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Janice Campbell (Everyday Education) ',
              name: 'How to Teach Writing the Easy, Natural Way: Model-Based Writing for Any Age'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Kristen Eckenwiler (The Struggling Reader) ',
              name: 'All You Need to Teach Reading…Even a Struggling Reader'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Brian Nates / Brian Phillips (Medi-Share) ',
              name: 'Taking the Headache Out of Healthcare'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Adelaide Olguin (TalkBox.mom) ',
              name: 'Travel the World While You Homeschool '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Dr. Sandi Queen, ND (Queen Homeschool Supplies, Inc.)',
              name: 'The Charlotte Mason Approach - An Introduction'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Beth Oakes (HiGAFSY Productions) ',
              name: 'Don\'t FREAK! Art Museums Are a Blast! How to Prepare For a Trip to Your Local Art Museum'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Tom Clark (Video Text Interactive Math) ',
              name: 'The Seven Laws of Teaching at Home'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Daniel Schwabauer (Clear Water Press)',
              name: 'Curiosity Saved the Cat!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Jeffrey Mays (Novare Science and Math) ',
              name: 'Slaying the Cram-Pass-Forget Dragon: Mastery-Learning for College Preparedness in Science'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Jan Bloom (BooksBloom) ',
              name: 'The Foundational Five: Bible Stories, Fairy Tales, Mother Goose, Aesop\'s Fables, and Mythology'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Terri Jordan (The Color-Coded Chef)',
              name: 'A Step Toward Independence: The Importance of Sequencing'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Jean Thomason (Miss PattyCake)',
              name: 'Making Early Faith Stick '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Ian Andrews (CenterForLit)',
              name: 'Story Time With CenterForLit'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Francie Black (Homeschool Hacker - Robotics & Programming Courses)',
              name: 'I\'m not a \'Techie\'. Do I Need to Know How to Program? '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Hank Kulhanek (Compass - Finances God\'s Way)',
              name: 'CAUSE and EFFECT - A Child\'s Financial Future'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Karen Farmer Wanamaker  (Comprehension Kids)',
              name: 'It\'s a Fact - Teaching Nonfiction Comprehension'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Zara Fagen, Ph.D. (Minimalist Homeschooling with Zara, Ph.D.) ',
              name: 'What is Minimalist Homeschooling, Anyway? How to Gain More in Your Homeschool by Doing Less'
            }]
          }, {
            time: '5:30 - 6:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Sarah Mackenzie, Pam Barnhill, Colleen Kessler (Homeschool Help Desk) ',
              name: 'Mom-to-Mom Panel: Questions and Answers About Everything From Troublesome Toddlers To Stopping Math Tears to How to Get Dinner on the Table'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Daniel Huerta (Focus on the Family) ',
              name: 'Navigating Personality Differences in the Home'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Henderson Riley (Mr D Math) ',
              name: 'Time Management - Making It an Occasion'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Adam Andrews (CenterForLit.com)',
              name: 'Homeschooling\'s Highest Goal - Lessons From the Story of Job'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Cheryl Swope (Cheryl Swope, M. Ed., Simply Classical) ',
              name: 'You Can Do Better! Your Struggling Learners at Home'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Julie Ross (A Gentle Feast) ',
              name: 'Nitty Gritty Narration'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'John De Gree (Classical Historian) ',
              name: 'Utilitarian, Charlotte Mason, Montessori, or Classical? Which Educational Philosophy Should I Choose?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Brian Wasko (WriteAtHome.com) ',
              name: 'Ten Mistakes Teen Writers Make and How to Avoid Them (The Mistakes, Not the Teens)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Leigh Ann Wayne (Burton Reading) ',
              name: 'Beginning Reader? Problem Reader? How To Be SURE Your Child Becomes a GREAT Reader and Writer'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Daniel Schwabauer (Clear Water Press, Inc. ) ',
              name: 'Curiosity Saved the Cat!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Richard Cowdrey (Zonderkidz)',
              name: 'Giving(and Getting) Gifts! '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Connie Albers (Tyndale House Publishers / NavPress)',
              name: 'Meltdowns and Moodiness: How to Protect the Relationship'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Michael Clay Thompson (Royal Fireworks Press) ',
              name: 'Success Teaching Your Child to Write'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Jeff Carlson (The College Board)',
              name: 'Updates to the AP Program: What You Need to Know'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Aniema Umana (Sqooasha) ',
              name: 'Helping Children Embrace Math as a Tool to Pursue Their Dreams'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Marlin Detweiler (Veritas Press) ',
              name: 'Greasing the Skids: Developing Your Child\'s Unique Gifts and Interests (Veritas Press) '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Daryl Smith (Doctor Aviation)',
              name: 'Military Service Academies: How to Get In; How to Survive and Thrive'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Jamey Heit, Ph.D. (ecree.com) ',
              name: 'Combining Forces: How Technology Can be an Invaluable Partner for Students and Teachers'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Sean Allen (Character Badges) ',
              name: 'Parenting With Training Wheels: Why Consistent Rewards and Consequences are Critical to Helping Your Children Understand Your Expectations'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Karen Hopkins (Growing Healthy Homes) ',
              name: 'Nutrition 101: Leaving a Legacy of Healthy Generations'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Rachelle Ferguson (Kittywham Productions - Plays With a Punch)',
              name: 'Word Made Flesh: How the Lost Art of Theater Grows Our Souls '
            }]
          }, {
            time: '7 - 8 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Steve Demme (Building Faith Families / Demme Learning) ',
              name: 'Four Principles to Raise Your Children to Live Forever'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'N.D. Wilson (Canon Press) ',
              name: 'Wide Eyed Wonder: How to Cultivate Awe in a Cynical Age'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Dr. Jeff Myers (Summit Ministries) ',
              name: 'Hearing and Understanding God\'s Call on Your Life'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Pudewa, Perrin, Cothran,D. Kern, Reynolds, Swope',
              name: 'Classical Panel - Classical Education Unhinged!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Melanie Wilson, Ph.D. (Melanie Wilson, Ph.D. - Grammar Galaxy Books)',
              name: 'How to Help a Child With Low Frustration Tolerance'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Gretchen Roe (Demme Learning) ',
              name: 'Five Ways to Teach Problem SolvING Without Being the Problem SolvER'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Monica Irvine (The Etiquette Factory) ',
              name: 'Raising Our Girls to be Ladies'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Seth Iorg (SimplySTEM.com) ',
              name: 'From Gamers to Coders!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Nick Carothers w/ Tom Duffy (Make Music Easy)',
              name: 'Christian Family Sing-Along'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'David Vogt (Civitas Tours)',
              name: 'Transitioning From High School to College: What You Need to Know About Safety and Security'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Nicole Thomas(Nicole the Math Lady)',
              name: 'Empower Your Child in Math (Yes, It\'s Possible!) '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Joan Moon, EdD, CNM, RN (Women\'s Health Dynamics)',
              name: 'A Midwife\'s Approach: How to Teach Women\'s Health Using Storytelling and Technology in the Home or Home School Environment'
            }]
          }, {
            time: '8 PM',
            courses: [{
              selectable: false,
              location: 'Ballroom B',
              speaker: 'Special Event / Jonnie W.',
              name: 'Friday Night Comedy - Meet and Greet After Show'
            }]
          }, {
            time: '8:30 PM',
            courses: [{
              selectable: false,
              location: 'EXHIBIT HALL CLOSES'
            }]
          }
        ]
      }, {
        id: 3,
        day: 'Saturday, April 27th',
        courseTimes: [
          {
            time: '8 AM',
            courses: [
              {
                selectable: false,
                location: 'Registration Desk Opens'
              }
            ]
          },
          {
            time: '8:30 - 9:30 AM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Andrew Pudewa (Institute for Excellence in Writing (IEW))',
              name: 'But…but…but…What About Grammar?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Melanie Wilson, Ph.D. (Melanie Wilson, Ph.D. - Grammar Galaxy Books)',
              name: 'Parenting Traps That Prevent Homeschool Success'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Dr. Jeff Myers (Summit Ministries) ',
              name: 'Who God Designed You to Be'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Rachel Jankovic (Canon Press) ',
              name: 'You Who? What Teaching Identity Looks Like and Why It is So Important'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'David Kern (CiRCE Institute) ',
              name: 'A Close Reads Colloquy: Discussing \'Rumpelstiltskin\''
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Jean Burk (College Prep Genius) ',
              name: 'Build an Amazing Homeschool Transcript '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Misti Lacy (WriteShop) ',
              name: 'How to Teach Writing to Tech-Savvy Tweens and Teens'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Henderson Riley (Mr D Math) ',
              name: 'Prime Numbers - The Gateway to Algebra and Beyond!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Tom Kemnitz, Ph.D. (Royal Fireworks Press) ',
              name: 'Homeschooling Gifted Children'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Alice Reinhardt (Rhino Technologies) ',
              name: 'How Do I Select the Best Curriculum'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 232',
              speaker: 'Tim Shoemaker (Tim Shoemaker, Author, Speaker)',
              name: 'MORE of the Very Best, Hands-On, Kinda Dangerous Family Devotions'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Janet Newberry (Janet Newberry Educational Consulting)',
              name: 'What Do I Do Now? Real Hope When Behavior Management Doesn\'t Work'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Becky Shultz (FamiliesAlive) ',
              name: 'Mom Talk: Words of Hope & Encouragement'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Deborah Burns (The Medical Transcription Service) ',
              name: 'Work at Home as a Medical Transcriptionist'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Elizabeth Porter (Bon Voyage World Languages Academy)',
              name: 'Traveling and Homeschool - Making the World Your Classroom!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Amy C. Blake, Burton W. Cole, Carol Kinsey (Creative Writing Through Literature / The Writing Family',
              name: 'Play With Your Words'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Amy Barr (The Lukeion Project)',
              name: '5 Best Ways to Memorize Tricky Things '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Lisa Woodruff (Organize 365)',
              name: 'Eliminate Your To Do List and Create Productivity in Your Household Management Workflow'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Veldorah J. Rice (Write from the Heart)',
              name: 'Five Activities to Help Students Love Writing '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Laurie Geary (Yellow Wood Success Academy)',
              name: 'Strengthen the Brain!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Jean Thomason (Miss PattyCake) ',
              name: 'Sing Your Way Through Your Day!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Thomas J. Griffin (Apologetics for Tweens) ',
              name: 'Apologetics for Tweens: How to Save Your Children From Doubts and Unanswered Questions About Christianity '
            }]
          }, {
            time: '9:30 AM',
            courses: [
              {
                selectable: false,
                location: 'Exhibit Hall Opens'
              }
            ]
          },
          {
            time: '10 - 11 AM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Janice Campbell (Everyday Education) ',
              name: 'How to Teach so They Remember: 7+ Ways to Help Your Students Learn Better'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Kathy Koch, Ph.D. (Celebrate Kids) ',
              name: '8 Great Smarts: Understand How Children are Smart and Why it Matters'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Massey Campos (Self-Evident Ministry) ',
              name: 'The Faith That Founded America: Who Cares!?!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Cheryl Swope (Cheryl Swope, M.Ed., Simply Classical) ',
              name: 'Classical Education & Special Needs: Three Case Studies'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Steve Demme (Building Faith Families / Demme Learning) ',
              name: 'From Crisis to Christ, the Journey of a Husband and Father'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Gary Bates (Creation Ministries) ',
              name: 'Confronting Racism: All People Made in the Image of God?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Brian Wasko (WriteAtHome.com) ',
              name: 'Writing Literary Analysis'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Leigh Ann Wayne (Burton Reading)',
              name: 'Things NEVER to Say to Your Beginning Reader'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Tom Clark (Video Text Interactive Math) ',
              name: 'Is Math Straining Your Relationship With Your Children'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Daniel Schwabauer (Clear Water Press) ',
              name: 'Worldviews in Literature'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Lesli Richards (Homegrown Preschooler)',
              name: 'Wonder-filled Math and Language Arts for Your Homegrown Preschooler'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'John De Gree (Classical Historian) ',
              name: 'How to Teach (History) With Games and How to Hold a Constitution or History Bee in a Co-op'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Jim Woychuk (Scripture Memory Fellowship) ',
              name: 'Seven Silver Bullets of Sensational Scripture Memory'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Ann Karako (Annie and Everything) ',
              name: 'Common Fears About Homeschooling High School - WRECKED'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Julia Nalle (BiblioPlan) ',
              name: 'In the Trenches: Multi-Grade, Multi-Age, All Together Without Mom Losing Her Mind!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Jamie Geneva (Shurley Instructional Institute)',
              name: 'The Grammar-Writing Connection: How to Create a Solid Foundation For Writing Success'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Ed Zaccaro (Hickory Grove Press) ',
              name: 'The Ten Things All Future Mathematicians and Scientists Must Know (But Are Rarely Taught)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Kathie Morrissey (Character Corner) ',
              name: 'Sibling Squabbles in the Schoolroom'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Damon Evans (FilmSchool4Teens)',
              name: 'Proper Care and Feeding of the Artistic Child'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Aaron Marks (Liberty University)',
              name: 'Why Aren\'t You Earning College Credit in High School?'
            }]
          },
          {
            time: '11:30 AM - 12:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Randall Goodgame (Slugs and Bugs) ',
              name: 'Scripture in the Home'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Nicholeen Peck (Teaching Self-Government) ',
              name: 'Motivation Train: Creating Self-Governed Scholars'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'PANEL: N.D. Wilson w/ Rachel Jankovic',
              name: 'The Guinea Pigs Speak: Classical Education and Generational Learning From the Perspective of Students Turned Parents Turned Writers Turned Panelists at GHC!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Martin Cothran (Memoria Press) ',
              name: 'The Seven Habits of Highly Educated People: How the Liberal Arts Solves the Problem-Solving Problem'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Colleen Kessler (Raising Lifelong Learners)',
              name: 'Never Good Enough: How Perfectionism, Anxiety, and Fear Are Holding Back Your Child and What to Do About It'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Dr. Jeff Myers (Summit Ministries) ',
              name: 'The Secret Battle of Ideas About God'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Dr. Jay Wile (Berean Builders) ',
              name: 'Ask the Beasts'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Henderson Riley (Mr D Math) ',
              name: 'SAT Math - It\'s Not the Math, It\'s the Question That is Confusing!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Trish Corlew w/ Wendy Hilton (Hip Homeschool Moms) ',
              name: 'How to Add Games and Fun Into Your Homeschool Without Feeling Guilty!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Larry Schweikart (Wild World of History) ',
              name: 'Creating Great Citizens by Studying History: How the Study of History is a Life Habit'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Monica Irvine (The Etiquette Factory) ',
              name: 'Raising Our Boys to be Gentleman'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Connie Albers (Tyndale House Publishers / NavPress)',
              name: 'How to Make Homeschooling Work for All Your Kids'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Adelaide Olguin (TalkBox.mom)',
              name: 'Don\'t Learn a Foreign Language. Actually Talk in One!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Candice Kelly (BookShark)',
              name: 'Teaching Multiple Ages: Spinning the Plates Without Shortchanging Any of Your Children'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Jamie Gaddy, Ph.D. (Homeschool.com)',
              name: 'High School Myth Busters'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Christy Jones, Ph.D. (Logic of English) ',
              name: 'Soaring Not Struggling: Preventing and Teaching Struggling Readers and Spellers'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Sean Allen (Character Badges) ',
              name: 'Yelling is Lazy: Practical Thoughts on How to Draw Obedience Out of Your Children Without Raising Your Voice'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Addy Kinser  ( Advanced Brain Technologies) ',
              name: 'When Listening Comes Alive. A Guide to Effective Learning and Living '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Michael Clay Thompson ( Royal Fireworks Press) ',
              name: 'Teaching Your Child to Understand and Love Poetry'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Rita Cevasco (Rooted in Language)',
              name: 'The Struggling Learner'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Doug Smith (D&L Smith Solutions)',
              name: 'Screens & Kids: A Counter-Cultural Path'
            }]
          },
          {
            time: '1 - 2 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Pam Barnhill (Raising Lifelong Learners)',
              name: 'Leaders Don\'t Eat Their Young: How to Take Charge of Your Homeschool Without Sacrificing Relationships'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Pudewa, Perrin, Cothran, D. Kern, Reynolds, Swope',
              name: 'Classical Panel - Classical Education Unhinged!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Gary Bates (Creation Ministries) ',
              name: 'Who Made God?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Jean Burk (College Prep Genius) ',
              name: 'The Best Kept Secret to Free College: The PSAT'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Kristen Eckenwiler (The Struggling Reader) ',
              name: 'Strategies To Teach Beginning and Struggling Readers'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Adam Andrews with Ian Andrews (CenterForLit.com) ',
              name: 'Failure and Fatherhood - The Story of a Homeschool Family Feud'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Jennifer Trafton, Helena Sorensen, Jonathan Rogers (Rabbit Room on the Road) ',
              name: 'Finding Your Voice: Overcoming Barriers to Creativity'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Richard Cowdrey (Zonderkidz) ',
              name: 'Christians in Art'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Rachel Anderson (RightStart Mathematics by Activities for Learning, Inc.)',
              name: 'Teaching Math With Card Games? Yes, You Can!'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Joshua Brahm (Equal Rights Institute) ',
              name: 'Understanding and Responding to \'My Body, My Choice\''
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Kathi Lipp (Kathi Lipps\' Clutter Free Academy) ',
              name: 'Overwhelmed _ When You Don\'t Even Know Where to Start'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Kathie Morrissey (Character Corner) ',
              name: '10 Things Every Homeschooler Must Remember'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Andrew Phipps (Andrew Phipps Ministries) ',
              name: 'Freedom'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Jeffrey Mays (Novare Science and Math) ',
              name: 'When Homeschooling is Academic Triage: How I Rescued My High School Son After Years of Academic Failure'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Donnie Rosie (Miracle Mountain Ranch) ',
              name: 'Starting Your Own Photography or Videography Business'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Marlin Detweiler  (Veritas Press) ',
              name: 'The Value and Benefits of a Classical Education From a Christian Worldview'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Gina Burmeier (Rainbow Resources) ',
              name: 'Counting to Calculus: The Importance of a Strong Foundation in Elementary Math'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Karen Hopkins (Growing Healthy Homes) ',
              name: 'Healthy Brain in a Toxic World'
            }]
          },
          {
            time: '2:30 - 3:30 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Sarah Mackenzie (Read-Aloud Revival) ',
              name: 'Loving Your Life as a Homeschooling Mom (You\'re Better at This Than You Think!)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Dr. Jeff Myers (Summit Ministries) ',
              name: 'Growing Wiser: Preparing Kids to be Wise in the Age of \'Duh\''
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Dr. Jay Wile (Berean Builders Science) ',
              name: 'Building a Biblical Worldview'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Andrew Pudewa (Institute for Excellence in Writing (IEW))',
              name: 'By Heart: The Goodness of Memory'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'John De Gree (Classical Historian) ',
              name: 'Constitution & History Bee w/ Game Show Host - John De Gree (Sign up to compete - Grades 3 - 12 - ClassicalHistorian.com)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Ashley Wiggers (GeoMatters) ',
              name: 'Developmental Education: Building a Foundation for Lifelong Learning'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Sam Black (Covenant Eyes Internet Accountability) ',
              name: 'Becoming a Tech Confident Parent'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Connie Albers (Tyndale House Publishers / NavPress)',
              name: 'How to Create a No Fail Schedule'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Beth Ellen Nash (Wings to Soar Online Academy)',
              name: 'Spelling Tips and Multisensory Strategies for Memorizing Spelling Words'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Nathan Schreiber (Science Ninjas) ',
              name: 'Ninja Science: Using Stories, Images, and Games to Teach STEM'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Gretchen Roe (Demme Learning / Math-U-See) ',
              name: 'The Secret to Why Your Student Struggles in Math'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Dale Gamache (La Clase Divertida (The FUN Class!))',
              name: 'Online Courses: How to Choose a Program AND Be Successful As Well'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Brandy Gleason (Gordon\'s Discount)',
              name: 'Rebellion in the House'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 236',
              speaker: 'Antoinette LaGrossa (ShillerLearning: Montessori at Home)',
              name: 'How to Avoid the 5 Mistakes Most People Make When Teaching Math to 3 to 13 Yo\'s'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 233',
              speaker: 'Mark Pruitt (Making the Grade - Study Skills Course)',
              name: 'College 101'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 252',
              speaker: 'Tim Shoemaker (Tim Shoemaker, Author, Speaker)',
              name: 'Why Dad\'s Resist Teaching Kids Spiritual Truth...and How You Can Help'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 250',
              speaker: 'Pat Wesolowski (Bryan College) ',
              name: 'Preparing Your Teen for College (It\'s Easier Thank You Might Think) '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 234',
              speaker: 'Thomas Toney (KUEST Student Leadership) ',
              name: 'If You Knew ( You Would NOT Miss This Talk!) What You do Now Matters More Than You Can Imagine, and We\'ll Show You How'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 235',
              speaker: 'Janet Newberry (Janet Newberry Educational Consulting, LLC) ',
              name: 'What if \'Struggle\' Isn\'t the \'S-Word?\' Real Hope For Growing Up In a \'Measure Up\' World'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 251',
              speaker: 'Patricia Blackmer (Trick Geography) ',
              name: 'Trick Geography: Passport to Fun'
            }]
          },
          {
            time: '4 - 5 PM',
            courses: [{
              selected: false,
              selectable: true,
              location: 'Ballroom B',
              speaker: 'Janice Campbell (Everyday Education) ',
              name: 'How to Homeschool High School (Key: It\'s an Education, Not a Rat Race)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Ballroom A',
              speaker: 'Kathy Koch, Ph.D. (Celebrate Kids) ',
              name: 'Compliment and Correct to Powerfully Encourage Your Children'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 200 - 205',
              speaker: 'Massey Campos (Self-Evident Ministry) ',
              name: 'The Constitution & Bill of Rights - The Real History'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom AB',
              speaker: 'Christopher Perrin, Ph.D. (Classical Academic Press) ',
              name: 'The Seven Liberal Arts: Liberty and Justice for All'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom D',
              speaker: 'Cheryl Swope (Cheryl Swope, M.Ed., Simply Classical) ',
              name: 'Sweet Spot: Evaluating and Teaching Any Child'
            },
            {
              selected: false,
              selectable: true,
              location: 'Jr. Ballroom C',
              speaker: 'Jean Burk (College Prep Genius) ',
              name: 'Secrets to the Scholarship Search '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 206',
              speaker: 'Steve Demme (Building Faith Families / Demme Learning) ',
              name: 'Walking With a Limp, Embracing Brokenness'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 263 - 264',
              speaker: 'Aaron Marks (Liberty University) ',
              name: 'Why Aren\'t You Earning College Credit in High School?'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 260 - 262',
              speaker: 'Carol Reynolds, Ph.D. (Professor Carol) ',
              name: 'Why Freshman Fail, and How to Avoid It'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 230 - 231',
              speaker: 'Misti Lacy (WriteShop) ',
              name: '\'Writing\' Without Writing'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 207 - 208',
              speaker: 'Doug Smith (D&L Smith Solutions)',
              name: 'Screens & Kids: A Counter-Cultural Path'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 237 - 238',
              speaker: 'Tom Clark (Video Text Interactive Math) ',
              name: 'Simplifying Algebra for the Hesitant Learner (When Are We Going to Need This Stuff Anyway?)'
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 211',
              speaker: 'Maggie Hamilton w/ Amanda Warden (Classical Conversations) ',
              name: 'The Blessing of Community: Why Community Matters in Homeschooling '
            },
            {
              selected: false,
              selectable: true,
              location: 'Duke 212',
              speaker: 'Seth Iorg (SimplySTEM.com) ',
              name: 'From Gamers to Coders!'
            }]
          }, {
            time: '6 PM',
            courses: [
              {
                selectable: false,
                location: 'Ballroom B',
                name: 'Grand Finale',
                speaker: 'Douglas Gresham'
              }
            ]
          }, {
            time: '6 PM',
            courses: [
              {
                selectable: false,
                location: 'Exhibit Hall Closes & Registration Desk Closes'
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    updateSelected (state, payload) {
      const courseSelected = state.startSchedule[payload.day].courseTimes[payload.time].courses[payload.course]
      courseSelected.selected = !courseSelected.selected
    },
    updateSchedule (state, payload) {
      state.startSchedule = payload.schedule
    }
  },
  actions: {

  }
})
