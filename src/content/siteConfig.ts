export const siteConfig = {
  name:'Jacob Beeson', initials:'JB', role:'Molecular Bioengineer & Experimental Developer',
  introduction:'I’m Jacob, a  bioengineer and experimental developer. The Devine Devine is my evolving space for sharing the research, prototypes and artistic endevours. I like to build things.',
  location:'London / Dresden', email:'jakebees00@gmail.com', githubUrl:'https://github.com/jjbees99', linkedinUrl:'https://www.linkedin.com/in/jacob-beeson-5a1a69238/', cvUrl:`${import.meta.env.BASE_URL}resume/Jacob%20Beeson%20CV.pdf`,
  availableForWork:'Open to research, engineering and experimental collaborations.', footerText:'Prototypes · Software · Art', copyrightYear:2026,
  deployedUrl:'https://jjbees99.github.io/',
  navigation:[{label:'Home',to:'/'},{label:'Projects',to:'/projects'},{label:'Videos',to:'/videos'},{label:'About',to:'/about'},{label:'Contact',to:'/contact'}],
  accents:{cream:'#f4f0e4',black:'#080808',lilac:'#d8c1ef',orange:'#ffae82'}
} as const;
