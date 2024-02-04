import Adam from "../assets/Profiles/ADAM.png";
import BENNIE from "../assets/Profiles/BENNIE.png";
import GRAHAM from "../assets/Profiles/GRAHAM.jpg";
import JOSE from "../assets/Profiles/JOSE.jpg";
import REMI from "../assets/Profiles/REMI.jpg";
import RYAN from "../assets/Profiles/RYAN.jpg";
import SEAN from "../assets/Profiles/SEAN.png";

const teamMembersData = [
  {
    image: REMI,
    name: "Remi Crespo",
    role: "Creative Director",
    experience:
      "15 years experience in production, ranging from AAA studios (Liquid Development, Microsoft) to independent teams. He has since taken all his collective knowledge and poured it into his own company, TideTurners, with a focus in games and film. His previous roles include: Producer, Technical Artist, World Artist, & Level Designer.",
    funFact: "> does not sleep",
  },
  {
    image: JOSE,
    name: "Jose Montanez",
    role: "Production Manager",
    experience:
      "With 16 years of project management expertise in the dynamic video game industry, Jose’s focus has primarily revolved around AAA titles. His keen proficiency has been observed in multiple areas, including Level Design and Systems Design. Jose’s previous roles include serving as Production Manager for Liquid Development, a Keywords Studio.",
    funFact: "> his mom says he has a great smile",
  },
  {
    image: GRAHAM,
    name: "Graham Leeb",
    role: "Development Manager",
    experience:
      "Having previously worked in Mobile development, Serious Games, Government Simulation, AAA & Indie titles, Graham has amassed 15+ of experience in development. He specializes in Unreal development, and project architecture.",
    funFact: "> has cool hair",
  },
  {
    image: RYAN,
    name: "Ryan Waller",
    role: "Business Relations",
    experience:
      "Ryan stands as a luminary in the entrepreneurial and investment domains, boasting over 15 years of unmatched expertise, primarily rooted in the gaming sector. As the pioneering force behind Forthright Entertainment, a high-end quality boutique publishing entity synonymous with curating top-tier indie titles for PC and consoles, Ryan's unparalleled insights into the nuanced business of the gaming realm have solidified his place as a sought-after advisor among the industry's premier independent studios.",
    funFact: "> super duper awesome",
  },
  {
    image: BENNIE,
    name: "Bennie Herdy",
    role: "Art Director",
    experience:
      "Bennie is the creative visionary of our team who leads the development and visualization of our projects, setting the artistic direction and ensuring conceptual integrity. They are meticulous in their work, coming from an artistically diverse background with experience in many different mediums of art. They specialize in Concept Art, UI Design, and Illustrations.",
    funFact: "> still feeds their neopets",
  },
  {
    image: Adam,
    name: "Adam Stagg",
    role: "Lead Programmer",
    experience:
      "Adam is a passionate and dedicated individual who embarked on a journey into the world of programming in 2015. With an unwavering love for the craft, Adam discovered their passion for coding through the immersive world of games, which captivated them during their formative years. In September 2022, Adam graduated from Full Sail University, equipped with a solid foundation and a wealth of knowledge in the field. Since then, they have seamlessly transitioned into the professional realm, where their enthusiasm for programming continues to flourish. Adam finds joy and fulfillment in every line of code, turning their childhood fascination with games into a lifelong commitment to creating innovative and impactful software solutions.",
    funFact: "> thinks Neuralink is neat",
  },
  {
    image: SEAN,
    name: "Sean Lockhart",
    role: "Lead Level Designer",
    experience:
      "Sean is the silly guy behind the design and creation of our gameplay systems, and is responsible for turning said systems he creates into engaging gameplay loops. Seeing the players having fun with the things he creates is what continues to drive his passion for making games. After spending some time working outside of the creative industries, Sean realized his true calling was creating fun play spaces where others can have memorable experiences with their most cherished friends and family.",
    funFact: "> enjoys getting into character",
  },
];


// Navigation Links For HMR Page Navbar

const TTmenuItems = [
  { text: 'Games', link: '#' },
  { text: 'Team', link: '#' },
  { text: 'Contact', link: '#' }
]


const HMRmenuItems = [
  { text: 'WishList', link: 'https://store.steampowered.com/app/2209340/Have_You_Herd/' },
  { text: 'Features', link: '#features' }, // Replace with the actual link
  { text: 'Connect', link: '#connect' }    // Replace with the actual link
];

export { teamMembersData , HMRmenuItems, TTmenuItems };
