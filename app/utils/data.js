import { aboutimage, aboutus, insylink,img5_ } from "../../public";
import { FaLinkedin,FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export const pricingPlans = [
  {
    price:'1200',
    name:'Starter',
    description:'Simple, low complexity.',
    features:['Up to 7 screens (flexible)','iOS or Android','1 month development time','Play store/App store optimization (ASO)','Database (Price may vary)']
  },
  {
    price:'3350',
    name:'Professional',
    description:'Advanced, relatively complex.',
    features:['Up to 7 screens (flexible)','iOS or Android','1 month development time','Play store/App store optimization (ASO)','Database (Price may vary)']
  },
  {
    price:'???',
    name:'Custom',
    description:'You say it, we do it. Tailored for you.',
    features:['Any amount of screens','iOS and/or Android','As much as needed','Play store/App store optimization (ASO)','Database (Price may vary)','Free support and maintenance for the first year.','Anything else you need or want we can do.']
  },
]


export const sidebarLinks = [
  {
    name: 'Mobile Apps',
    url:'#mobile-apps',
  },
  {
    name: 'Platforms',
    url:'#platforms',
  },
  {
    name: 'The process',
    url:'#the-process',
  },
  {
    name: 'Prices',
    url:'#prices',
  },
  {
    name: 'What else?',
    url:'#what-else',
  },
  {
    name: 'Contact',
    url:'#contact',
  },
];

export const mobilePlatforms = [
  {
    name: 'iOS apps',
    desc:'We excel in iOS app development, meticulously crafting customized solutions to perfectly meet your unique needs and business goals.',
    icon:'/appleIcon.svg',
  },
  {
    name: 'Android Apps',
    desc:`We're experts in Android app development, meticulously tailoring innovative solutions for your business's long-term success and growth.`,
    icon:'/androidIcon.svg',
  },
  {
    name: 'Cross Platform',
    desc:'If needed, we can ensure the app functions seamlessly across all platforms, catering to your diverse user base with ease and efficiency.',
    icon:'/crossPlatformIcon.svg',
  },
];

export const services = [
  {
    name: 'Mobile Apps',
    description:
      'Crafting innovative mobile applications tailored to your needs. From iOS to Android, we bring your ideas to life on every platform.',
    icon: '/mobileServiceBG.svg',
    url:'/services/mobile-apps',
  },
  {
    name: 'Web Apps',
    description:
      'Building robust web applications that engage users and drive results. Our solutions are scalable, secure, and user-friendly.',
    icon: '/webServiceBG.svg',
    url:'/services/web-apps',
  },
  {
    name: 'Graphic Design',
    description:
      'Designing captivating visuals that communicate your brand message effectively. From logos to marketing materials, we make your brand stand out.',
    icon: 'graphicDesignBG.svg',
    url:'/services/graphic-design',
  },
  {
    name: 'Branding',
    description:
      'Creating unique brand identities that resonate with your audience. We develop comprehensive branding strategies to elevate your business.',
    icon: 'brandingBG.svg',
    url:'/services/branding',
  },
];


export const achievemnts = [
  {
    title:'$50,200+',
    desc:'Working with big clients'
  },
  {
    title:'99%',
    desc:'Trusted by clients'
  },
  {
    title:'5+',
    desc:'Years of experience'
  },
  {
    title:'10+',
    desc:'Projects completed'
  }
]

export const projects = [
  {
      name: "Hak Bus",
      url: "/work/hakbus",
      // url:'https://www.hakbus.net',
      description: "Hakbus is an online platform that allows users to conveniently book bus tickets from the comfort of their homes. Experience seamless ticket booking and travel planning through this user-friendly website.",
      image: '/hakbusbg.webp',
      tech:['Web Design','Development','Mobile App']
  },
  {
      name: "Insylink",
      url: "/work/insylink",
      // url:'https://www.insylink.com',
      description: "Insylink is a point-of-sale (POS) system designed specifically for restaurants, streamlining operations and enhancing customer service. Manage orders, track inventory, and analyze sales data efficiently with this versatile solution.",
      image: '/insylinkbg.webp',
      tech:['Branding','Web Design','Development','Mobile App']
  },
  {
      name: "Lans-Gr",
      url: "/work/lans",
      // url:'https://www.lans-gr.com',
      description: "Lans-Gr specializes in crafting high-quality shutters for homes and businesses. Our website showcases our extensive range of shutter options, allowing customers to find the perfect fit for their spaces with ease.",
      image: '/lansbg.webp',
      tech:['Branding','Web Design','Development']
  },
]

export const projectTemplates = [
  {
      name: "Hak Bus",
      url: "/work/hakbus",
      website:'https://www.hakbus.net',
      aboutTitle: "Hakbus is an innovative project aimed at revolutionizing transportation.",
      aboutDesc: "Through meticulous UI/UX design, we've created an intuitive platform for Hakbus users. By focusing on user needs and behaviors, we've optimized every aspect of the journey, ensuring seamless booking and efficient route suggestions. Our user-centric approach sets a new standard for transportation services.",
      missionTitle: "Hakbus's mission is to redefine the transportation experience.",
      missionDesc: "We are dedicated to providing sustainable, efficient, and accessible transportation solutions. Through innovation and collaboration, we aim to create a future where commuting is seamless, enjoyable, and environmentally friendly. Our commitment to excellence drives us to continuously improve and adapt to meet the evolving needs of our passengers and communities.",
      image: '/hakbusimage.webp',
      tabletImage:'/hakbustablet.png',
      phoneImage:'/hakbusphone.png',
      imageCollection:'/hakbuscollection.png',
      year:'2022',
      expertise:'UI/UX Design, Development',
  },
  {
      name: "Insylink",
      url: "/work/insylink",
      website:'https://www.insylink.com',
      aboutTitle: "Insylink - Streamlining Restaurant Operations",
      aboutDesc: "Insylink is a point-of-sale (POS) system designed specifically for restaurants, streamlining operations and enhancing customer service. Manage orders, track inventory, and analyze sales data efficiently with this versatile solution.",
      missionTitle: "Empowering Restaurants with Efficient POS Solutions",
      missionDesc: "Insylink is committed to providing restaurants with powerful POS solutions that enhance efficiency and customer satisfaction. Our mission is to streamline restaurant operations, from order management to inventory tracking, enabling businesses to thrive in a competitive industry.",
      image: '/insylinkimage.webp',
      tabletImage:'/insylinktablet.png',
      phoneImage:'/insylinkphone.png',
      imageCollection:'/insylinkcollection.png',
      year:'2022',
      expertise:'UI/UX Design, Development',
  },
  {
      name: "Lans-Gr",
      url: "/work/lans-gr",
      website:'https://www.lans-gr.com',
      aboutTitle: "LansGr - Crafting High-Quality Shutters",
      aboutDesc: "Lans-Gr specializes in crafting high-quality shutters for homes and businesses. Our website showcases our extensive range of shutter options, allowing customers to find the perfect fit for their spaces with ease.",
      missionTitle: "Providing Premium Shutter Solutions",
      missionDesc: "At Lans-Gr, our mission is to provide premium shutter solutions for homes and businesses. With a focus on quality craftsmanship and customer satisfaction, we strive to exceed expectations and enhance the aesthetic appeal and functionality of every space.",
      image: '/lansimage.webp',
      tabletImage:'/lanstablet.png',
      phoneImage:'/lansphone.png',
      imageCollection:'/lanscollection.png',
      year:'2022',
      expertise:'UI/UX Design, Development',
  },
]


export const socialMediaNavbar = [
  {
    title: 'Facebook',
    icon: <GoArrowUpRight size={20} color="white"/>,
    url: "https://www.facebook.com/insyllium",
  },
  {
    title: 'Instagram',
    icon: <GoArrowUpRight size={20} color="white"/>,
    url: "https://www.instagram.com/insyllium",
  },
  {
    title: 'Twitter',
    icon: <GoArrowUpRight size={20} color="white"/>,
    url: "https://www.twitter.com/insyllium",
  },
  {
    title: 'LinkedIn',
    icon: <GoArrowUpRight size={20} color="white"/>,
    url: "https://www.linkedin.com/company/97935419",
  },
]

export const socialMedia = [
    {
      id: "social-media-1",
      icon: <FaInstagram color="white" size={25}/>,
      link: "https://www.instagram.com/insyllium",
    },
    {
      id: "social-media-2",
      icon: <FaFacebook color="white" size={25}/>,
      link: "https://www.facebook.com/insyllium",
    },
    {
      id: "social-media-3",
      icon: <FaTwitter color="white" size={25}/>,
      link: "https://www.twitter.com/insyllium",
    },
    {
      id: "social-media-4",
      icon: <FaLinkedin color="white" size={25}/>,
      link: "https://www.linkedin.com/company/97935419",
    },
  ];

  
export const footerLinks = [
    {
      title: "Services",
      links: [
        {
          name: "Software Development",
          link: "software-development",
        },
        {
          name: "Graphic Design",
          link: "graphic-design",
        },
        {
          name: "AI Applications",
          link: "ai-applications",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];

