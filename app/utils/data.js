import { aboutimage, aboutus, insylink,img5_ } from "../../public";
import { FaLinkedin,FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";


export const services = [
  {
    name: 'Mobile Apps',
    description:
      'Crafting innovative mobile applications tailored to your needs. From iOS to Android, we bring your ideas to life on every platform.',
    icon: '',
    url:'',
  },
  {
    name: 'Web Apps',
    description:
      'Building robust web applications that engage users and drive results. Our solutions are scalable, secure, and user-friendly.',
    icon: '',
    url:'',
  },
  {
    name: 'Graphic Design',
    description:
      'Designing captivating visuals that communicate your brand message effectively. From logos to marketing materials, we make your brand stand out.',
    icon: '',
    url:'',
  },
  {
    name: 'Branding',
    description:
      'Creating unique brand identities that resonate with your audience. We develop comprehensive branding strategies to elevate your business.',
    icon: '',
    url:'',
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
      description: "Hakbus is an online platform that allows users to conveniently book bus tickets from the comfort of their homes. Experience seamless ticket booking and travel planning through this user-friendly website.",
      image: '/img5_.jpg',
      tech:['Web Design','Development','Mobile App']
  },
  {
      name: "Insylink",
      url: "/work/insylink",
      description: "Insylink is a point-of-sale (POS) system designed specifically for restaurants, streamlining operations and enhancing customer service. Manage orders, track inventory, and analyze sales data efficiently with this versatile solution.",
      image: '/img4_.jpg',
      tech:['Branding','Web Design','Development','Mobile App']
  },
  {
      name: "Lans-Gr",
      url: "/work/lans-gr",
      description: "Lans-Gr specializes in crafting high-quality shutters for homes and businesses. Our website showcases our extensive range of shutter options, allowing customers to find the perfect fit for their spaces with ease.",
      image: '/lansmockup.jpg',
      tech:['Branding','Web Design','Development']
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

