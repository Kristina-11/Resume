import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import WorkDetails from "../reusable/WorkDetails";
import { containerVariants } from "../Variants";

const Experience = () => {
    const { lang } = useContext(LanguageContext);
    
    const [ experience ] = useState({
        titleExperience: 'Experience',
        titleEducation: 'Education',
        titlePlans: 'Plans for the future',
        titleCourses: 'Courses:',
        titleBooks: 'Books to read:',
        titleProgress: 'In progress',
        experience: [{ 
            date: '2020', 
            title: 'Freelance Web Developer', 
            company: '', 
            details: 'Solved problems per client that mainly consisted of:',
            detailsList: ['Making websites', 'Bugs in applications', 'Administration of servers', 'Implementing new features']
        }, {
            date: '2019 - 2020', 
            title: 'Fullstack Web Developer', 
            company: 'ProfitOptics', 
            details: '',
            detailsList: ['Worked on developing apps for solving business problems. In order for customers to understand, gather, organize and optimize their data.', 'Worked with JavaScript, JQuery, Ajax, .NET MVC, .NET Core, LINQ, SQL.', 'Applied agile methods with SCRUM for keeping track of a progress', 'Used Jira and Bitbucket for remote work and task tracking']
        }],
        education: [{
            facility: 'ICT COLLEGE OF APPLIED STUDIES',
            course: 'Internet Technologies',
            years: '2016'
        }, {
            facility: 'ELECTRICAL ENGINEERING HIGH SCHOOL “NIKOLA TESLA”, BELGRADE',
            course: 'Multimedia technician',
            years: '2006 - 2010'
        }],
        future: {
            courses: ['Next.js'],
            books: ['Clean Architecture by Robert C. Martin']
        },
        progress: ['Node.js', 'TypeScript']
    });

    const [ iskustvo ] = useState({
        titleExperience: 'Iskustvo',
        titleEducation: 'Edukacija',
        titlePlans: 'Planovi za budućnost',
        titleCourses: 'Kursevi:',
        titleBooks: 'Knjige:',
        titleProgress: 'Trenutno radim',
        experience: [{ 
            date: '2020', 
            title: 'Freelance Web Developer', 
            company: '', 
            details: 'Rešila raličite probleme u skladu sa potrebama klijenata koji se mogu svrstati u sledeće kategorije:',
            detailsList: ['Pravljenje website prezentacija', 'Rešavanje bagova u postojećim aplikacijama', 'Administriranje servera', 'Implementacija novih svojstva']
        }, {
            date: '2019 - 2020', 
            title: 'Fullstack Web Developer', 
            company: 'ProfitOptics', 
            details: '',
            detailsList: ['Radila na razvoju aplikacija za rešavanje poslovnih problema. Postigli bolje razumevanje, brzinu prikupljanja, organizaciju i optimizaciju podataka.', 'Radila sa tehnologijama: JavaScript, JQuery, Ajax, .NET MVC, .NET Core, LINQ, SQL.', 'Primenjene agilne metode sa SCRUM-om za praćenje razvoja aplikacije.', 'Koristila Jira i Bitbucket za rad na daljinu, kreiranja i praćenje taskova.']
        }],
        education: [{
            facility: 'Visoka škola informacionih i komunikacionih tehnologija',
            course: 'Internet Tehnologije',
            years: '2016'
        }, {
            facility: 'Elektrotehnička škola “NIKOLA TESLA”, Beograd',
            course: 'Tehničar Multimedije',
            years: '2006 - 2010'
        }],
        future: {
            courses: ['Next.js', 'TypeScript'],
            books: ['Čista Arhitektura - Robert C. Martin']
        },
        progress: ['Node.js']
    });

    return ( 
        <motion.div className="exp-container" variants={containerVariants}
            initial="hidden"
            animate="visible">
            {
                lang === 'en' ? 
                <WorkDetails props={experience} /> :
                <WorkDetails props={iskustvo} />
            }
        </motion.div>
     );
}
 
export default Experience;