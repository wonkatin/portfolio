import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="container">
                <Head>
                    <title>Sarah Marie Coogan</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="container secondary" id="home">
                    <div id="name-blast">Sarah Marie Coogan</div>
                    <p className="job-title">Software Engineer</p>
                    <div className="hello-world">
                    As a Chicago based, Full-Stack Software Engineer, I am a curious puzzle solver 
                    with a diverse background in Philosophy, Visual Arts, and Team Management. 
                    As a lifelong learner, I consider myself a versatile generalist with strong critical 
                    thinking and communication skills. My superpower is crafting direct relatable ways to 
                    communicate complex concepts across disciplines. Currently, I am seeking opportunities 
                    where I can apply my skills towards information design and build reusable, 
                    data-driven solutions to human problems. 
                    </div>
                    <h1 id="skillz-header">Tech Skills</h1>
                    <div className="skillz">
                        <span className="skill">JavaScript</span>
                        <span className="skill">React.js</span>
                        <span className="skill">CSS</span>
                        <span className="skill">HTML5</span>
                        <span className="skill">D3.js</span>
                        <span className="skill">Node.js</span>
                        <span className="skill">Express.js</span>
                        <span className="skill">SQL</span>
                        
                        <span className="skill">PostgreSQL</span>
                        <span className="skill">Sequelize</span>
                        <span className="skill">MongoDB</span>
                        <span className="skill">Mongoose</span>
                        <span className="skill">Axios</span>
                        <span className="skill">Next.js</span>
                        <span className="skill">EJS</span>
                        
                        <span className="skill">Python</span>
                        <span className="skill">Typescript</span>
                        <span className="skill">Bootstrap</span>
                        <span className="skill">Skeleton</span>
                        <span className="skill">Heroku</span>
                        <span className="skill">Git</span>
                        <span className="skill">GitHub</span>
                    </div>
                </div>
                {/* <div className="container secondary" >
                    <h1>Tech Skills</h1>
                    <div>
                        D3.js, Javascript, React.js, HTML, CSS, 
                        Bootstrap, Skeleton, Node.js, Express.js, Python, 
                        SQL, PostgreSQL, Sequelize, MongoDB, Mongoose, Heroku, Git, GitHub

                    </div>
                </div> */}

                {/* <div className="container secondary" id="skillz">
                    <h1>Skills</h1>
                </div> */}
                <div className="container secondary" id="projects">
                    <h1>Projects</h1>
                    <div className="content">
                        <div className="img">
                            <h2 className="project-name">Spirographer</h2>
                            <Image
                                loading="eager"
                                className="pic"
                                src='/spirographer.png'
                                alt='a picture of Spirographer app, a spirograph generator'
                                height="1080"
                                width="1920"
                            />
                        </div>
                        <div className="project-details">
                            <div className="links">
                                <div className="link">
                                    <Link href='https://wonkatin.github.io/spirographer/'>
                                        <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </Link> 
                                </div>
                                <div className="link">
                                    <Link href='https://github.com/wonkatin/spirographer'>
                                        <a target="_blank" rel="noopener noreferrer">View Code</a>
                                    </Link> 
                                </div>
                            </div>
                            <div className="description">
                                Spirographer is a spirograph generator made using D3.js to plot 
                                and animate the parametric equation of a spirograph. 
                                Users can watch a slideshow of random spirographs or use the 
                                inputs to make their own. There are many ways to manipulate and play with 
                                the Spirographer: change colors, add layers and download your creation! 
                            </div>
                            <div className="tech">
                                Front-end application built using D3.js, Javascript, HTML, CSS and Skeleton
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="img">
                            <h2 className="project-name">Mastermind</h2>
                            <Image
                                loading="eager"
                                className="pic"
                                src='/mastermind.png'
                                alt='a picture of Mastermind, a game that uses logical deduction'
                                height="1080"
                                width="1920"
                            />
                        </div>
                        <div className="project-details">
                            <div className="links">
                                <div className="link">
                                    <Link href='https://wonkatin.github.io/'>
                                        <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </Link> 
                                </div>
                                <div className="link">
                                    <Link href='https://github.com/wonkatin/Master-Mind-Project1'>
                                        <a target="_blank" rel="noopener noreferrer">View Code</a>
                                    </Link> 
                                </div>
                            </div>
                            <div className="description">
                                Mastermind is a deductive reasoning game. The player???s task is to guess the secret code using logical deduction. 
                                The game is played by selecting colors and checking them against the secret code. 
                                Each time a player guesses, they are given feedback about their combination. 
                            </div>
                            <div className="tech">
                                Front-end application built using, Javascript, HTML, and CSS 
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="img">
                            <h2 className="project-name">Kitchen Sink</h2>
                            <Image
                                loading="eager"
                                className="pic"
                                src='/kitchen_sink.png'
                                alt='a picture of Kitchen Sink app, an app that searches for recipes'
                                height="1080"
                                width="1920"
                            />
                        </div>
                        <div className="project-details">
                            <div className="links">
                                <div className="link">
                                    <Link href='https://kitchen-sink-project-two.herokuapp.com/'>
                                        <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </Link> 
                                </div>
                                <div className="link">
                                    <Link href='https://github.com/wonkatin/project2'>
                                        <a target="_blank" rel="noopener noreferrer">View Code</a>
                                    </Link> 
                                </div>
                            </div>
                            <div className="description">
                                Kitchen Sink is a recipe search app designed to allow users to search for recipes 
                                using specific ingredients and adding limits on number of ingredients a recipe result can contain. 
                                Additionally, users can save recipes to their favorites and 
                                leave reviews with ratings and comments. Recipes that have been reviewed 
                                appear on the homepage for other users to peruse and try. 
                            </div>
                            <div className="tech">
                                Full stack application built using Javascript, EJS, Node.js, Express, PostgreSQL, SQL/Sequelize, Axios and CSS
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="img">
                            <h2 className="project-name">Trip Tracker</h2>
                            <Image
                                loading="eager"
                                className="pic"
                                src='/trip_tracker.png'
                                alt='a picture of Trip Tracker app'
                                height="1080"
                                width="1920"
                            />
                        </div>
                        <div className="project-details">
                            <div className="links">
                                <div className="link">
                                    <Link href='https://trip-tracker-whatever.netlify.app/'>
                                        <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </Link> 
                                </div>
                                <div className="link">
                                    <Link href='https://github.com/wonkatin/project3_client'>
                                        <a target="_blank" rel="noopener noreferrer">View Code</a>
                                    </Link> 
                                </div>
                            </div>
                            <div className="description">
                                Trip Tracker is an app designed to help users stay organized while traveling. 
                                Through TT, users are able to create a profile and save information about different 
                                trips that they are planning. Each trip includes all the tools necessary to stay organized, 
                                think ahead and find information relevant to their travel needs.  
                            </div>
                            <div className="tech">
                                Full stack application built using Javascript, React.js, Node.js, Express, Mongo/Mongoose, Axios and CSS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container secondary" id="contact">
                    <h1>Contact Me!</h1>
                    <div className="content">
                        <div className="me">
                            <Image
                                loading="eager"
                                src='/sarah.png'
                                alt='a picture of Sarah Marie Coogan'
                                height={300}
                                width={300}
                            />
                        </div>
                        <div className="deets">
                            <ul>
                                <div className="bumper email">
                                    E-MAIL: SarahMarieCoogan@gmail.com
                                </div>
                                <div className="bumper">
                                    <Link href='https://github.com/wonkatin'>
                                        <a target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </Link> 
                                </div>
                                <div className="bumper">
                                    <Link href='https://www.linkedin.com/in/sarahmariecoogan/'>
                                        <a target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </Link>
                                </div>
                                <div className="bumper">
                                    <Link href='https://docs.google.com/document/d/1dZbu0Wkv6B0CnJ_sa5j4cICLQsPSwV_g/edit?usp=sharing&ouid=104952848798133803158&rtpof=true&sd=true'>
                                        <a target="_blank" rel="noopener noreferrer">Resume</a>
                                    </Link>
                                </div>
                                {/* <div className="bumper">
                                    <Link href='https://codepen.io/wonkatin'>
                                        <a target="_blank" rel="noopener noreferrer">Code Pen</a>
                                    </Link>
                                </div> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
