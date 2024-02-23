import Project1 from "../../assets/project1.webp";
import Project3 from "../../assets/project3.webp";
import PortfolioImage from "../../assets/portfolioImage.png";


export const projectsData = [
    {
        id: 1,
        image: PortfolioImage,
        title: "Portfolio Website",
        category: "AWS",
        link: "https://github.com/prakash-cmd/portfolio",
        data: {
            date: 'February 2024',
            details: [
                "Developed a sleek and responsive portfolio website using ReactJS, EmailJs, and CSS.",
                "Integrated Swiper to create smooth sliding components, enhancing user experience and engagement.",
                "Implemented EmailJS for seamless contact services, allowing users to easily reach out and connect.",
                "Leveraged AWS Route53, CloudFront, and S3 bucket for reliable deployment, ensuring optimal performance, scalability, and minimal latency for an enhanced user experience."
            ]
        }
    },
    {
        id: 2,
        image: Project1,
        title: "Multiple Disease Detection using ML",
        category: "Misc",
        link: "https://github.com/prakash-cmd/multiple_disease_detection",
        data: {
            date: 'May 2023',
            details: [
                "Developed a user-friendly web app for Disease Prediction with high accuracy in predicting Diabetes (91%), Heart Disease(88%), and Parkinson’s Disease (89%).",
                "Trained separate models using Logistic Regression for Heart Disease prediction and Support Vector Machines (SVM) forParkinson’s and Diabetes predictions."
            ]
        }
    },
    {
        id: 3,
        image: Project3,
        title: "Messaging iOS App",
        category: "iOS",
        link: "https://github.com/prakash-cmd/FlashChat",
        data: {
            date: 'June 2021',
            details: [
                "A messaging app for iOS using Firebase Firestore as a backend database to store and retrieve messages from the cloud.",
                "Implemented Firebase Authentication to provide secure user authentication and authorization features.",
                "Leveraged Cocoapods to efficiently manage and integrate essential libraries and dependencies."
            ]
        },
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "AWS",
    },
    {
        name: "iOS",
    },
    {
        name: "Misc",
    },
];